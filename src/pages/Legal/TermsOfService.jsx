import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Legal.css'

function TermsOfService() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 50 })
    }, [])

    return (
        <div className="legal-page">
            <h1 data-aos="fade-up">Terms of Service</h1>
            <p className="legal-meta" data-aos="fade-up" data-aos-delay="100">
                Last updated: February 2026 &nbsp;|&nbsp; Al Baraqah Global Exports
            </p>

            <div className="legal-section" data-aos="fade-up" data-aos-delay="150">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using the Al Baraqah Global Exports website ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>2. About Our Services</h2>
                <p>
                    Al Baraqah Global Exports is engaged in the sourcing and export of products from India to international markets. Our services include:
                </p>
                <ul>
                    <li>Sourcing fresh produce (fruits and vegetables), spices, and agro commodities from verified Indian suppliers</li>
                    <li>Customized sourcing based on buyer-specific requirements including product specifications, quantity, and packaging</li>
                    <li>Export logistics coordination through established sea and air freight channels</li>
                    <li>Quality verification and compliance-driven documentation</li>
                </ul>
                <p>
                    The website serves as an informational and inquiry platform. Submitting an inquiry does not constitute a binding contract or purchase order.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>3. Inquiry & Communication</h2>
                <p>
                    When you submit a trade inquiry through our contact form, you agree to provide accurate and complete information. We will use this information solely to process your inquiry and respond with relevant product details, pricing, or logistics options.
                </p>
                <p>
                    Submission of an inquiry does not obligate either party to enter into a trade agreement. All trade agreements are subject to separate formal documentation, mutual acceptance, and applicable legal requirements.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>4. Intellectual Property</h2>
                <p>
                    All content on this website  including but not limited to text, graphics, logos, brand name, images, design elements, and page layout  is the intellectual property of Al Baraqah Global Exports and is protected under applicable copyright and trademark laws.
                </p>
                <ul>
                    <li>You may not reproduce, distribute, modify, or create derivative works from our content without prior written consent</li>
                    <li>The Al Baraqah Global Exports name, logo, and brand marks may not be used in connection with any product or service without our authorization</li>
                    <li>Limited personal, non-commercial use of the website content is permitted for informational purposes</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>5. Product Information & Pricing</h2>
                <p>
                    Product categories, descriptions, and other information displayed on this website are for general informational purposes only. We make reasonable efforts to ensure accuracy, but:
                </p>
                <ul>
                    <li>Product availability, specifications, and pricing are subject to change without prior notice</li>
                    <li>Final pricing is determined based on product type, quantity, packaging, destination, and prevailing market conditions</li>
                    <li>All quotations provided are valid for the period specified therein and are non-binding until formally accepted by both parties</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>6. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by law, Al Baraqah Global Exports shall not be liable for:
                </p>
                <ul>
                    <li>Any direct, indirect, incidental, or consequential damages arising from the use of this website</li>
                    <li>Loss of data, profits, or business opportunities resulting from website access issues, errors, or interruptions</li>
                    <li>Any reliance placed on information displayed on this website for trade decisions</li>
                    <li>Delays or failures in export execution caused by force majeure events, regulatory changes, or third-party logistics disruptions</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>7. User Conduct</h2>
                <p>When using our website, you agree not to:</p>
                <ul>
                    <li>Submit false, misleading, or fraudulent inquiries</li>
                    <li>Attempt to gain unauthorized access to our systems or data</li>
                    <li>Use automated tools, bots, or scrapers to extract content from the website</li>
                    <li>Engage in any activity that disrupts or interferes with the website's operation</li>
                    <li>Use the website for any unlawful purpose</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>8. Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites or services. These links are provided for convenience only. Al Baraqah Global Exports does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>9. Governing Law & Jurisdiction</h2>
                <p>
                    These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website or our services shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>10. Modifications</h2>
                <p>
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any modifications constitutes acceptance of the revised terms.
                </p>
            </div>

            <div className="legal-contact" data-aos="fade-up">
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <p><strong>Al Baraqah Global Exports</strong></p>
                <p>7008, H.No 5-497, Near Hitec City, Izzathnagar, Khanamet, Kondapur, Hyderabad, Telangana 500084</p>
                <p>Email: <a href="mailto:abglobalexports2k26@gmail.com">abglobalexports2k26@gmail.com</a></p>
                <p>Phone: +91 9030873730</p>
                <p style={{ marginTop: '1rem' }}>
                    <Link to="/contact">Submit a query through our contact form →</Link>
                </p>
            </div>
        </div>
    )
}

export default TermsOfService
