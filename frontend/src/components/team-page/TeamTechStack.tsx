"use client";

import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamTechStack } from "@/lib/teamPageEnrichment";

export function TeamTechStack() {
  const row = [...teamTechStack, ...teamTechStack];

  return (
    <section className="tp-section tp-stack" aria-labelledby="team-stack-title">
      <Container>
        <Eyebrow number="05">STACK</Eyebrow>
        <SectionTitle>Technologies we ship with</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-stack-title">
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
