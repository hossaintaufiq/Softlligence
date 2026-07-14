import { industries } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";

interface IndustriesProps {
  summary?: boolean;
  limit?: number;
}

export function Industries({ summary = false, limit = 3 }: IndustriesProps) {
  const items = summary ? industries.slice(0, limit) : industries;

  return (
    <section className="bg-panel py-24" id="industries">
      <Container>
        <Eyebrow number="03">WHO WE BUILD FOR</Eyebrow>
        <SectionTitle>Different organizations, the same standard of build.</SectionTitle>

        <div className="grid gap-5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {items.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[14px] border border-white/9 bg-panel-2 p-[26px]"
            >
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
                      <span
                        key={cap}
                        className="rounded-full border border-white/9 px-2.5 py-1 font-mono text-[11px] text-text-dim"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {summary && (
          <div className="mt-10">
            <SectionLink href={pageRoutes.industries}>See all industries</SectionLink>
          </div>
        )}
      </Container>
    </section>
  );
}
