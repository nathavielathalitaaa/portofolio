import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PerjalananBelajar from './components/PerjalananBelajar'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Semester1 from './pages/Semester1'
import Semester2 from './pages/Semester2'

function MainPortfolio() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <PerjalananBelajar />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Fixed decorative background blobs — rendered first, z-index: -1 */}
        <div className="bg-glow bg-glow-1" aria-hidden="true" />
        <div className="bg-glow bg-glow-2" aria-hidden="true" />
        <div className="bg-glow bg-glow-3" aria-hidden="true" />

        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/semester-1" element={<Semester1 />} />
          <Route path="/semester-2" element={<Semester2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
