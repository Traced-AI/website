import type { PricingTier } from '../copy'
import { pricing } from '../copy'
import Badge from './Badge'

interface PricingCardProps {
  tier: PricingTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  return (
    <div className={`price-card${tier.featured ? ' featured' : ''}`}>
      {tier.featured && <div className="price-featured-tag">{pricing.featuredTag}</div>}
      <div className="price-tier">{tier.tier}</div>
      <div className="price-amount f-display">
        {tier.amount}
        {tier.amountSuffix && (
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--tx-2)' }}>
            {tier.amountSuffix}
          </span>
        )}
      </div>
      <div className="price-cadence">{tier.cadence}</div>
      <div className="price-desc">{tier.desc}</div>
      <div className="price-features">
        {tier.features.map((f, i) => (
          <div className="price-feature" key={i}>
            <span className={f.accent ? 'plus-ac' : 'plus'}>+</span>
            {f.text}
          </div>
        ))}
      </div>
      <Badge variant={tier.badgeVariant}>{tier.badge}</Badge>
    </div>
  )
}
