# Lindenbüdchen

Website for the Lindenbüdchen neighborhood kiosk — Nuxt 4 / Vue 3 / TypeScript, with German (default) and English localization.

## Tech stack

- [Nuxt 4](https://nuxt.com) + Vue 3 + TypeScript
- [@nuxt/ui](https://ui.nuxt.com) + Tailwind CSS
- [@nuxtjs/i18n](https://i18n.nuxtjs.org) (`de` default, `en`)
- Deployable to [Vercel](https://vercel.com)

## Project structure

```
components/     Reusable UI (AppHeader, HeroSection, OpeningHours, FeedbackForm, ...)
composables/    useOpeningStatus (opening/closed logic), useReveal (scroll-reveal)
data/           Content that will later move to a CMS/Supabase (categories, news, hours, parcel providers)
i18n/locales/   de.json / en.json — all visible UI text lives here
layouts/        default.vue (header + footer shell)
pages/          index, sortiment, paketshop, oeffnungszeiten, aktuelles, feedback, kontakt
types/          Shared TypeScript interfaces
assets/css/     Design tokens (colors, radii, shadows, motion) in main.css
```

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:3000`. German is served at `/`, English at `/en`.

## Build

```bash
npm run build     # production build
npm run preview   # preview the production build locally
```

## Deploying to Vercel

1. Push this project to a Git repository (GitHub/GitLab/Bitbucket).
2. In Vercel, **Add New Project** → import the repository. Vercel auto-detects Nuxt via `vercel.json`; no extra configuration is required.
3. Deploy. Vercel will run `npm install` and `npm run build` automatically.

### Connecting the domain `lindenbuedchen.de` (GoDaddy)

1. In the Vercel project, go to **Settings → Domains** and add `lindenbuedchen.de` (and `www.lindenbuedchen.de` if wanted).
2. Vercel shows the DNS records to set. Typically:
   - **A record** for the root domain (`@`) → the IP Vercel provides (currently `76.76.21.21`, but always use the value Vercel shows you).
   - **CNAME record** for `www` → `cname.vercel-dns.com`.
3. Log into GoDaddy → **My Products → DNS** for `lindenbuedchen.de` and add/edit those records to match what Vercel displayed.
4. DNS propagation can take a few minutes up to 24–48 hours. Vercel will show the domain as "Valid" once it detects the records and will auto-provision an SSL certificate.
5. Optionally set the root domain to redirect to `www` (or vice versa) under Vercel's domain settings.

## Content you should replace before going live

- **`pages/kontakt.vue`** — the address, phone number and Google Maps link are clearly marked placeholders (`CONTACT_ADDRESS_PLACEHOLDER`, `CONTACT_PHONE_PLACEHOLDER`, `GOOGLE_MAPS_URL_PLACEHOLDER`).
- **`data/openingHours.ts`** — add real holiday/special hours to the empty `holidayHours` array; the `OpeningStatus` and `OpeningHours` components already read from it automatically.
- **`data/news.ts`** — replace sample announcements with real ones, or connect a CMS/Supabase later (see below).
- **`public/favicon.svg`** — currently a simple placeholder wordmark; swap in a final favicon/logo when ready.
- Social preview image: add an `og-image.png` under `public/` and reference it in `useSeoMeta` calls if you want a custom Open Graph image (currently text-only OG tags are configured).

## Preparing for a future `/admin` area

The project is deliberately structured so an authenticated admin area can be added later without refactoring:

- All editable content (opening hours, holiday hours, product categories, news, parcel providers) lives in typed data files under `data/`, matching the interfaces in `types/index.ts`. Swapping these for Supabase queries (e.g. in a server API route or a Pinia store) is a drop-in change — the components that consume them (`OpeningHours`, `CategoryCard`, `NewsCard`, `ParcelProviderCard`) don't need to change.
- `FeedbackForm.vue` already isolates the submit logic in one function (`handleSubmit`) with a comment marking where to call a real API endpoint (e.g. `/api/feedback`, backed by Supabase).
- When ready: add `@nuxtjs/supabase` (or the plain `@supabase/supabase-js` client), create a `middleware/admin.ts` auth guard, and add pages under `pages/admin/` for managing news, hours and categories.

## Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), a skip-to-content link, visible focus rings, and `aria-live`/`role` attributes on dynamic status and form elements.
- All animation respects `prefers-reduced-motion` (see `assets/css/main.css`); the scroll-reveal composable (`useReveal`) falls back to showing content immediately if `IntersectionObserver` is unavailable.
- Fonts are loaded via `<link>` in `nuxt.config.ts` with `display=swap` to avoid blocking render; no large JS dependencies beyond Nuxt/@nuxt/ui itself.

## Localization

All visible UI copy lives in `i18n/locales/de.json` and `i18n/locales/en.json`. To add a new page or component, add its keys to both files (German first, since it's the default locale) rather than hardcoding text in a component.
