"use client";

import { useState, type ReactNode } from "react";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";
import { homeWhatWeBuild } from "@/lib/homePageContent";

const icons: Record<string, ReactNode> = {
  erp: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 19c1.5-3 4-4.5 6-4.5S13.5 16 15 19M14 14.5c1.5-.3 3 .2 4.5 2.5" strokeLinecap="round" />
    </svg>
  ),
  mes: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 17h16M6 17V9l4-3 4 3v8M10 17v-4h4v4" strokeLinejoin="round" />
    </svg>
  ),
  inventory: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 7h16v12H4zM4 7l2-3h12l2 3M9 11h6" strokeLinejoin="round" />
    </svg>
  ),
  manufacturing: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 20h18M5 20V10l5 3V8l5 3V6l4 2v12" strokeLinejoin="round" />
    </svg>
  ),
  hrms: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8M8 13h5M8 17h3" strokeLinecap="round" />
    </svg>
  ),
  "ai-automation": (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" strokeLinecap="round" />
    </svg>
  ),
  bi: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19V5M4 19h16M8 16V10M12 16V7M16 16v-5" strokeLinecap="round" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8" strokeLinecap="round" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  ),
};

export function HomeWhatWeBuild() {
  const [active, setActive] = useState<string | null>(homeWhatWeBuild[0]?.id ?? null);

  return (
    <section className="hp-section hp-build" id="services" aria-labelledby="hp-build-title">
      <Container>
        <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
        <SectionTitle>
          <span id="hp-build-title">Enterprise software that runs the business.</span>
        </SectionTitle>
        <p className="hp-lead">
          From ERP and MES to AI automation and mobile — platforms engineered for organizations ready
          to grow.
        </p>

        <div className="hp-build__grid">
          {homeWhatWeBuild.map((item) => {
            const open = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className={`hp-build__card${open ? " is-open" : ""}`}
                onClick={() => setActive(open ? null : item.id)}
                aria-expanded={open}
              >
                <span className="hp-build__icon">{icons[item.id]}</span>
                <h3>{item.title}</h3>
                <p className={open ? undefined : "hp-build__teaser"}>{item.description}</p>
              </button>
            );
          })}
        </div>

        <div className="hp-section__action">
          <Button href={pageRoutes.services} variant="outline">
            Explore services
          </Button>
        </div>
      </Container>
    </section>
  );
}
