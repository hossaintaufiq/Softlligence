import { pageRoutes } from "@/lib/navigation";
import { products, productLaunchUrl } from "@/lib/productsContent";
import { ProductShowcase, type ShowcaseItem } from "./ProductShowcase";

export function HomeProducts() {
  const items: ShowcaseItem[] = products.map((p) => ({
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    summary: p.summary,
    detailsHref: `${pageRoutes.products}/${p.slug}`,
    launchUrl: productLaunchUrl(p),
    hasLiveDemo: Boolean(p.liveUrl),
  }));

  return (
    <section className="sec sec--soft" id="products" aria-labelledby="products-title">
      <div className="wrap">
        <div className="sec__head" data-reveal>
          <h2 id="products-title" className="sec__title">
            A product suite built to <em className="em">run the business</em>
          </h2>
          <p className="sec__lead">
            ERP, CRM, MIS and Inventory Management, each AI-powered and ready to connect. Open a live
            environment, or try one free for 7 days.
          </p>
        </div>
        <div data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
          <ProductShowcase items={items} />
        </div>
      </div>
    </section>
  );
}
