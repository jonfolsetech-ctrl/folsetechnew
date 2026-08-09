# FolseTech

SEO-first, conversion-focused website platform for **FolseTech**, an AI-driven web design and development company serving businesses across the United States.

The repository is structured as a maintainable Next.js App Router application with reusable service, industry, insight, and case-study templates; technical SEO utilities; lead-generation flows; and a provider-agnostic AI qualification layer.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Zod validation
- React Server Components by default
- Route handlers for lead and AI endpoints

## Local development

Requirements:

- Node.js 22+
- npm 10+

```bash
git clone <your-github-repository-url>
cd folsetech
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run type-check
npm run check
npm run build
```

`npm run check` runs linting and TypeScript validation. GitHub Actions runs the same validation plus a production build for pushes to `main` and pull requests.

## Environment variables

Copy `.env.example` to `.env.local`.

The only value that should be configured before production indexing is:

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

Additional variables are reserved for analytics, AI, CRM/database storage, email notifications, and production abuse prevention. Never commit `.env.local` or secrets.

## Repository structure

```text
app/                     Next.js routes, metadata files, API routes
components/              Reusable UI and conversion components
lib/                     SEO, content, AI, lead, analytics utilities
.github/                  CI, Dependabot, issue and PR templates
IMPLEMENTATION.md         Architecture, launch, SEO and 90-day roadmap
SECURITY.md               Security guidance
CONTRIBUTING.md           Development and SEO contribution rules
```

## Core routes

```text
/
/services
/services/[slug]
/industries
/industries/[slug]
/insights
/insights/[slug]
/work
/work/[slug]
/about
/contact
/free-website-audit
/privacy
/terms
/accessibility
```

The project also provides `/sitemap.xml`, `/robots.txt`, API routes, canonical metadata, reusable JSON-LD, breadcrumbs, and a real 404 route.

## GitHub workflow

Recommended branch model:

1. Protect `main` from direct production changes.
2. Create feature branches such as `feat/technical-seo-page`.
3. Open a pull request.
4. Require the `CI / validate` check to pass.
5. Review SEO, accessibility, conversion, and content impacts using the included PR checklist.
6. Merge to `main` and deploy through the hosting provider.

Dependabot is configured for weekly npm and GitHub Actions dependency updates.

## Deployment

The project is designed for a standard Next.js deployment. Before launch:

1. Set the real `NEXT_PUBLIC_SITE_URL`.
2. Add verified FolseTech contact/founder information.
3. Replace placeholder case-study or testimonial states with approved real data only.
4. Connect lead storage/CRM and notification delivery.
5. Add production rate limiting and spam prevention.
6. Configure analytics and consent requirements.
7. Connect an AI provider only if AI qualification is enabled.
8. Connect real audit data sources before displaying numeric audit scores.
9. Verify `/robots.txt`, `/sitemap.xml`, canonical URLs, structured data, and Search Console ownership.

See [IMPLEMENTATION.md](./IMPLEMENTATION.md) for the full technical SEO and launch plan.

## Content and SEO policy

Do not add fake reviews, rankings, traffic numbers, clients, awards, offices, addresses, or case-study results. New service, industry, guide, and comparison pages should have distinct search intent and standalone value rather than becoming thin programmatic pages.

## External integrations still required

- Production AI provider and server-side adapter
- Lead database or CRM
- Rate limiting and abuse prevention
- Real website-audit data providers
- Analytics / consent implementation
- Verified FolseTech business information
- Approved case studies and testimonials

## License

No open-source license has been selected. Add a license only after FolseTech decides how the source code may be used or redistributed.
