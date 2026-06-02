# Frontend Review Checklist: Traced AI

Rules ordered by user-impact priority. IDs are used in review findings and cross-reference `docs/dev-guide.md`.
Skip anything `tsc` + `eslint` already catch (unused vars, missing keys, hook rules). Step 1 runs those first and they take priority.

Stack reality this checklist assumes: Vite 8 + React 19 + react-router-dom 7 + Tailwind v4 + TypeScript 6, Bun, static Vercel. No shadcn, no Next.js, no `@/` alias, `clsx` not installed.

---

## 1. Accessibility (A): WCAG 2.2 AA

**A1**: Every `<img>` has descriptive `alt`. Decorative images use `alt=""`. The logo should describe the brand, not be empty or generic.

**A2**: Icon-only interactive elements need an accessible name. The theme toggle and any icon-only button require `aria-label`. Toggles that open/close also need `aria-expanded` tracking React state.

**A3**: Each page has exactly one `<h1>`. Heading levels are sequential, no skipped levels (h1 to h2 to h3). Screen-reader navigation depends on it.

**A4**: Focus is visible on every interactive element. `src/index.css` has an `outline: none` (around L544) with a box-shadow replacement scoped to `.form-input` only. Verify every other interactive element (links, buttons, nav, theme toggle) still shows a visible focus style and none suppress the outline without a replacement.

**A5**: Landmark regions present on every page: `<header>`, `<nav>`, `<main>`, `<footer>`. Flag any page that bypasses this structure or puts content outside the landmarks.

**A6**: CSS animations respect `prefers-reduced-motion`. `src/index.css` currently has **no** `@media (prefers-reduced-motion: reduce)` block. Flag any keyframe or transition-driven animation that lacks a reduced-motion fallback, and recommend adding the block.

**A7** *(WCAG 2.2)*: Target size. Pointer targets (icon buttons, nav links, the theme toggle) are at least 24x24 CSS px, or have sufficient spacing. Check the navbar controls and mobile tap targets.

**A8** *(WCAG 2.2)*: Focus appearance. The focus indicator is at least a 2px-thick border-equivalent and contrasts at 3:1 or better with adjacent colors, in both light and dark themes.

**A9** *(WCAG 2.2)*: Focus not obscured. With the sticky NavBar, a focused element scrolled to via keyboard or hash must not hide behind the header. Verify `scroll-mt-*` or an equivalent scroll offset keeps focused targets visible.

---

## 2. Routing (RR)

**RR1**: Internal navigation uses `<Link>` / `<NavLink>` from react-router-dom, never `<a href>`. Plain `<a>` causes a full page reload. This mistake recurred across Hero, PricingPage, NavBar, and Terms during the initial build. Treat it as a high-priority target.

**RR2**: External links use `<a href target="_blank" rel="noopener noreferrer">`. Both attributes are required; missing `rel` is a reverse-tabnabbing security issue.

**RR3**: Email links use `<a href="mailto:...">`. This is the one legitimate non-router `<a>` for an internal action.

**RR4**: The catch-all `<Route path="*" element={<NotFound />} />` stays last in `src/App.tsx`.

**RR5**: Hash targets (`/#waitlist`) need a matching `id` on the element. Global scroll is handled by `src/components/ScrollToTop.tsx` (effect on `[pathname, hash]`). **Same-URL hash edge case:** `<Link to="/#section">` is a no-op when the URL is already `/#section`, so the effect does not re-run. Any CTA jumping to a hash on the current page needs a click handler calling `scrollIntoView` directly plus `window.history.replaceState` to keep the URL in sync. Reference: `NavBar.handleWaitlistClick`.

---

## 3. Content & Copy: EU AI Act + project rules (D)

These are project-specific and legally load-bearing. A copy error here is a 🔴, not a nit.

**D1**: No em dashes anywhere in copy, UI text, comments, or these docs. Use commas, periods, colons, or parentheses.

**D2**: Never say Traced AI "satisfies" or "ensures compliance." Only "designed to support compliance with." Traced AI is the runtime evidence layer, not a compliance platform.

**D3**: Fine tiers are never conflated. €35M is for **prohibited practices** (Article 5). High-risk violations are up to €15M / 3%. Verify any fine figure against the article it cites.

**D4**: Never "every AI decision must be logged." Logging is scoped to high-risk systems via two routes: Annex III use cases (Article 6(2), obligations from 2 Aug 2026) and the Annex I regulated-product route (Article 6(1), e.g. medical devices under MDR/IVDR, obligations from 2 Aug 2027). Do not classify medical-device or clinical-decision-support AI as Annex III, and do not pin it to the 2026 date.

**D5**: The deadline badge computes live from `new Date('2026-08-02')` in `DeadlineBadge.tsx`. It is never hardcoded. Flag any hardcoded day count or date string standing in for it.

**D6**: Stat-card links (`StatCard.tsx`, sources in `config.ts`) point only to `artificialintelligenceact.eu` or the official EC AI Act service desk. No other sources.

**D7**: Footer legal block exact: DRIFTWARE DYNAMICS LTD, Cyprus Ltd, Reg. No. HE 474529, VAT 60167558M. Contact: contact@traced-ai.com. Flag any drift in these strings.

**D8**: No literal user-visible strings in JSX. All copy lives in `src/copy.ts`. Flag hardcoded text in components.

**D9**: `copy.ts` uses Unicode curly quotes/apostrophes. Edits go through the Python one-liner (see dev-guide), and every change (add, edit, or cut) is backpropagated to `docs/site-copy.md`, with cuts preserved as inline notes rather than deleted. Flag any `copy.ts` change with no corresponding `site-copy.md` update.

---

## 4. Theming & Tailwind v4 (TW)

**TW1**: Colors use design tokens, never hardcoded values (`white`, `gray-700`, `#fff`). Tokens are defined in `src/index.css` as CSS custom properties in `:root` (raw values) with `[data-theme="dark"]` overrides, and exposed to utilities via `@theme inline`. Hardcoded colors break dark mode.

**TW2**: Dark mode is driven by the `[data-theme="dark"]` attribute on `<html>`, not Tailwind's `dark:` variant (not configured). Light is the default; the toggle switches to dark.

**TW3**: Theme initializes from `prefers-color-scheme` before React mounts to prevent flash of wrong theme. Do not change the init order or hardcode a default.

**TW4**: New tokens use `@theme` / `@theme inline` only for values that should generate utility classes; use a plain `:root` var for values that should not. Prefer explicit CSS properties over `@apply` (Tailwind v4 guidance).

**TW5**: Mobile-first. Default classes target small screens; `md:` / `lg:` widen for larger breakpoints. Flag components that default to a desktop layout and shrink down.

**TW6**: Font pairing is locked: League Spartan (display) + Montserrat (body) + JetBrains Mono (mono). Do not introduce other families.

**TW7**: `clsx` is **not installed**. Conditional classes use template literals today. Flag a class string only when concatenation genuinely risks dropping a conflicting utility; do not demand `clsx` unless it is added as a dependency.

---

## 5. Component Structure (C)

**C1**: File placement. Route pages in `src/pages/`, page sections in `src/sections/`, shared/reusable components in `src/components/`. Maintain this separation.

**C2**: Repeated navigational or content data (nav links, footer items, card arrays, table rows) lives in `src/copy.ts`, not hardcoded in the component. Adding a link should touch only `copy.ts`.

**C3**: Static data arrays/objects are defined at module scope, outside the component function. Defining inside re-creates them every render.

**C4**: Each route is its own page file. Do not collapse multiple routes into one file and split later (the initial `Landing.tsx` monolith-then-split was avoidable churn).

**C5**: Legal pages use the shared `LegalSection` and `Note` from `src/components/LegalComponents.tsx`. Do not redefine them locally. A component over roughly 300 lines is a signal to extract named sub-components.

---

## 6. Legal Pages (L)

**L1**: Current-reality principle. Legal pages (`/privacy`, `/terms`, `/dpa`) describe only what is live today (marketing site + waitlist). Product-forward content belongs in `docs/legal-deferred.md`, not the live page. Check that file before adding product-era claims.

**L2**: Active `Note` blocks (DPA Annex II security claims, Annex III backend sub-processors) are intentional pre-publish reminders. Do not remove them until the product is live and the described content is confirmed.

---

## 7. TypeScript (T)

**T1**: No `any`. Use `unknown` with narrowing if the type is genuinely unknown. `as X` only when provably correct at that call site.

**T2**: No `React.FC` / `React.FunctionComponent`. Plain function declarations with typed params.

**T3**: `import type` for type-only imports.

**T4**: `interface` for component props; `type` for data shapes and unions. Event handlers use React synthetic event types, not `any` or DOM `Event`.

---

## 8. SEO & Meta (S)

**S1**: Per-route `<title>` and `<meta name="description">`. The idiomatic React 19 approach is rendering `<title>`/`<meta>` directly inside each route component; React 19 hoists them to `<head>`, no `react-helmet` needed. Today only `index.html` sets these globally, so every route shares one title. Flag as an SEO gap (🟡), and use native metadata when fixing.

**S2**: `<html lang="en">` present in `index.html` (verify not removed).

**S3**: `<link rel="canonical">` is currently missing. On Vercel the site is reachable on both `.vercel.app` and the custom domain; a canonical to `https://traced-ai.com/<path>` prevents duplicate-content indexing. Note in full audits.

**S4**: NotFound is served HTTP 200 (Vercel SPA fallback). Add `<meta name="robots" content="noindex">` for that route so crawlers skip error pages.

**S5**: og:image is a TODO in `index.html`. A compressed OG image (under 200KB) improves LinkedIn and social previews, the primary outreach channel per the GTM plan.

---

## 9. Third-party Embeds & Integrations (E)

Forward-looking: Tally (live in `WaitlistForm`), Cal.eu (live in `ThankYou`), and Stripe (planned) all run client-side on this static site.

**E1**: Every embed `<iframe>` has a `title`. If a vendor library injects the iframe without one, set it via a `ref` plus `useEffect`.

**E2**: Heavy embeds load only on the route that uses them. Do not bundle or eagerly load Cal.eu or Stripe on routes that do not render them; lazy-load or dynamic-import where possible.

**E3**: Only publishable/public keys appear in client code. Stripe secret keys, API secrets, and webhook signing secrets never ship to the browser; they live in server/Vercel env. Tally form IDs and the Cal.eu URL are public config, not secrets.

**E4**: `vercel.json` CSP (`frame-src` / `connect-src`) must allow the embed origins (tally.so, cal.eu, stripe.com) when a CSP is added. Flag a new embed whose origin is not covered.

**E5**: Embeds that set cookies (Cal.eu, Stripe) must be reflected in the privacy policy. A new tracking or cookie-setting embed is a legal-page update trigger (ties to L1).

---

## 10. Performance (P)

**P1**: Static data at module scope (see C3). Also a perf rule: re-creating arrays/objects per render breaks referential equality and wastes work.

**P2**: No `console.log` / `console.warn` / `console.error` in production code paths.

**P3**: Images in `public/` use appropriate formats (SVG for icons, compressed PNG/WebP for raster). OG image and any raster asset stay size-bounded (under 200KB target).

**P4**: Fonts load with `font-display: swap` to avoid invisible-text flashes. Keep INP low: avoid heavy synchronous work on interaction and layout thrash. Lighthouse targets (per GTM plan): 90+ performance, 95+ accessibility.

---

## 11. Security (SEC)

**SEC1**: Every `target="_blank"` link carries `rel="noopener noreferrer"` (see RR2). Flag any external link missing it.

**SEC2**: No `dangerouslySetInnerHTML` in source. In a static marketing site with hardcoded copy it should never appear. Flag immediately if found.

**SEC3**: No secrets, API keys, or tokens in `src/`. Tally form ID, Cal.eu URL, and contact email are public config, not secrets; do not false-flag them. Real secret material is a 🔴.

**SEC4**: `vercel.json` should set security response headers for all routes: `X-Frame-Options: DENY` (or CSP `frame-ancestors`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and a CSP. Vercel does not add these automatically. Note in full audits; not a per-PR blocker unless a change weakens existing headers.

---

## 12. Code Quality (Q)

**Q1**: No commented-out code. Delete dead blocks. Intentionally deferred work uses `// TODO:` with a reason.

**Q2**: No `console.*` debug output in production paths (see P2).

**Q3**: Imports ordered external-then-internal, no unused imports. `bun` is the only package manager; no `package-lock.json` or `yarn.lock` committed.
