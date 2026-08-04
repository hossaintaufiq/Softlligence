import Image from "next/image";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { industries } from "@/lib/content";
import { homeExtraIndustries } from "@/lib/homePageContent";
import { industryImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";
import { BrushFlourish } from "@/components/ui/BrushFlourish";

type Card = {
  id: string;
  title: string;
  tag: string;
  href: string;
  blurb?: string;
  image?: string;
};

const ROW_SIZES = [4, 4, 3] as const;

function chunkCards(cards: Card[], sizes: readonly number[]) {
  const rows: Card[][] = [];
  let cursor = 0;
  for (const size of sizes) {
    rows.push(cards.slice(cursor, cursor + size));
    cursor += size;
  }
  if (cursor < cards.length) {
    rows.push(cards.slice(cursor));
  }
  return rows.filter((row) => row.length > 0);
}

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

  const rows = chunkCards(cards, ROW_SIZES);
  let cardIndex = 0;

  return (
    <section
      className="hp-section hp-industries has-brush-flourish"
      id="industries"
      aria-labelledby="hp-industries-title"
    >
      <BrushFlourish seed={4} />

      <Container className="hp-industries__content">
        <Eyebrow number="04">INDUSTRIES</Eyebrow>
        <SketchHeadline id="hp-industries-title">
          Built for the sectors that run on <SketchMark type="circle">systems</SketchMark>.
        </SketchHeadline>
        <p className="hp-lead">
          Manufacturing, healthcare, finance, education, government, and more — same engineering
          standard, different operational constraints.
        </p>

        <div className="hp-industries__rows" role="list">
          {rows.map((row) => {
            const rowKey = row.map((card) => card.id).join("-");
            return (
              <div
                key={rowKey}
                className={`hp-industries__row hp-industries__row--${row.length}`}
              >
                {row.map((card, col) => {
                  const index = cardIndex++;
                  const wave = col % 2 === 0 ? "high" : "low";
                  return (
                    <Link
                      key={card.id}
                      href={card.href}
                      role="listitem"
                      className={`hp-industry hp-industry--${wave}${card.image ? " hp-industry--media" : ""}`}
                    >
                      {card.image ? (
                        <>
                          <Image
                            src={card.image}
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                            quality={60}
                            className="hp-industry__bg"
                          />
                          <span className="hp-industry__veil" aria-hidden="true" />
                        </>
                      ) : null}
                      <span className="hp-industry__body">
                        <span className="hp-industry__index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="hp-industry__tag">{card.tag}</span>
                        <h3>{card.title}</h3>
                        {card.blurb ? <p className="hp-industry__blurb">{card.blurb}</p> : null}
                      </span>
                      <span className="hp-industry__go" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="hp-section__action hp-industries__action">
          <Button href={pageRoutes.industries} variant="outline">
            See all industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
