"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import {
  Boxes,
  Brain,
  Cloud,
  Headphones,
  Layout,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory, ServiceItem } from "@/lib/servicesPageContent";
import { MagneticButton } from "./MagneticButton";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, LucideIcon> = {
  enterprise: Boxes,
  "digital-products": Layout,
  mobile: Smartphone,
  ai: Brain,
  "cloud-devops": Cloud,
  support: Headphones,
};

type ServiceCardProps = {
  service: ServiceItem;
  index: number;
  accent: ServiceCategory["accent"];
  categoryId: string;
};

export function ServiceCard({ service, index, accent, categoryId }: ServiceCardProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rxRaw = useMotionValue(0);
  const ryRaw = useMotionValue(0);
  const rx = useSpring(rxRaw, { stiffness: 180, damping: 22 });
  const ry = useSpring(ryRaw, { stiffness: 180, damping: 22 });
  const glowX = useSpring(mx, { stiffness: 160, damping: 24 });
  const glowY = useSpring(my, { stiffness: 160, damping: 24 });
  const background = useMotionTemplate`radial-gradient(420px circle at ${glowX}px ${glowY}px, ${
    accent === "purple"
      ? "color-mix(in srgb, var(--theme-accent) 22%, transparent)"
      : "color-mix(in srgb, var(--theme-accent-2) 22%, transparent)"
  }, transparent 55%)`;

  const Icon = categoryIcons[categoryId] ?? Boxes;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={ref}
      id={service.id}
      className={cn("sp-service-card", accent === "blue" && "sp-service-card--blue")}
      style={
        reduced
          ? undefined
          : {
              rotateX: rx,
              rotateY: ry,
              transformPerspective: 900,
            }
      }
      onMouseMove={(e) => {
        if (reduced || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mx.set(x);
        my.set(y);
        const px = (x / rect.width - 0.5) * 8;
        const py = (y / rect.height - 0.5) * -8;
        ryRaw.set(px);
        rxRaw.set(py);
      }}
      onMouseLeave={() => {
        rxRaw.set(0);
        ryRaw.set(0);
      }}
      initial={reduced ? false : { opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {!reduced && <motion.div className="sp-service-card__glow" style={{ background }} />}

      <div className="sp-service-card__top">
        <span className="sp-service-card__number">{number}</span>
        <motion.span
          className="sp-service-card__icon"
          whileHover={reduced ? undefined : { rotate: 8, scale: 1.08 }}
        >
          <Icon size={20} strokeWidth={1.6} />
        </motion.span>
      </div>

      <h3 className="sp-service-card__title">{service.title}</h3>
      <p className="sp-service-card__desc">{service.description}</p>

      <div className="sp-service-card__block">
        <p className="sp-label">Key features</p>
        <ul>
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="sp-service-card__block">
        <p className="sp-label">Technologies</p>
        <div className="sp-tech-row">
          {service.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="sp-service-card__foot">
        <div>
          <p className="sp-label">Estimated timeline</p>
          <p className="sp-service-card__timeline">{service.timeline}</p>
        </div>
        <MagneticButton href="/contact" variant="ghost" className="sp-service-card__cta">
          Discuss this
        </MagneticButton>
      </div>
    </motion.article>
  );
}
