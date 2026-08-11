export type AssetClass = {
  id: "real-estate" | "automotive" | "marine";
  number: string;
  label: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  signals: string[];
  accent: string;
  soft: string;
};

export const assetClasses: AssetClass[] = [
  {
    id: "real-estate",
    number: "01",
    label: "Residential · Multifamily · Commercial",
    title: "Residential & Commercial Real Estate",
    shortTitle: "Real estate",
    description:
      "Private homes, luxury residences, multifamily properties, and select commercial real estate positioned for controlled acquisition or transfer with pricing, authority, timing, and diligence made clear from the start.",
    image:
      "https://images.unsplash.com/photo-1783936535299-6ff0f8bbd1d0?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    imageAlt: "Contemporary luxury residence and pool",
    signals: ["Residential and commercial briefs", "Defined pricing", "Qualified counterparties"],
    accent: "#d4af37",
    soft: "rgba(212,175,55,.16)"
  },
  {
    id: "automotive",
    number: "02",
    label: "Collector · Limited run · Bespoke",
    title: "Rare & Exotic Automobiles",
    shortTitle: "Automotive",
    description:
      "Collector-grade, limited-production, and bespoke performance vehicles matched with qualified enthusiasts and private buyers.",
    image:
      "https://images.unsplash.com/photo-1768352725353-d498db8a1722?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    imageAlt: "Matte black exotic sports car in a dark architectural setting",
    signals: ["Specification review", "Documentation", "Private buyer matching"],
    accent: "#e6ca6d",
    soft: "rgba(230,202,109,.15)"
  },
  {
    id: "marine",
    number: "03",
    label: "Motor yachts · Powerboats · Specialty",
    title: "Luxury Marine & Yachts",
    shortTitle: "Marine",
    description:
      "Significant powerboats, motor yachts, and specialty craft presented discreetly to a focused network of marine buyers.",
    image:
      "https://images.unsplash.com/photo-1776934121312-e256a6339bc1?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    imageAlt: "Luxury motor yachts docked in a marina",
    signals: ["Vessel records", "Survey coordination", "Escrow-led execution"],
    accent: "#b7c7d6",
    soft: "rgba(183,199,214,.15)"
  }
];

export const representativeProfiles = [
  {
    id: "sedona-estate",
    category: "Residential",
    location: "Sedona, Arizona",
    title: "The Sedona Estate",
    value: "$3.2M",
    timeline: "Illustrative · 11-day assignment",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    summary:
      "A presentation example showing how a distinctive residence could be framed under a private acquisition agreement, circulated selectively, and moved toward escrow without a broad public campaign.",
    facts: ["Private residential", "Agreed net pricing", "Targeted buyer allocation"]
  },
  {
    id: "metro-view",
    category: "Commercial",
    location: "Southwest market",
    title: "Metro View Apartments",
    value: "$6.8M",
    timeline: "Illustrative · Private transfer",
    image:
      "https://images.unsplash.com/photo-1764722870653-e59e737d1d30?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    summary:
      "A representative multifamily scenario structured around clean underwriting, a defined diligence window, and direct presentation to a small group of capable operators.",
    facts: ["32-unit complex", "Qualified operator pool", "Structured diligence"]
  },
  {
    id: "gt3-rs",
    category: "Automotive",
    location: "Private U.S. placement",
    title: "Porsche 911 GT3 RS",
    value: "$340K",
    timeline: "Illustrative · Collector match",
    image:
      "https://images.unsplash.com/photo-1550955328-619e97a81ccf?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    summary:
      "A collector-vehicle example built around verified specification, documentation, condition, and discreet matching with an enthusiast able to transact on the agreed timeline.",
    facts: ["Collector specification", "Documentation review", "Private buyer match"]
  },
  {
    id: "sunseeker",
    category: "Marine",
    location: "U.S. coastal market",
    title: "55′ Sunseeker Yacht",
    value: "$1.45M",
    timeline: "Illustrative · Contract placement",
    image:
      "https://images.unsplash.com/photo-1777684862302-7c0973a30095?auto=format&fit=crop&fm=jpg&q=78&w=1800",
    summary:
      "A marine-placement example centered on vessel records, survey coordination, clear contractual roles, and focused outreach to financially capable buyers.",
    facts: ["55-foot motor yacht", "Survey coordination", "Escrow-led settlement"]
  }
] as const;

export const principles = [
  {
    number: "01",
    title: "Speed & liquidity",
    copy: "Direct negotiations, defined timelines, and an execution path built around serious counterparties."
  },
  {
    number: "02",
    title: "Clear deal structure",
    copy: "Principal, option, and assignment roles are disclosed in writing, with agreed pricing and terms."
  },
  {
    number: "03",
    title: "Absolute discretion",
    copy: "Selective outreach without public listing campaigns, open houses, or unnecessary market exposure."
  }
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Evaluate & structure",
    copy: "Review the asset, ownership documentation, pricing expectations, timing, and the transaction role that can be disclosed clearly in writing."
  },
  {
    number: "02",
    title: "Allocate privately",
    copy: "Present a qualified opportunity selectively to relevant counterparties rather than creating broad public exposure."
  },
  {
    number: "03",
    title: "Coordinate diligence",
    copy: "Keep records, inspection or survey needs, assignment disclosures, financing, title, and professional roles visible to the parties."
  },
  {
    number: "04",
    title: "Move to closing",
    copy: "Coordinate the agreed milestones through the appropriate licensed brokers, title or escrow professionals, attorneys, and other specialists when required."
  }
] as const;
