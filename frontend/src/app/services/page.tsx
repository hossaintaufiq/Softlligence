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
        description="Six capabilities in a guided 3D scroll path — clear scope, named engineers, and ownership you keep after launch."
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
