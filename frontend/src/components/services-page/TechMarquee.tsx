"use client";

import { servicesTechnologies } from "@/lib/servicesPageContent";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function TechMarquee() {
  const reduced = usePrefersReducedMotion();
  const row = [...servicesTechnologies, ...servicesTechnologies];

  return (
    <section className="sp-tech" id="technologies" aria-labelledby="sp-tech-title">
      <div className="sp-container">
        <header className="sp-section-head sp-section-head--center">
          <p className="sp-eyebrow">Technologies</p>
          <h2 id="sp-tech-title" className="sp-section-title">
            The stack behind the systems.
          </h2>
        </header>
      </div>

      <div className="sp-marquee" data-reduced={reduced ? "true" : "false"}>
        <div className="sp-marquee__track">
          {row.map((tech, i) => (
            <span key={`${tech}-${i}`} className="sp-marquee__item">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="sp-marquee sp-marquee--reverse" data-reduced={reduced ? "true" : "false"}>
        <div className="sp-marquee__track">
          {[...row].reverse().map((tech, i) => (
            <span key={`${tech}-r-${i}`} className="sp-marquee__item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
