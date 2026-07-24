import "./team-page/team-page.css";
import { TeamHero } from "./team-page/TeamHero";
import { TeamCulture } from "./team-page/TeamCulture";
import { TeamLeadership } from "./team-page/TeamLeadership";
import { TeamEngineering } from "./team-page/TeamEngineering";
import { TeamCapabilities } from "./team-page/TeamCapabilities";
import { TeamTechStack } from "./team-page/TeamTechStack";
import { TeamValues } from "./team-page/TeamValues";
import { TeamWhyClients } from "./team-page/TeamWhyClients";
import { TeamStatsBand } from "./team-page/TeamStatsBand";
import { TeamFinalCta } from "./team-page/TeamFinalCta";

export function TeamDetail() {
  return (
    <div className="team-page">
      <TeamHero />
      <TeamCulture />
      <TeamLeadership />
      <TeamEngineering />
      <TeamCapabilities />
      <TeamTechStack />
      <TeamValues />
      <TeamWhyClients />
      <TeamStatsBand />
      <TeamFinalCta />
    </div>
  );
}
