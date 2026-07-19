import { companyContact } from "@/lib/navigation";
import { Container, Eyebrow, SectionSub, SectionTitle } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface ContactProps {
  summary?: boolean;
}

function ContactChannels({ centered = false }: { centered?: boolean }) {
  return (
    <div
      className={
        centered
          ? "mx-auto grid w-full max-w-[560px] gap-3 sm:grid-cols-2"
          : "grid w-full gap-3 sm:grid-cols-2"
      }
    >
      <a
        href={companyContact.mailto}
        className="group flex flex-col gap-2 rounded-[18px] border border-white/10 bg-panel/60 px-5 py-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-panel"
      >
        <span className="font-mono text-[10px] tracking-[0.14em] text-text-dim uppercase">Email</span>
        <span className="break-all font-display text-[16px] font-semibold text-text transition-colors group-hover:text-accent sm:text-[17px]">
          {companyContact.email}
        </span>
        <span className="font-mono text-[11px] text-accent-2">Write to us →</span>
      </a>

      <a
        href={companyContact.tel}
        className="group flex flex-col gap-2 rounded-[18px] border border-white/10 bg-panel/60 px-5 py-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-panel"
      >
        <span className="font-mono text-[10px] tracking-[0.14em] text-text-dim uppercase">Phone</span>
        <span className="font-display text-[16px] font-semibold text-text transition-colors group-hover:text-accent sm:text-[17px]">
          {companyContact.phoneDisplay}
        </span>
        <span className="font-mono text-[11px] text-accent-2">Call or WhatsApp →</span>
      </a>
    </div>
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
        <Container className="relative max-w-[720px] text-center">
          <Eyebrow number="10">START A PROJECT</Eyebrow>
          <SectionTitle className="mx-auto">Tell us what you&apos;re building.</SectionTitle>
          <SectionSub className="mx-auto">
            Reach us by email or phone — we reply within one business day.
          </SectionSub>

          <div className="mb-8">
            <ContactChannels centered />
          </div>

          <Button
            href={`${companyContact.mailto}?subject=${encodeURIComponent("Project inquiry")}`}
            size="lg"
            className="max-sm:w-full"
          >
            Email Softlligence
          </Button>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-white/5 bg-ink py-14 sm:py-16 md:py-20" id="contact">
      <Container className="max-w-[720px]">
        <Reveal>
          <Eyebrow number="10">REACH US</Eyebrow>
          <SectionTitle className="mb-3">Email or call — we&apos;re ready.</SectionTitle>
          <SectionSub className="mb-8">
            No form, no ticket queue. Write or call the Softlligence desk and we&apos;ll respond within
            one business day.
          </SectionSub>
        </Reveal>

        <Reveal delay={80}>
          <ContactChannels />
        </Reveal>

        <Reveal delay={140} className="mt-8">
          <div className="flex flex-col gap-3 rounded-[20px] border border-accent/25 bg-panel/40 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="mb-1 font-display text-[17px] font-semibold">Ready to talk scope?</p>
              <p className="m-0 text-[13.5px] text-text-dim">
                Open your mail app with a project inquiry subject — or dial us directly.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button
                href={`${companyContact.mailto}?subject=${encodeURIComponent("Project inquiry")}`}
                size="lg"
                className="max-sm:w-full"
              >
                Email us
              </Button>
              <Button href={companyContact.tel} variant="outline" size="lg" className="max-sm:w-full">
                Call us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
