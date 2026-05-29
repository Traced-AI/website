import NavBar from '../sections/NavBar'
import HowItWorks from '../sections/HowItWorks'
import RuleRegistry from '../sections/RuleRegistry'
import Footer from '../sections/Footer'

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <main>
        <HowItWorks />
        <RuleRegistry />
      </main>
      <Footer />
    </>
  )
}
