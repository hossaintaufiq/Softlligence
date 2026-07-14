import { projects } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface WorkProps {
  summary?: boolean;
  limit?: number;
}

export function Work({ summary = false, limit = 2 }: WorkProps) {
  const items = summary ? projects.slice(0, limit) : projects;

  return (
    <section className="section-perf py-20 md:py-24" id="work">
      <Container>
        <Reveal>
          <Eyebrow number="06">SELECTED WORK</Eyebrow>
          <SectionTitle>A few of the products we&apos;ve shipped.</SectionTitle>
          <SectionSub>
            {summary
              ? "Representative projects — tap through for the full portfolio."
              : "Representative projects — details adapted for client confidentiality."}
          </SectionSub>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
          {items.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="pro-card pro-card--interactive group h-full p-6 sm:p-[30px_28px]">
                <CardCornerCyan />
                <span className="font-mono text-[11.5px] text-accent-2">{project.tag}</span>
                <h3 className="my-3 font-display text-xl font-semibold sm:text-[21px]">{project.title}</h3>
                <p className="mb-5 text-[14px] text-text-dim sm:mb-5.5 sm:text-[14.5px]">{project.description}</p>

                {!summary && (
                  <div className="mb-5 grid gap-4 border-t border-white/9 pt-4 sm:mb-5.5">
                    <div>
                      <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">Challenge</p>
                      <p className="text-[13.5px] text-text-dim">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">Solution</p>
                      <p className="text-[13.5px] text-text-dim">{project.solution}</p>
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-6 border-t border-white/9 pt-4 sm:gap-8">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <strong className="block font-display text-xl text-accent">{stat.value}</strong>
                      <span className="text-[12.5px] text-text-dim">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {summary && (
          <Reveal className="mt-10" delay={200}>
            <SectionLink href={pageRoutes.work}>View all case studies</SectionLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
