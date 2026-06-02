import PricingCard from '../components/PricingCard'
import { pricing } from '../copy'


export default function Pricing() {
  return (
    <section style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{pricing.sectionLabel}</div>

        <h1 className="section-heading" style={{ marginBottom: '8px' }}>
          {pricing.headline}
        </h1>
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
            {pricing.selfHostedHeading}
          </strong>
          {pricing.selfHostedNote}
        </div>

        <p style={{ fontSize: '12px', color: 'var(--tx-2)', lineHeight: 1.7, maxWidth: '640px' }}>
          {pricing.pricingNote}
        </p>
      </div>
    </section>
  )
}
