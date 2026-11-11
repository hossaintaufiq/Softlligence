import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Instrument_Serif } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";
import "./enterprise.css";
import "./home-redesign.css";
import "@/components/home-page/sketch-headline.css";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  preload: false,
});

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
    default: "Softlligence Technologies — Custom Software for Organizations",
    template: "%s · Softlligence Technologies",
  },
  description:
    "Softlligence designs and ships websites, web apps and mobile products for businesses, schools, agencies and nonprofits — from first sketch to production.",
  metadataBase: new URL("https://softlligence.com"),
  openGraph: {
    title: "Softlligence Technologies",
    description: "Custom software organizations actually run on.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <ScrollToTop />
        <div className="site-bg" aria-hidden="true">
          <div className="site-grid" />
          <div className="site-orbs">
            <span className="site-orb site-orb--lg" />
            <span className="site-orb site-orb--sm" />
          </div>
        </div>
        <div className="announce-bar">
          <a
            href="https://inventory-management-system-gules-delta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="announce-bar__tag">New</span>
            Softlligence Inventory Management is live — open the demo
            <span aria-hidden="true"> →</span>
          </a>
        </div>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
