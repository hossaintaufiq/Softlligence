"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Section-level 3D backgrounds that follow the hero pattern
 * (HomeHero3D): wireframe geometry + glowing nodes + additive particles,
 * theme-aware, pointer parallax, reduced-motion aware, and pause-when-offscreen.
 *
 * Unlike the hero, the WebGL context is only created while the section is
 * near the viewport and is released when it scrolls far away, so the home
 * page never holds more than a couple of live contexts.
 *
 * Variants
 *  - lattice : drifting wireframe polyhedra          (light/dark theme)
 *  - network : rotating node graph with links        (light/dark theme)
 *  - contour : concentric topographic contour rings  (always-dark band)
 *  - wave    : undulating elevation field            (always-dark band)
 */
export type SectionBgVariant = "lattice" | "network" | "contour" | "wave";

type Props = {
  variant: SectionBgVariant;
  /** "dark" forces the dark palette (for the always-dark brand bands). */
  tone?: "theme" | "dark";
  className?: string;
};

type Palette = {
  line: number;
  lineOpacity: number;
  node: number;
  nodeOpacity: number;
  accent: number;
  gold: number;
  additive: boolean;
};

const DARK: Palette = {
  line: 0x5271ff,
  lineOpacity: 0.5,
  node: 0x8fb4ff,
  nodeOpacity: 0.85,
  accent: 0xa855f7,
  gold: 0xf0bb55,
  additive: true,
};
const LIGHT: Palette = {
  line: 0x2d4fe8,
  lineOpacity: 0.28,
  node: 0x1d4ed8,
  nodeOpacity: 0.45,
  accent: 0x7c3aed,
  gold: 0xb7791f,
  additive: false,
};

function createPointTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, "rgba(255,255,255,1)");
    g.addColorStop(0.35, "rgba(255,255,255,0.95)");
    g.addColorStop(0.65, "rgba(255,255,255,0.25)");
    g.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
  }
  const t = new THREE.CanvasTexture(canvas);
  t.needsUpdate = true;
  return t;
}

/** Everything a variant builds, plus how to animate and re-theme it. */
type Scene3D = {
  root: THREE.Object3D;
  update: (t: number, mouseX: number, mouseY: number, isMobile: boolean) => void;
  applyPalette: (p: Palette) => void;
  dispose: () => void;
};

function additiveOr(p: Palette) {
  return p.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
}

/* ---------------------------------------------------------------- lattice */
function buildLattice(tex: THREE.Texture): Scene3D {
  const root = new THREE.Group();
  const wireMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, depthWrite: false });
  const goldMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, depthWrite: false });
  const geos = [
    new THREE.IcosahedronGeometry(1.2, 0),
    new THREE.OctahedronGeometry(0.9, 0),
    new THREE.TetrahedronGeometry(0.9, 0),
    new THREE.IcosahedronGeometry(0.7, 1),
    new THREE.OctahedronGeometry(0.55, 0),
  ];
  const spots: [number, number, number][] = [
    [7.2, 3.2, -1],
    [9.4, -1.2, 0.5],
    [5.4, -3.2, 1],
    [11.2, 3.6, -3],
    [3.8, 3.8, -2],
  ];
  const meshes = geos.map((g, i) => {
    const m = new THREE.Mesh(g, i === 1 || i === 4 ? goldMat : wireMat);
    m.position.set(...spots[i]);
    root.add(m);
    return m;
  });

  const count = 70;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.2) * 24;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const pMat = new THREE.PointsMaterial({ size: 0.12, map: tex, transparent: true, depthWrite: false });
  const points = new THREE.Points(pGeo, pMat);
  root.add(points);

  return {
    root,
    update(t, mx, my, isMobile) {
      root.scale.setScalar(isMobile ? 0.6 : 0.9);
      root.position.x = isMobile ? -3 : -0.5;
      meshes.forEach((m, i) => {
        m.rotation.x = t * (0.18 + i * 0.05);
        m.rotation.y = t * (0.25 + i * 0.04);
        m.position.y = spots[i][1] + Math.sin(t * 0.9 + i * 1.7) * 0.28;
      });
      root.rotation.y = mx * 0.12;
      root.rotation.x = -my * 0.06;
    },
    applyPalette(p) {
      wireMat.color.set(p.line);
      wireMat.opacity = Math.min(1, p.lineOpacity * 1.4);
      goldMat.color.set(p.gold);
      goldMat.opacity = Math.min(1, p.lineOpacity * 2.2);
      pMat.color.set(p.node);
      pMat.opacity = p.nodeOpacity * 0.8;
      pMat.blending = additiveOr(p);
    },
    dispose() {
      geos.forEach((g) => g.dispose());
      wireMat.dispose();
      goldMat.dispose();
      pGeo.dispose();
      pMat.dispose();
    },
  };
}

/* ---------------------------------------------------------------- network */
function buildNetwork(tex: THREE.Texture): Scene3D {
  const root = new THREE.Group();
  const nodeCount = 46;
  const radius = 6.5;
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i < nodeCount; i++) {
    // Fibonacci sphere keeps nodes evenly spread
    const y = 1 - (i / (nodeCount - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = i * 2.399963;
    pts.push(new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r).multiplyScalar(radius * (0.8 + Math.random() * 0.25)));
  }

  const nodePos = new Float32Array(nodeCount * 3);
  pts.forEach((v, i) => v.toArray(nodePos, i * 3));
  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePos, 3));
  const nodeMat = new THREE.PointsMaterial({ size: 0.28, map: tex, transparent: true, depthWrite: false });
  root.add(new THREE.Points(nodeGeo, nodeMat));

  const linkVerts: number[] = [];
  const maxDist = radius * 0.62;
  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      if (pts[i].distanceTo(pts[j]) < maxDist) {
        linkVerts.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
      }
    }
  }
  const linkGeo = new THREE.BufferGeometry();
  linkGeo.setAttribute("position", new THREE.Float32BufferAttribute(linkVerts, 3));
  const linkMat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
  root.add(new THREE.LineSegments(linkGeo, linkMat));

  const shellGeo = new THREE.IcosahedronGeometry(radius * 1.12, 1);
  const shellMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true, depthWrite: false });
  root.add(new THREE.Mesh(shellGeo, shellMat));

  return {
    root,
    update(t, mx, my, isMobile) {
      root.scale.setScalar(isMobile ? 0.55 : 1);
      root.position.set(isMobile ? 2 : 8, 0, -2);
      root.rotation.y = t * 0.12 + mx * 0.25;
      root.rotation.x = Math.sin(t * 0.2) * 0.12 - my * 0.15;
    },
    applyPalette(p) {
      nodeMat.color.set(p.node);
      nodeMat.opacity = p.nodeOpacity;
      nodeMat.blending = additiveOr(p);
      linkMat.color.set(p.line);
      linkMat.opacity = p.lineOpacity * 0.9;
      linkMat.blending = additiveOr(p);
      shellMat.color.set(p.gold);
      shellMat.opacity = p.lineOpacity * 0.6;
    },
    dispose() {
      nodeGeo.dispose();
      nodeMat.dispose();
      linkGeo.dispose();
      linkMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
    },
  };
}

/* ---------------------------------------------------------------- contour */
function buildContour(tex: THREE.Texture): Scene3D {
  const root = new THREE.Group();
  root.rotation.x = -Math.PI * 0.38;
  const ringCount = 16;
  const segs = 120;
  const mat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
  const rings: { geo: THREE.BufferGeometry; base: number }[] = [];
  for (let r = 0; r < ringCount; r++) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array((segs + 1) * 3), 3));
    root.add(new THREE.Line(geo, mat));
    rings.push({ geo, base: 1.2 + r * 0.95 });
  }
  const dotGeo = new THREE.BufferGeometry();
  const dotPos = new Float32Array(ringCount * 3);
  dotGeo.setAttribute("position", new THREE.BufferAttribute(dotPos, 3));
  const dotMat = new THREE.PointsMaterial({ size: 0.26, map: tex, transparent: true, depthWrite: false });
  root.add(new THREE.Points(dotGeo, dotMat));

  return {
    root,
    update(t, mx, _my, isMobile) {
      root.scale.setScalar(isMobile ? 0.6 : 1);
      root.position.set(isMobile ? 1 : 7, -1.5, -2);
      root.rotation.z = mx * 0.1;
      for (let r = 0; r < ringCount; r++) {
        const arr = rings[r].geo.attributes.position.array as Float32Array;
        for (let s = 0; s <= segs; s++) {
          const a = (s / segs) * Math.PI * 2;
          const wob =
            Math.sin(a * 3 + t * 0.6 + r * 0.5) * 0.28 + Math.cos(a * 5 - t * 0.45 + r) * 0.14;
          const rad = rings[r].base + wob;
          arr[s * 3] = Math.cos(a) * rad;
          arr[s * 3 + 1] = Math.sin(a) * rad;
          arr[s * 3 + 2] = Math.sin(a * 2 + t * 0.5 + r * 0.7) * 0.35 + r * 0.06;
        }
        rings[r].geo.attributes.position.needsUpdate = true;
        // one luminous node travelling on each ring
        const ang = t * (0.25 + r * 0.02) + r;
        dotPos[r * 3] = Math.cos(ang) * rings[r].base;
        dotPos[r * 3 + 1] = Math.sin(ang) * rings[r].base;
        dotPos[r * 3 + 2] = Math.sin(ang * 2 + t * 0.5 + r * 0.7) * 0.35 + r * 0.06 + 0.02;
      }
      dotGeo.attributes.position.needsUpdate = true;
    },
    applyPalette(p) {
      mat.color.set(p.line);
      mat.opacity = p.lineOpacity * 0.8;
      mat.blending = additiveOr(p);
      dotMat.color.set(p.gold);
      dotMat.opacity = Math.min(1, p.nodeOpacity + 0.1);
      dotMat.blending = additiveOr(p);
    },
    dispose() {
      rings.forEach((r) => r.geo.dispose());
      mat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
    },
  };
}

/* ------------------------------------------------------------------- wave */
function buildWave(tex: THREE.Texture): Scene3D {
  const root = new THREE.Group();
  root.rotation.x = -Math.PI * 0.46;
  const rows = 22;
  const cols = 48;
  const width = 40;
  const depth = 18;
  const mat = new THREE.LineBasicMaterial({ transparent: true, depthWrite: false });
  const geos: THREE.BufferGeometry[] = [];
  for (let r = 0; r < rows; r++) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(cols * 3), 3));
    root.add(new THREE.Line(geo, mat));
    geos.push(geo);
  }
  const nodeCount = Math.ceil(rows / 3) * Math.ceil(cols / 3);
  const nodePos = new Float32Array(nodeCount * 3);
  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePos, 3));
  const nodeMat = new THREE.PointsMaterial({ size: 0.15, map: tex, transparent: true, depthWrite: false });
  root.add(new THREE.Points(nodeGeo, nodeMat));

  return {
    root,
    update(t, mx, _my, isMobile) {
      root.scale.setScalar(isMobile ? 0.6 : 1);
      root.position.set(0, isMobile ? -3.5 : -4, -2);
      let n = 0;
      for (let r = 0; r < rows; r++) {
        const arr = geos[r].attributes.position.array as Float32Array;
        const y = (r / (rows - 1) - 0.5) * depth;
        for (let c = 0; c < cols; c++) {
          const x = (c / (cols - 1) - 0.5) * width;
          const z =
            Math.sin(x * 0.26 + t * 0.7) * Math.cos(y * 0.24 + t * 0.5) * 1.0 +
            Math.sin(x * 0.17 + y * 0.14 + t * 0.4) * 0.55 +
            Math.exp(-Math.pow(x - mx * 12, 2) / 30) * Math.sin(t * 2 - y) * 0.2;
          arr[c * 3] = x;
          arr[c * 3 + 1] = y;
          arr[c * 3 + 2] = z;
          if (r % 3 === 0 && c % 3 === 0 && n < nodeCount) {
            nodePos[n * 3] = x;
            nodePos[n * 3 + 1] = y;
            nodePos[n * 3 + 2] = z + 0.02;
            n++;
          }
        }
        geos[r].attributes.position.needsUpdate = true;
      }
      nodeGeo.attributes.position.needsUpdate = true;
    },
    applyPalette(p) {
      mat.color.set(p.line);
      mat.opacity = p.lineOpacity * 0.85;
      mat.blending = additiveOr(p);
      nodeMat.color.set(p.gold);
      nodeMat.opacity = p.nodeOpacity;
      nodeMat.blending = additiveOr(p);
    },
    dispose() {
      geos.forEach((g) => g.dispose());
      mat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
    },
  };
}

const builders: Record<SectionBgVariant, (t: THREE.Texture) => Scene3D> = {
  lattice: buildLattice,
  network: buildNetwork,
  contour: buildContour,
  wave: buildWave,
};

export function SectionBg3D({ variant, tone = "theme", className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Live GPU resources; created lazily when the section is near the viewport.
    let live: {
      renderer: THREE.WebGLRenderer;
      scene: THREE.Scene;
      camera: THREE.PerspectiveCamera;
      tex: THREE.CanvasTexture;
      built: Scene3D;
      raf: number;
      resize: ResizeObserver;
      themeObs: MutationObserver;
      frame: () => void;
    } | null = null;

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointer = (e: PointerEvent) => {
      mouse.tx = Math.max(-1, Math.min(1, (e.clientX / window.innerWidth - 0.5) * 2));
      mouse.ty = Math.max(-1, Math.min(1, (e.clientY / window.innerHeight - 0.5) * 2));
    };

    const start = () => {
      if (live) return;
      const w = container.clientWidth;
      const h = Math.max(container.clientHeight, 1);
      if (w === 0) return;

      let renderer: THREE.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
      } catch {
        return; // WebGL unavailable: the section simply has no background
      }
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(w, h);
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
      camera.position.set(1.5, 2.5, 16);
      camera.lookAt(1.5, 0, 0);

      const tex = createPointTexture();
      const built = builders[variant](tex);
      scene.add(built.root);

      const applyTheme = () => {
        const dark = tone === "dark" || document.documentElement.getAttribute("data-theme") === "dark";
        built.applyPalette(dark ? DARK : LIGHT);
      };
      applyTheme();
      const themeObs = new MutationObserver(applyTheme);
      themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

      const resize = new ResizeObserver(() => {
        const cw = container.clientWidth;
        const ch = Math.max(container.clientHeight, 1);
        const aspect = cw / ch;
        camera.aspect = aspect;
        // keep horizontal coverage on tall, narrow screens
        camera.fov = aspect >= 1 ? 42 : Math.min(80, Math.max(45, (2 * Math.atan(Math.tan(0.3927) / aspect) * 180) / Math.PI));
        camera.updateProjectionMatrix();
        renderer.setSize(cw, ch);
      });
      resize.observe(container);

      let clock = 0;
      const frame = () => {
        state.raf = requestAnimationFrame(frame);
        clock += 0.011 * (reduced ? 0.05 : 1);
        mouse.x += (mouse.tx - mouse.x) * 0.04;
        mouse.y += (mouse.ty - mouse.y) * 0.04;
        built.update(clock, reduced ? 0 : mouse.x, reduced ? 0 : mouse.y, container.clientWidth < 768);
        renderer.render(scene, camera);
      };
      const state = { renderer, scene, camera, tex, built, raf: 0, resize, themeObs, frame };
      live = state;
      frame();
    };

    const pause = () => {
      if (live) {
        cancelAnimationFrame(live.raf);
        live.raf = 0;
      }
    };
    const resume = () => {
      if (!live) start();
      else if (!live.raf) live.frame();
    };

    const destroy = () => {
      if (!live) return;
      cancelAnimationFrame(live.raf);
      live.resize.disconnect();
      live.themeObs.disconnect();
      live.built.dispose();
      live.tex.dispose();
      live.renderer.dispose();
      live.renderer.forceContextLoss();
      if (live.renderer.domElement.parentElement === container) {
        container.removeChild(live.renderer.domElement);
      }
      live = null;
    };

    // Build GPU resources within ~1 screen of the viewport; release when far away.
    const near = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e && !e.isIntersecting) destroy();
      },
      { rootMargin: "100% 0px 100% 0px" }
    );
    near.observe(container);

    // Animate only while the section is actually on screen.
    const onScreen = new IntersectionObserver(
      (entries) => {
        const e = entries[entries.length - 1];
        if (!e) return;
        if (e.isIntersecting) resume();
        else pause();
      },
      { rootMargin: "120px 0px 120px 0px" }
    );
    onScreen.observe(container);

    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointer);
      near.disconnect();
      onScreen.disconnect();
      destroy();
    };
  }, [variant, tone]);

  return <div ref={containerRef} className={`sec-3d sec-3d--${variant} ${className ?? ""}`} aria-hidden="true" />;
}
