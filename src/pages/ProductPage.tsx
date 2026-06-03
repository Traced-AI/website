import NavBar from '../sections/NavBar'
import HowItWorks from '../sections/HowItWorks'
import RuleRegistry from '../sections/RuleRegistry'
import Footer from '../sections/Footer'

export default function ProductPage() {
  return (
    <>
      <title>Product · Traced AI</title>
      <meta name="description" content="Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance." />
      <link rel="canonical" href="https://traced-ai.com/product" />
      <meta property="og:url" content="https://traced-ai.com/product" />
      <meta property="og:title" content="Your data stays local. Your compliance record does not." />
      <meta property="og:description" content="Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance." />
      <NavBar />
      <main>
        <HowItWorks />
        <RuleRegistry />
      </main>
      <Footer />
    </>
  )
}
