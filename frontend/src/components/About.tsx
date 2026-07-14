import { aboutPoints, values } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { SectionLink } from "@/components/ui/PageHero";

interface AboutProps {
  summary?: boolean;
}

export function About({ summary = false }: AboutProps) {
  const points = summary ? aboutPoints.slice(0, 2) : aboutPoints;

  return (
    <section className="bg-panel py-24" id="about">
      <Container>
        <div className="max-w-[820px]">
          <Eyebrow number="07">ABOUT NORTHSTACK</Eyebrow>
          <SectionTitle>
            A build studio, sized so you always know who&apos;s working on your project.
          </SectionTitle>
          <p className="mb-9 max-w-[640px] text-base text-text-dim">
            We&apos;re a software company built for organizations that need something real — not a
            landing page, a working system people rely on every day. Small enough that you talk to
            the engineers, structured enough to run a project the size a bank or a university
            actually needs.
          </p>
          <div className="grid gap-6 max-[980px]:grid-cols-1 min-[981px]:grid-cols-3">
            {points.map((point) => (
              <div key={point.title}>
                <h5 className="mb-2 text-[15.5px] font-semibold">{point.title}</h5>
                <p className="m-0 text-[13.5px] leading-snug text-text-dim">{point.description}</p>
              </div>
            ))}
          </div>

          {!summary && (
            <div className="mt-12 grid gap-5 max-[720px]:grid-cols-1 min-[721px]:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[14px] border border-white/9 bg-panel-2 p-6"
                >
                  <h5 className="mb-2 font-display text-base font-semibold">{value.title}</h5>
                  <p className="m-0 text-[13.5px] text-text-dim">{value.description}</p>
                </div>
              ))}
            </div>
          )}

          {summary && (
            <div className="mt-8">
              <SectionLink href={pageRoutes.about}>Learn more about us</SectionLink>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
