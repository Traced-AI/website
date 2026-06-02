# Traced AI

Marketing site for [Traced AI](https://traced-ai.com): tamper-evident audit infrastructure for EU AI Act compliance. Static SPA, deployed to Vercel.

## Stack

- Vite 6 + React 19 + TypeScript 5.7
- Tailwind CSS v4
- react-router-dom 7
- Bun (runtime + package manager)
- Vercel (hosting + analytics)

## Setup

```bash
bun install
bun run dev
```

## Commands

| Command | What it does |
|---------|-------------|
| `bun run dev` | Local dev server at `localhost:5173` |
| `bun run build` | Production build to `/dist` |
| `bun run typecheck` | TypeScript check (no emit) |
| `bun run lint` | ESLint |
| `bun run preview` | Preview the production build locally |

## Deployments

Pushes to `main` deploy automatically to [traced-ai.com](https://traced-ai.com) via Vercel.

Pull requests get a preview URL posted by the Vercel bot. Check the PR before merging.

## Docs

| File | Contents |
|------|----------|
| `docs/dev-guide.md` | Routing rules, design tokens, component conventions, copy editing |
| `docs/build-plan.md` | GTM blueprint, pricing tiers, milestone definitions |
| `docs/site-copy.md` | Source of truth for all user-visible copy |
| `docs/design-system.html` | Visual reference for tokens, fonts, and components (open in browser) |
| `docs/legal-deferred.md` | Copy and legal content deferred until product launch |
| `CLAUDE.md` | AI assistant instructions for this repo |
