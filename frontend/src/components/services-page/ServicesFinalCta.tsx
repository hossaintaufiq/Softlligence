"use client";

import { motion } from "framer-motion";
import { servicesFinalCta } from "@/lib/servicesPageContent";
import { MagneticButton } from "./MagneticButton";
import { FloatingParticles } from "./FloatingParticles";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function ServicesFinalCta() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="sp-final" id="start-project" aria-labelledby="sp-final-title">
      <FloatingParticles count={16} />
      <div className="sp-final__glow" aria-hidden="true" />
      <div className="sp-container">
        <motion.div
          className="sp-final__panel"
          initial={reduced ? false : { opacity: 0, y: 36, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="sp-eyebrow">Next step</p>
          <h2 id="sp-final-title" className="sp-final__title">
            {servicesFinalCta.title}
          </h2>
          <p className="sp-final__subtitle">{servicesFinalCta.subtitle}</p>
          <div className="sp-final__actions">
            <MagneticButton href={servicesFinalCta.primary.href}>
              {servicesFinalCta.primary.label}
            </MagneticButton>
            <MagneticButton href={servicesFinalCta.secondary.href} variant="secondary">
              {servicesFinalCta.secondary.label}
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
