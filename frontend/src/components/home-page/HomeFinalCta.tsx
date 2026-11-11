import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyContact, pageRoutes } from "@/lib/navigation";
import { productLaunchUrl, products } from "@/lib/productsContent";

export function HomeFinalCta() {
  const erp = products.find((p) => p.slug === "erp");
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="wrap cta__inner" data-reveal>
        <h2 id="cta-title" className="cta__title">
          Let&apos;s build the software your business grows into.
        </h2>
        <p className="cta__lead">
          Tell us about the system you want to build or replace. We reply within one business day.
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
