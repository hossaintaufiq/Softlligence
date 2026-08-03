"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function WorkBottomCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="wp-bottom-cta" aria-labelledby="wp-bottom-cta-title">
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
            <SketchHeadline id="wp-bottom-cta-title">
              Need a web <SketchMark type="underline">platform</SketchMark>, AI system, tool, or
              template?
            </SketchHeadline>
            <p>
              Tell us your sector and timeline. We&apos;ll walk through relevant work and what a first
              milestone could look like.
            </p>
          </div>
          <div className="wp-bottom-cta__actions">
            <Button href="/contact" size="lg">
              Start a project
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
