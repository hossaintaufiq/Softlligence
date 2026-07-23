"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { servicesProcessSteps } from "@/lib/servicesPageContent";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function ProcessTimeline() {
  const reduced = usePrefersReducedMotion();
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced || !section.current || !pin.current || !track.current) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - pin.current!.clientWidth;

      gsap.to(track.current, {
        x: () => -Math.max(distance, 0),
        ease: "none",
        scrollTrigger: {
          trigger: pin.current,
          start: "top top+=72",
          end: () => `+=${Math.max(distance, 400)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={section} className="sp-process" id="delivery-process" aria-labelledby="sp-process-title">
      <div className="sp-container">
        <motion.header
          className="sp-section-head"
          initial={reduced ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="sp-eyebrow">Process</p>
          <h2 id="sp-process-title" className="sp-section-title">
            From discovery to support—
            <br />
            one continuous path.
          </h2>
        </motion.header>
      </div>

      <div ref={pin} className="sp-process__pin">
        <div className="sp-container">
          <div ref={track} className="sp-process__track">
            {servicesProcessSteps.map((step, i) => (
              <div key={step} className="sp-process-step">
                <span className="sp-process-step__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                {i < servicesProcessSteps.length - 1 && (
                  <span className="sp-process-step__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
