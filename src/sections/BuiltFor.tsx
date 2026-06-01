import { builtFor } from '../copy'

export default function BuiltFor() {
  return (
    <section style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)', borderBottom: '1px solid var(--br-subtle)' }}>
      <div className="page-section">
        <div className="section-label">{builtFor.sectionLabel}</div>

        <h2 className="section-heading" style={{ maxWidth: '680px', marginBottom: '48px' }}>
          {builtFor.headline}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {builtFor.cards.map((card, i) => (
            <div key={i} className="card">
              <div className="card-mono-label">{card.title}</div>
              <p className="card-body" style={{ marginBottom: 0 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
