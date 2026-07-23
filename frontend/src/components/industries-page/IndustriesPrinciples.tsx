"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { industryPrinciples } from "@/lib/content";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function IndustriesPrinciples() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="ip-principles" aria-labelledby="ip-principles-title">
      <div className="ip-container">
        <motion.header
          className="ip-principles__head"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="ip-eyebrow">How we work across sectors</p>
          <h2 id="ip-principles-title">
            Same rigor, whether you&apos;re a city hall or a clinic.
          </h2>
        </motion.header>

        <div className="ip-principles__grid">
          {industryPrinciples.map((principle, i) => (
            <motion.article
              key={principle.title}
              className="ip-principle"
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.07 }}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
