# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Marketing site for Traced AI: an evidentiary and traceability layer for AI decisions (EU AI Act compliance infrastructure). Phase 1 is a static waitlist landing page. The product is not a compliance platform: it covers the runtime evidence chain only. That distinction matters for copy and feature scope.

Stack: Vite + React + TypeScript, Tailwind CSS v4, Bun, deployed static to Vercel. No SSR, no API routes, no Next.js.

## Commands

```bash
bun run dev          # local dev server
bun run build        # production build to /dist
bun run typecheck    # tsc --noEmit
bun run lint         # eslint
```

Use `rtk err bun run build` and `rtk err bun run typecheck` to surface only errors.

## Hard Rules

These apply everywhere: copy, code, comments, commit messages, UI text.

- No em dashes. Use commas, periods, colons, or parentheses instead.
- Never say Traced AI "satisfies" or "ensures compliance." Use "designed to support compliance with."
- The €35M fine is for **prohibited practices** (Article 5). High-risk violations are up to €15M / 3%. Never conflate the two.
- The deadline badge computes live from `new Date('2026-08-02')`. It is never hardcoded.
- All stat card links go to `artificialintelligenceact.eu` or the official EC service desk. No other sources.
- Never write "every AI decision must be logged." The Act scopes logging to high-risk systems via two routes: Annex III use cases (Article 6(2), obligations from 2 Aug 2026) and the Annex I regulated-product route (Article 6(1), e.g. medical devices under MDR/IVDR, obligations from 2 Aug 2027). Do not classify medical-device or clinical-decision-support AI as Annex III, and do not pin it to the 2026 date.
- Footer legal block: DRIFTWARE DYNAMICS LTD, Cyprus Ltd, Reg. No. HE 474529, VAT: 60167558M.
- Contact: contact@traced-ai.com.
- Light theme is the default; dark mode is a toggle.
- Font pairing is C: League Spartan (display) + Montserrat (body). Locked.

## Content and Documentation

| File | What it contains |
|------|-----------------|
| `src/copy.ts` | Every user-visible string. No literal strings in JSX. |
| `docs/site-copy.md` | Source of truth for all section copy and headlines. |
| `docs/design-system.html` | Visual reference: open in browser to see tokens, fonts, colors, components. |
| `docs/build-plan.md` | GTM blueprint, pricing tiers, milestone definitions. |
| `docs/legal-deferred.md` | Content intentionally left off live legal pages (sub-processor rows, transfer analysis, billing language), plus a deferred copy/positioning backlog from external research. Check before editing legal pages or reworking section copy. |
| `docs/dev-guide.md` | Implementation details: routing rules, design tokens, copy.ts editing gotcha, legal page conventions. |

@docs/dev-guide.md
