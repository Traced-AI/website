---
name: frontend-review
description: Self-review of the Traced AI marketing site (Vite + React 19 + TypeScript + Tailwind v4 + react-router-dom 7) before merge. Covers accessibility (WCAG 2.2 AA), routing, TypeScript, theming/Tailwind, component structure, third-party embeds, performance, security, code quality, and the project's EU AI Act copy + legal-page + copy.ts/site-copy.md disciplines. Use before merging a branch, or pass `full` to audit the whole codebase.
argument-hint: [full]
allowed-tools: [Read, Glob, Grep, Bash]
---

# Frontend Review: Traced AI

Self-review of the Traced AI marketing site before merge. Grounded in `CLAUDE.md` and `docs/dev-guide.md`. This skill applies those rules, it does not restate the prose.

## Mode detection

- `$ARGUMENTS` is empty: **diff mode**, review only files changed on the current branch vs `main`.
- `$ARGUMENTS` is `full`: **full mode**, audit the entire codebase.

---

## Step 1: Verify CI passes first

Run `rtk err bun run typecheck` then `rtk err bun run lint`. If either reports errors, list them at the top of the report and stop. Those take priority over every finding here and must be fixed first. Type and lint errors are not re-litigated below; this skill covers what tooling cannot catch.

---

## Step 2: Gather code

### Diff mode

Run `git branch --show-current` for the branch name.

Run `git diff main...HEAD --name-only -- '*.tsx' '*.ts' '*.css' 'index.html' 'vercel.json'` to list changed files. If the list is empty and you are on a branch other than `main`, fall back to `git diff HEAD~1 --name-only` to catch the last commit. If on `main` with no changes, stop and report: "No diff found. Run this skill on a feature branch, or use `/frontend-review full` to audit the entire codebase." Do not silently review `HEAD~1` on `main`.

Run `git diff main...HEAD -- '*.tsx' '*.ts' '*.css' 'index.html' 'vercel.json'` for the patch content.

Read the **full content** of each changed file. The diff alone is not enough for structure and a11y checks. Always also read these cross-cutting files even if not in the diff, because changes elsewhere can affect them:
- `src/App.tsx`: route completeness, catch-all `*` ordering
- `index.html`: meta tags, `lang`, canonical, og:image
- `src/index.css`: design tokens, focus styles, reduced-motion

### Full mode

Use `Glob("src/**/*.{tsx,ts}")` to enumerate all source files. Read every file, plus `index.html`, `src/index.css`, and `vercel.json`.

---

## Step 3: Apply the checklist

Read `.claude/skills/frontend-review/references/checklist.md`.

Evaluate every rule against the gathered code. In diff mode, focus findings on changed files but still apply cross-cutting rules (routing, landmark structure, meta tags, tokens) by reading related files when a change could affect them.

---

## Step 4: Classify findings

Every finding goes into one of three tiers:

**🔴 Critical**: must fix before merge. Runtime errors, security issues, broken a11y, broken behavior, legally inaccurate EU AI Act copy, data exposure.

**🟡 Important**: should fix before merge. Type-safety gaps, performance regressions, significant convention violations, copy/voice policy breaches.

**🔵 Suggestion**: optional. Readability, minor inefficiencies, style nits.

For each finding include:
- **File**: path from repo root
- **Line**: line number or range
- **Rule**: rule ID from the checklist (for example `A3`, `D2`, `RR1`)
- **Issue**: what is wrong and why it matters
- **Fix**: concrete suggestion

Drop findings below 80% confidence. Mark borderline cases *(low confidence)*.

---

## Step 5: Summary report

Use the output template below. Skip categories with no findings. Order categories by the priority in the checklist.

After the report, apply fixes for all 🔴 Critical findings using the Edit tool. State what changed and why. Do not touch Important or Suggestion items unless explicitly asked.

**`src/copy.ts` exception:** never blind-edit copy. `copy.ts` uses Unicode curly quotes/apostrophes that break the Edit tool's matching, so copy fixes use the Python one-liner from `docs/dev-guide.md`, and any change must be backpropagated to `docs/site-copy.md` (cuts preserved as inline notes). For copy findings, report the fix and apply it through that workflow. Do not silently rewrite strings.

---

## Output template

```
## Frontend Review: [diff | full]

Branch: `<branch>` vs `main`
Files reviewed: <n>

---

### <Category> (<n> findings | PASS)

#### [Short finding title] · 🔴 critical | 🟡 important | 🔵 suggestion
- **File**: `path/to/file.tsx` L<line>
- **Rule**: <ID>
- **Issue**: <description>
- **Fix**: <suggestion>

---

### Summary

| Category                    | Result              |
|-----------------------------|---------------------|
| Accessibility               | PASS / n findings   |
| Routing                     | PASS / n findings   |
| Content & Copy (EU AI Act)  | PASS / n findings   |
| Theming & Tailwind          | PASS / n findings   |
| Component Structure         | PASS / n findings   |
| Legal Pages                 | PASS / n findings   |
| TypeScript                  | PASS / n findings   |
| SEO & Meta                  | PASS / n findings   |
| Third-party Embeds          | PASS / n findings   |
| Performance                 | PASS / n findings   |
| Security                    | PASS / n findings   |
| Code Quality                | PASS / n findings   |

**Verdict**: ✅ Ready to merge | ⚠️ Needs attention | 🚫 Block merge
<n> critical · <n> important · <n> suggestions
```
