import React from 'react'
import FadeIn from './FadeIn'
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiVercel, SiFigma, SiCanva, SiDjango } from 'react-icons/si';
import { FaReact } from 'react-icons/fa6';
import { BiLogoTypescript } from 'react-icons/bi';
import { DiPhotoshop, DiIllustrator } from 'react-icons/di';



const devTools = [
  {
    name: 'Django',
    description: 'Python web framework for rapid development and clean, pragmatic design.',
    icon: <SiDjango  size={32} style={{ color: '#092E20' }} />
  },
  {
    name: 'Next.js',
    description: 'React framework for fast, SEO-ready web apps',
    icon: <SiNextdotjs size={32} style={{ color: '#0070F3' }} />,
  },
  {
    name: 'React',
    description: 'UI library powering interactive interfaces',
    icon: <FaReact size={32} style={{ color: '#61DAFB' }} />,
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript for reliable, scalable code',
    icon: <BiLogoTypescript size={32} style={{ color: '#3178C6' }} />,
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS for pixel-perfect design',
    icon: <SiTailwindcss size={32} style={{ color: '#06B6D4' }} />,
  },
  {
    name: 'PostgreSQL',
    description: 'Robust relational database for all data needs',
    icon: <SiPostgresql size={32} style={{ color: '#4169E1' }} />,
  },
  {
    name: 'Vercel',
    description: 'Zero-config deployment with global CDN',
    icon: <SiVercel size={32} style={{ color: '#000000' }} />,
  },
];

const designTools = [
  {
    name: 'Figma',
    description: 'UI/UX design and prototyping',
    icon: <SiFigma size={32} style={{ color: '#F24E1E' }} />,
  },
  {
    name: 'Photoshop',
    description: 'Photo editing and digital compositing',
    icon: <DiPhotoshop size={32} style={{ color: '#31A8FF' }} />,
  },
  {
    name: 'Illustrator',
    description: 'Vector graphics and brand identity design',
    icon: <DiIllustrator size={32} style={{ color: '#FF9A00' }} />,
  },
  {
    name: 'Canva',
    description: 'Quick graphics and social media content',
    icon: <SiCanva size={32} style={{ color: '#00C4CC' }} />,
  },
];




interface ToolCardProps {
  name: string
  description: string
  icon: React.ReactNode
  index: number
  theme: 'dark' | 'light'
}

const ToolCard: React.FC<ToolCardProps> = ({ name, description, icon, index, theme }) => {
  const isDark = theme === 'dark'

  return (
    <FadeIn delay={index * 0.08} y={24}>
      <div
        className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-300 group"
        style={{
          border: isDark
            ? '1px solid rgba(215, 226, 234, 0.08)'
            : '1px solid rgba(12, 12, 12, 0.08)',
          background: isDark
            ? 'rgba(215, 226, 234, 0.03)'
            : 'rgba(12, 12, 12, 0.03)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = isDark
            ? '1px solid rgba(215,226,234,0.2)'
            : '1px solid rgba(12,12,12,0.2)'
          e.currentTarget.style.background = isDark
            ? 'rgba(215,226,234,0.06)'
            : 'rgba(12,12,12,0.06)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = isDark
            ? '1px solid rgba(215, 226, 234, 0.08)'
            : '1px solid rgba(12, 12, 12, 0.08)'
          e.currentTarget.style.background = isDark
            ? 'rgba(215, 226, 234, 0.03)'
            : 'rgba(12, 12, 12, 0.03)'
        }}
      >
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-xl w-14 h-14"
          style={{
            background: isDark ? 'rgba(215,226,234,0.07)' : 'rgba(12,12,12,0.06)',
            color: isDark ? '#D7E2EA' : '#0C0C0C',
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <span
            className="font-medium uppercase tracking-wide"
            style={{
              color: isDark ? '#D7E2EA' : '#0C0C0C',
              fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
            }}
          >
            {name}
          </span>
          <span
            className="font-light leading-snug"
            style={{
              color: isDark ? '#D7E2EA' : '#0C0C0C',
              opacity: 0.45,
              fontSize: 'clamp(0.75rem, 1.2vw, 0.9rem)',
            }}
          >
            {description}
          </span>
        </div>
      </div>
    </FadeIn>
  )
}

const StackSection: React.FC = () => {
  return (
    <>
      {/* Dev Stack */}

      <section
        className="-mt-24 md:-mt-48 lg:mt-16 px-5 sm:px-8 md:px-10 py-12 md:py-16 lg:py-32 relative z-20"
        style={{ background: '#0C0C0C' }}
      >
  <div className="max-w-5xl mx-auto">
    <FadeIn delay={0} y={40}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-20">

        {/* 2. H2 TAG: Eliminates empty top space on mobile/tablet, restores exact lg:mt-12 on desktop */}
        <h2
          className="mt-2 md:mt-0 lg:mt-12 hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Built With
        </h2>

              <p
                className="font-light uppercase tracking-wide max-w-[260px] sm:text-right leading-snug"
                style={{
                  color: '#D7E2EA',
                  opacity: 0.4,
                  fontSize: 'clamp(0.75rem, 1.2vw, 0.95rem)',
                }}
              >
                The tools and technologies behind every project we ship
              </p>
            </div>
          </FadeIn>

          {/* Dev label */}
          <FadeIn delay={0.05} y={16}>
            <p
              className="font-medium uppercase tracking-widest mb-6"
              style={{
                color: '#D7E2EA',
                opacity: 0.3,
                fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
                letterSpacing: '0.2em',
              }}
            >
              — Development
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {devTools.map((tool, i) => (
              <ToolCard key={tool.name} {...tool} index={i} theme="dark" />
            ))}
          </div>

          {/* Design label */}
          <FadeIn delay={0.05} y={16}>
            <p
              className="font-medium uppercase tracking-widest mb-6"
              style={{
                color: '#D7E2EA',
                opacity: 0.3,
                fontSize: 'clamp(0.7rem, 1vw, 0.8rem)',
                letterSpacing: '0.2em',
              }}
            >
              — Design
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {designTools.map((tool, i) => (
              <ToolCard key={tool.name} {...tool} index={i} theme="dark" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default StackSection