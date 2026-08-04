import "./process-page.css";
import { PageOrbBridge } from "@/components/ui/PageOrbBridge";
import { ProcessHero } from "./ProcessHero";
import { ProcessStages } from "./ProcessStages";
import { ProcessOperating, ProcessWeek, ProcessRealTalk } from "./ProcessOperating";

export function ProcessPageView() {
  return (
    <div className="process-page">
      <PageOrbBridge />
      <ProcessHero />
      <ProcessStages />
      <ProcessOperating />
      <ProcessWeek />
      <ProcessRealTalk />
    </div>
  );
}
