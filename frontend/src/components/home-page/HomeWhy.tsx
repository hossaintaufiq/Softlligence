import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { homeWhyPoints } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function HomeWhy() {
  return (
    <section className="hp-section hp-why" aria-labelledby="hp-why-title">
      <Container>
        <Eyebrow number="07">WHY SOFTLLIGENCE</Eyebrow>
        <SketchHeadline id="hp-why-title">
          Why organizations <SketchMark type="underline">choose</SketchMark> us.
        </SketchHeadline>
        <p className="hp-lead">
          Not another agency pitch — enterprise engineering partnership with clarity and continuity.
        </p>

        <div className="hp-why__grid">
          {homeWhyPoints.map((item, i) => (
            <article key={item.title} className="hp-why__card">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="hp-section__action">
          <Button href={pageRoutes.about} variant="outline">
            About Softlligence
          </Button>
        </div>
      </Container>
    </section>
  );
}
