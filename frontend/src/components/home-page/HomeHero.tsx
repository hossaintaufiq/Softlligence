"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { SketchMark } from "@/components/ui/SketchHeadline";
import { pageRoutes } from "@/lib/navigation";
import { HomeHeroVisual } from "./HomeHeroVisual";

const trustItems = [
  "Enterprise Software",
  "Custom Development",
  "AI Integration",
  "Cloud Ready",
  "Secure Architecture",
];

const proofItems = [
  { value: "20+", label: "Projects" },
  { value: "8+", label: "Industries" },
  { value: "Enterprise", label: "Solutions" },
  { value: "Dedicated", label: "Engineering Team" },
];

const stackLine = ["ERP", "CRM", "MES", "AI", "SaaS", "Web", "Mobile"];

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="hp-hero" aria-labelledby="hp-hero-title">
      <Container className="hp-hero__layout">
        <div className="hp-hero__copy">
          <motion.p
            className="hp-kicker"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span>/</span> Softlligence Technologies · Enterprise Software
          </motion.p>

          <motion.h1
            id="hp-hero-title"
            className="hp-hero__title"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            Enterprise <SketchMark type="circle">software</SketchMark> that powers modern{" "}
            <SketchMark type="underline">businesses</SketchMark>.
          </motion.h1>

          <motion.p
            className="hp-hero__progression"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Enterprise Systems</span>
            <em aria-hidden="true">→</em>
            <span>Business Platforms</span>
            <em aria-hidden="true">→</em>
            <span>Web &amp; Mobile</span>
          </motion.p>

          <motion.p
            className="hp-hero__lead"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
          >
            We design and develop ERP, CRM, MES, HRMS, inventory systems, AI-powered platforms,
            business dashboards, web applications, and mobile solutions that replace manual
            processes, connect departments, and help organizations scale with confidence.
          </motion.p>

          <motion.div
            className="hp-hero__actions"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <Button href={pageRoutes.contact} size="lg" className="hp-magnetic max-sm:w-full">
              Book a Consultation
            </Button>
            <Button
              href={pageRoutes.work}
              variant="outline"
              size="lg"
              className="hp-magnetic max-sm:w-full"
            >
              Explore Our Work
            </Button>
          </motion.div>

          <motion.p
            className="hp-hero__positioning"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.24 }}
          >
            We engineer software that powers modern organizations.
          </motion.p>
        </div>

        <motion.div
          className="hp-hero__visual"
          initial={reduce ? false : { opacity: 0, y: 20, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HomeHeroVisual />

          <div className="hp-hero__aside">
            <ul className="hp-hero__trust">
              {trustItems.map((item) => (
                <li key={item}>
                  <span className="hp-hero__check" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                      <path
                        d="M3.5 8.5l3 3 6-6.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="hp-hero__stack">
              {stackLine.map((item, i) => (
                <span key={item}>
                  {i > 0 ? <i aria-hidden="true">·</i> : null}
                  {item}
                </span>
              ))}
            </p>

            <dl className="hp-hero__proof">
              {proofItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </Container>

      <a href="#trust" className="hp-scroll" aria-label="Scroll to trust and capabilities">
        <span />
        Scroll
      </a>
    </section>
  );
}
