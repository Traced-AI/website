import { Link } from 'react-router-dom'
import NavBar from '../sections/NavBar'
import Pricing from '../sections/Pricing'
import Footer from '../sections/Footer'
import { pricing } from '../copy'

export default function PricingPage() {
  return (
    <>
      <title>Pricing · Traced AI</title>
      <meta name="description" content="Free tier to enterprise. Start tracing AI decisions in minutes." />
      <NavBar />
      <main>
        <Pricing />
        <section style={{ background: 'var(--bg-0)', borderTop: '1px solid var(--br-subtle)' }}>
          <div className="page-section" style={{ textAlign: 'center', paddingTop: '48px', paddingBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--f-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 500, letterSpacing: '0.03em', color: 'var(--tx-0)', marginBottom: '20px' }}>
              {pricing.readyHeadline}
            </p>
            <Link to="/#waitlist" className="btn btn-primary">
              Join the waitlist →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
