"use client";

import { motion } from "framer-motion";
import type { IndustrySolution } from "@/lib/industriesPageEnrichment";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function SolutionCards({ solutions }: { solutions: IndustrySolution[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="ip-solution-grid">
      {solutions.map((item, i) => (
        <motion.article
          key={item.title}
          className="ip-solution"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.05 }}
        >
          <span className="ip-solution__num">{String(i + 1).padStart(2, "0")}</span>
          <h4>{item.title}</h4>
          <p>{item.detail}</p>
        </motion.article>
      ))}
    </div>
  );
}
