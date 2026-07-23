"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { teamEngineering } from "@/lib/content";
import { GitHubIcon, LinkedInIcon, MemberPhoto, SocialBtn } from "./teamShared";

type EngMember = (typeof teamEngineering)[number];

const GROUPS: { id: string; title: string; match: (m: EngMember) => boolean }[] = [
  {
    id: "ai",
    title: "AI Engineering",
    match: (m) => /ai/i.test(m.role) || m.skills.some((s) => /ai|openai|tensorflow|pytorch/i.test(s)),
  },
  {
    id: "fullstack",
    title: "Full Stack Engineering",
    match: (m) => /full\s*stack/i.test(m.role),
  },
  {
    id: "backend",
    title: "Backend Engineering",
    match: (m) => /backend/i.test(m.role),
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    match: (m) => /frontend/i.test(m.role),
  },
  {
    id: "mobile",
    title: "Mobile Engineering",
    match: (m) => /mobile/i.test(m.role),
  },
];

function groupEngineering(members: EngMember[]) {
  const assigned = new Set<string>();
  const groups: { id: string; title: string; members: EngMember[] }[] = [];

  for (const group of GROUPS) {
    const matched = members.filter((m) => !assigned.has(m.name) && group.match(m));
    if (matched.length) {
      matched.forEach((m) => assigned.add(m.name));
      groups.push({ id: group.id, title: group.title, members: matched });
    }
  }

  const rest = members.filter((m) => !assigned.has(m.name));
  if (rest.length) {
    groups.push({ id: "engineering", title: "Engineering", members: rest });
  }

  return groups;
}

export function TeamEngineering() {
  const reduce = useReducedMotion();
  const groups = groupEngineering(teamEngineering);

  return (
    <section className="tp-section tp-engineering" aria-labelledby="team-engineering-title">
      <Container>
        <Eyebrow number="03">ENGINEERING</Eyebrow>
        <SectionTitle>
          <span id="team-engineering-title">Engineering team</span>
        </SectionTitle>
        <p className="tp-lead tp-lead--narrow">
          Specialists across AI, full stack, and platform work — grouped by focus, united by delivery
          standards.
        </p>

        <div className="tp-eng-groups">
          {groups.map((group) => (
            <div key={group.id} className="tp-eng-group">
              <header className="tp-eng-group__head">
                <h3>{group.title}</h3>
                <span>{group.members.length}</span>
              </header>

              <div className="tp-eng-group__grid">
                {group.members.map((member, i) => (
                  <motion.article
                    key={member.name}
                    className="tp-eng-card"
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.06 }}
                  >
                    <div className="tp-eng-card__media">
                      <MemberPhoto
                        name={member.name}
                        initials={member.initials}
                        tone={member.photoTone}
                        photo={member.photo}
                        variant="card"
                      />
                    </div>
                    <div className="tp-eng-card__body">
                      <h4>{member.name}</h4>
                      <p className="tp-eng-card__role">{member.role}</p>
                      <p className="tp-eng-card__bio">{member.bio}</p>
                      <ul className="tp-chips tp-chips--dense">
                        {member.skills.slice(0, 6).map((skill) => (
                          <li key={skill}>{skill}</li>
                        ))}
                      </ul>
                      <div className="tp-eng-card__socials">
                        <SocialBtn href={member.linkedin} label={`${member.name} on LinkedIn`}>
                          <LinkedInIcon />
                        </SocialBtn>
                        <SocialBtn href={member.github} label={`${member.name} on GitHub`}>
                          <GitHubIcon />
                        </SocialBtn>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
