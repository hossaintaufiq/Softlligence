"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Soft entrance only — content is always visible (no opacity:0 flash on static pages).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(true);
      return;
    }

    const revealNow = () => setActive(true);

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 40) {
      revealNow();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          revealNow();
          observer.unobserve(el);
        }
      },
      { threshold: 0.01, rootMargin: "100px 0px" },
    );

    observer.observe(el);
    const failsafe = window.setTimeout(revealNow, 300);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal-soft", active && "reveal-soft--on", className)}
      style={{ transitionDelay: active ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
