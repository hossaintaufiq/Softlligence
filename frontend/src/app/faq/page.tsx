import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HomeFinalCta } from "@/components/home-page/HomeFinalCta";
import { faqs } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about timelines, pricing, engagement models, security and support.",
};

export default function FAQPage() {
  return (
    <main className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="faq-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="network" />
        <div className="wrap">
          <h1 id="faq-title" className="pdp-title enter">
            Answers before you have to ask.
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            Timeline, pricing, engagement models, security and what happens after launch.
          </p>
          <div className="pdp-actions enter" style={{ "--d": "180ms" } as React.CSSProperties}>
            <Link href={pageRoutes.contact} className="btn btn--primary btn--lg">
              Ask us directly
              <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="sec" aria-label="Frequently asked questions">
        <div className="wrap pg-faq">
          <div className="pg-faq__list" data-reveal>
            {faqs.map((f, i) => (
              <details key={f.question} open={i === 0}>
                <summary>
                  <span className="pg-faq__q">{f.question}</span>
                  <span className="pg-faq__cat">{f.category}</span>
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <HomeFinalCta />
    </main>
  );
}
