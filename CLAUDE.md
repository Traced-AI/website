# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Marketing site for Traced AI, an evidentiary and traceability layer for AI decisions (EU AI Act compliance infrastructure). Phase 1 is a static waitlist landing page. The product is not a compliance platform itself: it covers the runtime evidence chain only. That distinction matters for copy and feature scope.

## Tech Stack

- **Framework:** Vite + React (no SSR, no API routes, pure static)
- **Package manager:** Bun
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Fonts:** Cormorant (display), DM Sans (body), JetBrains Mono (mono) via Google Fonts `<link>`
- **Deploy:** Vercel, auto-deploy from `main`
- **Waitlist:** Tally.so embed (no backend)
- **Analytics:** Vercel Analytics

This is intentionally not Next.js. The product API backend is FastAPI (Python) and the dashboard will be a separate app. Nothing in this site's roadmap ever justifies a Next.js API route. Vite keeps the mental model flat: `index.html` boots `main.tsx`, component tree renders, done.

## Commands

```bash
bun install          # install dependencies
bun run dev          # local dev server
bun run build        # production build to /dist
bun run preview      # preview the production build locally
bun run lint         # eslint
bun run typecheck    # tsc --noEmit
```

Use `rtk err bun run build` and `rtk err bun run typecheck` to surface only errors.

## Page Architecture

Single route `/` with the following sections in render order:

1. `<NavBar />` — logo + "Join waitlist" anchor to `#waitlist`
2. `<Hero />` — VP tagline with strikethrough, italic subheadline, dual CTAs, auto-computed deadline badge
3. `<Stats />` — 4-stat grid linking to official EU AI Act sources
4. `<HowItWorks />` — 4-feature list (SDK, local storage, tamper-evident ledger, auditor exports)
5. `<RuleRegistry />` — registry preview card
6. `<BuiltFor />` — 3 industry cards: fintech first, then medtech, HR
7. `<Pricing />` — Free / Startup / Enterprise tiers
8. `<WaitlistForm id="waitlist" />` — Tally embed
9. `<Footer />` — company info, Driftware Dynamics Ltd legal block

Additional route: `/thank-you` — confirmation page with optional Cal.com booking embed.

## Design System

Full visual reference: `docs/design-system.html` (open in browser, toggle theme/font with the controls bar).

**Font pairing: C (League Spartan + Montserrat).** Locked. Do not switch.
- Display/headings: `'League Spartan', system-ui, sans-serif` — `letter-spacing: 0.08em` globally on display elements
- Body + UI (inputs, buttons): `'Montserrat', system-ui, sans-serif`
- Mono (hashes, timestamps, labels, code): `'JetBrains Mono', 'Courier New', monospace`
- Google Fonts URL loads: `League+Spartan:wght@400;500;600;700;800` and `Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400`

**Font C typography rules:**
- `.hero-headline`: `font-weight: 400; letter-spacing: 0.06em` (not the default 600 used in pairing A/B)
- `.stat-value`: `font-weight: 500; letter-spacing: 0.04em`
- `.card-headline`: `font-weight: 500; letter-spacing: 0.03em`
- `.accent-quote` (the "vibes" subheadline): `font-style: italic; font-weight: 300; letter-spacing: 0.06em; font-size: 0.95em` — italic is intentionally kept here despite the sans-serif, it reads as airy rather than editorial at this weight

**Color tokens (CSS custom properties):**
```css
/* Light (default) */
--bg-0: #F7F7F5   /* page root */
--bg-1: #FFFFFF   /* cards, surfaces */
--bg-2: #F0F0EE   /* inputs, modals */
--bg-3: #E8E8E6   /* hover states */
--tx-0: #1C1C22   --tx-1: #5C5C6A   --tx-2: #9A9AA8
--ac: #0D8A98     --ac-hover: #0C9EAE
--ac-dim: rgba(13,138,152,0.07)    --ac-border: rgba(13,138,152,0.22)

/* Dark */
--bg-0: #09090B   --bg-1: #111115   --bg-2: #1A1A20   --bg-3: #24242C
--tx-0: #F2F0EC   --tx-1: #8B8B96   --tx-2: #4C4C56
--ac: #4AB5C4     --ac-hover: #5CC6D5   /* 58% lightness, not neon */

/* Semantic */
--deadline-text/bg/border: green (#15803D) while days > 0, red (#B91C1C) after enforcement
--success: #15803D   --warning: #B45309   --danger: #B91C1C   --info: #1D4ED8
```

**Spacing scale (4px base):** `sp-1:4px` `sp-2:8px` `sp-3:12px` `sp-4:16px` `sp-5:24px` `sp-6:32px` `sp-7:48px` `sp-8:64px`

**Border radii:** `r-sm:4px` `r-md:8px` `r-lg:12px`

**Section labels:** `font-family: mono; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--tx-2)` — used above every major section.

## Hard Rules

- No em dashes anywhere: copy, comments, commit messages, or UI text.
- Never say Traced AI "satisfies" or "ensures compliance" with the EU AI Act. Use "designed to support compliance with."
- The €35M fine figure is for **prohibited practices** (Article 5). High-risk violations are up to €15M/3%. Stat cards must reflect both.
- The deadline badge computes live from `new Date('2026-08-02')`. Green text before, red text after. Links to the official EC timeline URL in `docs/site-copy.md`.
- All stat card links go to `artificialintelligenceact.eu` or the official EC service desk.
- Footer legal block: DRIFTWARE DYNAMICS LTD, Cyprus Ltd, Reg. No. HE 474529, VAT: 60167558M.
- Contact email: contact@traced-ai.com (forwards to cmin764@gmail.com).
- Light theme is the default; dark mode is a toggle, not the primary.
- Font pairing is C: League Spartan (display) + Montserrat (body). Do not switch to A or B.

## Content Source Files

- `docs/site-copy.md` — all section copy, exact headlines, CTA text, form fields, fine print
- `docs/build-plan.md` — full GTM blueprint, tech stack rationale, pricing tiers, milestone definitions
- `docs/design-system.html` — visual design system with live font and color previews
