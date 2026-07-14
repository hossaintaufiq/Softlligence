import type { Metadata } from "next";
import { Process } from "@/components/Process";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Process",
  description: "Five stages from discovery to growth — no stage starts before the last one is signed off.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="HOW A PROJECT RUNS"
        title="Five stages. No stage starts before the last one is signed off."
        description="A predictable path with clear deliverables at every step — so you always know what's next."
      />
      <Process />
    </main>
  );
}
