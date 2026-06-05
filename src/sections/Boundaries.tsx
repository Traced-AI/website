import { boundaries } from '../copy'

export default function Boundaries() {
  return (
    <section style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{boundaries.sectionLabel}</div>

        <h2 className="section-heading" style={{ marginBottom: '32px' }}>
          {boundaries.heading}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
          {boundaries.items.map((item, i) => (
            <div key={i}>
              <h3 className="f-display" style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--tx-0)',
                marginBottom: '8px',
                letterSpacing: '0.03em',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--tx-1)', lineHeight: 1.75 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
