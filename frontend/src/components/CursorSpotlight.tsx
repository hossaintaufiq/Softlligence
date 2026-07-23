"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Soft cursor spotlight — desktop only.
 * Disabled for reduced motion and coarse/touch pointers.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    const sync = () => setEnabled(!motion.matches && fine.matches);
    sync();
    motion.addEventListener("change", sync);
    fine.addEventListener("change", sync);
    return () => {
      motion.removeEventListener("change", sync);
      fine.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      el.style.setProperty("--cursor-x", `${e.clientX}px`);
      el.style.setProperty("--cursor-y", `${e.clientY}px`);
      el.style.opacity = "1";
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div ref={ref} className="cursor-spotlight" aria-hidden="true" />;
}
