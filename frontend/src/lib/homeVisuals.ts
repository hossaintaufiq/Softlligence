/** Curated visuals — sized for fast Next/Image optimization. */

export const serviceImages: Record<string, string> = {
  web: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
  mobile:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=60",
  design:
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=60",
  integrations:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=60",
  ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
  cloud:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=60",
};

export const industryImages: Record<string, string> = {
  "public-sector":
    "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=720&q=60",
  education:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=720&q=60",
  finance:
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=720&q=60",
  healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=720&q=60",
  commerce:
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=720&q=60",
  nonprofit:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=720&q=60",
};

export const workCoverImages: Record<string, string> = {
  "playpen-school":
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=60",
  "mango-ev":
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=60",
  "acumens-media":
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=60",
  "nsu-acm-sc":
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=60",
};

export const aboutHomeImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=60";

export const aboutHomeGallery = [
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=720&q=60",
    alt: "Founders reviewing product strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=720&q=60",
    alt: "Engineering workshop and whiteboard planning",
  },
];

export const aboutDetailImages = {
  studio:
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=60",
  craft:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=60",
  leadership:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=60",
};

export const processStepImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=640&q=60",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=640&q=60",
];

/** Inner-page hero atmospheres */
export const pageHeroImages = {
  work: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60",
  process:
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=60",
  industries:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=60",
  about:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=60",
  services:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=60",
} as const;

/** Product detail pages — Unsplash visuals by slug */
export const productDetailVisuals: Record<
  "erp" | "crm" | "mis",
  {
    hero: string;
    modules: string[];
    channels: { src: string; label: string; hint: string }[];
    cta: string;
  }
> = {
  erp: {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=70",
    modules: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
    ],
    channels: [
      {
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=60",
        label: "AI recommendations",
        hint: "Buy · restock · best sellers",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=60",
        label: "AI summaries",
        hint: "Ops insights in plain language",
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=720&q=60",
        label: "Mobile app",
        hint: "Manage operations on the go",
      },
      {
        src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=720&q=60",
        label: "WP · Telegram",
        hint: "Embed and chat assistants",
      },
    ],
    cta: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=60",
  },
  crm: {
    hero: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=70",
    modules: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
    ],
    channels: [
      {
        src: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=720&q=60",
        label: "AI recommendations",
        hint: "What to pitch and sell next",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=60",
        label: "AI summaries",
        hint: "Pipeline without the noise",
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=720&q=60",
        label: "Mobile app",
        hint: "Close deals from anywhere",
      },
      {
        src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=720&q=60",
        label: "WP · Telegram",
        hint: "Leads into your CRM",
      },
    ],
    cta: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=60",
  },
  mis: {
    hero: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=70",
    modules: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60",
    ],
    channels: [
      {
        src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=60",
        label: "AI recommendations",
        hint: "Purchase priorities from demand",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=60",
        label: "AI summaries",
        hint: "Executive packs, written for you",
      },
      {
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=720&q=60",
        label: "Mobile app",
        hint: "KPIs in your pocket",
      },
      {
        src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=720&q=60",
        label: "WP · Telegram",
        hint: "Reports where leaders already are",
      },
    ],
    cta: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=60",
  },
};

