import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Process } from "@/components/Process";
import { Comparison } from "@/components/Comparison";
import { Work } from "@/components/Work";
import { About } from "@/components/About";
import { Team } from "@/components/Team";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";

const quickLinks = [
  { href: pageRoutes.services, label: "Services", desc: "Websites, apps, design & more" },
  { href: pageRoutes.work, label: "Work", desc: "Case studies & shipped products" },
  { href: pageRoutes.industries, label: "Industries", desc: "Sectors we build for" },
  { href: pageRoutes.process, label: "Process", desc: "How projects run end to end" },
  { href: pageRoutes.about, label: "About", desc: "Who we are & how we work" },
  { href: pageRoutes.team, label: "Team", desc: "Meet the developers" },
  { href: pageRoutes.faq, label: "FAQ", desc: "Common questions answered" },
  { href: pageRoutes.contact, label: "Contact", desc: "Start a project today" },
];

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Marquee />
      <Stats />

      <section className="border-b border-white/5 bg-panel py-16">
        <Container>
          <p className="mb-3.5 font-mono text-[12.5px] tracking-[0.06em] text-text-dim">
            <span className="text-accent">⟨</span> EXPLORE <span className="text-accent">⟩</span>
          </p>
          <h2 className="mb-8 font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-tight">
            Jump to a section
          </h2>
          <div className="grid gap-4 max-[720px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-4">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group rounded-[14px] border border-white/9 bg-panel-2 p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-accent"
              >
                <h3 className="mb-1.5 font-display text-base font-semibold group-hover:text-accent">
                  {link.label}
                </h3>
                <p className="m-0 text-[13px] text-text-dim">{link.desc}</p>
                <span className="mt-3 inline-block font-mono text-xs text-accent-2 group-hover:text-accent">
                  View page →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Services summary />
      <Industries summary />
      <Process summary />
      <Comparison summary />
      <Work summary />
      <About summary />
      <Team summary />
      <FAQ summary />
      <Contact summary />
      <FinalCTA />
    </main>
  );
}
