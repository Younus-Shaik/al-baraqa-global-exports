import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Vision from './pages/Vision'
import WhoWeAre from './pages/WhoWeAre'
import WhatWeExport from './pages/WhatWeExport'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import OperationalModel from './pages/OperationalModel'
import MarketIntelligence from './pages/MarketIntelligence'
import Contact from './pages/Contact'
import Chilli from './pages/Chilli'
import Coffee from './pages/Coffee'
import Knowledge from './pages/Knowledge'
import Resources from './pages/Resources'
import ExportProcess from './pages/ExportProcess'
import MarketInsights from './pages/MarketInsights'
import About from './pages/About'
import PrivacyPolicy from './pages/Legal/PrivacyPolicy'
import TermsOfService from './pages/Legal/TermsOfService'
import TradeTerms from './pages/Legal/TradeTerms'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chilli" element={<Chilli />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/export-process" element={<ExportProcess />} />
          <Route path="/market-insights" element={<MarketInsights />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/our-team" element={<WhoWeAre />} />
          <Route path="/what-we-export" element={<WhatWeExport />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/operational-model" element={<OperationalModel />} />
          <Route path="/market-intelligence" element={<MarketIntelligence />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/trade-terms" element={<TradeTerms />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
