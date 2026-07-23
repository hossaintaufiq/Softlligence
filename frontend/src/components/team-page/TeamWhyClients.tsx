"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamWhyClients } from "@/lib/teamPageEnrichment";

export function TeamWhyClients() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-why" aria-labelledby="team-why-title">
      <Container>
        <Eyebrow number="08">PARTNERSHIP</Eyebrow>
        <SectionTitle>Why clients work with us</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-why-title">
          Engagements built for clarity, continuity, and enterprise-grade outcomes.
        </p>

        <div className="tp-why__grid">
          {teamWhyClients.map((item, i) => (
            <motion.article
              key={item.title}
              className="tp-why-card"
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.24) }}
            >
              <span className="tp-why-card__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
