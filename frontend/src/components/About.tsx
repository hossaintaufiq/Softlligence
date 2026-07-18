import Image from "next/image";
import { aboutStory } from "@/lib/content";
import { aboutHomeGallery, aboutHomeImage } from "@/lib/homeVisuals";
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
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
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

          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10">
                <Image
                  src={aboutHomeImage}
                  alt="Premium workspace where Softlligence ships product"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-linear-to-tr from-ink/55 via-transparent to-accent/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="m-0 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                    Softlligence studio
                  </p>
                  <p className="mt-1 font-display text-[15px] font-semibold text-text sm:text-base">
                    Built for serious delivery
                  </p>
                </div>
              </div>

              {aboutHomeGallery.map((shot) => (
                <div
                  key={shot.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-white/10"
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/20" aria-hidden="true" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
