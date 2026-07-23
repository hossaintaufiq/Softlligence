import Link from "next/link";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { clientProjects } from "@/lib/content";
import { homeFeaturedProjectIds } from "@/lib/homePageContent";
import { pageRoutes } from "@/lib/navigation";

export function HomeFeaturedWork() {
  const featured = homeFeaturedProjectIds
    .map((id) => clientProjects.find((p) => p.id === id))
    .filter((p): p is (typeof clientProjects)[number] => Boolean(p))
    .slice(0, 5);

  // Duplicate for seamless right→left loop
  const loop = [...featured, ...featured];

  return (
    <section className="hp-section hp-work" id="work" aria-labelledby="hp-work-title">
      <Container>
        <div className="hp-work__header">
          <div>
            <Eyebrow number="05">FEATURED WORK</Eyebrow>
            <SectionTitle>
              <span id="hp-work-title">Selected platforms we&apos;ve engineered.</span>
            </SectionTitle>
            <p className="hp-lead">
              Five production builds — scroll through, open a case, or browse the full portfolio.
            </p>
          </div>
          <Button href={pageRoutes.work} variant="outline" className="hp-work__portfolio">
            View Work page
          </Button>
        </div>
      </Container>

      <div className="hp-work__rail" aria-label="Featured projects">
        <div className="hp-work__track">
          {loop.map((project, i) => (
            <Link
              key={`${project.id}-${i}`}
              href={`${pageRoutes.work}#${project.id}`}
              className="hp-work__card"
              tabIndex={i >= featured.length ? -1 : undefined}
              aria-hidden={i >= featured.length ? true : undefined}
            >
              <span className="hp-work__index">
                {String((i % featured.length) + 1).padStart(2, "0")}
              </span>
              <span className="hp-work__sector">{project.sector}</span>
              <h3>{project.title}</h3>
              <p>{project.headline}</p>
              <ul className="hp-work__stack">
                {project.stack.slice(0, 3).map((tech) => (
                  <li key={`${tech}-${i}`}>{tech}</li>
                ))}
              </ul>
              <span className="hp-work__cta">View case →</span>
            </Link>
          ))}
        </div>
      </div>

      <Container>
        <div className="hp-section__action hp-work__footer">
          <Button href={pageRoutes.work}>Explore all projects</Button>
        </div>
      </Container>
    </section>
  );
}
