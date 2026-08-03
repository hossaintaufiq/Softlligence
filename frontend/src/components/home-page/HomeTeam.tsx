import Image from "next/image";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { teamLeadership } from "@/lib/content";
import { pageRoutes } from "@/lib/navigation";
import { SketchHeadline, SketchMark } from "@/components/ui/SketchHeadline";

export function HomeTeam() {
  const leaders = teamLeadership.slice(0, 4);

  return (
    <section className="hp-section hp-team" id="team" aria-labelledby="hp-team-title">
      <Container>
        <Eyebrow number="08">LEADERSHIP</Eyebrow>
        <SketchHeadline id="hp-team-title">
          Meet the <SketchMark type="circle">people</SketchMark> who set the standard.
        </SketchHeadline>
        <p className="hp-lead">
          Hands-on leadership — the people on the first call stay through delivery.
        </p>

        <div className="hp-team__strip">
          {leaders.map((member) => (
            <article key={member.name} className="hp-team__card">
              <div className="hp-team__photo">
                {member.photo ? (
                  <Image
                    key={member.photo}
                    src={member.photo}
                    alt={member.name}
                    width={280}
                    height={360}
                    className="hp-team__img"
                    sizes="(max-width: 720px) 7.2rem, 8.35rem"
                  />
                ) : (
                  <span className="hp-team__initials" aria-hidden="true">
                    {member.initials}
                  </span>
                )}
              </div>
              <div className="hp-team__meta">
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
