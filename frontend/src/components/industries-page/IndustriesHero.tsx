"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { industryStats, industries } from "@/lib/content";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const pillars = industries.slice(0, 4).map((industry) => ({
  label: industry.tag,
  detail: industry.headline,
}));

const proofLines = [
  { k: "Focus", v: "Sector-specific systems" },
  { k: "Standard", v: "Security · uptime · UX" },
  { k: "Delivery", v: "Production-ready builds" },
  { k: "Ownership", v: "Docs your team can run" },
];

export function IndustriesHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="ip-hero" aria-labelledby="ip-hero-title">
      <div className="ip-hero__atmosphere" aria-hidden="true">
        <div className="ip-hero__grid" />
        <div className="ip-hero__glow ip-hero__glow--a" />
        <div className="ip-hero__glow ip-hero__glow--b" />
        <div className="ip-hero__frame" />
      </div>

      <div className="ip-container ip-hero__layout">
        <div className="ip-hero__copy">
          <motion.div
            className="ip-hero__kicker"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="ip-hero__status">
              <span className="ip-hero__status-dot" aria-hidden="true" />
              Industries
            </span>
            <span className="ip-eyebrow ip-eyebrow--inline">Who we build for</span>
          </motion.div>

          <h1 id="ip-hero-title" className="ip-hero__title">
            <motion.span
              className="ip-hero__line"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              Software built around
            </motion.span>
            <motion.span
              className="ip-hero__line ip-hero__line--accent"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              your industry.
            </motion.span>
          </h1>

          <motion.p
            className="ip-hero__sub"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            Every industry operates differently. We design enterprise software tailored to your
            workflows, regulations, and business goals—so your teams and users can trust the product
            from day one.
          </motion.p>

          <motion.div
            className="ip-hero__actions"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <Button href="#industry-nav" size="lg" className="max-sm:w-full">
              Explore Industries
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="max-sm:w-full">
              Book Consultation
            </Button>
          </motion.div>

          <motion.ul
            className="ip-hero__pillars"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
          >
            {pillars.map((item, i) => (
              <li key={item.label}>
                <span className="ip-hero__pillar-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="ip-hero__pillar-copy">
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className="ip-hero__panel"
          aria-label="Industries overview"
          initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ip-hero__panel-chrome">
            <span className="ip-hero__panel-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="ip-hero__panel-title">softlligence · industries</span>
            <span className="ip-hero__panel-live">Live</span>
          </div>

          <div className="ip-hero__panel-body">
            <p className="ip-hero__panel-label">Sector coverage</p>
            <dl className="ip-hero__stats">
              {industryStats.map((stat) => (
                <div key={stat.label} className="ip-hero__stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="ip-hero__proof">
              <p className="ip-hero__panel-label">Delivery signal</p>
              <ul>
                {proofLines.map((line) => (
                  <li key={line.k}>
                    <span>{line.k}</span>
                    <strong>{line.v}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ip-hero__panel-foot">
              <span>Sector-ready systems</span>
              <span className="ip-hero__panel-bar" aria-hidden="true" />
              <span>Scroll to explore</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
