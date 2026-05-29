import React from 'react'
import { Globe, Layers, Zap, Code2 } from 'lucide-react'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import ContactButton from './ContactButton'

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative Icons */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <Globe className="w-[120px] sm:w-[160px] md:w-[210px]" style={{ color: '#D7E2EA', opacity: 0.15 }} />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <Layers className="w-[100px] sm:w-[140px] md:w-[180px]" style={{ color: '#D7E2EA', opacity: 0.2 }} />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <Zap className="w-[120px] sm:w-[160px] md:w-[210px]" style={{ color: '#D7E2EA', opacity: 0.15 }} />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <Code2 className="w-[130px] sm:w-[170px] md:w-[220px]" style={{ color: '#D7E2EA', opacity: 0.25 }} />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About Us
          </h2>
        </FadeIn>

        <AnimatedText
          text="We are a digital agency and technology brand helping individuals, startups, and businesses build a strong online presence. Through professional design, web development, branding, and AI-powered digital solutions, we turn ideas into professional digital experiences that attract customers, build trust, and drive growth."
          className="font-medium text-center leading-relaxed max-w-[560px]"
        />

        <div className="mt-6 sm:mt-10 md:mt-14">
          <ContactButton />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
