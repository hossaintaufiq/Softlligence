import { team } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface TeamProps {
  summary?: boolean;
  limit?: number;
}

export function Team({ summary = false, limit = 2 }: TeamProps) {
  const members = summary ? team.slice(0, limit) : team;

  return (
    <section className="section-perf py-20 md:py-24" id="team">
      <Container>
        <Reveal>
          <Eyebrow number="08">THE TEAM</Eyebrow>
          <SectionTitle>Builders you actually work with.</SectionTitle>
          <SectionSub>
            Softlligence is founder-led — engineers from North South University who design, ship,
            and support the systems themselves. No rotating bench.
          </SectionSub>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <article className="pro-card pro-card--interactive group h-full p-6 sm:p-7">
                <CardCornerCyan />
                <span
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/9 bg-panel-2 font-mono text-sm font-semibold text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10"
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
                <h3 className="mb-1.5 font-display text-base leading-snug font-semibold sm:text-[16.5px]">
                  {member.name}
                </h3>
                <p className="mb-2.5 font-mono text-xs text-accent-2">{member.role}</p>
                <p className="m-0 text-[13px] leading-snug text-text-dim">{member.school}</p>

                {!summary && (
                  <>
                    <p className="mt-4 border-t border-white/9 pt-4 text-[13px] text-text-dim">{member.bio}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="tech-pill">{skill}</span>
                      ))}
                    </div>
                  </>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {summary && (
          <Reveal className="mt-10" delay={200}>
            <SectionLink href={pageRoutes.team}>Meet the full team</SectionLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
