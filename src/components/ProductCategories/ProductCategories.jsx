import { Link } from 'react-router-dom'
import './ProductCategories.css'

import chilliImg from '../../assets/images/products/chilli_cato.jpeg'
import riceImg from '../../assets/images/products/rice_cato.jpeg'

const categories = [
    {
        title: 'Red Chillies',
        description: 'Premium Guntur, Byadgi & Teja varieties, bold heat, vibrant color, export-grade quality.',
        image: chilliImg,
        link: '/what-we-export',
        filter: 'chilli',
        count: '3 Varieties'
    },
    {
        title: 'Premium Rice',
        description: 'Traditional Basmati & Sona Masoori, aromatic, long-grain, globally demanded.',
        image: riceImg,
        link: '/what-we-export',
        filter: 'rice',
        count: '2 Varieties'
    }
]

function ProductCategories() {
    return (
        <section className="pc-section">
            <div className="pc-inner">
                <div className="pc-header" data-aos="fade-up">
                    <span className="pc-eyebrow">Our Export Portfolio</span>
                    <h2 className="pc-title">Browse by Category</h2>
                </div>
                <div className="pc-grid">
                    {categories.map((cat, i) => (
                        <Link
                            to={cat.link}
                            state={{ category: cat.filter }}
                            key={i}
                            className="pc-card"
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                        >
                            <img src={cat.image} alt={cat.title} className="pc-card-img" />
                            <div className="pc-card-overlay" />
                            <div className="pc-card-content">
                                <span className="pc-card-count">{cat.count}</span>
                                <h3 className="pc-card-title">{cat.title}</h3>
                                <p className="pc-card-desc">{cat.description}</p>
                                <span className="pc-card-link">
                                    View Products
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProductCategories
