"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const lines = [
  { t: "kw", v: "const" },
  { t: "id", v: " system" },
  { t: "op", v: " = " },
  { t: "fn", v: "await" },
  { t: "call", v: " Softlligence" },
  { t: "op", v: "." },
  { t: "call", v: "build" },
  { t: "op", v: "({" },
];

const body = [
  [
    { t: "key", v: "  stack" },
    { t: "op", v: ": " },
    { t: "str", v: '["Next.js", "NestJS", "AI"]' },
    { t: "op", v: "," },
  ],
  [
    { t: "key", v: "  scale" },
    { t: "op", v: ": " },
    { t: "str", v: '"enterprise"' },
    { t: "op", v: "," },
  ],
  [
    { t: "key", v: "  deploy" },
    { t: "op", v: ": " },
    { t: "str", v: '"cloud-first"' },
    { t: "op", v: "," },
  ],
  [
    { t: "key", v: "  support" },
    { t: "op", v: ": " },
    { t: "bool", v: "true" },
  ],
];

export function HeroCodeVisual() {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.div
      className="sp-code"
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      aria-hidden="true"
    >
      <div className="sp-code__chrome">
        <span className="sp-code__dot sp-code__dot--r" />
        <span className="sp-code__dot sp-code__dot--y" />
        <span className="sp-code__dot sp-code__dot--g" />
        <span className="sp-code__file">enterprise.ts</span>
        <span className="sp-code__status">ready</span>
      </div>

      <pre className="sp-code__pre">
        <code>
          <div className="sp-code__line">
            {lines.map((tok, i) => (
              <span key={i} className={`sp-tok sp-tok--${tok.t}`}>
                {tok.v}
              </span>
            ))}
          </div>
          {body.map((row, ri) => (
            <div key={ri} className="sp-code__line">
              {row.map((tok, i) => (
                <span key={i} className={`sp-tok sp-tok--${tok.t}`}>
                  {tok.v}
                </span>
              ))}
            </div>
          ))}
          <div className="sp-code__line">
            <span className="sp-tok sp-tok--op">{"})"}</span>
          </div>
          <div className="sp-code__line sp-code__line--blank" />
          <div className="sp-code__line">
            <span className="sp-tok sp-tok--comment">{"// ship · monitor · support"}</span>
          </div>
          <div className="sp-code__line">
            <span className="sp-tok sp-tok--kw">return</span>
            <span className="sp-tok sp-tok--id"> system</span>
            <span className="sp-tok sp-tok--op">;</span>
            <span className="sp-code__cursor" />
          </div>
        </code>
      </pre>

      <div className="sp-code__footer">
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span>Ln 12</span>
      </div>
    </motion.div>
  );
}
