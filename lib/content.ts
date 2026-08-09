export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  pains: string[];
  benefits: string[];
  capabilities: string[];
};

export const services: Service[] = [
  { slug: "ai-web-design", title: "AI Web Design", short: "AI-enhanced websites built around real customer journeys.", description: "FolseTech combines strategy, UX, modern development, and carefully scoped AI automation to create websites that help visitors move from question to qualified inquiry.", pains: ["Generic sites that do not guide visitors", "Manual lead qualification", "Disconnected marketing tools"], benefits: ["Clearer customer journeys", "Smarter lead capture", "Maintainable AI integrations"], capabilities: ["Conversational qualification", "Recommendation workflows", "Server-side AI abstractions", "Conversion-focused UX"] },
  { slug: "seo-web-design", title: "SEO Web Design", short: "Search visibility designed into the website from day one.", description: "Architecture, content hierarchy, performance, semantics, internal linking, and conversion strategy are planned together instead of treating SEO as a post-launch add-on.", pains: ["Beautiful sites that get little organic traffic", "Thin service pages", "Poor crawl paths"], benefits: ["Stronger technical foundation", "Scalable search architecture", "Better alignment with search intent"], capabilities: ["Information architecture", "Metadata systems", "Structured data", "Internal linking"] },
  { slug: "nextjs-development", title: "Next.js Development", short: "Fast, scalable React experiences with modern server-first patterns.", description: "Production-focused Next.js development using the App Router, Server Components, strong TypeScript boundaries, and restrained client-side JavaScript.", pains: ["Slow page loads", "Fragile frontend code", "Hard-to-scale templates"], benefits: ["Performance-first rendering", "Reusable architecture", "Strong developer maintainability"], capabilities: ["App Router", "Server Components", "Route handlers", "Metadata APIs"] },
  { slug: "website-redesign", title: "Website Redesign", short: "Turn an outdated website into a measurable growth platform.", description: "Redesigns preserve valuable search equity while improving content structure, UX, speed, accessibility, and conversion paths.", pains: ["Outdated design", "Confusing navigation", "Organic traffic risk during migration"], benefits: ["Modern brand experience", "Safer URL migration", "Better conversion paths"], capabilities: ["Content inventory", "Redirect mapping", "UX redesign", "Performance cleanup"] },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", short: "Improve the journey from traffic to qualified action.", description: "We identify friction in offers, information hierarchy, calls to action, forms, and decision-stage content, then prioritize changes that can be measured.", pains: ["Traffic without inquiries", "Long or confusing forms", "Weak proof and offer clarity"], benefits: ["Lower friction", "Clearer decisions", "More useful conversion data"], capabilities: ["Journey mapping", "CTA strategy", "Form optimization", "Event architecture"] },
  { slug: "technical-seo", title: "Technical SEO", short: "Make your site easier for search engines to crawl, interpret, and index.", description: "Technical SEO work covers indexability, canonicalization, structured data, crawl paths, performance, sitemaps, robots directives, and migration safeguards.", pains: ["Indexing problems", "Duplicate URLs", "Unclear site structure"], benefits: ["Cleaner crawl signals", "More consistent indexing", "Reduced technical debt"], capabilities: ["Canonical strategy", "Sitemaps", "Robots", "Schema"] },
  { slug: "ai-lead-generation", title: "AI Lead Generation", short: "Qualify and route website leads with transparent business rules.", description: "AI summarizes and recommends while deterministic business rules handle qualification scoring wherever practical.", pains: ["Unqualified inquiries", "Slow follow-up", "One-size-fits-all forms"], benefits: ["Better context at handoff", "Useful recommendations", "Provider flexibility"], capabilities: ["Lead scoring", "Conversation summaries", "Service matching", "CRM-ready data"] },
  { slug: "ecommerce-web-design", title: "E-commerce Web Design", short: "Search-aware product experiences designed to reduce friction.", description: "E-commerce design focuses on discoverability, product clarity, category architecture, speed, trust, and conversion without unnecessary client-side weight.", pains: ["Slow storefronts", "Weak category architecture", "Checkout friction"], benefits: ["Clearer product discovery", "Better mobile UX", "SEO-ready category structure"], capabilities: ["Product UX", "Category SEO", "Performance", "Analytics events"] }
];

export const industries = [
  ["small-business", "Small Business", "Local and national small businesses need clarity, credibility, fast performance, and a practical path from search to inquiry."],
  ["startups", "Startups", "Startups need messaging flexibility, fast iteration, strong technical foundations, and conversion paths that can evolve with product-market fit."],
  ["saas", "SaaS", "SaaS sites must explain complex products quickly, support comparison-stage search intent, and turn education into demos or trials."],
  ["professional-services", "Professional Services", "Professional service firms win on trust, expertise, local or national discoverability, and frictionless consultation paths."],
  ["ecommerce", "E-commerce", "E-commerce brands need crawlable catalogs, intuitive product discovery, strong mobile performance, and measurable purchase journeys."],
  ["law-firms", "Law Firms", "Law firm websites require precise service content, strong trust signals, accessible contact paths, and ethical, non-misleading search strategy."],
  ["accounting-firms", "Accounting Firms", "Accounting firms benefit from service clarity, seasonal content planning, authority-building resources, and simple lead capture."],
  ["healthcare", "Healthcare", "Healthcare websites require accessible UX, careful claims, clear service discovery, privacy-conscious forms, and strong technical quality."],
  ["home-services", "Home Services", "Home service businesses need fast mobile experiences, high-intent service pages, proof, coverage clarity, and immediate contact options."],
  ["real-estate", "Real Estate", "Real-estate experiences need strong information architecture, neighborhood or market expertise, search utility, and lead routing."],
  ["consulting", "Consulting", "Consulting firms need a website that makes expertise tangible through clear positioning, insight content, proof, and low-friction conversations."]
].map(([slug, title, description]) => ({ slug, title, description }));

export const articles = [
  { slug: "seo-first-website-architecture", title: "How to Plan an SEO-First Website Architecture", category: "SEO", date: "2026-08-07", excerpt: "A practical framework for aligning search intent, page hierarchy, crawlability, internal links, and conversion paths before design begins." },
  { slug: "nextjs-performance-for-business-sites", title: "Next.js Performance for Business Websites", category: "Next.js", date: "2026-08-07", excerpt: "Where server rendering, restrained hydration, image strategy, and font decisions matter most for real-world business sites." },
  { slug: "ai-lead-qualification-with-business-rules", title: "AI Lead Qualification Without Opaque Scoring", category: "AI Marketing", date: "2026-08-07", excerpt: "Use AI for summarization and recommendations while keeping qualification logic transparent, deterministic, and reviewable." }
];

export const caseStudies = [
  { slug: "example-seo-redesign", title: "SEO-First Redesign Framework", industry: "Demonstration", summary: "A clearly labeled example showing how FolseTech would document a redesign when verified client data becomes available.", placeholder: true }
];
