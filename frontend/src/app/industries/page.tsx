import type { Metadata } from "next";
import { IndustriesDetail } from "@/components/IndustriesDetail";
import { IndustrySubnav } from "@/components/IndustrySubnav";
import { PageHero } from "@/components/ui/PageHero";

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
        title="Different organizations, the same standard of build."
        description="Sector-specific experience without cutting corners on security, accessibility or uptime — so your users trust the product from day one."
      />

      <IndustrySubnav />
      <IndustriesDetail />
    </main>
  );
}
