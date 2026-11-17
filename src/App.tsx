import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import SkipLink from './components/SkipLink'
import ScrollToTop from './components/ScrollToTop'
import Landing from './pages/Landing'
import ProductPage from './pages/ProductPage'
import PricingPage from './pages/PricingPage'
import ThankYou from './pages/ThankYou'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const DPA = lazy(() => import('./pages/DPA'))

export default function App() {
  return (
    <>
      <SkipLink />
      <ScrollToTop />
      <Suspense fallback={null}>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dpa" element={<DPA />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </Suspense>
    </>
  )
}
