import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useWaitlistClick } from '../hooks/useWaitlistClick'

function ThemeIcon({ theme }: { theme: string }) {
  if (theme === 'dark') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    )
  }
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function NavBar() {
  const location = useLocation()
  const handleWaitlistClick = useWaitlistClick()
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<string>(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  )

  function handleLogoClick(e: React.MouseEvent) {
    if (location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      if (location.hash) window.history.replaceState(null, '', '/')
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
    setTheme(next)
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
          <img
            src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
            alt="Traced AI"
            className="navbar-logo-img"
            width={123}
            height={37}
          />
        </Link>
        <div className="navbar-actions">
          <nav className="navbar-links" aria-label="Site navigation">
            <NavLink to="/product" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}>Product</NavLink>
            <NavLink to="/pricing" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}>Pricing</NavLink>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" aria-pressed={theme === 'dark'}>
            <ThemeIcon theme={theme} />
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <Link to="/#waitlist" className="btn btn-primary" style={{ padding: '7px 16px', fontSize: '13px' }} onClick={handleWaitlistClick}>
            Join waitlist
          </Link>
        </div>
      </div>
    </nav>
  )
}
