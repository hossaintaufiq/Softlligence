import Link from "next/link";
import { ArrowRight, Check, FileText, Send, Smartphone, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductMock } from "@/components/home-page/mocks/ProductMocks";
import { productDetailVisuals } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { productBlurb } from "@/lib/siteLinks";
import { products, productLaunchUrl, type ProductRecord } from "@/lib/productsContent";
import "./products.css";

const channelIcons = [Sparkles, FileText, Smartphone, Send];
const channelLabels = ["AI recommendations", "AI summaries", "Mobile app", "WordPress and Telegram"];

export function ProductDetailView({ product }: { product: ProductRecord }) {
  const others = products.filter((p) => p.slug !== product.slug);
  const channels = productDetailVisuals[product.slug].channels;
  const launch = productLaunchUrl(product);
  const launchLabel = product.liveUrl ? "Open live demo" : "Start 7-day trial";

  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero pdp-hero--detail" aria-labelledby="product-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <div className="wrap pdp-detail__grid">
          <div>
            <nav aria-label="Breadcrumb" className="pdp-crumb enter">
              <Link href={pageRoutes.products}>Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{product.shortName}</span>
            </nav>
            <h1 id="product-title" className="pdp-title enter" style={{ "--d": "60ms" } as React.CSSProperties}>
              {product.name}
            </h1>
            <p className="pdp-lead enter" style={{ "--d": "120ms" } as React.CSSProperties}>
              {product.tagline}
            </p>
            <div className="pdp-actions enter" style={{ "--d": "200ms" } as React.CSSProperties}>
              <a href={launch} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
                {launchLabel}
                <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href={`${pageRoutes.contact}?product=${product.slug}`} className="btn btn--ghost btn--lg">
                Discuss integration
              </Link>
            </div>
          </div>

          <div className="pdp-detail__stage enter" style={{ "--d": "160ms" } as React.CSSProperties}>
            <ProductMock slug={product.slug} />
            <p className="pdp-caption">Illustrative interface preview with sample data.</p>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="overview-title">
        <div className="wrap pdp-split">
          <div data-reveal>
            <h2 id="overview-title" className="sec__title">
              Who it is for
            </h2>
          </div>
          <div data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
            <p className="pdp-prose">{product.audience}</p>
            <p className="pdp-prose pdp-prose--soft">{product.summary}</p>
          </div>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="modules-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="modules-title" className="sec__title">
              What is inside
            </h2>
          </div>
          <ol className="pdp-modules">
            {product.modules.map((m, i) => (
              <li key={m.title} data-reveal style={{ "--rv-delay": `${i * 60}ms` } as React.CSSProperties}>
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </li>
            ))}
          </ol>
          <ul className="pdp-chips" aria-label={`${product.shortName} capabilities`} data-reveal>
            {product.capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" aria-labelledby="channels-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="channels-title" className="sec__title">
              Intelligence where your team already works
            </h2>
          </div>
          <ul className="pdp-channels">
            {channels.map((c, i) => {
              const Icon = channelIcons[i] ?? Sparkles;
              return (
                <li key={c.label} data-reveal style={{ "--rv-delay": `${i * 60}ms` } as React.CSSProperties}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{channelLabels[i] ?? c.label}</h3>
                  <p>{c.hint}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="sec sec--soft" aria-labelledby="paths-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="paths-title" className="sec__title">
              Trial it, integrate it, or deploy it locally
            </h2>
          </div>
          <ul className="pdp-ways">
            {product.paths.map((p, i) => (
              <li key={p.id} data-reveal style={{ "--rv-delay": `${i * 70}ms` } as React.CSSProperties}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pdp-band" aria-labelledby="outcomes-title">
        <div className="wrap pdp-band__inner" data-reveal>
          <div>
            <h2 id="outcomes-title" className="pdp-band__title">
              What teams gain with {product.shortName}
            </h2>
            <ul className="pdp-band__list">
              {product.outcomes.map((o) => (
                <li key={o}>
                  <Check size={18} aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="pdp-band__actions">
            <a href={launch} target="_blank" rel="noopener noreferrer" className="btn btn--light btn--lg">
              {launchLabel}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href={pageRoutes.contact} className="btn btn--outline-light btn--lg">
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-labelledby="more-title">
        <div className="wrap">
          <div className="sec__head" data-reveal>
            <h2 id="more-title" className="sec__title">
              The rest of the suite
            </h2>
          </div>
          <ul className="pdp-more">
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`${pageRoutes.products}/${p.slug}`}>
                  <span className="pdp-more__name">{p.name}</span>
                  <span className="pdp-more__blurb">{productBlurb[p.slug]}</span>
                  <ArrowRight size={18} aria-hidden="true" className="pdp-more__arrow" />
                </Link>
              </li>
            ))}
            <li>
              <Link href={pageRoutes.products}>
                <span className="pdp-more__name">All products</span>
                <span className="pdp-more__blurb">Back to the full catalog</span>
                <ArrowRight size={18} aria-hidden="true" className="pdp-more__arrow" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
