import { Link } from 'react-router'
import NavBar from '../sections/NavBar'
import Footer from '../sections/Footer'
import { meta, notFound, ui } from '../copy'

export default function NotFound() {
  return (
    <>
      <title>{meta.notFound.title}</title>
      <meta name="robots" content="noindex" />
      <NavBar />
      <main id="main-content" style={{
      minHeight: '70vh',
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
          {notFound.code}
        </div>

        <h1 className="f-display" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'var(--tx-0)',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          {notFound.headline}
        </h1>

        <p style={{ fontSize: '16px', color: 'var(--tx-1)', lineHeight: 1.75, marginBottom: '40px' }}>
          {notFound.body}
        </p>

        <Link to="/" className="btn btn-primary">
          {ui.backToHome}
        </Link>
      </div>
    </main>
      <Footer />
    </>
  )
}
