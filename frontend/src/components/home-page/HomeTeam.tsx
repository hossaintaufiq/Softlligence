import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { teamLeadership } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";

export function HomeTeam() {
  const leaders = teamLeadership.slice(0, 4);

  return (
    <section className="hp-section hp-team" id="team" aria-labelledby="hp-team-title">
      <Container>
        <Eyebrow number="08">LEADERSHIP</Eyebrow>
        <SectionTitle>
          <span id="hp-team-title">Meet the people who set the standard.</span>
        </SectionTitle>
        <p className="hp-lead">
          Hands-on leadership — the people on the first call stay through delivery.
        </p>

        <div className="hp-team__strip">
          {leaders.map((member) => (
            <article key={member.name} className="hp-team__chip">
              <span className="hp-team__initials" aria-hidden="true">
                {member.initials}
              </span>
              <div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="hp-section__action">
          <Button href={pageRoutes.team} variant="outline">
            Meet the full team
          </Button>
        </div>
      </Container>
    </section>
  );
}
