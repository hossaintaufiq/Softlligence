"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ProjectLinks,
  isOngoing,
  kindLabel,
  type WorkItem,
} from "./workShared";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

function hasChallenge(project: WorkItem): project is WorkItem & { challenge: string } {
  return "challenge" in project && typeof (project as { challenge?: unknown }).challenge === "string";
}

function hasSolution(project: WorkItem): project is WorkItem & { solution: string } {
  return "solution" in project && typeof (project as { solution?: unknown }).solution === "string";
}

export function ProjectCaseStudy({
  project,
  index,
  featured = false,
}: {
  project: WorkItem;
  index: number;
  featured?: boolean;
}) {
  const reduced = usePrefersReducedMotion();
  const ongoing = isOngoing(project);
  const number = String(index + 1).padStart(2, "0");
  const challenge = hasChallenge(project) ? project.challenge : null;
  const solution = hasSolution(project) ? project.solution : null;

  return (
    <motion.article
      id={project.id}
      className={cn(
        "wp-case",
        featured && "wp-case--featured",
        ongoing && "wp-case--ongoing",
        `wp-case--${project.kind}`,
      )}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, delay: reduced ? 0 : Math.min(index % 4, 3) * 0.06 }}
    >
      <div className="wp-case__accent" aria-hidden="true" />

      <div className="wp-case__main">
        <header className="wp-case__header">
          <div className="wp-case__meta">
            <span className="wp-case__num">{number}</span>
            <div className="wp-case__tags">
              {ongoing ? <span className="wp-badge wp-badge--ongoing">Ongoing</span> : null}
              <span className="wp-badge">{kindLabel[project.kind]}</span>
              <span className="wp-badge wp-badge--muted">{project.sector}</span>
            </div>
          </div>

          <div className="wp-case__titles">
            <h3 className="wp-case__title">{project.title}</h3>
            <p className="wp-case__headline">{project.headline}</p>
          </div>
        </header>

        <p className="wp-case__desc">{project.description}</p>
      </div>

      <div className="wp-case__aside">
        <div className="wp-case__details">
          <div className="wp-detail">
            <span className="wp-detail__label">Industry</span>
            <span className="wp-detail__value">{project.sector}</span>
          </div>
          <div className="wp-detail">
            <span className="wp-detail__label">Category</span>
            <span className="wp-detail__value">{project.type}</span>
          </div>
          <div className="wp-detail">
            <span className="wp-detail__label">Status</span>
            <span className="wp-detail__value">{ongoing ? "Ongoing" : "Shipped"}</span>
          </div>
          <div className="wp-detail">
            <span className="wp-detail__label">Timeline</span>
            <span className="wp-detail__value">{project.timeline}</span>
          </div>
        </div>

        <div className="wp-case__stats" role="list">
          {project.stats.map((stat, i) => (
            <div key={`${stat.label}-${i}`} className="wp-stat" role="listitem">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="wp-case__stack">
          <span className="wp-detail__label">Technology stack</span>
          <div className="wp-stack">
            {project.stack.map((tech, i) => (
              <span key={`${tech}-${i}`} className="wp-tech">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {featured && (challenge || solution) ? (
          <div className="wp-case__story">
            {challenge ? (
              <div>
                <span className="wp-detail__label">Challenge</span>
                <p>{challenge}</p>
              </div>
            ) : null}
            {solution ? (
              <div>
                <span className="wp-detail__label">Approach</span>
                <p>{solution}</p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <footer className="wp-case__foot">
        <span className="wp-case__timeline">{project.timeline}</span>
        <ProjectLinks project={project} />
      </footer>
    </motion.article>
  );
}
