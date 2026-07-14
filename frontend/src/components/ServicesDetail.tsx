import {
  services,
  engagementModels,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalCTA } from "@/components/FinalCTA";

export function ServicesDetail() {
  return (
    <>
      <section className="section-perf bg-ink py-14 md:py-20">
        <Container>
          <Reveal>
            <Eyebrow number="02">CAPABILITIES</Eyebrow>
            <SectionTitle>Clear offerings. Clear timelines.</SectionTitle>
            <p className="mb-10 max-w-[560px] text-[15px] text-text-dim md:text-base">
              Six ways we typically engage. Most clients combine two or three — we help you
              choose the right starting point on a discovery call.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 60}>
                <article
                  id={service.id}
                  className="group flex h-full flex-col rounded-[14px] border border-white/9 bg-panel p-6 transition-all duration-200 hover:border-accent/35 sm:p-7"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[13px] text-accent">{service.index}</span>
                    <span className="font-mono text-[11px] text-text-dim">{service.timeline}</span>
                  </div>

                  <h3 className="mb-2 font-display text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[14px] leading-relaxed text-text-dim">
                    {service.description}
                  </p>

                  <ul className="mb-6 space-y-2 border-t border-white/9 pt-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="relative pl-3.5 text-[13px] text-text-dim before:absolute before:top-2 before:left-0 before:h-px before:w-1.5 before:bg-accent-2 before:content-['']"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/8 px-2 py-0.5 font-mono text-[10px] text-text-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button
                    href="/contact"
                    variant="outline"
                    className="mt-auto w-full group-hover:border-accent/40"
                  >
                    Inquire
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-perf border-t border-white/5 bg-panel py-14 md:py-20">
        <Container>
          <Reveal>
            <Eyebrow number="02">ENGAGEMENT</Eyebrow>
            <SectionTitle className="mb-8">How we work together</SectionTitle>
          </Reveal>

          <div className="grid gap-0 overflow-hidden rounded-[14px] border border-white/9 md:grid-cols-3">
            {engagementModels.map((model, i) => (
              <Reveal key={model.title} delay={i * 80}>
                <div
                  className={`h-full bg-panel-2 p-6 sm:p-8 ${
                    i < engagementModels.length - 1
                      ? "border-b border-white/9 md:border-r md:border-b-0"
                      : ""
                  }`}
                >
                  <span className="mb-4 block font-mono text-[12px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold">{model.title}</h3>
                  <p className="mb-4 text-[14px] leading-relaxed text-text-dim">
                    {model.description}
                  </p>
                  <ul className="space-y-2">
                    {model.points.map((point) => (
                      <li key={point} className="flex gap-2 text-[13px] text-text-dim">
                        <span className="text-accent">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center" delay={120}>
            <p className="mb-5 text-[14px] text-text-dim">
              Unsure which model fits? Start with a short discovery call.
            </p>
            <Button href="/contact" size="lg">
              Book a call
            </Button>
          </Reveal>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
