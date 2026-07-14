import { services } from "@/lib/content";
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

export function Services({ summary = false, limit = 3 }: ServicesProps) {
  const items = summary ? services.slice(0, limit) : services;

  return (
    <section className="section-perf py-20 md:py-24" id="services">
      <Container>
        <Reveal>
          <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
          <SectionTitle>One team, from first wireframe to what&apos;s next.</SectionTitle>
          <SectionSub>
            {summary
              ? "Six core capabilities — most projects combine three or four before launch."
              : "Pick a starting point. Most projects touch three or four of these before launch."}
          </SectionSub>
        </Reveal>

        <div className="grid gap-4 sm:gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {items.map((service, i) => (
            <Reveal key={service.index} delay={i * 80}>
              <article className="pro-card pro-card--interactive group h-full p-6 sm:p-[30px_26px]">
                <CardCorner />
                <span className="mb-3.5 block font-mono text-[13px] text-text-dim">{service.index}</span>
                <h3 className="mb-2.5 font-display text-lg font-semibold sm:text-[19px]">{service.title}</h3>
                <p className="mb-4 text-[14px] text-text-dim sm:text-[14.5px]">{service.description}</p>
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

                {!summary && (
                  <>
                    <div className="mt-5 border-t border-white/9 pt-4">
                      <p className="mb-2 font-mono text-[11px] tracking-[0.04em] text-accent-2 uppercase">
                        Highlights
                      </p>
                      <ul>
                        {service.highlights.map((h) => (
                          <li key={h} className="mb-1.5 text-[13px] text-text-dim">{h}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="tech-pill">{tech}</span>
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
            <SectionLink href={pageRoutes.services}>Explore all services</SectionLink>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
