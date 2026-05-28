import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ThankYou from './pages/ThankYou'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
