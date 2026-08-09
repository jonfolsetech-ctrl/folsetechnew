# FolseTech Implementation Blueprint

## 1. Architectural overview

FolseTech uses Next.js 16 App Router, React, TypeScript, server-rendered content by default, and small client islands only for the lead form, mobile menu, and AI assessment. The architecture keeps indexable content in server components, uses local data modules as a CMS-ready abstraction, and centralizes metadata, canonical URLs, JSON-LD, and sitemap generation.

Core principles:
- Server-first rendering for crawlability and lower JavaScript cost.
- Data-driven service, industry, article, and case-study routes.
- One canonical production origin from `NEXT_PUBLIC_SITE_URL`.
- Structured data generated only from visible, non-fabricated page content.
- AI is isolated behind a server-side provider interface.
- Deterministic business-rule lead scoring stays separate from AI recommendations.

## 2. Route map

Implemented:
- `/`
- `/services`
- `/services/[slug]` for eight service records
- `/industries`
- `/industries/[slug]` for eleven industry records
- `/insights`
- `/insights/[slug]`
- `/work`
- `/work/[slug]`
- `/about`
- `/contact`
- `/free-website-audit`
- `/privacy`
- `/terms`
- `/accessibility`
- `/sitemap.xml`
- `/robots.txt`
- custom 404
- `/api/lead`
- `/api/ai`

Planned expansion:
- `/compare/[slug]`
- `/guides/[slug]`
- author profiles when verified bios exist
- CMS/MDX-backed editorial library

## 3. SEO strategy

- Every indexable template produces a unique title, description, canonical, OG metadata, and robots directive.
- Dynamic routes use `generateMetadata` and `generateStaticParams`.
- Breadcrumbs are visible and paired with `BreadcrumbList` JSON-LD.
- Organization and Article schema are included where supported by visible content.
- Service pages are generated from unique records; industry pages use distinct positioning rather than keyword swaps.
- Sitemap includes public commercial and editorial routes and excludes APIs.
- Robots allows public crawling and blocks `/api/`.
- Internal links connect homepage → services → industries/articles → audit/contact.
- Case studies remain explicitly marked as demonstrations until verified real client results exist.

## 4. Component architecture

Server components:
- `Header`
- `Footer`
- `Breadcrumbs`
- `CTA`
- `JsonLd`

Client components:
- `MobileNav`
- `LeadForm`
- `AIAssistant`

The small client surface limits hydration while retaining accessible interactive behavior.

## 5. Data/content architecture

`lib/content.ts` currently acts as the content repository for services, industries, articles, and case studies. Replace this module with MDX or a CMS adapter later while preserving the route templates.

Recommended future content types:
- Service
- Industry
- Article
- Guide
- Comparison
- CaseStudy
- Author
- FAQ group

Each content record should own its slug, title, meta description, primary intent, related entities, internal-link targets, update date, and structured-data eligibility.

## 6. AI lead-generation architecture

`lib/ai.ts` defines an `AIProvider` interface. The current provider is a deterministic demo and does not call an external model. Add provider adapters server-side only.

Recommended functions:
- `generateLeadRecommendation()`
- `qualifyLead()`
- `summarizeConversation()`
- `suggestService()`

Production requirements:
- Server-only API keys.
- Request validation.
- Per-IP/session rate limiting.
- Abuse monitoring.
- Prompt-injection-resistant handling of external website content.
- Privacy review before storing conversation data.
- Explicit timeouts and fallbacks.
- No AI-only high-stakes qualification decisions.

## Final technical audit

### SEO
- Implemented canonical metadata, sitemap, robots, crawlable nav, breadcrumbs, Article schema, and Organization schema.
- Before launch, add real logo/social/contact data to Organization schema.
- Add Service schema only after final visible service details and provider identity are verified.
- Expand article content before expecting it to compete for substantive queries.
- Avoid publishing scaled industry/comparison pages until each has unique expert content.

### Performance
- No animation framework.
- Minimal client components.
- No remote imagery or video in the starter.
- Add `next/image` assets only with explicit dimensions/sizes and measured compression.
- Add production fonts through `next/font` after final brand selection.

### Accessibility
- Semantic headings and labels are present.
- Mobile menu exposes `aria-expanded` and a controlled menu id.
- Focus states and reduced-motion behavior are included.
- Complete manual keyboard and screen-reader testing before launch.

### Conversion
- Primary audit CTA is repeated at high-intent points.
- Contact form is intentionally concise.
- Audit scores remain blank until measured data exists.
- Connect CRM/database storage and confirmation workflows before paid or organic traffic is sent to forms.

### Security
- Validation uses Zod server-side.
- API keys are not exposed client-side.
- Security headers are configured.
- Production still needs rate limiting, spam protection, audit URL SSRF protection, logging policy, and data retention controls.

## Deployment checklist

1. Set the canonical `NEXT_PUBLIC_SITE_URL`.
2. Add verified FolseTech business information.
3. Connect production lead storage/CRM.
4. Add rate limiting and spam prevention.
5. Add production AI adapter only if needed.
6. Add live audit data providers with SSRF-safe URL fetching.
7. Add analytics/consent implementation.
8. Replace legal placeholders after professional review.
9. Add real case studies and approved proof.
10. Run `npm run build`, accessibility checks, Lighthouse, schema validation, and link crawling in the deployment environment.
11. Verify no preview/staging host is indexable.
12. Test 404s, redirects, canonical host behavior, forms, and mobile navigation.

## Google Search Console launch checklist

1. Verify the canonical domain property.
2. Submit `/sitemap.xml`.
3. Inspect homepage and priority service URLs.
4. Confirm rendered canonicals and indexability.
5. Review Page Indexing reports after discovery.
6. Review Core Web Vitals with field data as it accumulates.
7. Monitor structured-data enhancement reports.
8. Check crawl stats after content expansion.
9. Track queries/pages by search intent, not vanity keyword counts.
10. Document and fix accidental soft 404s, duplicate canonicals, or redirect chains.

## Google Analytics setup checklist

Recommended events:
- `lead_form_started`
- `lead_form_submitted`
- `audit_started`
- `audit_completed`
- `ai_assistant_started`
- `ai_lead_qualified`
- `consultation_cta_clicked`

Use a restrained analytics implementation, define conversion events deliberately, and avoid loading unnecessary third-party tags.

## Recommended first 20 SEO content topics

1. SEO web design: what should be built in before launch?
2. Next.js vs WordPress for business websites.
3. Custom website vs template: cost, speed, and tradeoffs.
4. Webflow vs Next.js for growing companies.
5. How much does a business website cost?
6. How long does a custom website take to build?
7. Website redesign checklist for preserving SEO.
8. How to migrate WordPress to Next.js without losing search equity.
9. Technical SEO checklist for a website redesign.
10. What Core Web Vitals mean for business websites.
11. How to structure service pages for search intent and conversion.
12. How internal linking helps users and search engines understand a site.
13. SaaS website architecture for demos, trials, and comparison traffic.
14. Home-service website SEO without spammy city pages.
15. Professional-services website trust signals that support conversion.
16. AI lead qualification: where automation helps and where rules should decide.
17. Website forms: how many fields should a lead form have?
18. Server Components and SEO: what business owners need to know.
19. Canonical URLs explained for website owners.
20. A practical website performance budget for marketing sites.

## Internal-linking plan

- Homepage links to every core service hub, top industries, insights, work, and audit.
- Each service links to 2–4 relevant industries, one case study, one guide/comparison, and the audit/contact funnel.
- Each industry links to the most relevant services plus industry-specific educational content.
- Articles link contextually to one primary service, one supporting article, and one conversion page.
- Comparison pages link to the relevant service and a neutral guide explaining selection criteria.
- Case studies link back to the services used and related industry page.
- Use descriptive varied anchors; avoid repeated exact-match anchor patterns.

## First 90 days of SEO work

### Days 1–30: foundation
- Finalize real business details, positioning, offers, and proof.
- Launch technical foundation and verify indexing.
- Publish fully developed core service pages.
- Establish Search Console and analytics baselines.
- Create first 3–5 expert articles supporting commercial pages.

### Days 31–60: authority clusters
- Publish priority guides and comparisons.
- Add verified case study material.
- Improve service/industry pages based on query and engagement data.
- Begin digital PR/outreach around genuinely useful resources.
- Audit internal links and orphan pages.

### Days 61–90: iteration
- Expand winning topic clusters.
- Refresh pages earning impressions but weak CTR or conversions.
- Improve conversion paths using measured event data.
- Fix emerging crawl/indexation issues.
- Review field Core Web Vitals and reduce real bottlenecks.

## Required environment variables

- `NEXT_PUBLIC_SITE_URL`
- `AI_PROVIDER`
- `AI_API_KEY` when a real provider is connected
- `DATABASE_URL` when persistent lead storage is connected
- `NEXT_PUBLIC_GA_ID` if Google Analytics is used
- `GOOGLE_SITE_VERIFICATION`

## Features requiring external integrations

- Persistent lead storage / CRM
- Email notifications and follow-up
- AI provider
- Rate limiting / bot protection
- Live website auditing
- PageSpeed or performance data
- Search Console data ingestion if a reporting dashboard is added
- Analytics and consent tooling

## Real FolseTech information still required

- Canonical production domain
- Legal business name if different from FolseTech
- Verified logo asset
- Business email and phone
- Founder/team bios
- Social profiles
- Real client names and permissions
- Verified case-study metrics
- Approved testimonials
- Pricing or budget guidance if public
- Service delivery boundaries and timelines
- Privacy/terms legal language
