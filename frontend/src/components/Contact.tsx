"use client";

import { FormEvent, useState } from "react";
import { companyContact } from "@/lib/navigation";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface ContactProps {
  summary?: boolean;
}

const WEB3FORMS_KEY = "ad8699c5-fcb9-4e02-94eb-641db0cd30c4";

const fieldClass =
  "form-field w-full rounded-lg border border-white/10 bg-ink px-3.5 py-3 text-[14.5px] text-text outline-none transition-colors placeholder:text-text-dim/60 focus:border-accent/50 focus:bg-panel/40";

const labelClass = "mb-1.5 block font-mono text-[11px] tracking-[0.04em] text-text-dim";

function ContactChannels() {
  return (
    <div className="grid gap-3">
      <a
        href={companyContact.mailto}
        className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-ink/50 px-5 py-4 transition-colors duration-200 hover:border-accent/35 hover:bg-panel"
      >
        <div className="min-w-0">
          <span className="mb-1.5 block font-mono text-[10px] tracking-[0.14em] text-text-dim uppercase">
            Email
          </span>
          <span className="block break-all font-display text-[15px] font-semibold text-text transition-colors group-hover:text-accent sm:text-[16px]">
            {companyContact.email}
          </span>
        </div>
        <span className="mt-0.5 shrink-0 font-mono text-[11px] text-accent-2 opacity-80 transition-opacity group-hover:opacity-100">
          Email
        </span>
      </a>

      <a
        href={companyContact.tel}
        className="group flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-ink/50 px-5 py-4 transition-colors duration-200 hover:border-accent/35 hover:bg-panel"
      >
        <div className="min-w-0">
          <span className="mb-1.5 block font-mono text-[10px] tracking-[0.14em] text-text-dim uppercase">
            Phone
          </span>
          <span className="block font-display text-[15px] font-semibold text-text transition-colors group-hover:text-accent sm:text-[16px]">
            {companyContact.phoneDisplay}
          </span>
        </div>
        <span className="mt-0.5 shrink-0 font-mono text-[11px] text-accent-2 opacity-80 transition-opacity group-hover:opacity-100">
          Call
        </span>
      </a>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot — bots fill this; humans leave it empty
    if (String(formData.get("botcheck") || "").trim()) {
      setStatus("success");
      setMessage("Thank you — your inquiry was received. We will reply within one business day.");
      form.reset();
      return;
    }

    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Softlligence project inquiry");
    formData.append("from_name", "Softlligence Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean; message?: string };

      if (data.success) {
        setStatus("success");
        setMessage("Thank you — your inquiry was received. We will reply within one business day.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(data.message || "Unable to submit. Please email softlligence@gmail.com.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or email softlligence@gmail.com.");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-panel/50 p-5 shadow-[var(--shadow-card)] backdrop-blur-sm sm:p-7 md:p-8"
      noValidate
    >
      {/* Honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cName" className={labelClass}>
            Full name *
          </label>
          <input
            id="cName"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cEmail" className={labelClass}>
            Work email *
          </label>
          <input
            id="cEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cCompany" className={labelClass}>
            Company / organization
          </label>
          <input
            id="cCompany"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cPhone" className={labelClass}>
            Phone
          </label>
          <input
            id="cPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880…"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mb-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cType" className={labelClass}>
            What are you building? *
          </label>
          <select id="cType" name="project_type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select one
            </option>
            <option value="Website">Website</option>
            <option value="Web application">Web application</option>
            <option value="Mobile app">Mobile app</option>
            <option value="Website + mobile app">Website + mobile app</option>
            <option value="AI / ML feature">AI / ML feature</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
        <div>
          <label htmlFor="cBudget" className={labelClass}>
            Estimated budget
          </label>
          <select id="cBudget" name="budget" defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            <option value="Under $500">Under $500</option>
            <option value="$500 – $2,000">$500 – $2,000</option>
            <option value="$2,000 – $10,000">$2,000 – $10,000</option>
            <option value="$10,000 – $50,000">$10,000 – $50,000</option>
            <option value="$50,000 – $150,000">$50,000 – $150,000</option>
            <option value="$150,000+">$150,000+</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="cMessage" className={labelClass}>
          Project details *
        </label>
        <textarea
          id="cMessage"
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build, for whom, and by when?"
          className={cn(fieldClass, "min-h-[140px] resize-y")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-transparent bg-accent px-7 py-3.5 text-[15px] font-semibold tracking-[-0.01em] text-accent-ink transition-all duration-150 hover:bg-[color-mix(in_srgb,var(--theme-accent)_92%,white)] hover:shadow-[0_8px_24px_rgba(255,176,32,0.22)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:bg-accent disabled:hover:shadow-none"
      >
        {status === "sending" ? "Submitting…" : "Submit inquiry"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "mt-4 min-h-[20px] text-center text-[13px] leading-relaxed",
          status === "success" && "text-accent-2",
          status === "error" && "text-danger",
          status === "idle" && "text-text-dim",
          status === "sending" && "text-text-dim",
        )}
      >
        {message ||
          (status === "idle" ? "Typical response time: within one business day." : "")}
      </p>
    </form>
  );
}

export function Contact({ summary = false }: ContactProps) {
  if (summary) {
    return (
      <section
        className="section-perf relative overflow-hidden border-y border-white/5 bg-ink py-16 md:py-20"
        id="contact"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--theme-accent)_12%,transparent),transparent_55%)]"
          aria-hidden="true"
        />
        <Container className="relative max-w-[640px] text-center">
          <Eyebrow number="10">START A PROJECT</Eyebrow>
          <SectionTitle className="mx-auto">Tell us what you&apos;re building.</SectionTitle>
          <SectionSub className="mx-auto">
            Send a brief or reach us directly — we reply within one business day.
          </SectionSub>

          <div className="mb-7 flex flex-col items-center gap-2.5 font-mono text-[13.5px] text-text-dim">
            <a
              href={companyContact.mailto}
              className="text-text transition-colors hover:text-accent"
            >
              {companyContact.email}
            </a>
            <a
              href={companyContact.tel}
              className="transition-colors hover:text-accent"
            >
              {companyContact.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" className="max-sm:w-full">
              Send a project brief
            </Button>
            <Button
              href={companyContact.mailto}
              variant="outline"
              size="lg"
              className="max-sm:w-full"
            >
              Email Softlligence
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-white/5 bg-ink py-14 sm:py-16 md:py-20" id="contact">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <Reveal>
              <Eyebrow number="10">PROJECT INQUIRY</Eyebrow>
              <SectionTitle className="mb-3">Send a brief. We&apos;ll take it from there.</SectionTitle>
              <SectionSub className="mb-8">
                Share what you&apos;re building and we&apos;ll come back with next steps — usually
                within one business day.
              </SectionSub>
            </Reveal>
            <Reveal delay={80}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-white/10 bg-panel/40 p-5 sm:p-6">
              <p className="mb-1 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                Direct contact
              </p>
              <h3 className="mb-2 font-display text-xl font-semibold">Reach the team</h3>
              <p className="mb-6 text-[14px] leading-relaxed text-text-dim">
                Prefer email or phone? Use either channel below — the same team that delivers the work.
              </p>
              <ContactChannels />

              <div className="mt-6 border-t border-white/8 pt-5">
                <p className="mb-3 font-mono text-[10px] tracking-[0.12em] text-text-dim uppercase">
                  What happens next
                </p>
                <ol className="m-0 list-none space-y-3 p-0">
                  {[
                    "We review your brief within one business day",
                    "A short discovery call if it looks like a fit",
                    "Clear next steps, scope, and estimate options",
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-[13.5px] text-text-dim">
                      <span className="font-mono text-[11px] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
