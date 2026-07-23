"use client";

import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamPageStats } from "@/lib/content";
import { TeamStatCounters } from "./TeamStatCounters";

export function TeamStatsBand() {
  return (
    <section className="tp-section tp-stats-band" aria-labelledby="team-stats-title">
      <Container>
        <Eyebrow number="09">IMPACT</Eyebrow>
        <SectionTitle>By the numbers</SectionTitle>
        <p className="tp-lead tp-lead--narrow" id="team-stats-title">
          A compact view of the team behind Softlligence delivery.
        </p>
        <TeamStatCounters stats={teamPageStats} />
      </Container>
    </section>
  );
}
