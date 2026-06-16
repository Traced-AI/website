# Legal Pages: Deferred Content

This file holds content that was intentionally left out of the live legal pages. When triggers below fire, pull from here rather than re-researching.

---

## When the product backend goes live

### Privacy Policy s.3, s.6: Remove framing sentences

Remove the italic "not yet generally available" sentences from sections 3.2 and 6. The underlying content is correct and should stand as-is.

Do the same for the opening sentence in Terms clause 2.

### Privacy Policy s.7: Add backend sub-processors

Add these rows to the sub-processor table. Confirm actual regions in your provider dashboards before publishing.

| Provider | Role | Region | HQ |
|---|---|---|---|
| Fly.io | Backend API hosting | fra (Frankfurt), confirm in dashboard | US (Delaware) |
| Supabase | Managed Postgres (hashes, rationale, metadata) | eu-central-1 or similar, confirm in dashboard | US |
| Upstash | Queue and cache | Confirm region. If it holds only opaque hashes with no personal data, it may not need to appear here. | US |
| Clerk | User authentication | US only (no EU residency option on standard plan) | US |
| Stripe | Billing and payment processing | Add when billing goes live. Confirm entity: Stripe Payments Europe Ltd (Ireland) vs. Stripe Inc (US). | US/IE |

### Privacy Policy s.8: Add backend international transfers

When Clerk and backend processors go live, add:

- **Clerk** stores authentication data in the US. No EU residency option. Transfer covered by EU Standard Contractual Clauses.
- **Supabase**: if EU region confirmed, no transfer. If US, covered by SCCs.
- **Stripe**: entity and transfer mechanism depend on which Stripe entity is contracted.

### Privacy Policy s.9: Audit-trail retention detail

Expand the "Audit-trail data in the ledger" bullet to:

"For the retention period set in your service agreement, which you choose to match your regulatory obligations. EU AI Act Articles 19 and 26(6) set a minimum of six months for most high-risk categories. Many customers in regulated sectors will need longer: typically 5-10 years for financial decisions, aligned to their own record-keeping obligations."

### DPA Annex III: Add backend sub-processors and remove Note

The Annex III Note in `/dpa` calls out that backend sub-processors will be added before the Service is live. Add these rows using the template below, then remove the `<Note>` block.

Planned rows (fill in and confirm before publishing):

| Sub-processor | Function | Country / region | Transfer mechanism |
|---|---|---|---|
| Fly.io | Backend hosting | [confirm from dashboard, expected fra] / US HQ | SCCs if non-EU; none if EU region confirmed |
| Supabase | Managed database (hashes and metadata) | [confirm from dashboard, expected EU] / non-EU HQ | SCCs if non-EU; none if EU region confirmed |
| Upstash | Queue and cache | [confirm from dashboard] / US HQ | SCCs, or omit row entirely if no personal data flows through it |
| Clerk | Authentication | US (no EU residency option on standard plan) | SCCs and EU-US Data Privacy Framework |
| [Payment processor] | Billing | [add when billing is live] | [add when billing is live] |

Rationale already worked out:
- Clerk is US-only by design on the standard plan. SCCs + DPF are the correct mechanism. No EU residency option to switch to.
- Supabase and Fly.io: if both land in EU regions, no transfer mechanism is needed for either, which simplifies the table significantly. Confirm from dashboards.
- Upstash: only include if it processes data that can be linked to an identifiable person. If it holds only opaque hashes with no customer references attached, it may fall outside the DPA scope entirely.
- Payment processor: Stripe Payments Europe Ltd (Ireland) is preferred over Stripe Inc (US) for EU billing; affects whether the row needs a transfer mechanism.

### DPA Annex II: Verify security claims

Every bullet in Annex II is a factual claim a customer can hold you to. Before the service processes real customer data, walk through each measure and confirm it describes the built system, not just the intended architecture. Remove or qualify any measure that isn't real yet.

---

## When auth / login is added

### Privacy Policy s.5: Cookie table

Add the session cookie entry when Clerk authentication goes live:

| Cookie | Purpose | Lifespan |
|---|---|---|
| `__session` (Clerk) | Authenticated session in the dashboard | Session (expires on sign-out or browser close) |
| Clerk device token | Trusted device recognition for MFA | 30 days |

Confirm exact names and lifespans in Clerk's documentation at the time.

---

## When billing goes live

### Terms s.9: Full VAT / reverse-charge language

Replace the current fees paragraph with:

"Fees are billed via Stripe and are exclusive of VAT and other applicable taxes. For EU customers registered for VAT, the reverse charge mechanism applies: you are responsible for self-assessing and accounting for VAT in your jurisdiction. We will issue invoices without VAT for eligible EU B2B transactions. Customers outside the EU are responsible for any applicable local taxes. We may change pricing for future terms with reasonable notice. Late payment may lead to suspension after notice."

Confirm the Stripe entity first (Stripe Payments Europe Ltd Ireland vs. Stripe Inc US): it affects the invoice issuer and whether reverse charge formally applies.

---

## LIA memo (write before significant traffic)

The Privacy Policy section 4 references a "documented assessment held on file" for the legitimate-interest basis used for website analytics. Write this before the site goes to significant traffic or before any regulator enquiry. Key points:

- Purpose: measuring aggregate website performance and content effectiveness
- Data: Vercel cookieless analytics (request hash, discarded after 24h, no PII)
- Necessity: least privacy-intrusive option available
- Balancing: minimal individual impact (no persistent identifier, no cross-site tracking)
- Outcome: legitimate interest is proportionate

Store at `docs/legal-lia-analytics.md`.

---

## Enterprise paper / custom DPA

If an enterprise buyer presents their own DPA paper, the `/dpa` page is not the right instrument. That becomes a commercial negotiation. Key positions going in:

- Sub-processor list is governed by the published Annex III; Controller gets notice + 14 days to object before changes
- Audit rights satisfied by SOC 2 Type II report in lieu of site inspection (until one is available, reasonable-access language applies)
- Governing law: Cyprus as default; can offer customer's jurisdiction for contracts above a revenue threshold
- Liability cap: 12 months of fees paid (matches Terms clause 13); enterprise buyers will push for uncapped breach notification liability, which is reasonable to accept
- SCC module 2 (controller-to-processor) applies for any EEA-to-US transfers, with your standard supplementary measures

---

## Governing law research note

Cyprus non-exclusive jurisdiction (Terms clause 18) was chosen because Driftware is Cyprus-incorporated and non-exclusive jurisdiction preserves the ability to litigate where an asset or customer is located. Enterprise agreements can specify a different forum (stated in clause 18).

If you later target heavy B2B volume in Germany, France, or the Netherlands, enterprise contract templates may need to offer those forums as defaults. That is a sales decision, not a website terms decision.

---

## Copy / positioning backlog (from external research, 2026)

Not legal-page content. This section parks marketing and positioning angles surfaced by the
enterprise/EU-law research brief that we chose not to put live yet, so they are not lost. Source:
`~/Downloads/Enterprise-and-EU-law-on-AI-expectations.md`. The core corrections from that brief
(medical-device classification, GDPR Article 30 hook, Article 11/Annex IV, Article 72 emphasis)
are already live in `src/copy.ts`. What is below is the deferred remainder.

### Standards as compass points: ISO 42001 + NIST AI RMF

Both can be referenced as best-practice frameworks our customers align with. Hard caveat: cite as
*alignment* only, never as certification, "compliant with," or a substitute for the AI Act. We hold
neither certification.

- **ISO/IEC 42001:2023** (AI Management System): first certifiable AI-management standard. Its monitoring/logging, drift-detection, and audit-trail requirements map closely to AI Act record-keeping (Art. 12) and post-market monitoring (Art. 72).
- **NIST AI RMF** (Govern, Map, Measure, Manage): US-origin but increasingly referenced by EU banks and tech teams for internal governance; its monitoring function expects automated logging and anomaly reporting.

Candidate homes when used: an Enterprise-tier line, or a future "standards we align with" trust strip. Do not add to Free/Startup copy.

### Sectoral depth for the `builtFor` cards

The three cards are accurate but shallow. Deepen later with the specific regime each buyer answers to:

- **Fintech:** EBA work on machine learning in IRB models and model-risk management (model inventories, validation, ongoing monitoring), plus DORA (Regulation (EU) 2022/2554) ICT incident logging/reporting. Frames our logs as feeding model-risk committees and supervisory review.
- **Medtech:** MDR **Article 83** post-market surveillance (continuous real-world performance data feeding risk assessment). Our decision-level context feeds PMS plans and clinical evaluations. Keep the existing "regulated-product route, not Annex III" framing (see fact below).
- **HR:** Platform Work Directive on algorithmic management (transparency + human oversight for automated decisions that significantly affect workers). Frames our per-candidate trails as a defensible record of where human judgment intervened.

  Deployer obligations most often missed (highest fine exposure in practice):
  - **Article 26(7):** Inform workers and their representatives before a high-risk AI system is used in the workplace. A disclosure step, not a consent requirement, but skipping it draws complaints.
  - **Article 26(11) + Recital 93:** Inform candidates and other affected persons that their evaluation involves a high-risk AI system, including its purpose and their right to an explanation. Most HR teams are unaware this obligation exists.
  - **Article 86 (right to explanation):** Affected persons may obtain a clear and meaningful explanation of the AI system's role in the decision and the main elements behind it. The precise scope is still debated; build to provide the explanation rather than to argue its limits. This is where the per-candidate decision trail in Traced AI becomes directly citable.
  - **Article 27 (FRIA) scoping note:** The Fundamental Rights Impact Assessment applies only to public bodies, private entities providing public services, and certain Annex III point 5 systems. It does not apply to a standard private-sector recruiter. Do not over-scope this obligation in sales conversations.

  Source and full treatment: `docs/use-case-hrtech-recruitment.md`.

### Vanta / ISO 42001 positioning contrast

For sales conversations, especially with compliance-led buyers:

| Vanta and similar | Traced AI |
| --- | --- |
| Attests that controls and processes exist (SOC 2, ISO 42001). Verifies the process is in place. | The evidence inside those controls: the actual per-decision record an auditor or a rejected candidate's lawyer asks to see. |

One verifies the process is in place. The other is the proof the process produced. Use this framing when a prospect says "we already have ISO 42001" or "we use Vanta." It is not a competitor claim; it positions us as complementary and addresses a gap Vanta cannot fill. Source: `docs/use-case-hrtech-recruitment.md`.

### Article 15 angle (accuracy, robustness, cybersecurity)

Possible future narrative pillar: Art. 15 high-risk obligations (resilience to errors, drift, adversarial manipulation over the lifecycle) presuppose detailed logs and change histories. You cannot show how a system behaved over time, or prove resilience, without them.

### Standing copy guardrails (research §4.3)

Apply to all future copy, in addition to the CLAUDE.md hard rules:

- Never claim Traced AI "makes you compliant" with the AI Act / GDPR / MDR / DORA. Use "helps you implement" or "supports your ability to demonstrate."
- Do not imply every customer use case is high-risk by default. Scope to the actual Annex III categories (and the Annex I regulated-product route where relevant).
- Do not suggest audit trails alone solve bias, fairness, or explainability. They are necessary but complement, not replace, model design and governance.

### Medical-device classification fact (do not re-litigate)

Medical-device / clinical-decision-support AI is high-risk via the **regulated-product route: Article 6(1) / Annex I**, under MDR/IVDR, **not** Annex III (Art. 6(2)). Its obligations apply from **2 August 2027**, not 2 August 2026 (Art. 113). Annex III categories (credit scoring, employment screening, biometric identification) are the ones tied to the 2 August 2026 date. The hero and "deadline is real" copy were corrected to stop conflating the two; keep them that way.
