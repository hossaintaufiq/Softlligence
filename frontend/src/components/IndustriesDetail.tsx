import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { industries, industryPrinciples } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

export function IndustriesDetail() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="industries-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="contour" />
        <div className="wrap pdp-detail__grid">
          <div>
            <h1 id="industries-title" className="pdp-title enter">
              Software built around how your sector works.
            </h1>
            <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
              Government, education, finance, healthcare, retail and nonprofits, each with its own security,
              uptime and user needs.
            </p>
            <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
              <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
                Discuss your sector
                <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav className="pg-panel enter" aria-label="Industries" style={{ "--d": "160ms" } as React.CSSProperties}>
            <p className="pg-panel__label">Sectors</p>
            <ul className="sv-index-list">
              {industries.map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`}>
                    <span>{i.title}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {industries.map((ind, idx) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`sec ix${idx % 2 === 1 ? " sec--soft" : ""}`}
          aria-labelledby={`${ind.id}-title`}
        >
          <div className="wrap ix__grid">
            <div className="ix__intro" data-reveal>
              <p className="ix__tag">{ind.tag}</p>
              <h2 id={`${ind.id}-title`} className="sec__title">
                {ind.title}
              </h2>
              <p className="ix__headline">{ind.headline}</p>
            </div>

            <div className="ix__body">
              <p className="pdp-prose" data-reveal>
                {ind.longDescription}
              </p>

              <div className="ix__cols" data-reveal>
                <div>
                  <h3>Problems we see</h3>
                  <ul>
                    {ind.painPoints.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>What we deliver</h3>
                  <ul>
                    {ind.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="ix__chips" data-reveal>
                <h3>Typical builds</h3>
                <ul className="pdp-chips">
                  {ind.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <h3>Built in</h3>
                <ul className="pdp-chips">
                  {ind.capabilities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="sec" aria-labelledby="ix-principles-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="ix-principles-title" className="sec__title">
              Principles across every sector
            </h2>
          </div>
          <ul className="pdp-ways">
            {industryPrinciples.map((p, i) => (
              <li key={p.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
