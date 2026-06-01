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

## Routing Rules

Internal links must use `<Link>` or `<NavLink>` from react-router-dom, never `<a href>`. Plain `<a>` is only for external URLs and `mailto:` links. Using `<a>` for internal routes causes full page reloads.

| Target | Correct |
|--------|---------|
| Internal page | `<Link to="/product">` |
| Fragment on home page | `<Link to="/#waitlist">` |
| External URL | `<a href="https://...">` |
| Email | `<a href="mailto:...">` |

Fragment scrolling is handled globally by `src/components/ScrollToTop.tsx`. When the URL hash changes it calls `scrollIntoView` on the matching element — no per-component scroll logic needed. The effect watches `[pathname, hash]`, so it fires both when navigating cross-route to a hash and when the hash changes on the same page.

NavBar items that reflect current page:
```tsx
<NavLink className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}>
```
Active style: `color: var(--tx-0); background: var(--ac-dim)`.

## Design System

Full visual reference: `docs/design-system.html` — open in browser, use the controls bar to toggle theme and font. This is the canonical source for tokens, spacing, radii, and component patterns.

Font pairing is locked to **C: League Spartan (display) + Montserrat (body) + JetBrains Mono (mono)**. Do not switch.

Token reference: all CSS custom properties (`--bg-*`, `--tx-*`, `--ac*`, `--br-*`, spacing, radii) are defined in `src/index.css`. Dark mode is driven by `[data-theme="dark"]` on `<html>`.

Hover states: use CSS classes with `:hover` pseudo-class and `transition`, not JS `onMouseEnter`/`onMouseLeave` handlers.

## Editing `src/copy.ts`

All strings in `copy.ts` use Unicode curly quotes and apostrophes (`'`, `'`, `"`, `"`), not ASCII straight quotes. The Edit tool's `old_string` matching fails silently when these are present. Use a Python one-liner for any edit touching strings with apostrophes or quotation marks:

```bash
python3 -c "
content = open('src/copy.ts').read()
content = content.replace('old text', 'new text')
open('src/copy.ts', 'w').write(content)
"
```

## Legal Pages

Pages: `/privacy`, `/terms`, `/dpa`. Shared components in `src/components/LegalComponents.tsx`:
- `LegalSection` — numbered section wrapper. Use `prefix="Annex "` for annex-style IDs. Do not redefine locally in page files.
- `Note` — orange-bordered callout for pre-publish reminders. Appears on the live page; remove only when the product is live and the described content is confirmed.

**Current reality principle:** legal pages describe only what is live today (marketing site + waitlist). Product-forward content belongs in `docs/legal-deferred.md`, not on the live page. Before editing legal pages, check that file first: it has planned sub-processor rows, backend transfer analysis, Stripe billing language, and LIA memo guidance ready to fill in when the product ships.

Active `Note` blocks on legal pages are intentional:
- DPA Annex II: verify security claims before the product processes real customer data
- DPA Annex III: add backend sub-processors before the Service is customer-facing
