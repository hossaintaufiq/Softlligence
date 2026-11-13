import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { ProductMock } from "@/components/home-page/mocks/ProductMocks";
import { pageRoutes } from "@/lib/navigation";
import { products, productsAiShared, productsCatalogIntro, productLaunchUrl } from "@/lib/productsContent";
import "./products.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

const ways = [
  { title: "Try", text: "A 7-day free cloud trial with a sandbox tenant and demo data." },
  { title: "Integrate", text: "Connect to your website, APIs or existing systems with our engineers." },
  { title: "Customize", text: "Extend or tailor the platform around how your organization operates." },
];

export function ProductsCatalogView() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="catalog-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="lattice" />
        <div className="wrap pdp-hero__inner">
          <h1 id="catalog-title" className="pdp-title enter">
            Enterprise platforms, ready to trial.
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            {productsCatalogIntro.lead}
          </p>
          <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
            <a href="#catalog" className="btn btn--primary btn--lg">
              Browse products
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </a>
            <Link href={pageRoutes.contact} className="btn btn--ghost btn--lg">
              Talk about integration
            </Link>
          </div>
        </div>
      </section>

      <section id="catalog" className="pdp-catalog" aria-label="Softlligence products">
        <div className="wrap">
          {products.map((p, i) => (
            <article key={p.slug} className="pdp-row" data-reveal>
              <div className="pdp-row__stage">
                <ProductMock slug={p.slug} />
              </div>
              <div className="pdp-row__text">
                <h2>
                  <Link href={`${pageRoutes.products}/${p.slug}`}>{p.name}</Link>
                </h2>
                <p className="pdp-row__tag">{p.tagline}</p>
                <p className="pdp-row__sum">{p.summary}</p>
                <ul className="pdp-checks">
                  {p.capabilities.slice(0, 4).map((c) => (
                    <li key={c}>
                      <Check size={16} aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="pdp-row__actions">
                  <a
                    href={productLaunchUrl(p)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    {p.liveUrl ? "Open live demo" : "Start 7-day trial"}
                    <ArrowRight size={17} className="btn__arrow" aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <Link href={`${pageRoutes.products}/${p.slug}`} className="link-arrow">
                    {p.shortName} details
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <span className="sr-only">
                  Product {i + 1} of {products.length}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="ways-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="ways-title" className="sec__title">
              Three ways to use Softlligence products
            </h2>
            <p className="sec__lead">
              {productsAiShared.label} features, purchase recommendations and summaries are part of every
              product.
            </p>
          </div>
          <ul className="pdp-ways">
            {ways.map((w, i) => (
              <li key={w.title} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeFinalCta />
    </div>
  );
}
