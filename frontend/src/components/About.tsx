import Image from "next/image";
import { aboutStory } from "@/lib/content";
import { aboutHomeImage } from "@/lib/homeVisuals";
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
    <section className="section-perf border-y border-white/8 bg-panel py-16 md:py-20" id="about">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal>
            <Eyebrow number="07">ABOUT US</Eyebrow>
            <SectionTitle>
              Softlligence builds software organizations actually run on.
            </SectionTitle>
            <p className="mb-6 max-w-[520px] text-[15px] leading-relaxed text-text-dim md:text-base">
              {aboutStory.lead}
            </p>
            <p className="mb-8 border-l-2 border-accent pl-4 font-display text-[16px] leading-snug font-medium md:text-[17px]">
              Founder-led. Named engineers.
              <span className="block text-text-dim">Production systems — not templates.</span>
            </p>
            <SectionLink href={pageRoutes.about}>Our full story</SectionLink>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-white/10 lg:aspect-[5/4]">
              <Image
                src={aboutHomeImage}
                alt="Team collaborating on product work"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-tr from-ink/50 via-transparent to-accent/10"
                aria-hidden="true"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
