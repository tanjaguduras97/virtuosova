# AGENTS.md

AI agents working on this codebase should read this file first.

## Project Overview

A single-page marketing website for **Virtuoso**, a Europe-based virtual assistant agency. The site is built with TanStack Start and deployed on Netlify.

## Key Directories

```
src/
  routes/
    __root.tsx          Root shell: HTML document, global head tags, styles import
    index.tsx           Entire marketing site — one component (VirtuosoHome)
    products/$productId.tsx  Product detail page (template scaffold, not actively used)
  data/
    products.ts         Template product catalog (scaffold, not used on main site)
  styles.css            All CSS: Virtuoso design tokens, layout, component styles
  router.tsx            TanStack Router setup
public/                 Static assets (favicon, logos)
```

## Architecture Decisions

### Single-file page
The entire marketing site lives in `src/routes/index.tsx` as a single React component. All sections (nav, hero, services, about, how-it-works, why-us, testimonials, contact, footer) are rendered inline. This matches the original static-HTML reference design and avoids premature component splitting.

### CSS approach
Rather than using Tailwind utility classes throughout, the site uses a custom CSS design system defined in `src/styles.css`. Design tokens are CSS custom properties (`--terra`, `--ink`, `--off`, etc.). Tailwind is imported but used minimally. This preserves the original design fidelity.

### No external state management
The contact form uses local `useState`. No Zustand or global store is needed for this site.

### Fonts
Loaded via Google Fonts (`<link>` injected inside the component): Fraunces (serif display), Outfit (body sans-serif), DM Mono (labels/monospace).

## Coding Conventions

- Components: PascalCase
- CSS classes: kebab-case, prefixed contextually (`.v-nav`, `.hcs`, `.svc-card`, etc.)
- TypeScript strict mode; use `type` imports
- `@/` path alias maps to `src/`

## Design Tokens (CSS variables)

| Token | Value | Use |
|-------|-------|-----|
| `--terra` | `#7a1f3d` | Primary brand color (deep rose) |
| `--terra3` | `#b85070` | Lighter accent |
| `--ink` | `#1a1410` | Primary text / dark backgrounds |
| `--off` | `#faf8f5` | Off-white section backgrounds |
| `--muted` | `#8a7d74` | Secondary text |
| `--font-d` | Fraunces | Display headings |
| `--font-b` | Outfit | Body text |
| `--font-m` | DM Mono | Labels, kickers, metadata |

## Services Order

`SERVICES` in `src/data/site-content.tsx` stays in this flat order (it also feeds the
contact-form service dropdown):
1. Project Management
2. Website Development
3. Social Media Management
4. Content Creation
5. Photo & Video Editing
6. Executive Support
7. Customer Support
8. Automation Setup

The homepage no longer renders that flat list directly — `SERVICE_GROUPS` regroups the
same entries by outcome for display: **Get seen** (social, content, website, photo/video),
**Get your time back** (executive support, customer support, automation), **Get things
shipped** (project management).

## Non-obvious Decisions

- Testimonials (`TESTIMONIALS`) use real client photos, kept verbatim from the original
  copy — do not paraphrase the quotes.
- `SPECIALISTS` (the five `specialist-*.png` team photos) don't have names or specialties
  in the codebase — they're `[PLACEHOLDER: name]` / `[PLACEHOLDER: specialty]` until Tanja
  supplies them.
- `/get-started` is a separate, `noindex` PPC landing page that intentionally keeps the
  pre-refresh design (emoji icons, stats card, italic headline, testimonial carousel
  classes). It shares components (`ContactForm`) and base CSS/tokens with the homepage, so
  changing shared classes or `:root` tokens affects it too — but its own JSX is out of
  scope for homepage changes and should be left alone unless asked.
- The homepage intentionally has no eyebrow labels (`.sec-label`) above section headings
  and no italicized headline words — both were removed sitewide as template patterns.
  `/get-started` still uses `.sec-label`/`<em>` since its copy wasn't touched.
