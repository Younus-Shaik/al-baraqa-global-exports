import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

function Resources() {
  useEffect(() => { AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 }) }, [])

  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      q: 'What products do you export?',
      a: 'We specialise in two commodities: Indian dry red chilli (Teja, Byadgi, Sannam S4/S10 and Wrinkle 334, in whole, stemless, flake or powder form) and green coffee (Arabica and Robusta, washed and natural, across plantation and cherry grades). We deliberately do not trade everything, depth in two products serves buyers better than breadth across twenty.',
    },
    {
      q: 'What is your minimum order quantity?',
      a: 'Most orders are container-scale (FCL). We can discuss LCL and trial quantities for first-time buyers evaluating quality. Tell us your target volume in your enquiry and we\'ll advise the most economical shipping unit.',
    },
    {
      q: 'Can you supply to our specific SHU / ASTA or cup specification?',
      a: 'Yes. Send us your target parameters, SHU and ASTA bands for chilli, or species, processing, screen grade and cup score for coffee, and we match the variety or lot. Every shipment goes against a written specification sheet, with third-party inspection available on request.',
    },
    {
      q: 'What payment terms do you work with?',
      a: 'We work with Letters of Credit (LC), telegraphic transfer (TT) and advance arrangements, structured to align with your bank and ours. Because our trade desk is managed by a Chartered Accountant, terms and documents are set up to clear cleanly. Specific terms are agreed per order and buyer relationship.',
    },
    {
      q: 'Which documents do you provide with a shipment?',
      a: 'The standard set includes commercial invoice, packing list, certificate of origin, phytosanitary certificate, bill of lading and a quality/inspection certificate. Additional documents (fumigation, specific certifications) are arranged to your market\'s requirements.',
    },
    {
      q: 'Which countries do you ship to?',
      a: 'We ship from Indian ports to buyers across Europe (incl. Germany and the Netherlands), the UK, the USA, the UAE and wider Gulf, and the Asia-Pacific region including Australia and Singapore. If your market isn\'t listed, ask, it likely isn\'t a problem.',
    },
    {
      q: 'How quickly will you respond to an enquiry?',
      a: 'We aim to acknowledge enquiries the same business day and return a specification-clear quotation within two business days, depending on the complexity of your requirement and current crop availability.',
    },
  ]

  return (
    <div className="abge">

      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Resources</div>
          <div className="ph-tag">For Buyers</div>
          <h1 className="h1">Resources</h1>
          <p className="lead">Specification sheets, brochures, packaging notes and the export process guide, everything your sourcing and quality teams need to evaluate us before the first enquiry.</p>
        </div>
      </section>

      {/* ============ DOWNLOADS ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">Downloads</span><h2 className="h2">Specification sheets &amp; brochures</h2><p className="lead">Request any document below and we'll email the latest version. Spec sheets are issued per crop year.</p></div>
          <div className="res-grid">
            <Link to="/contact" className="res-card" data-aos="fade-up">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M13 4c2 3 1 6-2 9s-7 6-9 7c1-4 3-7 6-10s4-5 5-6z" /></svg></div>
              <div className="rc-type">Specification Sheet</div>
              <h3>Dry Red Chilli, full spec pack</h3>
              <p>Teja, Byadgi, Sannam and Wrinkle 334 with SHU, ASTA, moisture, form and packing options.</p>
              <div className="rc-foot"><span className="rc-meta">PDF · ~1.4 MB</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg> Request</span></div>
            </Link>
            <Link to="/contact" className="res-card" data-aos="fade-up" data-aos-delay="100">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 8h11v5a5 5 0 01-5 5H10a5 5 0 01-5-5V8z" /><path d="M16 9h2.5a2.5 2.5 0 010 5H16" /></svg></div>
              <div className="rc-type">Specification Sheet</div>
              <h3>Green Coffee, grade &amp; cup pack</h3>
              <p>Arabica and Robusta grades, processing methods, screen sizes, moisture and cup notes.</p>
              <div className="rc-foot"><span className="rc-meta">PDF · ~1.6 MB</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg> Request</span></div>
            </Link>
            <Link to="/contact" className="res-card" data-aos="fade-up" data-aos-delay="200">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 7h16v13H4zM4 7l3-3h10l3 3" /><path d="M9 12h6" /></svg></div>
              <div className="rc-type">Packaging Guide</div>
              <h3>Packaging &amp; loading reference</h3>
              <p>Pack formats, net weights, liners, container fill and protection for both commodities.</p>
              <div className="rc-foot"><span className="rc-meta">PDF · ~900 KB</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg> Request</span></div>
            </Link>
            <Link to="/export-process" className="res-card" data-aos="fade-up">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></div>
              <div className="rc-type">Process Guide</div>
              <h3>Export process guide</h3>
              <p>The eight-stage journey from requirement to delivery, with documents at each stage.</p>
              <div className="rc-foot"><span className="rc-meta">Web · interactive</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg> View</span></div>
            </Link>
            <Link to="/contact" className="res-card" data-aos="fade-up" data-aos-delay="100">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16v16H4z" /><path d="M8 9h8M8 13h8M8 17h5" /></svg></div>
              <div className="rc-type">Brochure</div>
              <h3>Company brochure</h3>
              <p>Who we are, what we specialise in and how we execute, the short, sendable overview.</p>
              <div className="rc-foot"><span className="rc-meta">PDF · ~2.1 MB</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" /></svg> Request</span></div>
            </Link>
            <Link to="/knowledge" className="res-card" data-aos="fade-up" data-aos-delay="200">
              <div className="rc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5h16v14H4z" /><path d="M12 5v14M4 9h8M4 13h8" /></svg></div>
              <div className="rc-type">Knowledge</div>
              <h3>Buyer education library</h3>
              <p>SHU &amp; ASTA, Teja vs Byadgi, processing methods, Arabica vs Robusta and more.</p>
              <div className="rc-foot"><span className="rc-meta">Web · reference</span><span className="rc-dl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14M13 6l6 6-6 6" /></svg> Read</span></div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up"><span className="eyebrow">FAQ</span><h2 className="h2">Frequently asked questions</h2></div>
          <div className="faq-list" data-aos="fade-up" data-aos-delay="100">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                <button className="faq-q" type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {item.q}<span className="fq-ic"></span>
                </button>
                <div className="faq-a"><div className="faq-a-inner">{item.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Need a Document?</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Tell us what to send.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Request any spec sheet, brochure or the packaging guide, or go straight to a quotation.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/knowledge" className="btn btn-ghost-light btn-lg">Knowledge Centre</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Resources
