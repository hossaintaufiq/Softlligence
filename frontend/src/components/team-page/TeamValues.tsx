"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamValues } from "@/lib/teamPageEnrichment";

export function TeamValues() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-values" aria-labelledby="team-values-title">
      <Container>
        <Eyebrow number="07">VALUES</Eyebrow>
        <SectionTitle>Team values</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-values-title">
          Principles that shape how we design, build, and partner.
        </p>

        <div className="tp-values__grid">
          {teamValues.map((value, i) => (
            <motion.article
              key={value.title}
              className="tp-value"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.28) }}
            >
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
