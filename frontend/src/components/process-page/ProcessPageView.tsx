import "./process-page.css";
import { ProcessHero } from "./ProcessHero";
import { ProcessStages } from "./ProcessStages";
import { ProcessOperating, ProcessWeek, ProcessRealTalk } from "./ProcessOperating";
import { FinalCTA } from "@/components/FinalCTA";

export function ProcessPageView() {
  return (
    <div className="process-page">
      <ProcessHero />
      <ProcessStages />
      <ProcessOperating />
      <ProcessWeek />
      <ProcessRealTalk />
      <FinalCTA />
    </div>
  );
}
