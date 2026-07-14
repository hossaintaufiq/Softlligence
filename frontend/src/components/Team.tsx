import { CardCornerCyan, Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";

const team = [
  {
    initials: "MH",
    name: "Md Hossain Ahmed Taufiq",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
  },
  {
    initials: "MS",
    name: "Mehedi Ashraf Simanto",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
  },
  {
    initials: "FS",
    name: "Fiad Sarowar",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
  },
  {
    initials: "AB",
    name: "Al Mustafiz Bappy",
    role: "Developer",
    school: "BSc in CSE, North South University, Bangladesh",
  },
];

export function Team() {
  return (
    <section className="py-24" id="team">
      <Container>
        <Eyebrow number="08">THE TEAM</Eyebrow>
        <SectionTitle>Four developers, one build team.</SectionTitle>
        <SectionSub>
          Softlligence Technologies is run by a small team of developers currently completing
          their BSc in Computer Science &amp; Engineering at North South University, Bangladesh.
        </SectionSub>

        <div className="grid gap-5.5 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-4">
          {team.map((member) => (
            <article
              key={member.name}
              className="relative rounded-[14px] border border-white/9 bg-panel p-7 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent"
            >
              <CardCornerCyan />
              <span
                className="mb-4.5 flex h-12 w-12 items-center justify-center rounded-full border border-white/9 bg-panel-2 font-mono text-sm font-semibold text-accent"
                aria-hidden="true"
              >
                {member.initials}
              </span>
              <h3 className="mb-1.5 font-display text-[16.5px] leading-snug font-semibold">
                {member.name}
              </h3>
              <p className="mb-2.5 font-mono text-xs text-accent-2">{member.role}</p>
              <p className="m-0 text-[13px] leading-snug text-text-dim">{member.school}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
