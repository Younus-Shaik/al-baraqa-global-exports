import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navigation.css'
import falconLogo from '../../assets/images/only_falcon_logo.png'
import brandName from '../../assets/images/brand_name.png'

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Close menus on route change
  useEffect(() => { setMenuOpen(false); setProductsOpen(false) }, [location])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); setProductsOpen(false) } }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => (location.pathname === path ? 'active' : '')

  // "Knowledge Centre" → scroll to the home page section
  const goToKnowledge = (e) => {
    e.preventDefault()
    setMenuOpen(false)
    if (location.pathname === '/') {
      const el = document.getElementById('knowledge')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: 'knowledge' } })
    }
  }

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
                  <Link to="/what-we-export" state={{ category: 'chilli' }} className="nav-menu__item chilli" onClick={() => setMenuOpen(false)}>
                    <span className="nm-t">Dry Red Chilli</span>
                    <span className="nm-d">Teja · Byadgi · Sannam</span>
                  </Link>
                  <Link to="/what-we-export" state={{ category: 'coffee' }} className="nav-menu__item coffee" onClick={() => setMenuOpen(false)}>
                    <span className="nm-t">Coffee</span>
                    <span className="nm-d">Arabica · Robusta · Washed &amp; Natural</span>
                  </Link>
                </div>
              </div>

              <a href="/#knowledge" onClick={goToKnowledge}>Knowledge Centre</a>
              <Link to="/operational-model" className={isActive('/operational-model')} onClick={() => setMenuOpen(false)}>Export Process</Link>
              <Link to="/market-intelligence" className={isActive('/market-intelligence')} onClick={() => setMenuOpen(false)}>Market Insights</Link>
              <Link to="/vision" className={isActive('/vision')} onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/our-team" className={isActive('/our-team')} onClick={() => setMenuOpen(false)}>Our Team</Link>
              <Link to="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Request Quote</Link>
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
