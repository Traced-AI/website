# Traced AI: Go-to-Market Blueprint

> Milestones 0 through 7: blank page to first paying customer, and the growth path after.

---

## What Traced AI Actually Is

This distinction matters before anything else, because getting it wrong collapses trust with the exact buyers you need.

Traced AI is the **evidentiary and traceability layer** for AI decisions. It is not a compliance platform. It does not satisfy the EU AI Act on its own. The Act requires a quality management system, risk management, technical documentation, human oversight procedures, post-market monitoring, and more. Traced AI covers the runtime evidence chain: what the model received, what it returned, who reviewed it, what rationale was recorded, and that none of it was altered afterward.

That scope is exactly right. It is specific, defensible, and genuinely hard to build. It is also exactly what auditors and legal teams need when they ask "show me the decisions." Do not oversell past that boundary. Every overpromise in this space is a trust-collapse waiting to happen, and the buyers you are targeting will notice.

---

## The Most Immediate GTM Wedge

Regulatory enforcement on August 2, 2026 creates urgency. But the faster-burning pain right now is enterprise procurement.

Large enterprises are already sending AI governance questionnaires to their vendors: what models are used, how decisions are logged, whether outputs are reviewable, whether humans can intervene, what audit evidence exists. This is happening before formal enforcement. A fintech that cannot answer these questions is losing deals today, not in 2026.

That means your best opening line is not "prepare for the regulator." It is:

"Your enterprise customers are already asking for AI governance evidence. Can you produce it in 48 hours?"

That question has an immediate yes/no answer. Run both outreach variants (regulatory and liability) and watch which one gets a response within 24 hours. The procurement angle may outperform both.

---

## Tech Stack

> Stack note: the original plan called for Next.js 15 + shadcn/ui. The marketing site actually shipped on a static Vite + React SPA (no Next.js, no shadcn). The table below reflects the shipped reality; the GTM, pricing, and milestone content elsewhere in this doc is unaffected.

### Why Vite + React over Next.js

A waitlist landing page needs no SSR, no API routes, and no server runtime. Vite builds a fully static SPA that deploys to Vercel with zero infra cost and the fastest possible dev loop. Tailwind v4's CSS-first tokens removed the main reason to lean on shadcn/Next.js. If the product dashboard later needs server features, it can be a separate app rather than forcing the marketing site onto a heavier framework now.

### Full Stack for Milestone 1

| Concern | Choice | Why |
|---------|--------|-----|
| Framework | Vite 6 + React 19 + TypeScript (static SPA) | No server cost, fastest dev loop, no SSR needed for a landing page |
| Routing | react-router-dom 7 (declarative SPA mode) | Client-side routing for the handful of marketing + legal routes |
| Package manager | Bun | Speed, already in workflow |
| Styling | Tailwind CSS v4 (CSS-first `@theme inline` tokens in `src/index.css`) | Design tokens as CSS variables, no JS config, no shadcn dependency |
| Fonts | League Spartan (display) + Montserrat (body) + JetBrains Mono (mono) | Locked pairing; loaded with `font-display: swap` |
| Waitlist form | Tally.so embedded | Stores responses, triggers Google Sheets export, no backend |
| Thank-you page | `/thank-you` route on the same Vite SPA | Full control over copy and Cal.eu embed |
| Call booking | Cal.eu embedded on `/thank-you` | Optional post-waitlist step, with framing question |
| Payments | Stripe | Subscriptions, pay-as-you-go packages, invoicing, EU VAT handling |
| Analytics | Vercel Analytics | Privacy-respecting, zero setup, free on Hobby |
| Deploy | Vercel, auto-deploy from `main` | 30 seconds from push to live |
| Domain | traced-ai.com | Point DNS to Vercel |

No backend for Milestone 1. Tally handles storage, notification, and Sheets export. Adding a backend before 10 qualified signups is premature. This is the right call for the marketing site. It does not apply to how API keys are issued in the product itself (see pricing section).

### Why Stripe

- Handles EUR subscriptions natively, including EU VAT calculation and collection (critical for selling to EU companies from a Cyprus entity)
- Supports per-unit overages via metered billing, which is exactly the pay-as-you-go event package model
- Stripe Invoicing covers Enterprise contracts with custom amounts
- PCI compliance is handled without touching card data directly
- Stripe Tax automates VAT obligations across EU member states

Set up Stripe before the first paid customer, not after. The integration on the Startup tier needs: a monthly subscription product (€100/mo), a yearly subscription product (€1,000/yr), and a metered add-on for event packages (€30 per 100k). Annual plan event pooling (3M total, not 250k/month) requires a bit of custom logic, but Stripe's usage records API handles it cleanly.

### Tailwind Design Tokens

Tokens live in `src/index.css`, not a JS config. Tailwind v4 is CSS-first: raw values are declared in `:root`, dark-mode overrides in `[data-theme="dark"]`, and the tokens are exposed to utility classes via `@theme inline`. `src/index.css` is the authoritative source; the shape is:

```css
:root {
  --bg-0: #F7F7F5;  /* page root (light) */
  --bg-1: #FFFFFF;  /* cards, sections */
  --tx-0: #1C1C22;  /* primary text */
  --ac:   #0D8A98;  /* teal accent (light mode) */
  /* ...full set in src/index.css... */
}

[data-theme="dark"] {
  /* dark overrides, e.g. --ac maps to the lighter teal */
}

@theme inline {
  --color-bg-0: var(--bg-0);
  --color-ac:   var(--ac);
  /* ...maps tokens to bg-*/text-*/border-* utilities... */
}
```

---

## Pricing Model

### On Pricing Trust

€100/month may feel too cheap for regulated infrastructure. This is worth testing explicitly. Banks and hospitals spend thousands per month on observability, compliance, and risk tooling. Cheap pricing in this context can signal "developer hobby project" rather than "serious infrastructure." The first 3 demo calls should probe this directly: "What would you expect to pay for this?" If the answer is consistently above €100, revise upward before launch. The Startup tier at €500/month with the same feature set is entirely defensible, possibly more so.

### Cost Basis

Each cloud event stores: SHA-256 hash (32 bytes), structured rationale (~200 bytes), metadata (~100 bytes), chain link hash (32 bytes). Roughly 400 bytes per event. The raw LLM I/O never leaves the client.

- 250k events/month per customer = 100MB cloud storage
- 3-year Startup retention = 3.6GB per customer
- Infrastructure cost at scale: under €3/customer/month on Supabase + Fly.io
- Stripe fee on €100 (EU card): ~€1.65
- Gross margin at scale: above 92% before support and overhead

**Important caveat:** rationale payloads and nested event structures can grow quickly once customers instrument richer decisions. Log volume in medtech and fintech will likely exceed the 400-byte estimate per event. Instrument real per-customer storage costs from day one and adjust limits accordingly before public launch.

### Data Retention Basis

Article 12 governs logging capability over the operational lifetime of the system. It does not specify retention duration. Retention minimums are specified in Article 19 (providers, 6 months) and Article 26(6) (deployers, 6 months minimum). Article 18 requires technical documentation to be kept for 10 years after the system is placed on the market.

Sector-specific law adds more: financial services commonly requires 5 to 7 years, medical device regulation extends to the lifetime of the device.

Tiered retention:
- **Startup**: 3 years. Well above the 6-month minimum in Articles 19 and 26(6). Covers most EU sector-specific audit windows. The natural upgrade trigger to Enterprise is when sector law or customer contracts require longer.
- **Enterprise**: For the operational lifetime of the system, negotiated per contract. Aligns with Article 12's expectation of logging over system lifetime and Article 18's 10-year documentation obligation.

### Tiers

**Free**
Email-verified account required. No credit card.
- 10,000 events, 7-day retention
- Full SDK access including self-hosted viewer
- Hosted dashboard at traced-ai.com
- Purpose: evaluation and integration testing only

**Note on the "no auth" plan:** An unauthenticated API key path is acceptable for a development sandbox. It is not acceptable for a product positioned as audit infrastructure. Even the Free tier should require email verification. Banks and hospitals will ask about SSO, RBAC, and key management before they touch the product. Start with email auth and make it clear that Enterprise brings full identity controls. Do not let "frictionless onboarding" undermine the security posture signal.

**Startup: €100/month or €1,000/year**
Credit card required at signup.
- 250k events/month on monthly plan
- 3M events total on annual plan (saves €200 vs monthly)
- Additional events: €30 per 100k, on demand, no tier upgrade
- 3-year event retention (Articles 19 and 26(6) compliant minimum, plus sector buffer)
- Standard rule registry (EU AI Act Articles 9, 12, 13, 14, 72, 86, Annex III)
- Email support

**Enterprise: custom pricing**
Same mechanics as Startup with higher limits and dedicated support.
- Custom event limits (negotiated based on volume)
- Event retention for the operational lifetime of the system
- Custom rule registry entries, written with client's legal team
- Dedicated support, named contact
- GDPR Data Processing Agreement
- HIPAA Business Associate Agreement (healthcare)
- EU AI Act compliance documentation package
- SSO, RBAC, audit log of admin actions, customer-managed encryption keys
- Uptime SLA

**First customer offer**: Enterprise tier at Startup pricing in exchange for a case study and 3 months of direct product feedback. The case study is worth more than the margin.

**Stripe billing setup per tier:**
- Free: email-verified account, no Stripe, API key generated after email confirmation
- Startup monthly: Stripe subscription, `price_startup_monthly`, €100/mo
- Startup annual: Stripe subscription, `price_startup_annual`, €1,000/yr, 3M event pool tracked via usage records
- Overage packages: Stripe one-time payment, `price_event_pack_100k`, €30, triggered from dashboard when limit approached
- Enterprise: Stripe Invoicing, custom amounts, manual invoice per contract

---

## Vertical Focus

The research is clear on this: trying to serve fintech, medtech, and HR simultaneously in Year 1 will leave you too shallow in all three to become the obvious choice in any of them.

**Recommended primary wedge: fintech (credit and fraud decisions).**

Why fintech first:
- Credit scoring and underwriting are explicitly named in Annex III. No ambiguity.
- Banks already have model-risk management machinery but not AI-Act-ready tamper-resistant decision logs. They understand the problem. They just do not have the solution.
- The enterprise procurement pressure is immediate. Banks sending AI governance questionnaires to fintechs is already happening.
- Procurement timelines and validation burdens are shorter than medtech.

Why not medtech first:
- MDR/IVDR compliance adds a separate regulatory layer that dramatically increases sales complexity and liability exposure.
- Notified body adoption takes years. The validation burden on both sides is high.
- Save medtech for Year 2 once the rule registry has proven its value in fintech.

HR automation is a reasonable secondary wedge after fintech. The obligations are real, the pain is concrete, and litigation risk (discrimination, bias) creates urgency beyond just regulatory compliance.

**What this means for the site:** The three persona cards (Fintech, Medtech, HR) can stay on the landing page for breadth. But the demo, the first rule registry entry, the first case study, and the first outreach campaign should all be fintech-first. Let the waitlist data tell you if something different is screaming for attention.

---

## Phase 1: Waitlist Landing Page

**Goal:** page live, Tally form collecting, Cal.eu call booking wired, Tally to Google Sheets pipeline active.

**Timeline:** 3 to 5 working days.

### Day 1: Project Setup

```bash
bunx create-next-app@latest traced-landing \
  --typescript --tailwind --app --no-src --import-alias "@/*"

cd traced-landing
bunx shadcn@latest init
```

- Set `output: 'export'` in `next.config.ts`
- Copy design token values into `tailwind.config.ts`
- Configure `next/font/google` with Cormorant, DM Sans, JetBrains Mono
- Connect Vercel project, auto-deploy on push to `main`
- Verify live deploy before writing a single line of page code

### Days 2 to 3: Build the Page

Single route: `/`. Sections in render order:

1. `<NavBar />`: logo image (logo-light.png / logo-dark.png, theme-reactive) + "Join waitlist" button anchoring to `#waitlist`. Favicon (teal AI icon), OG image (1200x630), and Twitter card tags shipped in feature/ui-logo-og-imags.
2. `<Hero />`: VP tagline with strikethrough, italic subheadline, body, dual CTAs, auto-computed deadline pill
3. `<Stats />`: 4-stat grid with links to official EU AI Act sources (corrected fine labels)
4. `<HowItWorks />`: 4-feature list: SDK, local storage, tamper-evident ledger, auditor-ready exports
5. `<RuleRegistry />`: the moat section with registry preview card
6. `<BuiltFor />`: 3 industry cards: fintech, medtech, HR (fintech first)
7. `<Pricing />`: Free / Startup / Enterprise tiers, self-host note
8. `<WaitlistForm id="waitlist" />`: Tally form embed
9. `<Footer />`: company info, legal note, Driftware Dynamics Ltd

The deadline badge JS logic:

```js
const deadline = new Date('2026-08-02');
const today = new Date();
const days = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
// days > 0: "[days] DAYS UNTIL FULL ENFORCEMENT" (green)
// days <= 0: "ENFORCEMENT BEGAN [Math.abs(days)] DAYS AGO" (red)
// Badge links to: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
```

### Day 4: Tally + Thank-You Page + Cal.eu

**Tally setup:**
1. [done] Form live at `https://tally.so/r/xXvOJk` (workspace Wandercode). 4 fields: work email, company, role (dropdown: CTO/VP Eng, Head of Compliance or Risk, Head of Engineering, Founder/CEO, Other), burning need (long text). All required. ID wired into `src/config.ts` as `TALLY_FORM_ID`.
2. Connect Tally to Google Sheets via built-in integration (free tier). Manual UI step, not exposed via MCP. **This is the Milestone 1 success condition.**
3. [done] Self-notification email on every submission enabled (defaults to account owner; custom recipient needs Tally Pro).
4. [done] Completion redirect set to `https://traced-ai.com/thank-you`.
5. Test end-to-end: submit a response, confirm redirect and Sheet entry.

**Thank-you page (`/thank-you`):** [done]
Separate route at `/thank-you`. "Book a call" links out to `https://www.cal.eu/traced-ai/discovery` (opens in new tab, no on-page embed). `CAL_BOOKING_URL` is set in `src/config.ts`; the button activates automatically once the constant is non-placeholder.

**Cal.eu event:** [done]
Event type ID 318117, slug `discovery`, 30-min, Cal Video, manual approval (all bookings land as pending until confirmed). Custom fields:
1. Required radio: "What concerns you most about your current AI systems?" (Regulatory risk / Internal accountability / Enterprise procurement). After ~15 calls, the distribution tells you which message to lead with everywhere.
2. Optional text: "What AI systems are you running in production?" (placeholder: `e.g. OpenAI GPT-4o for credit decisions, ~50k calls/month`).

**Deferred: inline Cal.eu embed on `/thank-you`**
Currently an outbound link. Intentional for Milestone 1: manual approval means the bottleneck is review, not conversion, so one extra click costs nothing. Post-launch, when call volume is the priority, swap the link for a lazy-loaded `@calcom/embed` (on `/thank-you` only, per dev-guide embed rules). Prerequisite before shipping: update the privacy page with a Cal.eu cookie disclosure.

### Day 5: QA and Deploy

- [ ] Mobile responsive
- [ ] Deadline badge renders correctly with live JS and links to official EC timeline
- [ ] All stat card fine labels are legally accurate (€35M = prohibited practices, not all high-risk)
- [ ] "How it works" says "designed to support" not "satisfies" re: Articles 12 and 19
- [ ] Lighthouse target: 90+ performance, 95+ accessibility
- [x] OG tags and meta description for LinkedIn previews (og:image, og:url, og:title, og:description, og:image:alt per route; twitter:card global)
- [ ] Point `traced-ai.com` DNS to Vercel
- [ ] Set up contact@traced-ai.com email alias on traced-ai.com DNS, forwarding to cmin764@gmail.com

**Milestone 1 complete when:** a real business email lands in Google Sheets.

---

## Phase 2: First 10 Qualified Signups

**Goal:** 10 signups with a completed "burning need" field. At least 3 describe a specific, recent real incident.

**Timeline:** Weeks 3 to 4.

### Outreach Targets

- CTOs and Heads of Compliance at EU fintech Series A companies (primary)
- Secondary: Heads of Engineering who recently had to respond to an AI governance questionnaire from an enterprise customer

### Message Framing (three variants)

**Variant A, Regulatory:**
"Your AI pipeline has no audit story for August 2, 2026. I can show you what that looks like in 30 minutes. Worth a call?"

**Variant B, Liability:**
"Your engineers are flagging AI risks. Leadership is approving them anyway. When something breaks, nobody can explain the decision chain. That is not a compliance problem yet. It is a liability problem right now. Worth 30 minutes?"

**Variant C, Procurement:**
"Your enterprise customers are asking for AI governance evidence. Can you produce it in 48 hours? Worth a 30-minute call to see what that looks like?"

Send 7 to 8 messages per variant. Track response rate within 24 hours. The winner gets the hero rewrite.

### Iteration Signal

Every "burning need" response is primary research. Group by theme. If they cluster around fintech credit decisions, the first rule registry entry and the first demo should reflect exactly that. If they cluster around enterprise procurement questionnaires, the messaging shifts accordingly.

**Milestone 2 complete when:** 10 signups with completed free-text fields. At least 3 describe something specific and real.

---

## Phase 3: First Demo Call

**Goal:** validate pricing intent with the €500 commitment test.

**Timeline:** Month 2.

Demo only to people whose "burning need" response described a real, recent incident. Those are the ones with budget authority and urgency.

### The 30-Minute Demo

1. 5 min: "Tell me about the incident you described." Let them talk. Intelligence gathering.
2. 10 min: live demo. 2-line SDK setup, a decision flowing to the dashboard, an export formatted for audit review.
3. 10 min: show the rule registry entry for their specific use case (fintech credit scoring if they are fintech).
4. 5 min: pricing discussion and the test.

**Pricing test note:** Ask "What would you expect to pay for this?" before revealing the price. If the answer is consistently above €100/month, revise the Startup tier upward before launch. The €500 intent test follows.

### The Intent Test

Close with: "Would you pay €500 now for a guarantee this is production-ready in 60 days?"

- 3 of 5 say yes: build.
- Fewer than 3: the product story is off. Go back to the "burning need" responses and reframe.

**Milestone 3 complete when:** one CTO or Head of Compliance says yes on a live call.

---

## Phase 4: SDK MVP

**Goal:** working E2E integration on synthetic data, recordable as a demo.

**Timeline:** Month 2 to 3.

### Scope

- Python SDK: auto-patches OpenAI and Anthropic clients at import time
- Local encrypted storage: raw I/O stored locally, never transmitted
- Hash API: FastAPI endpoint accepting hash + structured rationale + metadata (model, timestamp, deployment, reviewer)
- Append-only ledger: PostgreSQL, hash-chained, tamper-evident
- Self-hosted viewer: part of the SDK, reads local store + cloud events, renders combined ledger timeline locally
- Minimal dashboard: Next.js viewer showing audit trail rows (timestamp, event, hash, status)
- Export: structured audit packs aligned to Articles 12, 17, 72, 86 in both JSON and PDF
- Docker image: self-hosted cloud option for the first enterprise inquiry

### Rationale Field Privacy

Plain-text rationale is a GDPR risk. Rationale text can accidentally capture personal data, health data, employment data, prompt leakage, or confidential reasoning chains. The rationale field must be structured, not free-form. From day one:

- Define a schema for rationale: decision type, outcome, confidence, human reviewer ID, override reason. These are facts, not narrative.
- Implement field-level configuration so customers control what enters the rationale record.
- Document this clearly. Security questionnaires from enterprise buyers will ask about it.

### Hard Constraints

- No raw data transmitted outbound, ever
- Outbound-only connectivity from the client (no inbound ports, no VPN required)
- EU data residency: Frankfurt (`fra`) or Dublin (`lhr`) on Fly.io. The default region is not EU. Verify before deploy.
- Email-verified accounts from day one. No anonymous API key generation in the product.

### Rule Registry v1

One entry, fully specified: Article 14 (Human Oversight) for credit scoring decisions, with cross-references to Articles 12 (record-keeping), 17 (QMS), and 72 (post-market monitoring). This is fintech-first, by design. Official article URL: https://artificialintelligenceact.eu/article/14/

**Note on scope:** Traced AI covers the evidence layer for these articles. It does not replace the customer's QMS or Annex IV technical documentation. Position this clearly in the demo and in the product onboarding. The rule registry shows customers exactly what to log and why, then links to the broader QMS obligations they handle elsewhere. Being precise about this boundary builds trust, not skepticism.

**Milestone 4 complete when:** a 30-minute recorded demo shows a complete round-trip (SDK init, LLM call, hash logged, audit export generated) on synthetic fintech credit scoring data.

---

## Phase 5: First Paying Customer

**Goal:** one signed contract, any tier.

**Timeline:** Month 3 to 4.

Concierge integration: sit on a call, walk through SDK setup together, write the first rule registry entry alongside them. This is not scalable. That is the point. You learn more in one concierge onboarding than in three months of async support emails.

**Milestone 5 complete when:** first Stripe invoice paid.

---

## Phase 6: Structured Exports and Auditor Workflows

**Goal:** make audit evidence usable by external auditors and legal teams without custom work on either side.

**Timeline:** Month 4 to 6, after first paying customer.

**The right framing for Year 1:** External auditors are conservative. They will not quickly adopt a startup SaaS as their primary verification platform. Their obligations sit with the company being audited, not with a third-party tool. Positioning Traced AI as "auditors connect directly" before building that trust is a credibility risk.

The Phase 6 goal is more defensible: produce structured audit export formats that match how audits are already done. Auditors receive a well-formatted package. They do not need to adopt new tooling. That is the path to auditor trust.

### Concrete deliverables

- Audit pack generator: structured JSON and PDF export, organized by Article (12, 17, 72, 86), date range, and decision type. Formatted so it can be dropped straight into an auditor's procedures.
- Chain-of-custody report: cryptographically signed summary of what was logged, when, by what system version, and that no records were altered.
- Notified body mode: for medtech customers, a pre-structured view aligned with MDR/IVDR technical file requirements.

### The longer-term auditor portal (Phase 6b, Month 8+)

Once export formats are proven and you have a working relationship with at least one EU-based AI auditor or notified body, the portal concept becomes viable:

1. Auditor requests access to a client's audit record, scoped to a date range or decision type.
2. Client accepts or narrows the scope in their dashboard.
3. On acceptance, relevant events are packaged and encrypted end-to-end for the auditor's key.
4. Auditor inspects the data through the portal. No separate procurement process.

Build this in co-design with the auditor. Do not build it speculatively.

**Milestone 6 complete when:** one external auditor or legal team uses a Traced AI audit pack in an actual review without requesting additional data from the client.

---

## Phase 7: EU Grant

**Goal:** non-dilutive funding to extend runway.

**Timeline:** Apply after Milestone 5.

The EU AI Act compliance infrastructure category is explicitly prioritized in current EIC Accelerator and Horizon Europe funding cycles. The grant application emphasizes:
- The rule registry as a public-interest contribution (regulatory text translated into machine-readable logging requirements, versioned and signed)
- The privacy architecture (raw data never leaving the client, provable by design)
- The structured audit export layer (reduces reliance on ad-hoc manual data extraction for every audit cycle)

Apply with a lawyer who specializes in EU tech grants. Do not DIY it.

**Milestone 7 complete when:** grant application submitted.

---

## Milestone Summary

| # | What | Done When |
|---|------|-----------|
| 0 | Design system + content artifacts | This session |
| 1 | Landing page + About page live, Tally + Cal.eu collecting | First real submission in Sheets |
| 2 | 10 qualified signups | 3+ with a specific real incident described |
| 3 | First demo call | 1 CTO says yes to the €500 intent test |
| 4 | SDK MVP | Recorded full round-trip demo, fintech credit scoring, synthetic data |
| 5 | First paying customer | First Stripe invoice paid |
| 6 | Audit exports usable | External auditor uses a Traced AI pack in a real review |
| 7 | EU grant application | Submitted |
