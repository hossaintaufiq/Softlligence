import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";

const points = [
  {
    title: "Fixed team, not a rotating bench",
    description: "The designer and engineers on your kickoff call are the ones who ship it.",
  },
  {
    title: "Engagement models that fit",
    description:
      "Fixed-price for defined scope, dedicated team for ongoing product work, or staff augmentation alongside your own developers.",
  },
  {
    title: "Security taken seriously",
    description:
      "Role-based access, encrypted data and audit logging built in from the first sprint, not bolted on before launch.",
  },
];

export function About() {
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
        </div>
      </Container>
    </section>
  );
}
