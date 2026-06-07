import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Legal.css'

function PrivacyPolicy() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 50 })
    }, [])

    return (
        <div className="legal-page">
            <h1 data-aos="fade-up">Privacy Policy</h1>
            <p className="legal-meta" data-aos="fade-up" data-aos-delay="100">
                Last updated: February 2026 &nbsp;|&nbsp; Al Baraqah Global Exports
            </p>

            <div className="legal-section" data-aos="fade-up" data-aos-delay="150">
                <h2>1. Introduction</h2>
                <p>
                    Al Baraqah Global Exports ("we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our export trade services.
                </p>
                <p>
                    By using our website or submitting inquiries, you consent to the practices described in this policy.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>2. Information We Collect</h2>

                <h3>Personal Information</h3>
                <p>When you submit a trade inquiry or contact form, we may collect:</p>
                <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number(s)</li>
                    <li>Company name</li>
                    <li>Country of residence or business</li>
                    <li>Product interest and trade requirements</li>
                    <li>Any additional details provided in your message</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <p>When you browse our website, we may automatically collect:</p>
                <ul>
                    <li>IP address and approximate location</li>
                    <li>Browser type and version</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited, time spent, and navigation patterns</li>
                    <li>Referring website or source</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                    <li><strong>Respond to inquiries:</strong> Process and reply to your trade inquiries, product requests, and contact form submissions</li>
                    <li><strong>Trade facilitation:</strong> Source products, prepare quotations, and coordinate export logistics based on your requirements</li>
                    <li><strong>Communication:</strong> Send relevant updates about your inquiry status, shipment details, or trade-related information</li>
                    <li><strong>Website improvement:</strong> Analyse usage patterns to enhance our website experience and services</li>
                    <li><strong>Legal compliance:</strong> Meet regulatory, tax, and export documentation requirements under Indian and international trade law</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>4. Information Sharing & Disclosure</h2>
                <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul>
                    <li><strong>Service providers:</strong> Trusted logistics partners, shipping agents, and customs brokers involved in fulfilling your trade requirements</li>
                    <li><strong>Legal obligations:</strong> When required by Indian law, regulatory authorities, customs, or export compliance requirements</li>
                    <li><strong>Business operations:</strong> With our internal team members strictly on a need-to-know basis for processing your inquiry</li>
                </ul>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>5. Data Security</h2>
                <p>
                    We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>6. Data Retention</h2>
                <p>
                    We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable laws and regulations. Trade-related records may be retained for the period specified under Indian export and tax regulations.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to the personal information we hold about you</li>
                    <li>Request correction of inaccurate or incomplete information</li>
                    <li>Request deletion of your personal data (subject to legal retention requirements)</li>
                    <li>Withdraw consent for future communications at any time</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the details below.</p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>8. Cookies & Tracking</h2>
                <p>
                    Our website may use cookies and similar technologies to enhance your browsing experience. These are small files stored on your device that help us understand how you interact with our site. You can control cookie settings through your browser preferences.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>9. Third-Party Links</h2>
                <p>
                    Our website may contain links to external websites. We are not responsible for the privacy practices or content of those third-party sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
            </div>

            <div className="legal-section" data-aos="fade-up">
                <h2>10. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically.
                </p>
            </div>

            <div className="legal-contact" data-aos="fade-up">
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy
