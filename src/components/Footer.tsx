import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaDribbble } from 'react-icons/fa'
import ContactButton from './ContactButton'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Isaiah-woko', Icon: FaGithub },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/correx-digital/', Icon: FaLinkedin },
  // { name: 'Twitter', href: '#', Icon: FaTwitter },
  { name: 'Instagram', href: 'https://www.instagram.com/correxdigital', Icon: FaInstagram },
  { name: 'Pinterest', href: 'https://www.pinterest.com/correxdigital', Icon: FaPinterest },
  { name: 'Dribbble', href: 'https://dribbble.com/correx-digital', Icon: FaDribbble },
]

const Footer: React.FC = () => {
  return (
    <footer
      className="px-5 sm:px-8 md:px-10 py-16 sm:py-24 md:py-32 flex flex-col items-center gap-12 sm:gap-20 md:gap-24"
      style={{ background: '#0C0C0C', borderTop: '1px solid rgba(215, 226, 234, 0.1)' }}
    >
      {/* CTA */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 text-center w-full">
        <h2
          id="contact"
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 10vw, 120px)' }}
        >
          Let's Work Together
        </h2>
        <p
          className="font-light uppercase tracking-wide leading-snug max-w-[340px] sm:max-w-[400px]"
          style={{ color: '#D7E2EA', opacity: 0.5, fontSize: 'clamp(0.75rem, 1.4vw, 1.1rem)',
          scrollMarginTop: '100px'
           }}

        >
          Ready to build your digital presence? We're one message away.
        </p>
        <ContactButton />
      </div>

      {/* Divider */}
      <div className="w-full" style={{ height: '1px', background: 'rgba(215, 226, 234, 0.1)' }} />

      {/* Bottom bar */}
      <div className="w-full flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-start lg:gap-0">

        {/* Brand name */}
        <span
          className="font-black uppercase tracking-tight order-1 lg:order-none"
          style={{ color: '#D7E2EA', fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
        >
          Correx Digital
        </span>

        {/* Nav + socials — center column */}
        <div className="flex flex-col items-center gap-5 order-2 lg:order-none">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-x-6 md:gap-x-8">
            {['About', 'Services', 'Projects',].map((link) => (

              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-100 text-sm md:text-base"
                style={{ color: '#D7E2EA', opacity: 0.6, textDecoration: 'none' }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-5 sm:gap-4 md:gap-5">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="flex items-center justify-center transition-opacity duration-200 hover:opacity-100 rounded-full"
                style={{
                  color: '#D7E2EA',
                  opacity: 0.6,
                  width: '2.2rem',
                  height: '2.2rem',
                  fontSize: '1.2rem',
                  border: '1px solid rgba(215,226,234,0.12)',
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <span
          className="font-light uppercase tracking-wider text-xs sm:text-sm order-3 lg:order-none"
          style={{ color: '#D7E2EA', opacity: 0.3 }}
        >
          © {new Date().getFullYear()} Correx Digital
        </span>
      </div>
    </footer>
  )
}

export default Footer
