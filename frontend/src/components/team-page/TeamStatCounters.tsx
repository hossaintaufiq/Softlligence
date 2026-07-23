"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Stat = { count: number; suffix: string; label: string };

function formatNumber(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return Math.round(n).toString();
}

function animateCount(el: HTMLElement, target: number, suffix: string, reduced: boolean) {
  if (reduced) {
    el.textContent = formatNumber(target) + suffix;
    return;
  }
  const duration = 1200;
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function TeamStatCounters({
  stats,
  compact = false,
}: {
  stats: Stat[];
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = root.querySelectorAll<HTMLElement>("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          animateCount(el, parseFloat(el.dataset.count || "0"), el.dataset.suffix || "", reduced);
          observer.unobserve(el);
        });
      },
      { threshold: 0.35 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("tp-stats", compact && "tp-stats--compact")}>
      {stats.map((stat) => (
        <div key={stat.label} className="tp-stat">
          <div className="tp-stat__value" data-count={stat.count} data-suffix={stat.suffix}>
            0
          </div>
          <p className="tp-stat__label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
