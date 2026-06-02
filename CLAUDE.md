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
| `.claude/skills/frontend-review/` | `/frontend-review` self-review skill. Run before merging a branch; `/frontend-review full` audits the whole codebase. Encodes the dev-guide rules plus the EU AI Act copy checks. |

## Docs Sync Rules

Every website change must be reflected back into the relevant docs file before the work is considered done. The table below defines what triggers an update to each file and what "in sync" means for each.

### `docs/site-copy.md`

Update when: any user-visible string in `src/copy.ts` is added, changed, or removed.

What sync means: every section of rendered content on the site has at least a seed entry in this file, and reading this file in full should let you reconstruct every headline, body paragraph, CTA, label, and legal disclaimer currently visible on the site. One-to-one fidelity is not required for boilerplate repetition (e.g. feature bullet points that follow an obvious pattern), but nothing should be absent. Cuts from copy.ts must be preserved as inline notes (marked `[cut]`) rather than deleted, so future copy reviews have context on what was tried.

### `docs/design-system.html`

Update when: any design token, CSS component class, color, spacing value, font rule, or animation is added, removed, or changed in `src/index.css`; or when a new reusable component with its own visual treatment is added to `src/components/` or `src/sections/`.

What sync means: opening the file in a browser gives an accurate live reference for every token and component. Stale token values or missing component examples in the HTML are a bug.

### `docs/build-plan.md`

Update when: a feature, section, page, integration, or milestone is shipped, partially completed, or descoped.

What sync means: the file accurately reflects the current state of the build — what is live, what is in progress, what is next, and what has been cut or deferred. It is a working roadmap, not a historical changelog. Update the status of completed items; do not simply append.

### `docs/dev-guide.md`

Update when: a new architectural decision is made, a new convention is established, a recurring mistake is identified and resolved, or a new pattern (routing, accessibility, CSS, component structure, embed handling) is introduced or changed.

What sync means: the guide can be handed to a new contributor and fully describe how to build correctly for this codebase. It must stay in sync with the frontend-review skill checklist: any rule added to the guide that is checkable at review time should also appear in `.claude/skills/frontend-review/references/checklist.md`, and vice versa.

### `README.md`

Update when: the stack changes (dependency major versions, new tools added or removed), a new command is introduced or renamed, the CI setup changes, the deployment process changes, or the docs table falls out of step with what actually lives in `docs/`.

What sync means: a new contributor can clone the repo, read the README, and have an accurate picture of the stack, how to run the project, what CI enforces, and where to find deeper documentation. The README stays lean — it is an entry point, not a guide. Anything beyond setup, commands, CI, deployments, and a docs index belongs in `docs/dev-guide.md` or another docs file, not here.

### `docs/legal-deferred.md`

Update when: legal copy, a sub-processor row, a transfer mechanism, a billing clause, or any other legal content is intentionally left off the live pages because the product feature it covers is not yet live. Also update when deferred content becomes live and moves onto the actual legal pages (mark it as promoted, not deleted).

What sync means: anything that belongs on a legal page but cannot go there yet lives here with enough context to drop it in when the time comes. The file is also the holding area for positioning and copy research that informed live content but was too detailed or speculative to publish.

@docs/dev-guide.md
