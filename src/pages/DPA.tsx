import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { LegalSection, Note } from '../components/LegalComponents'

export default function DPA() {
  return (
    <>
      <title>Data Processing Agreement · Traced AI</title>
      <meta name="description" content="GDPR Article 28 DPA between Driftware Dynamics Ltd and customers using the Traced AI service." />
      <link rel="canonical" href="https://traced-ai.com/dpa" />
      <meta property="og:url" content="https://traced-ai.com/dpa" />
      <meta property="og:title" content="Data Processing Agreement · Traced AI" />
      <meta property="og:description" content="GDPR Article 28 DPA between Driftware Dynamics Ltd and customers using the Traced AI service." />
      <NavBar />
      <main style={{ background: 'var(--bg-0)', minHeight: '100vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '80px 24px 96px' }}>

          <div className="section-label" style={{ marginBottom: '16px' }}>LEGAL</div>

          <h1 className="legal-page-title">Data Processing Agreement</h1>
          <p style={{ fontSize: '13px', color: 'var(--tx-2)', fontFamily: 'var(--f-mono)', marginBottom: '8px' }}>
            Version 1.0. Last updated: 29 May 2026
          </p>
          <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '48px' }}>
            <strong>Effective from the date Customer begins using the Service.</strong> This DPA forms part of the Agreement between Driftware Dynamics Ltd (trading as "Traced AI", "Processor") and the customer that uses the Service ("Customer", "Controller"). It is incorporated into the Terms and Conditions by reference. Where this DPA conflicts with the Terms on the processing of personal data, this DPA prevails.
          </p>
          <p style={{ fontSize: '14px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '48px' }}>
            This DPA reflects Article 28 of the General Data Protection Regulation (Regulation (EU) 2016/679, "GDPR"). It governs processing that occurs once Customer begins using the Service. No processing of Customer personal data occurs before that point.
          </p>

          <LegalSection id="1" title="Roles">
            <p>Customer is the controller of the personal data processed through the Service. Traced AI is the processor. Customer determines the purposes and means of processing. Traced AI processes only on Customer's documented instructions, which include the Agreement, this DPA, and use of the Service's features.</p>
          </LegalSection>

          <LegalSection id="2" title="Scope and instructions">
            <p>Traced AI processes Customer personal data only to provide the Service and only on Customer's instructions. If Traced AI is required by EU or member-state law to process beyond those instructions, it will tell Customer first unless the law forbids it. If Traced AI believes an instruction breaches data protection law, it will tell Customer.</p>
          </LegalSection>

          <LegalSection id="3" title="Nature of the data Traced AI receives">
            <p>The Service is built so that raw inputs and outputs of Customer's AI systems stay inside Customer's own infrastructure and are never transmitted to Traced AI. Traced AI receives only the data described in Annex I: cryptographic hashes, rationale text, and metadata.</p>
            <p>Customer agrees not to transmit to Traced AI any raw personal data, direct identifiers, or special-category data under Article 9 GDPR, except where such data is incidentally included in free-text rationale fields that Customer controls. Customer is responsible for keeping such data out of those fields where it is not necessary.</p>
          </LegalSection>

          <LegalSection id="4" title="Confidentiality">
            <p>Traced AI ensures that anyone authorised to process Customer personal data is bound by confidentiality and is trained on their obligations.</p>
          </LegalSection>

          <LegalSection id="5" title="Security">
            <p>Traced AI implements the technical and organisational measures in Annex II, appropriate to the risk. Because Traced AI holds only hashes, rationale text, and metadata, and never raw Customer data, the risk profile is limited by design.</p>
          </LegalSection>

          <LegalSection id="6" title="Sub-processors">
            <p>Customer gives general authorisation for Traced AI to engage the sub-processors listed in Annex III. Traced AI will give Customer at least 30 days' notice before adding or replacing a sub-processor, giving Customer the chance to object on reasonable data-protection grounds. Traced AI imposes data-protection terms on each sub-processor equivalent to those in this DPA. Where a sub-processor is outside the EEA, Traced AI puts in place a valid transfer mechanism under Chapter V GDPR, such as the Standard Contractual Clauses.</p>
          </LegalSection>

          <LegalSection id="7" title="Data subject rights">
            <p>Because Traced AI holds only hashes and metadata, it cannot identify individuals from the data it holds, and data subject requests are normally fulfilled by Customer. Traced AI will assist Customer, by appropriate technical and organisational measures and so far as possible, in responding to requests to exercise data subject rights. Where Customer instructs deletion or suppression of specific records, Traced AI will action it so far as technically feasible.</p>
          </LegalSection>

          <LegalSection id="8" title="Assistance">
            <p>Taking into account the nature of processing and the information available to it, Traced AI will assist Customer in meeting its obligations on security, breach notification, data protection impact assessments, and prior consultation under Articles 32 to 36 GDPR.</p>
          </LegalSection>

          <LegalSection id="9" title="Personal data breach">
            <p>Traced AI will notify Customer without undue delay after becoming aware of a personal data breach affecting Customer personal data, and will provide the information Customer reasonably needs to meet its own notification duties.</p>
          </LegalSection>

          <LegalSection id="10" title="Deletion and return">
            <p>On termination of the Agreement, Traced AI will, at Customer's choice, delete or return the Customer personal data it holds, and delete existing copies, unless EU or member-state law requires longer retention. Raw Customer data remains in Customer's own perimeter throughout and is unaffected by this clause. The records Traced AI holds may be exported in JSON or CSV for 30 days after termination, after which they are deleted or irreversibly anonymised.</p>
          </LegalSection>

          <LegalSection id="11" title="Audits">
            <p>Traced AI will make available to Customer the information reasonably necessary to demonstrate compliance with Article 28 GDPR, and will allow for and contribute to audits, including inspections, conducted by Customer or an auditor it mandates, subject to reasonable notice, confidentiality, and frequency limits.</p>
          </LegalSection>

          <LegalSection id="12" title="International transfers">
            <p>Traced AI and Customer are established in the EEA, and the Service is operated so that Customer personal data is processed within the EEA, except via sub-processors as set out in Annex III. This DPA therefore does not include the Standard Contractual Clauses between Traced AI and Customer. Onward transfers to non-EEA sub-processors are governed by the mechanisms referenced in clause 6.</p>
          </LegalSection>

          <LegalSection id="13" title="General">
            <p>This DPA takes effect when Customer begins using the Service and remains in force while Traced AI processes Customer personal data. If any part is invalid, the rest stands. This DPA is governed by the law of the Republic of Cyprus.</p>
          </LegalSection>

          <div style={{ borderTop: '1px solid var(--br-subtle)', paddingTop: '32px', marginTop: '16px', marginBottom: '48px' }}>
            <p style={{ fontSize: '13px', color: 'var(--tx-2)', fontFamily: 'var(--f-mono)', letterSpacing: '0.04em', marginBottom: '4px' }}>
              PRE-SIGNED ON BEHALF OF PROCESSOR
            </p>
            <p style={{ fontSize: '13px', color: 'var(--tx-1)', marginBottom: '2px' }}>Driftware Dynamics Ltd (trading as Traced AI)</p>
            <p style={{ fontSize: '12px', color: 'var(--tx-2)' }}>Cyprus Ltd, Reg. No. HE 474529</p>
          </div>

          <LegalSection id="I" title="Details of processing" prefix="Annex ">
            <table>
              <tbody>
                <tr>
                  <th>Subject matter</th>
                  <td>Provision of an audit-trail and compliance logging service for Customer's AI systems.</td>
                </tr>
                <tr>
                  <th>Duration</th>
                  <td>For the term of the Agreement, plus the post-termination retention in clause 10.</td>
                </tr>
                <tr>
                  <th>Nature and purpose</th>
                  <td>Storage, indexing, and retrieval of audit-trail records relating to decisions made by Customer's AI systems, to support Customer's compliance, audit, investigation, and reporting needs.</td>
                </tr>
                <tr>
                  <th>Categories of data subjects</th>
                  <td>
                    <ul>
                      <li>Individuals whose decisions are recorded in Customer's own systems (for example applicants, patients, customers, or employees), identified only by Customer-supplied references.</li>
                      <li>Customer staff whose actions generate audit-trail entries (for example reviewers and approvers).</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Categories of personal data</th>
                  <td>
                    <p>Narrow by design:</p>
                    <ul>
                      <li>Customer-supplied record references (for example application ID, case ID, employee ID) that may correspond to individuals in Customer's systems.</li>
                      <li>SHA-256 hashes of inputs and outputs, generated inside Customer's environment before transmission.</li>
                      <li>Rationale text describing a decision, which may incidentally contain personal data if Customer includes it.</li>
                      <li>Metadata: timestamps, event types, model identifiers, outcome codes, version identifiers, and the identity of the signing or reviewing user.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>Data not processed</th>
                  <td>Raw inputs and outputs, direct identifiers, and special-category data under Article 9 GDPR are not required, not expected, and contractually discouraged under clause 3.</td>
                </tr>
              </tbody>
            </table>
          </LegalSection>

          <LegalSection id="II" title="Technical and organisational measures" prefix="Annex ">
            <Note>Every line in this annex is a factual claim. Before the Service processes real customer data, confirm each measure is true of the system as it will operate. Remove or soften any measure not yet implemented rather than overstating it.</Note>
            <ul>
              <li><strong>Data minimisation by design.</strong> Raw Customer data stays in Customer's perimeter. Only hashes, rationale text, and metadata are transmitted to Traced AI.</li>
              <li><strong>Encryption.</strong> TLS 1.2 or higher in transit. Encryption at rest for all stored audit-trail data.</li>
              <li><strong>Access control.</strong> Role-based access for Customer accounts. Least-privilege access for Traced AI staff. Multi-factor authentication on production systems. Per-tenant logical isolation.</li>
              <li><strong>Integrity.</strong> Append-only, cryptographically chained ledger that makes tampering evident. Signed rule-registry updates.</li>
              <li><strong>Logging and monitoring.</strong> Access logging for production systems, retained and reviewed for suspicious access.</li>
              <li><strong>Availability.</strong> Backups and recovery objectives appropriate to the Service.</li>
              <li><strong>Sub-processor governance.</strong> Data-protection terms imposed on sub-processors; transfer mechanisms where required; security review before engagement.</li>
            </ul>
          </LegalSection>

          <LegalSection id="III" title="Sub-processors" prefix="Annex ">
            <table>
              <thead>
                <tr>
                  <th>Sub-processor</th>
                  <th>Function</th>
                  <th>Country / region</th>
                  <th>Transfer mechanism</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vercel</td>
                  <td>Site and dashboard hosting; cookieless analytics</td>
                  <td>EU Edge (fra1) / US HQ</td>
                  <td>SCCs and EU-US Data Privacy Framework</td>
                </tr>
              </tbody>
            </table>
            <Note>The product backend sub-processors (Fly.io, Supabase, Upstash, Clerk, payment processor) will be added to this table before the Service is available to customers. Confirm each provider's region from your own dashboards, and name the actual transfer mechanism for each non-EEA processor before relying on the row.</Note>
          </LegalSection>

        </div>
      </main>
      <Footer />
    </>
  )
}

