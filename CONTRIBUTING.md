# Contributing to FolseTech

## Local setup

1. Install Node.js 22 LTS.
2. Copy `.env.example` to `.env.local` and fill only the values you need.
3. Run `npm install`.
4. Run `npm run dev`.

## Before opening a pull request

Run:

```bash
npm run check
npm run build
```

Keep changes focused. Do not commit secrets, `.env.local`, generated `.next` output, or fabricated client results/testimonials.

## SEO requirements

For new indexable routes:

- provide a unique title and meta description;
- provide a canonical URL;
- ensure the page is reachable through crawlable internal links;
- add the route to sitemap generation when appropriate;
- use structured data only when supported by visible content;
- avoid thin, duplicated, or doorway-style pages.

## Accessibility and performance

Prefer Server Components. Add Client Components only when interaction requires them. Preserve keyboard navigation, visible focus states, semantic headings, responsive behavior, and reduced-motion support.
