import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function Coffee() {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 }) }, [])
  return (
    <div className="abge">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Products<span>/</span>Coffee</div>
          <div className="ph-tag">Product Intelligence</div>
          <h1 className="h1">Coffee</h1>
          <p className="lead">Indian coffee is grown in shade, under spice canopies, across the hills of Karnataka, Kerala and Tamil Nadu. We supply green coffee, Arabica and Robusta, graded by screen size, defect count, processing method and cup profile, so roasters know exactly what is arriving.</p>
          <div className="ph-stats">
            <div className="phs"><div className="n">2</div><div className="k">species, Arabica &amp; Robusta</div></div>
            <div className="phs"><div className="n">AA–PB</div><div className="k">screen grades supplied</div></div>
            <div className="phs"><div className="n">80<span className="copper-em">+</span></div><div className="k">specialty cup scores available</div></div>
            <div className="phs"><div className="n">4</div><div className="k">processing methods offered</div></div>
          </div>
        </div>
      </section>

      {/* ============ ARABICA VS ROBUSTA ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Two Species</span>
            <h2 className="h2">Arabica and Robusta are not grades of the same thing.</h2>
            <p className="lead">They are different plants, grown at different altitudes, with different chemistry, price and use. Which you want depends on your blend, your roast and your price point.</p>
          </div>
          <div className="cat-grid">
            <div className="cat-card" data-aos="fade-up">
              <div className="cat-img">
                <div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}>
                  <div className="ph-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z"/>
                      <path d="M16 9h2.5a2.5 2.5 0 010 5H16"/>
                    </svg>
                  </div>
                  <span className="ph-lbl">Arabica green beans · 760×475</span>
                </div>
                <span className="cat-tag">Arabica</span>
              </div>
              <div className="cat-body">
                <h3 className="h3">Arabica</h3>
                <p>Grown at higher altitude. More aromatic, brighter acidity, sweeter and more complex in the cup. Lower caffeine. Bought for flavour and specialty blends.</p>
                <div className="cat-spec-row">
                  <div className="csr"><div className="v">~1.2–1.5%</div><div className="k">Caffeine</div></div>
                  <div className="csr"><div className="v">High</div><div className="k">Acidity / aroma</div></div>
                  <div className="csr"><div className="v">1000m+</div><div className="k">Altitude</div></div>
                </div>
              </div>
            </div>
            <div className="cat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="cat-img">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}>
                  <div className="ph-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z"/>
                      <path d="M16 9h2.5a2.5 2.5 0 010 5H16"/>
                    </svg>
                  </div>
                  <span className="ph-lbl">Robusta cherry &amp; beans · 760×475</span>
                </div>
                <span className="cat-tag">Robusta</span>
              </div>
              <div className="cat-body">
                <h3 className="h3">Robusta</h3>
                <p>Hardier, lower-altitude. Fuller body, stronger and more bitter, heavier crema. Higher caffeine. Bought for espresso blends, instant coffee and value.</p>
                <div className="cat-spec-row">
                  <div className="csr"><div className="v">~2.2–2.7%</div><div className="k">Caffeine</div></div>
                  <div className="csr"><div className="v">Full</div><div className="k">Body / crema</div></div>
                  <div className="csr"><div className="v">Sea–800m</div><div className="k">Altitude</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESSING ============ */}
      <section className="section bg-white hairline-top">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Processing Methods</span>
            <h2 className="h2">How the cherry is processed changes the cup.</h2>
            <p className="lead">The same bean can taste clean and bright or sweet and heavy depending on how it was dried. We supply all four common methods.</p>
          </div>
          <div className="feat-grid" data-aos="fade-up">
            <div className="feat-card">
              <div className="feat-num">Washed</div>
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 14c2 2 4 2 6 0s4-2 6 0 4 2 4 2M4 18c2 2 4 2 6 0s4-2 6 0 4 2 4 2"/>
                  <circle cx="12" cy="6" r="2"/>
                </svg>
              </div>
              <h4>Washed (Plantation)</h4>
              <p>Fruit removed before drying. Cleanest, brightest, most consistent cup. Highlights acidity and origin clarity.</p>
            </div>
            <div className="feat-card" data-d="1">
              <div className="feat-num">Natural</div>
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>
                </svg>
              </div>
              <h4>Natural (Cherry)</h4>
              <p>Dried whole in the fruit. Sweeter, fuller body, fruit-forward. More character, more variability.</p>
            </div>
            <div className="feat-card" data-d="2">
              <div className="feat-num">Honey</div>
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3l7 4v8l-7 4-7-4V7z"/>
                  <path d="M12 3v18M5 7l7 4 7-4"/>
                </svg>
              </div>
              <h4>Honey / Pulped Natural</h4>
              <p>Some mucilage left on during drying. Balance of washed clarity and natural sweetness.</p>
            </div>
            <div className="feat-card" data-d="3">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 12c3-4 6-4 9 0s6 4 9 0"/>
                  <path d="M3 17c3-4 6-4 9 0s6 4 9 0"/>
                </svg>
              </div>
              <div className="feat-num">Monsooned</div>
              <h4>Monsooned Malabar</h4>
              <p>India's signature. Beans exposed to monsoon winds, low acidity, heavy body, mellow and distinctive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GRADING TABLE ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Grading &amp; Quality Parameters</span>
            <h2 className="h2">Graded on screen size, defects and cup.</h2>
            <p className="lead">Indian green coffee is graded primarily by screen size (bean size over a perforated sieve) and defect count. Larger, cleaner, denser beans command the premium.</p>
          </div>
          <div className="spec-wrap" data-aos="fade-up" data-aos-delay="100">
            <table className="spec-table">
              <thead>
                <tr><th>Grade</th><th>Species</th><th>Screen size</th><th>Profile</th><th>Typical use</th></tr>
              </thead>
              <tbody>
                <tr><th>Plantation AA</th><td>Arabica (washed)</td><td className="hl">Screen 17/18</td><td>Bright, clean, full</td><td>Specialty single-origin</td></tr>
                <tr><th>Plantation A</th><td>Arabica (washed)</td><td>Screen 15/16</td><td>Balanced, sweet</td><td>Premium blends</td></tr>
                <tr><th>Arabica Cherry AB</th><td>Arabica (natural)</td><td>Screen 15/16</td><td>Fruity, heavier body</td><td>Filter &amp; blends</td></tr>
                <tr><th>Robusta Parchment AB</th><td>Robusta (washed)</td><td>Screen 15/16</td><td>Clean, strong</td><td>Espresso base</td></tr>
                <tr><th>Robusta Cherry AB</th><td>Robusta (natural)</td><td>Screen 15/16</td><td>Heavy, bittersweet</td><td>Instant &amp; value blends</td></tr>
                <tr><th>Peaberry (PB)</th><td>Arabica / Robusta</td><td className="hl">Round single bean</td><td>Concentrated, lively</td><td>Specialty &amp; gifting</td></tr>
                <tr><th>Monsooned Malabar AA</th><td>Arabica</td><td>Screen 17/18</td><td>Mellow, low acid</td><td>Signature dark roast</td></tr>
              </tbody>
            </table>
          </div>
          <div className="feat-grid cols-3" data-aos="fade-up" data-aos-delay="200" style={{ marginTop: '36px' }}>
            <div className="feat-card">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3v18M5 8c3 0 4-2 7-2s4 2 7 2M5 16c3 0 4-2 7-2s4 2 7 2"/>
                </svg>
              </div>
              <h4>Moisture &amp; density</h4>
              <p>Green coffee shipped at 10–12% moisture, density-graded for even roasting and storage stability.</p>
            </div>
            <div className="feat-card">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7"/>
                  <path d="M21 21l-4.3-4.3"/>
                </svg>
              </div>
              <h4>Defect count</h4>
              <p>Hand and machine sorted to specified defect limits per sample, primary and secondary defects defined.</p>
            </div>
            <div className="feat-card">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z"/>
                  <path d="M16 9h2.5a2.5 2.5 0 010 5H16"/>
                </svg>
              </div>
              <h4>Cup score</h4>
              <p>Specialty lots cupped and scored on the SCA scale; 80+ lots available on request with cupping notes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PACKAGING ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <span className="eyebrow">Packaging &amp; Logistics</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Protected for the cup it arrives as.</h2>
              <p className="lead" style={{ marginTop: '18px', color: 'var(--muted)' }}>Green coffee is hygroscopic and picks up odour. We pack to preserve moisture and aroma from our warehouse to your roastery.</p>
              <table className="spec-table" style={{ marginTop: '26px' }}>
                <thead>
                  <tr><th>Option</th><th>Net weight</th></tr>
                </thead>
                <tbody>
                  <tr><th>Jute bags (GrainPro lined)</th><td>60 kg / 50 kg</td></tr>
                  <tr><th>Vacuum bags</th><td>10 kg / 25 kg</td></tr>
                  <tr><th>Bulk container liner</th><td>~21 MT / FCL</td></tr>
                  <tr><th>Buyer-branded sacks</th><td>To specification</td></tr>
                </tbody>
              </table>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="media tall">
                <div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}>
                  <div className="ph-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                      <path d="M4 8l8-4 8 4v8l-8 4-8-4V8z"/>
                      <path d="M4 8l8 4 8-4M12 12v8"/>
                    </svg>
                  </div>
                  <span className="ph-lbl">Jute coffee sacks stacked in warehouse · 800×1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ RELATED KNOWLEDGE ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 'none', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '50ch' }}>
              <span className="eyebrow">Go Deeper</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Coffee articles in the Knowledge Centre</h2>
            </div>
            <Link to="/knowledge" className="btn btn-outline">All articles <span className="arr">→</span></Link>
          </div>
          <div className="know-grid">
            <Link to="/knowledge" className="know-card" data-aos="fade-up">
              <div className="know-img">
                <div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}>
                  <span className="ph-lbl">Processing · 520×325</span>
                </div>
                <span className="know-cat">Processing</span>
              </div>
              <div className="know-body">
                <div className="know-meta">8 min</div>
                <h3>Coffee processing methods explained</h3>
                <p>Washed, natural, honey and monsooned, and what each does to the cup.</p>
                <span className="txt-link">Read <span className="arr">→</span></span>
              </div>
            </Link>
            <Link to="/knowledge" className="know-card" data-aos="fade-up" data-aos-delay="100">
              <div className="know-img">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}>
                  <span className="ph-lbl">Arabica vs Robusta · 520×325</span>
                </div>
                <span className="know-cat">Species</span>
              </div>
              <div className="know-body">
                <div className="know-meta">6 min</div>
                <h3>Arabica vs Robusta</h3>
                <p>Chemistry, cup and price, choosing the right species for your blend.</p>
                <span className="txt-link">Read <span className="arr">→</span></span>
              </div>
            </Link>
            <Link to="/knowledge" className="know-card" data-aos="fade-up" data-aos-delay="200">
              <div className="know-img">
                <div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}>
                  <span className="ph-lbl">Quality parameters · 520×325</span>
                </div>
                <span className="know-cat">Quality</span>
              </div>
              <div className="know-body">
                <div className="know-meta">7 min</div>
                <h3>Coffee quality parameters</h3>
                <p>Screen size, density, defect count and cup score, reading a green coffee spec.</p>
                <span className="txt-link">Read <span className="arr">→</span></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Request Coffee Quotation</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Tell us species, grade, processing and destination.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Send your green coffee specification and quantity, we'll confirm available lots, share cupping notes where relevant, and quote with packing and incoterm clarity.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/chilli" className="btn btn-ghost-light btn-lg">See Dry Red Chilli</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
export default Coffee
