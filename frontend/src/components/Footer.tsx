import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { Container } from "@/components/ui/Section";
import { pageRoutes } from "@/lib/navigation";

const serviceLinks = [
  { href: `${pageRoutes.services}#web`, label: "Websites & apps" },
  { href: `${pageRoutes.services}#mobile`, label: "Mobile" },
  { href: `${pageRoutes.services}#design`, label: "Product design" },
  { href: `${pageRoutes.services}#integrations`, label: "Integrations" },
  { href: `${pageRoutes.services}#cloud`, label: "Cloud & DevOps" },
];

const companyLinks = [
  { href: pageRoutes.about, label: "About" },
  { href: pageRoutes.team, label: "Team" },
  { href: pageRoutes.work, label: "Work" },
  { href: pageRoutes.industries, label: "Industries" },
  { href: pageRoutes.process, label: "Process" },
  { href: pageRoutes.faq, label: "FAQ" },
  { href: pageRoutes.contact, label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-elevated pt-16 pb-8">
      <Container>
        <div className="grid gap-10 border-b border-white/8 pb-12 max-[640px]:grid-cols-1 max-[980px]:grid-cols-2 min-[981px]:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-[640px]:col-span-1 max-[980px]:col-span-2 min-[981px]:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 font-display text-lg font-semibold">
              <span className="flex text-accent" aria-hidden="true">
                <BrandLogo />
              </span>
              Softlligence
            </Link>
            <p className="mt-4 max-w-[300px] text-[14px] leading-relaxed text-text-dim">
              A modern software studio for organizations that need systems they can rely on — from
              sketch to production.
            </p>
            <a
              href="mailto:fiadsarowar93@gmail.com"
              className="mt-5 inline-block font-mono text-[13px] text-accent-2 hover:text-accent"
            >
              fiadsarowar93@gmail.com
            </a>
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[11px] tracking-[0.12em] text-text-dim uppercase">
              Services
            </h5>
            {serviceLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="mb-2.5 block text-[14px] text-text-dim transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[11px] tracking-[0.12em] text-text-dim uppercase">
              Company
            </h5>
            {companyLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="mb-2.5 block text-[14px] text-text-dim transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="mb-4 font-mono text-[11px] tracking-[0.12em] text-text-dim uppercase">
              Next step
            </h5>
            <p className="mb-4 text-[14px] leading-relaxed text-text-dim">
              Tell us what you&apos;re building. We reply within one business day.
            </p>
            <Link
              href={pageRoutes.contact}
              className="inline-flex items-center gap-2 font-mono text-[13px] text-accent transition-colors hover:text-accent-2"
            >
              Start a project <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 text-[12px] text-text-dim">
          <span>© {year} Softlligence Technologies</span>
          <span className="font-mono tracking-wide uppercase">Build · Ship · Support</span>
        </div>
      </Container>
    </footer>
  );
}
