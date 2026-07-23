"use client";

import {
  ClipboardList,
  EyeOff,
  FileWarning,
  GitBranch,
  Layers,
  PackageX,
  ScrollText,
  Timer,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import type { IndustryChallenge } from "@/lib/industriesPageEnrichment";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const icons: Record<IndustryChallenge["icon"], LucideIcon> = {
  manual: ClipboardList,
  disconnect: GitBranch,
  slow: Timer,
  inventory: PackageX,
  compliance: FileWarning,
  visibility: EyeOff,
  legacy: Layers,
  paper: ScrollText,
};

export function ChallengeCards({ challenges }: { challenges: IndustryChallenge[] }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="ip-challenge-grid">
      {challenges.map((item, i) => {
        const Icon = icons[item.icon];
        return (
          <motion.article
            key={item.title}
            className="ip-challenge"
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.45, delay: reduced ? 0 : i * 0.05 }}
          >
            <span className="ip-challenge__icon">
              <Icon size={18} strokeWidth={1.6} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </motion.article>
        );
      })}
    </div>
  );
}
