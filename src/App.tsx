import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import StackSection from './components/StackSection'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div style={{ overflowX: 'clip', fontFamily: "'Kanit', sans-serif", background: '#0C0C0C' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <StackSection />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
