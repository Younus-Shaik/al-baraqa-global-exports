import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function MarketInsights() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <div className="abge">

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Market Insights</div>
          <div className="ph-tag">Commodity Intelligence</div>
          <h1 className="h1">Market Insights</h1>
          <p className="lead">Crop conditions, seasonal availability and export trends for the two commodities we live in. Read this before you time a purchase, buying chilli or coffee against the season is half the battle.</p>
        </div>
      </section>

      {/* SEASONAL AVAILABILITY */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Seasonal Availability</span>
            <h2 className="h2">When the crop is fresh, and when to contract.</h2>
            <p className="lead">Indian harvest windows for the products we export. Fresh-crop arrivals are the best moment for colour, moisture and price; we contract ahead of the peak to secure grade.</p>
          </div>
          <div className="season-grid" data-aos="fade-up" data-aos-delay="100">
            <div className="season-head">
              <div className="sh-label">Commodity</div>
              <div className="sh-months">
                <span>J</span><span>F</span><span>M</span><span>A</span><span>M</span><span>J</span>
                <span>J</span><span>A</span><span>S</span><span>O</span><span>N</span><span>D</span>
              </div>
            </div>
            <div className="season-row">
              <div className="sr-label">Dry Red Chilli<small>Guntur / Khammam belt</small></div>
              <div className="season-months">
                <div className="m peak">J</div><div className="m peak">F</div><div className="m on">M</div>
                <div className="m on">A</div><div className="m">M</div><div className="m">J</div>
                <div className="m">J</div><div className="m">A</div><div className="m">S</div>
                <div className="m">O</div><div className="m">N</div><div className="m on">D</div>
              </div>
            </div>
            <div className="season-row">
              <div className="sr-label">Byadgi Chilli<small>Karnataka belt</small></div>
              <div className="season-months">
                <div className="m on">J</div><div className="m peak">F</div><div className="m peak">M</div>
                <div className="m on">A</div><div className="m">M</div><div className="m">J</div>
                <div className="m">J</div><div className="m">A</div><div className="m">S</div>
                <div className="m">O</div><div className="m">N</div><div className="m">D</div>
              </div>
            </div>
            <div className="season-row">
              <div className="sr-label">Arabica Coffee<small>Karnataka / Kerala hills</small></div>
              <div className="season-months">
                <div className="m on">J</div><div className="m on">F</div><div className="m">M</div>
                <div className="m">A</div><div className="m">M</div><div className="m">J</div>
                <div className="m">J</div><div className="m">A</div><div className="m">S</div>
                <div className="m">O</div><div className="m peak">N</div><div className="m peak">D</div>
              </div>
            </div>
            <div className="season-row">
              <div className="sr-label">Robusta Coffee<small>Western Ghats</small></div>
              <div className="season-months">
                <div className="m peak">J</div><div className="m peak">F</div><div className="m on">M</div>
                <div className="m">A</div><div className="m">M</div><div className="m">J</div>
                <div className="m">J</div><div className="m">A</div><div className="m">S</div>
                <div className="m">O</div><div className="m">N</div><div className="m on">D</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px', marginTop: '18px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--muted)', fontFamily: 'var(--display)', fontWeight: 600 }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: 'var(--green-700)' }}></span>
              Peak harvest / fresh crop
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--muted)', fontFamily: 'var(--display)', fontWeight: 600 }}>
              <span style={{ width: '14px', height: '14px', borderRadius: '3px', background: 'var(--green-050)', border: '1px solid #cfe0d6' }}></span>
              Available from store
            </span>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Commodity Notes</span>
            <h2 className="h2">Current reading of the market.</h2>
            <p className="lead">Professional analysis, not hype. Where we see prices, crop and demand heading, and what it means for your buying decision.</p>
          </div>
          <div className="insight-grid">
            <a href="/contact" className="insight-card" data-aos="fade-up">
              <div className="ic-img">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}>
                  <span className="ph-lbl">Chilli yard · 400×400</span>
                </div>
              </div>
              <div className="ic-body">
                <div className="ic-meta"><span className="tag-region">Chilli</span><span className="dot"></span><span>Crop Condition</span></div>
                <h3>Guntur new-crop arrivals and what they mean for ASTA</h3>
                <p>Fresh-crop chilli typically lands with stronger colour and lower moisture. We track arrivals at Guntur, the world's largest chilli market, to time colour-led purchases.</p>
              </div>
            </a>
            <a href="/contact" className="insight-card" data-aos="fade-up" data-aos-delay="100">
              <div className="ic-img">
                <div className="ph green-ph" style={{ position: 'absolute', inset: 0 }}>
                  <span className="ph-lbl">Coffee hills · 400×400</span>
                </div>
              </div>
              <div className="ic-body">
                <div className="ic-meta"><span className="tag-region">Coffee</span><span className="dot"></span><span>Price Trend</span></div>
                <h3>Robusta firmness and the Arabica differential</h3>
                <p>Global Robusta strength has narrowed the gap to Arabica in recent seasons. For blend buyers, the species cost trade-off is worth revisiting before contracting.</p>
              </div>
            </a>
            <a href="/contact" className="insight-card" data-aos="fade-up" data-aos-delay="200">
              <div className="ic-img">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}>
                  <span className="ph-lbl">Container loading · 400×400</span>
                </div>
              </div>
              <div className="ic-body">
                <div className="ic-meta"><span className="tag-region">Export</span><span className="dot"></span><span>Trade Trend</span></div>
                <h3>Buyer demand for documented, traceable lots</h3>
                <p>Importers in the EU and Gulf increasingly require full traceability and clean phytosanitary documentation. Specialisation and a CA-led desk make this routine, not a scramble.</p>
              </div>
            </a>
            <a href="/contact" className="insight-card" data-aos="fade-up" data-aos-delay="100">
              <div className="ic-img">
                <div className="ph green-ph" style={{ position: 'absolute', inset: 0 }}>
                  <span className="ph-lbl">Monsoon coast · 400×400</span>
                </div>
              </div>
              <div className="ic-body">
                <div className="ic-meta"><span className="tag-region">Coffee</span><span className="dot"></span><span>Seasonal</span></div>
                <h3>Monsooned Malabar: a window worth planning for</h3>
                <p>Monsooning runs through the wet months on the Malabar coast. Buyers wanting this signature profile should indicate intent early, as volumes are finite.</p>
              </div>
            </a>
          </div>
          <p className="muted" data-aos="fade-up" data-aos-delay="200" style={{ marginTop: '24px', fontSize: '13px' }}>
            Insights reflect our reading of public market conditions and origin observation. They are guidance, not a price guarantee, contact the trade desk for live indications.
          </p>
        </div>
      </section>

      {/* AT A GLANCE */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head center" data-aos="fade-up">
            <span className="eyebrow center">India at Origin</span>
            <h2 className="h2">Why origin matters for these two crops.</h2>
          </div>
          <div className="stat-row" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: 'clamp(34px,4vw,52px)' }}>
            <div className="stat"><div className="n">#1</div><div className="sep"></div><div className="k">India is the world's largest producer of dry red chilli</div></div>
            <div className="stat"><div className="n">Guntur</div><div className="sep"></div><div className="k">home to one of the world's largest chilli markets</div></div>
            <div className="stat"><div className="n">Shade</div><div className="sep"></div><div className="k">most Indian coffee is shade-grown under spice canopy</div></div>
            <div className="stat"><div className="n">Top&nbsp;10</div><div className="sep"></div><div className="k">India ranks among the leading green-coffee exporters</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Time It Right</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Want a live read on your product?</h2>
          <p data-aos="fade-up" data-aos-delay="200">Tell us the variety or grade you're watching and your destination, we'll share current availability and an indicative position.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Ask the Trade Desk <span className="arr">→</span></Link>
            <Link to="/knowledge" className="btn btn-ghost-light btn-lg">Knowledge Centre</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MarketInsights
