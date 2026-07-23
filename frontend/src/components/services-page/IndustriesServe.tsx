"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Package,
  Shirt,
  ShoppingBag,
  Truck,
  Users,
  Wallet,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import { servicesIndustries } from "@/lib/servicesPageContent";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const icons: Record<string, LucideIcon> = {
  manufacturing: Factory,
  garments: Shirt,
  steel: Warehouse,
  healthcare: HeartPulse,
  education: GraduationCap,
  logistics: Truck,
  retail: ShoppingBag,
  "real-estate": Building2,
  ngos: Users,
  startups: Package,
  finance: Wallet,
  government: Landmark,
};

export function IndustriesServe() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="sp-industries" id="industries-we-serve" aria-labelledby="sp-industries-title">
      <div className="sp-container">
        <motion.header
          className="sp-section-head"
          initial={reduced ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="sp-eyebrow">Industries</p>
          <h2 id="sp-industries-title" className="sp-section-title">
            Industries We Serve
          </h2>
          <p className="sp-section-sub">
            Domain-aware delivery across manufacturing floors, regulated services, and growth-stage
            products.
          </p>
        </motion.header>

        <div className="sp-industries__grid">
          {servicesIndustries.map((industry, i) => {
            const Icon = icons[industry.id] ?? Building2;
            return (
              <motion.article
                key={industry.id}
                className="sp-industry-card"
                initial={reduced ? false : { opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.5, delay: reduced ? 0 : (i % 6) * 0.05 }}
                whileHover={
                  reduced
                    ? undefined
                    : {
                        y: -6,
                        transition: { duration: 0.25 },
                      }
                }
              >
                <span className="sp-industry-card__icon">
                  <Icon size={22} strokeWidth={1.5} />
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.blurb}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
