import { meta } from '../copy'
import { DOMAIN } from '../config'
import NavBar from '../sections/NavBar'
import HowItWorks from '../sections/HowItWorks'
import Boundaries from '../sections/Boundaries'
import RuleRegistry from '../sections/RuleRegistry'
import Footer from '../sections/Footer'

export default function ProductPage() {
  return (
    <>
      <title>{meta.product.title}</title>
      <meta name="description" content={meta.product.description} />
      <link rel="canonical" href={`${DOMAIN}/product`} />
      <meta property="og:url" content={`${DOMAIN}/product`} />
      <meta property="og:title" content={meta.product.ogTitle} />
      <meta property="og:description" content={meta.product.ogDescription} />
      <NavBar />
      <main id="main-content">
        <HowItWorks />
        <Boundaries />
        <RuleRegistry />
      </main>
      <Footer />
    </>
  )
}
