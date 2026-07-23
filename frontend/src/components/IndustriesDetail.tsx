import { industries } from "@/lib/content";
import { IndustriesHero } from "@/components/industries-page/IndustriesHero";
import { IndustryNav } from "@/components/industries-page/IndustryNav";
import { IndustrySection } from "@/components/industries-page/IndustrySection";
import { IndustriesPrinciples } from "@/components/industries-page/IndustriesPrinciples";
import { IndustriesFinalCta } from "@/components/industries-page/IndustriesFinalCta";
import { FinalCTA } from "@/components/FinalCTA";
import "@/components/industries-page/industries-page.css";

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
