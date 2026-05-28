import NavBar from '../sections/NavBar'
import Hero from '../sections/Hero'
import RegulatoryReality from '../sections/RegulatoryReality'
import HowItWorks from '../sections/HowItWorks'
import RuleRegistry from '../sections/RuleRegistry'
import BuiltFor from '../sections/BuiltFor'
import Pricing from '../sections/Pricing'
import WaitlistForm from '../sections/WaitlistForm'
import Footer from '../sections/Footer'

export default function Landing() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <RegulatoryReality />
        <HowItWorks />
        <RuleRegistry />
        <BuiltFor />
        <Pricing />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
