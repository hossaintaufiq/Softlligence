import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { pageRoutes } from "@/lib/navigation";
import { products, productLaunchUrl } from "@/lib/productsContent";

const previews: Record<string, { kpis: [string, string][]; bars: number[] }> = {
  inventory: { kpis: [["SKUs", "12.4k"], ["Low stock", "38"], ["Fill rate", "98%"]], bars: [38, 52, 44, 66, 58, 74, 62, 82] },
  erp: { kpis: [["Orders", "2,418"], ["Payables", "$184k"], ["Stock", "98%"]], bars: [30, 46, 40, 58, 64, 56, 72, 78] },
  mis: { kpis: [["Revenue", "+12%"], ["Margin", "31%"], ["Alerts", "4"]], bars: [48, 42, 60, 54, 70, 66, 80, 76] },
  crm: { kpis: [["Deals", "142"], ["Win rate", "34%"], ["Pipeline", "$2.1M"]], bars: [28, 40, 36, 52, 60, 58, 68, 84] },
};

export function HomeProducts() {
  const ordered = [...products].sort((a, b) =>
    a.slug === "inventory" ? -1 : b.slug === "inventory" ? 1 : 0,
  );
  return (
    <section className="hp-section hp-products" aria-labelledby="hp-products-title">
      <Container>
        <Eyebrow number="00">PLATFORM</Eyebrow>
        <SketchHeadline id="hp-products-title">
          One suite. <SketchMark type="underline">Every</SketchMark> operation.
        </SketchHeadline>
        <p className="hp-lead">
          Softlligence products are AI-powered, cloud-ready and built to connect — open a live
          environment or integrate them with your stack.
        </p>
        <div className="hp-products__grid">
          {ordered.map((p) => {
            const pv = previews[p.slug];
            return (
              <article key={p.slug} className="hp-product-card">
                <div className="hp-product-card__preview" aria-hidden="true">
                  <div className="hp-product-card__chrome">
                    <i />
                    <i />
                    <i />
                    <span>{p.shortName.toLowerCase()}.softlligence</span>
                  </div>
                  <div className="hp-product-card__kpis">
                    {pv.kpis.map(([k, v]) => (
                      <div key={k}>
                        <small>{k}</small>
                        <strong>{v}</strong>
                      </div>
                    ))}
                  </div>
                  <div className="hp-product-card__bars">
                    {pv.bars.map((h, i) => (
                      <span key={i} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="hp-product-card__body">
                  <span className="hp-product-card__tag">{p.shortName}</span>
                  <h3>
                    <Link href={`${pageRoutes.products}/${p.slug}`}>{p.name}</Link>
                  </h3>
                  <p>{p.tagline}</p>
                  <div className="hp-product-card__actions">
                    <Button href={productLaunchUrl(p)} external>
                      {p.liveUrl ? "Open live demo" : "Start free trial"}
                    </Button>
                    <Button href={`${pageRoutes.products}/${p.slug}`} variant="ghost">
                      Details →
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
