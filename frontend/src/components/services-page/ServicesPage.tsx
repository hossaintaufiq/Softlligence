"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesHero } from "./ServicesHero";
import { ServiceCatalog } from "./ServiceCatalog";
import { IndustriesServe } from "./IndustriesServe";
import { WhySoftlligenceSection } from "./WhySoftlligenceSection";
import { ProcessTimeline } from "./ProcessTimeline";
import { TechMarquee } from "./TechMarquee";
import { ServicesFinalCta } from "./ServicesFinalCta";
import { ScrollProgress } from "./ScrollProgress";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./services-page.css";

gsap.registerPlugin(ScrollTrigger);

export function ServicesPage() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    // Ensure we start at the top when arriving from another page mid-scroll
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.4,
      autoRaf: false,
    });

    lenis.scrollTo(0, { immediate: true });
    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    // Late catch if layout shifts after mount
    const t = window.setTimeout(() => {
      lenis.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 80);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
  }, [reduced]);

  return (
    <div className="services-page">
      <ScrollProgress />
      <ServicesHero />
      <ServiceCatalog />
      <IndustriesServe />
      <WhySoftlligenceSection />
      <ProcessTimeline />
      <TechMarquee />
      <ServicesFinalCta />
    </div>
  );
}
