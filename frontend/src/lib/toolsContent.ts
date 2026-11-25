/** Ready-made Softlligence tools — marketing content for /tools. */

export type ToolSlug = "showroom" | "cleanmeta" | "voice";

export type ToolRecord = {
  slug: ToolSlug;
  name: string;
  /** Short label for menus. */
  menuLabel: string;
  /** One line for menus and compact lists. */
  blurb: string;
  kind: string;
  tagline: string;
  summary: string;
  features: string[];
  audience: string;
  /** Public live demo, when one can be shared. */
  liveUrl?: string;
  liveLabel?: string;
};

export const toolsIntro = {
  title: "Ready-made tools, built and run by us.",
  lead: "Focused products our team designed, shipped and maintains. Buy a one-time license or subscribe monthly, and we keep them updated.",
};

export const tools: ToolRecord[] = [
  {
    slug: "showroom",
    name: "Showroom",
    menuLabel: "Showroom web platform",
    blurb: "Dealership and brand websites",
    kind: "Automotive website platform",
    tagline: "A complete website for car brands, distributors and dealerships.",
    summary:
      "Showroom is a fast, editorial-grade website built for the automotive trade, with a real-time 3D configurator at its heart. Buyers spin the car through 360°, switch trims, paint and wheels, step inside the cabin, and watch short feature films, so the car feels real before they reach the showroom. Every page leads to a test-drive booking or a showroom visit.",
    features: [
      "Real-time 3D car in the browser (WebGL): rotate 360°, zoom, change studio backdrops",
      "Configure trims, paint colours and wheels, with the model updating live",
      "Interior and exterior hotspots with feature films: doors, sunroof, seats, HUD, lighting",
      "Line-up by category (electric, hybrid, purpose-built) with compare models",
      "Book a test drive, find a showroom, and an owner hub for service and warranty",
      "Brand, design and newsroom sections; Next.js with optimized media on Vercel",
    ],
    audience: "Car brands, national distributors and multi-showroom dealers.",
    liveUrl: "https://kia-bangladesh.vercel.app/",
    liveLabel: "Open live demo",
  },
  {
    slug: "cleanmeta",
    name: "Cleanmeta",
    menuLabel: "Cleanmeta",
    blurb: "Image metadata inspector and cleaner",
    kind: "Privacy tool · Image metadata",
    tagline: "See what your images reveal, then remove it in seconds.",
    summary:
      "Every photo and AI-generated image carries hidden data: camera and device details, GPS location, editing history, and AI provenance such as prompts and generation parameters. Cleanmeta reads all of it, shows you a clear report, and produces a clean copy. Processing runs entirely in the browser, so images are never uploaded to a server.",
    features: [
      "Inspects EXIF, GPS, XMP, IPTC, ICC and C2PA Content Credentials",
      "Detects AI provenance: Stable Diffusion, ComfyUI, Midjourney, DALL·E, Adobe Firefly",
      "Strips every metadata block by re-encoding pixels locally",
      "Nothing leaves the device: no uploads, no third-party services",
      "Keeps orientation correct and PNG transparency lossless",
      "JPG, PNG and WebP up to 20 MB",
    ],
    audience: "Agencies, newsrooms, marketplaces and teams publishing images at scale.",
  },
  {
    slug: "voice",
    name: "Softlligence Voice",
    menuLabel: "Softlligence Voice",
    blurb: "AI voice cloning and speech",
    kind: "AI audio · Voice cloning",
    tagline: "Clone a voice once, then let it speak across your products.",
    summary:
      "Softlligence Voice creates a natural custom voice from a short, consented recording and turns any text into speech with it. Connect it to your website, mobile app, call flows or chatbot through an API, so announcements, support replies and content narration all sound like your brand.",
    features: [
      "Custom voice clone from a short sample, with speaker consent",
      "Natural text-to-speech with control over pace and tone",
      "Multiple languages and speaking styles",
      "API and webhooks to connect apps, IVR and chatbots",
      "Batch narration for videos, courses and announcements",
      "Voice library per workspace with usage tracking",
    ],
    audience: "Brands, call centers, e-learning and media teams.",
  },
];

export const toolPlans = [
  {
    title: "One-time license",
    text: "Buy the tool outright, deployed on your domain or infrastructure, with setup and handover by our engineers.",
  },
  {
    title: "Monthly subscription",
    text: "Use the hosted version for a monthly fee. Updates, hosting, monitoring and support are included.",
  },
  {
    title: "Custom build",
    text: "Need it tailored? We extend any tool around your brand, workflows and existing systems.",
  },
];
