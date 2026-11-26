import { suitePanels } from "@/lib/homeProjects";
import { ProductSuite } from "./ProductSuite";

export function HomeProducts() {
  return (
    <section className="sec sec--soft" id="products" aria-labelledby="products-title">
      <div className="wrap">
        <div className="sec__head sec__head--split" data-reveal>
          <h2 id="products-title" className="sec__title">
            A product suite built to <em className="em">run the business</em>
          </h2>
          <p className="sec__lead">
            ERP, CRM, MIS and Inventory Management, each AI-powered and ready to connect, plus our Showroom platform for
            car brands. Open a panel to see it. Figures on screen are sample data.
          </p>
        </div>
        <div data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
          <ProductSuite panels={suitePanels} />
        </div>
      </div>
    </section>
  );
}
