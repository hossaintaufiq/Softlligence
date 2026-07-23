import { cn } from "@/lib/utils";
import type { projects } from "@/lib/content";

export type WorkItem = (typeof projects)[number];
export type WorkFilter = "all" | "web-app" | "ai-ml" | "tools" | "templates";

export function isOngoing(project: WorkItem) {
  return Boolean(
    ("ongoing" in project && project.ongoing === true) || project.timeline === "Ongoing",
  );
}

export function sortOngoingFirst(items: readonly WorkItem[]) {
  return [...items].sort((a, b) => Number(isOngoing(b)) - Number(isOngoing(a)));
}

export function filterHref(id: WorkFilter) {
  return id === "all" ? "/work" : `/work?filter=${id}`;
}

export const kindLabel: Record<WorkItem["kind"], string> = {
  "web-app": "Web & App",
  "ai-ml": "AI / ML",
  tools: "Tools",
  template: "Template",
};

export function ProjectLinks({
  project,
  className,
}: {
  project: WorkItem;
  className?: string;
}) {
  const links = [
    project.liveUrl && { href: project.liveUrl, label: "Live site", accent: true },
    project.ourHostedUrl && { href: project.ourHostedUrl, label: "Our hosted", accent: true },
    project.github && { href: project.github, label: "GitHub", accent: false },
  ].filter(Boolean) as { href: string; label: string; accent: boolean }[];

  if (links.length === 0) return null;

  return (
    <div className={cn("wp-links", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("wp-link", link.accent ? "wp-link--accent" : "wp-link--muted")}
        >
          <span aria-hidden="true">{link.accent ? "↗" : "⌘"}</span>
          {link.label}
        </a>
      ))}
    </div>
  );
}
