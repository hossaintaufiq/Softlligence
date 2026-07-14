"use client";

import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { count: 120, suffix: "+", label: "Products shipped", code: "01" },
  { count: 45, suffix: "+", label: "Organizations", code: "02" },
  { count: 2400000, suffix: "+", label: "People reached", code: "03" },
  { count: 92, suffix: "%", label: "Client retention", code: "04" },
];

function formatNumber(n: number) {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return Math.round(n).toString();
}

function animateCount(el: HTMLElement, target: number, suffix: string) {
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
            animateCount(el, parseFloat(el.dataset.count || "0"), el.dataset.suffix || "");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.25 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-perf border-b border-white/8 py-10 md:py-14">
      <Container>
        <Reveal>
          <div
            ref={containerRef}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-white/9 bg-white/9 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-ink px-5 py-6 transition-colors hover:bg-panel sm:px-6 sm:py-8"
              >
                <p className="mb-3 font-mono text-[10px] tracking-[0.14em] text-text-dim">
                  {stat.code}
                </p>
                <div
                  className="mb-1.5 font-display text-[clamp(26px,3.5vw,36px)] leading-none font-semibold tracking-tight text-accent"
                  data-count={stat.count}
                  data-suffix={stat.suffix}
                >
                  0
                </div>
                <p className="m-0 text-[12px] text-text-dim sm:text-[13px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
