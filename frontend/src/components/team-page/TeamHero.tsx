"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Section";
import { teamPageStats } from "@/lib/content";
import { TeamStatCounters } from "./TeamStatCounters";

export function TeamHero() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-hero" aria-labelledby="team-hero-title">
      <div className="tp-hero__bg" aria-hidden="true">
        <div className="tp-hero__grid" />
        <div className="tp-hero__glow tp-hero__glow--a" />
        <div className="tp-hero__glow tp-hero__glow--b" />
        <div className="tp-hero__orbit" />
        <div className="tp-hero__lines">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} style={{ ["--i" as string]: i }} />
          ))}
        </div>
      </div>

      <Container className="tp-hero__inner">
        <div className="tp-hero__copy">
          <motion.p
            className="tp-kicker"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>/</span> Leadership &amp; engineering
          </motion.p>

          <motion.h1
            id="team-hero-title"
            className="tp-hero__title"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            Meet the people engineering modern digital systems.
          </motion.h1>

          <motion.p
            className="tp-hero__lead"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            Softlligence is led by engineers who still ship — architecture, interfaces, and delivery
            standards you can trust with enterprise workloads.
          </motion.p>

          <motion.ul
            className="tp-hero__pillars"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <li>Hands-on leadership</li>
            <li>Enterprise delivery</li>
            <li>Long-term partnership</li>
          </motion.ul>
        </div>

        <motion.aside
          className="tp-hero__panel"
          initial={reduce ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.14 }}
          aria-label="Team snapshot"
        >
          <p className="tp-hero__panel-label">Team snapshot</p>
          <TeamStatCounters stats={teamPageStats} compact />
          <div className="tp-hero__panel-foot">
            <span className="tp-dot" />
            Builders you meet on the first call stay through launch.
          </div>
        </motion.aside>
      </Container>
    </section>
  );
}
