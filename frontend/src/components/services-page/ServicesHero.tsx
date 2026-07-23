"use client";

import { motion } from "framer-motion";
import { servicesPageHero } from "@/lib/servicesPageContent";
import { MagneticButton } from "./MagneticButton";
import { HeroCodeVisual } from "./HeroCodeVisual";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function ServicesHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="sp-hero" aria-labelledby="sp-hero-title">
      <div className="sp-hero__grid">
        <div className="sp-hero__copy">
          <motion.p
            className="sp-eyebrow"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            Softlligence Services
          </motion.p>

          <h1 id="sp-hero-title" className="sp-hero__title">
            <motion.span
              className="sp-hero__line"
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {servicesPageHero.titleLine1}
            </motion.span>
            <motion.span
              className="sp-hero__line sp-hero__line--accent"
              initial={reduced ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              {servicesPageHero.titleLine2}
            </motion.span>
          </h1>

          <motion.p
            className="sp-hero__subtitle"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
          >
            {servicesPageHero.subtitle}
          </motion.p>

          <motion.div
            className="sp-hero__actions"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <MagneticButton href={servicesPageHero.primaryCta.href}>
              {servicesPageHero.primaryCta.label}
            </MagneticButton>
            <MagneticButton href={servicesPageHero.secondaryCta.href} variant="secondary">
              {servicesPageHero.secondaryCta.label}
            </MagneticButton>
          </motion.div>
        </div>

        <div className="sp-hero__visual">
          <HeroCodeVisual />
        </div>
      </div>
    </section>
  );
}
