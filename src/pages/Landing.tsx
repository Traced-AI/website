import { DOMAIN } from '../config'
import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import RegulatoryReality from '../sections/RegulatoryReality'
import BuiltFor from '../sections/BuiltFor'
import WaitlistForm from '../sections/WaitlistForm'
import Footer from '../sections/Footer'

export default function Landing() {
  return (
    <>
      <title>Home · Traced AI</title>
      <meta name="description" content="Tamper-evident audit infrastructure for the EU AI Act's high-risk obligations. Your data stays local. Your compliance record does not." />
      <link rel="canonical" href={`${DOMAIN}/`} />
      <meta property="og:url" content={`${DOMAIN}/`} />
      <meta property="og:title" content="Move fast and get investigated. Or use Traced AI." />
      <meta property="og:description" content="Tamper-evident audit infrastructure for the EU AI Act's high-risk obligations. Your data stays local. Your compliance record does not." />
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
