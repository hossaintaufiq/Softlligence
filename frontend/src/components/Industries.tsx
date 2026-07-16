import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content";
import { industryImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface IndustriesProps {
  summary?: boolean;
  limit?: number;
}

export function Industries({ summary = false, limit = 4 }: IndustriesProps) {
  const items = summary ? industries.slice(0, limit) : industries;

  if (summary) {
    return (
      <section className="section-perf bg-panel py-16 md:py-20" id="industries">
        <Container>
          <Reveal>
            <Eyebrow number="03">WHO WE BUILD FOR</Eyebrow>
            <SectionTitle>Sectors we know how to ship in.</SectionTitle>
            <SectionSub>Same build standard — different workflows and constraints.</SectionSub>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 60}>
                <Link
                  href={pageRoutes.industries}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-[20px] border border-white/10"
                >
                  <Image
                    src={industryImages[industry.id] ?? industryImages["public-sector"]}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/10"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <span className="mb-1.5 block font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
                      {industry.tag}
                    </span>
                    <h4 className="m-0 font-display text-[17px] font-semibold leading-snug text-text sm:text-lg">
                      {industry.title}
                    </h4>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8" delay={180}>
            <SectionLink href={pageRoutes.industries}>See all industries</SectionLink>
          </Reveal>
        </Container>
      </section>
    );
  }

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
                    <span key={cap} className="tech-pill">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
