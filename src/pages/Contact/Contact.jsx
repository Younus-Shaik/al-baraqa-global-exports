import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

// ============================================================
// EmailJS Configuration
// Template variables now expected (match the form field names):
//   {{company}} {{country}} {{product}} {{quantity}} {{port}}
//   {{packaging}} {{email}} {{whatsapp}} {{message}}
// Set the template "To Email" to: abglobalexports2k26@gmail.com
// (and "Reply To" to {{email}})
// ============================================================
const EMAILJS_SERVICE_ID = 'service_f7uugoa'
const EMAILJS_TEMPLATE_ID = 'template_0x51fjp'
const EMAILJS_PUBLIC_KEY = '75O1FTWp-AEQ00O3m'

const PRODUCT_OPTIONS = [
  'Dry Red Chilli — Teja (S17)',
  'Dry Red Chilli — Byadgi (Kaddi)',
  'Dry Red Chilli — Sannam S4 / S10',
  'Dry Red Chilli — Wrinkle 334',
  'Dry Red Chilli — to specification',
  'Coffee — Arabica (Plantation)',
  'Coffee — Arabica (Cherry)',
  'Coffee — Robusta (Parchment)',
  'Coffee — Robusta (Cherry)',
  'Coffee — Monsooned Malabar',
  'Coffee — to specification',
  'Both / not sure yet'
]

const PACKAGING_OPTIONS = [
  'PP / jute bags (25kg / 40kg)',
  'Jute sacks, GrainPro lined (60kg)',
  'Cartons (10kg / 20kg)',
  'Vacuum / compressed',
  'Bulk container liner',
  'Buyer-branded / private label',
  'Advise me'
]

function Contact() {
  const formRef = useRef()
  const cardRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')
  const [errors, setErrors] = useState({})
  const [successName, setSuccessName] = useState('there')

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const validate = (form) => {
    const errs = {}
    const required = ['company', 'country', 'product', 'email']
    required.forEach((n) => {
      const v = (form.elements[n]?.value || '').trim()
      if (!v) errs[n] = 'Required'
    })
    const em = (form.elements['email']?.value || '').trim()
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) errs['email'] = 'Enter a valid email'
    return errs
  }

  const clearError = (name) => {
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const firstField = form.querySelector('.field.error input, .field.error select, .field.error textarea')
      if (firstField) firstField.focus()
      return
    }

    setStatus('sending')
    setErrorMsg('')
    const company = (form.elements['company']?.value || '').trim()
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      setSuccessName(company || 'there')
      setStatus('success')
      form.reset()
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMsg(error?.text || 'Something went wrong. Please try again or email us directly.')
    }
  }

  const fieldClass = (name) => `field${errors[name] ? ' error' : ''}`

  return (
    <div className="abge">
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Request a Quotation</div>
          <div className="ph-tag">Request For Quotation</div>
          <h1 className="h1">Let's price your requirement.</h1>
          <p className="lead">The more precisely you describe what you need, product, grade, quantity,
            destination and packaging, the sharper and faster our quotation. Everything below takes two minutes.</p>
        </div>
      </section>

      {/* ============ RFQ ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ gridTemplateColumns: '1.35fr 0.65fr', alignItems: 'start', gap: 'clamp(32px,4vw,56px)' }}>

            {/* FORM */}
            <div data-aos="fade-up">
              <div className="form-card" ref={cardRef}>
                {status === 'success' ? (
                  <div className="form-success show">
                    <div className="tick">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </div>
                    <h3>Request received</h3>
                    <p>Thank you, {successName}. Your request for quotation has been logged. Our trade desk
                      will review your requirement and respond, usually within two business days.</p>
                    <button type="button" className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <div className="form-head">
                      <span className="eyebrow">Request For Quotation</span>
                      <h2 className="h3" style={{ marginTop: '14px' }}>Tell us about your requirement</h2>
                    </div>
                    <div className="form-grid">
                      <div className={fieldClass('company')}>
                        <label htmlFor="company">Company Name <span className="req">*</span></label>
                        <input type="text" id="company" name="company" placeholder="Your company / importing entity" autoComplete="organization" onChange={() => clearError('company')} />
                        <span className="err-msg">{errors.company}</span>
                      </div>
                      <div className={fieldClass('country')}>
                        <label htmlFor="country">Country <span className="req">*</span></label>
                        <input type="text" id="country" name="country" placeholder="Destination country" autoComplete="country-name" onChange={() => clearError('country')} />
                        <span className="err-msg">{errors.country}</span>
                      </div>
                      <div className={fieldClass('product')}>
                        <label htmlFor="product">Product <span className="req">*</span></label>
                        <select id="product" name="product" defaultValue="" onChange={() => clearError('product')}>
                          <option value="">Select a product</option>
                          {PRODUCT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <span className="err-msg">{errors.product}</span>
                      </div>
                      <div className="field">
                        <label htmlFor="quantity">Required Quantity</label>
                        <input type="text" id="quantity" name="quantity" placeholder="e.g. 1 × 20ft FCL, or 18 MT" />
                        <span className="err-msg"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="port">Destination Port</label>
                        <input type="text" id="port" name="port" placeholder="e.g. Hamburg, Jebel Ali, Felixstowe" />
                        <span className="err-msg"></span>
                      </div>
                      <div className="field">
                        <label htmlFor="packaging">Packaging Preference</label>
                        <select id="packaging" name="packaging" defaultValue="">
                          <option value="">Select packaging</option>
                          {PACKAGING_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <span className="err-msg"></span>
                      </div>
                      <div className={fieldClass('email')}>
                        <label htmlFor="email">Email <span className="req">*</span></label>
                        <input type="email" id="email" name="email" placeholder="you@company.com" autoComplete="email" onChange={() => clearError('email')} />
                        <span className="err-msg">{errors.email}</span>
                      </div>
                      <div className="field">
                        <label htmlFor="whatsapp">WhatsApp / Phone</label>
                        <input type="text" id="whatsapp" name="whatsapp" placeholder="+__ ___ ___ ____" />
                        <span className="err-msg"></span>
                      </div>
                      <div className="field full">
                        <label htmlFor="message">Additional Requirements</label>
                        <textarea id="message" name="message" placeholder="Target SHU / ASTA or cup score, processing method, certifications, incoterm, timeline, or anything else relevant to your specification."></textarea>
                        <span className="err-msg"></span>
                      </div>
                      <div className="field full">
                        <button type="submit" className="btn btn-navy btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                          {status === 'sending' ? 'Sending…' : <>Send Request for Quotation <span className="arr">→</span></>}
                        </button>
                        {status === 'error' && (
                          <p className="err-msg" style={{ marginTop: '12px', textAlign: 'center', fontSize: '13px' }}>{errorMsg}</p>
                        )}
                        <p className="muted" style={{ fontSize: '12.5px', marginTop: '12px', textAlign: 'center' }}>We typically respond within two business days with specification and pricing clarity. Your details are used only to prepare your quotation.</p>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* INFO */}
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="eyebrow">Direct Contact</span>
              <h2 className="h3" style={{ marginTop: '14px' }}>Prefer to reach us directly?</h2>
              <div className="contact-info" style={{ marginTop: '8px' }}>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg></span>
                  <div><div className="ci-k">Trade Desk Email</div><a href="mailto:rafa@abqglobalexports.com" className="ci-v">rafa@abqglobalexports.com</a></div>
                </div>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L20 13l1 4v2a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" /></svg></span>
                  <div><div className="ci-k">WhatsApp / Phone</div><a href="tel:+919030873730" className="ci-v">+91 90308 73730</a></div>
                </div>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg></span>
                  <div><div className="ci-k">Based In</div><div className="ci-v">7008, H.No 5-497, Near Hitec City, Izzathnagar,<br />Khanamet, Kondapur, Hyderabad, Telangana 500084</div></div>
                </div>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg></span>
                  <div><div className="ci-k">Response Time</div><div className="ci-v">Within two business days</div></div>
                </div>
              </div>
              <div className="quote-card" style={{ marginTop: '28px' }}>
                <p style={{ fontFamily: 'var(--display)', fontWeight: 700, color: 'var(--ink)', fontSize: '15px' }}>Not sure how to specify?</p>
                <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '8px' }}>Read the <Link to="/knowledge" style={{ color: 'var(--green-700)', fontWeight: 600 }}>Knowledge Centre</Link> first, SHU &amp; ASTA, processing methods and grading, then come back and quote with confidence.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
