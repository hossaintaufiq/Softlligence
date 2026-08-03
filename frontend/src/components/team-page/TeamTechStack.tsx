"use client";

import { Container, Eyebrow } from "@/components/ui/Section";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { homeTechStack } from "@/lib/homePageContent";

export function TeamTechStack() {
  const row = [...homeTechStack, ...homeTechStack];

  return (
    <section className="tp-section tp-stack" aria-labelledby="team-stack-title">
      <Container>
        <Eyebrow number="05">STACK</Eyebrow>
        <SketchHeadline id="team-stack-title">
          Technologies we <SketchMark type="underline">ship</SketchMark> with
        </SketchHeadline>
        <p className="tp-lead tp-lead--narrow">
          Modern, maintainable tools chosen for enterprise workloads — not novelty.
        </p>
      </Container>

      <div className="tp-marquee" aria-hidden="true">
        <div className="tp-marquee__track">
          {row.map((tech, i) => (
            <span key={`${tech.name}-${i}`} className="tp-marquee__item" title={tech.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt=""
                width={32}
                height={32}
                className="tp-marquee__logo"
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </div>

      <div className="tp-stack__static sr-only">
        <ul>
          {homeTechStack.map((tech) => (
            <li key={tech.name}>{tech.name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
