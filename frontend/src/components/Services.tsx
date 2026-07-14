import { CardCorner, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";

const services = [
  {
    index: "01",
    title: "Websites & web apps",
    description:
      "Marketing sites, client portals, internal tools and dashboards — built to be fast, findable and easy for your own team to update.",
    items: ["Corporate & marketing sites", "Web applications & portals", "E-commerce & booking systems"],
  },
  {
    index: "02",
    title: "Mobile apps",
    description:
      "Native iOS and Android, or one cross-platform codebase — whichever gets your organization to the app store without rebuilding twice.",
    items: ["iOS & Android apps", "Cross-platform (React Native/Flutter)", "App store launch & upkeep"],
  },
  {
    index: "03",
    title: "Product design",
    description:
      "Wireframes, prototypes and a design system your future screens can reuse, tested with real users before a line of code ships.",
    items: ["UX research & wireframing", "UI & design systems", "Clickable prototypes"],
  },
  {
    index: "04",
    title: "Systems & integration",
    description:
      "Connect the tools your organization already runs on — payments, CRMs, HR systems, government or partner APIs — into one workflow.",
    items: ["Custom software & ERPs", "API & third-party integration", "Workflow automation"],
  },
  {
    index: "05",
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with a launch day traffic spike and stays quiet the other 364 days of the year.",
    items: ["Cloud architecture & migration", "CI/CD & automated deploys", "Monitoring & on-call support"],
  },
  {
    index: "06",
    title: "AI-powered features",
    description:
      "Search, chat, recommendations and automation added where they save your team real time — not bolted on for a press release.",
    items: ["Chat & virtual assistants", "Search & recommendations", "Document & data automation"],
  },
];

export function Services() {
  return (
    <section className="py-24" id="services">
      <Container>
        <Eyebrow number="02">WHAT WE BUILD</Eyebrow>
        <SectionTitle>One team, from first wireframe to what&apos;s next.</SectionTitle>
        <SectionSub>Pick a starting point. Most projects touch three or four of these before launch.</SectionSub>

        <div className="grid gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-3">
          {services.map((service) => (
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
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
