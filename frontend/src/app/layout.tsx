import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { themeInitScript } from "@/components/theme/ThemeToggle";
import "./globals.css";
import "./enterprise.css";
import "@/components/home-page/sketch-headline.css";
import "./brand.css";
import "./sections.css";
import { Analytics } from "@vercel/analytics/next";

/** Display: expressive grotesque with optical sizing. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
  preload: true,
});

/** Interface and body. */
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
});

/** Numerals and tiny data labels only. */
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: false,
});

/** Still used by the inner-page headline component until those pages are redesigned. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Softlligence — Intelligent software for ambitious businesses",
    template: "%s · Softlligence",
  },
  description:
    "SaaS platforms, enterprise systems and AI-powered ERP, CRM, MIS and Inventory products. Engineering intelligent software for ambitious businesses.",
  metadataBase: new URL("https://softlligence.com"),
  openGraph: {
    title: "Softlligence",
    description: "Engineering intelligent software for ambitious businesses.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7fc" },
    { media: "(prefers-color-scheme: dark)", color: "#070b1f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <ScrollToTop />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <div id="main" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
