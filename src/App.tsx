import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import ThankYou from './pages/ThankYou'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  )
}
