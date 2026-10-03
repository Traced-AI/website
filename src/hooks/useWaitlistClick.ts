import { useLocation } from 'react-router-dom'
import { scrollBehavior } from '../scrollBehavior'

export function useWaitlistClick() {
  const { pathname, hash } = useLocation()
  return (e: React.MouseEvent) => {
    if (pathname === '/' && hash === '#waitlist') {
      e.preventDefault()
      document.getElementById('waitlist')?.scrollIntoView({ behavior: scrollBehavior() })
      window.history.replaceState(null, '', '/#waitlist')
    }
  }
}
