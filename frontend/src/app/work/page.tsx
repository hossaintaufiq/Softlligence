import type { Metadata } from "next";
import { WorkDetail } from "@/components/WorkDetail";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected case studies across FinTech, education, retail and public sector — with live demos and repositories where available.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="SELECTED WORK"
        title="A portfolio of shipped products."
        description="Listed builds across industries — open the live site or GitHub when privacy allows."
      />
      <WorkDetail />
    </main>
  );
}
