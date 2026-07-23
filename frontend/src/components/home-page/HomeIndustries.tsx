import Link from "next/link";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content";
import { homeExtraIndustries } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";

type Card = { id: string; title: string; tag: string; href: string };

export function HomeIndustries() {
  const cards: Card[] = [
    ...industries.map((ind) => ({
      id: ind.id,
      title: ind.title,
      tag: ind.tag,
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
        <SectionTitle>
          <span id="hp-industries-title">Built for the sectors that run on systems.</span>
        </SectionTitle>
        <p className="hp-lead">
          Manufacturing, healthcare, finance, education, government, and more — same engineering
          standard, different operational constraints.
        </p>

        <div className="hp-industries__grid">
          {cards.map((card) => (
            <Link key={card.id} href={card.href} className="hp-industry">
              <span className="hp-industry__tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <span className="hp-industry__go" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>

        <div className="hp-section__action">
          <Button href={pageRoutes.industries} variant="outline">
            See all industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
