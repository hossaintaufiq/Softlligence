import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import {
  aboutBeliefs,
  aboutCommitments,
  aboutCraft,
  aboutLeadershipStrip,
  aboutSignal,
  aboutStory,
  comparison,
} from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import "@/components/products-page/products.css";
import "./about.css";

export function AboutPageView() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="about-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <div className="wrap pdp-detail__grid">
          <div>
            <h1 id="about-title" className="pdp-title enter">
              {aboutStory.title}
            </h1>
            <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
              {aboutStory.lead}
            </p>
            <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
              <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
                Start a project
                <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
              </Link>
              <Link href={pageRoutes.team} className="btn btn--ghost btn--lg">
                Meet the team
              </Link>
            </div>
          </div>

          <dl className="ab-facts enter" style={{ "--d": "160ms" } as React.CSSProperties}>
            {aboutSignal.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="sec" aria-labelledby="story-title">
        <div className="wrap pdp-split">
          <div data-reveal>
            <h2 id="story-title" className="sec__title">
              Built to ship systems, not sell themes
            </h2>
          </div>
          <div data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
            {aboutStory.body.map((para) => (
              <p key={para.slice(0, 32)} className="pdp-prose pdp-prose--stack">
                {para}
              </p>
            ))}
            <blockquote className="ab-quote">
              Small enough that you know who builds your product. Structured enough to deliver serious
              systems.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="beliefs-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="beliefs-title" className="sec__title">
              Principles that keep delivery sharp
            </h2>
            <p className="sec__lead">
              Senior engineering habits applied to every engagement, from a site rebuild to an operational
              platform.
            </p>
          </div>
          <ol className="pdp-modules">
            {aboutBeliefs.map((b, i) => (
              <li key={b.index} data-reveal style={{ "--rv-delay": `${i * 60}ms` } as React.CSSProperties}>
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec" aria-labelledby="craft-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="craft-title" className="sec__title">
              What we cover end to end
            </h2>
          </div>
          <div className="ab-craft">
            {aboutCraft.map((c, i) => (
              <div key={c.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="team-title">
        <div className="wrap pdp-split">
          <div data-reveal>
            <h2 id="team-title" className="sec__title">
              A compact build team
            </h2>
            <p className="sec__lead">
              Run by engineers who ship together, with strategy and delivery in the same hands.
            </p>
            <Link href={pageRoutes.team} className="btn btn--ghost ab-team-btn">
              Meet the full team
            </Link>
          </div>
          <ul className="ab-roles" data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
            {aboutLeadershipStrip.map((r) => (
              <li key={`${r.role}-${r.focus}`}>
                <b>{r.role}</b>
                <span>{r.focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="commit-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="commit-title" className="sec__title">
              What you can expect when we work together
            </h2>
          </div>
          <ul className="pdp-ways">
            {aboutCommitments.map((c, i) => (
              <li key={c.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </li>
            ))}
          </ul>

          <div className="ab-compare" data-reveal>
            <div>
              <h3>Template shops</h3>
              <ul>
                {comparison.them.map((t) => (
                  <li key={t}>
                    <X size={16} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ab-compare__us">
              <h3>Softlligence</h3>
              <ul>
                {comparison.us.map((t) => (
                  <li key={t}>
                    <Check size={16} aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
