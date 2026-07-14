import type { Metadata } from "next";
import { ServicesDetail } from "@/components/ServicesDetail";
import { PageHero } from "@/components/ui/PageHero";

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
        title="One team, from first wireframe to what's next."
        description="Six capabilities. Clear scope. Named engineers. Ownership you keep after launch."
      />
      <ServicesDetail />
    </main>
  );
}
