import Link from "next/link";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";

export function HomeFinalCta() {
  return (
    <section className="hp-cta" id="contact" aria-labelledby="hp-cta-title">
      <Container className="hp-cta__inner">
        <div className="hp-cta__burst" aria-hidden="true">
          <svg className="hp-cta__spark" viewBox="0 0 120 100" fill="none">
            <path
              d="M60 88C60 88 14 58 14 34c0-12 9-22 22-22 8 0 15 4 19 11 4-7 11-11 19-11 13 0 22 10 22 22 0 24-46 54-46 54Z"
              fill="currentColor"
            />
            <path
              d="M60 12V4M78 18l8-10M42 18L34 8M90 36h10M20 36H10M84 58l10 6M36 58l-10 6"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              opacity="0.85"
            />
            <circle cx="60" cy="3" r="2.2" fill="currentColor" />
            <circle cx="88" cy="7" r="2" fill="currentColor" />
            <circle cx="32" cy="7" r="2" fill="currentColor" />
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
