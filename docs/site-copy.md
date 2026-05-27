# Traced AI: Landing Page Copy

## Meta

- **Title:** Traced AI: EU AI Act audit trail for high-risk AI decisions
- **Description:** Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not.
- **OG Title:** Move fast and get investigated. Or use Traced AI.
- **OG Image alt:** The VP tagline with "break things" struck through and "get investigated" following it with a dotted underline

---

## Section 1: Hero

**Headline (display, two lines):**

Move fast
and ~~break things~~ get investigated

**Implementation note:** Single strikethrough on "break things" as a unit. "get investigated" follows with the dotted underline and hover tooltip (EU AI Act Art. 99, fines up to €15M/3% for high-risk violations or €35M/7% for prohibited practices). Same color as the rest of the line. The dots do the work.

**Subheadline (italic accent):**
"You can't do compliance work with vibes."

**Body:**
August 2, 2026. The EU AI Act begins full enforcement. If your AI system affects credit decisions, employment screening, or medical outcomes, Annex III already classifies it as high-risk. Every decision must be logged, explainable, and defensible.

Most companies are not ready.

**CTA primary:** Join the waitlist →
**CTA secondary:** See how it works
**Below CTA (small):** No card required. No enterprise sales process.

**Deadline badge (mono, auto-computed):**
Spec: JavaScript computes days remaining from current date to August 2, 2026. Renders as "[N] DAYS UNTIL FULL ENFORCEMENT" in green text. If today is past August 2, 2026, renders as "ENFORCEMENT BEGAN [N] DAYS AGO" in red text. Badge links to the official EC timeline: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act

---

## Section 2: The Regulatory Reality

**Section label (mono, uppercase):** THE DEADLINE IS REAL

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
The EU AI Act (Regulation EU 2024/1689) entered into force August 1, 2024. The high-risk provisions take full effect on August 2, 2026. If your AI system is involved in credit decisions, employment screening, biometric identification, or clinical decision support, Annex III most likely classifies it as high-risk. Not every AI system touching people is in scope, but the specific categories your legal team cares about almost certainly are.

The question your legal team will ask is not "were you compliant?" It is "can you prove it?"

**Enterprise procurement note (distinct callout, not footnote):**
Your enterprise customers are already sending AI governance questionnaires before regulators do. Procurement reviews from banks, insurers, and public-sector buyers now routinely ask: what models are used, how decisions are logged, whether AI outputs are reviewable, and what audit evidence exists. That pain is immediate. The regulatory deadline adds urgency, but the deal-blocker is today.

**Footnote (10px, muted, linked):**
Note: As of May 2026, the EU Council and Parliament reached a provisional agreement under the "Digital Omnibus" package that may extend the deadline for high-risk AI embedded in regulated products. Until formally adopted, August 2, 2026 remains the legally binding date. Enterprise procurement requirements do not wait for regulators.
Source: https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/

**Source attribution (12px, muted):**
EU AI Act, Regulation EU 2024/1689, Articles 9, 12, 13, 14, 19, 26(6), Annex III. Official text: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689

---

## Section 3: How It Works

**Section label:** THE MECHANISM

**Headline (two lines):**
Your data never leaves your perimeter.
Your compliance record does.

**Body (short, above the feature list):**
Traced AI is the evidentiary and traceability layer for your AI decisions. It does not replace your quality management system or legal counsel. It provides the tamper-evident evidence chain that both depend on.

**Feature list (4 items):**

**Auto-patching SDK**
Two lines of config. The SDK patches your LLM clients (OpenAI, Anthropic, and others) at import time. No manual instrumentation. No restructuring your pipeline.

**Local-first architecture**
Raw inputs and outputs are written to encrypted storage on your own infrastructure. No sensitive data crosses your perimeter. You hold the source of truth. The self-hosted viewer ships as part of the SDK and is always free, on every plan.

**Tamper-evident ledger**
SHA-256 hashes of every I/O pair, plus structured rationale, flow to an append-only chained ledger in the cloud. Cryptographically verifiable. Immutable by design. Designed to support the logging requirements of Articles 12 and 19 of the EU AI Act.

**Auditor-ready exports**
Generate structured audit packs aligned to Articles 12, 17, 72, and 86. Formatted so your legal team and external auditors can work with them directly, without building a separate data procurement process.

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

## Section 4: The Rule Registry

**Section label:** THE MOAT

**Headline (two lines):**
We don't just log.
We know what to log, and why.

**Body:**
The hardest part of EU AI Act compliance is not building logging infrastructure. It is knowing exactly which Articles apply to your decision type, what evidence format satisfies an auditor, and how that changes with every guidance document Brussels publishes.

The Traced AI rule registry is a versioned, cryptographically-signed mapping from regulatory text to concrete logging requirements. When new guidance drops, the registry updates. Your evidence posture updates automatically.

This reduces the repetitive interpretation work your legal and compliance teams otherwise spend on every model update, every new use case, every new guidance note.

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

## Section 5: Built For

**Section label:** WHO IT'S FOR

**Headline:**
If your AI affects access to money, healthcare, or employment, traceability obligations are already unavoidable.

**Three cards:**

**Fintech**
Credit scoring, loan underwriting, fraud detection, AML flags. These use cases are explicitly high-risk under Annex III (creditworthiness and access to essential financial services). Banks have model-risk machinery but not AI-Act-ready, tamper-resistant decision logs tied to per-decision explanations. Traced AI plugs into existing governance without touching raw PII.

**Medtech**
AI that functions as a medical device or as a safety component of one is automatically high-risk under both the EU AI Act and MDR/IVDR. Notified bodies will expect traceable evidence of AI behavior and incident linkage. Traced AI provides a neutral log layer that aligns with device technical files and post-market surveillance requirements.

**HR Automation**
Recruitment, hiring scores, performance assessment, and workforce management AI are high-risk under Annex III. Most HR vendors do not yet have serious model governance. Traced AI gives you per-candidate decision trails plus structured audit views you can show to regulators, works councils, and litigators.

---

## Section 6: Pricing

**Section label:** PLANS

**Headline:**
Start for free. Pay when you're ready.

**Subheadline:**
The self-hosted viewer is part of the SDK and free on every plan. Your raw data never reaches our servers.

---

**Free**
Email account required.

Generate an API key, add two lines of config, and start tracing. No card required.

Includes:
- 10,000 events, 7-day retention
- Hosted dashboard at traced-ai.com
- Full SDK access
- Self-hosted local viewer (always free, all plans)

Best for evaluating the integration before committing.

---

**Startup: €100/month**
Credit card required. Cancel any time.

250,000 events included per month. Need more? Buy additional packages at €30 per 100k events rather than upgrading tiers.

Annual option: €1,000/year (2 months free) with 3M events total.

Includes everything in Free, plus:
- 250k events/month (3M/year on annual plan)
- 3-year event retention (above the Article 19 and 26(6) minimum of 6 months; covers most EU sector audit windows)
- Standard rule registry (EU AI Act Articles 9, 12, 13, 14, 72, 86, Annex III)
- Pay-as-you-go event packages: €30 per 100k
- Email support

Best for Series A companies building the compliance baseline before August 2026.

**Pricing note (muted, small):** 250k events covers approximately 8,000 LLM calls per day. Event limits will be revisited once real usage data confirms the cost model. If you are expecting higher volume before launch, reach out.

---

**Enterprise: custom pricing**
Same mechanics as Startup, higher limits, dedicated support. Pricing negotiated per contract based on event volume and required compliance frameworks.

Includes everything in Startup, plus:
- Custom event limits
- Event retention for the operational lifetime of the system (aligned with Articles 12, 18, and 19 obligations; longer sector-specific retention negotiated per contract)
- Custom rule registry entries written alongside your legal team
- Dedicated support with a named contact
- GDPR Data Processing Agreement
- HIPAA Business Associate Agreement (healthcare)
- EU AI Act compliance documentation package
- Uptime SLA

Best for banks, hospitals, and insurers with existing compliance programs and external audit requirements.

---

**Self-hosted note (below all tiers):**

The local viewer is always free and ships as part of the SDK. It reads your local encrypted store, joins it with cloud event records, and renders a complete tamper-evident ledger timeline on your own machine. Your raw AI inputs and outputs never leave your perimeter, on any plan.

**Note on rationale fields:** Rationale text is stored as structured fields, not free-form strings. This protects against accidental capture of personal data, prompt leakage, or confidential reasoning chains. Field-level configuration lets you control exactly what enters the rationale record. Full documentation in the SDK guide.

---

## Section 7: Waitlist Form

**Section label (mono):** JOIN THE WAITLIST

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
Once you've joined, you'll have the option to book a 30-minute call to talk through your specific situation. That step is optional, not required.

**Post-submit behaviour:**
Tally completion redirects to `/thank-you` on the same site.

---

## Section 7b: Thank You Page (/thank-you)

**Headline:**
You're on the list.

**Body:**
We'll respond personally within 48 hours.

**Optional next step (visually distinct, below the confirmation):**

**Want to talk through your situation before launch?**

You can book a 30-minute call directly. We'll ask you one question upfront about what you're most concerned with so we come prepared.

**CTA:** Book a call → (links to Cal.com)

**Fine print (muted):**
The call is for companies actively evaluating whether Traced AI fits their situation. If you're still exploring, the waitlist email is the right next step.

---

## Section 8: Footer

**Tagline:** Traced AI, evidentiary infrastructure for AI decisions.

**Links:** Privacy Policy · Terms · contact@traced-ai.com

**Company block (full):**

DRIFTWARE DYNAMICS LTD
Cyprus Ltd · Reg. No. HE 474529 · VAT: 60167558M
Tefkrou Anthia 63, MEZARINA COURT A, Flat/Office 5, Agia Napa, Famagusta, Cyprus 5330

**Note on email:** The contact@traced-ai.com alias should forward to cmin764@gmail.com via traced-ai.com DNS. Replies come from the personal address for the early stage.

**Legal note (10px, muted):**
Traced AI does not provide legal advice. This product supports technical compliance documentation. It is not a substitute for a quality management system, legal counsel, or the full set of obligations under the EU AI Act. Consult qualified legal counsel for regulatory advice specific to your jurisdiction and use case.
