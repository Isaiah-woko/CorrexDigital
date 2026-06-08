import React from 'react'
import FadeIn from './FadeIn'

const devTools = [
  {
    name: 'Next.js',
    description: 'React framework for fast, SEO-ready web apps',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H36.V36.6h13.7l40.5 59.7C98.3 88.4 104 76.8 104 64c0-22.1-17.9-40-40-40z" />
        <path d="M81.3 36.6h12.4v54.9h-12.4V36.6z" />
      </svg>
    ),
  },
  {
    name: 'React',
    description: 'UI library powering interactive interfaces',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M64 34.4c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 35.2c-13.9 0-25.4-5.1-25.4-11.4S50.1 46.8 64 46.8s25.4 5.1 25.4 11.4S77.9 69.6 64 69.6zM64 0C46.3 0 32 14.3 32 32c0 10.4 5 19.6 12.7 25.4C37 63.2 32 72.4 32 83.8 32 101.5 46.3 115.8 64 115.8s32-14.3 32-32c0-11.4-5-20.6-12.7-26.4C90.9 51.6 96 42.4 96 32 96 14.3 81.7 0 64 0z"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    description: 'Typed JavaScript for reliable, scalable code',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.4 9.4 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.28 31.28 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1l21.81.06z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS for pixel-perfect design',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.527-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.66C55.128 71.372 47.868 64 32.004 64z"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    description: 'Robust relational database for all data needs',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M93.809 18.527c-3.677-.066-7.167.504-10.211 1.627-1.137.407-2.24.868-3.324 1.348C76.6 9.826 68.367 4 58.742 4 46.484 4 36.563 13.624 36.563 25.5c0 .58.031 1.152.082 1.72C21.152 30.883 10 43.484 10 58.75c0 10.645 5.543 20.02 13.902 25.48-.297 1.476-.457 3-.457 4.563C23.445 101.375 32.473 110 43.5 110c3.96 0 7.66-1.118 10.793-3.051C57.742 111.617 63.98 114 70.75 114c10.008 0 18.758-5.406 23.465-13.46.438.019.879.03 1.324.03C109.445 100.57 120 90.215 120 77.25c0-6.438-2.574-12.274-6.742-16.594.484-1.766.742-3.625.742-5.531 0-10.371-7.375-19.043-17.191-21.598zM64 72a8 8 0 110-16 8 8 0 010 16z"/>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    description: 'Zero-config deployment with global CDN',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M64 8L2 120h124L64 8z"/>
      </svg>
    ),
  },
]

const designTools = [
  {
    name: 'Figma',
    description: 'UI/UX design and prototyping',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0-86H67V21.5C67 9.6 57.4 0 45.5 0S24 9.6 24 21.5 33.6 43 45.5 43zm21.5 0h21.5C100.4 43 110 33.4 110 21.5S100.4 0 88.5 0 67 9.6 67 21.5V43zm21.5 43C100.4 86 110 76.4 110 64.5S100.4 43 88.5 43H67v43h21.5zM67 86v21.5c0 11.9 9.6 21.5 21.5 21.5S110 119.4 110 107.5 100.4 86 88.5 86H67z"/>
      </svg>
    ),
  },
  {
    name: 'Photoshop',
    description: 'Photo editing and digital compositing',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M16 0h96a16 16 0 0116 16v96a16 16 0 01-16 16H16A16 16 0 010 112V16A16 16 0 0116 0zm14.7 96V36.3h22.5c4.2 0 7.8.8 10.8 2.5s5.2 4 6.8 6.9 2.3 6.2 2.3 9.8c0 3.7-.8 7-2.4 9.9s-3.9 5.2-6.9 6.9-6.6 2.5-10.7 2.5H40.4V96H30.7zm9.7-26.5h12.2c3.3 0 5.9-.9 7.6-2.8s2.6-4.4 2.6-7.6c0-3.1-.9-5.6-2.6-7.4s-4.3-2.7-7.6-2.7H40.4v20.5zm47.7 27.3c-3.2 0-6-.6-8.5-1.8s-4.4-2.9-5.8-5.2-2.1-5-2.1-8.2c0-3 .7-5.6 2-7.8s3.2-3.9 5.5-5.1 5-1.8 8-1.8c.8 0 1.6 0 2.4.1s1.5.2 2.2.4V55.7c0-.4.2-.6.6-.6h7.8c.4 0 .6.2.6.6V95c0 .5-.1.8-.4 1s-.6.3-1 .3h-7c-.5 0-.8-.1-1-.4s-.3-.6-.3-1.1v-1.8c-1.1 1.5-2.5 2.6-4.3 3.4s-3.6 1.2-5.7 1.2zm2.1-7.3c1.6 0 3-.4 4.2-1.1s2.1-1.7 2.8-2.9V72.8c-.6-.2-1.3-.4-2-.5s-1.4-.2-2.2-.2c-2.5 0-4.5.7-5.9 2.2s-2.1 3.4-2.1 5.8c0 2.5.6 4.4 1.9 5.7s3.1 2 5.3 2z"/>
      </svg>
    ),
  },
  {
    name: 'Illustrator',
    description: 'Vector graphics and brand identity design',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M16 0h96a16 16 0 0116 16v96a16 16 0 01-16 16H16A16 16 0 010 112V16A16 16 0 0116 0zm28.6 96l3.7-13.2h18.7L70.7 96h10.6L63.2 36h-9.8L35.5 96h9.1zm10.1-21.5l7-24.7 7 24.7H54.7zm37.6 22.3c-1.7 0-3.1-.6-4.2-1.7s-1.7-2.5-1.7-4.2.6-3.1 1.7-4.2 2.5-1.7 4.2-1.7 3.1.6 4.2 1.7 1.7 2.5 1.7 4.2-.6 3.1-1.7 4.2-2.5 1.7-4.2 1.7z"/>
      </svg>
    ),
  },
  {
    name: 'Canva',
    description: 'Quick graphics and social media content',
    icon: (
      <svg viewBox="0 0 128 128" fill="currentColor" className="w-8 h-8">
        <path d="M64 4C30.863 4 4 30.863 4 64s26.863 60 60 60 60-26.863 60-60S97.137 4 64 4zm18.121 82.529c-6.166 4.874-14.438 7.471-23.871 7.471C38.363 94 24 79.637 24 57.75 24 35.863 38.363 20 58.25 20c9.433 0 17.705 2.597 23.871 7.471C88.184 32.207 92 39.605 92 48h-9.5c0-12.979-10.271-21-24.25-21C44.021 27 33 38.021 33 57.75S44.021 88.5 58.25 88.5c13.979 0 24.25-8.021 24.25-21H92c0 8.395-3.816 15.793-9.879 20.029z"/>
      </svg>
    ),
  },
]

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
        className="mt-16 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
        style={{ background: '#0C0C0C' }}
      >
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0} y={40}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-20">
              <h2
                className="mt-12 hero-heading font-black uppercase leading-none tracking-tight"
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