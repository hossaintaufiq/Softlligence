import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { FacebookIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { companyContact, pageRoutes } from "@/lib/navigation";
import { products } from "@/lib/productsContent";
import { resourcesMenu, serviceLinks, solutionsMenu } from "@/lib/siteLinks";

const company = [
  { href: pageRoutes.about, label: "About" },
  { href: pageRoutes.team, label: "Team" },
  { href: pageRoutes.contact, label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__grid">
          <div className="foot__brand">
            <Link href="/" className="foot__logo" aria-label="Softlligence home">
              <span className="foot__mark" aria-hidden="true">
                <BrandLogo size={30} />
              </span>
              Softlligence
            </Link>
            <p>
              SaaS platforms, enterprise systems and intelligent digital solutions for businesses that
              plan to scale.
            </p>
            <p className="foot__contact">
              <a href={companyContact.mailto}>{companyContact.email}</a>
              <a href={companyContact.tel}>{companyContact.phoneDisplay}</a>
            </p>
          </div>

          <nav aria-label="Products">
            <h2 className="foot__h">Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`${pageRoutes.products}/${p.slug}`}>
                    {p.shortName === "Inventory" ? "Inventory Management" : p.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={pageRoutes.products}>All products</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Solutions and services">
            <h2 className="foot__h">Solutions</h2>
            <ul>
              {solutionsMenu.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              {serviceLinks.slice(0, 3).map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company and resources">
            <h2 className="foot__h">Company</h2>
            <ul>
              {company.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              {resourcesMenu.slice(0, 3).map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="foot__base">
          <span>© {year} Softlligence Technologies</span>
          <span className="foot__social">
            <a href={companyContact.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={companyContact.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon className="h-4 w-4" />
              Facebook
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
