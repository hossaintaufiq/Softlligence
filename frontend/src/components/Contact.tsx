"use client";

import { companyContact } from "@/lib/navigation";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

/** Compact contact CTA block for reuse — full page lives in contact-page/ContactPageView. */
export function Contact({ summary = false }: { summary?: boolean }) {
  if (!summary) {
    return null;
  }

  return (
    <section
      className="section-perf relative overflow-hidden border-y border-white/5 bg-ink py-16 md:py-20"
      id="contact"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--theme-accent)_12%,transparent),transparent_55%)]"
        aria-hidden="true"
      />
      <Container className="relative max-w-[640px] text-center">
        <Eyebrow number="10">START A PROJECT</Eyebrow>
        <SectionTitle className="mx-auto">Tell us what you&apos;re building.</SectionTitle>
        <SectionSub className="mx-auto">
          Send a brief or reach us directly — we reply within one business day.
        </SectionSub>

        <div className="mb-7 flex flex-col items-center gap-2.5 font-mono text-[13.5px] text-text-dim">
          <a href={companyContact.mailto} className="text-text transition-colors hover:text-accent">
            {companyContact.email}
          </a>
          <a href={companyContact.tel} className="transition-colors hover:text-accent">
            {companyContact.phoneDisplay}
          </a>
        </div>

        <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg" className="max-sm:w-full">
            Send a project brief
          </Button>
          <Button href={companyContact.mailto} variant="outline" size="lg" className="max-sm:w-full">
            Email Softlligence
          </Button>
        </div>
      </Container>
    </section>
  );
}
