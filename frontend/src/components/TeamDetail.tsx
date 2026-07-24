import dynamic from "next/dynamic";
import "./team-page/team-page.css";

const TeamHero = dynamic(() => import("./team-page/TeamHero").then((m) => ({ default: m.TeamHero })));
const TeamCulture = dynamic(() =>
  import("./team-page/TeamCulture").then((m) => ({ default: m.TeamCulture })),
);
const TeamLeadership = dynamic(() =>
  import("./team-page/TeamLeadership").then((m) => ({ default: m.TeamLeadership })),
);
const TeamEngineering = dynamic(() =>
  import("./team-page/TeamEngineering").then((m) => ({ default: m.TeamEngineering })),
);
const TeamCapabilities = dynamic(() =>
  import("./team-page/TeamCapabilities").then((m) => ({ default: m.TeamCapabilities })),
);
const TeamTechStack = dynamic(() =>
  import("./team-page/TeamTechStack").then((m) => ({ default: m.TeamTechStack })),
);
const TeamValues = dynamic(() =>
  import("./team-page/TeamValues").then((m) => ({ default: m.TeamValues })),
);
const TeamWhyClients = dynamic(() =>
  import("./team-page/TeamWhyClients").then((m) => ({ default: m.TeamWhyClients })),
);
const TeamStatsBand = dynamic(() =>
  import("./team-page/TeamStatsBand").then((m) => ({ default: m.TeamStatsBand })),
);
const TeamFinalCta = dynamic(() =>
  import("./team-page/TeamFinalCta").then((m) => ({ default: m.TeamFinalCta })),
);

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
