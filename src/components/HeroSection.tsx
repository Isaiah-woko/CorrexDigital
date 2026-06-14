import React from 'react'
import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'

const HeroSection: React.FC = () => {
  return (
    <section
      className="h-screen flex flex-col relative"
      style={{ overflowX: 'clip', paddingTop: 'calc(clamp(60px, 10vw, 128px) + 20px)' }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20}>
        <nav
          className="fixed inset-x-0 top-0 z-50 flex justify-between px-6 md:px-10 pt-6 md:pt-8 pb-4"
          style={{
            background: 'rgba(12, 12, 12, 0.75)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
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
        <div className="w-full">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none text-center sm:text-center md:text-left md:whitespace-nowrap w-full text-[9vw] sm:text-[11vw] md:text-[12vw] lg:text-[12vw] pt-4 sm:pt-4 md:pt-14 lg:pt-0 md:-mt-6 lg:-mt-18 px-6 md:px-10 relative z-30"
          >
            Correx Digital
          </h1>
        </div>
      </FadeIn>

      {/* Viewport Centering Wrapper */}
      {/* CHANGED HERE: top-0 h-full shifted to top-[24vh] h-[55vh] to sit perfectly between top text and bottom bar */}
      <div className="absolute inset-x-0 top-[24vh] h-[55vh] pointer-events-none flex items-center justify-center sm:items-end md:items-center sm:pb-16 md:pb-0">
        <FadeIn
          delay={0.6}
          y={30}
          className="z-10 pointer-events-auto sm:mb-0"
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div
              className="rounded-full flex items-center justify-center w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px]"
              style={{
                border: '1px solid rgba(45, 212, 191, 0.25)',
                boxShadow: '0 0 60px rgba(45, 212, 191, 0.08), inset 0 0 60px rgba(45, 212, 191, 0.04)',
              }}
            >
              <img
                src="/images/Correx_Digital_Logo.png"
                alt="Correx Digital Logo"
                className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px] select-none"
                draggable={false}
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(45, 212, 191, 0.4))',
                }}
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-end sm:gap-0 pb-7 sm:pb-8 md:pb-12 px-6 md:px-10 mt-auto relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-relaxed text-[0.95rem] sm:text-lg md:text-xl lg:text-base max-w-none sm:max-w-[280px] md:max-w-[420px] lg:max-w-[260px]"
            style={{ color: '#D7E2EA' }}
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
