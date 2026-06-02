import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <title>404 · Traced AI</title>
      <meta name="robots" content="noindex" />
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
          404
        </div>

        <h1 style={{
          fontFamily: 'var(--f-display-C)',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'var(--tx-0)',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          Page not found.
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '40px' }}>
          This page doesn't exist.
        </p>

        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </div>
    </>
  )
}
