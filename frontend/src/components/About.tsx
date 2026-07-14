import { aboutPoints, values } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

interface AboutProps {
  summary?: boolean;
}

export function About({ summary = false }: AboutProps) {
  const points = summary ? aboutPoints.slice(0, 2) : aboutPoints;

  return (
    <section className="section-perf bg-panel py-20 md:py-24" id="about">
      <Container>
        <div className="max-w-[820px]">
          <Reveal>
            <Eyebrow number="07">ABOUT US</Eyebrow>
            <SectionTitle>
              A build studio, sized so you always know who&apos;s working on your project.
            </SectionTitle>
            <p className="mb-8 max-w-[640px] text-[15px] text-text-dim md:mb-9 md:text-base">
              We&apos;re a software company built for organizations that need something real — not a
              landing page, a working system people rely on every day. Small enough that you talk to
              the engineers, structured enough to run a project the size a bank or a university
              actually needs.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:gap-6 max-[980px]:grid-cols-1 min-[981px]:grid-cols-3">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={i * 80}>
                <div className="pro-card pro-card--alt h-full p-6">
                  <h5 className="mb-2 text-[15.5px] font-semibold">{point.title}</h5>
                  <p className="m-0 text-[13.5px] leading-snug text-text-dim">{point.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {!summary && (
            <div className="mt-12 grid gap-4 sm:gap-5 max-[720px]:grid-cols-1 min-[721px]:grid-cols-3">
              {values.map((value, i) => (
                <Reveal key={value.title} delay={i * 80}>
                  <div className="pro-card pro-card--alt h-full p-6">
                    <h5 className="mb-2 font-display text-base font-semibold">{value.title}</h5>
                    <p className="m-0 text-[13.5px] text-text-dim">{value.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {summary && (
            <Reveal className="mt-8" delay={200}>
              <SectionLink href={pageRoutes.about}>Learn more about us</SectionLink>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
