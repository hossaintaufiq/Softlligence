import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { pageRoutes } from "@/lib/navigation";
import { productDetailVisuals } from "@/lib/homeVisuals";
import {
  products,
  productsAiShared,
  trialSignupUrl,
  type ProductRecord,
} from "@/lib/productsContent";
import "./products-page.css";
import "./product-detail-visual.css";

export function ProductDetailView({ product }: { product: ProductRecord }) {
  const others = products.filter((p) => p.slug !== product.slug);
  const visuals = productDetailVisuals[product.slug];

  return (
    <div className="products-page">
      <section className="prd-detail-hero" aria-labelledby="prd-detail-title">
        <div className="prd-container prd-detail-hero__layout">
          <div className="prd-detail-hero__copy">
            <p className="prd-kicker">
              <span>/</span> Products · {product.shortName}
              <em className="prd-detail-hero__badge">{productsAiShared.label}</em>
            </p>
            <h1 id="prd-detail-title">
              <SketchMark type="underline">{product.name}</SketchMark>
            </h1>
            <p className="prd-detail-hero__tagline">{product.tagline}</p>
            <p className="prd-detail-hero__lead">{product.aiNote}</p>
            <div className="prd-detail-hero__actions">
              <Button href={trialSignupUrl(product.slug)} size="lg" external>
                Start 7-day free trial
              </Button>
              <Button
                href={`${pageRoutes.contact}?product=${product.slug}`}
                variant="outline"
                size="lg"
              >
                Discuss integration
              </Button>
            </div>
          </div>

          <div className="prd-detail-hero__visual">
            <div className="prd-detail-hero__frame">
              <Image
                src={visuals.hero}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 48vw"
                quality={70}
                className="object-cover"
              />
              <div className="prd-detail-hero__veil" aria-hidden="true" />
            </div>
            <div className="prd-detail-hero__float">
              <p>AI-powered</p>
              <strong>Recommend · Summarize · Reach</strong>
              <span>Mobile · WordPress · Telegram</span>
            </div>
          </div>
        </div>
      </section>

      <section className="prd-section" aria-labelledby="prd-ai-title">
        <div className="prd-container">
          <div className="prd-section__head prd-section__head--center">
            <p className="prd-kicker">
              <span>/</span> AI &amp; access
            </p>
            <SketchHeadline id="prd-ai-title">
              <SketchMark type="circle">Intelligence</SketchMark> where your team already works.
            </SketchHeadline>
          </div>
          <div className="prd-channel-grid">
            {visuals.channels.map((channel) => (
              <article key={channel.label} className="prd-channel-card">
                <div className="prd-channel-card__media">
                  <Image
                    src={channel.src}
                    alt=""
                    fill
                    sizes="(max-width: 720px) 100vw, 25vw"
                    quality={60}
                    className="object-cover"
                  />
                  <div className="prd-channel-card__veil" aria-hidden="true" />
                </div>
                <div className="prd-channel-card__body">
                  <h3>{channel.label}</h3>
                  <p>{channel.hint}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prd-section prd-section--panel" aria-labelledby="prd-mod-title">
        <div className="prd-container">
          <div className="prd-section__head">
            <p className="prd-kicker">
              <span>/</span> Modules
            </p>
            <SketchHeadline id="prd-mod-title">
              Core areas inside the <SketchMark type="underline">platform.</SketchMark>
            </SketchHeadline>
          </div>
          <div className="prd-mod-visual">
            {product.modules.map((mod, i) => (
              <article key={mod.title} className="prd-mod-card">
                <div className="prd-mod-card__media">
                  <Image
                    src={visuals.modules[i] ?? visuals.modules[0]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={60}
                    className="object-cover"
                  />
                  <div className="prd-mod-card__veil" aria-hidden="true" />
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="prd-mod-card__body">
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prd-section" aria-labelledby="prd-caps-title">
        <div className="prd-container prd-caps-band">
          <div>
            <p className="prd-kicker">
              <span>/</span> Capabilities
            </p>
            <SketchHeadline id="prd-caps-title">
              What {product.shortName} <SketchMark type="circle">covers.</SketchMark>
            </SketchHeadline>
          </div>
          <ul className="prd-pill-list">
            {product.capabilities.map((cap) => (
              <li key={cap}>{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="prd-section prd-section--panel" aria-labelledby="prd-paths-title">
        <div className="prd-container">
          <div className="prd-section__head prd-section__head--center">
            <p className="prd-kicker">
              <span>/</span> Engagement
            </p>
            <SketchHeadline id="prd-paths-title">
              Trial, <SketchMark type="underline">integrate</SketchMark>, or deploy locally.
            </SketchHeadline>
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
        </div>
      </section>

      <section className="prd-cta-band" aria-labelledby="prd-cta-title">
        <div className="prd-cta-band__media" aria-hidden="true">
          <Image
            src={visuals.cta}
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover"
          />
          <div className="prd-cta-band__veil" />
        </div>
        <div className="prd-container prd-cta-band__inner">
          <div>
            <p className="prd-kicker">
              <span>/</span> Outcomes
            </p>
            <SketchHeadline id="prd-cta-title">
              What teams <SketchMark type="circle">gain.</SketchMark>
            </SketchHeadline>
            <ul className="prd-cta-band__outcomes">
              {product.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="prd-cta-band__actions">
            <Button href={trialSignupUrl(product.slug)} size="lg" external>
              Start free trial
            </Button>
            <Button href={pageRoutes.contact} variant="outline" size="lg">
              Book a consultation
            </Button>
          </div>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="prd-section" aria-labelledby="prd-more-title">
          <div className="prd-container">
            <div className="prd-section__head">
              <p className="prd-kicker">
                <span>/</span> More products
              </p>
              <SketchHeadline id="prd-more-title">
                Explore the rest of the <SketchMark type="underline">suite.</SketchMark>
              </SketchHeadline>
            </div>
            <div className="prd-more prd-more--visual">
              {others.map((p) => {
                const thumb = productDetailVisuals[p.slug].hero;
                return (
                  <Link
                    key={p.slug}
                    href={`${pageRoutes.products}/${p.slug}`}
                    className="prd-more__card prd-more__card--media"
                  >
                    <span className="prd-more__thumb">
                      <Image
                        src={thumb}
                        alt=""
                        fill
                        sizes="(max-width: 720px) 100vw, 33vw"
                        quality={55}
                        className="object-cover"
                      />
                    </span>
                    <span className="prd-more__meta">
                      <span>{p.shortName}</span>
                      <strong>{p.name}</strong>
                      <em>{p.tagline}</em>
                    </span>
                  </Link>
                );
              })}
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
