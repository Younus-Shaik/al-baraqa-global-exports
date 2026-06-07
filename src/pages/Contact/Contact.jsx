import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'

// ============================================================
// EmailJS Configuration (template variables expected):
//   {{from_name}} {{from_email}} {{company}} {{phone}}
//   {{country}} {{product}} {{message}}
// To Email: abglobalexports2k26@gmail.com
// ============================================================
const EMAILJS_SERVICE_ID = 'service_f7uugoa'
const EMAILJS_TEMPLATE_ID = 'template_0x51fjp'
const EMAILJS_PUBLIC_KEY = '75O1FTWp-AEQ00O3m'

function Contact() {
  const formRef = useRef()
  const cardRef = useRef()
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
      cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setErrorMsg(error?.text || 'Something went wrong. Please try again or email us directly.')
    }
  }

  return (
    <div className="abge">
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Contact</div>
          <span className="ph-tag">Request a Quotation</span>
          <h1 className="h1">Tell us your product, grade and destination port.</h1>
          <p className="lead">We&apos;ll respond with specification options, indicative pricing and an
            incoterm-clear quotation, usually within two business days.</p>
        </div>
      </section>

      {/* ============ FORM + INFO ============ */}
      <section className="section">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            {/* Form */}
            <div data-aos="fade-up">
              <div className="form-card" ref={cardRef}>
                {status === 'success' ? (
                  <div className="form-success show">
                    <div className="tick">
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h3>Thank you, your request has been sent.</h3>
                    <p>Our trade desk will get back to you, usually within two business days. For
                      anything urgent, email or call us directly.</p>
                    <button type="button" className="btn btn-outline" style={{ marginTop: '24px' }} onClick={() => setStatus('idle')}>
                      Send another request
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="form-head">
                      <span className="eyebrow">Request for Quotation</span>
                      <h2 className="h2" style={{ marginTop: '14px', fontSize: 'clamp(24px,2.6vw,30px)' }}>Send us your requirement</h2>
                    </div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                      <div className="form-grid">
                        <div className="field full">
                          <label htmlFor="from_name">Full Name <span className="req">*</span></label>
                          <input type="text" id="from_name" name="from_name" placeholder="Your full name" required />
                        </div>
                        <div className="field">
                          <label htmlFor="company">Company</label>
                          <input type="text" id="company" name="company" placeholder="Company name" />
                        </div>
                        <div className="field">
                          <label htmlFor="from_email">Email <span className="req">*</span></label>
                          <input type="email" id="from_email" name="from_email" placeholder="you@company.com" required />
                        </div>
                        <div className="field">
                          <label htmlFor="phone">Phone <span className="req">*</span></label>
                          <input type="tel" id="phone" name="phone" placeholder="+__ _________" required />
                        </div>
                        <div className="field">
                          <label htmlFor="country">Destination Country <span className="req">*</span></label>
                          <input type="text" id="country" name="country" placeholder="e.g. Germany" required />
                        </div>
                        <div className="field full">
                          <label htmlFor="product">Product <span className="req">*</span></label>
                          <select id="product" name="product" required defaultValue="">
                            <option value="" disabled>Select a product</option>
                            <option value="Dry Red Chilli">Dry Red Chilli</option>
                            <option value="Coffee">Coffee</option>
                            <option value="Dry Red Chilli & Coffee">Dry Red Chilli &amp; Coffee</option>
                          </select>
                        </div>
                        <div className="field full">
                          <label htmlFor="message">Requirement details</label>
                          <textarea id="message" name="message" placeholder="Grade / variety, quantity, packaging, incoterm and destination port…"></textarea>
                        </div>
                      </div>

                      {status === 'error' && (
                        <p className="err-msg" style={{ marginTop: '14px', fontSize: '13px' }}>{errorMsg}</p>
                      )}

                      <button type="submit" className="btn btn-navy btn-lg" style={{ marginTop: '22px' }} disabled={status === 'sending'}>
                        {status === 'sending' ? 'Sending…' : <>Request a Quotation <span className="arr">→</span></>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact info */}
            <div data-aos="fade-up" data-aos-delay="100">
              <span className="eyebrow">Get in Touch</span>
              <h2 className="h2" style={{ marginTop: '14px' }}>Direct lines to the trade desk.</h2>
              <div className="contact-info" style={{ marginTop: '24px' }}>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg></span>
                  <div>
                    <div className="ci-k">Office</div>
                    <div className="ci-v">21/196, Hyderkhan Street,<br />Proddatur, Kadapa District,<br />Andhra Pradesh 516360, India</div>
                  </div>
                </div>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></span>
                  <div>
                    <div className="ci-k">Email</div>
                    <a className="ci-v" href="mailto:rafa@abqglobalexports.com">rafa@abqglobalexports.com</a>
                    <a className="ci-v" href="mailto:abglobalexports2k26@gmail.com">abglobalexports2k26@gmail.com</a>
                  </div>
                </div>
                <div className="ci-row">
                  <span className="ci-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg></span>
                  <div>
                    <div className="ci-k">Phone</div>
                    <a className="ci-v" href="tel:+919030873730">+91 90308 73730</a>
                    <a className="ci-v" href="tel:+917893052850">+91 78930 52850</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
