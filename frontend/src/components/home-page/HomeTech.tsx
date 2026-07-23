import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { homeTechStack } from "@/lib/homePageContent";

export function HomeTech() {
  return (
    <section className="hp-section hp-tech" aria-labelledby="hp-tech-title">
      <Container>
        <Eyebrow number="09">TECHNOLOGIES</Eyebrow>
        <SectionTitle>
          <span id="hp-tech-title">The stack behind enterprise delivery.</span>
        </SectionTitle>
        <p className="hp-lead">
          Modern, maintainable tools chosen for performance, security, and longevity — not novelty.
        </p>
      </Container>

      <div className="hp-marquee">
        <div className="hp-marquee__track">
          {homeTechStack.map((tech) => (
            <span key={tech} className="hp-marquee__item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
