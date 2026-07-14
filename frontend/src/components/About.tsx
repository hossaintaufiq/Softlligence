import {
  aboutPoints,
  aboutStory,
} from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface AboutProps {
  summary?: boolean;
}

export function About({ summary = false }: AboutProps) {
  if (!summary) {
    return null;
  }

  return (
    <section className="section-perf border-y border-white/8 bg-panel py-20 md:py-24" id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <Eyebrow number="07">ABOUT US</Eyebrow>
            <SectionTitle>
              Softlligence builds software organizations actually run on.
            </SectionTitle>
            <p className="mb-0 max-w-[560px] text-[15px] leading-relaxed text-text-dim md:text-base">
              {aboutStory.lead}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="m-0 border-l-2 border-accent pl-5 font-display text-[17px] leading-snug font-medium text-text md:text-xl">
              Founder-led. Named engineers.
              <span className="block text-text-dim">Production systems — not templates.</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-0 divide-y divide-white/8 border-y border-white/8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {aboutPoints.map((point, i) => (
            <Reveal key={point.title} delay={i * 70}>
              <div className="px-0 py-6 sm:px-6 sm:py-8 first:sm:pl-0 last:sm:pr-0">
                <span className="mb-3 block font-mono text-[11px] tracking-[0.12em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-display text-[16px] font-semibold">{point.title}</h3>
                <p className="m-0 text-[13.5px] leading-relaxed text-text-dim">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" delay={200}>
          <SectionLink href={pageRoutes.about}>Our full story</SectionLink>
        </Reveal>
      </Container>
    </section>
  );
}
