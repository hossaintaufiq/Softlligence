"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamProcessSteps } from "@/lib/teamPageEnrichment";

export function TeamProcess() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-process" aria-labelledby="team-process-title">
      <Container>
        <Eyebrow number="06">DELIVERY</Eyebrow>
        <SectionTitle>Our delivery process</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-process-title">
          A clear path from discovery to sustained production support.
        </p>

        <ol className="tp-process__list">
          {teamProcessSteps.map((step, i) => (
            <motion.li
              key={step}
              className="tp-process__step"
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: Math.min(i * 0.05, 0.3) }}
            >
              <div className="tp-process__rail">
                <span className="tp-process__node">{String(i + 1).padStart(2, "0")}</span>
                {i < teamProcessSteps.length - 1 ? <span className="tp-process__line" /> : null}
              </div>
              <div className="tp-process__content">
                <h3>{step}</h3>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
