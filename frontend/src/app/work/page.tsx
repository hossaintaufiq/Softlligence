import type { Metadata } from "next";
import { Work } from "@/components/Work";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies — FinTech, education, retail and public sector projects we've shipped.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="SELECTED WORK"
        title="A few of the products we've shipped."
        description="Representative projects across industries — details adapted for client confidentiality."
      />
      <Work />
    </main>
  );
}
