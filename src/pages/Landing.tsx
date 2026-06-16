import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import RegulatoryReality from '../sections/RegulatoryReality'
import BuiltFor from '../sections/BuiltFor'
import WaitlistForm from '../sections/WaitlistForm'
import Footer from '../sections/Footer'
import { DOMAIN } from '../config'

export default function Landing() {
  return (
    <>
      <title>Home · Traced AI</title>
      <meta name="description" content="Traced AI builds the tamper-evident audit infrastructure regulated companies need before August 2026 enforcement. Your data stays local. Your compliance record does not." />
      <link rel="canonical" href={`${DOMAIN}/`} />
      <meta property="og:url" content={`${DOMAIN}/`} />
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
