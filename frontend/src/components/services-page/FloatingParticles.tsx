"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type Particle = {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
  color: string;
};

export function FloatingParticles({ count = 28 }: { count?: number }) {
  const reduced = usePrefersReducedMotion();

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 2 + (i % 4),
        duration: 10 + (i % 8),
        delay: (i % 6) * 0.4,
        color: i % 2 === 0
          ? "color-mix(in srgb, var(--theme-accent) 55%, transparent)"
          : "color-mix(in srgb, var(--theme-accent-2) 50%, transparent)",
      })),
    [count],
  );

  if (reduced) return null;

  return (
    <div className="sp-particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="sp-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
