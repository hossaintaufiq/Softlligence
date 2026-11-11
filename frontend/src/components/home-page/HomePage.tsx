import "./home-page.css";
import "./sketch-headline.css";
import { PageOrbBridge } from "@/components/ui/PageOrbBridge";
import { HomeHero } from "./HomeHero";
import { HomeProducts } from "./HomeProducts";
import { HomeTrust } from "./HomeTrust";
import { HomeWhatWeBuild } from "./HomeWhatWeBuild";
import { HomeProblems } from "./HomeProblems";
import { HomeIndustries } from "./HomeIndustries";
import { HomeFeaturedWork } from "./HomeFeaturedWork";
import { HomeDelivery } from "./HomeDelivery";
import { HomeWhy } from "./HomeWhy";
import { HomeTeam } from "./HomeTeam";
import { HomeTech } from "./HomeTech";
import { HomeFaq } from "./HomeFaq";
import { HomeProcess } from "./HomeProcess";
import { HomeFinalCta } from "./HomeFinalCta";

export function HomePage() {
  return (
    <div className="home-page">
      <PageOrbBridge />
      <HomeHero />
      <HomeTrust />
      <HomeProducts />
      <HomeWhatWeBuild />
      <HomeProblems />
      <HomeIndustries />
      <HomeProcess />
      <HomeFeaturedWork />
      <HomeDelivery />
      <HomeWhy />
      <HomeTeam />
      <HomeTech />
      <HomeFaq />
      <HomeFinalCta />
    </div>
  );
}
