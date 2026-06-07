import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Legal.css'

function TradeTerms() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 50 })
    }, [])

    return (
        <div className="legal-page">
            <h1 data-aos="fade-up">Trade Terms</h1>
            <p className="legal-meta" data-aos="fade-up" data-aos-delay="100">
                Last updated: February 2026 &nbsp;|&nbsp; Al Baraqah Global Exports
            </p>

            <div className="legal-section" data-aos="fade-up" data-aos-delay="150">
                <h2>1. Scope of Trade</h2>
                <p>
                    Al Baraqah Global Exports operates as an export trading enterprises based in India, specialising in sourcing and exporting agricultural produce, spices, agro commodities, and customized products to international buyers.
                </p>
                <p>
                    These Trade Terms apply to all commercial engagements, trade inquiries, quotations, and export transactions initiated through our website or direct communication channels.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>2. Trade Inquiry Process</h2>
                <ul>
                    <li>Buyers may submit trade inquiries through our website contact form, email, or phone</li>
                    <li>Each inquiry should include: product name, required quantity, preferred packaging, quality specifications, and destination country</li>
                    <li>Upon receiving an inquiry, our team will assess availability, source pricing, and prepare a detailed quotation</li>
                    <li>Quotations are typically provided within 3–5 business days, depending on product complexity and sourcing requirements</li>
                    <li>All quotations are non-binding and valid for the period specified therein</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>3. Pricing & Payment</h2>
                <ul>
                    <li>All pricing is quoted in USD or INR as mutually agreed, and is subject to prevailing market rates at the time of order confirmation</li>
                    <li>Pricing includes product cost and may or may not include packaging, logistics, and customs charges  as specified in each quotation</li>
                    <li>Payment terms are negotiated on a per-transaction basis and will be clearly stated in the commercial invoice or proforma invoice</li>
                    <li>Acceptable payment modes include wire transfer (TT), letter of credit (L/C), and other mutually agreed methods</li>
                    <li>Advance payment or confirmed L/C may be required for first-time buyers</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>4. Incoterms & Delivery</h2>
                <p>
                    Unless otherwise stated, trade transactions are governed by the applicable <strong>Incoterms® 2020</strong> rules as specified in each quotation or contract. Common terms used include:
                </p>
                <ul>
                    <li><strong>FOB (Free on Board):</strong> Seller delivers goods on board the vessel at the port of shipment. Risk transfers to buyer once goods are loaded</li>
                    <li><strong>CIF (Cost, Insurance & Freight):</strong> Seller covers cost, insurance, and freight to the destination port</li>
                    <li><strong>CFR (Cost & Freight):</strong> Seller covers cost and freight; buyer arranges insurance</li>
                    <li><strong>EXW (Ex Works):</strong> Buyer assumes all costs and risks from the seller's premises</li>
                </ul>
                <p>
                    The applicable Incoterm will be clearly stated in each quotation and agreed upon before order confirmation.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>5. Quality Assurance</h2>
                <ul>
                    <li>All products are sourced from verified suppliers and undergo quality checks before shipment</li>
                    <li>Product specifications, grade, and quality standards will be mutually agreed during the quotation stage</li>
                    <li>Third-party inspection and certification can be arranged upon buyer request at additional cost</li>
                    <li>We follow standard export packaging practices and comply with phytosanitary and food safety requirements of the destination country</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>6. Shipping & Logistics</h2>
                <ul>
                    <li>Products are shipped through established sea freight and air freight channels from Indian ports and airports</li>
                    <li>Estimated transit times will be communicated during the quotation stage and depend on the destination, shipping line, and mode of transport</li>
                    <li>Shipment documentation includes commercial invoice, packing list, bill of lading/airway bill, certificate of origin, and applicable phytosanitary/health certificates</li>
                    <li>Al Baraqah Global Exports coordinates with licensed customs brokers and freight forwarders for seamless export clearance</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>7. Order Confirmation & Cancellation</h2>
                <ul>
                    <li>An order is considered confirmed only upon written acceptance from both parties and receipt of advance payment or confirmed L/C as applicable</li>
                    <li>Cancellation requests must be communicated in writing. Cancellations after production or procurement has commenced may be subject to cancellation charges</li>
                    <li>Al Baraqah Global Exports reserves the right to cancel orders due to unforeseen supplier issues, regulatory changes, or force majeure events, with full refund of any advance payment received</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>8. Claims & Disputes</h2>
                <ul>
                    <li>Any claims regarding product quality, quantity, or shipment damage must be raised within <strong>7 days</strong> of receipt of goods at the destination port, supported by photographic evidence and relevant documentation</li>
                    <li>Claims arising from damage during transit under CIF/CFR terms should be directed to the insurance provider</li>
                    <li>Both parties agree to resolve disputes amicably through negotiation. If unresolved, disputes shall be referred to arbitration under Indian law</li>
                    <li>The jurisdiction for any legal proceedings shall be the courts in Kadapa District, Andhra Pradesh, India</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>9. Force Majeure</h2>
                <p>
                    Neither party shall be held liable for delays or failure in performance resulting from events beyond reasonable control, including but not limited to natural disasters, pandemics, government restrictions, port closures, strikes, wars, or any other force majeure events. Affected parties shall promptly notify the other party and make reasonable efforts to mitigate the impact.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>10. Compliance & Regulations</h2>
                <p>
                    All export transactions are conducted in compliance with:
                </p>
                <ul>
                    <li>Indian Foreign Trade Policy and DGFT regulations</li>
                    <li>Customs Act, 1962 and related export procedures</li>
                    <li>GST and IGST provisions applicable to exports</li>
                    <li>FEMA (Foreign Exchange Management Act) regulations for international payments</li>
                    <li>Import regulations and standards of the destination country</li>
                </ul>
            </div>

            <div className="legal-contact" data-aos="fade-up">
                <h2>Contact Us</h2>
                <p>For trade inquiries, quotation requests, or questions about our trade terms:</p>
                <p><strong>Al Baraqah Global Exports</strong></p>
                <p>21/196, Hyderkhan Street, Proddatur, Kadapa District, Andhra Pradesh, 516360</p>
                <p>Email: <a href="mailto:abglobalexports2k26@gmail.com">abglobalexports2k26@gmail.com</a></p>
                <p>Phone: +91 9030873730</p>
                <p style={{ marginTop: '1rem' }}>
                    <Link to="/contact">Submit a trade inquiry →</Link>
                </p>
            </div>
        </div>
    )
}

export default TradeTerms
