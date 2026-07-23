import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { engagementModels } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";

export function HomeDelivery() {
  return (
    <section className="hp-section hp-delivery" id="process" aria-labelledby="hp-delivery-title">
      <Container>
        <div className="hp-section__head hp-delivery__head">
          <Eyebrow number="06">ENGAGEMENT</Eyebrow>
          <SectionTitle>
            <span id="hp-delivery-title">Ways to work with Softlligence.</span>
          </SectionTitle>
          <p className="hp-lead">
            Clear commercial models — pick the fit for your roadmap, then ship with a named engineering
            team.
          </p>
        </div>

        <div className="hp-delivery__grid">
          {engagementModels.map((model, i) => (
            <article key={model.title} className="hp-delivery__card">
              <span className="hp-delivery__n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul>
                {model.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="hp-section__action hp-delivery__action">
          <Button href={pageRoutes.process} variant="outline">
            See our delivery process
          </Button>
          <Button href={pageRoutes.contact}>Start a conversation</Button>
        </div>
      </Container>
    </section>
  );
}
