"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow } from "@/components/ui/Section";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { teamWhyClients } from "@/lib/teamPageEnrichment";

export function TeamWhyClients() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-why" aria-labelledby="team-why-title">
      <Container>
        <Eyebrow number="07">PARTNERSHIP</Eyebrow>
        <SketchHeadline id="team-why-title">
          Why <SketchMark type="underline">clients</SketchMark> work with us
        </SketchHeadline>
        <p className="tp-lead tp-lead--narrow">
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
