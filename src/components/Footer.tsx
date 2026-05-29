import React from 'react'
import ContactButton from './ContactButton'

const Footer: React.FC = () => {
  return (
    <footer
      className="px-6 md:px-10 py-20 sm:py-24 md:py-32 flex flex-col items-center gap-16 sm:gap-20 md:gap-24"
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215, 226, 234, 0.1)' }}
    >
      {/* Big CTA heading */}
      <div className="flex flex-col items-center gap-8 text-center">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
        >
          Let's Work Together
        </h2>
        <p
          className="font-light uppercase tracking-wide leading-snug max-w-[400px]"
          style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.8rem, 1.4vw, 1.1rem)' }}
        >
          Ready to build your digital presence? We're one message away.
        </p>
        <ContactButton />
      </div>

      {/* Divider */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(215, 226, 234, 0.1)' }} />

      {/* Bottom bar */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <span
          className="font-black uppercase tracking-tight"
          style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
        >
          Correx Digital
        </span>

        <nav className="flex gap-6 sm:gap-8 md:gap-10">
          {['About', 'Services', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 text-sm md:text-base"
              style={{ color: '#D7E2EA', opacity: 0.6, textDecoration: 'none' }}
            >
              {link}
            </a>
          ))}
        </nav>

        <span
          className="font-light uppercase tracking-wider text-xs sm:text-sm"
          style={{ color: '#D7E2EA', opacity: 0.3 }}
        >
          © {new Date().getFullYear()} Correx Digital
        </span>
      </div>
    </footer>
  )
}

export default Footer