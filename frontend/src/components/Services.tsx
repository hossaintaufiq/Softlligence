import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/content";
import { serviceImages } from "@/lib/homeVisuals";
import { pageRoutes } from "@/lib/navigation";
import {
  CardCorner,
  Container,
  Eyebrow,
  SectionSub,
  SectionTitle,
} from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface ServicesProps {
  summary?: boolean;
  limit?: number;
}

export function Services({ summary = false, limit = 6 }: ServicesProps) {
  const items = summary ? services.slice(0, limit) : services;

  if (summary) {
    return (
      <section className="section-perf py-16 md:py-20" id="services">
        <Container>
          <Reveal>
            <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
            <SectionTitle>From wireframe to what&apos;s next.</SectionTitle>
            <SectionSub>Pick a lane — most projects blend a few of these.</SectionSub>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((service, i) => {
              const image =
                serviceImages[service.id] ??
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75";

              return (
                <Reveal key={service.index} delay={i * 50}>
                  <Link
                    href={`${pageRoutes.services}#${service.id}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_48px_rgba(0,0,0,0.35)]"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-ink/5"
                        aria-hidden="true"
                      />
                      <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-ink/55 px-2.5 py-1 font-mono text-[11px] text-accent backdrop-blur-sm">
                        {service.index}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                      <h3 className="mb-1.5 font-display text-[17px] font-semibold leading-snug sm:text-[18px]">
                        {service.title}
                      </h3>
                      <p className="m-0 line-clamp-2 text-[13px] leading-relaxed text-text-dim">
                        {service.headline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-8" delay={180}>
            <SectionLink href={pageRoutes.services}>Explore all services</SectionLink>
          </Reveal>
        </Container>
      </section>
    );
  }

  return (
    <section className="section-perf py-20 md:py-24" id="services">
      <Container>
        <Reveal>
          <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
          <SectionTitle>One team, from first wireframe to what&apos;s next.</SectionTitle>
          <SectionSub>
            Pick a starting point. Most projects touch three or four of these before launch.
          </SectionSub>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {items.map((service, i) => (
            <Reveal key={service.index} delay={i * 80}>
              <article className="pro-card pro-card--interactive group h-full overflow-hidden p-0">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
                  <Image
                    src={
                      serviceImages[service.id] ??
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=75"
                    }
                    alt=""
                    fill
                    sizes="(max-width: 980px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/80 to-transparent" />
                  <span className="absolute bottom-3 left-4 font-mono text-[13px] text-accent">
                    {service.index}
                  </span>
                </div>
                <div className="relative p-6 sm:p-[26px]">
                  <CardCorner />
                  <h3 className="mb-2.5 font-display text-lg font-semibold sm:text-[19px]">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-[14px] text-text-dim sm:text-[14.5px]">
                    {service.description}
                  </p>
                  <ul>
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="relative mb-1.5 pl-4 text-[13px] text-text-dim before:absolute before:top-2 before:left-0 before:h-px before:w-1.5 before:bg-accent-2 before:content-[''] sm:text-[13.5px]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 border-t border-white/9 pt-4">
                    <p className="mb-2 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                      Highlights
                    </p>
                    <ul>
                      {service.highlights.map((h) => (
                        <li key={h} className="mb-1.5 text-[13px] text-text-dim">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
