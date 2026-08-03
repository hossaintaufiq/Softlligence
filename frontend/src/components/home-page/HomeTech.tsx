import { Container, Eyebrow } from "@/components/ui/Section";
import { homeTechStack } from "@/lib/homePageContent";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function HomeTech() {
  return (
    <section className="hp-section hp-tech" aria-labelledby="hp-tech-title">
      <Container>
        <Eyebrow number="09">TECHNOLOGIES</Eyebrow>
        <SketchHeadline id="hp-tech-title">
          The <SketchMark type="circle">stack</SketchMark> behind enterprise delivery.
        </SketchHeadline>
        <p className="hp-lead">
          Modern, maintainable tools chosen for performance, security, and longevity — including
          PHP/Laravel backends and AI/ML systems that plug into real business workflows.
        </p>

        <ul className="hp-tech__grid">
          {homeTechStack.map((tech) => (
            <li key={tech.name} className="hp-tech__item" title={tech.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt={tech.name}
                width={32}
                height={32}
                className="hp-tech__logo"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
