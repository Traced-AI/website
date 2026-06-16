# Traced AI: Site Copy

**This file is a structural and editorial summary, not the copy itself.** `src/copy.ts` is the source of truth for every rendered string. Each section below records its place in the page, a short summary of intent, the `copy.ts` key(s) holding the exact text, and any editorial context that is not in copy.ts (implementation notes, `[cut]` history, and "not rendered on site" reference notes). To read or change the actual wording, go to the referenced key in `copy.ts`.

Per-route `<title>`/`og:title`/description strings live in each route component (React 19 native metadata), not in copy.ts, so they are indexed in full below.

## Meta

Title convention: `Page Name · Traced AI` (short, symmetric). The `og:title` is separate and pulled from the page's own headline copy, more descriptive or punchy. Do not mirror `<title>` in `og:title`.

| Route | `<title>` | `og:title` | Description |
|-------|-----------|-----------|-------------|
| `/` | Home · Traced AI | Move fast and get investigated. Or use Traced AI. | Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not. |
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
- **Deadline badge** (mono, auto-computed, not in copy.ts): `DeadlineBadge.tsx` computes days remaining from the current date to August 2, 2026. Renders "[N] DAYS UNTIL FULL ENFORCEMENT" in green; past the date, "ENFORCEMENT BEGAN [N] DAYS AGO" in red. Links to the official EC timeline. Never hardcoded.

### Section 2: Regulatory Reality (`regulatoryReality`, `stats`)

Section label, headline, body, two-line closing, and enterprise procurement callout: `regulatoryReality.*`. Source attribution line: `regulatoryReality.sourceAttr` + `sourceUrl`.

**Omnibus note (in `regulatoryReality.body`):** A sentence appended to the body acknowledges the May 2026 Digital Omnibus provisional agreement, which may defer standalone Annex III obligations to December 2027 once formally adopted, while making clear the obligations are unchanged and the date may move. Keeps the section credible with knowledgeable prospects who are already aware of the agreement.

**Procurement callout** (`regulatoryReality.procurement.body`) now answers the "this is for big companies, not startups" objection explicitly: you do not have to be the regulated party, you only have to sell into one, and the buyer's procurement gate is the deal-blocker today. [cut: closing was just "The deal-blocker is today." — expanded so the timing/buyer-gate rebuttal is explicit rather than implied.]

Four stat cards: `stats[]` (each has `value`, `label`, `url`). Sources are on the `CLAUDE.md` allowlist.

**Reference note (not rendered on site):** As of May 2026, the EU Council and Parliament reached a provisional political agreement under the "Digital Omnibus" package. It defers standalone Annex III high-risk obligations (credit scoring, recruitment, biometric identification, etc.) to **2 December 2027**, and Annex I regulated-product obligations (medical devices under MDR/IVDR, etc.) to **2 August 2028**. The deferral takes legal effect only once the Omnibus is formally adopted and published in the Official Journal, expected before 2 August 2026. Until then, 2 August 2026 stands as written for all categories. The obligations themselves are unchanged; only the dates move. Source: https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/

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

**Note on email (not rendered):** contact@traced-ai.com forwards to cmin764@gmail.com. Replies come from the personal address at this stage.

---

## About (`/about`)

Three sections, top to bottom. Anchor IDs `#vision`, `#mission`, `#the-bet`. All text in `about.*`.

### Section 1: Vision (`about.vision`)

Label VISION. Heading "The layer the whole system trusts". Four paragraphs building from "no AI decision about a person's life is a black box" to the closing thesis that the layer everyone plugs into is Traced AI. Text: `about.vision.heading`, `about.vision.paragraphs`.

### Section 2: Mission (`about.mission`)

Label MISSION. Heading "The line I won't cross". Four paragraphs on the non-negotiable rule that a named human signs every life-affecting AI decision, and the refusal to betray that for money. Text: `about.mission.heading`, `about.mission.paragraphs`.

### Section 3: The Bet (`about.theBet`)

Label THE BET. Heading "Before it's obvious". An open co-build invitation: profit-share rather than salary, full honesty about the risk, a bet not a job. The opening links the founder name to wandercode.ltd, and the section closes with a "Talk to me" mailto CTA. Text: `about.theBet.*` (`heading`, `founderName`, `openingAfter`, `paragraphs`, `cta`). The founder link and CTA target are wired in `AboutPage.tsx`.
