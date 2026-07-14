import type { Metadata } from "next";
import { Industries } from "@/components/Industries";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Industries",
  description: "Software for government, education, finance, healthcare, retail and nonprofits.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="WHO WE BUILD FOR"
        title="Different organizations, the same standard of build."
        description="Sector-specific experience without cutting corners on security, accessibility or uptime."
      />
      <Industries />
    </main>
  );
}
