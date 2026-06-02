import NavBar from '../sections/NavBar'
import HowItWorks from '../sections/HowItWorks'
import RuleRegistry from '../sections/RuleRegistry'
import Footer from '../sections/Footer'

export default function ProductPage() {
  return (
    <>
      <title>Product · Traced AI</title>
      <meta name="description" content="Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance." />
      <NavBar />
      <main>
        <HowItWorks />
        <RuleRegistry />
      </main>
      <Footer />
    </>
  )
}
