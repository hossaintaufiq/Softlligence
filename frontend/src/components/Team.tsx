import Image from "next/image";
import { team, teamLeadership } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface TeamProps {
  summary?: boolean;
  limit?: number;
}

export function Team({ summary = false, limit = 4 }: TeamProps) {
  if (summary) {
    const members = teamLeadership.slice(0, limit);

    return (
      <section className="section-perf py-16 md:py-20" id="team">
        <Container>
          <Reveal>
            <Eyebrow number="08">THE TEAM</Eyebrow>
            <SectionTitle>Builders you actually work with.</SectionTitle>
            <SectionSub>Founder-led — the people on the call are the ones who ship.</SectionSub>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {members.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <article className="group overflow-hidden rounded-[20px] border border-white/10 bg-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="relative aspect-[4/5] overflow-hidden bg-panel">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        className={`flex h-full w-full items-center justify-center bg-linear-to-br ${member.photoTone}`}
                      >
                        <span className="font-mono text-2xl text-accent">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="mb-1 font-display text-[15px] leading-snug font-semibold">
                      {member.name}
                    </h3>
                    <p className="m-0 font-mono text-[11px] text-accent-2">{member.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8" delay={180}>
            <SectionLink href={pageRoutes.team}>Meet the full team</SectionLink>
          </Reveal>
        </Container>
      </section>
    );
  }

  const members = team.slice(0, limit);

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
                <p className="mt-4 border-t border-white/9 pt-4 text-[13px] text-text-dim">{member.bio}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="tech-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
