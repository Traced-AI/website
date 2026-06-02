import { useLocation } from 'react-router-dom'

export function useWaitlistClick() {
  const { pathname, hash } = useLocation()
  return (e: React.MouseEvent) => {
    if (pathname === '/' && hash === '#waitlist') {
      e.preventDefault()
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', '/#waitlist')
    }
  }
}
