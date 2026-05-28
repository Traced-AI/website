import Badge from '../components/Badge'
import { ruleRegistry } from '../copy'

export default function RuleRegistry() {
  return (
    <section style={{ background: 'var(--bg-0)' }}>
      <div className="page-section">
        <div className="section-label">{ruleRegistry.sectionLabel}</div>

        <h2 className="section-heading" style={{ marginBottom: '8px' }}>
          {ruleRegistry.headline1}
        </h2>
        <h2 className="section-heading" style={{ marginBottom: '32px', color: 'var(--ac-text)' }}>
          {ruleRegistry.headline2}
        </h2>

        <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '20px' }}>
          {ruleRegistry.body}
        </p>
        <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '20px' }}>
          {ruleRegistry.body2}
        </p>
        <p style={{ fontSize: '15px', color: 'var(--tx-1)', lineHeight: 1.75, maxWidth: '680px', marginBottom: '40px' }}>
          {ruleRegistry.body3}
        </p>

        <div className="card" style={{ maxWidth: '680px' }}>
          <div className="card-mono-label">Rule Registry Entry</div>
          <table className="registry-table">
            <tbody>
              {ruleRegistry.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.field}</td>
                  <td>
                    {row.url ? (
                      <a href={row.url} target="_blank" rel="noopener noreferrer">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
            {ruleRegistry.badges.map((b) => (
              <Badge key={b} variant="teal">{b}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
