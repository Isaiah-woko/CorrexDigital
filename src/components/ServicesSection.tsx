import React from 'react'
import FadeIn from './FadeIn'

const services = [
  {
    number: '01',
    name: 'Website Design & Development',
    description:
      'We design and build fast, modern, and conversion-focused websites tailored to your brand — from simple landing pages to full multi-page sites.',
  },
  {
    number: '02',
    name: 'E-Commerce Store Creation',
    description:
      'End-to-end online store setup with product management, secure checkout, and everything your business needs to sell online.',
  },
  {
    number: '03',
    name: 'Branding & Visual Identity',
    description:
      'From logo design to full brand systems — we craft cohesive visual identities that communicate a clear, memorable, and professional presence.',
  },
  {
    number: '04',
    name: 'Graphic Design',
    description:
      'High-quality graphic design for businesses and personal brands, including social media assets, marketing materials, and digital content.',
  },
  {
    number: '05',
    name: 'Landing Page Design',
    description:
      'High-converting, visually compelling landing pages designed to capture leads, drive sales, and represent your brand with impact.',
  },
  {
    number: '06',
    name: 'Business Digital Transformation',
    description:
      'We help traditional businesses move online — digitising operations, building a web presence, and setting up tools for long-term digital growth.',
  },
  {
    number: '07',
    name: 'AI-Powered Tools & Automation',
    description:
      'Custom AI-powered solutions and automations that streamline your workflows, reduce manual effort, and unlock new business capabilities.',
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
              }}
            >
              <span
                className="font-black leading-none flex-shrink-0"
                style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2 pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
