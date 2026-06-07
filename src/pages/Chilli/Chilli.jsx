import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function Chilli() {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 }) }, [])
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="abge">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Products<span>/</span>Dry Red Chilli</div>
          <div className="ph-tag">Product Intelligence</div>
          <h1 className="h1">Dry Red Chilli</h1>
          <p className="lead">India grows and exports more dry red chilli than any other country. The difference between a good shipment and a returned one is variety selection and grading, knowing whether your market wants heat, colour, or a specific oleoresin yield.</p>
          <div className="ph-stats">
            <div className="phs"><div className="n">35k–1.1L</div><div className="k">SHU pungency range across varieties</div></div>
            <div className="phs"><div className="n">60–160<span className="copper-em">+</span></div><div className="k">ASTA colour value range</div></div>
            <div className="phs"><div className="n">4</div><div className="k">core export varieties offered</div></div>
            <div className="phs"><div className="n">&lt;11<span className="copper-em">%</span></div><div className="k">moisture, export standard</div></div>
          </div>
        </div>
      </section>

      {/* ============ INTRO SPLIT ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <div className="media wide">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}>
                  <div className="ph-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M13 4c2 3 1 6-2 9s-7 6-9 7c1-4 3-7 6-10s4-5 5-6z"/><path d="M13 4c0-1 1-2 2-2 1.5 0 2 1 3 1"/></svg></div>
                  <span className="ph-lbl">Whole dry red chilli, sorted on drying yard · 760×475</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="eyebrow">How to Read a Chilli</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Two numbers decide most purchases.</h2>
              <p className="lead" style={{ marginTop: '18px', color: 'var(--body)' }}>
                <strong style={{ color: 'var(--ink)' }}>SHU (Scoville Heat Units)</strong> measures pungency, how hot the chilli is.
                <strong style={{ color: 'var(--ink)' }}> ASTA colour value</strong> measures extractable red colour. They move independently:
                a chilli can be intensely hot with modest colour, or mild with deep, prized red.
              </p>
              <p style={{ marginTop: '14px', color: 'var(--muted)' }}>
                Spice processors extracting oleoresin chase SHU and capsaicin yield. Food manufacturers
                colouring sauces and seasonings chase ASTA. Telling us which you optimise for is the
                single most useful thing you can do at enquiry stage.
              </p>
              <Link to="/knowledge" className="txt-link" style={{ marginTop: '22px' }}>Read: Understanding SHU &amp; ASTA <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ VARIETIES ============ */}
      <section className="section bg-white hairline-top">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">The Varieties</span>
            <h2 className="h2">Four export varieties, four different jobs.</h2>
            <p className="lead">Each is sourced from the growing belt it is known for, then graded to whole, stemless or broken as your packing requires.</p>
          </div>
          <div className="var-grid">
            <div className="var-card" data-aos="fade-up">
              <div className="var-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Teja S17 · 400×300</span></div><span className="var-pill">High Pungency</span></div>
              <div className="var-body">
                <h3>Teja (S17)</h3>
                <div className="var-origin">Khammam · Warangal belt</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">75,000–1,00,000</span></div>
                  <div className="r"><span className="k">ASTA colour</span><span className="v">60–80</span></div>
                  <div className="r"><span className="k">Moisture</span><span className="v">≤ 10%</span></div>
                  <div className="r"><span className="k">Length</span><span className="v">5–7 cm</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> Oleoresin extraction, hot sauces, spice blends and markets that buy on heat. High capsaicin yield.</p>
              </div>
            </div>
            <div className="var-card" data-aos="fade-up" data-aos-delay="100">
              <div className="var-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Byadgi (Kaddi) · 400×300</span></div><span className="var-pill">Deep Colour</span></div>
              <div className="var-body">
                <h3>Byadgi (Kaddi)</h3>
                <div className="var-origin">Karnataka, Byadgi belt</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">8,000–15,000</span></div>
                  <div className="r"><span className="k">ASTA colour</span><span className="v">120–160+</span></div>
                  <div className="r"><span className="k">Moisture</span><span className="v">≤ 11%</span></div>
                  <div className="r"><span className="k">Look</span><span className="v">Wrinkled, deep red</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> Natural red colour, paprika-style use, oleoresin colour extraction. Low heat, premium appearance.</p>
              </div>
            </div>
            <div className="var-card" data-aos="fade-up" data-aos-delay="200">
              <div className="var-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Sannam S4 / 334 · 400×300</span></div><span className="var-pill">All-Rounder</span></div>
              <div className="var-body">
                <h3>Sannam (S4 / S10)</h3>
                <div className="var-origin">Guntur · Andhra Pradesh</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">35,000–40,000</span></div>
                  <div className="r"><span className="k">ASTA colour</span><span className="v">32–42</span></div>
                  <div className="r"><span className="k">Moisture</span><span className="v">≤ 11%</span></div>
                  <div className="r"><span className="k">Length</span><span className="v">6–10 cm</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> General culinary use, chilli powder, balanced heat-and-colour blends. The dependable workhorse grade.</p>
              </div>
            </div>
            <div className="var-card" data-aos="fade-up" data-aos-delay="300">
              <div className="var-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Wrinkle 334 · 400×300</span></div><span className="var-pill">Bold &amp; Glossy</span></div>
              <div className="var-body">
                <h3>Wrinkle 334</h3>
                <div className="var-origin">Guntur · Andhra Pradesh</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">25,000–35,000</span></div>
                  <div className="r"><span className="k">ASTA colour</span><span className="v">55–75</span></div>
                  <div className="r"><span className="k">Moisture</span><span className="v">≤ 11%</span></div>
                  <div className="r"><span className="k">Look</span><span className="v">Bold, glossy skin</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> Retail whole-chilli packs, appearance-led markets, medium heat with attractive sheen.</p>
              </div>
            </div>
            <div className="var-card" data-aos="fade-up" data-aos-delay="100">
              <div className="var-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Guntur Sannam variants · 400×300</span></div><span className="var-pill">Volume Grade</span></div>
              <div className="var-body">
                <h3>Guntur Sannam Variants</h3>
                <div className="var-origin">Guntur · Andhra Pradesh</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">30,000–45,000</span></div>
                  <div className="r"><span className="k">ASTA colour</span><span className="v">35–55</span></div>
                  <div className="r"><span className="k">Form</span><span className="v">Whole / stemless</span></div>
                  <div className="r"><span className="k">Use</span><span className="v">Powder &amp; blends</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> High-volume powder lines and seasoning houses needing consistent, repeatable supply.</p>
              </div>
            </div>
            <div className="var-card" data-aos="fade-up" data-aos-delay="200">
              <div className="var-img"><div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Custom blend to spec · 400×300</span></div><span className="var-pill">To Specification</span></div>
              <div className="var-body">
                <h3>Custom to Buyer Spec</h3>
                <div className="var-origin">Blended / graded to order</div>
                <div className="var-specs">
                  <div className="r"><span className="k">SHU</span><span className="v">Target band</span></div>
                  <div className="r"><span className="k">ASTA</span><span className="v">Target value</span></div>
                  <div className="r"><span className="k">Cut</span><span className="v">Whole / stemless / flakes</span></div>
                  <div className="r"><span className="k">Pack</span><span className="v">Your format</span></div>
                </div>
                <p className="var-apps"><b>Best for</b> Buyers with a fixed internal specification. Send us your parameters; we match the variety and grade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ COMPARISON TABLE ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Variety Comparison</span>
            <h2 className="h2">Side by side, on the parameters that matter.</h2>
          </div>
          <div className="spec-wrap" data-aos="fade-up" data-aos-delay="100">
            <table className="spec-table">
              <thead>
                <tr><th>Variety</th><th>SHU (heat)</th><th>ASTA (colour)</th><th>Primary buyer</th><th>Bought for</th></tr>
              </thead>
              <tbody>
                <tr><th>Teja S17</th><td className="hl">75k–1,00k</td><td>60–80</td><td>Oleoresin / sauce</td><td>Heat &amp; capsaicin yield</td></tr>
                <tr><th>Byadgi Kaddi</th><td>8k–15k</td><td className="hl">120–160+</td><td>Colour processors</td><td>Deep natural red</td></tr>
                <tr><th>Sannam S4 / S10</th><td>35k–40k</td><td>32–42</td><td>Powder &amp; blends</td><td>Balanced all-rounder</td></tr>
                <tr><th>Wrinkle 334</th><td>25k–35k</td><td>55–75</td><td>Retail whole packs</td><td>Appearance &amp; sheen</td></tr>
              </tbody>
            </table>
          </div>
          <p className="muted" data-aos="fade-up" data-aos-delay="200" style={{ marginTop: '16px', fontSize: '13px' }}>Indicative ranges. Crop year, region and grade affect actual values, every shipment ships against a tested specification sheet.</p>
        </div>
      </section>

      {/* ============ FORMS & PACKAGING ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Forms &amp; Packaging</span>
            <h2 className="h2">Supplied the way your line receives it.</h2>
          </div>
          <div className="feat-grid cols-3">
            <div className="feat-card" data-aos="fade-up">
              <div className="fc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M13 4c2 3 1 6-2 9s-7 6-9 7c1-4 3-7 6-10s4-5 5-6z"/></svg></div>
              <h4>Whole · with stem</h4>
              <p>Traditional whole chilli retaining stem, preferred for certain retail and culinary markets.</p>
            </div>
            <div className="feat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="fc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M9 6h10M5 18h12"/></svg></div>
              <h4>Stemless</h4>
              <p>Cut stemless for cleaner processing, lower contamination risk and tighter weight consistency.</p>
            </div>
            <div className="feat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="fc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="7" cy="8" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="11" cy="13" r="1.6"/><circle cx="17" cy="14" r="1.6"/><circle cx="8" cy="17" r="1.6"/></svg></div>
              <h4>Crushed / flakes / powder</h4>
              <p>Value-added cuts and ground powder to target mesh, processed under food-grade conditions.</p>
            </div>
          </div>
          <table className="spec-table" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '32px' }}>
            <thead><tr><th>Packaging option</th><th>Typical net weight</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><th>PP / jute bags</th><td>25 kg / 40 kg</td><td>Standard bulk; liner on request</td></tr>
              <tr><th>Cartons (whole)</th><td>10 kg / 20 kg</td><td>Retail-ready, appearance-protected</td></tr>
              <tr><th>Vacuum / compressed bales</th><td>To order</td><td>Higher container fill, lower freight per kg</td></tr>
              <tr><th>Buyer-branded packs</th><td>To specification</td><td>Private-label format &amp; labelling</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ============ RELATED KNOWLEDGE ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', maxWidth: 'none', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '50ch' }}><span className="eyebrow">Go Deeper</span><h2 className="h2" style={{ marginTop: '18px' }}>Chilli articles in the Knowledge Centre</h2></div>
            <Link to="/knowledge" className="btn btn-outline">All articles <span className="arr">→</span></Link>
          </div>
          <div className="know-grid">
            <Link to="/knowledge" className="know-card" data-aos="fade-up">
              <div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">SHU &amp; ASTA · 520×325</span></div><span className="know-cat">Specification</span></div>
              <div className="know-body"><div className="know-meta">6 min</div><h3>Understanding SHU and ASTA</h3><p>Two scales, two purposes, and why mixing them up leads to the wrong purchase.</p><span className="txt-link">Read <span className="arr">→</span></span></div>
            </Link>
            <Link to="/knowledge" className="know-card" data-aos="fade-up" data-aos-delay="100">
              <div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Teja vs Byadgi · 520×325</span></div><span className="know-cat">Variety</span></div>
              <div className="know-body"><div className="know-meta">7 min</div><h3>Teja vs Byadgi</h3><p>Heat-and-yield versus colour-and-appearance, a buyer's decision framework.</p><span className="txt-link">Read <span className="arr">→</span></span></div>
            </Link>
            <Link to="/knowledge" className="know-card" data-aos="fade-up" data-aos-delay="200">
              <div className="know-img"><div className="ph green-ph" style={{ position: 'absolute', inset: '0' }}><span className="ph-lbl">Packaging · 520×325</span></div><span className="know-cat">Export</span></div>
              <div className="know-body"><div className="know-meta">5 min</div><h3>Export packaging considerations</h3><p>Moisture control, container loading and protecting colour in transit.</p><span className="txt-link">Read <span className="arr">→</span></span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Request Chilli Quotation</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Tell us the variety, SHU/ASTA target and destination.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Send your specification and required quantity, we'll match the variety, confirm available grade and quote with packing and incoterm clarity.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/coffee" className="btn btn-ghost-light btn-lg">See Coffee</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Chilli
