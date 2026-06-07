import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function About() {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 }) }, [])
  return (
    <div className="abge">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>About</div>
          <div className="ph-tag">About the Company</div>
          <h1 className="h1">Specialists, by choice.</h1>
          <p className="lead">Al Baraqah Global Exports was built on a simple conviction: that two commodities understood deeply will always serve a buyer better than twenty traded shallowly. This is why we exist, and how we work.</p>
        </div>
      </section>

      {/* ============ WHY WE EXIST ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <span className="eyebrow">Why The Company Exists</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>The export market is crowded with generalists.</h2>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <p className="lead" style={{ color: 'var(--body)' }}>Most exporters quote whatever you ask for, chilli today, turmeric tomorrow, whatever moves. The result is predictable: thin product knowledge, inconsistent grade, and documentation that often holds cargo at the port.</p>
              <p style={{ marginTop: '16px', color: 'var(--muted)' }}>We started Al Baraqah to do the opposite. By committing to dry red chilli and coffee, and nothing else, we can hold real expertise in the varieties, the grading language, the seasons and the buyer requirements of each. When a quality manager in Hamburg or Dubai asks a precise question, they get a precise answer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY THESE TWO ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">Why Chilli &amp; Coffee</span><h2 className="h2">Two commodities India does exceptionally well.</h2><p className="lead">Both are deep, global markets where Indian origin is genuinely competitive, and both reward the buyer who specifies precisely.</p></div>
          <div className="value-grid">
            <div className="value-card" data-aos="fade-up">
              <div className="vc-n">01</div>
              <h3>India leads in chilli</h3>
              <p>India is the world's largest producer and exporter of dry red chilli, with Guntur hosting one of the largest chilli markets anywhere. The depth of varieties, Teja, Byadgi, Sannam, Wrinkle, lets us match almost any heat-and-colour requirement.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="100">
              <div className="vc-n">02</div>
              <h3>India's coffee is distinctive</h3>
              <p>Grown in shade under spice canopies, Indian Arabica and Robusta have character that roasters seek, and Monsooned Malabar is a profile found nowhere else. It is a market where origin knowledge adds real value.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-delay="200">
              <div className="vc-n">03</div>
              <h3>Both reward specification</h3>
              <p>Chilli on SHU and ASTA; coffee on species, processing, grade and cup. These are products where getting the spec right is everything, exactly where a specialist earns their place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRODUCT UNDERSTANDING -> SOURCING ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split media-left">
            <div data-aos="fade-up">
              <div className="media tall">
                <div className="ph warm-ph" style={{ position: 'absolute', inset: 0 }}>
                  <div className="ph-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M3 21h18M5 21V8l7-4 7 4v13" /></svg></div>
                  <span className="ph-lbl">Sourcing at origin / inspection · 800×1000</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="eyebrow">How Understanding Drives Sourcing</span>
              <h2 className="h2" style={{ marginTop: '18px' }}>Knowing the product changes where, and how, we buy.</h2>
              <p className="lead" style={{ marginTop: '18px', color: 'var(--muted)' }}>A generalist buys "chilli" at the nearest market. We buy <span className="serif-em">Byadgi from the Byadgi belt</span> when colour is the priority, and <span className="serif-em">Teja from Khammam</span> when heat and yield are. We know which crop window gives the best moisture and colour, and we contract ahead of the peak to secure grade.</p>
              <p style={{ marginTop: '14px', color: 'var(--muted)' }}>Product understanding isn't a marketing line, it is the thing that determines whether the goods in your container actually match the goods on your specification sheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CA CREDIBILITY ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">Structured Execution</span><h2 className="h2">A Chartered Accountant's discipline, applied to trade.</h2><p className="lead">Product knowledge gets the right goods into the container. Financial and documentation discipline gets them to you cleanly. Our trade desk is led with a CA's instincts.</p></div>
          <div className="leader-card" data-aos="fade-up" data-aos-delay="100">
            <div className="lc-photo"><div className="ph" style={{ position: 'absolute', inset: 0 }}><div className="ph-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg></div><span className="ph-lbl">Founder / CA portrait · 700×700</span></div></div>
            <div className="lc-body">
              <div className="lc-role">Trade Desk · Leadership</div>
              <h3>Managed by a Chartered Accountant</h3>
              <div className="lc-cred">Financial governance · Compliance · Documentation</div>
              <p>A Chartered Accountant's training is built around accuracy, compliance and risk. Applied to export, that means contracts structured to protect both sides, payment terms (LC, TT, advance) aligned to your bank and ours, and a document set prepared to clear customs and finance without query.</p>
              <p style={{ marginTop: '14px', color: 'var(--muted)' }}>It is not the headline of what we do, the products are. But it is the reason transactions close cleanly, and the reason a USD 50,000+ first order feels safe to place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">How We Work</span><h2 className="h2">Principles, not slogans.</h2></div>
          <div className="diff-grid" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: 'none' }}>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>Two commodities, understood in depth, not a catalogue of everything</p></div>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>Every order shipped against a written, tested specification sheet</p></div>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>Documentation prepared for clean customs and banking clearance</p></div>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>Risk-aware contract and payment structuring on every transaction</p></div>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>Buyer education shared openly, we'd rather you specify well</p></div>
            <div className="diff-item"><span className="di-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 6L9 17l-5-5" /></svg></span><p>A relationship-first approach, most of our trade is repeat business</p></div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Work With Specialists</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Bring us a chilli or coffee requirement.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Tell us what you need and how you specify it. You'll be talking to people who know the product, not a switchboard.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/knowledge" className="btn btn-ghost-light btn-lg">See How We Think</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
export default About
