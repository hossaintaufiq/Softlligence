import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";

export function HomeFinalCta() {
  return (
    <section className="hp-cta" id="contact" aria-labelledby="hp-cta-title">
      <Container className="hp-cta__inner">
        <div className="hp-cta__burst" aria-hidden="true">
          <svg className="hp-cta__spark" viewBox="0 0 220 90" fill="none">
            <path
              d="M110 78V8M86 72L62 18M134 72L158 18M72 58L28 36M148 58L192 36M92 48L48 12M128 48L172 12"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M38 22c2.2-3.4 7-3.4 8.8 0 1.4 2.6-.2 5.6-4.4 8.4-4.2-2.8-5.8-5.8-4.4-8.4Z"
              fill="currentColor"
            />
            <path
              d="M168 16c2.2-3.4 7-3.4 8.8 0 1.4 2.6-.2 5.6-4.4 8.4-4.2-2.8-5.8-5.8-4.4-8.4Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h2 id="hp-cta-title" className="hp-cta__title">
          <span className="hp-cta__title-lead">Unleash</span>
          <span className="hp-cta__title-rest">your growth potential</span>
        </h2>

        <Link href={pageRoutes.contact} className="hp-cta__btn">
          Start a project
        </Link>

        <div className="hp-cta__note">
          <svg className="hp-cta__up" viewBox="0 0 24 20" aria-hidden="true">
            <path
              d="M12 16V4M12 4L6 9.5M12 4l6 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            Reply within one business day
            <br />
            Clear next steps — no pitch deck theater
          </p>
        </div>
      </Container>
    </section>
  );
}
