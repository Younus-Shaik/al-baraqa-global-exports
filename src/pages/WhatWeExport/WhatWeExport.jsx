import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './WhatWeExport.css'

// Product images
import gunturImg from '../../assets/images/products/guntur_sannam_chilli.jpeg'
import byadgiImg from '../../assets/images/products/byadgi_red_chilli.jpeg'
import tejaImg from '../../assets/images/products/Teja_mirchi.jpeg'
import basmatiImg from '../../assets/images/products/traditional_basmati_rice.jpeg'
import sonaImg from '../../assets/images/products/sona_masoori_rice.jpeg'

const products = [
  {
    id: 'guntur-sannam-chilli',
    name: 'Guntur Sannam Chilli',
    variety: 'Guntur Mirchi',
    category: 'chilli',
    image: gunturImg,
    tagline: 'Bold Heat. Rich Color. Global Standard.',
    description: 'One of the most traded chilli varieties globally with balanced pungency and deep red color, ideal for industrial spice processing.',
    specs: [
      { label: '35,000–40,000 SHU', icon: 'fire' },
      { label: '< 12% Moisture', icon: 'droplet' },
      { label: '341 / 334 Grades', icon: 'layers' }
    ]
  },
  {
    id: 'byadgi-chilli',
    name: 'Byadgi Red Chilli',
    variety: 'Byadgi Mirchi',
    category: 'chilli',
    image: byadgiImg,
    tagline: 'Vibrant Color. Mild Heat. Global Quality.',
    description: 'Internationally recognized for high ASTA color value and mild pungency. Preferred where vibrant red color matters more than heat.',
    specs: [
      { label: 'High ASTA Color', icon: 'palette' },
      { label: 'Low–Medium Heat', icon: 'fire' },
      { label: '< 12% Moisture', icon: 'droplet' }
    ]
  },
  {
    id: 'teja-chilli',
    name: 'Teja Chilli',
    variety: 'Teja Mirchi',
    category: 'chilli',
    image: tejaImg,
    tagline: 'Hot. Spicy. Premium Indian Export Chilli.',
    description: 'One of the hottest commercial chilli varieties from India, widely demanded in high-heat spice markets for elevated capsaicin levels.',
    specs: [
      { label: '50,000+ SHU', icon: 'fire' },
      { label: '< 12% Moisture', icon: 'droplet' },
      { label: 'Sun-Dried', icon: 'sun' }
    ]
  },
  {
    id: 'traditional-basmati-rice',
    name: 'Traditional Basmati Rice',
    variety: 'Premium Basmati',
    category: 'rice',
    image: basmatiImg,
    tagline: 'Naturally Long. Exceptionally Aromatic.',
    description: 'Heritage long-grain aromatic rice from the Indo-Gangetic plains, globally recognized for natural fragrance and premium culinary positioning.',
    specs: [
      { label: 'Long & Slender', icon: 'grain' },
      { label: '12–24 Month Aged', icon: 'clock' },
      { label: '< 14% Moisture', icon: 'droplet' }
    ]
  },
  {
    id: 'sona-masoori-rice',
    name: 'Sona Masoori Rice',
    variety: 'South Indian Medium Grain',
    category: 'rice',
    image: sonaImg,
    tagline: 'Naturally Soft. Delightfully Flavorful.',
    description: 'High-volume staple rice cultivated in South India, positioned for retail and institutional consumption across export markets.',
    specs: [
      { label: 'Medium Grain', icon: 'grain' },
      { label: 'Raw / Steam / Parboiled', icon: 'layers' },
      { label: '< 14% Moisture', icon: 'droplet' }
    ]
  }
]

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'chilli', label: 'Red Chillies' },
  { id: 'rice', label: 'Premium Rice' }
]

const whyChooseUs = [
  {
    icon: 'shield',
    title: 'Export Compliance',
    desc: 'Every shipment meets international import standards with full documentation control and compliance verification.'
  },
  {
    icon: 'search',
    title: 'Batch Traceability',
    desc: 'Complete lot identification from sourcing to container loading with supervised quality verification at every stage.'
  },
  {
    icon: 'warehouse',
    title: 'Moisture-Controlled Storage',
    desc: 'Climate-controlled warehousing ensures product integrity, consistent moisture levels, and extended shelf stability.'
  },
  {
    icon: 'globe',
    title: 'Global Documentation',
    desc: 'Professional export documentation including phytosanitary certificates, COO, packing lists, and bill of lading support.'
  },
  {
    icon: 'container',
    title: 'Container Supervision',
    desc: 'Supervised container loading with seal verification ensures cargo integrity from warehouse to destination port.'
  },
  {
    icon: 'quality',
    title: 'Direct Sourcing',
    desc: 'Procurement directly from verified production belts eliminates intermediaries, ensuring competitive pricing and quality control.'
  }
]

function SpecIcon({ type }) {
  const icons = {
    fire: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1 0 12 0c0-1.532-1.056-3.94-2-5-1.786 3-2.791 3-4 2z" />
      </svg>
    ),
    droplet: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    layers: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    ),
    grain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22 16 8" />
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
        <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  return icons[type] || null
}

function WhyIcon({ type }) {
  const icons = {
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    warehouse: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
        <path d="M6 18h12" /><path d="M6 14h12" /><path d="M6 10h12" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    container: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    quality: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
  return icons[type] || null
}

function WhatWeExport() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category)
      setTimeout(() => {
        const el = document.getElementById('products-listing')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [location.state])

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="export-page">
      {/* ── Hero Section ── */}
      <section className="export-hero">
        <div className="hero-particles">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="hero-particle" />
          ))}
        </div>
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Export-Ready Portfolio
          </div>
          <h1 className="hero-title">
            Premium Indian <span className="gold-text">Agricultural Exports</span>
          </h1>
          <p className="hero-description">
            Sourced from India's finest production belts. Graded, verified, and packed under structured export protocols for global B2B buyers.
          </p>
          <div className="hero-stats">
            <div className="hero-stat" data-aos="fade-up" data-aos-delay="200">
              <span className="hero-stat-value">5+</span>
              <span className="hero-stat-label">Product Lines</span>
            </div>
            <div className="hero-stat" data-aos="fade-up" data-aos-delay="300">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Quality Verified</span>
            </div>
            <div className="hero-stat" data-aos="fade-up" data-aos-delay="400">
              <span className="hero-stat-value">FCL</span>
              <span className="hero-stat-label">Container Loads</span>
            </div>
          </div>
          <div className="hero-divider" />
        </div>
      </section>

      {/* ── Product Listing ── */}
      <section className="category-section" id="products-listing">
        <div className="category-section-inner">
          <div className="section-header" data-aos="fade-up">
            <span className="section-eyebrow">Our Products</span>
            <h2 className="section-title">Export-Grade Commodities</h2>
            <p className="section-subtitle">
              Each product is sourced, graded, and packed under defined procurement
              protocols for international trade compliance.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="category-tabs" data-aos="fade-up" data-aos-delay="100">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="product-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  <span className="product-category-badge">
                    {product.category === 'chilli' ? 'Red Chilli' : 'Rice'}
                  </span>
                  <div className="product-card-overlay">
                    <span>
                      View Details
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-name">{product.name}</h3>
                  <p className="product-card-variety">{product.variety}</p>
                  <p className="product-card-desc">{product.description}</p>
                  <div className="product-card-specs">
                    {product.specs.map((spec, si) => (
                      <span key={si} className="product-spec-chip">
                        <SpecIcon type={spec.icon} />
                        {spec.label}
                      </span>
                    ))}
                  </div>
                  <div className="product-card-cta">
                    View Specifications
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="why-choose-section">
        <div className="why-choose-inner">
          <div className="section-header" data-aos="fade-up">
            <span className="section-eyebrow">Our Commitment</span>
            <h2 className="section-title">Why Global Buyers Trust Us</h2>
            <p className="section-subtitle">
              Structured procurement, verified quality, and compliance-driven export execution
              for every shipment.
            </p>
          </div>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="why-choose-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="why-card-icon">
                  <WhyIcon type={item.icon} />
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="export-cta-banner">
        <div className="cta-content" data-aos="fade-up">
          <h2 className="cta-title">
            Ready to <span className="gold-text">Source Premium Indian Commodities</span>?
          </h2>
          <p className="cta-desc">
            Share your product requirements including variety, quantity, packaging, and
            destination, we'll provide competitive pricing and export specifications.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-btn-primary">
              Request Quotation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/contact" className="cta-btn-secondary">
              Download Product Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatWeExport
