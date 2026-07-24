import {
  aboutStory,
  aboutBeliefs,
  aboutCraft,
  aboutLeadershipStrip,
  aboutCommitments,
  comparison,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";

export function AboutStory() {
  return (
    <section className="ap-section ap-section--panel" aria-labelledby="ap-story-title">
      <div className="ap-container ap-story">
        <div className="ap-story__mark" aria-hidden="true">
          <span>ST</span>
          <p>Founder-led studio · Dhaka</p>
        </div>
        <div>
          <p className="ap-eyebrow">
            <span>⟨ 01 ⟩</span> THE STUDIO
          </p>
          <h2 id="ap-story-title">Built to ship systems — not sell themes.</h2>
          <div className="ap-story__body">
            {aboutStory.body.map((para) => (
              <p key={para.slice(0, 32)}>{para}</p>
            ))}
          </div>
          <blockquote>
            Small enough that you know who builds your product.
            <span> Structured enough to deliver serious systems.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export function AboutBeliefs() {
  return (
    <section className="ap-section" aria-labelledby="ap-beliefs-title">
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 02 ⟩</span> HOW WE THINK
          </p>
          <h2 id="ap-beliefs-title">Principles that keep delivery sharp.</h2>
          <p className="ap-lead">
            Senior engineering habits, applied to every engagement — from a marketing site rebuild to
            an operational platform.
          </p>
        </header>

        <div className="ap-beliefs">
          {aboutBeliefs.map((belief) => (
            <article key={belief.index}>
              <span>{belief.index}</span>
              <h3>{belief.title}</h3>
              <p>{belief.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCraft() {
  return (
    <section className="ap-section ap-section--panel" aria-labelledby="ap-craft-title">
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 03 ⟩</span> THE CRAFT
          </p>
          <h2 id="ap-craft-title">What we cover end to end.</h2>
        </header>

        <div className="ap-craft">
          {aboutCraft.map((column) => (
            <div key={column.title} className="ap-craft__col">
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutLeadership() {
  return (
    <section className="ap-section" aria-labelledby="ap-lead-title">
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 04 ⟩</span> LEADERSHIP
          </p>
          <h2 id="ap-lead-title">A compact build team.</h2>
          <p className="ap-lead">
            Softlligence is run by engineers who ship together — strategy and delivery in the same
            hands.
          </p>
        </header>

        <div className="ap-roles">
          {aboutLeadershipStrip.map((row) => (
            <article key={`${row.role}-${row.focus}`}>
              <h3>{row.role}</h3>
              <p>{row.focus}</p>
            </article>
          ))}
        </div>

        <div className="ap-section__action">
          <Button href={pageRoutes.team} variant="outline">
            Meet the full team
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AboutCommitments() {
  return (
    <section className="ap-section ap-section--panel" aria-labelledby="ap-commit-title">
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 05 ⟩</span> COMMITMENTS
          </p>
          <h2 id="ap-commit-title">What you can expect when we work together.</h2>
        </header>

        <div className="ap-commit">
          <div className="ap-commit__list">
            {aboutCommitments.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="ap-compare">
            <div className="ap-compare__head">
              <div>
                <p>vs</p>
                <h3>Template shops</h3>
              </div>
              <span>Softlligence</span>
            </div>
            <div className="ap-compare__cols">
              <ul>
                {comparison.them.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
              <ul className="ap-compare__us">
                {comparison.us.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutFinalCta() {
  return (
    <section className="ap-cta" aria-labelledby="ap-cta-title">
      <div className="ap-cta__bg" aria-hidden="true" />
      <div className="ap-container ap-cta__inner">
        <p className="ap-kicker">
          <span>/</span> Next step
        </p>
        <h2 id="ap-cta-title">Tell us what you&apos;re building.</h2>
        <p>
          Share the problem, the deadline, and the constraints. We reply within one business day with
          a clear next step — no scripted sales call.
        </p>
        <div className="ap-cta__actions">
          <Button href={pageRoutes.contact} size="lg">
            Start a project
          </Button>
          <Button href={pageRoutes.work} variant="outline" size="lg">
            View work
          </Button>
        </div>
      </div>
    </section>
  );
}
