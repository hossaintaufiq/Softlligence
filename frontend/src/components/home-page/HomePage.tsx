import "./home.css";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeHero } from "./HomeHero";
import { HomeStats } from "./HomeStats";
import { HomeOutcomes } from "./HomeOutcomes";
import { HomeProducts } from "./HomeProducts";
import { HomeSolutions } from "./HomeSolutions";
import { HomeIndustries } from "./HomeIndustries";
import { HomeWhy } from "./HomeWhy";
import { HomeTech } from "./HomeTech";
import { HomeWork } from "./HomeWork";
import { HomeFinalCta } from "./HomeFinalCta";

export function HomePage() {
  return (
    <div className="home">
      <ScrollReveal />
      <HomeHero />
      <HomeStats />
      <HomeOutcomes />
      <HomeProducts />
      <HomeSolutions />
      <HomeIndustries />
      <HomeWhy />
      <HomeTech />
      <HomeWork />
      <HomeFinalCta />
    </div>
  );
}
