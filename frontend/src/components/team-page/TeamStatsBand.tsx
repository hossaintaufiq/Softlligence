"use client";

import { Container, Eyebrow } from "@/components/ui/Section";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { teamPageStats } from "@/lib/content";
import { TeamStatCounters } from "./TeamStatCounters";

export function TeamStatsBand() {
  return (
    <section className="tp-section tp-stats-band" aria-labelledby="team-stats-title">
      <Container>
        <Eyebrow number="08">IMPACT</Eyebrow>
        <SketchHeadline id="team-stats-title">
          By the <SketchMark type="circle">numbers</SketchMark>
        </SketchHeadline>
        <p className="tp-lead tp-lead--narrow">
          A compact view of the team behind Softlligence delivery.
        </p>
        <TeamStatCounters stats={teamPageStats} />
      </Container>
    </section>
  );
}
