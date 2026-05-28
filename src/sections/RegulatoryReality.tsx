import StatCard from '../components/StatCard'
import { stats, regulatoryReality } from '../copy'

export default function RegulatoryReality() {
  return (
    <section style={{ background: 'var(--bg-0)' }}>
      <div className="page-section">
        <div className="section-label">{regulatoryReality.sectionLabel}</div>

        <h2 className="section-heading">{regulatoryReality.headline}</h2>

        <div className="stat-grid">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} />
          ))}
        </div>

        <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, maxWidth: '720px', marginBottom: '20px' }}>
          {regulatoryReality.body}
        </p>

        <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, fontWeight: 400, marginBottom: '2px' }}>
            {regulatoryReality.question}
          </p>
          <p style={{ fontSize: '15px', color: 'var(--tx-0)', lineHeight: 1.75, fontWeight: 600 }}>
            {regulatoryReality.questionPunchline}
          </p>
        </div>

        <div className="callout" style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <strong style={{ display: 'block', fontSize: '13px', color: 'var(--tx-0)', marginBottom: '8px' }}>
            Enterprise procurement
          </strong>
          {regulatoryReality.procurement.body}
        </div>

        <p className="footnote" style={{ maxWidth: '720px', marginBottom: '12px' }}>
          {regulatoryReality.footnote}{' '}
          <a href={regulatoryReality.footnoteUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--tx-2)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            Source
          </a>
        </p>

        <p className="source-attr" style={{ maxWidth: '720px' }}>
          {regulatoryReality.sourceAttr}{' '}
          <a href={regulatoryReality.sourceUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--ac-text)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
            eur-lex.europa.eu
          </a>
        </p>
      </div>
    </section>
  )
}
