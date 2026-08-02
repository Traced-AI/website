# Traced AI: Site Copy

**This file is a structural and editorial summary, not the copy itself.** `src/copy.ts` is the source of truth for every rendered string. Each section below records its place in the page, a short summary of intent, the `copy.ts` key(s) holding the exact text, and any editorial context that is not in copy.ts (implementation notes, `[cut]` history, and "not rendered on site" reference notes). To read or change the actual wording, go to the referenced key in `copy.ts`.

Per-route `<title>`/`og:title`/description strings live in each route component (React 19 native metadata), not in copy.ts, so they are indexed in full below.

## Meta

Title convention: `Page Name · Traced AI` (short, symmetric). The `og:title` is separate and pulled from the page's own headline copy, more descriptive or punchy. Do not mirror `<title>` in `og:title`.

| Route | `<title>` | `og:title` | Description |
|-------|-----------|-----------|-------------|
| `/` | Home · Traced AI | Move fast and get investigated. Or use Traced AI. | Tamper-evident audit infrastructure for the EU AI Act’s high-risk obligations. Your data stays local. Your compliance record does not. |
| `/product` | Product · Traced AI | Your data stays local. Your compliance record does not. | Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance. |
| `/pricing` | Pricing · Traced AI | Start for free. Pay when you're ready. | Free tier to enterprise. Start tracing AI decisions in minutes. |
| `/thank-you` | Thank You · Traced AI | You're on the list. You'll hear back from me personally. | I'll respond personally within 48 hours. |
| `/privacy` | Privacy Policy · Traced AI | Privacy Policy · Traced AI | How Driftware Dynamics Ltd handles personal data for traced-ai.com visitors and customers. |
| `/terms` | Terms and Conditions · Traced AI | Terms and Conditions · Traced AI | Terms governing use of the Traced AI service. |
| `/dpa` | Data Processing Agreement · Traced AI | Data Processing Agreement · Traced AI | GDPR Article 28 DPA between Driftware Dynamics Ltd and customers using the Traced AI service. |
| `/about` | About · Traced AI | About Traced AI | The vision, mission, and open invitation to co-build Traced AI. |
| `*` (NotFound) | 404 · Traced AI | (noindex, no OG needed) | (noindex, no description needed) |

- **OG Image:** `og-image.png` (1200x630, ~50 KB). `og:image:alt`: "Traced AI: EU AI Act audit trail for high-risk AI decisions"

---

## Page structure

This table is the canonical record of page → section → background sequence (the dev-guide references it for the bg-rhythm algorithm). `bg-1` is the white card surface, `bg-0` the warm off-white base.

| Route | Page | Section sequence (background) |
|---|---|---|
| `/` | Home | Hero (`bg-1`) → Regulatory Reality (`bg-0`) → Built For (`bg-1`) → Waitlist Form (`bg-0`) → Footer (`bg-1`) |
| `/product` | Product | How It Works (`bg-1`) → Boundaries (`bg-0`) → Rule Registry (`bg-1`) → Footer (`bg-1`) |
| `/pricing` | Pricing | Pricing tiers (`bg-1`) → CTA block (`bg-0`) → Footer (`bg-1`) |
| `/about` | About | Vision (`bg-1`) → Mission (`bg-0`) → The Bet (`bg-1`) → Footer (`bg-1`, separated by border) |
| `/thank-you` | Thank You | Confirmation + optional call booking |
| `/privacy` `/terms` `/dpa` | Legal | Single legal body per page |

About anchor IDs: `#vision`, `#mission`, `#the-bet`.

NavBar appears on every page: logo image (clickable, links to `/`) + primary links (`mainNav` in copy.ts) + theme toggle + "Join waitlist" button (links to `/#waitlist`). The logo is an image (`logo-light.png` / `logo-dark.png`), not the text "Traced AI"; its alt text is structural and not in copy.ts.

---

## Home (`/`)

### Section 1: Hero (`hero`)

Headline, subheadline, body, and CTAs: `hero.*` (`line1`, `line2Strike`, `line2Highlight`, `subheadline`, `body1`, `body2`, `ctaPrimary`, `ctaSecondary`, `belowCta`).

**Implementation notes:**
- Headline treats "break things" as a single strikethrough unit, then "get investigated" follows with a dotted underline and a hover tooltip (`hero.tooltip`), same color as the rest of the line. The dots do the work.
- Subheadline is an italic accent line.
- `body2` carries the witness one-liner (the why + the who behind each decision, tamper-evident, "whether you comply stays your call"). This is the one-breath product framing, deliberately placed in the hero. [cut: "That standard is harder to meet than most teams expect." — abstract difficulty line, replaced by the witness framing so a curious visitor learns what the product *is*, not just that the standard is hard.]
- CTA primary links to `/#waitlist`, secondary to `/product`.
- **Deadline badge** (mono, auto-computed, not in copy.ts): `DeadlineBadge.tsx` computes days remaining from the current date to December 2, 2027 (`ANNEX_III_APPLICATION_DATE` in `src/config.ts`), the date standalone Annex III high-risk obligations apply. Renders "[N] DAYS UNTIL HIGH-RISK OBLIGATIONS APPLY" in green; past the date, "HIGH-RISK OBLIGATIONS IN EFFECT FOR [N] DAYS" in red. Links to the official EC timeline. Never hardcoded. [cut: "[N] DAYS UNTIL FULL ENFORCEMENT" / "ENFORCEMENT BEGAN [N] DAYS AGO", pointed at 2026-08-02, pre-Omnibus labels.]

### Section 2: Regulatory Reality (`regulatoryReality`, `stats`)

Section label, headline, body, two-line closing, and enterprise procurement callout: `regulatoryReality.*`. Source attribution line: `regulatoryReality.sourceAttr` + `sourceUrl`.

**Post-Omnibus rewrite (`regulatoryReality.headline` + `body`):** The Digital Omnibus is now adopted law (Regulation (EU) 2026/1744, in force 27 July 2026), so the headline and body no longer hedge on adoption. Headline: "The deadline moved. The obligations didn’t." Body states the fixed December 2, 2027 Annex III date directly. [cut: headline "On August 2nd, “the AI decided” stops being an acceptable answer."] [cut: body sentence "A provisional political agreement in May 2026 (Digital Omnibus) may defer standalone Annex III obligations to December 2027 once formally adopted. The obligations are unchanged; the date may move."]

**In force now callout (`regulatoryReality.inForceNow`, new key):** A short callout between the question/punchline block and the procurement callout, same `.callout` treatment. Carries the dual-date framing’s other half: enforcement of GPAI rules, Article 5 prohibitions, Article 50 transparency, and AI literacy began August 2, 2026, plus the single approved contextual line on Article 50 (disclosure duties apply now, content-marking phases in through December 2, 2026 for pre-existing systems per the Art. 50(2) grace period), plus the evidence-cannot-be-backfilled runway argument tied to the December 2, 2027 Annex III date. No new section, no product claim about Article 50. [cut: earlier draft said content marking "already apply" with no grace-period qualifier, corrected during frontend-review since it overstated the obligation for systems placed on market before 2 Aug 2026.]

**Procurement callout** (`regulatoryReality.procurement.body`) now answers the "this is for big companies, not startups" objection explicitly: you do not have to be the regulated party, you only have to sell into one, and the buyer's procurement gate is the deal-blocker today. [cut: closing was just "The deal-blocker is today." — expanded so the timing/buyer-gate rebuttal is explicit rather than implied.]

Four stat cards: `stats[]` (each has `value`, `label`, `url`). Sources are on the `CLAUDE.md` allowlist. [cut: stats[3] read value "Aug 2, 2026", label "Full application of high-risk system requirements per Article 113": replaced with the fixed December 2, 2027 date now that the Omnibus is adopted.]

**Canonical regulatory baseline (not rendered on site; other docs reference this note instead of restating it):** The Digital Omnibus was adopted as **Regulation (EU) 2026/1744**, published in the Official Journal 24 July 2026, in force 27 July 2026, amending Regulation (EU) 2024/1689. Standalone Annex III high-risk obligations (Art. 6(2)): fixed date **2 December 2027** (the conditional standards-availability trigger was dropped). Annex I regulated-product route (Art. 6(1), e.g. medical devices under MDR/IVDR): **2 August 2028**; Machinery Regulation products are excluded from the high-risk regime entirely. Applying and enforced since **2 August 2026**: GPAI rules, Article 5 prohibitions, Article 50 transparency, AI literacy. Grace periods: Article 50(2) marking for pre-2-Aug-2026 synthetic-content systems, and the new Article 5 prohibitions (CSAM, non-consensual intimate imagery), both transitional to 2 December 2026. Regulatory sandboxes: at least one per Member State by 2 August 2027. Unchanged: fine tiers (Art. 99), Articles 11, 12, 14, 19, 26(6), 72, 86, Annex IV. Obligations unchanged; only the dates moved. Source: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act [cut: prior note described the Omnibus as a provisional agreement "expected before 2 August 2026"; superseded now that it is adopted law.]

### Section 3: Built For (`builtFor`)

Section label, headline, and three industry cards (Fintech, Medtech, HR Automation): `builtFor.*` (`headline`, `cards[]`).

**Reference note:** Annex III Section 5(b) covers creditworthiness assessment and access to essential private services (backs the Fintech card).

**HR Automation card:** Updated to surface the candidate notification duty (Art. 26(11)) and the right to explanation (Art. 86) — obligations deployers most often miss. The card now reads: candidates have a right to know AI assessed them and to receive an explanation on request; Traced AI provides the per-candidate trail that makes both answerable. Key: `builtFor.cards[2].body`.

### Section 4: Waitlist Form (`waitlist`)

Section label, headline, subheadline, and fine print: `waitlist.*`.

Voice: the headline stays company "we" ("We're building for the companies..."), but the reply promise in the subheadline is deliberately founder "I" ("You'll hear back from me personally") because the response is a personal act by the solo founder. Revert to "we" when the team grows. [cut: "We'll respond personally." — company-voice version of the reply promise, swapped to founder voice while solo.]

**Tally embed (form fields are in the Tally config, not copy.ts):**
1. Business email (required) — placeholder `you@company.com`
2. Company name (required) — placeholder `Acme Financial GmbH`
3. Your role (required) — CTO / Head of Engineering / Head of Compliance / Founder / Legal Counsel / Other
4. "What's the one AI decision your team made last quarter that you couldn't fully explain to a stakeholder?" (required, long text) — with muted help text: "We read every response. This shapes what we build first."

Post-submit: Tally completion redirects to `/thank-you`.

---

## Product (`/product`)

### Section 5: How It Works (`howItWorks`)

Two-line headline, intro, and four-item feature list (Auto-patching SDK, Local-first architecture, Tamper-evident ledger, Auditor-ready exports): `howItWorks.*` (`headline1`, `headline2`, `intro`, `features[]`).

**Intro framing:** `howItWorks.intro` leads with the witness frame and the dash-cam analogy, kept with its rule-registry qualifier ("a dash-cam that knows which moments matter legally") so it never reads as commodity logging. It names the two things recorded: the **why** (rationale) and the **who** (the human who approved the decision). [cut: "Traced AI is the evidentiary and traceability layer for your AI decisions. It does not replace your quality management system or legal counsel. It provides the tamper-evident evidence chain that both depend on." — the QMS/counsel boundary moved to the Boundaries section to avoid repeating it; the intro now carries the positive frame.]

**Implementation note:** a Python code snippet renders alongside for visual credibility (lives in the component, not copy.ts):
```python
import traced_ai

traced_ai.init(
    api_key="...",
    rules="eu-ai-act-annex-iii"
)

# From here, every LLM call is automatically traced
```

### Section 5b: Boundaries (`boundaries`)

Renders between How It Works and Rule Registry. Section label "WHERE THE LINE IS", heading "What Traced AI is not", and three items stating the boundaries as features: `boundaries.*` (`sectionLabel`, `heading`, `items[]`).

Intent: turn the limits into a self-qualification and a differentiator. The three items map to the competitive landscape (not named on site): **Not a compliance product** (the judgment stays with counsel/QMS; also the new home of the QMS/counsel boundary moved out of `howItWorks.intro`), **Not a guardrail** (it never intervenes in a decision, unlike a control plane), **Not an eval tool** (it does not grade quality, and the local-first/hashes-only architecture is framed as the structural reason: proving a decision needs only its hash and its signer, not the raw data). Component: `src/sections/Boundaries.tsx`, heading is an `<h2>` (Product's single `<h1>` is in How It Works).

### Section 6: Rule Registry (`ruleRegistry`)

Two-line headline, two body paragraphs, a registry preview card (field/value rows, one with a link), and a badge row: `ruleRegistry.*` (`headline1`, `headline2`, `body`, `body2`, `rows[]`, `badges[]`).

---

## Pricing (`/pricing`)

### Section 7: Pricing Tiers (`pricing`)

Section label, headline, subheadline, three tiers (Free, Startup, Enterprise) with their features and badges, the self-hosted callout, and the pricing note: `pricing.*` (`headline`, `subheadline`, `tiers[]`, `selfHostedHeading`, `selfHostedNote`, `pricingNote`, `featuredTag`).

**Reference note (not rendered on site):** Rationale text is stored as structured fields, not free-form strings. This protects against accidental capture of personal data, prompt leakage, or confidential reasoning chains. Field-level configuration controls exactly what enters the rationale record. Full documentation in the SDK guide.

### CTA block (below tiers)

Heading and CTA: `pricing.readyHeadline` + the "Join the waitlist →" button (links to `/#waitlist`).

---

## Thank You Page (`/thank-you`)

Headline, body, optional call-booking block, and fine print: `thankYou.*` (`headline`, `body`, `callBlock.{heading,body,cta}`, `finePrint`). The "Book a call →" CTA links to Cal.eu.

Voice: the reply and the 1:1 call are personal acts by the solo founder, so `body`, `callBlock.body`, and `finePrint` use founder "I" ("I'll respond", "I'll ask... so I come prepared", "I'll stop"). Revert to "we" when the team grows. [cut: company-voice versions — "We'll respond personally within 48 hours.", "We'll ask you one question upfront... so we come prepared.", "...the first 10 minutes, we stop."]

[cut: "The call is for companies actively evaluating whether Traced AI fits their situation. If you're still exploring, the waitlist email is the right next step." — gave people an exit ramp instead of removing their fear of a sales call.]

---

## Footer (all pages)

Tagline, legal nav links (Privacy · Terms · DPA), contact email, and the legal disclaimer: `footer.*` (`tagline`, `navLinks[]`, `contactEmail`, `legal`).

**Company block** (`footer.company`): two-column layout. Left column is the entity name + registration line; right column is the three-line registered address, right-aligned. **Values are not duplicated here** — they live in `footer.company` (render) with the canonical legal block in `CLAUDE.md` hard rules.

**Regulatory sync note** (`footer.regulatoryNote`): a secondary footnote (slightly dimmed) stating when the regulatory content on the site was last reviewed, and against which instruments (EU AI Act Regulation (EU) 2024/1689, as amended by Regulation (EU) 2026/1744, the Digital Omnibus). Update the date in `copy.ts` any time law-related visible content changes. The CLAUDE.md hard rules define exactly which changes trigger an update.

**Copyright line** (`footer.copyright`): rendered below `footer.regulatoryNote` using `.footnote` styling. Static parts (`brand: 'Traced AI'`, `rightsReserved: 'All rights reserved.'`) live in `copy.ts`; the year is computed live in `Footer.tsx` with `new Date().getFullYear()` and is never hardcoded.

**Note on email (not rendered):** contact@traced-ai.com forwards to cmin764@gmail.com. Replies come from the personal address at this stage.

**Legal-page sub-processor disclosure:** `/privacy` sections 7 and 8 and `/dpa` Annex III now disclose the planned product backend sub-processors (Fly.io, Supabase, Upstash, Clerk, Stripe) in clearly labeled tables ("active when the product backend launches"). Both QA `<Note>` placeholders from the DPA have been removed. These disclosures do not trigger a regulatory sync date update (no law content changed).

---

## About (`/about`)

Three sections, top to bottom. Anchor IDs `#vision`, `#mission`, `#the-bet`. All text in `about.*`.

### Section 1: Vision (`about.vision`)

Label VISION. Heading "The layer the whole system trusts". Four paragraphs building from "no AI decision about a person's life is a black box" to the closing thesis that the layer everyone plugs into is Traced AI. Text: `about.vision.heading`, `about.vision.paragraphs`.

### Section 2: Mission (`about.mission`)

Label MISSION. Heading "The line I won't cross". Four paragraphs on the non-negotiable rule that a named human signs every life-affecting AI decision, and the refusal to betray that for money. Text: `about.mission.heading`, `about.mission.paragraphs`.

### Section 3: The Bet (`about.theBet`)

Label THE BET. Heading "Before it's obvious". An open co-build invitation: profit-share rather than salary, full honesty about the risk, a bet not a job. The opening links the founder name to wandercode.ltd, and the section closes with a "Talk to me" mailto CTA. Text: `about.theBet.*` (`heading`, `founderName`, `openingAfter`, `paragraphs`, `cta`). The founder link and CTA target are wired in `AboutPage.tsx`.
