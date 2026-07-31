import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { pageRoutes } from "@/lib/navigation";
import {
  products,
  trialSignupUrl,
  type ProductRecord,
} from "@/lib/productsContent";
import "./products-page.css";

export function ProductDetailView({ product }: { product: ProductRecord }) {
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="products-page">
      <section className="prd-hero prd-hero--detail" aria-labelledby="prd-detail-title">
        <div className="prd-hero__bg" aria-hidden="true">
          <div className="prd-hero__grid" />
          <div className="prd-hero__beam" />
          <div className="prd-hero__glow" />
        </div>

        <div className="prd-container prd-hero__layout">
          <div className="prd-hero__copy">
            <p className="prd-kicker">
              <span>/</span> Products · {product.shortName}
            </p>
            <h1 id="prd-detail-title" className="prd-hero__title prd-hero__title--product">
              {product.name}
            </h1>
            <p className="prd-hero__tagline">{product.tagline}</p>
            <p className="prd-hero__lead">{product.description}</p>
            <p className="prd-hero__audience">
              <strong>Built for</strong> {product.audience}
            </p>
            <div className="prd-hero__actions">
              <Button href={trialSignupUrl(product.slug)} size="lg" external className="max-sm:w-full">
                Start 7-day free trial
              </Button>
              <Button
                href={`${pageRoutes.contact}?product=${product.slug}`}
                variant="outline"
                size="lg"
                className="max-sm:w-full"
              >
                Discuss integration
              </Button>
            </div>
          </div>

          <aside className="prd-hero__panel" aria-label={`${product.shortName} trial overview`}>
            <p className="prd-hero__panel-label">Start here</p>
            <div className="prd-hero__panel-stat">
              <strong>7 days</strong>
              <span>Free cloud trial</span>
            </div>
            <ul className="prd-hero__panel-list">
              <li>Sandbox tenant with demo data</li>
              <li>No credit card to begin</li>
              <li>Upgrade or integrate after trial</li>
            </ul>
            <p className="prd-hero__trial-note">
              Trial runs on <span>app.softlligence.com</span>
            </p>
            <Button href={trialSignupUrl(product.slug)} external block>
              Open trial signup
            </Button>
          </aside>
        </div>
      </section>

      <section className="prd-section" aria-labelledby="prd-caps-title">
        <div className="prd-container prd-split">
          <div>
            <p className="prd-kicker">
              <span>/</span> Capabilities
            </p>
            <h2 id="prd-caps-title">What {product.shortName} covers.</h2>
            <p className="prd-muted">{product.summary}</p>
          </div>
          <ul className="prd-cap-list">
            {product.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="prd-section prd-section--panel" aria-labelledby="prd-mod-title">
        <div className="prd-container">
          <div className="prd-section__head">
            <p className="prd-kicker">
              <span>/</span> Modules
            </p>
            <h2 id="prd-mod-title">Core areas inside the platform.</h2>
          </div>
          <div className="prd-modules">
            {product.modules.map((mod) => (
              <article key={mod.title}>
                <h3>{mod.title}</h3>
                <p>{mod.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prd-section" aria-labelledby="prd-paths-title">
        <div className="prd-container">
          <div className="prd-section__head">
            <p className="prd-kicker">
              <span>/</span> Engagement
            </p>
            <h2 id="prd-paths-title">Trial, integrate, or deploy locally.</h2>
          </div>
          <div className="prd-doors__grid">
            {product.paths.map((path, i) => (
              <article key={path.id}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
              </article>
            ))}
          </div>
          <div className="prd-section__action">
            <Button href={trialSignupUrl(product.slug)} size="lg" external>
              Start free trial
            </Button>
            <Button href={pageRoutes.contact} variant="outline" size="lg">
              Book a consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="prd-section prd-section--panel" aria-labelledby="prd-out-title">
        <div className="prd-container prd-split">
          <div>
            <p className="prd-kicker">
              <span>/</span> Outcomes
            </p>
            <h2 id="prd-out-title">What teams gain.</h2>
          </div>
          <ul className="prd-outcome-list">
            {product.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="prd-section" aria-labelledby="prd-more-title">
          <div className="prd-container">
            <div className="prd-section__head">
              <p className="prd-kicker">
                <span>/</span> More products
              </p>
              <h2 id="prd-more-title">Explore the rest of the suite.</h2>
            </div>
            <div className="prd-more">
              {others.map((p) => (
                <Link key={p.slug} href={`${pageRoutes.products}/${p.slug}`} className="prd-more__card">
                  <span>{p.shortName}</span>
                  <strong>{p.name}</strong>
                  <em>{p.tagline}</em>
                </Link>
              ))}
              <Link href={pageRoutes.products} className="prd-more__card prd-more__card--all">
                <span>All</span>
                <strong>Back to products</strong>
                <em>View the full catalog</em>
              </Link>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
