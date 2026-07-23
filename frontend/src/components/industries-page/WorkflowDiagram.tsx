"use client";

import { motion } from "framer-motion";
import type { IndustryWorkflowStep } from "@/lib/industriesPageEnrichment";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function WorkflowDiagram({ steps }: { steps: IndustryWorkflowStep[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <ol className="ip-workflow">
      {steps.map((step, i) => (
        <motion.li
          key={`${step.label}-${i}`}
          className="ip-workflow__step"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.4, delay: reduced ? 0 : i * 0.06 }}
        >
          <span className="ip-workflow__node">{String(i + 1).padStart(2, "0")}</span>
          <span className="ip-workflow__label">{step.label}</span>
          {i < steps.length - 1 ? (
            <span className="ip-workflow__arrow" aria-hidden="true">
              →
            </span>
          ) : null}
        </motion.li>
      ))}
    </ol>
  );
}
