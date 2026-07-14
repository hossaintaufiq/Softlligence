"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Section";

const stats = [
  {
    count: 120,
    suffix: "",
    label: "Products shipped",
    sub: "Websites, web apps and mobile apps launched to production",
  },
  {
    count: 45,
    suffix: "",
    label: "Organizations served",
    sub: "Companies, schools, agencies and nonprofits we've built for",
  },
  {
    count: 2400000,
    suffix: "+",
    label: "People reached",
    sub: "Combined active users across products we maintain",
  },
  {
    count: 92,
    suffix: "%",
    label: "Client retention",
    sub: "Clients who return for their next build or come back for support",
  },
];

function formatNumber(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return Math.round(n).toString();
}

function animateCount(el: HTMLElement, target: number, suffix: string) {
  const duration = 1400;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-count]");
    if (!els) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.count || "0");
            const suffix = el.dataset.suffix || "";
            animateCount(el, target, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Container>
      <div
        ref={containerRef}
        className="grid -translate-y-px gap-px overflow-hidden rounded-[14px] border border-white/9 bg-white/9 max-[720px]:grid-cols-2 max-[980px]:grid-cols-2 min-[981px]:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink px-7 py-[38px]">
            <div
              className="mb-2 font-display text-[clamp(30px,3vw,42px)] text-accent"
              data-count={stat.count}
              data-suffix={stat.suffix}
            >
              0
            </div>
            <div className="text-sm font-semibold">
              {stat.label}
              <span className="mt-1.5 block text-[13px] leading-snug font-normal text-text-dim">
                {stat.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
