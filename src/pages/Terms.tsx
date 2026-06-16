import { Link } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { LegalSection } from '../components/LegalComponents'
import { DOMAIN } from '../config'

export default function Terms() {
  return (
    <>
      <title>Terms and Conditions · Traced AI</title>
      <meta name="description" content="Terms governing use of the Traced AI service." />
      <link rel="canonical" href={`${DOMAIN}/terms`} />
      <meta property="og:url" content={`${DOMAIN}/terms`} />
      <meta property="og:title" content="Terms and Conditions · Traced AI" />
      <meta property="og:description" content="Terms governing use of the Traced AI service." />
      <NavBar />
      <main style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 96px' }}>

          <div className="section-label" style={{ marginBottom: '16px' }}>LEGAL</div>

          <h1 className="legal-page-title">Terms and Conditions</h1>
          <p style={{ fontSize: '13px', color: 'var(--tx-2)', fontFamily: 'var(--f-mono)', marginBottom: '24px' }}>
            Last updated: 29 May 2026
          </p>
          <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '48px' }}>
            These terms govern your use of the Traced AI service. By creating an account, installing the SDK, or otherwise using the service, you agree to them. If you are agreeing on behalf of an organisation, you confirm that you have authority to bind it, and "you" means that organisation.
          </p>

          <LegalSection id="1" title="Parties and definitions">
            <p>These terms are between Driftware Dynamics Ltd (trading as "Traced AI", "we", "us") and the organisation that uses the service ("Customer", "you").</p>
            <ul>
              <li><strong>Service:</strong> the Traced AI SDK, dashboard, cloud ledger, rule registry, and related documentation.</li>
              <li><strong>SDK:</strong> the Traced AI client library that auto-patches your AI clients and records decision data.</li>
              <li><strong>Ledger:</strong> our append-only, cryptographically chained store of decision hashes, rationale text, and metadata.</li>
              <li><strong>Rule Registry:</strong> our versioned, signed mappings of regulatory and standards text (such as the EU AI Act, ISO 42001, and SOC 2) to concrete logging requirements, supplied on subscription.</li>
              <li><strong>Customer Data:</strong> the data you process through the service. This includes the raw inputs and outputs that stay in your perimeter, and the hashes, rationale text, and metadata sent to the Ledger.</li>
              <li><strong>AI Act:</strong> Regulation (EU) 2024/1689.</li>
            </ul>
          </LegalSection>

          <LegalSection id="2" title="What the service is, and what it is not">
            <p><em>The product is not yet generally available. These terms apply from the moment you create an account or install the SDK.</em></p>
            <p>Traced AI is <strong>audit-trail and compliance infrastructure</strong>. It records evidence about decisions made by your AI systems: it hashes inputs and outputs, stores the rationale you attach, and chains those records so tampering becomes evident.</p>
            <p>Traced AI does <strong>not</strong> make decisions about individuals, does not score, rank, or evaluate people, and is not itself a high-risk AI system under the AI Act. It is a record-keeping tool that helps you meet obligations such as record-keeping (Article 12), transparency (Article 13), and post-market monitoring (Article 72) for the AI systems <strong>you</strong> operate.</p>
            <p>The service is provided as evidence and tooling. It does not certify your compliance, does not constitute legal advice, and using it does not by itself make you compliant with the AI Act, the GDPR, or any other law. Compliance depends on how you design, operate, and govern your own AI systems.</p>
          </LegalSection>

          <LegalSection id="3" title="Your account and the licence we grant">
            <p>While these terms are in force and your fees are paid, we grant you a non-exclusive, non-transferable right to use the service for your own internal business purposes, including installing the SDK in your systems and running the dashboard (hosted or self-hosted).</p>
            <p>You are responsible for your account, your users, and keeping credentials secure. We do not create accounts on your behalf, and we do not handle your passwords. Authentication is handled by our identity provider.</p>
          </LegalSection>

          <LegalSection id="4" title="Roles under the EU AI Act">
            <p>The AI Act allocates duties differently to providers and deployers of AI systems. These terms set out who is responsible for what.</p>
            <ul>
              <li><strong>You decide how to use the service.</strong> You are the provider or deployer (or both) of your own AI systems. You are responsible for classifying those systems, running any required risk and fundamental-rights assessments, and meeting the obligations that attach to them.</li>
              <li><strong>We are responsible for the service we supply.</strong> We provide the logging, hashing, ledger integrity, and rule registry as described in the documentation, and we maintain them.</li>
              <li><strong>You remain accountable for compliance outcomes.</strong> We supply tooling and evidence. We do not assume your regulatory duties, and we are not your provider, deployer, importer, or distributor for your AI systems.</li>
            </ul>
          </LegalSection>

          <LegalSection id="5" title="Human oversight">
            <p>Consistent with Article 14 of the AI Act, you agree that:</p>
            <ul>
              <li>the outputs of any AI system you operate are yours to oversee, not ours,</li>
              <li>a qualified person on your side reviews AI-generated outputs before any decision that produces legal or similarly significant effects on a person,</li>
              <li>the <code>reviewed_by</code> and sign-off features in the service are there to help you record that oversight, not to perform it for you, and</li>
              <li>we are not liable for decisions you make on the basis of automated outputs.</li>
            </ul>
          </LegalSection>

          <LegalSection id="6" title="Acceptable use">
            <p>You must not use the service:</p>
            <ul>
              <li>to support any practice prohibited under Article 5 of the AI Act, including untargeted scraping of facial images, social scoring, or manipulative or exploitative systems,</li>
              <li>to break any law, infringe anyone's rights, or process data you have no right to process,</li>
              <li>to reverse engineer, resell, sublicense, or redistribute the service or the Rule Registry except as these terms allow, or</li>
              <li>to attempt to defeat the integrity of the Ledger or to inject false records.</li>
            </ul>
            <p>If you use the service for a high-risk purpose, you remain solely responsible for meeting the obligations that attach to that purpose.</p>
          </LegalSection>

          <LegalSection id="7" title="Customer Data and the network boundary">
            <ul>
              <li><strong>You own your data.</strong> You keep all rights in Customer Data. We claim no ownership of it.</li>
              <li><strong>Raw data stays with you.</strong> The SDK writes raw inputs and outputs to a local store inside your perimeter. We do not receive them.</li>
              <li><strong>What reaches us.</strong> Only hashes, rationale text, and metadata are sent to the Ledger. Connectivity is outbound only. The sole traffic from us to you is signed Rule Registry updates.</li>
              <li><strong>Rationale text is your responsibility.</strong> Rationale text reaches our Ledger in plain text. You are responsible for what you put in it, including keeping out any personal or sensitive data that does not need to be there.</li>
              <li><strong>We do not train on your data.</strong> We do not use Customer Data to train or fine-tune any model, and we do not share it except as set out in our Privacy Policy.</li>
              <li><strong>Processing terms.</strong> Where we process personal data on your behalf, the <Link to="/dpa">Data Processing Agreement</Link> at traced-ai.com/dpa applies and forms part of these terms. It is pre-signed by us and incorporated automatically; no separate signature is required.</li>
            </ul>
          </LegalSection>

          <LegalSection id="8" title="The Rule Registry">
            <p>The Rule Registry is licensed, not sold. While your subscription is active, you may use the current and updated mappings within the service. You may not extract, copy, resell, or redistribute the Rule Registry or build a competing registry from it. The Rule Registry, including its structure, mappings, and signatures, remains our intellectual property.</p>
            <p>We maintain and update the Rule Registry from real regulatory and audit practice. We aim to keep it accurate, but it reflects our reading of the relevant texts and standards, not an official or authoritative interpretation, and it is not legal advice.</p>
          </LegalSection>

          <LegalSection id="9" title="Fees and payment">
            <p>You pay the fees for your chosen plan as set out at sign-up or in your order. Fees are billed via Stripe and are exclusive of VAT and other applicable taxes, which you pay where applicable. We may change pricing for future terms with reasonable notice. Late payment may lead to suspension after notice.</p>
          </LegalSection>

          <LegalSection id="10" title="Intellectual property">
            <p>We own the service, the software, the dashboard, the Ledger design, and the Rule Registry, along with all related intellectual property. These terms grant you a right to use the service, not any ownership in it. You own your Customer Data and any outputs your own systems generate. Any feedback you give us, we may use freely to improve the service.</p>
          </LegalSection>

          <LegalSection id="11" title="Confidentiality">
            <p>Each side may receive confidential information from the other. Each side will protect the other's confidential information with reasonable care and use it only to perform under these terms. This does not apply to information that is public, already known, independently developed, or required to be disclosed by law.</p>
          </LegalSection>

          <LegalSection id="12" title="Warranties and disclaimers">
            <p>We will provide the service with reasonable skill and care and substantially as described in the documentation.</p>
            <p>Beyond that, and to the extent the law allows, the service is provided "as is". We do not warrant that it is uninterrupted or error-free, that it will meet every regulatory requirement that applies to you, or that using it will result in a finding of compliance by any authority or auditor. The integrity guarantees of the Ledger relate to tamper-evidence of the records we hold, not to the truth or completeness of what you put into it.</p>
          </LegalSection>

          <LegalSection id="13" title="Limitation of liability">
            <p>Nothing in these terms limits liability that cannot be limited by law, such as for death or personal injury caused by negligence, or for fraud.</p>
            <p>Subject to that, and to the extent the law allows:</p>
            <ul>
              <li>neither side is liable for indirect or consequential loss, loss of profits, loss of data beyond what we hold, or for regulatory fines levied against the other side, and</li>
              <li>each side's total liability under these terms is capped at the fees you paid us in the twelve months before the claim arose.</li>
            </ul>
            <p>Regulatory fines levied against you for how you operate your own AI systems are your responsibility and fall outside our liability.</p>
          </LegalSection>

          <LegalSection id="14" title="Indemnity">
            <p>You will indemnify us against claims, losses, and costs arising from your use of the service in breach of these terms, in particular your use of the service for a prohibited or high-risk purpose for which you have not met the applicable obligations, or your inclusion of unlawful data in Customer Data or rationale text.</p>
          </LegalSection>

          <LegalSection id="15" title="Term, suspension, and termination">
            <p>These terms run while you use the service. Either side may terminate for material breach that is not cured within 30 days of notice. We may suspend the service for non-payment after notice, or immediately where continued use poses a security or legal risk.</p>
          </LegalSection>

          <LegalSection id="16" title="What happens to your data on termination">
            <p>Because raw Customer Data stays in your perimeter, it remains with you throughout and after termination. For the hashes, rationale text, and metadata we hold, you may export them in JSON or CSV for 30 days after termination, after which we will delete or irreversibly anonymise them, subject to any retention the law requires. We will not perform irreversible deletions on your behalf inside your own systems.</p>
          </LegalSection>

          <LegalSection id="17" title="Changes to these terms">
            <p>We may update these terms. For material changes we will give reasonable notice. If you keep using the service after a change takes effect, you accept the updated terms. The current version always lives at traced-ai.com/terms.</p>
          </LegalSection>

          <LegalSection id="18" title="Governing law and disputes">
            <p><strong>Governing law.</strong> This Agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it, its subject matter, or its formation are governed by and construed in accordance with the laws of the Republic of Cyprus, excluding its conflict-of-laws rules.</p>
            <p><strong>Jurisdiction.</strong> The courts of the Republic of Cyprus have non-exclusive jurisdiction to settle any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with this Agreement, its subject matter, or its formation. Each party irrevocably submits to that jurisdiction.</p>
            <p>Negotiated enterprise agreements may specify a different governing law and forum.</p>
          </LegalSection>

          <LegalSection id="19" title="General">
            <p>These terms, your order, the Privacy Policy, and any Data Processing Agreement are the whole agreement between us. If any part is unenforceable, the rest stands. Neither side may assign these terms without the other's consent, except as part of a sale of the business. A delay in enforcing a term is not a waiver of it.</p>
          </LegalSection>

          <LegalSection id="20" title="Contact">
            <p>Questions about these terms: <a href="mailto:contact@traced-ai.com">contact@traced-ai.com</a></p>
          </LegalSection>

        </div>
      </main>
      <Footer />
    </>
  )
}

