import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { serviceGuarantees } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import {
  serviceCategories,
  servicesFinalCta,
  servicesIndustries,
  servicesPageHero,
  servicesProcessSteps,
  whySoftlligenceServices,
} from "@/lib/servicesPageContent";
import "@/components/products-page/products.css";
import "./services.css";
import { BandPhoto } from "@/components/ui/Photo";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

export function ServicesPage() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="services-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="wave" />
        <div className="wrap pdp-detail__grid">
          <div>
            <h1 id="services-title" className="pdp-title enter">
              {servicesPageHero.titleLine1} {servicesPageHero.titleLine2}
            </h1>
            <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
              {servicesPageHero.subtitle}
            </p>
            <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
              <a href="#service-catalog" className="btn btn--primary btn--lg">
                Explore services
                <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
              </a>
              <Link href={pageRoutes.work} className="btn btn--ghost btn--lg">
                View portfolio
              </Link>
            </div>
          </div>

          <nav className="sv-index enter" aria-label="Service lines" style={{ "--d": "160ms" } as React.CSSProperties}>
            <p className="sv-index__label">Service lines</p>
            <ul>
              {serviceCategories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    <span>{c.title}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <div id="service-catalog">
        {serviceCategories.map((cat, ci) => (
          <section
            key={cat.id}
            id={cat.id}
            className={`sec sv-cat${ci % 2 === 1 ? " sec--soft" : ""}`}
            aria-labelledby={`${cat.id}-title`}
          >
            <div className="wrap sv-cat__grid">
              <div className="sv-cat__intro" data-reveal>
                <h2 id={`${cat.id}-title`} className="sec__title">
                  {cat.title}
                </h2>
                <p className="sec__lead">{cat.summary}</p>
              </div>
              <ul className="sv-list">
                {cat.services.map((s, i) => (
                  <li key={s.id} data-reveal style={{ "--rv-delay": `${Math.min(i, 3) * 50}ms` } as React.CSSProperties}>
                    <div className="sv-list__head">
                      <h3>{s.title}</h3>
                      <span className="sv-list__time">{s.timeline}</span>
                    </div>
                    <p>{s.description}</p>
                    <ul className="sv-feats">
                      {s.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                    <ul className="pdp-chips sv-tech" aria-label={`${s.title} technologies`}>
                      {s.technologies.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <section className="sec" aria-labelledby="sv-industries-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="sv-industries-title" className="sec__title">
              Industries we serve
            </h2>
          </div>
          <ul className="sv-ind">
            {servicesIndustries.map((i) => (
              <li key={i.id} data-reveal>
                <b>{i.title}</b>
                <span>{i.blurb}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="sv-why-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="sv-why-title" className="sec__title">
              Why teams build with Softlligence
            </h2>
          </div>
          <ul className="pdp-ways">
            {serviceGuarantees.map((g, i) => (
              <li key={g.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{g.title}</h3>
                <p>{g.description}</p>
              </li>
            ))}
          </ul>
          <ul className="pdp-chips sv-why" aria-label="What we build in" data-reveal>
            {whySoftlligenceServices.map((w) => (
              <li key={w.title}>{w.title}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="sv-process-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="sv-process-title" className="sec__title">
              How a project runs
            </h2>
          </div>
          <ol className="sv-steps">
            {servicesProcessSteps.map((step, i) => (
              <li key={step} data-reveal style={{ "--rv-delay": `${(i % 4) * 50}ms` } as React.CSSProperties}>
                <span className="sv-steps__n">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta has-3d" id="start-project" aria-labelledby="sv-cta-title">
        <BandPhoto src="/images/server-racks.jpg" />
        <SectionBg3D variant="contour" tone="dark" />
        <div className="wrap cta__inner" data-reveal>
          <h2 id="sv-cta-title" className="cta__title">
            {servicesFinalCta.title}
          </h2>
          <p className="cta__lead">{servicesFinalCta.subtitle}</p>
          <div className="cta__actions">
            <Link href={servicesFinalCta.primary.href} className="btn btn--light btn--lg">
              {servicesFinalCta.primary.label}
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
            <Link href={servicesFinalCta.secondary.href} className="btn btn--outline-light btn--lg">
              {servicesFinalCta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
