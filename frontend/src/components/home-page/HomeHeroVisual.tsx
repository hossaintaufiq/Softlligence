"use client";

import { motion, useReducedMotion } from "framer-motion";

const metrics = [
  { l: "Orders", v: "2,418", u: "+12%" },
  { l: "Inventory", v: "98.2%", u: "OK" },
  { l: "Throughput", v: "1.4k", u: "/hr" },
];

const modules = ["ERP", "CRM", "MES", "AI", "BI"];

const nodes = [
  { t: "Finance", s: "Synced" },
  { t: "Warehouse", s: "Active" },
  { t: "Production", s: "Running" },
  { t: "AI Layer", s: "Online" },
];

/** Lightweight enterprise ERP / ops dashboard visual — CSS + SVG + Framer Motion. */
export function HomeHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="hp-visual"
      aria-hidden="true"
      animate={reduce ? undefined : { y: [0, -6, 0] }}
      transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="hp-visual__glow" />
      <div className="hp-visual__depth" />
      <div className="hp-visual__frame">
        <header className="hp-visual__bar">
          <span className="hp-visual__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hp-visual__title">Softlligence · Enterprise Ops</span>
          <span className="hp-visual__live">
            <i />
            LIVE
          </span>
        </header>

        <div className="hp-visual__body">
          <aside className="hp-visual__nav">
            {modules.map((item, i) => (
              <motion.span
                key={item}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + i * 0.05 }}
              >
                {item}
              </motion.span>
            ))}
          </aside>

          <div className="hp-visual__main">
            <div className="hp-visual__metrics">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.l}
                  className="hp-visual__metric"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
                >
                  <em>{m.l}</em>
                  <strong>{m.v}</strong>
                  <span>{m.u}</span>
                </motion.div>
              ))}
            </div>

            <div className="hp-visual__chart">
              <svg viewBox="0 0 320 120" className="hp-visual__svg" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hp-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="0.38" />
                    <stop offset="100%" stopColor="var(--theme-accent)" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hp-chart-stroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="var(--theme-accent)" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="var(--theme-accent)" />
                    <stop offset="100%" stopColor="var(--theme-accent-2)" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <motion.path
                  className="hp-visual__area"
                  d="M0 90 C40 80, 60 40, 100 55 S160 20, 200 45 S260 70, 320 30 L320 120 L0 120 Z"
                  fill="url(#hp-chart-fill)"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                />
                <motion.path
                  className="hp-visual__line"
                  d="M0 90 C40 80, 60 40, 100 55 S160 20, 200 45 S260 70, 320 30"
                  fill="none"
                  stroke="url(#hp-chart-stroke)"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  initial={reduce ? false : { pathLength: 0, opacity: 0.4 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div className="hp-visual__scan" />
            </div>

            <div className="hp-visual__nodes">
              {nodes.map((n, i) => (
                <motion.div
                  key={n.t}
                  className="hp-visual__node"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.45 + i * 0.06 }}
                >
                  <span className="hp-visual__pulse" />
                  <div>
                    <strong>{n.t}</strong>
                    <em>{n.s}</em>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
