import { industries } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface IndustriesProps {
  summary?: boolean;
  limit?: number;
}

export function Industries({ summary = false, limit = 3 }: IndustriesProps) {
  const items = summary ? industries.slice(0, limit) : industries;

  return (
    <section className="section-perf bg-panel py-20 md:py-24" id="industries">
      <Container>
        <Reveal>
          <Eyebrow number="03">WHO WE BUILD FOR</Eyebrow>
          <SectionTitle>Different organizations, the same standard of build.</SectionTitle>
        </Reveal>

        <div className="grid gap-4 sm:gap-5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {items.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 80}>
              <div className="pro-card pro-card--alt pro-card--interactive group h-full p-6 sm:p-[26px]">
                <span className="font-mono text-[11.5px] tracking-[0.04em] text-accent-2">
                  {industry.tag}
                </span>
                <h4 className="my-3 font-display text-lg font-semibold">{industry.title}</h4>
                <p className="m-0 text-sm text-text-dim">{industry.description}</p>

                {!summary && (
                  <>
                    <div className="mt-4 border-t border-white/9 pt-4">
                      <p className="mb-2 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                        Example projects
                      </p>
                      <ul>
                        {industry.examples.map((ex) => (
                          <li
                            key={ex}
                            className="relative mb-1.5 pl-4 text-[13px] text-text-dim before:absolute before:top-2 before:left-0 before:h-px before:w-1.5 before:bg-accent before:content-['']"
                          >
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {industry.capabilities.map((cap) => (
                        <span key={cap} className="tech-pill">{cap}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {summary && (
          <Reveal className="mt-10" delay={200}>
            <SectionLink href={pageRoutes.industries}>See all industries</SectionLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
