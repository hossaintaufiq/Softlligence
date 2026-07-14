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

interface ServicesProps {
  summary?: boolean;
  limit?: number;
}

export function Services({ summary = false, limit = 3 }: ServicesProps) {
  const items = summary ? services.slice(0, limit) : services;

  return (
    <section className="py-24" id="services">
      <Container>
        <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
        <SectionTitle>One team, from first wireframe to what&apos;s next.</SectionTitle>
        <SectionSub>
          {summary
            ? "Six core capabilities — most projects combine three or four before launch."
            : "Pick a starting point. Most projects touch three or four of these before launch."}
        </SectionSub>

        <div className="grid gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {items.map((service) => (
            <article
              key={service.index}
              className="relative rounded-[14px] border border-white/9 bg-panel p-[30px_26px] transition-all duration-200 hover:-translate-y-[3px] hover:border-accent"
            >
              <CardCorner />
              <span className="mb-3.5 block font-mono text-[13px] text-text-dim">{service.index}</span>
              <h3 className="mb-2.5 font-display text-[19px] font-semibold">{service.title}</h3>
              <p className="mb-4 text-[14.5px] text-text-dim">{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="relative mb-1.5 pl-4 text-[13.5px] text-text-dim before:absolute before:top-2 before:left-0 before:h-px before:w-1.5 before:bg-accent-2 before:content-['']"
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
                        <li key={h} className="mb-1.5 text-[13px] text-text-dim">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/9 px-2.5 py-1 font-mono text-[11px] text-text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </article>
          ))}
        </div>

        {summary && (
          <div className="mt-10">
            <SectionLink href={pageRoutes.services}>Explore all services</SectionLink>
          </div>
        )}
      </Container>
    </section>
  );
}
