"use client";

import { useEffect, useRef } from "react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { homeTrustStats } from "@/lib/homePageContent";

function formatNumber(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return Math.round(n).toString();
}

function animateCount(el: HTMLElement, target: number, suffix: string, reduced: boolean) {
  if (reduced) {
    el.textContent = formatNumber(target) + suffix;
    return;
  }
  const duration = 900;
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function HomeTrust() {
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
      { threshold: 0.25 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hp-section hp-trust" id="trust" aria-labelledby="hp-trust-title">
      <Container>
        <Eyebrow number="01">TRUST</Eyebrow>
        <SectionTitle>
          <span id="hp-trust-title">Credibility you can measure.</span>
        </SectionTitle>
        <p className="hp-lead">
          Enterprise delivery capacity — from platforms shipped to the engineers who build them.
        </p>

        <div ref={ref} className="hp-trust__grid">
          {homeTrustStats.map((stat) => (
            <div key={stat.label} className="hp-trust__card">
              <div className="hp-trust__value" data-count={stat.count} data-suffix={stat.suffix}>
                0
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
