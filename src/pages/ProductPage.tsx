import NavBar from '../sections/NavBar'
import HowItWorks from '../sections/HowItWorks'
import Boundaries from '../sections/Boundaries'
import RuleRegistry from '../sections/RuleRegistry'
import Footer from '../sections/Footer'
import { DOMAIN } from '../config'

export default function ProductPage() {
  return (
    <>
      <title>Product · Traced AI</title>
      <meta name="description" content="Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance." />
      <link rel="canonical" href={`${DOMAIN}/product`} />
      <meta property="og:url" content={`${DOMAIN}/product`} />
      <meta property="og:title" content="Your data stays local. Your compliance record does not." />
      <meta property="og:description" content="Local-first SDK, cryptographic ledger, and auditor-ready exports for EU AI Act compliance." />
      <NavBar />
      <main>
        <HowItWorks />
        <Boundaries />
        <RuleRegistry />
      </main>
      <Footer />
    </>
  )
}
