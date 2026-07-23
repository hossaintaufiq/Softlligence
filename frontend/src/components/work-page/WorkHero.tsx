"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { workStats } from "@/lib/content";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const pillars = [
  { label: "Enterprise software", detail: "ERP · CRM · ops systems" },
  { label: "Web platforms", detail: "Portals · SaaS · dashboards" },
  { label: "AI systems", detail: "RAG · assistants · automation" },
  { label: "Digital products", detail: "Mobile · tools · templates" },
];

const proofLines = [
  { k: "Delivery", v: "Production-ready builds" },
  { k: "Evidence", v: "Live · hosted · GitHub" },
  { k: "Scope", v: "Web · AI · tools · templates" },
  { k: "Standard", v: "Enterprise-grade engineering" },
];

export function WorkHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="wp-hero" aria-labelledby="wp-hero-title">
      <div className="wp-hero__atmosphere" aria-hidden="true">
        <div className="wp-hero__grid" />
        <div className="wp-hero__glow wp-hero__glow--a" />
        <div className="wp-hero__glow wp-hero__glow--b" />
        <div className="wp-hero__frame" />
      </div>

      <div className="wp-container wp-hero__layout">
        <div className="wp-hero__copy">
          <motion.div
            className="wp-hero__kicker"
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="wp-hero__status">
              <span className="wp-hero__status-dot" aria-hidden="true" />
              Portfolio
            </span>
            <span className="wp-eyebrow wp-eyebrow--inline">Selected work</span>
          </motion.div>

          <h1 id="wp-hero-title" className="wp-hero__title">
            <motion.span
              className="wp-hero__line"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              Engineering products
            </motion.span>
            <motion.span
              className="wp-hero__line"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              used by real
            </motion.span>
            <motion.span
              className="wp-hero__line wp-hero__line--accent"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              organizations.
            </motion.span>
          </h1>

          <motion.p
            className="wp-hero__sub"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
          >
            Enterprise platforms, web systems, AI workflows, and digital products—built for
            production, documented for ownership, and linked where you can verify the work.
          </motion.p>

          <motion.div
            className="wp-hero__actions"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
          >
            <Button href="#portfolio" size="lg" className="max-sm:w-full">
              Explore portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="max-sm:w-full">
              Start a project
            </Button>
          </motion.div>

          <motion.ul
            className="wp-hero__pillars"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44 }}
          >
            {pillars.map((item, i) => (
              <li key={item.label}>
                <span className="wp-hero__pillar-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="wp-hero__pillar-copy">
                  <strong>{item.label}</strong>
                  <span>{item.detail}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className="wp-hero__panel"
          aria-label="Portfolio overview"
          initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="wp-hero__panel-chrome">
            <span className="wp-hero__panel-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="wp-hero__panel-title">softlligence · portfolio</span>
            <span className="wp-hero__panel-live">Live</span>
          </div>

          <div className="wp-hero__panel-body">
            <p className="wp-hero__panel-label">Capability mix</p>
            <dl className="wp-hero__stats">
              {workStats.map((stat) => (
                <div key={stat.label} className="wp-hero__stat">
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>

            <div className="wp-hero__proof">
              <p className="wp-hero__panel-label">Engineering signal</p>
              <ul>
                {proofLines.map((line) => (
                  <li key={line.k}>
                    <span>{line.k}</span>
                    <strong>{line.v}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="wp-hero__panel-foot">
              <span>Verified builds</span>
              <span className="wp-hero__panel-bar" aria-hidden="true" />
              <span>Scroll to inspect</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
