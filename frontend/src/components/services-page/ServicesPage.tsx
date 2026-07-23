"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ServicesHero } from "./ServicesHero";
import { ScrollProgress } from "./ScrollProgress";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./services-page.css";

const ServiceCatalog = dynamic(() =>
  import("./ServiceCatalog").then((m) => ({ default: m.ServiceCatalog })),
);
const IndustriesServe = dynamic(() =>
  import("./IndustriesServe").then((m) => ({ default: m.IndustriesServe })),
);
const WhySoftlligenceSection = dynamic(() =>
  import("./WhySoftlligenceSection").then((m) => ({ default: m.WhySoftlligenceSection })),
);
const ProcessTimeline = dynamic(() =>
  import("./ProcessTimeline").then((m) => ({ default: m.ProcessTimeline })),
);
const TechMarquee = dynamic(() =>
  import("./TechMarquee").then((m) => ({ default: m.TechMarquee })),
);
const ServicesFinalCta = dynamic(() =>
  import("./ServicesFinalCta").then((m) => ({ default: m.ServicesFinalCta })),
);

export function ServicesPage() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      const gsap = gsapMod.default;
      const { ScrollTrigger } = stMod;
      gsap.registerPlugin(ScrollTrigger);

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

      const t = window.setTimeout(() => {
        lenis.scrollTo(0, { immediate: true });
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }, 80);

      cleanup = () => {
        window.clearTimeout(t);
        window.removeEventListener("resize", onResize);
        gsap.ticker.remove(ticker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
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
