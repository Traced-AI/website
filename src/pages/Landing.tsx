import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import RegulatoryReality from '../sections/RegulatoryReality'
import BuiltFor from '../sections/BuiltFor'
import WaitlistForm from '../sections/WaitlistForm'
import Footer from '../sections/Footer'

export default function Landing() {
  return (
    <>
      <title>Traced AI: EU AI Act audit trail for high-risk AI decisions</title>
      <meta name="description" content="Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not." />
      <link rel="canonical" href="https://traced-ai.com/" />
      <meta property="og:url" content="https://traced-ai.com/" />
      <meta property="og:title" content="Move fast and get investigated. Or use Traced AI." />
      <meta property="og:description" content="Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not." />
      <NavBar />
      <main>
        <Hero />
        <RegulatoryReality />
        <BuiltFor />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
