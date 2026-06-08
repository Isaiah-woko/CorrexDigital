import React from 'react'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
          {['About', 'Services', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
              style={{ color: '#D7E2EA', textDecoration: 'none' }}
            >
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40}>
        <div style={{ overflow: 'hidden' }}>
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[12vw] mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10"
          >
            Correx Digital
          </h1>
        </div>
      </FadeIn>

      {/* Centered Magnet Visual */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="rounded-full flex items-center justify-center w-[200px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]"
            style={{
              border: '1px solid rgba(45, 212, 191, 0.25)',
              boxShadow: '0 0 60px rgba(45, 212, 191, 0.08), inset 0 0 60px rgba(45, 212, 191, 0.04)',
            }}
          >
            <img
              src="/images/Correx_Digital_Logo.png"
              alt="Correx Digital Logo"
              className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[400px] select-none"
              draggable={false}
              style={{
                filter: 'drop-shadow(0 0 40px rgba(45, 212, 191, 0.4))',
              }}
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
            }}
          >
            We help businesses and individuals grow online through branding, web development, design, and digital solutions.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroSection