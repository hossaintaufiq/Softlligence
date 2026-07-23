"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function WorkBottomCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="wp-bottom-cta">
      <div className="wp-container">
        <motion.div
          className="wp-bottom-cta__panel"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <div className="wp-bottom-cta__copy">
            <p className="wp-eyebrow">Next engagement</p>
            <h2>Need a web platform, AI system, tool, or template?</h2>
            <p>
              Tell us your sector and timeline. We&apos;ll walk through relevant work and what a first
              milestone could look like.
            </p>
          </div>
          <div className="wp-bottom-cta__actions">
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Start a project
            </Button>
            <Button href="/services" variant="outline" size="lg" className="max-sm:w-full">
              View services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
