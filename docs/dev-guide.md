# Developer Guide

Technical reference for the Traced AI marketing site. Consult this when adding routes, editing copy, touching legal pages, or making UI changes.

## Page Architecture

Routes are in `src/App.tsx`. `<ScrollToTop />` (`src/components/ScrollToTop.tsx`) mounts above `<Routes>` and scrolls to top on route change, skipping hash navigations.

**Main pages:**
- `/` (Landing): Hero, RegulatoryReality, BuiltFor, WaitlistForm, Footer
- `/product` (ProductPage): HowItWorks, RuleRegistry, Footer
- `/pricing` (PricingPage): Pricing, CTA block linking to `/#waitlist`, Footer

**Utility pages:**
- `/thank-you`: confirmation + optional Cal.eu booking embed
- `/privacy`, `/terms`, `/dpa`: legal pages
- `*` (NotFound): 404

**NavBar** (every page): logo links to `/` (smooth-scrolls to top if already there), Product and Pricing use `<NavLink>`, theme toggle, "Join waitlist" links to `/#waitlist`.

Build each navigation destination as its own page file from the start. Starting with a monolithic page and splitting later (as happened with the initial `Landing.tsx`) is avoidable churn.

## Routing Rules

Internal links must use `<Link>` or `<NavLink>` from react-router-dom, never `<a href>`. Plain `<a>` is only for external URLs and `mailto:` links. Using `<a>` for internal routes causes full page reloads. This mistake recurred across Hero, PricingPage, NavBar, and Terms during the initial build, so treat it as a high-priority review target.

| Target | Correct |
|--------|---------|
| Internal page | `<Link to="/product">` |
| Fragment on home page | `<Link to="/#waitlist">` |
| External URL | `<a href="https://..." target="_blank" rel="noopener noreferrer">` |
| Email | `<a href="mailto:...">` |

External links always need both `target="_blank"` and `rel="noopener noreferrer"`. Missing `rel` is a security issue (reverse tabnapping).

Fragment scrolling is handled globally by `src/components/ScrollToTop.tsx`. When the URL hash changes it calls `scrollIntoView` on the matching element, with no per-component scroll logic needed. The effect watches `[pathname, hash]`, so it fires both when navigating cross-route to a hash and when the hash changes on the same page.

**Same-URL hash edge case:** `<Link to="/#section">` is a no-op when the current URL is already `/#section`, so `ScrollToTop`'s effect does not re-run. Any CTA that jumps to a hash anchor on the current page needs a click handler that calls `scrollIntoView` directly and keeps the URL in sync via `window.history.replaceState`. The shared hook `src/hooks/useWaitlistClick.ts` implements this for `/#waitlist`; use it in any component that renders a waitlist CTA.

NavBar items that reflect current page:
```tsx
<NavLink className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}>
```
Active style: `color: var(--tx-0); background: var(--ac-dim)`.

React Router 7 runs in declarative SPA mode here (`<Routes>` / `<Route>` in `src/App.tsx`). The data-router and framework modes are not adopted; they are an option if data loading or nested route loaders are ever needed.

## Design System

Full visual reference: `docs/design-system.html`. Open in browser, use the controls bar to toggle theme and font. This is the canonical source for tokens, spacing, radii, and component patterns.

Font pairing is locked to **C: League Spartan (display) + Montserrat (body) + JetBrains Mono (mono)**. Do not switch.

Token reference: all CSS custom properties (`--bg-*`, `--tx-*`, `--ac*`, `--br-*`, spacing, radii) are defined in `src/index.css`. Dark mode is driven by `[data-theme="dark"]` on `<html>`.

Tailwind v4 token pattern (canonical, as used in `src/index.css`): raw values in `:root`, theme overrides in `[data-theme="dark"]`, exposed to utility classes via `@theme inline`. When adding a token, follow the same three-part shape. Use `@theme` / `@theme inline` only for values that should generate utility classes; use a plain `:root` var for values that should not. Prefer explicit CSS properties over `@apply` (Tailwind v4 guidance).

Theme default is `prefers-color-scheme` (system), applied before React mounts to prevent flash of wrong theme. Do not change the initialization order or override the default with a hardcoded value.

Hover states: CSS classes with `:hover` pseudo-class and `transition` only, never `onMouseEnter`/`onMouseLeave` handlers. Inline style mutations on hover were introduced in the initial footer and required a dedicated cleanup commit (`f12b5dc`).

Mobile-first: default Tailwind classes target small screens; `md:` and `lg:` prefixes widen layouts for larger breakpoints.

Never hardcode color values (`white`, `gray-700`, etc.) when a CSS token exists. Hardcoded values break dark mode.

For conditional or composed class strings, prefer `clsx` over manual string concatenation. String concatenation silently drops a class when two utilities target the same CSS property.

### Section background rhythm

Sections on each page alternate between `--bg-1` (white card surface) and `--bg-0` (warm off-white page base). The footer always uses `--bg-1`. Two rules follow from this:

1. The last content section before the footer must use `--bg-0`, so the footer reads as a distinct zone rather than a continuation.
2. Consecutive sections must never share the same background. If a new section lands on the same bg as its neighbor, flip it.

Each section also carries `borderTop: '1px solid var(--br-subtle)'` to sharpen the boundary, even between contrasting backgrounds.

Current section map (use this as a reference when adding sections):

| Page | Section sequence |
|------|-----------------|
| Landing (`/`) | Hero(`bg-1`) → RegulatoryReality(`bg-0`) → BuiltFor(`bg-1`) → WaitlistForm(`bg-0`) → Footer(`bg-1`) |
| Product (`/product`) | HowItWorks(`bg-1`) → RuleRegistry(`bg-0`) → Footer(`bg-1`) |
| Pricing (`/pricing`) | Pricing(`bg-1`) → CTA(`bg-0`) → Footer(`bg-1`) |
| About (`/about`) | Vision(`bg-1`) → Mission(`bg-0`) → BuildWithMe(`bg-1`) → Footer(`bg-1`, separated by border) |

When adding a new page: start the first section with `bg-1` (it follows the NavBar, which is also `bg-1` with a border-bottom, and the borderTop on the section provides the visual break). Then alternate from there, ensuring the last section is `bg-0`.

**Odd-section exception:** When a page has an odd number of content sections, strict alternation starting at `bg-1` ends on `bg-1` rather than `bg-0`. The footer's `borderTop: 1px solid var(--br-subtle)` still provides the visual separation. About (`/about`) is the current example of this: three sections, ending on `bg-1`.

## TypeScript

- No `any`. Use `unknown` with narrowing if the type is genuinely unknown.
- No `React.FC` or `React.FunctionComponent`. Write plain function declarations with typed params.
- Use `import type` for type-only imports.
- `interface` for component props; `type` for data shapes and unions.

## Accessibility

Baseline is WCAG 2.2 AA.

- Every `<img>` needs `alt`. Use `alt=""` for decorative images.
- Icon-only interactive elements (theme toggle, icon buttons) need `aria-label`. Toggles that open/close also need `aria-expanded` tracking state.
- One `<h1>` per page. Heading levels must not skip (h1 → h2 → h3).
- All interactive elements need a visible focus style. Never `outline: none` without a replacement. `src/index.css` currently scopes its box-shadow focus replacement to `.form-input` only, so any new interactive element must have its own visible focus style.
- CSS animations need a `@media (prefers-reduced-motion: reduce)` fallback in `src/index.css`. This block is not present yet, so it must be added alongside the first animation that needs it.
- Semantic landmarks on every page: `<header>`, `<nav>`, `<main>`, `<footer>`.

WCAG 2.2 additions that matter for this layout:
- **Target size (2.5.8):** pointer targets (icon buttons, nav links, theme toggle) are at least 24×24 CSS px, or spaced far enough apart.
- **Focus appearance (2.4.13):** the focus indicator is at least a 2px-thick border-equivalent and contrasts ≥3:1 with adjacent colors, in both themes.
- **Focus not obscured (2.4.11):** because the NavBar is sticky, a focused element reached by keyboard or hash navigation must not hide behind the header. Keep a `scroll-mt-*` offset on hash targets.

## Component Rules

- Navigation links, footer items, and other repeated content data belong in `src/copy.ts`, not hardcoded in the component. Adding a new link should require touching only `copy.ts`.
- Static data (card arrays, table rows) must be defined outside component functions. Defining inside causes object re-creation on every render.
- No `console.log`, `console.warn`, or `console.error` in production code paths.
- No commented-out code. Use `// TODO:` for intentionally deferred work.
- A component over ~300 lines is a signal to extract named sub-components.
- `<img>` `width` and `height` attributes must be the natural image dimensions (as stored on disk), not the CSS display size. Browsers use them for aspect-ratio computation before CSS applies.

## SEO & Metadata

Per-route `<title>`, `<meta name="description">`, and `<link rel="canonical">` are rendered directly inside each route component; React 19 hoists them to `<head>`. No `react-helmet` or external library. `index.html` is the global fallback only — any route-specific value placed there (including `og:url`) will be wrong for every other route.

**Favicon and OG image:** Live as of feature/ui-logo-og-imags. Assets live in `public/` and are generated by `scripts/gen-assets.py` (requires Pillow). Re-run the script if source logos change.
- `public/favicon.svg` + `public/favicon-32.png` + `public/apple-touch-icon.png` (180x180): derived from the teal AI icon (`AI_Transparent.png`).
- `public/og-image.png` (1200x630, ~50 KB): dark-bg branded card with white logo, tagline in Montserrat, URL in League Spartan.
- `public/logo-light.png` + `public/logo-dark.png`: navbar logo variants (492x149 px, 3x retina for 32px display height).

**NavBar logo:** The logo link in `src/sections/NavBar.tsx` uses `theme` state (initialized synchronously from `data-theme` before first render) to pick `logo-light.png` or `logo-dark.png`. No flash risk.

SEO baseline is complete. Each route component renders its own `<title>`, `<meta name="description">`, `<link rel="canonical">`, `og:url`, `og:title`, and `og:description` via React 19 native document metadata. `NotFound` carries `<meta name="robots" content="noindex">`. Truly global OG tags (`og:type`, `og:image`, `og:image:alt`, `twitter:card`, `twitter:image`) stay in `index.html`.

**Title convention:** `<title>` tags follow the pattern `Page Name · Traced AI` (short, symmetric). The OG title is separate and can be more descriptive or punchy — pull from the page's own headline copy where it fits. Do not mirror the `<title>` in `og:title`; they serve different surfaces.

## Third-party Embeds & Integrations

The site is static and client-only, so every integration runs in the browser: Tally (waitlist form), Cal.eu (booking on `/thank-you`), and Stripe (planned for pricing/checkout).

- Every embed `<iframe>` needs a `title`. If a vendor library injects the iframe without one, set it via a `ref` + `useEffect`.
- Heavy embeds load only on the route that renders them. Do not eagerly bundle Cal.eu or Stripe on routes that do not use them; lazy-load or dynamic-import.
- Only publishable/public keys appear in client code. Stripe secret keys, API secrets, and webhook signing secrets never ship to the browser. Tally form IDs and the Cal.eu URL are public config (`src/config.ts`), not secrets.
- When a Content-Security-Policy is added to `vercel.json`, `frame-src` / `connect-src` must allow the embed origins (tally.so, cal.eu, stripe.com).
- Embeds that set cookies (Cal.eu, Stripe) must be reflected in the privacy policy. Adding such an embed is a legal-page update trigger.

`CAL_BOOKING_URL` in `src/config.ts` points to `https://www.cal.eu/traced-ai/discovery`. The `/thank-you` booking CTA is an **outbound `<a>` link** that opens cal.eu in a new tab, not an on-page embed. This sets no cookies on our domain and does not trigger a privacy-policy update. Switching to an inline `@calcom/embed` later (lazy-loaded on `/thank-you` only) would set cookies and require a privacy-policy cookie disclosure update before shipping.

## Editing `src/copy.ts`

All strings in `copy.ts` use Unicode curly quotes and apostrophes (`'`, `'`, `"`, `"`), not ASCII straight quotes. The Edit tool's `old_string` matching fails silently when these are present. Use a Python one-liner for any edit touching strings with apostrophes or quotation marks:

```bash
python3 -c "
content = open('src/copy.ts').read()
content = content.replace('old text', 'new text')
open('src/copy.ts', 'w').write(content)
"
```

After any edit to `copy.ts` (additions, changes, or cuts), update `docs/site-copy.md` to match. When cutting copy, preserve the removed text as an inline note in `docs/site-copy.md` rather than deleting it. It gives future copy reviews the full context of what was tried and why it was cut. Two separate build commits called this out explicitly; it is a real discipline, not an edge case.

## Legal Pages

Pages: `/privacy`, `/terms`, `/dpa`. Shared components in `src/components/LegalComponents.tsx`:
- `LegalSection`: numbered section wrapper. Use `prefix="Annex "` for annex-style IDs. Do not redefine locally in page files.
- `Note`: orange-bordered callout for pre-publish reminders. Appears on the live page; remove only when the product is live and the described content is confirmed.

**Current reality principle:** legal pages describe only what is live today (marketing site + waitlist). Product-forward content belongs in `docs/legal-deferred.md`, not on the live page. Before editing legal pages, check that file first: it has planned sub-processor rows, backend transfer analysis, Stripe billing language, and LIA memo guidance ready to fill in when the product ships.

Active `Note` blocks on legal pages are intentional:
- DPA Annex II: verify security claims before the product processes real customer data
- DPA Annex III: add backend sub-processors before the Service is customer-facing
