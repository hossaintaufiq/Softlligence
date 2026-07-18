import type { Metadata } from "next";
import { AboutDetail } from "@/components/AboutDetail";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { aboutSignal, aboutStory } from "@/lib/content";
import { pageHeroImages } from "@/lib/homeVisuals";

export const metadata: Metadata = {
  title: "About",
  description:
    "Softlligence Technologies is a founder-led software studio that designs, builds, and ships production systems for organizations — custom software, not stretched templates.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow={aboutStory.eyebrow}
        title={
          <>
            Softlligence{" "}
            <span className="text-gradient">builds software</span> organizations actually run on.
          </>
        }
        description={aboutStory.lead}
        backgroundImage={pageHeroImages.about}
        meta={aboutSignal.map((item) => ({ value: item.value, label: item.label }))}
        actions={
          <>
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Start a project
            </Button>
            <Button href="/team" variant="outline" size="lg" className="max-sm:w-full">
              Meet the team
            </Button>
          </>
        }
      />
      <AboutDetail />
    </main>
  );
}
