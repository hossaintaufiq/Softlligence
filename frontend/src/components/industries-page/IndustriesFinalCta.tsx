"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function IndustriesFinalCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="ip-final" aria-labelledby="ip-final-title">
      <div className="ip-container">
        <motion.div
          className="ip-final__panel"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="ip-eyebrow">Next step</p>
          <h2 id="ip-final-title">Ready to transform your industry?</h2>
          <p>
            Let&apos;s build software designed around your business—not force your business around
            software.
          </p>
          <div className="ip-final__actions">
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Book a Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="max-sm:w-full">
              Discuss Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
