import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { homeProcessSteps } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function HomeProcess() {
  return (
    <section className="hp-section hp-process" aria-labelledby="hp-process-title">
      <Container>
        <div className="hp-split-head">
          <div>
            <Eyebrow number="05">DELIVERY</Eyebrow>
            <SketchHeadline id="hp-process-title">
              From first call to <SketchMark type="underline">production</SketchMark>.
            </SketchHeadline>
          </div>
          <p className="hp-lead">
            A clear eight-step delivery model — every stage has an owner, a deliverable and a
            review.
          </p>
        </div>
        <ol className="hp-process__steps">
          {homeProcessSteps.map((step, i) => (
            <li key={step} className="hp-process__step">
              <span className="hp-process__n">{String(i + 1).padStart(2, "0")}</span>
              <span className="hp-process__label">{step}</span>
            </li>
          ))}
        </ol>
        <div className="hp-section__action">
          <Button href={pageRoutes.process} variant="outline">
            See our delivery process
          </Button>
        </div>
      </Container>
    </section>
  );
}
