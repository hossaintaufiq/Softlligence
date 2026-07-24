import type { Metadata } from "next";
import { AboutPageView } from "@/components/about-page/AboutPageView";

export const metadata: Metadata = {
  title: "About",
  description:
    "Softlligence Technologies is a founder-led software studio that designs, builds, and ships production systems for organizations — custom software, not stretched templates.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutPageView />
    </main>
  );
}
