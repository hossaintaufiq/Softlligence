import type { Metadata } from "next";
import { About } from "@/components/About";
import { Comparison } from "@/components/Comparison";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "A build studio sized so you always know who's working on your project.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="ABOUT US"
        title="A build studio, sized so you always know who's working on your project."
        description="Small enough to talk to the engineers. Structured enough for a bank or university."
      />
      <About />
      <Comparison />
    </main>
  );
}
