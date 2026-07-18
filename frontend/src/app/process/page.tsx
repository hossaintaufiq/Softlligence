import type { Metadata } from "next";
import { Process } from "@/components/Process";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { pageHeroImages } from "@/lib/homeVisuals";

export const metadata: Metadata = {
  title: "Process",
  description: "Five stages from discovery to growth — no stage starts before the last one is signed off.",
};

export default function ProcessPage() {
  return (
    <main>
      <PageHero
        eyebrow="HOW A PROJECT RUNS"
        title="Five stages. Clear gates. Visible progress."
        description="A predictable path from discovery to growth — with signed-off deliverables at every step, so you always know what’s next and who’s accountable."
        backgroundImage={pageHeroImages.process}
        meta={[
          { value: "5", label: "Stages" },
          { value: "2 wks", label: "Sprint cadence" },
          { value: "1 channel", label: "Named engineers" },
          { label: "Scope changes stay visible" },
        ]}
        actions={
          <>
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Start discovery
            </Button>
            <Button href="/work" variant="outline" size="lg" className="max-sm:w-full">
              See our work
            </Button>
          </>
        }
      />
      <Process />
    </main>
  );
}
