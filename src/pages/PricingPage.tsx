import NavBar from '../sections/NavBar'
import Pricing from '../sections/Pricing'
import Footer from '../sections/Footer'

export default function PricingPage() {
  return (
    <>
      <NavBar />
      <main>
        <Pricing />
        <section style={{ background: 'var(--bg-1)', borderTop: '1px solid var(--br-subtle)' }}>
          <div className="page-section" style={{ textAlign: 'center', paddingTop: '48px', paddingBottom: '64px' }}>
            <p style={{ fontFamily: 'var(--f-display-C)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 500, letterSpacing: '0.03em', color: 'var(--tx-0)', marginBottom: '20px' }}>
              Ready to start?
            </p>
            <a href="/#waitlist" className="btn btn-primary">
              Join the waitlist →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
