import Image from "next/image";
import Link from "next/link";
import { clientProjects } from "@/lib/content";
import { workCoverImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface WorkProps {
  summary?: boolean;
  limit?: number;
}

export function Work({ summary = false, limit = 3 }: WorkProps) {
  const items = summary ? clientProjects.slice(0, limit) : clientProjects;

  if (summary) {
    return (
      <section className="section-perf py-16 md:py-20" id="work">
        <Container>
          <Reveal>
            <Eyebrow number="06">SELECTED WORK</Eyebrow>
            <SectionTitle>Recent builds worth a look.</SectionTitle>
            <SectionSub>Open a card for the full portfolio — live links, AI work, tools, and templates.</SectionSub>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {items.map((project, i) => {
              const cover =
                workCoverImages[project.id] ??
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=70";

              return (
                <Reveal key={project.title} delay={i * 70}>
                  <Link
                    href={`${pageRoutes.work}#${project.id}`}
                    className="group relative block overflow-hidden rounded-[22px] border border-white/10 bg-ink"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
                      <Image
                        src={cover}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-ink via-ink/50 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <span className="mb-2 block font-mono text-[11px] text-accent-2">
                          {project.sector}
                        </span>
                        <h3 className="mb-2 font-display text-[18px] font-semibold leading-snug sm:text-[20px]">
                          {project.title}
                        </h3>
                        <p className="m-0 line-clamp-2 text-[13px] text-text-dim">{project.headline}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          View project <span aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8" delay={200}>
            <SectionLink href={pageRoutes.work}>View work & templates</SectionLink>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-perf py-20 md:py-24" id="work">
      <Container>
        <Reveal>
          <Eyebrow number="06">SELECTED WORK</Eyebrow>
          <SectionTitle>A few of the products we&apos;ve shipped.</SectionTitle>
          <SectionSub>Shipped products we&apos;ve delivered for real clients.</SectionSub>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
          {items.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <article className="pro-card pro-card--interactive group h-full p-6 sm:p-[30px_28px]">
                <CardCornerCyan />
                <span className="font-mono text-[11.5px] text-accent-2">{project.tag}</span>
                <h3 className="my-3 font-display text-xl font-semibold sm:text-[21px]">{project.title}</h3>
                <p className="mb-5 text-[14px] text-text-dim sm:mb-5.5 sm:text-[14.5px]">{project.description}</p>
                <div className="mb-5 grid gap-4 border-t border-white/9 pt-4 sm:mb-5.5">
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
      </Container>
    </section>
  );
}
