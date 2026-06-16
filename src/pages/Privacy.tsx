import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { LegalSection } from '../components/LegalComponents'
import { footer } from '../copy'
import { DOMAIN } from '../config'

export default function Privacy() {
  return (
    <>
      <title>Privacy Policy · Traced AI</title>
      <meta name="description" content="How Driftware Dynamics Ltd handles personal data for traced-ai.com visitors and customers." />
      <link rel="canonical" href={`${DOMAIN}/privacy`} />
      <meta property="og:url" content={`${DOMAIN}/privacy`} />
      <meta property="og:title" content="Privacy Policy · Traced AI" />
      <meta property="og:description" content="How Driftware Dynamics Ltd handles personal data for traced-ai.com visitors and customers." />
      <NavBar />
      <main style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 96px' }}>

          <div className="section-label" style={{ marginBottom: '16px' }}>LEGAL</div>

          <h1 className="legal-page-title">Privacy Policy</h1>
          <p style={{ fontSize: '13px', color: 'var(--tx-2)', fontFamily: 'var(--f-mono)', marginBottom: '48px' }}>
            Last updated: 29 May 2026
          </p>

          <LegalSection id="1" title="About this policy">
            <p>This policy explains how Driftware Dynamics Ltd (trading as "Traced AI", referred to here as "Traced AI", "we", or "us") handles personal data when you visit traced-ai.com, contact us, or use the Traced AI service.</p>
            <p>It covers two situations that are deliberately kept separate:</p>
            <ul>
              <li><strong>Website visitors.</strong> People who browse the site, submit a form, book a demo, or sign up for an account.</li>
              <li><strong>Customers and their end users.</strong> Organisations that integrate the Traced AI SDK, dashboard, and ledger into their own AI systems, and the individuals whose decisions those systems process.</li>
            </ul>
            <p>How we treat data is very different in each case, and that difference is the entire point of the product. Traced AI is built so that raw data from your AI systems never reaches us. Section 6 explains exactly what does and does not cross the network.</p>
            <p>For data collected through the website and from our direct customers (account and billing data), we act as a <strong>data controller</strong>. For the audit-trail data that customers process through the service, the customer is the controller and we are a limited processor. The boundary is set out in section 6.</p>
          </LegalSection>

          <LegalSection id="2" title="Who we are and how to reach us">
            <p>Driftware Dynamics Ltd, registered in Cyprus under company number {footer.company.regNumber}, VAT: {footer.company.vat}, with registered address {footer.company.address.join(', ')}.</p>
            <p>All privacy enquiries: <a href="mailto:contact@traced-ai.com">contact@traced-ai.com</a></p>
          </LegalSection>

          <LegalSection id="3" title="The data we collect">
            <h3>3.1 Website visitors</h3>
            <p>When you use traced-ai.com we may collect:</p>
            <ul>
              <li><strong>Information you give us.</strong> Name, work email, company, role, and anything you write in a contact or demo-request form.</li>
              <li><strong>Account information.</strong> If you create an account, the details needed to set it up and authenticate you. Authentication is handled by our identity provider (see section 7).</li>
              <li><strong>Technical and usage data.</strong> IP address, browser type, device information, pages viewed, and referring URLs, collected through server logs and analytics.</li>
              <li><strong>Cookies and similar technologies.</strong> Covered in section 5.</li>
            </ul>

            <h3>3.2 Customers and product use</h3>
            <p><em>The product is not yet generally available. This section describes how data is handled once it is.</em></p>
            <p>When your organisation uses Traced AI:</p>
            <ul>
              <li><strong>Account and billing data.</strong> Names and work emails of authorised users, plan, and payment details (handled by our payment processor; we do not store full card numbers).</li>
              <li><strong>Configuration data.</strong> The rules, decision types, and settings you choose in the dashboard.</li>
              <li><strong>Audit-trail data sent to our cloud.</strong> This is the important part, and it is narrow by design. The SDK sends us SHA-256 hashes of each decision's inputs and outputs, plus the rationale text you attach to that decision, plus metadata such as timestamps, model identifiers, and the signing user. It does not send us the raw prompts, raw model outputs, or the underlying records your AI system processed. Those stay inside your perimeter (see section 6).</li>
            </ul>

            <h3>3.3 A note on rationale text</h3>
            <p>The rationale text you attach to a decision is plain text that reaches our ledger. If you choose to put personal data into a rationale string, that personal data will reach us. You control what goes into rationale fields, and you are responsible for keeping raw personal data out of them where it is not needed. We treat any personal data in rationale text under the processor terms in your service agreement.</p>
          </LegalSection>

          <LegalSection id="4" title="Why we use your data and our legal basis">
            <p>Under the GDPR we rely on the following legal bases:</p>
            <table>
              <thead>
                <tr><th>What we do</th><th>Legal basis (GDPR Article 6)</th></tr>
              </thead>
              <tbody>
                <tr><td>Respond to enquiries and demo requests</td><td>Steps taken at your request before a contract, or our legitimate interest in answering you</td></tr>
                <tr><td>Provide, operate, and secure the service</td><td>Performance of our contract with your organisation</td></tr>
                <tr><td>Bill you and keep financial records</td><td>Contract, and our legal obligation to keep accounting records</td></tr>
                <tr><td>Send service and security notices</td><td>Contract, and our legitimate interest in keeping you informed</td></tr>
                <tr><td>Send marketing emails</td><td>Your consent, or our legitimate interest in business-to-business outreach where permitted, with an opt-out in every message</td></tr>
                <tr><td>Measure and improve the website</td><td>Legitimate interest (documented assessment held on file). Vercel Analytics is cookieless and does not collect personal data; no separate consent is required.</td></tr>
                <tr><td>Detect and prevent abuse and fraud</td><td>Our legitimate interest in protecting the service</td></tr>
              </tbody>
            </table>
            <p>Where we rely on legitimate interest, we have weighed it against your rights and will provide our assessment on request.</p>
          </LegalSection>

          <LegalSection id="5" title="Cookies and analytics">
            <p><strong>Vercel Web Analytics</strong> is cookieless. It sets no cookies, collects no personally identifiable information, and identifies sessions by a request hash that is discarded after 24 hours. No consent banner is required for it.</p>
            <p>The <strong>Tally</strong> waitlist form is a third-party embed. Tally does not use cookie tracking on forms; it operates under its own privacy notice: <a href="https://tally.so/privacy" target="_blank" rel="noopener noreferrer">Tally privacy policy</a>.</p>
            <p>The <strong>Cal.eu</strong> booking widget is a third-party embed. It operates under its own privacy notice and may set cookies within its embed context: <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer">Cal.eu privacy policy</a>.</p>
            <p>When user authentication is added to the product, any session cookies introduced will be listed here with their purpose and lifespan.</p>
          </LegalSection>

          <LegalSection id="6" title="How the product keeps raw data out of our hands">
            <p><em>This describes the architecture of the product. The product is not yet generally available to customers.</em></p>
            <p>This is the design principle the whole service is built on.</p>
            <ul>
              <li>The Traced AI SDK auto-patches your LLM clients and writes raw inputs and outputs to a <strong>local SQLite store inside your own infrastructure</strong>. That store never leaves your perimeter.</li>
              <li>Only <strong>hashes, rationale text, and metadata</strong> are sent outbound to our append-only chained ledger. We never receive the raw records behind those hashes.</li>
              <li>Connectivity is <strong>outbound only</strong>. We open no inbound ports into your systems, run no VPN into your network, and pull no raw data out of it. The only traffic from us to you is signed rule-registry updates.</li>
              <li>The dashboard runs either <strong>self-hosted as a Docker image inside your environment</strong> (the default for banks, hospitals, and other regulated buyers), reading from your local SQLite, or as a hosted option. In the self-hosted model, only hashes and signed registry updates cross the network.</li>
            </ul>
            <p>The effect is that we cannot reconstruct your underlying data from what we hold, because we never receive it. This reduces, but does not eliminate, the personal data we process: hashes and rationale text can still relate to identifiable people, so we treat them as personal data and protect them accordingly.</p>
          </LegalSection>

          <LegalSection id="7" title="Who we share data with">
            <p>We do not sell personal data. We share it only with service providers who help us run the business, and only as far as needed. Our current sub-processors are:</p>
            <table>
              <thead>
                <tr><th>Provider</th><th>Role</th><th>Region</th><th>HQ</th></tr>
              </thead>
              <tbody>
                <tr><td>Vercel</td><td>Website hosting and cookieless analytics</td><td>EU Edge (fra1)</td><td>US</td></tr>
                <tr><td>Tally</td><td>Waitlist form submissions</td><td>EU (Belgium)</td><td>EU</td></tr>
                <tr><td>Cal.com (Cal.eu)</td><td>Demo call booking</td><td>EU</td><td>US</td></tr>
              </tbody>
            </table>
            <p>Raw inputs and outputs from your AI systems never reach us or any sub-processor. See section 6.</p>
            <p className="legal-sub-label">Product backend sub-processors, active when the product backend launches:</p>
            <table>
              <thead>
                <tr><th>Provider</th><th>Role</th><th>Region</th><th>HQ</th></tr>
              </thead>
              <tbody>
                <tr><td>Fly.io</td><td>Backend API hosting</td><td>Frankfurt (fra), EU</td><td>US</td></tr>
                <tr><td>Supabase</td><td>Managed Postgres (hashes, rationale, metadata)</td><td>eu-central-1, EU</td><td>US</td></tr>
                <tr><td>Upstash</td><td>Queue and cache</td><td>EU</td><td>US</td></tr>
                <tr><td>Clerk</td><td>User authentication</td><td>US</td><td>US</td></tr>
                <tr><td>Stripe</td><td>Billing and payment processing</td><td>Ireland (EU) via Stripe Payments Europe Ltd</td><td>US (group)</td></tr>
              </tbody>
            </table>
            <p>We may also disclose data where the law requires it, to enforce our agreements, or in connection with a merger or acquisition, in which case we will tell you.</p>
          </LegalSection>

          <LegalSection id="8" title="International transfers">
            <p>The following describes the current transfer position for our live sub-processors:</p>
            <ul>
              <li><strong>Tally</strong> is incorporated in Belgium and processes form data in the EU. No transfer outside the EEA.</li>
              <li><strong>Cal.com (Cal.eu)</strong> processes booking data in the EU. Cal.com Inc is US-headquartered. This transfer is covered by EU Standard Contractual Clauses.</li>
              <li><strong>Vercel</strong> runs edge functions in EU regions (fra1) for this site. Vercel Inc is US-headquartered. This transfer is covered by EU Standard Contractual Clauses and the EU-US Data Privacy Framework.</li>
            </ul>
            <p>Raw customer decision data stays inside the customer's own perimeter and is not a transfer we make.</p>
            <p>When the product backend launches, the following transfers will apply:</p>
            <ul>
              <li><strong>Clerk</strong> stores authentication data in the US. No EU residency option on the standard plan. Transfer covered by EU Standard Contractual Clauses and the EU-US Data Privacy Framework.</li>
              <li><strong>Supabase</strong> stores managed database data in the EU (eu-central-1). No transfer outside the EEA for the EU region.</li>
              <li><strong>Fly.io</strong> runs backend hosting in Frankfurt (fra), EU. No transfer outside the EEA for the EU region.</li>
              <li><strong>Upstash</strong> runs queue and cache in the EU. No transfer outside the EEA for the EU region.</li>
              <li><strong>Stripe</strong> billing is handled by Stripe Payments Europe Ltd, incorporated in Ireland. Stripe processes some data at the US group level, covered by EU Standard Contractual Clauses.</li>
            </ul>
            <p>You can ask us for details of the safeguard used for a particular transfer at <a href="mailto:contact@traced-ai.com">contact@traced-ai.com</a>.</p>
          </LegalSection>

          <LegalSection id="9" title="How long we keep data">
            <ul>
              <li><strong>Enquiry and form data:</strong> 2 years from the date of submission.</li>
              <li><strong>Account and billing data:</strong> for the life of the account, then as required for tax and accounting law.</li>
              <li><strong>Audit-trail data in the ledger:</strong> for the retention period set in your service agreement, which you choose to match your regulatory obligations. EU AI Act and sectoral rules generally expect logs to be retained for at least six months, and often longer for high-risk categories.</li>
              <li><strong>Website analytics:</strong> Aggregated and anonymous. No individual session is retained beyond 24 hours.</li>
            </ul>
            <p>When a retention period ends, we delete or irreversibly anonymise the data.</p>
          </LegalSection>

          <LegalSection id="10" title="Your rights">
            <p>If the GDPR applies to you, you have the right to:</p>
            <ul>
              <li>access the personal data we hold about you,</li>
              <li>have inaccurate data corrected,</li>
              <li>have data erased in certain circumstances,</li>
              <li>restrict or object to our processing,</li>
              <li>receive your data in a portable format,</li>
              <li>withdraw consent at any time, where we relied on consent.</li>
            </ul>
            <p>To exercise any of these, contact us at <a href="mailto:contact@traced-ai.com">contact@traced-ai.com</a>. We will respond within one month. If we cannot act on your request, we will tell you why.</p>
            <p>For audit-trail data processed through the product, requests are usually best directed to the customer who controls that data. We will support our customers in responding.</p>
          </LegalSection>

          <LegalSection id="11" title="Automated decision-making">
            <p>The website does not make automated decisions that produce legal or similarly significant effects about visitors.</p>
            <p>Traced AI is a logging and audit-trail tool. It records and hashes evidence about decisions made by our customers' own AI systems; it does not itself decide anything about individuals. Where a customer uses an AI system that makes automated decisions, the customer is responsible for the transparency and explanation duties owed to the affected people, including any right to an explanation under Article 86 of the EU AI Act and Article 22 of the GDPR.</p>
          </LegalSection>

          <LegalSection id="12" title="Security">
            <p>We protect data with measures appropriate to the risk, including encryption in transit, access controls, an append-only chained ledger that makes tampering evident, and signed rule-registry updates. No system is perfectly secure, but the architecture is designed to limit what an attacker who reached our systems could learn, because we do not hold your raw data.</p>
          </LegalSection>

          <LegalSection id="13" title="Children">
            <p>The service is for organisations and their authorised staff. It is not directed at children, and we do not knowingly collect data from anyone under 16.</p>
          </LegalSection>

          <LegalSection id="14" title="Changes to this policy">
            <p>We may update this policy. When we make a material change, we will update the date above and, where appropriate, tell you directly. The current version always lives at traced-ai.com/privacy.</p>
          </LegalSection>

          <LegalSection id="15" title="Complaints">
            <p>If you think we have mishandled your data, please contact us first at <a href="mailto:contact@traced-ai.com">contact@traced-ai.com</a> so we can put it right. You also have the right to complain to a data protection authority, in particular the one for the EU country where you live or work.</p>
            <p>The lead supervisory authority for Traced AI is the Office of the Commissioner for Personal Data Protection, 1 Iasonos Street, 1082 Nicosia, Cyprus. Tel: +357 22 818 456. Email: <a href="mailto:commissioner@dataprotection.gov.cy">commissioner@dataprotection.gov.cy</a>. Website: <a href="https://www.dataprotection.gov.cy" target="_blank" rel="noopener noreferrer">dataprotection.gov.cy</a>.</p>
          </LegalSection>

        </div>
      </main>
      <Footer />
    </>
  )
}

