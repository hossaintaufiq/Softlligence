"use client";

import { FormEvent, useState } from "react";
import { companyContact } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import "./contact-page.css";

const WEB3FORMS_KEY = "ad8699c5-fcb9-4e02-94eb-641db0cd30c4";

function ContactChannels() {
  return (
    <div>
      <a href={companyContact.mailto} className="cp-channel">
        <div>
          <span>Email</span>
          <strong>{companyContact.email}</strong>
        </div>
        <em>Email</em>
      </a>
      <a href={companyContact.tel} className="cp-channel">
        <div>
          <span>Phone</span>
          <strong>{companyContact.phoneDisplay}</strong>
        </div>
        <em>Call</em>
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
    <form onSubmit={onSubmit} className="cp-form" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="cp-grid cp-grid--2">
        <div className="cp-field">
          <label htmlFor="cName">Full name *</label>
          <input
            id="cName"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className="cp-input"
          />
        </div>
        <div className="cp-field">
          <label htmlFor="cEmail">Work email *</label>
          <input
            id="cEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className="cp-input"
          />
        </div>
      </div>

      <div className="cp-grid cp-grid--2">
        <div className="cp-field">
          <label htmlFor="cCompany">Company / organization</label>
          <input
            id="cCompany"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className="cp-input"
          />
        </div>
        <div className="cp-field">
          <label htmlFor="cPhone">Phone</label>
          <input
            id="cPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880…"
            className="cp-input"
          />
        </div>
      </div>

      <div className="cp-grid cp-grid--2">
        <div className="cp-field">
          <label htmlFor="cType">What are you building? *</label>
          <select id="cType" name="project_type" required defaultValue="" className="cp-input">
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
        <div className="cp-field">
          <label htmlFor="cBudget">Estimated budget</label>
          <select id="cBudget" name="budget" defaultValue="" className="cp-input">
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

      <div className="cp-field" style={{ marginBottom: "1.15rem" }}>
        <label htmlFor="cMessage">Project details *</label>
        <textarea
          id="cMessage"
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build, for whom, and by when?"
          className="cp-input cp-input--area"
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="cp-submit">
        {status === "sending" ? "Submitting…" : "Submit inquiry"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "cp-status",
          status === "success" && "cp-status--ok",
          status === "error" && "cp-status--err",
        )}
      >
        {message ||
          (status === "idle" ? "Typical response time: within one business day." : "")}
      </p>
    </form>
  );
}

export function ContactPageView() {
  return (
    <div className="contact-page">
      <section className="cp-hero" aria-labelledby="cp-hero-title">
        <div className="cp-hero__bg" aria-hidden="true">
          <div className="cp-hero__grid" />
          <div className="cp-hero__glow" />
        </div>
        <div className="cp-container cp-hero__inner">
          <p className="cp-kicker">
            <span>/</span> Start a project
          </p>
          <h1 id="cp-hero-title">
            Tell us what you&apos;re <em>building.</em>
          </h1>
          <p className="cp-hero__lead">
            Share a short project brief, or reach Softlligence by email or phone. We reply within one
            business day — with clear next steps, not a scripted pitch.
          </p>
          <div className="cp-hero__actions">
            <Button href="#contact" size="lg" className="max-sm:w-full">
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
          <ul className="cp-hero__meta">
            <li>
              <strong>&lt;24h</strong>
              Typical reply
            </li>
            <li>
              <strong>Engineers</strong>
              Named team
            </li>
            <li>
              <strong>Discovery</strong>
              Clear estimate
            </li>
          </ul>
        </div>
      </section>

      <section className="cp-main" id="contact">
        <div className="cp-container cp-layout">
          <div className="cp-form-panel">
            <div className="cp-form-panel__head">
              <p>Project inquiry</p>
              <h2>Send a brief. We&apos;ll take it from there.</h2>
              <p>
                Share what you&apos;re building and we&apos;ll come back with next steps — usually
                within one business day.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside className="cp-side">
            <div className="cp-side__card">
              <p>Direct contact</p>
              <h3>Reach the team</h3>
              <p>
                Prefer email or phone? Use either channel below — the same team that delivers the work.
              </p>
              <ContactChannels />
              <div className="cp-next">
                <p>What happens next</p>
                <ol>
                  <li>
                    <span>01</span>
                    We review your brief within one business day
                  </li>
                  <li>
                    <span>02</span>
                    A short discovery call if it looks like a fit
                  </li>
                  <li>
                    <span>03</span>
                    Clear next steps, scope, and estimate options
                  </li>
                </ol>
              </div>
            </div>

            <div className="cp-assurance">
              <h3>No pressure. Clear process.</h3>
              <p>
                You talk to builders — not a rotating sales desk. If we&apos;re not the right fit,
                we&apos;ll say so early.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
