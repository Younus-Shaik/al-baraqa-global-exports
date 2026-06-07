import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function Knowledge() {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 }) }, [])
  return (
    <div className="abge">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Knowledge Centre</div>
          <div className="ph-tag">Buyer Education</div>
          <h1 className="h1">The Knowledge Centre</h1>
          <p className="lead">A working reference desk for buyers of dry red chilli and coffee. No marketing, just the parameters, vocabulary and decisions that separate a clean purchase from an expensive one. If you specify correctly here, you buy with confidence anywhere.</p>
        </div>
      </section>

      {/* ============ FEATURED ============ */}
      <section className="section">
        <div className="wrap">
          <div className="know-feature" data-aos="fade-up">
            <div className="kf-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}><div className="ph-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M13 4c2 3 1 6-2 9s-7 6-9 7c1-4 3-7 6-10s4-5 5-6z" /></svg></div><span className="ph-lbl">Chilli colour vs heat reference · 720×540</span></div></div>
            <div className="kf-body">
              <div className="know-meta" style={{ color: 'var(--copper-600)' }}>Featured · Specification · 6 min read</div>
              <h2 className="h2" style={{ marginTop: '14px' }}>Understanding SHU and ASTA</h2>
              <p className="lead" style={{ marginTop: '16px', color: 'var(--muted)' }}>The two most important, and most frequently confused, numbers on a chilli specification. One measures heat. The other measures colour. They are not related, and optimising for the wrong one is the most common buyer error.</p>
              <a href="#shu-asta" className="btn btn-navy" style={{ marginTop: '24px' }}>Read the article <span className="arr">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ARTICLE INDEX ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">Reference Library</span><h2 className="h2">All topics</h2></div>
          <div className="know-grid">
            <a href="#shu-asta" className="know-card" data-aos="fade-up"><div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">SHU &amp; ASTA</span></div><span className="know-cat">Chilli · Spec</span></div><div className="know-body"><div className="know-meta">6 min</div><h3>Understanding SHU and ASTA</h3><p>Pungency vs colour, two independent scales, and how to read both.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#teja-byadgi" className="know-card" data-aos="fade-up" data-aos-delay="100"><div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Teja vs Byadgi</span></div><span className="know-cat">Chilli · Variety</span></div><div className="know-body"><div className="know-meta">7 min</div><h3>Teja vs Byadgi</h3><p>Heat-and-yield versus colour-and-appearance. A decision framework.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#choosing-variety" className="know-card" data-aos="fade-up" data-aos-delay="200"><div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Choosing variety</span></div><span className="know-cat">Chilli · Variety</span></div><div className="know-body"><div className="know-meta">5 min</div><h3>Choosing the right chilli variety</h3><p>Start from the end use, work backwards to SHU, ASTA and form.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#processing" className="know-card" data-aos="fade-up"><div className="know-img"><div className="ph green-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Processing methods</span></div><span className="know-cat">Coffee · Processing</span></div><div className="know-body"><div className="know-meta">8 min</div><h3>Coffee processing methods</h3><p>Washed, natural, honey and monsooned, and what each does to the cup.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#arabica-robusta" className="know-card" data-aos="fade-up" data-aos-delay="100"><div className="know-img"><div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Arabica vs Robusta</span></div><span className="know-cat">Coffee · Species</span></div><div className="know-body"><div className="know-meta">6 min</div><h3>Arabica vs Robusta</h3><p>Two different plants, chemistry, cup, caffeine and price.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#coffee-quality" className="know-card" data-aos="fade-up" data-aos-delay="200"><div className="know-img"><div className="ph green-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Quality parameters</span></div><span className="know-cat">Coffee · Quality</span></div><div className="know-body"><div className="know-meta">7 min</div><h3>Coffee quality parameters</h3><p>Screen size, density, defect count and cup score explained.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#packaging" className="know-card" data-aos="fade-up"><div className="know-img"><div className="ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Export packaging</span></div><span className="know-cat">Export · Logistics</span></div><div className="know-body"><div className="know-meta">5 min</div><h3>Export packaging considerations</h3><p>Moisture, odour, container loading and protecting quality in transit.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <a href="#documentation" className="know-card" data-aos="fade-up" data-aos-delay="100"><div className="know-img"><div className="ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Export documents</span></div><span className="know-cat">Export · Trade</span></div><div className="know-body"><div className="know-meta">6 min</div><h3>Reading your export documents</h3><p>Invoice, packing list, certificate of origin, phytosanitary and B/L.</p><span className="txt-link">Read <span className="arr">→</span></span></div></a>
            <Link to="/contact" className="know-card" data-aos="fade-up" data-aos-delay="200"><div className="know-img"><div className="ph green-ph" style={{ position: 'absolute', inset: 0 }}><span className="ph-lbl">Ask the trade desk</span></div><span className="know-cat">Support</span></div><div className="know-body"><div className="know-meta">Direct</div><h3>A question we haven't answered?</h3><p>Ask our trade desk directly, we'd rather you specify correctly than guess.</p><span className="txt-link">Get in touch <span className="arr">→</span></span></div></Link>
          </div>
        </div>
      </section>

      {/* ============ FULL ARTICLES ============ */}
      <section className="section">
        <div className="wrap">

          {/* SHU & ASTA */}
          <article id="shu-asta" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Chilli · Specification</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Understanding SHU and ASTA</h2>
            <p className="lede">Every dry red chilli specification carries two headline numbers. SHU tells you how hot it is. ASTA tells you how red it is. They are measured on completely different scales, and a chilli can score high on one and low on the other.</p>
            <h3>SHU, Scoville Heat Units</h3>
            <p>SHU measures pungency: the concentration of capsaicinoids, the compounds responsible for heat. The scale is historic, it began as a human taste-dilution test, but today pungency is measured precisely by HPLC (high-performance liquid chromatography) and converted to an SHU figure. The higher the number, the hotter the chilli.</p>
            <ul>
              <li><strong>Byadgi</strong> sits low, around 8,000–15,000 SHU, mild.</li>
              <li><strong>Sannam / Guntur</strong> grades fall in the 35,000–40,000 SHU range, medium-hot.</li>
              <li><strong>Teja</strong> reaches 75,000–1,00,000 SHU, genuinely hot, and prized for capsaicin yield.</li>
            </ul>
            <p>Buyers extracting <strong>oleoresin for heat</strong>, or manufacturing hot sauces and spicy seasonings, optimise for SHU because they are effectively buying capsaicin.</p>
            <h3>ASTA, colour value</h3>
            <p>ASTA (named for the American Spice Trade Association) measures <strong>extractable red colour</strong>, how much pigment the chilli will lend to a finished product. It is determined by spectrophotometer on a solvent extract. A higher ASTA value means deeper, richer red.</p>
            <ul>
              <li><strong>Byadgi</strong> is the colour champion at 120–160+ ASTA, despite its low heat.</li>
              <li><strong>Teja</strong> delivers moderate colour, roughly 60–80 ASTA, alongside its high heat.</li>
              <li><strong>Sannam</strong> grades typically sit in the 32–42 ASTA band.</li>
            </ul>
            <p>Buyers making <strong>paprika, natural colourants, or visually-led sauces and snacks</strong> optimise for ASTA. They want red, not heat.</p>
            <div className="quote-card" style={{ marginTop: '30px' }}>
              <p className="pullquote">The single most useful line in your enquiry is: <span className="copper-em">"we optimise for heat"</span> or <span className="copper-em">"we optimise for colour."</span> Everything else follows from that.</p>
            </div>
            <h3>Why buyers confuse them</h3>
            <p>Because both are "quality" numbers on the same sheet, it is tempting to assume a higher figure is universally better. It is not. A high-SHU Teja is the wrong purchase for a paprika line, and a high-ASTA Byadgi is the wrong purchase for an oleoresin extractor chasing capsaicin. Define the parameter you care about first; let it select the variety.</p>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* TEJA VS BYADGI */}
          <article id="teja-byadgi" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Chilli · Variety</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Teja vs Byadgi: choosing the right variety</h2>
            <p className="lede">These two are the most-traded Indian export chillies, and they sit at opposite ends of the spectrum. Confusing them is the most expensive mistake a new buyer makes.</p>
            <h3>Teja (S17), bought for heat</h3>
            <p>Grown mainly in the Khammam and Warangal belt of Telangana, Teja is a small, sharp, intensely pungent chilli (75,000–1,00,000 SHU). Its high capsaicin content makes it the preferred raw material for <strong>oleoresin extraction</strong>, hot chilli powders, and spice blends across Asia and the Middle East. Colour is secondary; heat and yield are the point.</p>
            <h3>Byadgi (Kaddi), bought for colour</h3>
            <p>Grown around Byadgi in Karnataka, this is a long, wrinkled, deep-red chilli with very low heat (8,000–15,000 SHU) but exceptional ASTA colour (120–160+). It is prized for <strong>natural red colour</strong>, used in colour-led cuisines, paprika-style products, and colour oleoresin. Its wrinkled skin and glossy red are visually distinctive.</p>
            <div className="spec-wrap" style={{ marginTop: '8px' }}>
              <table className="spec-table">
                <thead><tr><th>Parameter</th><th>Teja</th><th>Byadgi</th></tr></thead>
                <tbody>
                  <tr><th>SHU (heat)</th><td className="hl">75k–1,00k</td><td>8k–15k</td></tr>
                  <tr><th>ASTA (colour)</th><td>60–80</td><td className="hl">120–160+</td></tr>
                  <tr><th>Appearance</th><td>Small, smooth, bright</td><td>Long, wrinkled, deep red</td></tr>
                  <tr><th>Bought for</th><td>Heat, capsaicin, oleoresin</td><td>Colour, paprika, appearance</td></tr>
                  <tr><th>Typical buyer</th><td>Sauce &amp; extract makers</td><td>Colour processors, retail</td></tr>
                </tbody>
              </table>
            </div>
            <h3>The decision in one sentence</h3>
            <p>If your finished product needs to be <strong>hot</strong>, start with Teja. If it needs to be <strong>red</strong>, start with Byadgi. If it needs both in balance, look to Sannam or a specified blend, and tell us the SHU and ASTA band you are targeting.</p>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* CHOOSING VARIETY */}
          <article id="choosing-variety" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Chilli · Variety</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Choosing the right chilli variety</h2>
            <p className="lede">Work backwards from the end use. The product you are making determines the parameter that matters, which determines the variety.</p>
            <ul>
              <li><strong>Oleoresin / hot sauce / heat blends →</strong> Teja. Optimise SHU and capsaicin yield.</li>
              <li><strong>Paprika / natural colour / colour oleoresin →</strong> Byadgi. Optimise ASTA.</li>
              <li><strong>General chilli powder / balanced culinary →</strong> Sannam S4/S10. Balanced heat and colour.</li>
              <li><strong>Retail whole packs / appearance-led →</strong> Wrinkle 334. Bold, glossy, medium heat.</li>
            </ul>
            <p>Then specify <strong>form</strong> (whole with stem, stemless, crushed, flakes or powder), <strong>moisture</strong> (export standard is below 11%), and any <strong>certification</strong> your market requires. Send us those four things, use, SHU/ASTA target, form, moisture, and the rest is our job.</p>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* PROCESSING */}
          <article id="processing" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Coffee · Processing</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Coffee processing methods, and how they change the cup</h2>
            <p className="lede">Processing is what happens to the coffee cherry after picking and before export. The same bean, processed two different ways, produces two different coffees. This is one of the largest levers on flavour.</p>
            <h3>Washed (wet) process</h3>
            <p>The fruit and mucilage are removed before the bean is dried, typically by pulping, fermenting and washing. The result is a <strong>clean, bright, consistent</strong> cup that showcases the bean's intrinsic acidity and origin character. Indian washed Arabica is sold as "Plantation"; washed Robusta as "Parchment."</p>
            <h3>Natural (dry) process</h3>
            <p>The whole cherry is dried in the sun with the fruit still on, then hulled. Sugars from the fruit migrate into the bean, producing a <strong>sweeter, heavier-bodied, fruit-forward</strong> cup with more character and more lot-to-lot variability. Indian naturals are sold as "Cherry."</p>
            <h3>Honey / pulped natural</h3>
            <p>A middle path: the skin is removed but some sticky mucilage ("honey") is left on during drying. The cup sits between washed and natural, <strong>washed-like clarity with natural-like sweetness</strong> and body.</p>
            <h3>Monsooned (Malabar)</h3>
            <p>India's signature method. Dried beans are exposed to moisture-laden monsoon winds on the Malabar coast for several weeks, swelling and mellowing them. The result is a <strong>low-acid, full-bodied, smooth</strong> coffee with a pale golden bean, distinctive and sought after for dark roasts and espresso.</p>
            <div className="quote-card" style={{ marginTop: '30px' }}>
              <p className="pullquote">Tell your supplier the <span className="copper-em">processing method</span> you want before you discuss price. It shapes the cup more than almost anything else on the spec.</p>
            </div>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* ARABICA VS ROBUSTA */}
          <article id="arabica-robusta" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Coffee · Species</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Arabica vs Robusta</h2>
            <p className="lede">These are two distinct species of coffee plant, Coffea arabica and Coffea canephora (Robusta), not two grades of one bean. They differ in where they grow, how they taste, how much caffeine they carry and what they cost.</p>
            <div className="spec-wrap" style={{ marginTop: '8px' }}>
              <table className="spec-table">
                <thead><tr><th>Attribute</th><th>Arabica</th><th>Robusta</th></tr></thead>
                <tbody>
                  <tr><th>Altitude</th><td>1,000 m and above</td><td>Sea level–800 m</td></tr>
                  <tr><th>Caffeine</th><td>~1.2–1.5%</td><td className="hl">~2.2–2.7%</td></tr>
                  <tr><th>Cup</th><td className="hl">Aromatic, bright, sweet</td><td>Full, strong, bitter</td></tr>
                  <tr><th>Body / crema</th><td>Lighter</td><td>Heavier, more crema</td></tr>
                  <tr><th>Typical use</th><td>Specialty, filter, premium blends</td><td>Espresso base, instant, value</td></tr>
                  <tr><th>Price</th><td>Higher</td><td>Lower</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '24px' }}>Most commercial blends use both: Arabica for aroma and sweetness, Robusta for body, crema and cost control. A 70/30 or 80/20 Arabica-Robusta espresso blend is common. Knowing your target ratio, roast and price point tells us exactly which lots to quote.</p>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* COFFEE QUALITY */}
          <article id="coffee-quality" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Coffee · Quality</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Coffee quality parameters</h2>
            <p className="lede">Green coffee is bought on a handful of measurable parameters. Understanding them lets you compare offers honestly instead of on price alone.</p>
            <ul>
              <li><strong>Screen size</strong>, bean size measured over a perforated sieve (e.g. screen 17/18). Larger, more uniform beans roast more evenly and command a premium. Grades like AA, A and PB (peaberry) describe this.</li>
              <li><strong>Defect count</strong>, number of primary and secondary defects (black beans, broken, insect-damaged) per standard sample. Lower is better; specialty grades define strict limits.</li>
              <li><strong>Moisture</strong>, shipped at roughly 10–12%. Too high risks mould and odour; too low risks brittleness and loss of character.</li>
              <li><strong>Density</strong>, denser, high-grown beans generally cup better and roast more predictably.</li>
              <li><strong>Cup score</strong>, for specialty lots, a trained cupper scores aroma, acidity, body, flavour and balance on the SCA 100-point scale. 80+ is "specialty."</li>
            </ul>
            <p>A complete green-coffee specification states species, processing, grade/screen, moisture, defect allowance and, for specialty, a cup score with notes. We ship against exactly that.</p>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* PACKAGING */}
          <article id="packaging" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Export · Logistics</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Export packaging considerations</h2>
            <p className="lede">Both chilli and coffee are sensitive cargo. Good packaging protects the very parameters the buyer paid for, colour, moisture and aroma, across weeks at sea.</p>
            <h3>Dry red chilli</h3>
            <ul>
              <li><strong>Moisture control</strong>, chilli is shipped below 11% moisture; liners and proper loading prevent re-absorption and mould.</li>
              <li><strong>Colour protection</strong>, light and heat degrade ASTA colour; cartons and shaded loading preserve red value.</li>
              <li><strong>Compression</strong>, vacuum or baled packing increases container fill and lowers freight per kilogram.</li>
            </ul>
            <h3>Green coffee</h3>
            <ul>
              <li><strong>Moisture barrier</strong>, GrainPro or equivalent liners inside jute sacks hold moisture stable and lock out humidity swings.</li>
              <li><strong>Odour isolation</strong>, coffee absorbs smells; it must not share a container with strong-smelling cargo.</li>
              <li><strong>Ventilation &amp; stowage</strong>, correct stowage prevents condensation ("container rain") that ruins a shipment.</li>
            </ul>
          </article>

          <hr style={{ border: 0, borderTop: '1px solid var(--line)', margin: 'clamp(40px,5vw,72px) 0' }} />

          {/* DOCUMENTATION */}
          <article id="documentation" className="prose" style={{ scrollMarginTop: '100px' }} data-aos="fade-up">
            <span className="eyebrow">Export · Trade</span>
            <h2 className="h2" style={{ marginTop: '16px' }}>Reading your export documents</h2>
            <p className="lede">A clean shipment is a documented shipment. These are the papers that move with your goods, and the ones customs and your bank will check.</p>
            <ul>
              <li><strong>Commercial invoice</strong>, the priced statement of goods, terms and incoterm.</li>
              <li><strong>Packing list</strong>, exact counts, weights and packing breakdown per container.</li>
              <li><strong>Certificate of origin</strong>, confirms the goods originate in India; relevant for duty and preference.</li>
              <li><strong>Phytosanitary certificate</strong>, plant-quarantine clearance, required for agricultural produce.</li>
              <li><strong>Bill of lading (B/L)</strong>, the carrier's document of title and shipment.</li>
              <li><strong>Quality / inspection certificate</strong>, third-party or in-house test results against the agreed spec.</li>
            </ul>
            <p>Because our trade desk is managed by a Chartered Accountant, these documents are prepared to align with your letter of credit or payment terms, so they clear without query rather than holding your cargo at the port.</p>
          </article>

        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Specify With Confidence</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Know what you need? Let's quote it.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Now that you can read the spec, send us yours. We'll match the variety or lot and respond with a clear, documented quotation.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/resources" className="btn btn-ghost-light btn-lg">Download Spec Sheets</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Knowledge
