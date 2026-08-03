import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono, Caveat } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CursorSpotlightLazy } from "@/components/CursorSpotlightLazy";
import "./globals.css";
import "@/components/home-page/sketch-headline.css";

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

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} ${caveat.variable}`}
    >
      <body className="antialiased">
        <ScrollToTop />
        <CursorSpotlightLazy />
        <div className="site-bg" aria-hidden="true">
          <div className="site-grid" />
        </div>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
