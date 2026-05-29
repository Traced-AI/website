import React from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../copy'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '24px', marginBottom: '32px' }}>
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
            <p style={{ fontSize: '13px', color: 'var(--tx-2)', maxWidth: '360px', lineHeight: 1.65 }}>
              {footer.tagline}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {footer.navLinks.map((link, i) => (
                <React.Fragment key={link.href}>
                  <Link
                    to={link.href}
                    style={{ fontSize: '13px', color: 'var(--tx-2)', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ac-text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--tx-2)')}
                  >
                    {link.label}
                  </Link>
                  {i < footer.navLinks.length - 1 && (
                    <span style={{ fontSize: '11px', color: 'var(--tx-2)', opacity: 0.4, userSelect: 'none' }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <a
              href={footer.contactEmail.href}
              style={{ fontSize: '12px', color: 'var(--tx-2)', textDecoration: 'none', opacity: 0.6 }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ac-text)'; e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--tx-2)'; e.currentTarget.style.opacity = '0.6'; }}
            >
              {footer.contactEmail.label}
            </a>
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
