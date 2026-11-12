import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Parallax } from "@/components/ui/Parallax";
import { pageRoutes } from "@/lib/navigation";
import { ErpMock } from "./mocks/ProductMocks";
import { HomeHero3D } from "./HomeHero3D";

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <HomeHero3D />
      <div className="hero__wash" aria-hidden="true" />
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title enter" style={{ "--d": "0ms" } as React.CSSProperties}>
            Engineering Intelligent Software for Ambitious Businesses.
          </h1>
          <p className="hero__lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            We build powerful SaaS platforms, enterprise systems, and intelligent digital solutions that help
            businesses operate smarter, scale faster, and innovate confidently.
          </p>
          <div className="hero__actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
            <Link href={pageRoutes.products} className="btn btn--primary btn--lg">
              Explore Our Products
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
            <Link href={pageRoutes.contact} className="btn btn--ghost btn--lg">
              Let&apos;s Talk
            </Link>
          </div>
          <p className="hero__note enter" style={{ "--d": "260ms" } as React.CSSProperties}>
            AI-powered ERP, CRM, MIS and Inventory products, with live demos you can open today.
          </p>
        </div>

        <Parallax className="hv enter" >
          <div className="hv__stage">
            <ErpMock className="hv__main" />

            <div className="hv__float hv__float--ai" data-depth="a">
              <span className="hv__tag">AI recommendation</span>
              <b>Reorder Packaging C</b>
              <small>Stock is trending below the safety level.</small>
            </div>

            <div className="hv__float hv__float--crm" data-depth="b">
              <span className="hv__tag">CRM pipeline</span>
              <div className="hv__stages" aria-hidden="true">
                <i style={{ width: "86%" }} />
                <i style={{ width: "58%" }} />
                <i style={{ width: "34%" }} />
              </div>
              <small>Lead · Qualified · Proposal</small>
            </div>
          </div>
          <p className="hv__caption">Illustrative interface preview with sample data.</p>
        </Parallax>
      </div>
    </section>
  );
}
