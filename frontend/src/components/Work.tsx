import { projects } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";

interface WorkProps {
  summary?: boolean;
  limit?: number;
}

export function Work({ summary = false, limit = 2 }: WorkProps) {
  const items = summary ? projects.slice(0, limit) : projects;

  return (
    <section className="py-24" id="work">
      <Container>
        <Eyebrow number="06">SELECTED WORK</Eyebrow>
        <SectionTitle>A few of the products we&apos;ve shipped.</SectionTitle>
        <SectionSub>
          {summary
            ? "Representative projects — tap through for the full portfolio."
            : "Representative projects — details adapted for client confidentiality."}
        </SectionSub>

        <div className="grid gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-2">
          {items.map((project) => (
            <article
              key={project.title}
              className="relative rounded-[14px] border border-white/9 bg-panel p-[30px_28px]"
            >
              <CardCornerCyan />
              <span className="font-mono text-[11.5px] text-accent-2">{project.tag}</span>
              <h3 className="my-3 font-display text-[21px] font-semibold">{project.title}</h3>
              <p className="mb-5.5 text-[14.5px] text-text-dim">{project.description}</p>

              {!summary && (
                <div className="mb-5.5 grid gap-4 border-t border-white/9 pt-4">
                  <div>
                    <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                      Challenge
                    </p>
                    <p className="text-[13.5px] text-text-dim">{project.challenge}</p>
                  </div>
                  <div>
                    <p className="mb-1 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                      Solution
                    </p>
                    <p className="text-[13.5px] text-text-dim">{project.solution}</p>
                  </div>
                </div>
              )}

              <div className="flex gap-8 border-t border-white/9 pt-4">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong className="block font-display text-xl text-accent">{stat.value}</strong>
                    <span className="text-[12.5px] text-text-dim">{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {summary && (
          <div className="mt-10">
            <SectionLink href={pageRoutes.work}>View all case studies</SectionLink>
          </div>
        )}
      </Container>
    </section>
  );
}
