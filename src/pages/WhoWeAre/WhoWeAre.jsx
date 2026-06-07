import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../../styles/abge.css'
import './WhoWeAre.css'

// Team member images
import RafaImg from '../../assets/images/Rafa.jpg'
import MuzammilImg from '../../assets/images/Muzammil.jpg'
import YounusImg from '../../assets/images/Younus.jpg'
import MudassirImg from '../../assets/images/Mudassir.jpg'

const teamMembers = [
  {
    id: 'founder-ceo',
    name: 'Rafa Mohammad',
    role: 'Founder & CEO',
    image: RafaImg,
    previewBullets: [
      'Compliance-first, systems-driven export execution',
      'Anticipates regulatory, tax, and documentation risk early',
      'Builds foundations before scaling'
    ],
    professionalOverview: [
      'Chartered Accountant by profession, with strong experience in taxation, regulatory advisory, and business structuring across diverse client engagements',
      'Has extensively advised businesses involved in exports on tax structuring, compliance positioning, pricing logic, and transaction documentation',
      'Brings a deep understanding of the export ecosystem from a governance and advisory lens, including GST, customs-linked considerations, foreign exchange aspects, and cross-border transaction mechanics',
      'Experienced in designing export-ready frameworks that align commercial intent with regulatory and documentation requirements'
    ],
    roleInOrg: [
      'Leads the venture with a compliance-first and systems-driven approach, ensuring that export operations are built correctly from inception',
      'Responsible for structuring the entire compliance and governance framework, rather than retrofitting controls after scale',
      'Oversees supplier onboarding, contractual clarity, and pricing frameworks, ensuring transactions are commercially sound and defensible',
      'Actively involved in setting up internal processes, checks, and documentation standards across procurement, logistics coordination, and financial reporting'
    ],
    executionPhilosophy: [
      'Acknowledges that the organisation is at an early stage of direct export execution, and deliberately prioritises correctness over speed',
      'Focused on building strong foundations before scaling, drawing from advisory experience rather than legacy execution claims',
      'Believes that sustainable export businesses are built through process discipline, transparency, and risk awareness'
    ],
    whatHeBrings: [
      'Ability to anticipate regulatory, tax, and documentation risks before they impact operations',
      'Strong analytical mindset that converts complex regulations into practical operating frameworks',
      'Leadership anchored in credibility, accountability, and long-term sustainability, rather than short-term volumes'
    ],
    overviewTitle: 'Professional Overview',
    philosophyTitle: 'Execution Philosophy'
  },
  {
    id: 'trade-intelligence',
    name: 'Muzammil',
    role: 'Chief Trade Intelligence Officer',
    image: MuzammilImg,
    previewBullets: [
      'Converts raw market data into actionable trade insights',
      'Improves pricing accuracy and market selection with analytics',
      'Builds repeatable intelligence frameworks'
    ],
    professionalOverview: [
      'Computer Science & Business Systems graduate with a strong academic foundation in technology, data analytics, and systems-oriented problem solving',
      'Trained in data science, programming, and analytical thinking, with hands-on exposure',
      'Possesses working knowledge of web technologies, and data handling, enabling structured analysis of market and trade data',
      'Academic and project exposure to machine learning and pattern recognition, strengthening analytical reasoning and insight generation'
    ],
    roleInOrg: [
      'Leads trade intelligence, market research, and analytical support for sourcing, pricing, and market selection decisions',
      'Responsible for collecting, structuring, and analysing market and product data to support informed trade decisions',
      'Supports leadership with data-backed insights on demand trends, pricing benchmarks, and opportunity assessment',
      'Works closely with operations and strategy teams to ensure commercial decisions are supported by logic and evidence, not assumptions'
    ],
    executionPhilosophy: [
      'Approaches trade decision-making with a data-first and systems-driven mindset, reducing reliance on intuition',
      'Focused on building repeatable intelligence frameworks rather than one-off analysis',
      'Emphasises clarity, structure, and validation of information before execution',
      'Continuously updates analytical methods and tools to align with evolving market dynamics'
    ],
    whatHeBrings: [
      'Ability to translate raw data into actionable trade insights',
      'Strong analytical discipline that improves pricing accuracy and market selection',
      'A technology-enabled perspective that strengthens decision quality and execution confidence',
      'Long-term focus on building intelligence-led trade operations that scale with the organisation'
    ],
    overviewTitle: 'Professional Background',
    philosophyTitle: 'Execution Approach'
  },
  {
    id: 'platform-systems',
    name: 'Younus',
    role: 'Chief Platform & Systems Officer',
    image: YounusImg,
    previewBullets: [
      'Architects scalable systems connecting data and execution',
      'Applies AI/automation only where it adds measurable value',
      'Builds upgrade-ready, secure platform foundations'
    ],
    professionalOverview: [
      'Computer Science & Engineering graduate with strong academic performance and a solid foundation in full-stack development, systems architecture, and enterprise software engineering',
      'Trained in Java, Python, JavaScript, React, Node.js, and Spring Boot, with hands-on exposure across frontend, backend, and integration layers',
      'Experience working on enterprise-grade software environments, including large corporate projects involving scalability, performance optimisation, and accessibility',
      'Exposure to modern development practices, including version control, testing frameworks, DevOps support, and structured deployment workflows'
    ],
    roleInOrg: [
      'Architects and manages the organisation\'s digital platform, internal systems, and technology backbone',
      'Responsible for designing and maintaining scalable, secure, and maintainable systems that support trade operations and data flow',
      'Oversees platform automation, system integration, and technical process optimisation',
      'Actively evaluates and integrates AI-assisted tools and intelligent automation where they add measurable efficiency, accuracy, or decision support'
    ],
    executionPhilosophy: [
      'Follows a research-driven and future-oriented approach, continuously tracking advancements in AI, automation, and platform technologies',
      'Builds systems that are adaptive and upgrade-ready, allowing incorporation of new technologies without disruption',
      'Aligns platform evolution with operational realities and governance requirements, not experimentation in isolation'
    ],
    whatHeBrings: [
      'Ability to convert technology and AI research into practical, usable systems',
      'A structured approach to continuous improvement and system evolution',
      'Strong execution discipline that ensures innovation is controlled, secure, and scalable',
      'Long-term focus on positioning technology as a strategic growth and efficiency enabler'
    ],
    overviewTitle: 'Professional Background',
    philosophyTitle: 'Execution Approach'
  },
  {
    id: 'operations',
    name: 'Mudassir',
    role: 'Chief Operations Officer',
    image: MudassirImg,
    previewBullets: [
      'Hands-on trading execution discipline and coordination',
      'Ensures timing accuracy, vendor reliability, and controls',
      'Builds repeatable operational rhythms for export scale-up'
    ],
    professionalOverview: [
      'Experienced in domestic gold trading operations, with hands-on exposure to commodity procurement, pricing sensitivity, and execution discipline',
      'Strong understanding of day-to-day trading mechanics, including vendor coordination, quality considerations, inventory movement, and transaction timelines',
      'Brings practical exposure to risk-aware trading environments, where price volatility and execution accuracy are critical',
      'Currently expanding operational scope from domestic commodity trading to structured export operations, supported by robust systems and governance'
    ],
    roleInOrg: [
      'Oversees end-to-end operational execution, covering procurement coordination, logistics planning, shipment readiness, and execution controls',
      'Responsible for ensuring operational discipline across the trade lifecycle, from supplier engagement to final delivery',
      'Acts as the execution anchor, translating strategy and intelligence into on-ground action',
      'Coordinates closely with compliance, intelligence, and platform teams to ensure smooth, timely, and controlled execution'
    ],
    executionPhilosophy: [
      'Brings a practical, hands-on execution mindset, grounded in real trading experience rather than theoretical models',
      'Focused on process consistency, vendor reliability, and timing accuracy',
      'Acknowledges that international operations are in a structured build-out phase, and prioritises learning-by-execution with strong controls',
      'Emphasises operational clarity, accountability, and escalation discipline across all activities'
    ],
    whatHeBrings: [
      'Real-world trading exposure that strengthens execution realism',
      'Strong coordination skills across suppliers, logistics partners, and internal teams',
      'An operations-led mindset that ensures plans convert into outcomes',
      'Long-term focus on building repeatable, scalable, and disciplined trade operations'
    ],
    overviewTitle: 'Professional Background',
    philosophyTitle: 'Execution Approach'
  }
]

const leadershipPillars = [
  {
    title: 'Governance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" /></svg>
    ),
    bullets: [
      'Sets direction and compliance guardrails',
      'Reviews risk, pricing, and structure before execution'
    ]
  },
  {
    title: 'Trade Intelligence',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>
    ),
    bullets: [
      'Researches markets, demand, and pricing',
      'Converts data into clear trade decisions'
    ]
  },
  {
    title: 'Systems & Technology',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /></svg>
    ),
    bullets: [
      'Builds platforms that connect intelligence and execution',
      'Continuously upgrades systems through responsible automation and AI adoption'
    ]
  },
  {
    title: 'Operations',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></svg>
    ),
    bullets: [
      'Executes end-to-end trade activities',
      'Coordinates suppliers, logistics, and delivery timelines'
    ]
  }
]

function WhoWeAre() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 60 })
  }, [])

  const scrollToMember = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const nav = document.querySelector('header.site-header')
      const navHeight = nav ? nav.offsetHeight + 20 : 90
      const top = element.getBoundingClientRect().top + window.pageYOffset - navHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  // Scroll to a member when navigated here from the footer / a hash
  useEffect(() => {
    const target = location.state?.scrollTo || (location.hash ? location.hash.replace('#', '') : null)
    if (target) {
      setTimeout(() => scrollToMember(target), 120)
    }
  }, [location])

  return (
    <div className="abge our-team-page">
      {/* ============ PAGE HERO ============ */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link><span>/</span>Our Team</div>
          <span className="ph-tag">Leadership</span>
          <h1 className="h1" style={{ maxWidth: '20ch' }}>Led by a Chartered Accountant <span className="serif-em">&amp; Engineers.</span></h1>
          <p className="lead">Precision, accountability and sustainable trade execution. A lean leadership
            model that pairs financial governance with engineering-grade operational discipline.</p>
          <div className="ph-stats">
            <div className="phs"><div className="n">4</div><div className="k">accountable leaders, one per stage</div></div>
            <div className="phs"><div className="n">CA <span className="copper-em">+</span> Engineers</div><div className="k">governance meets execution</div></div>
            <div className="phs"><div className="n">1</div><div className="k">operating rhythm, end to end</div></div>
          </div>
        </div>
      </section>

      {/* ============ LEADERSHIP MODEL ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">How Our Leadership Works Together</span>
            <h2 className="h2">A leadership model built for precision.</h2>
            <p className="lead">Decisions move from governance, to intelligence, to systems, to execution,
              so every call is financially sound and executionally precise.</p>
          </div>
          <div className="pillar-grid">
            {leadershipPillars.map((pillar, i) => (
              <div key={i} className="pillar-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="p-ic">{pillar.icon}</span>
                <div className="p-step">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="h3">{pillar.title}</h3>
                <ul>
                  {pillar.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM OVERVIEW ============ */}
      <section className="section bg-soft">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">The Team</span>
            <h2 className="h2">One owner for every stage.</h2>
            <p className="lead">A lean, accountable team, each member owning a clear part of the trade,
              together covering the full cycle with no gaps and no hand-off confusion.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div
                key={member.id}
                className="team-card"
                role="button"
                tabIndex={0}
                onClick={() => scrollToMember(member.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToMember(member.id) } }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                title={`View full profile of ${member.name}`}
              >
                <div className="team-photo"><img src={member.image} alt={member.name} /></div>
                <div className="team-body">
                  <div className="role-k">{member.role}</div>
                  <h3>{member.name}</h3>
                  <ul className="team-bullets">
                    {member.previewBullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                  <span className="team-link">View profile <span className="arr">→</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DETAILED PROFILES ============ */}
      <section className="section">
        <div className="wrap">
          <div className="sec-head" data-aos="fade-up">
            <span className="eyebrow">Leadership Profiles</span>
            <h2 className="h2">The people behind the discipline.</h2>
          </div>
          <div className="profile-list">
            {teamMembers.map((member) => (
              <div key={member.id} id={member.id} className="profile-card" data-aos="fade-up">
                <div className="profile-head">
                  <div className="profile-photo"><img src={member.image} alt={member.name} /></div>
                  <div className="profile-id">
                    <h3>{member.name}</h3>
                    <span className="profile-role">{member.role}</span>
                  </div>
                </div>
                <div className="profile-grid">
                  <div className="profile-block">
                    <h4>{member.overviewTitle}</h4>
                    <ul>{member.professionalOverview.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                  <div className="profile-block">
                    <h4>Role in the Organisation</h4>
                    <ul>{member.roleInOrg.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                  <div className="profile-block">
                    <h4>{member.philosophyTitle}</h4>
                    <ul>{member.executionPhilosophy.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                  <div className="profile-block">
                    <h4>What He Brings</h4>
                    <ul>{member.whatHeBrings.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="cta-band">
        <div className="wrap">
          <span className="eyebrow on-dark center" data-aos="fade-up">Work With Us</span>
          <h2 className="h2" data-aos="fade-up" data-aos-delay="80" style={{ marginTop: '18px' }}>Deal directly with the people who run the trade.</h2>
          <p data-aos="fade-up" data-aos-delay="160">No layers, no diffusion of responsibility, just accountable people executing your order.</p>
          <div className="cta-actions" data-aos="fade-up" data-aos-delay="240">
            <Link to="/contact" className="btn btn-copper btn-lg">Initiate Trade Discussions <span className="arr">→</span></Link>
            <Link to="/export-process" className="btn btn-ghost-light btn-lg">See our Export Process</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhoWeAre
