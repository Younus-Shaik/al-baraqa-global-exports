import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

const TOTAL = 8

const steps = [
  {
    num: 'STAGE 01',
    title: 'Requirement Discussion',
    img: { label: 'Requirement call / spec sheet · 880×495', cls: '' },
    body: 'We start by understanding what you actually need, not just "chilli" or "coffee", but the variety, the SHU/ASTA or screen/cup parameters, the form, the quantity, your destination port and your timeline.',
    points: [
      'Product, grade and specification captured in writing',
      'Quantity, packaging format and destination port confirmed',
      'Incoterm and indicative timeline agreed',
    ],
  },
  {
    num: 'STAGE 02',
    title: 'Product Evaluation & Sampling',
    img: { label: 'Lab test / sample evaluation · 880×495', cls: 'warm-ph' },
    body: 'We match your specification to available crop and varieties, and where required share physical or photographic samples with test parameters before you commit.',
    points: [
      'Variety / lot matched to target parameters',
      'Samples and test reports shared for approval',
      'Final specification sheet signed off',
    ],
  },
  {
    num: 'STAGE 03',
    title: 'Procurement',
    img: { label: 'Sourcing at mandi / estate · 880×495', cls: 'green-ph' },
    body: 'We source from the growing belt known for your variety, buying to the agreed grade. Procurement is coordinated against the confirmed order, not bought speculatively.',
    points: [
      'Sourced from origin region for the variety',
      'Bought to confirmed grade and quantity',
      'Lot traceability maintained',
    ],
  },
  {
    num: 'STAGE 04',
    title: 'Quality Inspection',
    img: { label: 'Quality inspection / grading · 880×495', cls: '' },
    body: 'Goods are inspected and tested against the agreed specification, moisture, colour, pungency or screen size, defect count, before packing. Third-party inspection arranged where required.',
    points: [
      'Tested against the signed specification',
      'Third-party inspection (SGS / equivalent) on request',
      'Quality / inspection certificate issued',
    ],
  },
  {
    num: 'STAGE 05',
    title: 'Packaging',
    img: { label: 'Packing line / sacks & cartons · 880×495', cls: 'green-ph' },
    body: 'Product is packed in the agreed format, bags, cartons, vacuum or buyer-branded, with liners and labelling that protect colour, moisture and aroma in transit.',
    points: [
      'Packed to your specified format and net weight',
      'Moisture/odour barriers and labelling applied',
      'Container loading planned for fill and protection',
    ],
  },
  {
    num: 'STAGE 06',
    title: 'Documentation',
    img: { label: 'Export documentation desk · 880×495', cls: '' },
    body: 'Our Chartered Accountant–led desk prepares the full document set, invoice, packing list, certificate of origin, phytosanitary certificate and more, aligned to your LC or payment terms so they clear without query.',
    points: [
      'Complete, accurate export document set prepared',
      'Aligned to letter of credit / agreed terms',
      'HS classification and compliance checked',
    ],
  },
  {
    num: 'STAGE 07',
    title: 'Shipment',
    img: { label: 'Container at port / vessel loading · 880×495', cls: '' },
    body: 'Cargo is booked, stuffed and shipped from the appropriate Indian port. You receive the shipping documents and tracking so the consignment is visible the whole way.',
    points: [
      'Vessel booked and container stuffed',
      'Bill of lading and documents transmitted',
      'Shipment tracking shared',
    ],
  },
  {
    num: 'STAGE 08',
    title: 'Delivery',
    img: { label: 'Delivery at destination port · 880×495', cls: 'green-ph' },
    body: 'The consignment arrives at your destination port per the agreed incoterm. We remain available through clearance and stay in touch for the next cycle, most of our trade is repeat business.',
    points: [
      'Delivered per agreed incoterm',
      'Support through destination clearance',
      'Relationship maintained for repeat orders',
    ],
  },
]

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

function ExportProcess() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  return (
    <div className="abge">

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Export Process</div>
          <div className="ph-tag">Process Transparency</div>
          <h1 className="h1">From requirement to delivery</h1>
          <p className="lead">Eight defined stages, each with a clear owner, a deliverable and a document. Click through the journey below, this is exactly how an order moves from your first message to the cargo arriving at your port.</p>
        </div>
      </section>

      {/* INTERACTIVE PROCESS */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">The Eight Stages</span>
            <h2 className="h2">Select a stage to explore it.</h2>
          </div>
          <div className="proc-progress" data-aos="fade-up" style={{ marginTop: '20px' }}>
            <i style={{ width: ((active + 1) / TOTAL * 100) + '%' }} />
          </div>
          <div className="proc-wrap">
            <div className="proc-nav" data-aos="fade-up">
              {steps.map((step, i) => (
                <button
                  key={i}
                  type="button"
                  className={active === i ? 'active' : ''}
                  onClick={() => setActive(i)}
                >
                  <span className="pn-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="pn-t">{step.title}</span>
                </button>
              ))}
            </div>
            <div className="proc-panel" data-aos="fade-up">
              {steps.map((step, i) => (
                <div key={i} className={`proc-step${active === i ? ' active' : ''}`}>
                  <div className="ps-img">
                    <div className={`ph${step.img.cls ? ' ' + step.img.cls : ''}`} style={{ position: 'absolute', inset: 0 }}>
                      <span className="ph-lbl">{step.img.label}</span>
                    </div>
                  </div>
                  <div className="ps-n">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <ul className="ps-points">
                    {step.points.map((pt, j) => (
                      <li key={j}><CheckIcon /> {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">What Holds It Together</span>
            <h2 className="h2">Three principles run through every stage.</h2>
          </div>
          <div className="feat-grid cols-3">
            <div className="feat-card" data-aos="fade-up">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 9h8M8 13h8M8 17h5" />
                </svg>
              </div>
              <h4>Everything documented</h4>
              <p>Each stage produces a record, specification, test report, certificate or shipping document. Nothing relies on memory.</p>
            </div>
            <div className="feat-card" data-aos="fade-up" data-aos-delay="100">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
              </div>
              <h4>Visible to you</h4>
              <p>You are never guessing where your order is. Status, samples and documents are shared as the order moves.</p>
            </div>
            <div className="feat-card" data-aos="fade-up" data-aos-delay="200">
              <div className="fc-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h4>Compliance-first</h4>
              <p>Documents are built to clear customs and your bank, structured by a CA-led desk to avoid costly holds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Start at Stage One</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="100" style={{ marginTop: '20px' }}>Begin with a requirement discussion.</h2>
          <p data-aos="fade-up" data-aos-delay="200">Send your product, grade and destination and we'll open the process, clearly, and in writing.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="300">
            <Link to="/contact" className="btn btn-copper btn-lg">Request a Quotation <span className="arr">→</span></Link>
            <Link to="/resources" className="btn btn-ghost-light btn-lg">Export Process Guide (PDF)</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ExportProcess
