"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamLeadership } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MemberPhoto, SocialBtn } from "./teamShared";

function leadershipFocus(skills: string[]) {
  return skills.slice(0, 4);
}

function leadershipStack(skills: string[]) {
  return skills.slice(0, 8);
}

export function TeamLeadership() {
  const reduce = useReducedMotion();

  return (
    <section className="tp-section tp-leadership" aria-labelledby="team-leadership-title">
      <div className="tp-section__glow" aria-hidden="true" />
      <Container className="relative">
        <Eyebrow number="02">LEADERSHIP</Eyebrow>
        <SectionTitle>
          <span id="team-leadership-title">The people who set the standard.</span>
        </SectionTitle>
        <p className="tp-lead tp-lead--narrow">
          Executive-caliber builders who own architecture, delivery, and client relationships —
          and still write production code.
        </p>

        <div className="tp-leadership__list">
          {teamLeadership.map((leader, i) => (
            <motion.article
              key={leader.name}
              className="tp-leader"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: Math.min(i * 0.08, 0.24) }}
            >
              <div className="tp-leader__media">
                <span className="tp-leader__badge">{String(i + 1).padStart(2, "0")}</span>
                <MemberPhoto
                  name={leader.name}
                  initials={leader.initials}
                  tone={leader.photoTone}
                  photo={leader.photo}
                  variant="leadership"
                />
              </div>

              <div className="tp-leader__body">
                <p className="tp-leader__role">{leader.role}</p>
                <h3 className="tp-leader__name">{leader.name}</h3>
                <p className="tp-leader__bio">{leader.bio}</p>

                <div className="tp-leader__meta">
                  <div>
                    <p className="tp-meta-label">Core expertise</p>
                    <ul className="tp-chips">
                      {leadershipFocus(leader.skills).map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="tp-meta-label">Technology stack</p>
                    <ul className="tp-chips tp-chips--muted">
                      {leadershipStack(leader.skills).map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="tp-leader__duty">
                  <span>Leadership</span>
                  Sets direction for delivery quality, technical decisions, and client partnership on
                  engagements they lead.
                </p>

                <div className="tp-leader__actions">
                  <div className="tp-leader__socials">
                    <SocialBtn href={leader.linkedin} label={`${leader.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </SocialBtn>
                    <SocialBtn href={leader.github} label={`${leader.name} on GitHub`}>
                      <GitHubIcon />
                    </SocialBtn>
                  </div>
                  {leader.email ? (
                    <a href={`mailto:${leader.email}`} className="tp-leader__email">
                      Contact
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
