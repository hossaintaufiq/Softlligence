"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  teamPageStats,
  teamLeadership,
  teamEngineering,
  teamDesign,
  teamDelivery,
  teamExpertise,
  teamWorkflow,
} from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, SectionTitle } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

function formatNumber(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(0)}k`;
  return Math.round(n).toString();
}

function animateCount(el: HTMLElement, target: number, suffix: string) {
  const duration = 1300;
  const start = performance.now();
  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function TeamCounters() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-count]");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            animateCount(el, parseFloat(el.dataset.count || "0"), el.dataset.suffix || "");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.35 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
    >
      {teamPageStats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[14px] border border-white/10 bg-white/4 px-4 py-5 backdrop-blur-md sm:px-5 sm:py-6"
        >
          <div
            className="mb-1 font-display text-[clamp(26px,3.5vw,36px)] font-semibold text-accent"
            data-count={stat.count}
            data-suffix={stat.suffix}
          >
            0
          </div>
          <p className="m-0 text-[12px] text-text-dim sm:text-[13px]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.84-2.05 3.8-2.05 4.06 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.69-2.49 3.43V23h-4V8.5z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function MemberPhoto({
  name,
  initials,
  tone,
  photo,
  variant = "card",
}: {
  name: string;
  initials: string;
  tone: string;
  photo?: string | null;
  variant?: "leadership" | "card" | "row";
}) {
  const frame = {
    leadership: "aspect-[3/4] h-full min-h-[220px] w-full sm:min-h-[260px]",
    card: "aspect-[4/5] w-full",
    row: "aspect-square h-28 w-28 sm:h-32 sm:w-32",
  }[variant];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[18px] border border-white/10 bg-linear-to-br",
        tone,
        frame,
      )}
    >
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          quality={65}
          loading="eager"
          className="object-cover object-top"
          sizes={variant === "leadership" ? "(max-width: 768px) 100vw, 320px" : "(max-width: 768px) 100vw, 280px"}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),transparent_55%)]" />
          <div className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full bg-accent-2/15 blur-2xl" />
          <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
            <span
              className={cn(
                "font-display font-semibold tracking-tight text-text/90",
                variant === "leadership" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl",
              )}
            >
              {initials}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-dashed border-white/20 bg-ink/25 px-3 py-1.5 font-mono text-[10px] tracking-wide text-text-dim uppercase backdrop-blur-sm">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M4 7h3l2-2h6l2 2h3v12H4V7z" strokeLinejoin="round" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>
              Portrait
            </span>
            <span className="sr-only">Upload photo to public/team and set photo path in content</span>
          </div>
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink/50 to-transparent" />
    </div>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const isPlaceholder = !href || href === "#";

  if (isPlaceholder) {
    return (
      <span
        aria-label={`${label} (coming soon)`}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-text-dim/50"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/5 text-text-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
    >
      {children}
    </a>
  );
}

function ExpertiseIcon({ type }: { type: string }) {
  const common = "h-5 w-5";
  switch (type) {
    case "frontend":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 20h8" strokeLinecap="round" />
        </svg>
      );
    case "backend":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" strokeLinecap="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 18h10a4 4 0 00.4-8 6 6 0 00-11.5 1.6A3.5 3.5 0 007 18z" strokeLinejoin="round" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" strokeLinecap="round" />
        </svg>
      );
  }
}

export function TeamDetail() {
  return (
    <>
      {/* 1. Hero — photo as full-bleed background */}
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-white/8 md:min-h-[85vh]">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=60"
            alt=""
            fill
            priority
            quality={60}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="photo-scrim absolute inset-0 bg-[rgb(11,18,32)]/80" />
          <div className="photo-scrim-b absolute inset-0 bg-linear-to-b from-[rgb(11,18,32)]/50 via-[rgb(11,18,32)]/72 to-ink" />
          <div className="photo-scrim-r absolute inset-0 bg-linear-to-r from-[rgb(11,18,32)]/45 via-transparent to-[rgb(11,18,32)]/35" />
        </div>

        <Container className="relative flex min-h-[78vh] flex-col justify-end py-16 md:min-h-[85vh] md:py-24">
          <Reveal>
            <p className="mb-4 font-mono text-[12px] tracking-[0.14em] text-text-dim uppercase">
              <span className="text-accent">/</span> The team
            </p>
            <h1 className="mb-4 max-w-[760px] font-display text-[clamp(34px,5vw,56px)] leading-[1.06] font-semibold tracking-tight">
              Meet Our Team
            </h1>
            <p className="mb-10 max-w-[640px] text-[15px] leading-relaxed text-text-dim md:text-lg">
              We&apos;re a multidisciplinary team of engineers, designers, and project specialists
              dedicated to building reliable, scalable, and modern digital products.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <TeamCounters />
          </Reveal>
        </Container>
      </section>

      {/* 2. Leadership — 2×2 premium cards */}
      <section className="section-perf relative overflow-hidden border-b border-white/8 bg-panel py-16 md:py-24">
        <div
          className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-accent/8 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-accent-2/8 blur-[90px]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <Eyebrow number="01">LEADERSHIP</Eyebrow>
            <SectionTitle>Guiding the work that ships.</SectionTitle>
            <p className="mb-12 max-w-[560px] text-[15px] text-text-dim md:mb-14">
              Four builders who set direction and still write the code — the people you meet on the
              first call are the ones who deliver.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 md:gap-7">
            {teamLeadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 80}>
                <article className="team-card group relative grid h-full overflow-hidden rounded-[24px] border border-white/10 bg-ink/50 shadow-[var(--shadow-card)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.28),0_0_40px_color-mix(in_srgb,var(--theme-accent)_10%,transparent)] max-[640px]:grid-cols-1 min-[641px]:grid-cols-[minmax(180px,42%)_1fr]">
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-accent-2/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative p-4 sm:p-5">
                    <span className="absolute top-7 left-7 z-10 rounded-full border border-white/15 bg-ink/55 px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-accent backdrop-blur-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-full overflow-hidden rounded-[18px] transition-transform duration-700 group-hover:scale-[1.03]">
                      <MemberPhoto
                        name={leader.name}
                        initials={leader.initials}
                        tone={leader.photoTone}
                        photo={leader.photo}
                        variant="leadership"
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col justify-center p-6 pt-2 sm:p-8 sm:pl-4 sm:pt-8">
                    <p className="mb-2 font-mono text-[12px] tracking-[0.12em] text-accent uppercase">
                      {leader.role}
                    </p>
                    <h3 className="mb-3 font-display text-[clamp(22px,2.5vw,28px)] leading-tight font-semibold tracking-tight">
                      {leader.name}
                    </h3>
                    <p className="mb-6 text-[14.5px] leading-relaxed text-text-dim">{leader.bio}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {leader.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 border-t border-white/8 pt-5">
                      <SocialBtn href={leader.linkedin} label={`${leader.name} on LinkedIn`}>
                        <LinkedInIcon />
                      </SocialBtn>
                      <SocialBtn href={leader.github} label={`${leader.name} on GitHub`}>
                        <GitHubIcon />
                      </SocialBtn>
                      {leader.email ? (
                        <a
                          href={`mailto:${leader.email}`}
                          className="ml-auto font-mono text-[12px] text-accent-2 transition-colors hover:text-accent"
                        >
                          Email
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Engineering */}
      <section className="section-perf border-b border-white/8 bg-ink py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="02">ENGINEERING</Eyebrow>
            <SectionTitle>Engineering Team</SectionTitle>
            <p className="mb-10 max-w-[560px] text-[15px] text-text-dim">
              Specialized engineers who extend delivery across web, data, and cloud infrastructure.
            </p>
          </Reveal>

          <div className="grid gap-5 max-[640px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {teamEngineering.map((member, i) => (
              <Reveal key={member.name} delay={i * 60}>
                <article className="team-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/10 bg-panel/60 backdrop-blur-md">
                  <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                    <div className="overflow-hidden rounded-[14px] transition-transform duration-500 group-hover:scale-[1.02]">
                      <MemberPhoto
                        name={member.name}
                        initials={member.initials}
                        tone={member.photoTone}
                        photo={member.photo}
                        variant="card"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="mb-1 font-display text-lg font-semibold">{member.name}</h3>
                    <p className="mb-3 font-mono text-[12px] text-accent-2">{member.role}</p>
                    <p className="mb-4 flex-1 text-[13.5px] leading-relaxed text-text-dim">{member.bio}</p>
                    <div className="mb-5 flex flex-wrap gap-1.5">
                      {member.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 border-t border-white/8 pt-4">
                      <SocialBtn href={member.linkedin} label={`${member.name} on LinkedIn`}>
                        <LinkedInIcon />
                      </SocialBtn>
                      <SocialBtn href={member.github} label={`${member.name} on GitHub`}>
                        <GitHubIcon />
                      </SocialBtn>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Product & Design */}
      <section className="section-perf border-b border-white/8 bg-panel py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="03">PRODUCT &amp; DESIGN</Eyebrow>
            <SectionTitle>Product &amp; Design</SectionTitle>
          </Reveal>

          <div className="mt-10 max-w-[760px]">
            {teamDesign.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <article className="team-card group overflow-hidden rounded-[20px] border border-white/10 bg-ink/40 backdrop-blur-md sm:grid sm:grid-cols-[200px_1fr] sm:gap-0">
                  <div className="p-4 sm:p-5">
                    <div className="overflow-hidden rounded-[16px] transition-transform duration-500 group-hover:scale-[1.02]">
                      <MemberPhoto
                        name={member.name}
                        initials={member.initials}
                        tone={member.photoTone}
                        photo={member.photo}
                        variant="card"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 pt-0 sm:p-8 sm:pl-2 sm:pt-8">
                    <p className="mb-1 font-mono text-[12px] tracking-[0.08em] text-accent uppercase">
                      {member.role}
                    </p>
                    <h3 className="mb-3 font-display text-2xl font-semibold">{member.name}</h3>
                    <p className="mb-5 text-[15px] leading-relaxed text-text-dim">{member.bio}</p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <SocialBtn href={member.linkedin} label={`${member.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </SocialBtn>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Project Delivery */}
      <section className="section-perf border-b border-white/8 bg-ink py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="04">DELIVERY</Eyebrow>
            <SectionTitle>Project Delivery</SectionTitle>
          </Reveal>

          <div className="mt-10 max-w-[760px]">
            {teamDelivery.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <article className="team-card group overflow-hidden rounded-[20px] border border-white/10 bg-panel/60 backdrop-blur-md sm:grid sm:grid-cols-[200px_1fr] sm:gap-0">
                  <div className="p-4 sm:p-5">
                    <div className="overflow-hidden rounded-[16px] transition-transform duration-500 group-hover:scale-[1.02]">
                      <MemberPhoto
                        name={member.name}
                        initials={member.initials}
                        tone={member.photoTone}
                        photo={member.photo}
                        variant="card"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-6 pt-0 sm:p-8 sm:pl-2 sm:pt-8">
                    <p className="mb-1 font-mono text-[12px] tracking-[0.08em] text-accent uppercase">
                      {member.role}
                    </p>
                    <h3 className="mb-3 font-display text-2xl font-semibold">{member.name}</h3>
                    <p className="mb-5 text-[15px] leading-relaxed text-text-dim">{member.bio}</p>
                    <div className="mb-5 flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="tech-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <SocialBtn href={member.linkedin} label={`${member.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </SocialBtn>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Expertise */}
      <section className="section-perf border-b border-white/8 bg-panel py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="05">EXPERTISE</Eyebrow>
            <SectionTitle>What Our Team Brings</SectionTitle>
          </Reveal>

          <div className="mt-10 grid gap-4 max-[640px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {teamExpertise.map((item, i) => (
              <Reveal key={item.title} delay={i * 40}>
                <div className="group h-full rounded-[14px] border border-white/10 bg-ink/30 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-ink/55 hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <ExpertiseIcon type={item.icon} />
                  </span>
                  <h3 className="mb-2 font-display text-[15px] font-semibold">{item.title}</h3>
                  <p className="m-0 text-[13px] leading-relaxed text-text-dim">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. How we work timeline */}
      <section className="section-perf border-b border-white/8 bg-ink py-16 md:py-24">
        <Container>
          <Reveal>
            <Eyebrow number="06">HOW WE WORK</Eyebrow>
            <SectionTitle>From discovery to maintenance.</SectionTitle>
          </Reveal>

          <div className="mt-12 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ol className="flex min-w-max items-stretch gap-0 md:min-w-0 md:flex-wrap md:justify-between">
              {teamWorkflow.map((step, i) => (
                <Reveal key={step} delay={i * 70} className="flex items-center">
                  <li className="group flex flex-col items-center px-2 text-center md:flex-1">
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-panel font-mono text-[12px] text-accent transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:shadow-[0_0_24px_rgba(255,176,32,0.2)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="max-w-[96px] text-[12px] font-medium text-text-dim transition-colors group-hover:text-text md:text-[13px]">
                      {step}
                    </span>
                  </li>
                  {i < teamWorkflow.length - 1 && (
                    <span
                      className="mx-1 hidden h-px w-8 bg-linear-to-r from-accent/50 to-white/10 sm:block md:mx-0 md:w-full md:max-w-[40px]"
                      aria-hidden="true"
                    />
                  )}
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* 8. Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/10 via-panel to-accent-2/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
          aria-hidden="true"
        />
        <Container className="relative text-center">
          <Reveal>
            <h2 className="mx-auto mb-4 max-w-[700px] font-display text-[clamp(28px,4vw,44px)] font-semibold tracking-tight">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mx-auto mb-8 max-w-[520px] text-[15px] leading-relaxed text-text-dim md:text-base">
              Work with a focused team that ships reliable software — and stays accountable after
              launch. Tell us what you&apos;re building.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Start Your Project
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Schedule a Consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
