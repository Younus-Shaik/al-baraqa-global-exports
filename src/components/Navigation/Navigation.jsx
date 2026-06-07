import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'
import falconLogo from '../../assets/images/only_falcon_logo.png'
import brandName from '../../assets/images/brand_name.png'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()

  // Close menus on route change
  useEffect(() => { setMenuOpen(false); setProductsOpen(false) }, [location])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setProductsOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="glass-nav">
          <div className="nav-row">
            {/* Brand */}
            <Link to="/" className="brand" aria-label="Al Baraqah Global Exports home">
              <img src={falconLogo} alt="" className="brand__logo" />
              <img src={brandName} alt="Al Baraqah Global Exports" className="brand__name-img" />
            </Link>

            {/* Nav links */}
            <nav className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} aria-label="Primary">
              <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Home</Link>

              {/* Products dropdown */}
              <div className={`nav-drop ${productsOpen ? 'nav-drop--open' : ''}`}>
                <button
                  type="button"
                  className="nav-drop__btn"
                  aria-expanded={productsOpen}
                  onClick={() => setProductsOpen((o) => !o)}
                >
                  Products
                </button>
                <div className="nav-menu">
                  <Link to="/chilli" className="nav-menu__item chilli" onClick={() => setMenuOpen(false)}>
                    <span className="nm-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 4c2 3 1 6-2 9s-7 6-9 7c1-4 3-7 6-10s4-5 5-6z" /><path d="M13 4c0-1 1-2 2-2 1.5 0 2 1 3 1" /></svg>
                    </span>
                    <span className="nm-txt">
                      <span className="nm-t">Dry Red Chilli</span>
                      <span className="nm-d">Teja · Byadgi · Sannam</span>
                    </span>
                  </Link>
                  <Link to="/coffee" className="nav-menu__item coffee" onClick={() => setMenuOpen(false)}>
                    <span className="nm-ic">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z" /><path d="M16 9h2.5a2.5 2.5 0 010 5H16" /><path d="M8 2c-.6 1 .6 2 0 3M11 2c-.6 1 .6 2 0 3" /></svg>
                    </span>
                    <span className="nm-txt">
                      <span className="nm-t">Coffee</span>
                      <span className="nm-d">Arabica · Robusta · Washed &amp; Natural</span>
                    </span>
                  </Link>
                </div>
              </div>

              <Link to="/knowledge" className={isActive('/knowledge')} onClick={() => setMenuOpen(false)}>Knowledge Centre</Link>
              <Link to="/export-process" className={isActive('/export-process')} onClick={() => setMenuOpen(false)}>Export Process</Link>
              <Link to="/market-insights" className={isActive('/market-insights')} onClick={() => setMenuOpen(false)}>Market Insights</Link>
              <Link to="/about" className={isActive('/about')} onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/our-team" className={isActive('/our-team')} onClick={() => setMenuOpen(false)}>Our Team</Link>
              <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Request Quote <span className="cta-arr" aria-hidden="true">→</span></Link>
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              className={`hamburger ${menuOpen ? 'hamburger--active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
