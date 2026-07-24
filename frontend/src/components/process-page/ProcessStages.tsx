import { processSteps } from "@/lib/content";

export function ProcessStages() {
  return (
    <section className="pp-section" id="process" aria-labelledby="pp-stages-title">
      <div className="pp-container">
        <header className="pp-section__head">
          <p className="pp-eyebrow">
            <span>⟨ 01 ⟩</span> ROADMAP
          </p>
          <h2 id="pp-stages-title">The roadmap from brief to production.</h2>
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
