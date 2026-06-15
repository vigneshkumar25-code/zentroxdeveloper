# AGENTS.md – Project Architecture Guide

## Overview

This is a TanStack Start (React + SSR) corporate website for ZENTROX DEVELOPER PRIVATE LIMITED, deployed on Netlify. The project uses file-based routing with TanStack Router and Tailwind CSS v4 for styling.

## Key Directories

```
src/
  routes/          # File-based routes — each file = one page
    __root.tsx     # Root layout: Navbar + Footer + meta tags + Schema.org
    index.tsx      # Home page
    about.tsx      # About Us
    services.tsx   # Services (all 8 service categories)
    solutions.tsx  # Industry solutions (8 verticals)
    licensing.tsx  # Software licensing + FAQ
    blog.tsx       # Blog listing
    careers.tsx    # Careers + job application form
    contact.tsx    # Contact form + Google Maps
    privacy.tsx    # Privacy Policy
    terms.tsx      # Terms and Conditions
    disclaimer.tsx # Disclaimer
    cookies.tsx    # Cookie Policy
    products/      # Legacy redirect → "/"
  styles.css       # Global styles including Tailwind + custom CSS vars
  router.tsx       # Router setup (auto-generated routeTree.gen imported)

public/
  __forms.html     # REQUIRED: Netlify Forms static skeleton for SSR detection
  favicon.ico
```

## Coding Conventions

- **Components are co-located** with their route file — no separate `components/` folder
- **Each route file** exports `Route = createFileRoute(...)` and a default page component
- **CSS custom properties** for brand colors are defined in `styles.css` using `@theme` (Tailwind v4)
- **Reusable local patterns**: `PageHero`, `Section`, `LegalHero`, `LegalContent` are defined inline in their respective files for clarity
- **Forms** use React controlled state + async `fetch` to `/__forms.html` (not `/`) per Netlify Forms SSR requirement
- **No external UI library** — uses inline SVGs and Tailwind utilities
- **Brand color vars**: `--color-brand-900` through `--color-brand-50`; referenced as `text-brand-*`, `bg-brand-*`

## Brand Design System

- **Primary gradient**: `hero-gradient` class (dark navy → medium blue)
- **Section divider**: `.section-divider` (60px wide, blue gradient bar)
- **Card hover**: `.card-hover` (translateY -4px + box shadow)
- **Buttons**: `.btn-primary` (gradient fill), `.btn-outline` (white border on dark bg)
- **Form inputs**: `.form-input` (1.5px border, blue focus ring)
- **Font headings**: Poppins (`.font-heading`); body: Inter

## Key Architectural Decisions

1. **Forms submit to `/__forms.html`** — Required because TanStack Start's SSR catch-all intercepts `POST /`. Submitting to the static skeleton path bypasses the SSR function and reaches Netlify's form handler.

2. **`public/__forms.html`** must include every form name and field that the React components submit — field names must match exactly for Netlify to accept submissions.

3. **Route tree is auto-generated** — TanStack Router generates `src/routeTree.gen.ts` at build time by scanning `src/routes/`. Do not manually edit this file.

4. **`__root.tsx`** contains the global `<Navbar>` and `<Footer>` components, and is where global Schema.org JSON-LD and meta tags are set.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5 (strict) |
| Deployment | Netlify |

## Adding New Pages

1. Create `src/routes/your-page.tsx` with `createFileRoute('/your-page')`
2. Export a `Route` and a component
3. Add navigation links to `__root.tsx` (`navLinks` array and footer)
4. Build — the route tree regenerates automatically

## Adding New Forms

1. Add the form to the React component with `data-netlify="true"` and `fetch('/__forms.html', ...)`
2. Add the same form (with all field names) to `public/__forms.html`
3. Re-run `node /opt/buildhome/.claude/skills/netlify-forms/scripts/enable.cjs`
