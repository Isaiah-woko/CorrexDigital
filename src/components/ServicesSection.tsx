import React from 'react'
import FadeIn from './FadeIn'
const services = [
  {
    number: '01',
    name: 'Website Design & Development',
    description:
      'We design and build fast, modern websites tailored to your brand. From focused landing pages to full multi-page experiences, every site is built to convert.',
  },
  {
    number: '02',
    name: 'E-Commerce Store Creation',
    description:
      'Complete online store setup with product management, secure checkout, and everything your business needs to start selling and scaling online.',
  },
  {
    number: '03',
    name: 'Branding & Visual Identity',
    description:
      'From logo to full brand system, we create cohesive visual identities that communicate professionalism and leave a lasting impression.',
  },
  {
    number: '04',
    name: 'Graphic Design',
    description:
      'Quality graphic design for businesses and personal brands. Social media assets, marketing materials, digital content, and more.',
  },
  {
    number: '05',
    name: 'Business Digital Transformation',
    description:
      'We help traditional businesses move online. From building a web presence to digitising operations and setting up tools for sustainable growth.',
  },
  {
    number: '06',
    name: 'AI-Powered Tools & Automation',
    description:
      'Custom AI solutions and workflow automations that cut manual effort, improve efficiency, and open up new capabilities for your business.',
  },
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-8 sm:py-12 md:py-14"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-8 sm:mb-12 md:mb-16"
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
