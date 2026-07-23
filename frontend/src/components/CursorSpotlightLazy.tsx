"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CursorSpotlight = dynamic(
  () => import("@/components/CursorSpotlight").then((m) => m.CursorSpotlight),
  { ssr: false },
);

/** Loads after idle — never blocks first paint. Skipped on touch / reduced motion. */
export function CursorSpotlightLazy() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduce) return;

    const enable = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(enable, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const t = window.setTimeout(enable, 1500);
    return () => window.clearTimeout(t);
  }, []);

  if (!ready) return null;
  return <CursorSpotlight />;
}
