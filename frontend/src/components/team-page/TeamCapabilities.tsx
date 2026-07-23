"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamExpertise } from "@/lib/content";
import { teamCapabilityExtras } from "@/lib/teamPageEnrichment";

function CapIcon({ type }: { type: string }) {
  const c = "h-5 w-5";
  switch (type) {
    case "frontend":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 20h8" strokeLinecap="round" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" strokeLinecap="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 18h10a4 4 0 00.4-8 6 6 0 00-11.5 1.6A3.5 3.5 0 007 18z" strokeLinejoin="round" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={c} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function TeamCapabilities() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-capabilities" aria-labelledby="team-cap-title">
      <Container>
        <Eyebrow number="04">CAPABILITIES</Eyebrow>
        <SectionTitle>What our team brings</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-cap-title">
          Enterprise capabilities spanning architecture, product surfaces, and the platforms that
          keep them reliable.
        </p>

        <div className="tp-cap-grid">
          {teamExpertise.map((item, i) => {
            const techs = teamCapabilityExtras[item.title] ?? [];
            return (
              <motion.article
                key={item.title}
                className="tp-cap-card"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.24) }}
              >
                <span className="tp-cap-card__icon">
                  <CapIcon type={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {techs.length > 0 ? (
                  <ul className="tp-chips tp-chips--dense">
                    {techs.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
