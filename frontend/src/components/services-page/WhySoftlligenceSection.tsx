"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whySoftlligenceServices } from "@/lib/servicesPageContent";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function WhySoftlligenceSection() {
  const reduced = usePrefersReducedMotion();
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !root.current || !track.current) return;
    if (window.matchMedia("(max-width: 900px)").matches) return;

    const cards = track.current.querySelectorAll(".sp-why-card");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0.35, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 70%",
            end: "center center",
            scrub: 0.8,
          },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} className="sp-why" id="why-softlligence" aria-labelledby="sp-why-title">
      <div className="sp-container">
        <motion.header
          className="sp-section-head"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="sp-eyebrow">Why Softlligence</p>
          <h2 id="sp-why-title" className="sp-section-title">
            Built like infrastructure—
            <br />
            <span className="sp-text-gradient">not a one-off site.</span>
          </h2>
        </motion.header>

        <div ref={track} className="sp-why__timeline">
          {whySoftlligenceServices.map((item, i) => (
            <article key={item.title} className="sp-why-card">
              <span className="sp-why-card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
