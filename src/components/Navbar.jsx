import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const PAGES = [
  { to: '/', label: 'Accueil' },
  { to: '/pepiniere', label: 'Pépinière' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/evenements', label: 'Événements' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">Agri-Garden</Link>
        <div className="navbar-links">
          {PAGES.map(p => (
            <Link key={p.to} to={p.to} className={location.pathname === p.to ? 'active' : ''}>
              {p.label}
            </Link>
          ))}
        </div>
        <div className="navbar-cta">
          <Link to="/boutique" className="btn btn-white">Boutique</Link>
        </div>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={`navbar-mobile${menuOpen ? ' open' : ''}`}>
        {PAGES.map(p => (
          <Link key={p.to} to={p.to}>{p.label}</Link>
        ))}
      </div>
    </nav>
  )
}
