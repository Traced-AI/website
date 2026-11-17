import { meta } from '../copy'
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
      <title>{meta.landing.title}</title>
      <meta name="description" content={meta.landing.description} />
      <link rel="canonical" href={`${DOMAIN}/`} />
      <meta property="og:url" content={`${DOMAIN}/`} />
      <meta property="og:title" content={meta.landing.ogTitle} />
      <meta property="og:description" content={meta.landing.ogDescription} />
      <NavBar />
      <main id="main-content">
        <Hero />
        <RegulatoryReality />
        <BuiltFor />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  )
}
