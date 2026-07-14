import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";

const industries = [
  {
    tag: "Public sector",
    title: "Government & civic",
    description:
      "Citizen-facing portals and back-office systems built to procurement and accessibility standards.",
  },
  {
    tag: "Education",
    title: "Schools & universities",
    description:
      "Admissions, student information systems and learning platforms that survive an entire term without a support ticket.",
  },
  {
    tag: "Finance",
    title: "Banks & fintech",
    description:
      "Dashboards, reporting and customer-facing tools held to the security bar the sector expects.",
  },
  {
    tag: "Healthcare",
    title: "Clinics & health orgs",
    description:
      "Scheduling, patient tools and records systems designed around real clinical workflows.",
  },
  {
    tag: "Commerce",
    title: "Retail & e-commerce",
    description:
      "Storefronts, inventory and checkout flows built to hold up on your busiest sales day.",
  },
  {
    tag: "Non-profit",
    title: "NGOs & foundations",
    description:
      "Donor, volunteer and program-management tools sized to the budget of a mission-driven team.",
  },
];

export function Industries() {
  return (
    <section className="bg-panel py-24" id="industries">
      <Container>
        <Eyebrow number="03">WHO WE BUILD FOR</Eyebrow>
        <SectionTitle>Different organizations, the same standard of build.</SectionTitle>

        <div className="grid gap-5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-[14px] border border-white/9 bg-panel-2 p-[26px]"
            >
              <span className="font-mono text-[11.5px] tracking-[0.04em] text-accent-2">
                {industry.tag}
              </span>
              <h4 className="my-3 font-display text-lg font-semibold">{industry.title}</h4>
              <p className="m-0 text-sm text-text-dim">{industry.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
