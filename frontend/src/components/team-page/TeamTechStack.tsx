"use client";

import { Container, Eyebrow } from "@/components/ui/Section";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { teamTechStack } from "@/lib/teamPageEnrichment";

export function TeamTechStack() {
  const row = [...teamTechStack, ...teamTechStack];

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
            <span key={`${tech}-${i}`} className="tp-marquee__item">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="tp-stack__static sr-only">
        <ul>
          {teamTechStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
