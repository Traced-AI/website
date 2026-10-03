import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollBehavior } from '../scrollBehavior'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: scrollBehavior() })
    })
    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}
