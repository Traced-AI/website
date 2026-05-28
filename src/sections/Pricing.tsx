import PricingCard from '../components/PricingCard'
import { pricing } from '../copy'

export default function Pricing() {
  return (
    <section style={{ background: 'var(--bg-0)' }}>
      <div className="page-section">
        <div className="section-label">{pricing.sectionLabel}</div>

        <h2 className="section-heading" style={{ marginBottom: '8px' }}>
          {pricing.headline}
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--tx-1)', marginBottom: '40px', maxWidth: '640px' }}>
          {pricing.subheadline}
        </p>

        <div className="pricing-grid">
          {pricing.tiers.map((tier, i) => (
            <PricingCard key={i} tier={tier} />
          ))}
        </div>

        <div className="callout" style={{ marginBottom: '16px', marginTop: '4px' }}>
          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--tx-0)', marginBottom: '6px' }}>
            Self-hosted component
          </strong>
          {pricing.selfHostedNote}
        </div>

        <p style={{ fontSize: '12px', color: 'var(--tx-2)', lineHeight: 1.7, marginBottom: '10px', maxWidth: '640px' }}>
          <strong style={{ color: 'var(--tx-1)' }}>Note on rationale fields:</strong>{' '}
          {pricing.rationaleNote}
        </p>

        <p style={{ fontSize: '12px', color: 'var(--tx-2)', lineHeight: 1.7, maxWidth: '640px' }}>
          {pricing.pricingNote}
        </p>
      </div>
    </section>
  )
}
