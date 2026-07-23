import dynamic from "next/dynamic";
import "./home-page.css";
import { HomeHero } from "./HomeHero";

const HomeTrust = dynamic(() => import("./HomeTrust").then((m) => ({ default: m.HomeTrust })));
const HomeWhatWeBuild = dynamic(() =>
  import("./HomeWhatWeBuild").then((m) => ({ default: m.HomeWhatWeBuild })),
);
const HomeProblems = dynamic(() =>
  import("./HomeProblems").then((m) => ({ default: m.HomeProblems })),
);
const HomeIndustries = dynamic(() =>
  import("./HomeIndustries").then((m) => ({ default: m.HomeIndustries })),
);
const HomeFeaturedWork = dynamic(() =>
  import("./HomeFeaturedWork").then((m) => ({ default: m.HomeFeaturedWork })),
);
const HomeDelivery = dynamic(() =>
  import("./HomeDelivery").then((m) => ({ default: m.HomeDelivery })),
);
const HomeWhy = dynamic(() => import("./HomeWhy").then((m) => ({ default: m.HomeWhy })));
const HomeTeam = dynamic(() => import("./HomeTeam").then((m) => ({ default: m.HomeTeam })));
const HomeTech = dynamic(() => import("./HomeTech").then((m) => ({ default: m.HomeTech })));
const HomeFaq = dynamic(() => import("./HomeFaq").then((m) => ({ default: m.HomeFaq })));
const HomeFinalCta = dynamic(() =>
  import("./HomeFinalCta").then((m) => ({ default: m.HomeFinalCta })),
);

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
