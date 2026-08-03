"use client";

import { homeTechStack } from "@/lib/homePageContent";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function TechMarquee() {
  const reduced = usePrefersReducedMotion();
  const row = [...homeTechStack, ...homeTechStack];
  const reverseRow = [...row].reverse();

  return (
    <section className="sp-tech" id="technologies" aria-labelledby="sp-tech-title">
      <div className="sp-container">
        <header className="sp-section-head sp-section-head--center">
          <p className="sp-eyebrow">Technologies</p>
          <SketchHeadline id="sp-tech-title" className="sp-section-title">
            The <SketchMark type="circle">stack</SketchMark> behind the systems.
          </SketchHeadline>
        </header>
      </div>

      <div className="sp-marquee" data-reduced={reduced ? "true" : "false"}>
        <div className="sp-marquee__track">
          {row.map((tech, i) => (
            <span key={`${tech.name}-${i}`} className="sp-marquee__item" title={tech.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="sp-marquee__logo"
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>

      <div className="sp-marquee sp-marquee--reverse" data-reduced={reduced ? "true" : "false"}>
        <div className="sp-marquee__track">
          {reverseRow.map((tech, i) => (
            <span key={`${tech.name}-r-${i}`} className="sp-marquee__item" title={tech.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="sp-marquee__logo"
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
