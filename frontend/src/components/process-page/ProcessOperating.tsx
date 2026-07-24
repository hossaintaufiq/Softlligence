import { processWorkingModel, processTypicalWeek, processRealTalk } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";

export function ProcessOperating() {
  return (
    <section className="pp-section pp-section--panel" aria-labelledby="pp-ops-title">
      <div className="pp-container">
        <header className="pp-section__head">
          <p className="pp-eyebrow">
            <span>⟨ 02 ⟩</span> OPERATING MODEL
          </p>
          <h2 id="pp-ops-title">The day-to-day — not the slide deck.</h2>
          <p className="pp-lead">
            Five stages on paper. In practice, this is how we stay aligned while the product is being
            built.
          </p>
        </header>

        <div className="pp-ops">
          {processWorkingModel.map((item, i) => (
            <article key={item.title} className="pp-ops__card">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessWeek() {
  return (
    <section className="pp-section" aria-labelledby="pp-week-title">
      <div className="pp-container">
        <header className="pp-section__head">
          <p className="pp-eyebrow">
            <span>⟨ 03 ⟩</span> CADENCE
          </p>
          <h2 id="pp-week-title">What a normal week looks like mid-project.</h2>
          <p className="pp-lead">
            No mystery blackouts. You always know what we&apos;re doing and when you&apos;ll see it.
          </p>
        </header>

        <div className="pp-week">
          {processTypicalWeek.map((block) => (
            <article key={block.day} className="pp-week__cell">
              <p className="pp-week__day">{block.day}</p>
              <h3>{block.focus}</h3>
              <p>{block.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessRealTalk() {
  return (
    <section className="pp-section pp-section--panel" aria-labelledby="pp-talk-title">
      <div className="pp-container">
        <header className="pp-section__head">
          <p className="pp-eyebrow">
            <span>⟨ 04 ⟩</span> STRAIGHT TALK
          </p>
          <h2 id="pp-talk-title">How real projects stay on track.</h2>
        </header>

        <div className="pp-talk">
          {processRealTalk.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="pp-inline-cta">
          <div>
            <h3>Ready to start discovery?</h3>
            <p>
              Tell us what you&apos;re building. We&apos;ll reply within one business day with next
              steps — no pressure pitch.
            </p>
          </div>
          <Button href={pageRoutes.contact} size="lg">
            Start a project
          </Button>
        </div>
      </div>
    </section>
  );
}
