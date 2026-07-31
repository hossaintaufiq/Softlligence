import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";
import {
  products,
  productsCatalogIntro,
  trialSignupUrl,
  type ProductRecord,
} from "@/lib/productsContent";
import "./products-page.css";

const heroSignals = [
  { label: "Trial", value: "7 days free" },
  { label: "Runtime", value: "app.softlligence.com" },
  { label: "Suite", value: "ERP · CRM · MIS" },
  { label: "Options", value: "Cloud · Integrate · Local" },
];

function ProductCard({ product, index }: { product: ProductRecord; index: number }) {
  return (
    <article className="prd-card">
      <div className="prd-card__index" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="prd-card__top">
        <span className="prd-card__badge">{product.shortName}</span>
        <span className="prd-card__trial">7-day free trial</span>
      </div>
      <h2>
        <Link href={`${pageRoutes.products}/${product.slug}`}>{product.name}</Link>
      </h2>
      <p className="prd-card__tagline">{product.tagline}</p>
      <p className="prd-card__summary">{product.summary}</p>
      <ul className="prd-card__caps">
        {product.capabilities.slice(0, 4).map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
      <div className="prd-card__actions">
        <Button href={`${pageRoutes.products}/${product.slug}`} variant="outline">
          View product
        </Button>
        <Button href={trialSignupUrl(product.slug)} external>
          Start free trial
        </Button>
      </div>
    </article>
  );
}

export function ProductsCatalogView() {
  return (
    <div className="products-page">
      <section className="prd-hero" aria-labelledby="prd-catalog-title">
        <div className="prd-hero__bg" aria-hidden="true">
          <div className="prd-hero__grid" />
          <div className="prd-hero__beam" />
          <div className="prd-hero__glow" />
        </div>

        <div className="prd-container prd-hero__layout">
          <div className="prd-hero__copy">
            <p className="prd-kicker">
              <span>/</span> {productsCatalogIntro.eyebrow}
            </p>
            <h1 id="prd-catalog-title" className="prd-hero__title">
              {productsCatalogIntro.title}
            </h1>
            <p className="prd-hero__lead">{productsCatalogIntro.lead}</p>
            <div className="prd-hero__actions">
              <Button href="#catalog" size="lg" className="max-sm:w-full">
                Browse products
              </Button>
              <Button href={pageRoutes.contact} variant="outline" size="lg" className="max-sm:w-full">
                Talk about integration
              </Button>
            </div>
            <div className="prd-hero__paths">
              <span>Try in the cloud</span>
              <i aria-hidden="true">·</i>
              <span>Integrate with your stack</span>
              <i aria-hidden="true">·</i>
              <span>Deploy locally</span>
            </div>
          </div>

          <aside className="prd-hero__panel" aria-label="Product suite overview">
            <p className="prd-hero__panel-label">Product suite</p>
            <ul className="prd-hero__suite">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`${pageRoutes.products}/${p.slug}`}>
                    <strong>{p.shortName}</strong>
                    <span>{p.tagline}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="prd-hero__signals">
              {heroSignals.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="prd-section" id="catalog" aria-labelledby="prd-list-title">
        <div className="prd-container">
          <div className="prd-section__head">
            <p className="prd-kicker">
              <span>/</span> Catalog
            </p>
            <h2 id="prd-list-title">Ready platforms for modern organizations.</h2>
            <p>
              Start with a 7-day trial on app.softlligence.com, or talk to us about integration and
              on-prem deployment.
            </p>
          </div>
          <div className="prd-grid">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="prd-section prd-section--panel" aria-labelledby="prd-doors-title">
        <div className="prd-container">
          <div className="prd-section__head">
            <p className="prd-kicker">
              <span>/</span> How to engage
            </p>
            <h2 id="prd-doors-title">Three ways to use Softlligence products.</h2>
          </div>
          <div className="prd-doors__grid">
            <article>
              <span>01</span>
              <h3>Try</h3>
              <p>7-day free cloud trial with a sandbox tenant and demo data.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Integrate</h3>
              <p>Connect to your website, APIs, or existing systems with our engineers.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Custom</h3>
              <p>Extend or tailor the platform around how your organization actually operates.</p>
            </article>
          </div>
          <div className="prd-section__action">
            <Button href={pageRoutes.contact} size="lg">
              Talk about integration
            </Button>
            <Button href={pageRoutes.services} variant="outline" size="lg">
              See custom services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
