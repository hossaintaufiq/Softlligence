"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function TeamFinalCta() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-cta" aria-labelledby="team-cta-title">
      <Container className="tp-cta__inner">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SketchHeadline id="team-cta-title">
            Let&apos;s Build Something That <SketchMark type="underline">Matters.</SketchMark>
          </SketchHeadline>
          <p>
            Whether you&apos;re building an ERP, CRM, AI platform, or enterprise software solution,
            our team is ready to help turn your vision into reality.
          </p>
          <div className="tp-cta__actions">
            <Button href="/contact" size="lg" className="tp-magnetic">
              Start Your Project
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="tp-magnetic">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
