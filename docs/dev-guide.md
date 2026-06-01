# Developer Guide

Technical reference for the Traced AI marketing site. Consult this when adding routes, editing copy, touching legal pages, or making UI changes.

## Page Architecture

Routes are in `src/App.tsx`. `<ScrollToTop />` (`src/components/ScrollToTop.tsx`) mounts above `<Routes>` and scrolls to top on route change, skipping hash navigations.

**Main pages:**
- `/` (Landing) — Hero, RegulatoryReality, BuiltFor, WaitlistForm, Footer
- `/product` (ProductPage) — HowItWorks, RuleRegistry, Footer
- `/pricing` (PricingPage) — Pricing, CTA block linking to `/#waitlist`, Footer

**Utility pages:**
- `/thank-you` — confirmation + optional Cal.com booking embed
- `/privacy`, `/terms`, `/dpa` — legal pages
- `*` (NotFound) — 404

**NavBar** (every page): logo links to `/` (smooth-scrolls to top if already there), Product and Pricing use `<NavLink>`, theme toggle, "Join waitlist" links to `/#waitlist`.

Build each navigation destination as its own page file from the start. Starting with a monolithic page and splitting later (as happened with the initial `Landing.tsx`) is avoidable churn.

## Routing Rules

Internal links must use `<Link>` or `<NavLink>` from react-router-dom, never `<a href>`. Plain `<a>` is only for external URLs and `mailto:` links. Using `<a>` for internal routes causes full page reloads. This mistake recurred across Hero, PricingPage, NavBar, and Terms during the initial build — treat it as a high-priority review target.

| Target | Correct |
|--------|---------|
| Internal page | `<Link to="/product">` |
| Fragment on home page | `<Link to="/#waitlist">` |
| External URL | `<a href="https://..." target="_blank" rel="noopener noreferrer">` |
| Email | `<a href="mailto:...">` |

External links always need both `target="_blank"` and `rel="noopener noreferrer"`. Missing `rel` is a security issue (reverse tabnapping).

Fragment scrolling is handled globally by `src/components/ScrollToTop.tsx`. When the URL hash changes it calls `scrollIntoView` on the matching element — no per-component scroll logic needed. The effect watches `[pathname, hash]`, so it fires both when navigating cross-route to a hash and when the hash changes on the same page.

**Same-URL hash edge case:** `<Link to="/#section">` is a no-op when the current URL is already `/#section`, so `ScrollToTop`'s effect does not re-run. Any CTA that jumps to a hash anchor on the current page needs a click handler that calls `scrollIntoView` directly and keeps the URL in sync via `window.history.replaceState`. See `NavBar.handleWaitlistClick` as the reference implementation.

NavBar items that reflect current page:
```tsx
<NavLink className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}>
```
Active style: `color: var(--tx-0); background: var(--ac-dim)`.

## Design System

Full visual reference: `docs/design-system.html` — open in browser, use the controls bar to toggle theme and font. This is the canonical source for tokens, spacing, radii, and component patterns.

Font pairing is locked to **C: League Spartan (display) + Montserrat (body) + JetBrains Mono (mono)**. Do not switch.

Token reference: all CSS custom properties (`--bg-*`, `--tx-*`, `--ac*`, `--br-*`, spacing, radii) are defined in `src/index.css`. Dark mode is driven by `[data-theme="dark"]` on `<html>`.

Theme default is `prefers-color-scheme` (system), applied before React mounts to prevent flash of wrong theme. Do not change the initialization order or override the default with a hardcoded value.

Hover states: CSS classes with `:hover` pseudo-class and `transition` only, never `onMouseEnter`/`onMouseLeave` handlers. Inline style mutations on hover were introduced in the initial footer and required a dedicated cleanup commit (`f12b5dc`).

Mobile-first: default Tailwind classes target small screens; `md:` and `lg:` prefixes widen layouts for larger breakpoints.

Never hardcode color values (`white`, `gray-700`, etc.) when a CSS token exists — hardcoded values break dark mode.

For conditional or composed class strings, prefer `clsx` over manual string concatenation. String concatenation silently drops a class when two utilities target the same CSS property.

## TypeScript

- No `any`. Use `unknown` with narrowing if the type is genuinely unknown.
- No `React.FC` or `React.FunctionComponent`. Write plain function declarations with typed params.
- Use `import type` for type-only imports.
- `interface` for component props; `type` for data shapes and unions.

## Accessibility

- Every `<img>` needs `alt`. Use `alt=""` for decorative images.
- Icon-only interactive elements (theme toggle, icon buttons) need `aria-label`.
- One `<h1>` per page. Heading levels must not skip (h1 → h2 → h3).
- All interactive elements need a visible focus style. Never `outline: none` without a replacement.
- CSS animations need a `@media (prefers-reduced-motion: reduce)` fallback in `src/index.css`.
- Semantic landmarks on every page: `<header>`, `<nav>`, `<main>`, `<footer>`.

## Component Rules

- Navigation links, footer items, and other repeated content data belong in `src/copy.ts`, not hardcoded in the component. Adding a new link should require touching only `copy.ts`.
- Static data (card arrays, table rows) must be defined outside component functions — defining inside causes object re-creation on every render.
- No `console.log`, `console.warn`, or `console.error` in production code paths.
- No commented-out code. Use `// TODO:` for intentionally deferred work.
- A component over ~300 lines is a signal to extract named sub-components.

## Editing `src/copy.ts`

All strings in `copy.ts` use Unicode curly quotes and apostrophes (`'`, `'`, `"`, `"`), not ASCII straight quotes. The Edit tool's `old_string` matching fails silently when these are present. Use a Python one-liner for any edit touching strings with apostrophes or quotation marks:

```bash
python3 -c "
content = open('src/copy.ts').read()
content = content.replace('old text', 'new text')
open('src/copy.ts', 'w').write(content)
"
```

After any edit to `copy.ts` (additions, changes, or cuts), update `docs/site-copy.md` to match. When cutting copy, preserve the removed text as an inline note in `docs/site-copy.md` rather than deleting it — it gives future copy reviews the full context of what was tried and why it was cut. Two separate build commits called this out explicitly; it is a real discipline, not an edge case.

## Legal Pages

Pages: `/privacy`, `/terms`, `/dpa`. Shared components in `src/components/LegalComponents.tsx`:
- `LegalSection` — numbered section wrapper. Use `prefix="Annex "` for annex-style IDs. Do not redefine locally in page files.
- `Note` — orange-bordered callout for pre-publish reminders. Appears on the live page; remove only when the product is live and the described content is confirmed.

**Current reality principle:** legal pages describe only what is live today (marketing site + waitlist). Product-forward content belongs in `docs/legal-deferred.md`, not on the live page. Before editing legal pages, check that file first: it has planned sub-processor rows, backend transfer analysis, Stripe billing language, and LIA memo guidance ready to fill in when the product ships.

Active `Note` blocks on legal pages are intentional:
- DPA Annex II: verify security claims before the product processes real customer data
- DPA Annex III: add backend sub-processors before the Service is customer-facing
