"use client";

import { FormEvent, useState } from "react";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

interface ContactProps {
  summary?: boolean;
}

export function Contact({ summary = false }: ContactProps) {
  const [status, setStatus] = useState("");
  const [statusColor, setStatusColor] = useState("var(--theme-accent-2)");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const required = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
      "[required]",
    );
    let valid = true;
    required.forEach((field) => {
      if (!field.value.trim()) valid = false;
    });

    if (!valid) {
      setStatusColor("var(--theme-danger)");
      setStatus("Please fill in all required fields before sending.");
      return;
    }

    const name = String(data.get("name") || "");
    const company = String(data.get("company") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const type = String(data.get("type") || "");
    const budget = String(data.get("budget") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      `Project type: ${type}`,
      budget ? `Budget: ${budget}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:fiadsarowar93@gmail.com?subject=${encodeURIComponent(
      `Project inquiry — ${company || name}`,
    )}&body=${encodeURIComponent(body)}`;

    setStatusColor("var(--theme-accent-2)");
    setStatus("Opening your email client…");
    window.location.href = mailto;
    form.reset();
  };

  if (summary) {
    return (
      <section className="section-perf border-y border-white/5 bg-ink py-20 md:py-24" id="contact">
        <Container className="max-w-[640px] text-center">
          <Eyebrow number="10">START A PROJECT</Eyebrow>
          <SectionTitle className="mx-auto">Tell us what you&apos;re building.</SectionTitle>
          <SectionSub className="mx-auto">
            We reply within one business day — no obligation, no auto-dialed sales calls.
          </SectionSub>
          <div className="mb-8 flex flex-col items-center gap-2 font-mono text-[14.5px]">
            <a href="mailto:fiadsarowar93@gmail.com" className="hover:text-accent">
              fiadsarowar93@gmail.com
            </a>
            <a href="tel:+8801629244690" className="hover:text-accent">
              01629244690
            </a>
          </div>
          <Button href="/contact" size="lg">
            Go to contact form
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-white/5 bg-ink py-24" id="contact">
      <Container className="grid gap-14 max-[980px]:grid-cols-1 min-[981px]:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Eyebrow number="10">START A PROJECT</Eyebrow>
          <SectionTitle className="mb-3">Tell us what you&apos;re building.</SectionTitle>
          <SectionSub className="mb-7">
            Fill this in and we&apos;ll come back with next steps within one business day — no
            obligation, no auto-dialed sales calls.
          </SectionSub>

          <div className="flex flex-col gap-2 font-mono text-[14.5px]">
            <a href="mailto:fiadsarowar93@gmail.com" className="hover:text-accent">
              fiadsarowar93@gmail.com
            </a>
            <a href="tel:+8801629244690" className="hover:text-accent">
              01629244690
            </a>
          </div>
        </div>

        <form
          className="pro-card rounded-[14px] p-6 sm:p-[34px]"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className="mb-4.5 grid gap-4 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
            <div className="mb-4.5">
              <label htmlFor="fName" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                Name *
              </label>
              <input
                id="fName"
                name="name"
                type="text"
                required
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              />
            </div>
            <div className="mb-4.5">
              <label htmlFor="fCompany" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                Company / organization *
              </label>
              <input
                id="fCompany"
                name="company"
                type="text"
                required
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4.5 grid gap-4 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
            <div className="mb-4.5">
              <label htmlFor="fEmail" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                Email *
              </label>
              <input
                id="fEmail"
                name="email"
                type="email"
                required
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              />
            </div>
            <div className="mb-4.5">
              <label htmlFor="fPhone" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                Phone
              </label>
              <input
                id="fPhone"
                name="phone"
                type="tel"
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4.5 grid gap-4 max-[720px]:grid-cols-1 min-[721px]:grid-cols-2">
            <div className="mb-4.5">
              <label htmlFor="fType" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                What are you building? *
              </label>
              <select
                id="fType"
                name="type"
                required
                defaultValue=""
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Website</option>
                <option>Web application</option>
                <option>Mobile app</option>
                <option>Website + mobile app</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <div className="mb-4.5">
              <label htmlFor="fBudget" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
                Estimated budget
              </label>
              <select
                id="fBudget"
                name="budget"
                defaultValue=""
                className="form-field w-full rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
              >
                <option value="" disabled>
                  Select a range
                </option>
                <option>Under $10,000</option>
                <option>$10,000 – $50,000</option>
                <option>$50,000 – $150,000</option>
                <option>$150,000+</option>
              </select>
            </div>
          </div>

          <div className="mb-4.5">
            <label htmlFor="fMessage" className="mb-1.75 block font-mono text-[12.5px] tracking-[0.02em] text-text-dim">
              Your message *
            </label>
            <textarea
              id="fMessage"
              name="message"
              rows={4}
              required
              placeholder="What are you trying to build, and by when?"
              className="form-field w-full resize-y rounded-lg border border-white/9 bg-ink px-3.25 py-2.75 text-[14.5px] text-text focus:border-accent-2 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-transparent bg-accent px-7 py-3.5 text-[15px] font-semibold text-accent-ink transition-all duration-150 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(255,176,32,0.28)]"
          >
            Send message
          </button>

          <p
            role="status"
            aria-live="polite"
            className="mt-3.5 min-h-[18px] text-[13.5px]"
            style={{ color: statusColor }}
          >
            {status}
          </p>
        </form>
      </Container>
    </section>
  );
}
