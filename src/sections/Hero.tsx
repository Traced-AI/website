import { Link } from 'react-router-dom'
import DeadlineBadge from '../components/DeadlineBadge'
import DangerHighlight from '../components/DangerHighlight'
import { hero } from '../copy'
import { useWaitlistClick } from '../hooks/useWaitlistClick'

export default function Hero() {
  const handleWaitlistClick = useWaitlistClick()

  return (
    <section style={{ background: 'var(--bg-1)', borderBottom: '1px solid var(--br-subtle)' }}>
      <div className="page-section" style={{ paddingTop: '80px', paddingBottom: '96px' }}>
        <DeadlineBadge />

        <h1 className="hero-headline f-display">
          <span className="hl-line1">{hero.line1}</span>
          <span className="hl-line2">
            {hero.line2Before && <>{hero.line2Before}{' '}</>}
            <span className="through">{hero.line2Strike}</span>{' '}
            <DangerHighlight tip={hero.tooltip}>{hero.line2Highlight}</DangerHighlight>
          </span>
        </h1>

        <div style={{ marginBottom: '22px' }}>
          <span className="hero-sub f-display accent-quote">{hero.subheadline}</span>
        </div>

        <div className="hero-body">
          <p>{hero.body1}</p>
          <p>{hero.body2}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center', marginBottom: '16px' }}>
          <Link to="/#waitlist" className="btn btn-primary" onClick={handleWaitlistClick}>{hero.ctaPrimary}</Link>
          <Link to="/product" className="btn btn-secondary">{hero.ctaSecondary}</Link>
        </div>

        <div style={{ fontSize: '12px', color: 'var(--tx-2)' }}>{hero.belowCta}</div>
      </div>
    </section>
  )
}
