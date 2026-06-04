import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { footer } from '../copy'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-row" style={{ gap: '24px', marginBottom: '32px' }}>
          <div>
            <div className="f-display" style={{
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
                <Fragment key={link.href}>
                  <Link to={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                  {i < footer.navLinks.length - 1 && (
                    <span style={{ fontSize: '11px', color: 'var(--tx-2)', opacity: 0.4, userSelect: 'none' }}>·</span>
                  )}
                </Fragment>
              ))}
            </div>
            <a href={footer.contactEmail.href} className="footer-contact-link">
              {footer.contactEmail.label}
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--br-subtle)', paddingTop: '24px' }}>
          <div className="footer-row" style={{ gap: '2rem', marginBottom: '20px' }}>
            <div>
              <p style={{ fontSize: '12px', color: 'var(--tx-2)', marginBottom: '4px', fontFamily: 'var(--f-mono)', letterSpacing: '0.04em' }}>
                {footer.company.name}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--tx-2)', margin: 0 }}>
                {footer.company.registration}
              </p>
            </div>
            <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {footer.company.address.map((line, i) => (
                <p key={i} style={{ fontSize: '11px', color: 'var(--tx-2)', margin: 0 }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          <p className="footnote" style={{ maxWidth: '700px' }}>
            {footer.legal}
          </p>
        </div>
      </div>
    </footer>
  )
}
