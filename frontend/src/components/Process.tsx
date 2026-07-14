import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We map your users, your workflow and your constraints — budget, timeline, existing systems — before proposing anything.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Wireframes and clickable prototypes you can react to and change, before any production code is written.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Development in two-week cycles, with a working build you can click through at the end of each one.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "Staged rollout, load testing and a launch-day checklist, so opening day isn't the first real test.",
  },
  {
    num: "05",
    title: "Grow",
    description:
      "Monitoring, support and a backlog of what to build next, based on how people actually use it.",
  },
];

export function Process() {
  return (
    <section className="py-24" id="process">
      <Container>
        <Eyebrow number="04">HOW A PROJECT RUNS</Eyebrow>
        <SectionTitle>Five stages. No stage starts before the last one is signed off.</SectionTitle>

        <ol className="flex flex-col">
          {steps.map((step, i) => (
            <li
              key={step.num}
              className={`flex gap-7 border-t border-white/9 py-[26px] ${i === steps.length - 1 ? "border-b" : ""}`}
            >
              <span className="min-w-[38px] font-mono text-sm text-accent">{step.num}</span>
              <div>
                <h4 className="mb-1.5 font-display text-[19px] font-semibold">{step.title}</h4>
                <p className="m-0 max-w-[640px] text-[15px] text-text-dim">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
