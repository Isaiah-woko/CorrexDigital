import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ overflowX: 'clip', fontFamily: "'Kanit', sans-serif", background: '#0C0C0C' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App
