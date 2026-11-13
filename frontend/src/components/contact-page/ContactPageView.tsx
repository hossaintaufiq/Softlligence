"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { companyContact } from "@/lib/navigation";
import { FacebookIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import "@/components/products-page/products.css";
import "@/components/pages/pages.css";
import { SectionBg3D } from "@/components/home-page/SectionBg3D";

const WEB3FORMS_KEY = "ad8699c5-fcb9-4e02-94eb-641db0cd30c4";

function ContactChannels() {
  return (
    <ul className="ct-channels">
      <li>
        <a href={companyContact.mailto}>
          <Mail size={18} aria-hidden="true" />
          <span>
            <small>Email</small>
            {companyContact.email}
          </span>
        </a>
      </li>
      <li>
        <a href={companyContact.tel}>
          <Phone size={18} aria-hidden="true" />
          <span>
            <small>Phone</small>
            {companyContact.phoneDisplay}
          </span>
        </a>
      </li>
      <li>
        <a href={companyContact.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="h-[18px] w-[18px]" />
          <span>
            <small>LinkedIn</small>
            Softlligence Technologies
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </a>
      </li>
      <li>
        <a href={companyContact.facebook} target="_blank" rel="noopener noreferrer">
          <FacebookIcon className="h-[18px] w-[18px]" />
          <span>
            <small>Facebook</small>
            Softlligence Technologies
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </a>
      </li>
    </ul>
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

    // Honeypot: bots fill this, humans leave it empty
    if (String(formData.get("botcheck") || "").trim()) {
      setStatus("success");
      setMessage("Thank you. Your inquiry was received. We will reply within one business day.");
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
        setMessage("Thank you. Your inquiry was received. We will reply within one business day.");
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
    <form onSubmit={onSubmit} className="ct-form" noValidate>
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="ct-row">
        <div className="ct-field">
          <label htmlFor="cName">Full name *</label>
          <input id="cName" name="name" type="text" required autoComplete="name" placeholder="Your name" />
        </div>
        <div className="ct-field">
          <label htmlFor="cEmail">Work email *</label>
          <input
            id="cEmail"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="ct-row">
        <div className="ct-field">
          <label htmlFor="cCompany">Company / organization</label>
          <input
            id="cCompany"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
          />
        </div>
        <div className="ct-field">
          <label htmlFor="cPhone">Phone</label>
          <input id="cPhone" name="phone" type="tel" autoComplete="tel" placeholder="+880…" />
        </div>
      </div>

      <div className="ct-row">
        <div className="ct-field">
          <label htmlFor="cType">What are you building? *</label>
          <select id="cType" name="project_type" required defaultValue="">
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
        <div className="ct-field">
          <label htmlFor="cBudget">Estimated budget</label>
          <select id="cBudget" name="budget" defaultValue="">
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

      <div className="ct-field">
        <label htmlFor="cMessage">Project details *</label>
        <textarea
          id="cMessage"
          name="message"
          rows={5}
          required
          placeholder="What are you trying to build, for whom, and by when?"
        />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn--primary btn--lg ct-submit">
        {status === "sending" ? "Submitting…" : "Submit inquiry"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={cn("ct-status", status === "success" && "is-ok", status === "error" && "is-err")}
      >
        {message || (status === "idle" ? "Typical response time: within one business day." : "")}
      </p>
    </form>
  );
}

export function ContactPageView() {
  return (
    <div className="pdp">
      <ScrollReveal />

      <section className="pdp-hero" aria-labelledby="contact-title">
        <div className="pdp-hero__wash" aria-hidden="true" />
        <SectionBg3D variant="wave" />
        <div className="wrap">
          <h1 id="contact-title" className="pdp-title enter">
            Tell us what you&apos;re building.
          </h1>
          <p className="pdp-lead enter" style={{ "--d": "90ms" } as React.CSSProperties}>
            Share a short project brief, or reach Softlligence by email or phone. We reply within one
            business day with clear next steps, not a scripted pitch.
          </p>
        </div>
      </section>

      <section className="sec ct-main" id="contact" aria-label="Contact">
        <div className="wrap ct-layout">
          <div className="ct-panel" data-reveal>
            <h2 className="ct-panel__title">Send a project brief</h2>
            <p className="ct-panel__lead">
              Share what you&apos;re building and we&apos;ll come back with next steps.
            </p>
            <ContactForm />
          </div>

          <aside className="ct-side" data-reveal style={{ "--rv-delay": "80ms" } as React.CSSProperties}>
            <h2 className="ct-side__title">Reach the team directly</h2>
            <ContactChannels />

            <h3 className="ct-side__sub">What happens next</h3>
            <ol className="ct-next">
              <li>We review your brief within one business day.</li>
              <li>A short discovery call if it looks like a fit.</li>
              <li>Clear next steps, scope and estimate options.</li>
            </ol>

            <p className="ct-assure">
              You talk to builders, not a rotating sales desk. If we are not the right fit, we will say so
              early.
            </p>
          </aside>
        </div>
      </section>
    </div>
  );
}
