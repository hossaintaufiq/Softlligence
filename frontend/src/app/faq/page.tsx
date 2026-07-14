import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about timelines, pricing, engagement models, security and support.",
};

export default function FAQPage() {
  return (
    <main>
      <PageHero
        eyebrow="QUESTIONS"
        title="Answers before you have to ask."
        description="Timeline, pricing, engagement models, security and what happens after launch."
      />
      <FAQ />
    </main>
  );
}
