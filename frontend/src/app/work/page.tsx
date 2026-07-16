import type { Metadata } from "next";
import { WorkDetail } from "@/components/WorkDetail";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Shipped products and industry-ready templates — real client work, AI/ML builds, tools, and customizable starters.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="SELECTED WORK"
        title="Shipped products, AI/ML, tools, and templates."
        description="Real client builds, intelligent workflows, internal utilities, and sector-ready starters — open live, hosted, or GitHub links when available."
      />
      <WorkDetail />
    </main>
  );
}
