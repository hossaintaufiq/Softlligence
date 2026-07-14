import type { Metadata } from "next";
import { Team } from "@/components/Team";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Team",
  description: "Four developers, one build team — BSc CSE students at North South University, Bangladesh.",
};

export default function TeamPage() {
  return (
    <main>
      <PageHero
        eyebrow="THE TEAM"
        title="Four developers, one build team."
        description="Softlligence Technologies is run by developers completing their BSc in Computer Science & Engineering at North South University."
      />
      <Team />

      <section className="border-t border-white/5 bg-panel py-24">
        <Container className="max-w-[720px]">
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight">
            How we work together
          </h2>
          <p className="mb-4 text-base text-text-dim">
            We operate as a single unit — design decisions, code reviews and client calls are shared
            across the team. No silos, no handoffs to people who weren&apos;t in the room.
          </p>
          <p className="m-0 text-base text-text-dim">
            Every project gets a named point of contact, but you&apos;re never more than one message
            away from whoever is actually building your product.
          </p>
        </Container>
      </section>
    </main>
  );
}
