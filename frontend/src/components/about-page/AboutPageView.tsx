import "./about-page.css";
import { PageOrbBridge } from "@/components/ui/PageOrbBridge";
import { AboutHero } from "./AboutHero";
import {
  AboutStory,
  AboutBeliefs,
  AboutCraft,
  AboutLeadership,
  AboutCommitments,
  AboutFinalCta,
} from "./AboutSections";

export function AboutPageView() {
  return (
    <div className="about-page">
      <PageOrbBridge />
      <AboutHero />
      <AboutStory />
      <AboutBeliefs />
      <AboutCraft />
      <AboutLeadership />
      <AboutCommitments />
      <AboutFinalCta />
    </div>
  );
}
