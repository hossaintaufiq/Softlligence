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
import { CursorSpotlight } from "./CursorSpotlight";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./services-page.css";

gsap.registerPlugin(ScrollTrigger);

export function ServicesPage() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [reduced]);

  return (
    <div className="services-page">
      <ScrollProgress />
      <CursorSpotlight />
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
