import type { Metadata } from "next";
import { ServicesDetail } from "@/components/ServicesDetail";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { serviceStats } from "@/lib/content";
import { pageHeroImages } from "@/lib/homeVisuals";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, mobile apps, product design, integrations, cloud and AI — clear offerings with clear timelines.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHAT WE BUILD"
        title={
          <>
            One team, from first wireframe to{" "}
            <span className="text-gradient">what&apos;s next.</span>
          </>
        }
        description="Six capabilities. Clear scope. Named engineers. Ownership you keep after launch — websites, apps, design, AI, integrations, and ongoing support."
        backgroundImage={pageHeroImages.services}
        meta={serviceStats.map((stat) => ({ value: stat.value, label: stat.label }))}
        actions={
          <>
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Book discovery
            </Button>
            <Button href="/work" variant="outline" size="lg" className="max-sm:w-full">
              View work
            </Button>
          </>
        }
      />
      <ServicesDetail />
    </main>
  );
}
