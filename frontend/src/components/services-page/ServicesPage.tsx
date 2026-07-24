"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { ServicesHero } from "./ServicesHero";
import { ServiceCatalog } from "./ServiceCatalog";
import { IndustriesServe } from "./IndustriesServe";
import { WhySoftlligenceSection } from "./WhySoftlligenceSection";
import { TechMarquee } from "./TechMarquee";
import { ServicesFinalCta } from "./ServicesFinalCta";
import { ScrollProgress } from "./ScrollProgress";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import "./services-page.css";

/** GSAP-heavy timeline — load after first paint */
const ProcessTimeline = dynamic(
  () => import("./ProcessTimeline").then((m) => ({ default: m.ProcessTimeline })),
  { ssr: true },
);

export function ServicesPage() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    let cancelled = false;
    let cleanup: (() => void) | undefined;
    let idleId = 0;
    let timeoutId = 0;

    const startSmoothScroll = () => {
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
          duration: 1.05,
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

        cleanup = () => {
          window.removeEventListener("resize", onResize);
          gsap.ticker.remove(ticker);
          lenis.destroy();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      })();
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(startSmoothScroll, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(startSmoothScroll, 200);
    }

    return () => {
      cancelled = true;
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
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
