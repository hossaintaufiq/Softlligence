"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./showroom-stage.css";

/** 72 frames per paint, one every 5°. 01 is the front, 19 the side, 37 the rear. */
const FRAMES = 72;
const BASE = "/tools/showroom/sonet";
/** Pixels of horizontal drag per frame. */
const DRAG_STEP = 7;

const paints = [
  { id: "blue", name: "Blue", swatch: "#1f3a8a" },
  { id: "black", name: "Black", swatch: "#16181d" },
  { id: "grey", name: "Grey", swatch: "#7d838c" },
  { id: "white", name: "White", swatch: "#eef0f3" },
] as const;

type PaintId = (typeof paints)[number]["id"];

const frameSrc = (paint: PaintId, i: number) => `${BASE}/${paint}/${String(i + 1).padStart(2, "0")}.webp`;
const wrap = (n: number) => ((n % FRAMES) + FRAMES) % FRAMES;

/**
 * Showroom 360° preview: 72 photographed angles per colour, turned by scrolling the page,
 * dragging the car, or the arrow keys.
 *
 * `stageOnly` shows just the car in one colour: no window frame or paint picker, and
 * scrolling the page leaves it still.
 */
export function ShowroomStage({ stageOnly = false }: { stageOnly?: boolean } = {}) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cache = useRef(new Map<string, HTMLImageElement>());
  const scrollFrame = useRef(0);
  const userFrame = useRef(0);
  const drag = useRef<{ x: number; y: number; start: number } | null>(null);

  const [paint, setPaint] = useState<PaintId>("blue");
  const [frame, setFrame] = useState(0);
  const [near, setNear] = useState(false);
  const [loaded, setLoaded] = useState<Record<string, number>>({});
  const [dragging, setDragging] = useState(false);

  const sync = useCallback(() => setFrame(wrap(scrollFrame.current + userFrame.current)), []);

  // Start fetching frames only when the viewer is close to the screen.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Preload every angle of the selected paint.
  useEffect(() => {
    if (!near) return;
    let done = 0;
    for (let i = 0; i < FRAMES; i++) {
      const src = frameSrc(paint, i);
      if (cache.current.has(src)) {
        done++;
        continue;
      }
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      cache.current.set(src, img);
      const tick = () => setLoaded((l) => ({ ...l, [paint]: (l[paint] ?? 0) + 1 }));
      img.onload = tick;
      img.onerror = tick;
    }
    if (done) setLoaded((l) => ({ ...l, [paint]: Math.max(l[paint] ?? 0, done) }));
  }, [near, paint]);

  // Scroll-linked rotation: one full turn while the viewer crosses the screen.
  useEffect(() => {
    const el = stageRef.current;
    if (!el || stageOnly) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        scrollFrame.current = Math.round(p * FRAMES);
        sync();
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [stageOnly, sync]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, start: userFrame.current };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    // A mostly vertical swipe is someone scrolling the page, not turning the car.
    if (e.pointerType === "touch" && Math.abs(e.clientY - drag.current.y) > Math.abs(dx)) return;
    userFrame.current = drag.current.start - Math.round(dx / DRAG_STEP);
    sync();
  };
  const endDrag = () => {
    drag.current = null;
    setDragging(false);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowLeft" ? 1 : e.key === "ArrowRight" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    userFrame.current += step * (e.shiftKey ? 9 : 1);
    sync();
  };

  const current = paints.find((p) => p.id === paint)!;
  const progress = Math.min(FRAMES, loaded[paint] ?? 0);
  const ready = progress >= FRAMES;
  const degrees = frame * 5;

  const stage = (
    <div
      ref={stageRef}
      className={`sr-stage${dragging ? " is-dragging" : ""}`}
      role="slider"
      tabIndex={0}
      aria-label={`Kia Sonet in ${current.name}, rotate the car`}
      aria-valuemin={0}
      aria-valuemax={355}
      aria-valuenow={degrees}
      aria-valuetext={`${degrees} degrees`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
    >
      <div className="sr-floor" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element -- frame swapping needs a plain img */}
      <img
        className="sr-car"
        src={frameSrc(paint, near ? frame : 0)}
        alt=""
        width={1336}
        height={650}
        draggable={false}
        loading="lazy"
      />
      <span className="sr-badge" aria-hidden="true">
        {!ready
          ? `Loading 360° · ${Math.round((progress / FRAMES) * 100)}%`
          : stageOnly
            ? "Drag to rotate 360°"
            : "Scroll or drag to rotate"}
      </span>
      <span className="sr-deg" aria-hidden="true">
        {degrees}°
      </span>
      <div className="sr-dial" aria-hidden="true">
        <span style={{ transform: `rotate(${degrees}deg)` }} />
      </div>
    </div>
  );

  if (stageOnly) return stage;

  return (
    <div className="mock sr">
      <div className="mock__chrome" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>Showroom · 360° viewer</span>
        <em>Live preview</em>
      </div>

      {stage}

      <div className="sr-controls">
        <div className="sr-paints" role="radiogroup" aria-label="Paint colour">
          {paints.map((c) => (
            <button
              key={c.id}
              type="button"
              role="radio"
              aria-checked={paint === c.id}
              aria-label={c.name}
              title={c.name}
              className={paint === c.id ? "is-on" : undefined}
              style={{ "--swatch": c.swatch } as React.CSSProperties}
              onClick={() => setPaint(c.id)}
            />
          ))}
        </div>
        <p className="sr-name">
          Kia Sonet · <span>{current.name}</span>
        </p>
      </div>
    </div>
  );
}
