import { footer } from '../copy'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '32px', marginBottom: '40px' }}>
          <div>
            <div style={{
              fontFamily: 'var(--f-display-C)',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: 'var(--tx-0)',
              marginBottom: '8px',
            }}>
              Traced AI
            </div>
            <p style={{ fontSize: '13px', color: 'var(--tx-2)', maxWidth: '320px', lineHeight: 1.65 }}>
              {footer.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {footer.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                style={{ fontSize: '13px', color: 'var(--tx-2)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ac-text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--tx-2)')}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--br-subtle)', paddingTop: '24px' }}>
          <p style={{ fontSize: '12px', color: 'var(--tx-2)', marginBottom: '4px', fontFamily: 'var(--f-mono)', letterSpacing: '0.04em' }}>
            {footer.company.name}
          </p>
          <p style={{ fontSize: '11px', color: 'var(--tx-2)', marginBottom: '2px' }}>
            {footer.company.line1}
          </p>
          <p style={{ fontSize: '11px', color: 'var(--tx-2)', marginBottom: '20px' }}>
            {footer.company.line2}
          </p>
          <p className="footnote" style={{ maxWidth: '700px' }}>
            {footer.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
