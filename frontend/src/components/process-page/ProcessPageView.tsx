import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import {
  processRealTalk,
  processSteps,
  processTypicalWeek,
  processWorkingModel,
} from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";

export function ProcessPageView() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="process-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <div className="wrap pdp-detail__grid">
          <div>
            <h1 id="process-title" className="pdp-title enter">
              Five stages. Clear gates. Visible progress.
            </h1>
            <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
              A predictable path from discovery to growth, with signed-off deliverables at every step, so
              you always know what is next and who is accountable.
            </p>
            <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
              <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
                Start discovery
                <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
              </Link>
              <Link href={pageRoutes.work} className="btn btn--ghost btn--lg">
                See our work
              </Link>
            </div>
          </div>

          <nav className="pg-panel enter" aria-label="Delivery stages" style={{ "--d": "160ms" } as React.CSSProperties}>
            <p className="pg-panel__label">Delivery gates</p>
            <ol className="pg-gates">
              {processSteps.map((s) => (
                <li key={s.num}>
                  <a href={`#stage-${s.num}`}>
                    <span className="pg-gates__n">{s.num}</span>
                    <b>{s.title}</b>
                    <em>{s.duration}</em>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      <section className="sec" aria-labelledby="stages-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="stages-title" className="sec__title">
              From brief to production
            </h2>
            <p className="sec__lead">
              No stage starts before the last one is signed off, so scope, quality and timeline stay honest.
            </p>
          </div>
          <ol className="pg-stages">
            {processSteps.map((s, i) => (
              <li
                key={s.num}
                id={`stage-${s.num}`}
                data-reveal
                style={{ "--rv-delay": `${Math.min(i, 3) * 40}ms` } as React.CSSProperties}
              >
                <div className="pg-stages__head">
                  <span className="pg-stages__n">{s.num}</span>
                  <h3>{s.title}</h3>
                  <span className="pg-stages__time">{s.duration}</span>
                </div>
                <div>
                  <p>{s.description}</p>
                  <ul className="pdp-chips pg-chips">
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="model-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="model-title" className="sec__title">
              How we work with you
            </h2>
          </div>
          <ul className="pg-pairs">
            {processWorkingModel.map((m, i) => (
              <li key={m.title} data-reveal style={{ "--rv-delay": `${(i % 2) * 70}ms` } as React.CSSProperties}>
                <h3>{m.title}</h3>
                <p>{m.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="week-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="week-title" className="sec__title">
              A typical sprint week
            </h2>
          </div>
          <ol className="pg-week">
            {processTypicalWeek.map((d, i) => (
              <li key={d.day} data-reveal style={{ "--rv-delay": `${i * 60}ms` } as React.CSSProperties}>
                <span className="pg-week__day">{d.day}</span>
                <h3>{d.focus}</h3>
                <p>{d.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="talk-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="talk-title" className="sec__title">
              Straight talk about delivery
            </h2>
          </div>
          <ul className="pg-pairs">
            {processRealTalk.map((m, i) => (
              <li key={m.title} data-reveal style={{ "--rv-delay": `${(i % 2) * 70}ms` } as React.CSSProperties}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
