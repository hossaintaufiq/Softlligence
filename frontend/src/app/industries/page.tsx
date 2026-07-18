import type { Metadata } from "next";
import { IndustriesDetail } from "@/components/IndustriesDetail";
import { IndustrySubnav } from "@/components/IndustrySubnav";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { pageHeroImages } from "@/lib/homeVisuals";
import { industryStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Custom software for government, education, finance, healthcare, retail and nonprofits — built with sector-specific security, uptime and user experience.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHO WE BUILD FOR"
        title="Different organizations. One build standard."
        description="Sector-specific experience without cutting corners on security, accessibility, or uptime — so your users trust the product from day one."
        backgroundImage={pageHeroImages.industries}
        meta={industryStats.map((stat) => ({ value: stat.value, label: stat.label }))}
        actions={
          <>
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Talk sector fit
            </Button>
            <Button href="/work" variant="outline" size="lg" className="max-sm:w-full">
              Related work
            </Button>
          </>
        }
      />

      <IndustrySubnav />
      <IndustriesDetail />
    </main>
  );
}
