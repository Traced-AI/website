import { Link } from 'react-router-dom'
import { CAL_BOOKING_URL } from '../config'
import { thankYou } from '../copy'

export default function ThankYou() {
  return (
    <>
      <title>Thank You · Traced AI</title>
      <meta name="robots" content="noindex" />
      <meta name="description" content="We'll respond personally within 48 hours." />
      <link rel="canonical" href="https://traced-ai.com/thank-you" />
      <meta property="og:url" content="https://traced-ai.com/thank-you" />
      <meta property="og:title" content="You're on the list. We'll respond personally." />
      <meta property="og:description" content="We'll respond personally within 48 hours." />
      <div style={{
      minHeight: '100vh',
      background: 'var(--bg-0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ maxWidth: '480px', width: '100%' }}>
        <div style={{
          fontFamily: 'var(--f-mono)',
          fontSize: '10px',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--tx-2)',
          marginBottom: '24px',
        }}>
          TRACED AI
        </div>

        <h1 className="f-display" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'var(--tx-0)',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          {thankYou.headline}
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '48px' }}>
          {thankYou.body}
        </p>

        <div style={{
          background: 'var(--bg-1)',
          border: '1px solid var(--br-default)',
          borderLeft: '3px solid var(--ac)',
          borderRadius: 'var(--r-md)',
          padding: '24px',
          marginBottom: '32px',
        }}>
          <h2 className="f-display" style={{
            fontSize: '1rem',
            fontWeight: 500,
            letterSpacing: '0.03em',
            color: 'var(--tx-0)',
            marginBottom: '12px',
          }}>
            {thankYou.callBlock.heading}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '20px' }}>
            {thankYou.callBlock.body}
          </p>
          <a
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            {thankYou.callBlock.cta}
          </a>
        </div>

        <p style={{ fontSize: '12px', color: 'var(--tx-2)', lineHeight: 1.7, marginBottom: '32px' }}>
          {thankYou.finePrint}
        </p>

        <Link to="/" style={{ fontSize: '13px', color: 'var(--ac-text)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          Back to home
        </Link>
      </div>
    </div>
    </>
  )
}
