import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './ProductDetail.css'

// Product images
import gunturImg from '../../assets/images/products/guntur_sannam_chilli.jpeg'
import byadgiImg from '../../assets/images/products/byadgi_red_chilli.jpeg'
import tejaImg from '../../assets/images/products/Teja_mirchi.jpeg'
import tejaAltImg from '../../assets/images/products/Teja_chilli.jpeg'
import basmatiImg from '../../assets/images/products/traditional_basmati_rice.jpeg'
import sonaImg from '../../assets/images/products/sona_masoori_rice.jpeg'

/* ─────────────────────────────────────────
   PRODUCT DATA FROM DOCUMENT
   ───────────────────────────────────────── */
const productData = {
    'guntur-sannam-chilli': {
        name: 'Guntur Sannam Chilli',
        variety: 'Guntur Mirchi',
        category: 'Red Chilli',
        image: gunturImg,
        altImage: gunturImg,
        tagline: 'Bold Heat. Rich Color. Global Standard.',
        heroDescription: 'One of the most traded chilli varieties globally, offering a balanced combination of strong pungency and deep red color for industrial spice processing and bulk trade markets.',
        highlights: [
            { value: '35K–40K', label: 'SHU Range' },
            { value: '< 12%', label: 'Moisture' },
            { value: '341/334', label: 'Grades' },
            { value: '25/50 kg', label: 'Packing' }
        ],
        overview: {
            title: 'What Makes This Variety Special',
            text: 'Guntur Mirchi is one of the most traded chilli varieties globally. It offers a balanced combination of strong pungency and deep red color, making it highly suitable for industrial spice processing and bulk trade markets.',
            points: [
                'Sourced from verified production belts in Andhra Pradesh',
                'Consistent pungency and color retention across batches',
                'High demand across both wholesale and processing markets',
                'Ideal for chilli powder, oleoresin, and spice blends'
            ]
        },
        primaryUses: [
            { label: 'Chilli Powder Manufacturing', icon: 'factory' },
            { label: 'Spice Blending Units', icon: 'blend' },
            { label: 'Oleoresin Extraction', icon: 'extract' },
            { label: 'Processed Food Production', icon: 'food' },
            { label: 'Wholesale Distribution', icon: 'distribute' }
        ],
        buyerBenefits: [
            { title: 'Stable Pungency Range', desc: 'Suitable for industrial processing with consistent SHU levels across batches.' },
            { title: 'Consistent Color Retention', desc: 'Deep red color maintained during grinding for premium powder output.' },
            { title: 'High Market Demand', desc: 'Strong demand in wholesale markets ensures reliable trading volumes.' },
            { title: 'Year-Round Procurement', desc: 'Reliable sourcing with consistent availability throughout the year.' },
            { title: 'Value-Added Processing', desc: 'Suitable for both whole trade and value-added spice processing.' }
        ],
        consumerBenefits: [
            'Enhances flavor intensity in food',
            'Provides natural heat without artificial additives',
            'Rich in capsaicin content',
            'Contributes to metabolism stimulation',
            'Long shelf stability when stored properly'
        ],
        specs: [
            { param: 'Pungency (SHU)', value: '35,000 – 40,000 SHU' },
            { param: 'Moisture', value: 'Below 12%' },
            { param: 'Form', value: 'Whole / Stemless' },
            { param: 'Grades Available', value: '341 / 334' },
            { param: 'Packing', value: '25 kg / 50 kg PP Bags' },
            { param: 'Container Loading', value: 'Bulk container loading available' }
        ],
        qualityProcess: [
            { title: 'Direct Sourcing', desc: 'Procurement from verified production belts in Guntur region' },
            { title: 'Batch Grading', desc: 'Batch-wise grading and size segregation for consistency' },
            { title: 'Moisture Testing', desc: 'Moisture verification prior to packing ensures export compliance' },
            { title: 'Pre-Dispatch Inspection', desc: 'Quality verification before every shipment release' },
            { title: 'Container Loading', desc: 'Supervised container loading with proper stacking' },
            { title: 'Documentation', desc: 'Export documentation verification before shipment dispatch' }
        ],
        packaging: [
            { title: '25 kg PP Bags', desc: 'Standard industrial bulk packing', icon: 'bag' },
            { title: '50 kg PP Bags', desc: 'High-volume export packing', icon: 'bag-large' },
            { title: 'Containerized', desc: 'FCL container loading available', icon: 'container' },
            { title: 'Custom Packing', desc: 'As per buyer specification', icon: 'custom' }
        ]
    },

    'byadgi-chilli': {
        name: 'Byadgi Red Chilli',
        variety: 'Byadgi Mirchi',
        category: 'Red Chilli',
        image: byadgiImg,
        altImage: byadgiImg,
        tagline: 'Vibrant Color. Mild Heat. Global Quality.',
        heroDescription: 'Internationally recognized for its high ASTA color value and mild pungency, preferred in markets where vibrant red color is commercially more important than heat intensity.',
        highlights: [
            { value: 'High ASTA', label: 'Color Value' },
            { value: 'Low–Med', label: 'Pungency' },
            { value: '< 12%', label: 'Moisture' },
            { value: 'Whole', label: 'Form' }
        ],
        overview: {
            title: 'What Makes This Variety Special',
            text: 'Byadgi Mirchi is internationally recognized for its high ASTA color value and mild pungency. It is preferred in markets where vibrant red color is commercially more important than heat intensity.',
            points: [
                'High ASTA color value for premium market positioning',
                'Mild pungency allows broader consumer acceptance',
                'Strong visual appeal in powdered form',
                'Sourced from Karnataka\'s premier chilli growing regions'
            ]
        },
        primaryUses: [
            { label: 'Premium Chilli Powder', icon: 'factory' },
            { label: 'Natural Food Coloring', icon: 'palette' },
            { label: 'Paprika Extraction', icon: 'extract' },
            { label: 'Sauce & Gravy Manufacturing', icon: 'food' }
        ],
        buyerBenefits: [
            { title: 'High ASTA Color Value', desc: 'Premium-grade color suitable for high-end spice markets and food coloring.' },
            { title: 'Broader Consumer Acceptance', desc: 'Low pungency makes it versatile for diverse market segments.' },
            { title: 'Strong Visual Appeal', desc: 'Exceptional red color in powdered form enhances product positioning.' },
            { title: 'Color-Focused Blends', desc: 'Ideal for spice blends where vibrant color is the primary requirement.' },
            { title: 'Industrial Processing', desc: 'Consistent grading ensures uniform output in large-scale processing.' }
        ],
        consumerBenefits: [
            'Enhances natural red color in food preparations',
            'Adds mild heat without overpowering flavor',
            'Suitable for households preferring balanced spice',
            'Improves visual presentation of curries and gravies',
            'Retains color even after cooking'
        ],
        specs: [
            { param: 'Pungency', value: 'Low to Medium' },
            { param: 'Moisture', value: 'Below 10–12%' },
            { param: 'Form', value: 'Whole / Stemless' },
            { param: 'ASTA Color', value: 'High ASTA color batches' },
            { param: 'Packing', value: 'Standard export packing' },
            { param: 'Specialty', value: 'Color-based batch segregation available' }
        ],
        qualityProcess: [
            { title: 'Color-Based Segregation', desc: 'Batch segregation based on ASTA color value measurements' },
            { title: 'Controlled Drying', desc: 'Drying process validation for optimal color retention' },
            { title: 'Moisture Verification', desc: 'Moisture testing before dispatch to ensure shelf stability' },
            { title: 'Manual & Machine Sorting', desc: 'Dual sorting process for premium grade consistency' },
            { title: 'Lot Traceability', desc: 'Complete lot identification and traceability documentation' }
        ],
        packaging: [
            { title: '25 kg PP Bags', desc: 'Standard export bulk packing', icon: 'bag' },
            { title: '50 kg PP Bags', desc: 'High-volume shipment packing', icon: 'bag-large' },
            { title: 'Containerized', desc: 'Full container load shipments', icon: 'container' },
            { title: 'Custom Packing', desc: 'As per buyer specification', icon: 'custom' }
        ]
    },

    'teja-chilli': {
        name: 'Teja Chilli',
        variety: 'Teja Mirchi',
        category: 'Red Chilli',
        image: tejaImg,
        altImage: tejaAltImg,
        tagline: 'Hot. Spicy. Premium Indian Export Chilli.',
        heroDescription: 'One of the hottest commercial chilli varieties exported from India, widely demanded in high-heat spice markets due to its elevated capsaicin levels.',
        highlights: [
            { value: '50,000+', label: 'SHU' },
            { value: '< 12%', label: 'Moisture' },
            { value: 'Whole', label: 'Form' },
            { value: 'Sun-Dried', label: 'Process' }
        ],
        overview: {
            title: 'What Makes This Variety Special',
            text: 'Teja Mirchi is one of the hottest commercial chilli varieties exported from India. It is widely demanded in high-heat spice markets due to its elevated capsaicin levels.',
            points: [
                'One of India\'s hottest commercial chilli varieties',
                'Elevated capsaicin levels for high-heat applications',
                'Strong aroma and spice intensity retained after processing',
                'Widely demanded across Asian and international export markets'
            ]
        },
        primaryUses: [
            { label: 'Hot Sauce Manufacturing', icon: 'food' },
            { label: 'Spicy Processed Foods', icon: 'factory' },
            { label: 'High-Heat Spice Blends', icon: 'blend' },
            { label: 'Bulk Chilli Powder', icon: 'distribute' }
        ],
        buyerBenefits: [
            { title: 'High SHU Range', desc: 'Suitable for heat-focused products requiring intense pungency above 50,000 SHU.' },
            { title: 'Strong Aroma & Intensity', desc: 'Robust spice character maintained through sun-drying process.' },
            { title: 'Blending Versatility', desc: 'Can be blended with milder varieties to achieve target heat levels.' },
            { title: 'Asian Market Demand', desc: 'Strong and consistent demand in high-spice Asian export markets.' },
            { title: 'Pungency Control', desc: 'Consistent pungency management for industrial-scale processing.' }
        ],
        consumerBenefits: [
            'Delivers strong and authentic spicy flavor',
            'Enhances heat profile in food preparations',
            'Ideal for consumers preferring high-spice cuisine',
            'Adds intensity to sauces and marinades',
            'Maintains flavor strength even after cooking'
        ],
        specs: [
            { param: 'Pungency (SHU)', value: '50,000+ SHU' },
            { param: 'Moisture', value: 'Below 12%' },
            { param: 'Form', value: 'Whole' },
            { param: 'Drying Method', value: 'Sun-Dried' },
            { param: 'Packing', value: 'Bulk packing options available' },
            { param: 'Sourcing', value: 'Andhra Pradesh production regions' }
        ],
        qualityProcess: [
            { title: 'Pungency-Based Control', desc: 'Batch segregation based on capsaicin content and SHU levels' },
            { title: 'Field-Level Sourcing', desc: 'Direct sourcing validation from production fields' },
            { title: 'Moisture Confirmation', desc: 'Moisture verification before container sealing' },
            { title: 'Supervised Packing', desc: 'Export-grade packing with quality supervision' }
        ],
        packaging: [
            { title: '25 kg PP Bags', desc: 'Standard export packing', icon: 'bag' },
            { title: '50 kg PP Bags', desc: 'Bulk export packing', icon: 'bag-large' },
            { title: 'Containerized', desc: 'Full container loading available', icon: 'container' },
            { title: 'Custom Options', desc: 'Flexible packing as per requirement', icon: 'custom' }
        ]
    },

    'traditional-basmati-rice': {
        name: 'Traditional Basmati Rice',
        variety: 'Premium Basmati',
        category: 'Rice',
        image: basmatiImg,
        altImage: basmatiImg,
        tagline: 'Naturally Long. Exceptionally Aromatic.',
        heroDescription: 'Heritage long-grain aromatic rice cultivated in the Indo-Gangetic plains, globally recognized for its natural fragrance, elongated grain structure, and premium culinary positioning.',
        highlights: [
            { value: 'Long Grain', label: 'Structure' },
            { value: '12–24 Mo', label: 'Aging' },
            { value: '< 14%', label: 'Moisture' },
            { value: '1–5%', label: 'Broken' }
        ],
        overview: {
            title: 'Variety Profile',
            text: 'Traditional Basmati is a heritage long-grain aromatic rice cultivated in the Indo-Gangetic plains. It is globally recognized for its natural fragrance, elongated grain structure, and premium culinary positioning across international markets.',
            points: [
                'Premium-grade long grain structure for high-end markets',
                'Natural aroma retention even after cooking',
                'Strong brand positioning potential for retail segments',
                'Stable demand in Middle East and European markets'
            ]
        },
        primaryUses: [
            { label: 'Premium Retail Packaging', icon: 'retail' },
            { label: 'Hospitality Supply', icon: 'hotel' },
            { label: 'Private Label Programs', icon: 'label' },
            { label: 'Specialty Distributors', icon: 'distribute' }
        ],
        buyerBenefits: [
            { title: 'Premium Long Grain', desc: 'Superior grain structure for high-end market positioning and premium retail branding.' },
            { title: 'High Aroma Retention', desc: 'Natural fragrance maintained after cooking for authentic basmati experience.' },
            { title: 'Brand Positioning', desc: 'Strong potential for private label and branded retail segment development.' },
            { title: 'Market Demand', desc: 'Stable and growing demand in Middle East, European, and premium markets worldwide.' },
            { title: 'Value-Added Packaging', desc: 'Suitable for premium retail packaging with private label support available.' }
        ],
        consumerBenefits: [
            'Naturally aromatic profile',
            'Distinct long-grain elongation after cooking',
            'Non-sticky texture',
            'Refined dining quality'
        ],
        specs: [
            { param: 'Grain Length', value: 'Long and Slender' },
            { param: 'Broken Percentage', value: '1% / 2% / 5% (as specified)' },
            { param: 'Moisture', value: '< 14%' },
            { param: 'Aging', value: '12–24 months available' },
            { param: 'Variants', value: 'Raw / Steam' },
            { param: 'Packing', value: 'Retail & Bulk options' }
        ],
        qualityProcess: [
            { title: 'Supervised Milling', desc: 'Controlled milling operations for consistent grain quality' },
            { title: 'Grain Validation', desc: 'Grain length and broken percentage testing per batch' },
            { title: 'Moisture Verification', desc: 'Pre-packing moisture testing for shelf stability' },
            { title: 'Aging Confirmation', desc: 'Aging period validation for aroma and cooking quality' },
            { title: 'Pre-Shipment Inspection', desc: 'Structured inspection protocols before every shipment' },
            { title: 'Documentation Review', desc: 'Full compliance documentation and container seal verification' }
        ],
        packaging: [
            { title: '5 kg / 10 kg Retail', desc: 'Premium retail packaging', icon: 'retail' },
            { title: '25 kg / 50 kg Bulk', desc: 'Industrial bulk packing', icon: 'bag-large' },
            { title: 'Private Label', desc: 'Custom branding support', icon: 'label' },
            { title: 'Containerized', desc: 'Moisture-controlled FCL shipments', icon: 'container' }
        ]
    },

    'sona-masoori-rice': {
        name: 'Sona Masoori Rice',
        variety: 'South Indian Medium Grain',
        category: 'Rice',
        image: sonaImg,
        altImage: sonaImg,
        tagline: 'Naturally Soft. Delightfully Flavorful.',
        heroDescription: 'A high-volume staple rice variety cultivated primarily in South India, positioned for retail and institutional consumption across international export markets.',
        highlights: [
            { value: 'Medium', label: 'Grain Type' },
            { value: '< 14%', label: 'Moisture' },
            { value: 'Multi', label: 'Variants' },
            { value: 'Bulk', label: 'Supply' }
        ],
        overview: {
            title: 'Variety Profile',
            text: 'Sona Masoori is a medium-grain rice variety cultivated primarily in South India. It is positioned as a high-volume staple rice for retail and institutional consumption across export markets.',
            points: [
                'Reliable bulk procurement with consistent supply volumes',
                'Competitive price positioning for high-turnover markets',
                'Consistent grain size uniformity across shipments',
                'Scalable export supply for growing market demand'
            ]
        },
        primaryUses: [
            { label: 'Retail Supermarket Distribution', icon: 'retail' },
            { label: 'Institutional Catering', icon: 'hotel' },
            { label: 'Food Service Operators', icon: 'food' },
            { label: 'Regional Wholesale', icon: 'distribute' }
        ],
        buyerBenefits: [
            { title: 'Reliable Bulk Volumes', desc: 'Consistent procurement volumes to meet large-scale distribution requirements.' },
            { title: 'Competitive Pricing', desc: 'Attractive cost positioning suitable for price-sensitive high-turnover markets.' },
            { title: 'Grain Uniformity', desc: 'Consistent grain size and quality for standardized consumer packaging.' },
            { title: 'High-Turnover Markets', desc: 'Ideal for markets requiring steady, large-volume staple rice supply.' },
            { title: 'Scalable Supply', desc: 'Export supply capacity that scales with growing market demand.' }
        ],
        consumerBenefits: [
            'Soft texture after cooking',
            'Easy digestibility',
            'Balanced starch profile',
            'Suitable for daily consumption'
        ],
        specs: [
            { param: 'Grain Type', value: 'Medium Grain' },
            { param: 'Broken', value: 'As per buyer specification' },
            { param: 'Moisture', value: '< 14%' },
            { param: 'Variants', value: 'Raw / Steam / Parboiled' },
            { param: 'Packing', value: 'Retail & Bulk options' },
            { param: 'Supply', value: 'Containerized export shipments' }
        ],
        qualityProcess: [
            { title: 'Grain Uniformity', desc: 'Grain size and uniformity inspection for batch consistency' },
            { title: 'Broken Verification', desc: 'Broken percentage testing per buyer specification' },
            { title: 'Moisture Testing', desc: 'Pre-dispatch moisture verification for export compliance' },
            { title: 'Supervised Milling', desc: 'Controlled milling process for quality output' },
            { title: 'Batch Traceability', desc: 'Full lot traceability from sourcing to shipment' },
            { title: 'Container Supervision', desc: 'Export documentation control and compliance verification' }
        ],
        packaging: [
            { title: '5 kg / 10 kg Retail', desc: 'Consumer retail packing', icon: 'retail' },
            { title: '25 kg / 50 kg Bulk', desc: 'Industrial bulk packing', icon: 'bag-large' },
            { title: 'Private Label', desc: 'Custom brand capability', icon: 'label' },
            { title: 'Containerized', desc: 'Moisture-controlled storage & shipping', icon: 'container' }
        ]
    }
}

/* ─────────────────────────────────────────
   SVG ICON COMPONENTS
   ───────────────────────────────────────── */
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    )
}

function ArrowIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}

function ChevronRight() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    )
}

function UseIcon({ type }) {
    const icons = {
        factory: <><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /></>,
        blend: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
        extract: <><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" /><path d="M8.5 2h7" /></>,
        food: <><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></>,
        distribute: <><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></>,
        palette: <><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></>,
        retail: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
        hotel: <><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" /><path d="M9 16h6" /><path d="M9 12h6" /><path d="M9 8h6" /></>,
        label: <><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path d="M6 6h.008" /></>
    }
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[type] || icons.factory}
        </svg>
    )
}

function BenefitIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}

function PackIcon({ type }) {
    const icons = {
        bag: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /></>,
        'bag-large': <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
        container: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
        custom: <><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></>,
        retail: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></>,
        label: <><path d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path d="M6 6h.008" /></>
    }
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[type] || icons.bag}
        </svg>
    )
}

function TrustIcon({ type }) {
    const icons = {
        compliance: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
        traceability: <><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
        warehouse: <><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /></>,
        documentation: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>
    }
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icons[type] || icons.compliance}
        </svg>
    )
}


/* ─────────────────────────────────────────
   PRODUCT DETAIL COMPONENT
   ───────────────────────────────────────── */
function ProductDetail() {
    const { productId } = useParams()
    const product = productData[productId]

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        })
        window.scrollTo(0, 0)
    }, [productId])

    if (!product) {
        return (
            <div style={{ padding: '6rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
                <h2>Product not found</h2>
                <p>The product you are looking for does not exist.</p>
                <Link to="/what-we-export" style={{ color: 'var(--gold)' }}>← Back to Products</Link>
            </div>
        )
    }

    const allProducts = Object.entries(productData).map(([id, p]) => ({
        id, name: p.name, variety: p.variety, image: p.image
    }))

    return (
        <div className="product-detail-page">
            {/* ── Hero ── */}
            <section className="pd-hero">
                <div className="pd-hero-bg">
                    <img src={product.image} alt="" />
                </div>
                <div className="pd-hero-inner">
                    <div className="pd-hero-content" data-aos="fade-up">
                        <div className="pd-breadcrumb">
                            <Link to="/">Home</Link>
                            <ChevronRight />
                            <Link to="/what-we-export">Products</Link>
                            <ChevronRight />
                            <span style={{ color: 'var(--gold-light)' }}>{product.name}</span>
                        </div>
                        <div className="pd-hero-badge">{product.category}</div>
                        <h1 className="pd-hero-title">{product.name}</h1>
                        <p className="pd-hero-variety">{product.variety}</p>
                        <p className="pd-hero-tagline">{product.heroDescription}</p>
                        <div className="pd-highlights">
                            {product.highlights.map((h, i) => (
                                <div key={i} className="pd-highlight-item">
                                    <span className="pd-highlight-value">{h.value}</span>
                                    <span className="pd-highlight-label">{h.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pd-hero-ctas">
                            <Link to="/contact" className="pd-btn-quotation">
                                Request Quotation <ArrowIcon />
                            </Link>
                            <div className="pd-btn-specs" role="button" tabIndex={0} onClick={() => { const el = document.getElementById('specifications'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>
                                View Specifications
                            </div>
                        </div>
                    </div>
                    <div className="pd-hero-image" data-aos="fade-left" data-aos-delay="200">
                        <div className="pd-hero-img-glow" />
                        <div className="pd-hero-img-wrapper">
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Overview ── */}
            <section className="pd-overview">
                <div className="pd-overview-inner">
                    <div className="pd-overview-image" data-aos="fade-right">
                        <img src={product.altImage} alt={product.name} />
                    </div>
                    <div className="pd-overview-content" data-aos="fade-left">
                        <span className="pd-overview-subtitle">{product.overview.title}</span>
                        <h2>{product.name}</h2>
                        <p className="pd-overview-text">{product.overview.text}</p>
                        <ul className="pd-overview-points">
                            {product.overview.points.map((point, i) => (
                                <li key={i}>
                                    <CheckIcon />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Primary Uses ── */}
            <section className="pd-uses">
                <div className="pd-uses-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">Applications</span>
                        <h2 className="section-title">Primary Uses</h2>
                    </div>
                    <div className="pd-uses-grid">
                        {product.primaryUses.map((use, i) => (
                            <div key={i} className="pd-use-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="pd-use-icon">
                                    <UseIcon type={use.icon} />
                                </div>
                                <h4 className="pd-use-label">{use.label}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Buyer Benefits ── */}
            <section className="pd-buyer-benefits">
                <div className="pd-buyer-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">B2B Advantages</span>
                        <h2 className="section-title">Why Importers Choose This Variety</h2>
                    </div>
                    <div className="pd-benefits-grid">
                        {product.buyerBenefits.map((b, i) => (
                            <div key={i} className="pd-benefit-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="pd-benefit-icon">
                                    <BenefitIcon />
                                </div>
                                <h4 className="pd-benefit-title">{b.title}</h4>
                                <p className="pd-benefit-desc">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Consumer Benefits ── */}
            <section className="pd-consumer-benefits">
                <div className="pd-consumer-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">End-Use Quality</span>
                        <h2 className="section-title">Consumer Benefits</h2>
                    </div>
                    <div className="pd-consumer-list" data-aos="fade-up" data-aos-delay="100">
                        {product.consumerBenefits.map((item, i) => (
                            <span key={i} className="pd-consumer-chip">
                                <CheckIcon />
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Specifications Table ── */}
            <section className="pd-specs-section" id="specifications">
                <div className="pd-specs-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">Technical Data</span>
                        <h2 className="section-title">Export Specifications</h2>
                    </div>
                    <table className="pd-specs-table" data-aos="fade-up" data-aos-delay="100">
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Specification</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.specs.map((spec, i) => (
                                <tr key={i}>
                                    <td>{spec.param}</td>
                                    <td>{spec.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── Quality Process Timeline ── */}
            <section className="pd-quality">
                <div className="pd-quality-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">Quality Assurance</span>
                        <h2 className="section-title">Our Quality Process</h2>
                    </div>
                    <div className="pd-timeline">
                        {product.qualityProcess.map((step, i) => (
                            <div key={i} className="pd-timeline-item" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="pd-timeline-dot">{i + 1}</div>
                                <h4 className="pd-timeline-title">{step.title}</h4>
                                <p className="pd-timeline-desc">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Packaging ── */}
            <section className="pd-packaging">
                <div className="pd-packaging-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">Logistics</span>
                        <h2 className="section-title">Packaging & Shipment</h2>
                    </div>
                    <div className="pd-packaging-grid">
                        {product.packaging.map((pack, i) => (
                            <div key={i} className="pd-pack-card" data-aos="fade-up" data-aos-delay={i * 80}>
                                <div className="pd-pack-icon">
                                    <PackIcon type={pack.icon} />
                                </div>
                                <h4 className="pd-pack-title">{pack.title}</h4>
                                <p className="pd-pack-desc">{pack.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Trust Band ── */}
            <section className="pd-trust">
                <div className="pd-trust-inner" data-aos="fade-up">
                    <div className="pd-trust-item">
                        <TrustIcon type="compliance" />
                        <span>Export Compliance</span>
                    </div>
                    <div className="pd-trust-item">
                        <TrustIcon type="traceability" />
                        <span>Batch Traceability</span>
                    </div>
                    <div className="pd-trust-item">
                        <TrustIcon type="warehouse" />
                        <span>Moisture-Controlled Storage</span>
                    </div>
                    <div className="pd-trust-item">
                        <TrustIcon type="documentation" />
                        <span>Full Documentation Support</span>
                    </div>
                </div>
            </section>

            {/* ── Other Products Navigation ── */}
            <section className="pd-product-nav">
                <div className="pd-product-nav-inner">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-eyebrow">Explore More</span>
                        <h2 className="section-title">Our Other Products</h2>
                    </div>
                    <div className="pd-other-products" data-aos="fade-up" data-aos-delay="100">
                        {allProducts.filter(p => p.id !== productId).map(p => (
                            <Link key={p.id} to={`/products/${p.id}`} className="pd-other-card">
                                <img src={p.image} alt={p.name} className="pd-other-img" />
                                <div className="pd-other-info">
                                    <h4>{p.name}</h4>
                                    <span>{p.variety}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
