import { processSteps } from "@/lib/content";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { SectionBubbles } from "@/components/ui/SectionBubbles";
import { BrushFlourish } from "@/components/ui/BrushFlourish";

export function ProcessStages() {
  return (
    <section className="pp-section has-section-bubbles has-brush-flourish" id="process" aria-labelledby="pp-stages-title">
      <SectionBubbles seed={2} />
      <BrushFlourish seed={12} />
      <div className="pp-container">
        <header className="pp-section__head">
          <p className="pp-eyebrow">
            <span>⟨ 01 ⟩</span> ROADMAP
          </p>
          <SketchHeadline id="pp-stages-title">
            The roadmap from brief to <SketchMark type="circle">production.</SketchMark>
          </SketchHeadline>
          <p className="pp-lead">
            No stage starts before the last one is signed off — so scope, quality, and timeline stay
            honest.
          </p>
        </header>

        <ol className="pp-stages">
          {processSteps.map((step, i) => (
            <li key={step.num} className="pp-stage">
              <div className="pp-stage__rail" aria-hidden="true">
                <span className="pp-stage__node">{step.num}</span>
                {i < processSteps.length - 1 ? <span className="pp-stage__line" /> : null}
              </div>
              <article className="pp-stage__card">
                <div className="pp-stage__meta">
                  <h3>{step.title}</h3>
                  <span>{step.duration}</span>
                </div>
                <p>{step.description}</p>
                <div className="pp-stage__deliverables">
                  <p>Deliverables</p>
                  <ul>
                    {step.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
