import "./about-page.css";
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
