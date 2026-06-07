import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTeamMember = (memberId) => {
    if (location.pathname === '/our-team') {
      // Already on team page  scroll directly with footer offset
      const element = document.getElementById(memberId)
      if (element) {
        const navbar = document.querySelector('nav')
        const navHeight = navbar ? navbar.offsetHeight + 140 : 0
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: 'smooth'
        })
      }
    } else {
      // Navigate to team page with scrollTo state
      navigate('/our-team', { state: { scrollTo: memberId } })
    }
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Column 1: Brand & Authority */}
          <div className="footer-column">
            <h3 className="footer-heading">Al Baraqah Global Exports</h3>
            <p className="footer-description">
              Leading the future of global trade with intelligence, compliance, and operational excellence.
              Building long-term trade relationships through governance and market insights.
            </p>
            <div className="social-links">
              <a href="https://www.linkedin.com/company/albaraqah-global-exports/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/abqglobalexports?igsh=OWUwZHQyajc0aHpp" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://wa.me/919030873730?text=Hello%20ALBARAQAH%20GLOBAL%20EXPORTS,%20I%20am%20reaching%20out%20from%20your%20website.%20I%20am%20interested%20in%20your%20products%20and%20would%20like%20to%20request%20a%20catalog%20to%20discuss%20my%20sourcing%20requirements" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="footer-column">
            <h3 className="footer-heading">Products</h3>
            <nav className="footer-nav">
              <Link to="/chilli" className="footer-link" onClick={scrollToTop}>Dry Red Chilli</Link>
              <Link to="/coffee" className="footer-link" onClick={scrollToTop}>Coffee</Link>
              <Link to="/resources" className="footer-link" onClick={scrollToTop}>Specification Sheets</Link>
              <Link to="/contact" className="footer-link" onClick={scrollToTop}>Request a Quote</Link>
            </nav>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <nav className="footer-nav">
              <Link to="/knowledge" className="footer-link" onClick={scrollToTop}>Knowledge Centre</Link>
              <Link to="/export-process" className="footer-link" onClick={scrollToTop}>Export Process</Link>
              <Link to="/market-insights" className="footer-link" onClick={scrollToTop}>Market Insights</Link>
              <Link to="/about" className="footer-link" onClick={scrollToTop}>About</Link>
              <Link to="/our-team" className="footer-link" onClick={scrollToTop}>Our Team</Link>
              <Link to="/resources" className="footer-link" onClick={scrollToTop}>Resources</Link>
            </nav>
          </div>



          {/* Column 4: Contact and Trade Initiation */}
          <div className="footer-column">
            <h3 className="footer-heading">Contact & Trade Initiation</h3>
            <div className="contact-info-footer">
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>21/196, Hyderkhan Street,<br />Proddatur, Kadapa District,<br />Andhra Pradesh, 516360</span>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:rafa@abqglobalexports.com" style={{ color: 'inherit', textDecoration: 'none' }}>rafa@abqglobalexports.com</a>
              </div>
              <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+919030873730" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9030873730</a>
              </div>
            </div>
            <Link to="/contact" className="footer-cta">
              Initiate Trade Inquiry
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Al Baraqah Global Exports. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="legal-link" onClick={scrollToTop}>Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="legal-link" onClick={scrollToTop}>Terms of Service</Link>
            <span>•</span>
            <Link to="/trade-terms" className="legal-link" onClick={scrollToTop}>Trade Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
