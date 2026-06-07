import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Home.css'

import heroImg from '../../assets/images/products/guntur_sannam_chilli.jpeg'
import chilliImg from '../../assets/images/products/chilli_cato.jpeg'
import credibilityImg from '../../assets/images/home_page_bg.jpeg'

function Home() {
  const rootRef = useRef(null)
  const location = useLocation()

  // Scroll to a section when navigated here with state (e.g. "Knowledge Centre" from the nav)
  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    const el = document.getElementById(target)
    if (el) {
      // Defer so layout/images settle before scrolling
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [location])

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  // Animated counters + map route arcs
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ---- Counters ----
    const counters = root.querySelectorAll('[data-count]')
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = parseFloat(el.getAttribute('data-count'))
        const suffix = el.getAttribute('data-suffix') || ''
        if (reduced) {
          el.textContent = target + suffix
        } else {
          const dur = 1500
          const start = performance.now()
          const step = (now) => {
            const p = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            const val = target * eased
            el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
        cio.unobserve(el)
      })
    }, { threshold: 0.5 })
    counters.forEach((c) => cio.observe(c))

    // ---- Map route arcs ----
    const map = root.querySelector('.map-box')
    let mio
    if (map) {
      mio = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          map.querySelectorAll('.map-arc').forEach((arc, i) => {
            const len = arc.getTotalLength ? arc.getTotalLength() : 400
            arc.style.strokeDasharray = len
            arc.style.strokeDashoffset = reduced ? 0 : len
            if (!reduced) {
              arc.animate(
                [{ strokeDashoffset: len }, { strokeDashoffset: 0 }],
                { duration: 1300, delay: 150 + i * 160, fill: 'forwards', easing: 'cubic-bezier(.22,.7,.3,1)' }
              )
            }
          })
          mio.disconnect()
        })
      }, { threshold: 0.3 })
      mio.observe(map)
    }

    return () => { cio.disconnect(); if (mio) mio.disconnect() }
  }, [])

  return (
    <div className="abge-home" ref={rootRef}>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <span className="eyebrow" data-aos="fade-up">Specialist Agricultural Export · India</span>
            <h1 className="display" data-aos="fade-up" data-aos-delay="80">
              We understand <span className="serif-em">chilli</span> and <span className="serif-em">coffee</span>, not just shipping.
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="160">
              Al Baraqah Global Exports is a focused sourcing and export company built around two
              commodities. We help international buyers procure dry red chilli and coffee with the
              right grade, the right specification and documentation that clears without friction.
            </p>
            <div className="hero-cta" data-aos="fade-up" data-aos-delay="240">
              <Link to="/contact" className="btn btn-navy btn-lg">Request a Quotation <span className="arr">→</span></Link>
              <Link to="/market-intelligence" className="btn btn-outline btn-lg">Explore the Knowledge Centre</Link>
            </div>
            <div className="hero-meta" data-aos="fade-up" data-aos-delay="320">
              <div className="hm">
                <div className="hm-n">2</div>
                <div className="hm-k">commodity families, dry red chilli &amp; coffee</div>
              </div>
              <div className="hm">
                <div className="hm-n">5<span className="copper-em">+</span></div>
                <div className="hm-k">premium grades &amp; varieties offered to spec</div>
              </div>
              <div className="hm">
                <div className="hm-n">100<span className="copper-em">%</span></div>
                <div className="hm-k">documented, compliance-first execution</div>
              </div>
            </div>
          </div>
          <div className="hero-visual" data-aos="fade-up" data-aos-delay="160">
            <div className="hero-frame">
              <img src={heroImg} alt="Premium export-grade Indian dry red chilli" />
            </div>
            <div className="hero-badge">
              <div className="hb-n">CA-Led</div>
              <div className="hb-k">a Chartered Accountant–governed trade desk</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CREDENTIAL STRIP ============ */}
      <section className="cred-band">
        <div className="wrap">
          <span className="c-label">Documentation &amp; Compliance</span>
          <div className="cert-row">
            <div className="cert-badge">
              <span className="cb-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16v4H4zM4 12h16v8H4z"/><path d="M8 16h5"/></svg></span>
              <div><div className="cb-ab">IEC</div><div className="cb-full">Import Export Code</div></div>
            </div>
            <div className="cert-badge">
              <span className="cb-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 6.4L21 9l-5 4.3L17.6 21 12 17l-5.6 4L8 13.3 3 9l6.6-.6z"/></svg></span>
              <div><div className="cb-ab">APEDA</div><div className="cb-full">Agri Export Authority</div></div>
            </div>
            <div className="cert-badge">
              <span className="cb-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2C9 6 9 9 12 13c3-4 3-7 0-11z"/><path d="M7 12c-2.5 4 1 8 5 8s7.5-4 5-8"/></svg></span>
              <div><div className="cb-ab">Spices Board</div><div className="cb-full">Spices Board of India</div></div>
            </div>
            <div className="cert-badge">
              <span className="cb-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></svg></span>
              <div><div className="cb-ab">FSSAI</div><div className="cb-full">Food Safety &amp; Standards</div></div>
            </div>
            <div className="cert-badge">
              <span className="cb-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l8 4v6c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4z"/><path d="M9 12l2 2 4-4"/></svg></span>
              <div><div className="cb-ab">Phytosanitary</div><div className="cb-full">Plant Quarantine Cert.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ POSITIONING ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <span className="eyebrow">Why Governance Matters</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Most exporters chase volume. <span className="serif-em">We built discipline first.</span></h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <p className="lead" style={{ color: 'var(--body)' }}>
                International trade fails on the paperwork far more often than on the product.
                We treat documentation, compliance and financial structuring as the core of the
                business, not an afterthought.
              </p>
              <p style={{ marginTop: '16px', color: 'var(--muted)' }}>
                Run by a Chartered Accountant and an engineering-led execution team, every order
                is structured around written specifications, clean documentation and risk-aware
                payment terms, so goods clear without friction and buyers know exactly what they
                are receiving.
              </p>
              <Link to="/vision" className="txt-link" style={{ marginTop: '24px' }}>Read our vision &amp; standards <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS ============ */}
      <section className="section bg-white hairline-top">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Our Export Portfolio</span>
            <h2 className="h2">Product intelligence, built into the offer.</h2>
            <p className="lead">Each product is supplied against written specification, varieties,
              technical parameters and the markets they suit, not a generic brochure.</p>
          </div>
          <div className="cat-grid">
            <Link to="/what-we-export" state={{ category: 'chilli' }} className="cat-card" data-aos="fade-up">
              <div className="cat-img">
                <img src={chilliImg} alt="Export-grade dry red chilli" />
                <span className="cat-tag">Dry Red Chilli</span>
              </div>
              <div className="cat-body">
                <h3 className="h3">Dry Red Chilli</h3>
                <p>Guntur Sannam (S4/S10), Byadgi and Teja, selected for the colour, pungency and
                  stem profile each market demands.</p>
                <div className="cat-spec-row">
                  <div className="csr"><div className="v">35k–1.1L</div><div className="k">SHU range</div></div>
                  <div className="csr"><div className="v">60–160</div><div className="k">ASTA colour</div></div>
                  <div className="csr"><div className="v">&lt;11%</div><div className="k">Moisture</div></div>
                </div>
                <span className="cat-link">View products <span className="arr">→</span></span>
              </div>
            </Link>
            <Link to="/what-we-export" state={{ category: 'coffee' }} className="cat-card" data-aos="fade-up" data-aos-delay="120">
              <div className="cat-img">
                <div className="ph green-ph">
                  <div className="ph-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z"/><path d="M16 9h2.5a2.5 2.5 0 010 5H16"/><path d="M8 2c-.6 1 .6 2 0 3M11 2c-.6 1 .6 2 0 3"/></svg></div>
                  <span className="ph-lbl">Green coffee beans · parchment &amp; cherry</span>
                </div>
                <span className="cat-tag">Coffee</span>
              </div>
              <div className="cat-body">
                <h3 className="h3">Coffee</h3>
                <p>Arabica and Robusta green coffee, washed and natural processing, graded by
                  screen size, defect count and cup profile.</p>
                <div className="cat-spec-row">
                  <div className="csr"><div className="v">AA–PB</div><div className="k">Screen grades</div></div>
                  <div className="csr"><div className="v">Washed / Natural</div><div className="k">Processing</div></div>
                  <div className="csr"><div className="v">80+</div><div className="k">Cup score</div></div>
                </div>
                <span className="cat-link">View products <span className="arr">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ KNOWLEDGE CENTRE ============ */}
      <section className="section bg-soft" id="knowledge">
        <div className="wrap">
          <div className="know-head" data-aos="fade-up">
            <div className="kh-copy">
              <span className="eyebrow">Knowledge Centre</span>
              <h2 className="h2">Buyer education, not marketing.</h2>
              <p className="lead">The reference desk we wish existed when we started, written to help you
                specify correctly and buy with confidence.</p>
            </div>
            <Link to="/market-intelligence" className="btn btn-outline">All articles <span className="arr">→</span></Link>
          </div>
          <div className="know-grid">
            <Link to="/market-intelligence" className="know-card" data-aos="fade-up">
              <div className="know-img">
                <div className="ph warm-ph"></div>
                <span className="know-cat">Chilli</span>
              </div>
              <div className="know-body">
                <div className="know-meta">Specification · 6 min</div>
                <h3>Understanding SHU and ASTA, and why buyers confuse them</h3>
                <p>Pungency and colour are measured on entirely different scales. Here is how to read
                  both, and what they mean for your end use.</p>
                <span className="txt-link">Read article <span className="arr">→</span></span>
              </div>
            </Link>
            <Link to="/market-intelligence" className="know-card" data-aos="fade-up" data-aos-delay="100">
              <div className="know-img">
                <div className="ph warm-ph"></div>
                <span className="know-cat">Chilli</span>
              </div>
              <div className="know-body">
                <div className="know-meta">Variety · 7 min</div>
                <h3>Teja vs Byadgi: choosing the right chilli variety</h3>
                <p>One is bought for heat and oleoresin yield, the other for deep red colour with low
                  pungency. Picking wrong is an expensive mistake.</p>
                <span className="txt-link">Read article <span className="arr">→</span></span>
              </div>
            </Link>
            <Link to="/market-intelligence" className="know-card" data-aos="fade-up" data-aos-delay="200">
              <div className="know-img">
                <div className="ph green-ph"></div>
                <span className="know-cat">Coffee</span>
              </div>
              <div className="know-body">
                <div className="know-meta">Processing · 8 min</div>
                <h3>Coffee processing methods, and how they change the cup</h3>
                <p>Washed, natural, honey and monsooned, what each does to acidity, body and flavour,
                  and which buyers ask for what.</p>
                <span className="txt-link">Read article <span className="arr">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PROCESS TEASER ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <span className="eyebrow">Operational Model</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Every stage, fully documented.</h2>
              <p className="lead" style={{ marginTop: '18px', color: 'var(--muted)' }}>
                From the first requirement discussion to delivery at your port, every stage is
                defined, recorded and visible to you. Nothing is left to "we'll sort it later".
              </p>
              <Link to="/operational-model" className="btn btn-navy" style={{ marginTop: '26px' }}>Walk the full process <span className="arr">→</span></Link>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <ol className="proc-list">
                <li><span className="pn">01</span><span className="pt">Requirement Discussion</span></li>
                <li><span className="pn">02</span><span className="pt">Product Evaluation &amp; Sampling</span></li>
                <li><span className="pn">03</span><span className="pt">Procurement</span></li>
                <li><span className="pn">04</span><span className="pt">Quality Inspection</span></li>
                <li><span className="pn">05</span><span className="pt">Packaging</span></li>
                <li><span className="pn">06–08</span><span className="pt">Documentation · Shipment · Delivery</span></li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GLOBAL REACH ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="reach-grid">
            <div data-aos="fade-up">
              <span className="eyebrow">Global Reach</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Indian origin, shipped to buyers worldwide.</h2>
              <p className="lead" style={{ marginTop: '16px', color: 'var(--muted)' }}>
                Container loads moving from Indian ports to importers, processors and distributors
                across the markets that buy chilli and coffee at scale.
              </p>
              <div className="region-list">
                <div className="rl">Germany &amp; EU</div>
                <div className="rl">United Kingdom</div>
                <div className="rl">United States</div>
                <div className="rl">UAE &amp; Gulf</div>
                <div className="rl">Netherlands</div>
                <div className="rl">Southeast Asia</div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <div className="map-box">
                <svg className="map-svg" viewBox="0 0 600 420" role="img" aria-label="Export routes from India to global markets">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="rgba(216,188,166,0.16)"/></pattern>
                  </defs>
                  <rect x="0" y="0" width="600" height="420" fill="url(#dots)"/>
                  <path className="map-arc" d="M410,235 Q350,170 300,205"/>
                  <path className="map-arc" d="M410,235 Q330,120 250,120"/>
                  <path className="map-arc" d="M410,235 Q330,330 250,290"/>
                  <path className="map-arc" d="M410,235 Q230,70 110,160"/>
                  <path className="map-arc" d="M410,235 Q500,300 520,250"/>
                  <g><circle className="map-hub" cx="410" cy="235" r="6"/><text x="410" y="258" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.5" fill="#fff">INDIA</text></g>
                  <g><circle className="map-node-ring" cx="300" cy="205" r="9"/><circle className="map-node" cx="300" cy="205" r="3.5"/><text x="300" y="190" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="9" letterSpacing="1" fill="rgba(255,255,255,.8)">GULF</text></g>
                  <g><circle className="map-node-ring" cx="250" cy="120" r="9"/><circle className="map-node" cx="250" cy="120" r="3.5"/><text x="250" y="105" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="9" letterSpacing="1" fill="rgba(255,255,255,.8)">EUROPE</text></g>
                  <g><circle className="map-node-ring" cx="250" cy="290" r="9"/><circle className="map-node" cx="250" cy="290" r="3.5"/><text x="250" y="312" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="9" letterSpacing="1" fill="rgba(255,255,255,.8)">AFRICA</text></g>
                  <g><circle className="map-node-ring" cx="110" cy="160" r="9"/><circle className="map-node" cx="110" cy="160" r="3.5"/><text x="110" y="145" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="9" letterSpacing="1" fill="rgba(255,255,255,.8)">N. AMERICA</text></g>
                  <g><circle className="map-node-ring" cx="520" cy="250" r="9"/><circle className="map-node" cx="520" cy="250" r="3.5"/><text x="520" y="272" textAnchor="middle" fontFamily="Libre Franklin, sans-serif" fontSize="9" letterSpacing="1" fill="rgba(255,255,255,.8)">APAC</text></g>
                </svg>
              </div>
            </div>
          </div>
          <div className="stat-row" data-aos="fade-up" style={{ marginTop: 'clamp(48px,6vw,80px)' }}>
            <div className="stat"><div className="n">#1</div><div className="sep"></div><div className="k">India, world's largest producer &amp; exporter of dry red chilli</div></div>
            <div className="stat"><div className="n">#<span data-count="6" data-suffix="">0</span></div><div className="sep"></div><div className="k">India among the top global green coffee exporters</div></div>
            <div className="stat"><div className="n"><span data-count="5" data-suffix="+">0</span></div><div className="sep"></div><div className="k">grades &amp; varieties supplied to buyer specification</div></div>
            <div className="stat"><div className="n">100<span className="copper-em">%</span></div><div className="sep"></div><div className="k">orders executed against written specification sheets</div></div>
          </div>
        </div>
      </section>

      {/* ============ CREDIBILITY (CA) ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split media-left">
            <div data-aos="fade-up">
              <div className="media tall">
                <img src={credibilityImg} alt="Export documentation and logistics desk" />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="120">
              <span className="eyebrow">Structured Execution</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Managed by a Chartered Accountant, so the paperwork is never the weak link.</h2>
              <p className="lead" style={{ marginTop: '18px', color: 'var(--muted)' }}>
                Product knowledge gets you the right goods. Financial and documentation discipline
                gets them to you cleanly. Our trade desk is run with a CA's instinct for compliance,
                contract structuring and payment terms.
              </p>
              <div className="lead-pillars">
                <div className="lead-pill">
                  <span className="lp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h8M8 17h5"/></svg></span>
                  <h4>Documentation accuracy</h4>
                  <p>Invoices, certificates of origin, phytosanitary &amp; LC documents prepared to clear without query.</p>
                </div>
                <div className="lead-pill">
                  <span className="lp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/></svg></span>
                  <h4>Risk-aware terms</h4>
                  <p>LC, TT and advance structures aligned to your bank and ours, no surprises mid-transaction.</p>
                </div>
              </div>
              <Link to="/our-team" className="txt-link" style={{ marginTop: '26px' }}>Meet the leadership team <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Start a Conversation</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="80" style={{ marginTop: '20px' }}>Tell us your product, grade and destination port.</h2>
          <p data-aos="fade-up" data-aos-delay="160">We'll respond with specification options, indicative pricing and an incoterm-clear
            quotation, usually within two business days.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="240">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/what-we-export" className="btn btn-ghost-light btn-lg">View Full Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
