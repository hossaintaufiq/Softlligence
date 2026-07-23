"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamCulturePoints } from "@/lib/teamPageEnrichment";

export function TeamCulture() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-culture" aria-labelledby="team-culture-title">
      <Container>
        <div className="tp-culture__grid">
          <div className="tp-culture__intro">
            <Eyebrow number="01">CULTURE</Eyebrow>
            <SectionTitle>
              <span id="team-culture-title">Built for partnership, not handoffs.</span>
            </SectionTitle>
            <p className="tp-lead">
              We solve business problems through technology — working side by side with your
              stakeholders, valuing engineering excellence, and designing systems meant to last.
            </p>
          </div>

          <ul className="tp-culture__list">
            {teamCulturePoints.map((point, i) => (
              <motion.li
                key={point.title}
                className="tp-culture__item"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <span className="tp-culture__index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
