"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Creates a circular anti-aliased dot sprite texture in memory.
 */
function createPointTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, "rgba(255, 255, 255, 1)");
    grad.addColorStop(0.35, "rgba(255, 255, 255, 0.95)");
    grad.addColorStop(0.65, "rgba(255, 255, 255, 0.25)");
    grad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * 3D Aesthetic Hero Background
 *
 * Combines an undulating topographic elevation field,
 * architectural floating intelligence polyhedra (geodesic icosahedron, dual-ring gyroscope),
 * and lively ambient data particles.
 *
 * Theme-aware (light/dark), fully responsive across desktop and mobile,
 * and honors prefers-reduced-motion.
 */
export function HomeHero3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const getIsMobile = () => (container.clientWidth < 768);

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    const initialIsMobile = getIsMobile();
    const initialAspect = container.clientWidth / Math.max(container.clientHeight, 1);
    const computeFov = (aspect: number) => {
      if (aspect >= 1.0) return 42;
      // Maintain horizontal width on narrow/tall portrait screens
      const targetHFov = (45 * Math.PI) / 180;
      const vFovRad = 2 * Math.atan(Math.tan(targetHFov / 2) / aspect);
      return Math.min(80, Math.max(45, (vFovRad * 180) / Math.PI));
    };

    const camera = new THREE.PerspectiveCamera(
      computeFov(initialAspect),
      initialAspect,
      0.1,
      100
    );
    camera.position.set(
      initialIsMobile ? 0 : 1.5,
      initialIsMobile ? 3.2 : 3.8,
      initialIsMobile ? 16 : 16
    );
    camera.lookAt(initialIsMobile ? 0 : 1.5, initialIsMobile ? 1.5 : 0.2, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const pointTexture = createPointTexture();

    // 1. TOPOGRAPHIC ELEVATION FIELD
    const numRows = 30;
    const pointsPerRow = 54;
    const landscapeWidth = 38;
    const landscapeDepth = 25;

    const rowLines: THREE.Line[] = [];
    const rowGeometries: THREE.BufferGeometry[] = [];
    const lineMat = new THREE.LineBasicMaterial({
      transparent: true,
      depthWrite: false,
    });

    const landscapeGroup = new THREE.Group();
    landscapeGroup.rotation.x = -Math.PI * 0.44;
    landscapeGroup.rotation.z = -0.07;
    
    for (let r = 0; r < numRows; r++) {
      const positions = new Float32Array(pointsPerRow * 3);
      const y = (r / (numRows - 1) - 0.5) * landscapeDepth;

      for (let p = 0; p < pointsPerRow; p++) {
        const x = (p / (pointsPerRow - 1) - 0.5) * landscapeWidth;
        positions[p * 3] = x;
        positions[p * 3 + 1] = y;
        positions[p * 3 + 2] = 0;
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const line = new THREE.Line(geo, lineMat);
      rowLines.push(line);
      rowGeometries.push(geo);
      landscapeGroup.add(line);
    }

    // Luminous nodes along wave crests
    const nodeCount = Math.floor(numRows / 2) * Math.floor(pointsPerRow / 2);
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(nodePositions, 3)
    );

    const nodeMat = new THREE.PointsMaterial({
      size: 0.17,
      map: pointTexture,
      transparent: true,
      depthWrite: false,
    });
    const landscapeNodes = new THREE.Points(nodeGeo, nodeMat);
    landscapeGroup.add(landscapeNodes);

    scene.add(landscapeGroup);

    // 2. ARCHITECTURAL FLOATING INTELLIGENCE POLYHEDRA
    // A: Geodesic Icosahedron - Upper right corner framing mock
    const icoGeo = new THREE.IcosahedronGeometry(1.4, 0);
    const icoCoreGeo = new THREE.IcosahedronGeometry(1.26, 0);
    const icoWireMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      depthWrite: false,
    });
    const icoCoreMat = new THREE.MeshStandardMaterial({
      roughness: 0.2,
      metalness: 0.7,
      transparent: true,
      depthWrite: false,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoWireMat);
    const icoCore = new THREE.Mesh(icoCoreGeo, icoCoreMat);
    const icoGroup = new THREE.Group();
    icoGroup.add(icoMesh);
    icoGroup.add(icoCore);
    scene.add(icoGroup);

    // B: Dual-Ring Gyroscope - Right flank floating ring
    const gyroGroup = new THREE.Group();
    const ringOuterGeo = new THREE.TorusGeometry(1.2, 0.07, 16, 60);
    const ringInnerGeo = new THREE.TorusGeometry(0.85, 0.05, 16, 50);
    const gyroWireMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      depthWrite: false,
    });
    const ringOuter = new THREE.Mesh(ringOuterGeo, gyroWireMat);
    const ringInner = new THREE.Mesh(ringInnerGeo, gyroWireMat);
    ringInner.rotation.x = Math.PI / 3;
    ringInner.rotation.y = Math.PI / 4;
    gyroGroup.add(ringOuter);
    gyroGroup.add(ringInner);
    scene.add(gyroGroup);

    // C: Octahedron (Data Crystal) - Lower right
    const octaGeo = new THREE.OctahedronGeometry(0.95, 0);
    const octaCoreGeo = new THREE.OctahedronGeometry(0.82, 0);
    const octaWireMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      depthWrite: false,
    });
    const octaCoreMat = new THREE.MeshStandardMaterial({
      roughness: 0.25,
      metalness: 0.65,
      transparent: true,
      depthWrite: false,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaWireMat);
    const octaCore = new THREE.Mesh(octaCoreGeo, octaCoreMat);
    const octaGroup = new THREE.Group();
    octaGroup.add(octaMesh);
    octaGroup.add(octaCore);
    scene.add(octaGroup);

    // 3. AMBIENT DATA PARTICLES (Gentle micro-dust)
    const particleCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.35) * 32;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      particleSpeeds[i] = 0.003 + Math.random() * 0.007;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      map: pointTexture,
      transparent: true,
      depthWrite: false,
    });
    const ambientParticles = new THREE.Points(particleGeo, particleMat);
    scene.add(ambientParticles);

    // 4. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x3452f0, 1.6);
    dirLight.position.set(7, 10, 8);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 2.4, 25);
    pointLight.position.set(7, 2, 4);
    scene.add(pointLight);

    // THEME SYNC
    const updateTheme = () => {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";

      if (isDark) {
        // Dark theme: glowing electric cobalt & vibrant violet
        lineMat.color.set(0x5271ff);
        lineMat.opacity = 0.48;
        lineMat.blending = THREE.AdditiveBlending;

        nodeMat.color.set(0x70aeff);
        nodeMat.opacity = 0.85;
        nodeMat.blending = THREE.AdditiveBlending;

        icoWireMat.color.set(0x60a5fa);
        icoWireMat.opacity = 0.75;
        icoCoreMat.color.set(0x3b82f6);
        icoCoreMat.opacity = 0.35;

        gyroWireMat.color.set(0xa855f7);
        gyroWireMat.opacity = 0.7;

        octaWireMat.color.set(0xf0bb55);
        octaWireMat.opacity = 0.8;
        octaCoreMat.color.set(0xd99a2b);
        octaCoreMat.opacity = 0.28;

        particleMat.color.set(0xa5b4fc);
        particleMat.opacity = 0.7;
        particleMat.blending = THREE.AdditiveBlending;

        dirLight.color.set(0x4a67ff);
        dirLight.intensity = 2.0;
        pointLight.color.set(0xa855f7);
        pointLight.intensity = 3.0;
        ambientLight.intensity = 0.6;
      } else {
        // Light theme: crisp royal cobalt, electric indigo & soft violet
        lineMat.color.set(0x2d4fe8);
        lineMat.opacity = 0.18;
        lineMat.blending = THREE.NormalBlending;

        nodeMat.color.set(0x1d4ed8);
        nodeMat.opacity = 0.45;
        nodeMat.blending = THREE.NormalBlending;

        icoWireMat.color.set(0x2563eb);
        icoWireMat.opacity = 0.45;
        icoCoreMat.color.set(0x4f46e5);
        icoCoreMat.opacity = 0.14;

        gyroWireMat.color.set(0x7c3aed);
        gyroWireMat.opacity = 0.4;

        octaWireMat.color.set(0xb7791f);
        octaWireMat.opacity = 0.55;
        octaCoreMat.color.set(0xd99a2b);
        octaCoreMat.opacity = 0.14;

        particleMat.color.set(0x2563eb);
        particleMat.opacity = 0.35;
        particleMat.blending = THREE.NormalBlending;

        dirLight.color.set(0x3452f0);
        dirLight.intensity = 1.3;
        pointLight.color.set(0x8b5cf6);
        pointLight.intensity = 2.0;
        ambientLight.intensity = 0.95;
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // POINTER TRACKING & INTERACTION
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ry = (e.clientY / window.innerHeight - 0.5) * 2;
      mouse.targetX = Math.max(-1, Math.min(1, rx));
      mouse.targetY = Math.max(-1, Math.min(1, ry));
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // RESIZE LISTENER (Adapts camera and object layout to viewport width)
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      const aspect = width / Math.max(height, 1);
      const isMobile = width < 768;

      camera.aspect = aspect;
      camera.fov = computeFov(aspect);
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      applyLayout(isMobile);
    };

    // Single source of truth for object placement; the animation loop hovers
    // around these base values so resize and render never disagree.
    const layouts = {
      mobile: {
        land: { s: 0.65, x: 0, y: 0.8, z: -2 },
        ico: { s: 0.7, x: 2.4, y: 4.8, z: -1.8 },
        gyro: { s: 0.65, x: -2.5, y: 1.2, z: 0 },
        octa: { s: 0.65, x: 2.2, y: -1.2, z: 1 },
      },
      desktop: {
        land: { s: 1, x: 2.8, y: -2.5, z: -1 },
        ico: { s: 1, x: 8.2, y: 4.1, z: -1.8 },
        gyro: { s: 1, x: 9.2, y: -0.6, z: 0.2 },
        octa: { s: 1, x: 7.2, y: -2.8, z: 1.2 },
      },
    };
    let layout = initialIsMobile ? layouts.mobile : layouts.desktop;
    let isMobileNow = initialIsMobile;

    function applyLayout(isMobile: boolean) {
      isMobileNow = isMobile;
      layout = isMobile ? layouts.mobile : layouts.desktop;
      const targets: [THREE.Object3D, { s: number; x: number; y: number; z: number }][] = [
        [landscapeGroup, layout.land],
        [icoGroup, layout.ico],
        [gyroGroup, layout.gyro],
        [octaGroup, layout.octa],
      ];
      for (const [obj, l] of targets) {
        obj.scale.setScalar(l.s);
        obj.position.set(l.x, l.y, l.z);
      }
    }
    applyLayout(initialIsMobile);

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // INTERSECTION OBSERVER (Pauses animation when scrolled far down page)
    let isVisible = true;
    let initialFrameCount = 0;
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        // Keep active unless clearly scrolled out of view
        if (entry.boundingClientRect.height > 0) {
          isVisible =
            entry.isIntersecting ||
            (entry.boundingClientRect.bottom > 0 &&
              entry.boundingClientRect.top < window.innerHeight);
        }
      },
      { threshold: [0, 0.05, 0.2] }
    );
    visibilityObserver.observe(container);

    // ANIMATION LOOP
    let animationFrameId = 0;
    let clock = 0;

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      initialFrameCount++;
      // Always render first 30 frames to guarantee initial paint
      if (!isVisible && initialFrameCount > 30) return;

      const isMobile = isMobileNow;
      const speedMultiplier = prefersReducedMotion ? 0.05 : 1.0;
      clock += 0.011 * speedMultiplier;

      // Mouse lerping
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Camera parallax
      if (!prefersReducedMotion) {
        const camCenterX = isMobile ? 0 : 1.5;
        const camCenterY = isMobile ? 3.2 : 3.8;
        const camCenterZ = isMobile ? 16 : 16;
        const camTargetY = isMobile ? 1.5 : 0.2;
        camera.position.x = camCenterX + mouse.x * (isMobile ? 0.7 : 1.3);
        camera.position.y = camCenterY - mouse.y * (isMobile ? 0.5 : 0.9);
        camera.position.z = camCenterZ;
        camera.lookAt(camCenterX, camTargetY, 0);
      }

      // Update Topographic Wave lines
      let nodeIdx = 0;
      const nodePosArr = nodeGeo.attributes.position.array as Float32Array;

      for (let r = 0; r < numRows; r++) {
        const geo = rowGeometries[r];
        const pos = geo.attributes.position.array as Float32Array;
        const y = (r / (numRows - 1) - 0.5) * landscapeDepth;

        for (let p = 0; p < pointsPerRow; p++) {
          const x = (p / (pointsPerRow - 1) - 0.5) * landscapeWidth;

          // Organic harmonic elevation
          const wave1 =
            Math.sin(x * 0.24 + clock * 0.75) *
            Math.cos(y * 0.22 + clock * 0.55) *
            0.92;
          const wave2 =
            Math.sin((x * 0.18 + y * 0.15) + clock * 0.42) * 0.52;

          // Mouse perturbation ripple
          let ripple = 0;
          if (!prefersReducedMotion) {
            const mxWorld = mouse.x * 10;
            const myWorld = -mouse.y * 6;
            const dx = x - mxWorld;
            const dy = y - myWorld;
            const distSq = dx * dx + dy * dy;
            if (distSq < 36) {
              const factor = Math.exp(-distSq / 14);
              ripple =
                Math.sin(Math.sqrt(distSq) * 1.8 - clock * 2.6) *
                0.3 *
                factor;
            }
          }

          const z = wave1 + wave2 + ripple;
          pos[p * 3 + 2] = z;

          if (r % 2 === 0 && p % 2 === 0 && nodeIdx < nodeCount) {
            nodePosArr[nodeIdx * 3] = x;
            nodePosArr[nodeIdx * 3 + 1] = y;
            nodePosArr[nodeIdx * 3 + 2] = z + 0.02;
            nodeIdx++;
          }
        }
        geo.attributes.position.needsUpdate = true;
      }
      nodeGeo.attributes.position.needsUpdate = true;

      // Floating polyhedra rotations & hovering
      icoGroup.rotation.x += 0.003 * speedMultiplier;
      icoGroup.rotation.y += 0.0045 * speedMultiplier;
      const icoBaseY = layout.ico.y;
      icoGroup.position.y = icoBaseY + Math.sin(clock * 0.75) * 0.25;

      gyroGroup.rotation.x += 0.004 * speedMultiplier;
      gyroGroup.rotation.y += 0.006 * speedMultiplier;
      ringInner.rotation.z += 0.008 * speedMultiplier;
      const gyroBaseY = layout.gyro.y;
      gyroGroup.position.y = gyroBaseY + Math.sin(clock * 0.65) * 0.22;

      octaGroup.rotation.y += 0.0055 * speedMultiplier;
      octaGroup.rotation.z += 0.0035 * speedMultiplier;
      const octaBaseY = layout.octa.y;
      octaGroup.position.y = octaBaseY + Math.cos(clock * 0.8) * 0.2;

      // Ambient particles drift
      const partPos = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        partPos[i * 3 + 1] += particleSpeeds[i] * speedMultiplier;
        if (partPos[i * 3 + 1] > 8) {
          partPos[i * 3 + 1] = -8;
          partPos[i * 3] = (Math.random() - 0.35) * 32;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    // Initial immediate render
    renderer.render(scene, camera);
    render();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pointermove", onPointerMove);
      observer.disconnect();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      lineMat.dispose();
      nodeMat.dispose();
      rowGeometries.forEach((g) => g.dispose());
      nodeGeo.dispose();
      pointTexture.dispose();

      icoGeo.dispose();
      icoCoreGeo.dispose();
      icoWireMat.dispose();
      icoCoreMat.dispose();

      ringOuterGeo.dispose();
      ringInnerGeo.dispose();
      gyroWireMat.dispose();

      octaGeo.dispose();
      octaCoreGeo.dispose();
      octaWireMat.dispose();
      octaCoreMat.dispose();

      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-3d"
      aria-hidden="true"
    />
  );
}
