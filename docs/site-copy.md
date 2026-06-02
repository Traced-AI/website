# Traced AI: Site Copy

## Meta

- **Title:** Traced AI: EU AI Act audit trail for high-risk AI decisions
- **Description:** Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not.
- **OG Title:** Move fast and get investigated. Or use Traced AI.
- **OG Image alt:** The VP tagline with "break things" struck through and "get investigated" following it with a dotted underline

---

## Page structure

The site is three public-facing pages plus supporting legal routes:

| Route | Page | Sections |
|---|---|---|
| `/` | Home | Hero, Regulatory Reality, Built For, Waitlist Form |
| `/product` | Product | How It Works, Rule Registry |
| `/pricing` | Pricing | Pricing tiers, CTA block |
| `/thank-you` | Thank You | Confirmation + optional call booking |
| `/privacy` | Privacy Policy | Legal |
| `/terms` | Terms of Service | Legal |
| `/dpa` | Data Processing Agreement | Legal |

NavBar appears on every page: logo + Product link + Pricing link + theme toggle + "Join waitlist" button (links to `/#waitlist`).

---

## Home (`/`)

### Section 1: Hero

**Headline (display, two lines):**

Move fast
and ~~break things~~ get investigated

**Implementation note:** Single strikethrough on "break things" as a unit. "get investigated" follows with a dotted underline and hover tooltip: `EU AI Act Art. 99 · up to €15M / 3% for high-risk violations, €35M / 7% for prohibited practices`. Same color as the rest of the line. The dots do the work.

**Subheadline (italic accent):**
"You can't do compliance work with vibes."

**Body:**
August 2, 2026. The EU AI Act begins full enforcement. If your AI system affects credit decisions, employment screening, or functions as a medical device, Annex III already classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.

That standard is harder to meet than most teams expect.

**CTA primary:** Join the waitlist → (links to `/#waitlist`)
**CTA secondary:** See how it works (links to `/product`)
**Below CTA (small):** No card required. No enterprise sales process.

**Deadline badge (mono, auto-computed):**
JavaScript computes days remaining from current date to August 2, 2026. Renders as "[N] DAYS UNTIL FULL ENFORCEMENT" in green text. If today is past August 2, 2026, renders as "ENFORCEMENT BEGAN [N] DAYS AGO" in red text. Badge links to the official EC timeline: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act

---

### Section 2: Regulatory Reality

**Section label:** THE DEADLINE IS REAL

**Headline:**
On August 2nd, "the AI decided" stops being an acceptable answer.

**Stats grid (4 stat cards, each linking to official source):**

| Stat | Label | Source link |
|------|-------|-------------|
| €35M | Maximum fine under the EU AI Act (prohibited AI practices, Article 5; up to €15M/3% for high-risk violations) | https://artificialintelligenceact.eu/article/99/ |
| Art. 14 | Requires demonstrable human oversight, not just claimed oversight | https://artificialintelligenceact.eu/article/14/ |
| Annex III | Lists the AI use cases already classified high-risk by definition | https://artificialintelligenceact.eu/annex/3/ |
| Aug 2, 2026 | Full application of high-risk system requirements per Article 113 | https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act |

**Body:**
The high-risk provisions take full effect on August 2, 2026. If your system handles credit decisions, employment screening, biometric identification, or clinical decision support, Annex III classifies it as high-risk. Decisions made by that system must be logged, explainable, and defensible.

**Closing lines (two-line visual treatment, second line bold):**
When enforcement comes, good intentions don't appear in audit logs.
Documented evidence does.

**Enterprise procurement callout:**
Your enterprise customers are already demanding AI governance evidence. Banks, insurers, and public-sector buyers ask what models you use, how decisions are logged, and what audit evidence exists. The deal-blocker is today.

**Source attribution (12px, muted):**
EU AI Act, Regulation EU 2024/1689, Articles 9, 12, 13, 14, 19, 26(6), Annex III. Official text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689

**Reference note (not rendered on site):** As of May 2026, the EU Council and Parliament reached a provisional agreement under the "Digital Omnibus" package that may extend the deadline for high-risk AI embedded in regulated products. Until formally adopted, August 2, 2026 remains the legally binding date. Source: https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/

---

### Section 3: Built For

**Section label:** WHO IT'S FOR

**Headline:**
If your AI affects access to money, healthcare, or employment, traceability obligations are already unavoidable.

**Three cards:**

**Fintech**
Credit scoring, loan underwriting, fraud detection, AML flags. Traced AI adds AI-Act-ready, tamper-resistant decision logs to existing model-risk governance, without touching raw PII.

*(Reference: Annex III Section 5(b) covers creditworthiness assessment and access to essential private services.)*

**Medtech**
AI medical devices are certified under MDR/IVDR, and notified bodies expect traceable evidence of AI behavior. Traced AI provides the log layer that aligns with both frameworks and positions your evidence chain for incoming EU AI Act obligations.

**HR Automation**
Recruitment, hiring, and workforce assessment AI are high-risk under Annex III. Traced AI gives you per-candidate decision trails and structured audit views for regulators, works councils, and litigators.

---

### Section 4: Waitlist Form

**Section label:** JOIN THE WAITLIST

**Headline:**
We're building for the companies who need this before August 2026.

**Subheadline:**
Two minutes. Tell us what you're building and what you can't yet explain. We'll respond personally.

**Form fields (Tally embed):**

1. **Business email** *(required)*
   Placeholder: `you@company.com`

2. **Company name** *(required)*
   Placeholder: `Acme Financial GmbH`

3. **Your role** *(required)*
   Options: CTO / Head of Engineering / Head of Compliance / Founder / Legal Counsel / Other

4. **What's the one AI decision your team made last quarter that you couldn't fully explain to a stakeholder?** *(required, long text)*
   Placeholder: `Describe a real situation: a model output, a flagged case, a decision that triggered internal questions, or something you'd struggle to justify in a regulatory audit.`
   Help text (below field, muted): We read every response. This shapes what we build first.

**CTA button:** Join the waitlist →

**Fine print below CTA (10px, muted):**
Once you've joined, you can book a 30-minute call. Optional, not required.

**Post-submit:** Tally completion redirects to `/thank-you`.

---

## Product (`/product`)

### Section 5: How It Works

**Section label:** THE MECHANISM

**Headline (two lines):**
Your data never leaves your perimeter.
Your compliance record does.

**Intro:**
Traced AI is the evidentiary and traceability layer for your AI decisions. It does not replace your quality management system or legal counsel. It provides the tamper-evident evidence chain that both depend on.

**Feature list (4 items):**

**Auto-patching SDK**
Two lines of config. The SDK patches your LLM clients (OpenAI, Anthropic, and others) at import time. No manual instrumentation. No restructuring your pipeline.

**Local-first architecture**
Raw inputs and outputs are written to encrypted storage on your own infrastructure. No sensitive data crosses your perimeter. You hold the source of truth.

**Tamper-evident ledger**
SHA-256 hashes of every I/O pair, plus structured rationale, flow to an append-only chained ledger in the cloud. Designed to support the logging requirements of Articles 12 and 19 of the EU AI Act.

**Auditor-ready exports**
Generate structured audit packs aligned to Articles 12, 17, 72, and 86, formatted so your legal team and external auditors can work with them directly.

**Code snippet (for visual credibility):**
```python
import traced_ai

traced_ai.init(
    api_key="...",
    rules="eu-ai-act-annex-iii"
)

# From here, every LLM call is automatically traced
```

---

### Section 6: Rule Registry

**Section label:** THE MOAT

**Headline (two lines):**
We don't just log.
We know what to log, and why.

**Body:**
The hard part of EU AI Act compliance is not logging infrastructure. It is knowing which Articles apply to your decision type, what format an auditor expects, and tracking every guidance update Brussels publishes.

The Traced AI rule registry is a versioned, cryptographically-signed mapping from regulatory text to concrete logging requirements. When new guidance drops, the registry updates. Your evidence posture updates automatically.

**Registry preview card:**

| Field | Value |
|-------|-------|
| Article | 14, Human Oversight (https://artificialintelligenceact.eu/article/14/) |
| Also maps to | Article 12, Record-Keeping; Article 13, Transparency; Article 72, Post-Market Monitoring |
| Risk tier | High-risk |
| Applies to | Credit scoring, clinical decision support, employment screening |
| Logging required | Decision input hash, output hash, structured rationale, reviewer ID, timestamp |
| Last updated | 2026-05-18, v3.1, signed |

**Badge row:** Versioned · Signed · Always current

---

## Pricing (`/pricing`)

### Section 7: Pricing Tiers

**Section label:** PLANS

**Headline:**
Start for free. Pay when you're ready.

**Subheadline:**
The self-hosted viewer is part of the SDK and free on every plan. Your raw data never reaches our servers.

---

**Free**
Email account required. No credit card.

Generate an API key, add two lines of config, and start tracing. No card required.

Includes:
- 10,000 events, 7-day retention
- Hosted dashboard at traced-ai.com
- Full SDK access
- Self-hosted local viewer (always free, all plans)

Badge: Evaluate and integrate

---

**Startup: €100/month**
€1,000/year · 2 months free

250,000 events included per month. Need more? Buy additional packages at €30 per 100k events rather than upgrading tiers.

Includes everything in Free, plus:
- 250k events/month (3M/year on annual plan)
- 3-year event retention (above the Article 19 and 26(6) minimum of 6 months)
- Standard rule registry (EU AI Act Articles 9, 12, 13, 14, 72, 86, Annex III)
- Pay-as-you-go event packages: €30 per 100k
- Email support

Badge: Series A ready

---

**Enterprise: custom pricing**
Negotiated per contract.

Same mechanics as Startup, higher limits, dedicated support. Pricing negotiated per contract based on event volume and required compliance frameworks.

Includes everything in Startup, plus:
- Custom event limits
- Event retention for the operational lifetime of the system (aligned with Articles 12, 18, and 19 obligations)
- Custom rule registry entries written alongside your legal team
- Dedicated support with a named contact
- GDPR Data Processing Agreement
- HIPAA Business Associate Agreement (healthcare)
- EU AI Act compliance documentation package
- Uptime SLA

Badge: Banks, hospitals, insurers

---

**Self-hosted note (below all tiers):**
The local viewer ships with the SDK. Raw AI data never leaves your perimeter, on any plan.

**Pricing note (muted, small):**
250k events covers approximately 8,000 LLM calls per day. If you are expecting higher volume before launch, reach out.

**Reference note (not rendered on site):** Rationale text is stored as structured fields, not free-form strings. This protects against accidental capture of personal data, prompt leakage, or confidential reasoning chains. Field-level configuration lets you control exactly what enters the rationale record. Full documentation in the SDK guide.

### CTA block (below pricing tiers)

**Heading:**
Ready to start?

**CTA:** Join the waitlist → (links to `/#waitlist`)

---

## Thank You Page (`/thank-you`)

**Headline:**
You're on the list.

**Body:**
We'll respond personally within 48 hours.

**Optional next step (visually distinct):**

Want to talk through your situation before launch?

You can book a 30-minute call directly. We'll ask you one question upfront about what you're most concerned with so we come prepared.

**CTA:** Book a call → (links to Cal.eu)

**Fine print (muted):**
The call is for companies actively evaluating whether Traced AI fits their situation. If you're still exploring, the waitlist email is the right next step.

---

## Footer (all pages)

**Tagline:** Evidentiary infrastructure for AI decisions.

**Links:** Privacy · Terms · DPA · contact@traced-ai.com

**Company block:**

DRIFTWARE DYNAMICS LTD
Cyprus Ltd · Reg. No. HE 474529 · VAT: 60167558M
Tefkrou Anthia 63, MEZARINA COURT A, Flat/Office 5, Agia Napa, Famagusta, Cyprus 5330

**Note on email:** contact@traced-ai.com forwards to cmin764@gmail.com. Replies come from the personal address at this stage.

**Legal note (10px, muted):**
Traced AI does not provide legal advice. This product supports technical compliance documentation. It is not a substitute for a quality management system, legal counsel, or the full set of obligations under the EU AI Act. Consult qualified legal counsel for regulatory advice specific to your jurisdiction and use case.
