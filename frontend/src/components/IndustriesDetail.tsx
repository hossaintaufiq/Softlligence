import dynamic from "next/dynamic";
import { industries } from "@/lib/content";
import { IndustriesHero } from "@/components/industries-page/IndustriesHero";
import { IndustryNav } from "@/components/industries-page/IndustryNav";
import { FinalCTA } from "@/components/FinalCTA";
import "@/components/industries-page/industries-page.css";

const IndustrySection = dynamic(() =>
  import("@/components/industries-page/IndustrySection").then((m) => ({
    default: m.IndustrySection,
  })),
);
const IndustriesPrinciples = dynamic(() =>
  import("@/components/industries-page/IndustriesPrinciples").then((m) => ({
    default: m.IndustriesPrinciples,
  })),
);
const IndustriesFinalCta = dynamic(() =>
  import("@/components/industries-page/IndustriesFinalCta").then((m) => ({
    default: m.IndustriesFinalCta,
  })),
);

export function IndustriesDetail() {
  return (
    <div className="industries-page">
      <IndustriesHero />
      <IndustryNav />
      {industries.map((industry, index) => (
        <IndustrySection key={industry.id} industry={industry} index={index} />
      ))}
      <IndustriesPrinciples />
      <IndustriesFinalCta />
      <FinalCTA />
    </div>
  );
}
