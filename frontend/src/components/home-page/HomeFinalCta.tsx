import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyContact, pageRoutes } from "@/lib/navigation";
import { productLaunchUrl, products } from "@/lib/productsContent";
import { BandPhoto } from "@/components/ui/Photo";
import { SectionBg3D } from "./SectionBg3D";

export function HomeFinalCta() {
  const erp = products.find((p) => p.slug === "erp");
  return (
    <section className="cta has-3d" aria-labelledby="cta-title">
      <BandPhoto src="/images/circuit-board.jpg" />
      <SectionBg3D variant="wave" tone="dark" />
      <div className="wrap cta__inner" data-reveal>
        <h2 id="cta-title" className="cta__title">
          Let&apos;s build the software your business <em className="em">grows into.</em>
        </h2>
        <p className="cta__lead">
          Tell us what is slowing your business down. We reply within one business day with a clear next step, not a sales deck.
        </p>
        <div className="cta__actions">
          <Link href={pageRoutes.contact} className="btn btn--light btn--lg">
            Let&apos;s Talk
            <ArrowRight size={18} className="btn__arrow" aria-hidden="true" />
          </Link>
          {erp && (
            <a
              href={productLaunchUrl(erp)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-light btn--lg"
            >
              Open live ERP demo
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
        <p className="cta__contact">
          <a href={companyContact.mailto}>{companyContact.email}</a>
          <span aria-hidden="true">·</span>
          <a href={companyContact.tel}>{companyContact.phoneDisplay}</a>
        </p>
      </div>
    </section>
  );
}
