"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Building2,
  ChevronDown,
  Factory,
  HelpCircle,
  Layers,
  Users,
  UsersRound,
  Warehouse,
  Briefcase,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { products } from "@/lib/productsContent";
import { pageRoutes } from "@/lib/navigation";
import { productBlurb, resourcesMenu, solutionsMenu, type NavItem } from "@/lib/siteLinks";
import { cn } from "@/lib/utils";

const MOBILE_BREAKPOINT = 1024;

const icons: Record<string, LucideIcon> = {
  "/products/erp": Building2,
  "/products/crm": Users,
  "/products/mis": BarChart3,
  "/products/inventory": Warehouse,
  "/#solutions": Layers,
  "/industries": Factory,
  "/work": Briefcase,
  "/process": Workflow,
  "/faq": HelpCircle,
  "/team": UsersRound,
};

const productsMenu: NavItem[] = [
  ...products.map((p) => ({
    href: `${pageRoutes.products}/${p.slug}`,
    label: p.shortName === "Inventory" ? "Inventory Management" : `${p.shortName} Platform`,
    description: productBlurb[p.slug],
  })),
];

type Entry =
  | { key: string; label: string; href: string }
  | { key: string; label: string; href: string; menu: NavItem[]; footer?: NavItem };

const entries: Entry[] = [
  { key: "home", label: "Home", href: "/" },
  {
    key: "products",
    label: "Products",
    href: pageRoutes.products,
    menu: productsMenu,
    footer: { href: pageRoutes.products, label: "Browse all products" },
  },
  { key: "solutions", label: "Solutions", href: "/#solutions", menu: solutionsMenu },
  { key: "services", label: "Services", href: pageRoutes.services },
  { key: "about", label: "About", href: pageRoutes.about },
  { key: "resources", label: "Resources", href: pageRoutes.work, menu: resourcesMenu },
];

export function Nav() {
  const pathname = usePathname();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const mobileId = useId();

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const sync = () => {
      document.documentElement.style.setProperty(
        "--site-header-offset",
        `${Math.ceil(header.getBoundingClientRect().height)}px`,
      );
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenKey(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
      setOpenKey(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenKey(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [mobileOpen]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const hoverOpen = (key: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenKey(key);
  };
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 120);
  };

  return (
    <header ref={headerRef} className={cn("nav", scrolled && "nav--scrolled")}>
      <div className="nav__bar wrap">
        <Link href="/" className="nav__brand" aria-label="Softlligence home">
          <span className="nav__mark" aria-hidden="true">
            <BrandLogo size={30} />
          </span>
          <span className="nav__name">Softlligence</span>
        </Link>

        <nav aria-label="Primary" className="nav__center">
          <ul>
            {entries.map((entry) => {
              const menu = "menu" in entry ? entry : null;
              const active = isActive(entry.href) || (menu?.menu.some((i) => isActive(i.href)) ?? false);
              if (!menu) {
                return (
                  <li key={entry.key}>
                    <Link
                      href={entry.href}
                      className={cn("nav__link", active && "is-active")}
                      aria-current={active ? "page" : undefined}
                    >
                      {entry.label}
                    </Link>
                  </li>
                );
              }
              const open = openKey === entry.key;
              const panelId = `${mobileId}-${entry.key}`;
              return (
                <li
                  key={entry.key}
                  className="nav__item"
                  onMouseEnter={() => hoverOpen(entry.key)}
                  onMouseLeave={hoverClose}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenKey(null);
                  }}
                >
                  <button
                    type="button"
                    className={cn("nav__link nav__trigger", active && "is-active", open && "is-open")}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenKey(open ? null : entry.key)}
                  >
                    {entry.label}
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>
                  <div id={panelId} className={cn("menu", open && "is-open")} inert={!open}>
                    <ul className="menu__list">
                      {menu.menu.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="menu__item" onClick={() => setOpenKey(null)}>
                            <span className="menu__icon" aria-hidden="true">
                              {(() => {
                                const Icon = icons[item.href] ?? BookOpen;
                                return <Icon size={18} />;
                              })()}
                            </span>
                            <span className="menu__text">
                              <span className="menu__title">{item.label}</span>
                              {item.description && <span className="menu__desc">{item.description}</span>}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {menu.footer && (
                      <Link href={menu.footer.href} className="menu__foot" onClick={() => setOpenKey(null)}>
                        {menu.footer.label}
                        <span aria-hidden="true"> →</span>
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <Link href={pageRoutes.contact} className="btn btn--primary nav__cta">
            Let&apos;s talk
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="nav__burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls={mobileId}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden="true" className={cn("burger", mobileOpen && "is-open")}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <nav id={mobileId} aria-label="Mobile" inert={!mobileOpen} className={cn("mnav", mobileOpen && "is-open")}>
        <div className="wrap mnav__inner">
          {entries.map((entry) =>
            "menu" in entry ? (
              <details key={entry.key} className="mnav__group">
                <summary>
                  {entry.label}
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <ul>
                  {entry.menu.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={entry.key}
                href={entry.href}
                className="mnav__link"
                aria-current={isActive(entry.href) ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {entry.label}
              </Link>
            ),
          )}
          <Link
            href={pageRoutes.contact}
            className="btn btn--primary btn--lg mnav__cta"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s talk
          </Link>
        </div>
      </nav>
    </header>
  );
}
