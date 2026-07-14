import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";

const projects = [
  {
    tag: "FinTech · Web platform",
    title: "Regional bank digital-banking portal",
    description:
      "Replaced a legacy branch-only system with a self-serve web portal for statements, transfers and support tickets.",
    stats: [
      { value: "-63%", label: "Branch visits for routine tasks" },
      { value: "4 mo", label: "Design to launch" },
    ],
  },
  {
    tag: "Education · Web + mobile",
    title: "University student-information system",
    description:
      "Unified admissions, grading and fee payment into one platform with a companion mobile app for students.",
    stats: [
      { value: "38k", label: "Students onboarded" },
      { value: "99.9%", label: "Uptime through exam season" },
    ],
  },
  {
    tag: "Retail · E-commerce",
    title: "Regional retail chain online store",
    description:
      "Storefront, inventory sync across 40 locations and a checkout that held up through a nationwide holiday sale.",
    stats: [
      { value: "+220%", label: "Online order volume, year one" },
      { value: "1.8s", label: "Median page load" },
    ],
  },
  {
    tag: "Public sector · Civic platform",
    title: "Municipal services & permits portal",
    description:
      "Moved permit applications and utility billing online for a city government, with an offline-friendly counter-staff view.",
    stats: [
      { value: "-70%", label: "Average permit turnaround" },
      { value: "12", label: "Departments integrated" },
    ],
  },
];

export function Work() {
  return (
    <section className="py-24" id="work">
      <Container>
        <Eyebrow number="06">SELECTED WORK</Eyebrow>
        <SectionTitle>A few of the products we&apos;ve shipped.</SectionTitle>
        <SectionSub>Representative projects — details adapted for client confidentiality.</SectionSub>

        <div className="grid gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative rounded-[14px] border border-white/9 bg-panel p-[30px_28px]"
            >
              <CardCornerCyan />
              <span className="font-mono text-[11.5px] text-accent-2">{project.tag}</span>
              <h3 className="my-3 font-display text-[21px] font-semibold">{project.title}</h3>
              <p className="mb-5.5 text-[14.5px] text-text-dim">{project.description}</p>
              <div className="flex gap-8 border-t border-white/9 pt-4">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <strong className="block font-display text-xl text-accent">{stat.value}</strong>
                    <span className="text-[12.5px] text-text-dim">{stat.label}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
