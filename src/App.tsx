import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ThankYou from './pages/ThankYou'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import DPA from './pages/DPA'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/dpa" element={<DPA />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
