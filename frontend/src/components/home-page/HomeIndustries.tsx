import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content";
import { homeExtraIndustries } from "@/lib/homePageContent";
import { industryImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

type Card = { id: string; title: string; tag: string; href: string; blurb?: string; image?: string };

export function HomeIndustries() {
  const cards: Card[] = [
    ...industries.map((ind) => ({
      id: ind.id,
      title: ind.title,
      tag: ind.tag,
      blurb: ind.headline,
      href: `${pageRoutes.industries}#${ind.id}`,
      image: industryImages[ind.id],
    })),
    ...homeExtraIndustries.map((ind) => ({
      id: ind.id,
      title: ind.title,
      tag: ind.tag,
      href: pageRoutes.industries,
      image: industryImages[ind.id],
    })),
  ];

  return (
    <section className="hp-section hp-industries" id="industries" aria-labelledby="hp-industries-title">
      <Container>
        <div className="hp-split-head">
          <div>
            <Eyebrow number="04">INDUSTRIES</Eyebrow>
            <SketchHeadline id="hp-industries-title">
              Built for the sectors that run on <SketchMark type="underline">systems</SketchMark>.
            </SketchHeadline>
          </div>
          <p className="hp-lead">
            Manufacturing, healthcare, finance, education, government, and more — same engineering
            standard, different operational constraints.
          </p>
        </div>

        <div className="hp-ind-grid" role="list">
          {cards.map((card, i) => (
            <Link key={card.id} href={card.href} className="hp-ind-tile" role="listitem">
              <span className="hp-ind-tile__media">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={55}
                    className="object-cover"
                  />
                ) : null}
              </span>
              <span className="hp-ind-tile__body">
                <span className="hp-ind-tile__meta">
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  {card.tag}
                </span>
                <strong>{card.title}</strong>
                {card.blurb ? <span className="hp-ind-tile__blurb">{card.blurb}</span> : null}
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
