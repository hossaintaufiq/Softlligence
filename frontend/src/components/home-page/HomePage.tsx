import "./home-page.css";
import { HomeHero } from "./HomeHero";
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
import { HomeFinalCta } from "./HomeFinalCta";

export function HomePage() {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeTrust />
      <HomeWhatWeBuild />
      <HomeProblems />
      <HomeIndustries />
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
