import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content";
import { homeExtraIndustries } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

type Card = {
  id: string;
  title: string;
  tag: string;
  href: string;
  blurb?: string;
};

export function HomeIndustries() {
  const cards: Card[] = [
    ...industries.map((ind) => ({
      id: ind.id,
      title: ind.title,
      tag: ind.tag,
      blurb: ind.headline,
      href: `${pageRoutes.industries}#${ind.id}`,
    })),
    ...homeExtraIndustries.map((ind) => ({
      id: ind.id,
      title: ind.title,
      tag: ind.tag,
      href: pageRoutes.industries,
    })),
  ];

  return (
    <section className="hp-section hp-industries" id="industries" aria-labelledby="hp-industries-title">
      <Container>
        <Eyebrow number="04">INDUSTRIES</Eyebrow>
        <SketchHeadline id="hp-industries-title">
          Built for the sectors that run on <SketchMark type="circle">systems</SketchMark>.
        </SketchHeadline>
        <p className="hp-lead">
          Manufacturing, healthcare, finance, education, government, and more — same engineering
          standard, different operational constraints.
        </p>
      </Container>

      <div className="hp-industries__rail" role="list">
        <div className="hp-industries__track">
          {cards.map((card, index) => {
            const wave = index % 2 === 0 ? "high" : "low";
            return (
              <Link
                key={card.id}
                href={card.href}
                role="listitem"
                className={`hp-industry hp-industry--${wave}`}
              >
                <span className="hp-industry__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hp-industry__tag">{card.tag}</span>
                <h3>{card.title}</h3>
                {card.blurb ? <p className="hp-industry__blurb">{card.blurb}</p> : null}
                <span className="hp-industry__go" aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      <Container>
        <div className="hp-section__action">
          <Button href={pageRoutes.industries} variant="outline">
            See all industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
