import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { scrollBehavior } from '../scrollBehavior'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return
    // Lazy routes may not have mounted yet: retry for ~1s before giving up.
    let frame = 0
    let tries = 0
    const seek = () => {
      const el = document.getElementById(hash.slice(1))
      if (el) el.scrollIntoView({ behavior: scrollBehavior() })
      else if (tries++ < 60) frame = requestAnimationFrame(seek)
    }
    frame = requestAnimationFrame(seek)
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
