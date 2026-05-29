# Legal Pages: Deferred Content

This file holds researched and decided content that was intentionally left out of the live Privacy Policy and Terms pages because the product is not yet generally available. When the product ships, pull from here rather than re-researching.

---

## Privacy Policy

### Section 3.2 / 3.3 / 6: Product data-flow framing

When the product is live, remove the "not yet generally available" framing sentences added to sections 3, 6, and Terms section 2. The underlying content describing the SDK, local store, hash chain, and rationale text is correct and should stand as-is.

### Section 7: Full sub-processor table (product-live state)

When the backend ships, add these rows to the sub-processor table. Confirm actual deployment regions in your provider dashboards before publishing.

| Provider | Role | Region | HQ |
|---|---|---|---|
| Fly.io | Backend API hosting | fra (Frankfurt) — confirm in dashboard | US (Delaware) |
| Supabase | Managed Postgres (hashes, rationale, metadata) | eu-central-1 or similar — confirm in dashboard | US |
| Upstash | Queue and cache | Confirm region. If it holds only opaque hashes with no personal data, it may not need to appear here. | US |
| Clerk | User authentication | US only (no EU residency option on standard plan) | US |
| Stripe | Billing and payment processing | Add when billing goes live. Confirm entity: Stripe Payments Europe Ltd (Ireland) for EU billing, or Stripe Inc (US). | US/IE |

### Section 8: International transfers (product-live additions)

When Clerk and backend processors go live, add to the transfers section:

- **Clerk** stores authentication data (user names and emails for dashboard accounts) in the US. No EU residency option. Transfer covered by EU Standard Contractual Clauses.
- **Supabase** processes hashes and metadata. Region to be confirmed; if EU region confirmed, no transfer. If US, covered by SCCs.
- **Stripe** processes billing data. Entity and transfer mechanism depend on which Stripe entity is contracted (see sub-processor note above).

The raw-customer-data-stays-in-perimeter paragraph stays unchanged; it is always true regardless of product state.

### Section 9: Audit-trail retention

When the product is live, the retention bullet for "Audit-trail data in the ledger" should read:

"For the retention period set in your service agreement, which you choose to match your regulatory obligations. EU AI Act Articles 19 and 26(6) set a minimum of six months for most high-risk categories. Many customers in regulated sectors will need longer: typically 5-10 years for financial decisions, aligned to their own record-keeping obligations."

### Cookie table (when auth is live)

When Clerk authentication is added, list the session cookie here:

| Cookie | Purpose | Lifespan |
|---|---|---|
| `__session` (Clerk) | Maintains authenticated session in the dashboard | Session (expires on sign-out or browser close) |
| Clerk device token | Trusted device recognition for MFA | 30 days |

Confirm exact cookie names and lifespans in Clerk's documentation at publish time.

---

## Both Pages: LIA Memo

The Privacy Policy (section 4) references a "documented assessment held on file" for the legitimate-interest basis used for website analytics. That LIA has not been written yet. Write it before the site goes to significant traffic or before any regulator inquiry. Key points to cover:

- Purpose: measuring aggregate website performance and content effectiveness
- Data: Vercel's cookieless analytics (request hash, discarded after 24h; no PII)
- Interest: legitimate business interest in improving the site
- Necessity: cookieless analytics is the least privacy-intrusive option available
- Balancing: minimal impact on individuals (no persistent identifier, no cross-site tracking, no consent required)
- Outcome: legitimate interest is proportionate; no override by individual interests

Store the signed memo at `docs/legal-lia-analytics.md` or equivalent internal location.

---

## Terms and Conditions

### Section 9: Full VAT / reverse-charge language

When billing goes live, replace the current fees paragraph with language that explicitly covers EU B2B reverse charge:

"Fees are billed via Stripe and are exclusive of VAT and other applicable taxes. For EU customers registered for VAT, the reverse charge mechanism applies: you are responsible for self-assessing and accounting for VAT in your jurisdiction. We will issue invoices without VAT for eligible EU B2B transactions. Customers outside the EU are responsible for any applicable local taxes. We may change pricing for future terms with reasonable notice. Late payment may lead to suspension after notice."

Confirm the Stripe entity before publishing (Stripe Inc vs. Stripe Payments Europe Ltd): this affects the invoice issuer and may affect whether the reverse-charge procedure formally applies.

### Section 7: Data Processing Agreement

An Article 28 GDPR controller-processor DPA is needed before any customer processes personal data through the product. Key characteristics:

- This is an EU-to-EU agreement (Driftware Cyprus + EU customer). No transfer SCCs required within the DPA itself.
- It is separate from the Terms; linked by reference in clause 7.
- Standard content: subject matter, duration, nature and purpose of processing, type of personal data, categories of data subjects, controller obligations, processor obligations (Art. 28(3)), sub-processing rules, data subject rights, security, breach notification, deletion/return.
- Publish at traced-ai.com/dpa and link from clause 7 once drafted.
- The Note in Terms clause 7 flags this as a pre-launch TODO.

---

## Governing Law Research Note

Cyprus non-exclusive jurisdiction was chosen (Terms clause 18) because:
- Driftware Dynamics Ltd is incorporated in Cyprus
- Non-exclusive jurisdiction preserves the ability to litigate where an asset or customer is located
- Enterprise agreements can specify a different forum (this is stated explicitly in clause 18)

If you later target heavy B2B volume in Germany, France, or the Netherlands, enterprise contract templates may need to offer those forums as defaults. That is a sales and legal decision, not a website terms decision.
