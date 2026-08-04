import {
  aboutStory,
  aboutBeliefs,
  aboutCraft,
  aboutLeadershipStrip,
  aboutCommitments,
  comparison,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { SectionBubbles } from "@/components/ui/SectionBubbles";
import { BrushFlourish } from "@/components/ui/BrushFlourish";
import { pageRoutes } from "@/lib/navigation";

export function AboutStory() {
  return (
    <section className="ap-section ap-section--panel has-brush-flourish" aria-labelledby="ap-story-title">
      <BrushFlourish seed={15} />
      <div className="ap-container ap-story">
        <div className="ap-story__mark" aria-hidden="true">
          <span>ST</span>
          <p>Founder-led studio · Dhaka</p>
        </div>
        <div>
          <p className="ap-eyebrow">
            <span>⟨ 01 ⟩</span> THE STUDIO
          </p>
          <SketchHeadline id="ap-story-title">
            Built to ship <SketchMark type="circle">systems</SketchMark> — not sell themes.
          </SketchHeadline>
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
    <section className="ap-section has-section-bubbles has-brush-flourish" aria-labelledby="ap-beliefs-title">
      <SectionBubbles seed={6} />
      <BrushFlourish seed={16} />
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 02 ⟩</span> HOW WE THINK
          </p>
          <SketchHeadline id="ap-beliefs-title">
            Principles that keep delivery <SketchMark type="circle">sharp.</SketchMark>
          </SketchHeadline>
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
    <section className="ap-section ap-section--panel has-brush-flourish" aria-labelledby="ap-craft-title">
      <BrushFlourish seed={21} />
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 03 ⟩</span> THE CRAFT
          </p>
          <SketchHeadline id="ap-craft-title">
            What we cover end to <SketchMark type="underline">end.</SketchMark>
          </SketchHeadline>
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
    <section className="ap-section has-section-bubbles has-brush-flourish" aria-labelledby="ap-lead-title">
      <SectionBubbles seed={8} />
      <BrushFlourish seed={22} />
      <div className="ap-container">
        <header className="ap-section__head">
          <p className="ap-eyebrow">
            <span>⟨ 04 ⟩</span> LEADERSHIP
          </p>
          <SketchHeadline id="ap-lead-title">
            A compact build <SketchMark type="circle">team.</SketchMark>
          </SketchHeadline>
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
          <SketchHeadline id="ap-commit-title">
            What you can expect when we work <SketchMark type="underline">together.</SketchMark>
          </SketchHeadline>
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
      <div className="ap-container ap-cta__inner">
        <p className="ap-kicker">
          <span>/</span> Next step
        </p>
        <SketchHeadline id="ap-cta-title">
          Tell us what you&apos;re <SketchMark type="underline">building.</SketchMark>
        </SketchHeadline>
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
