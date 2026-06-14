import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'PeeSmile',
    link: 'https://peesmile.vercel.app',
    col1img1: '/images/peesmile1.png',
    col1img2: '/images/peesmile2.png',
    col2img: '/images/peesmile.png',
  },
  {
    number: '02',
    category: 'Product',
    name: 'Business Flyers',
    link: '',
    col1img1: '/images/fashion-flyer.webp',
    col1img2: '/images/forex-flyer.webp',
    col2img: "/images/ad-flyer.webp",
  },
  {
    number: '03',
    category: 'Client',
    name: 'Leorus Studios',
    link: 'https://lerous-studio.vercel.app',
    col1img1: '/images/leorus2.png',
    col1img2: '/images/leorus1.png',
    col2img: '/images/leorus.png',
  },
   {
    number: '04',
    category: 'Product',
    name: 'Design Flyers',
    link: '',
    col1img1: '/images/burger-flyer.webp',
    col1img2: '/images/movie-poster.webp',
    col2img: '/images/nazompro-flyer.webp',
  },
  {
    number: '05',
    category: 'Client',
    name: 'Personal Website',
    link: 'https://isaiahwoko.vercel.app',
    col1img1: '/images/isaiah1.png',
    col1img2: '/images/isaiah2.png',
    col2img: '/images/isaiah.png',
  },

]

const totalCards = projects.length
const CARD_OFFSET = 12

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  containerProgress: ReturnType<typeof useScroll>['scrollYProgress']
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, containerProgress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.04
  const scale = useTransform(
    containerProgress,
    [index / totalCards, (index + 1) / totalCards],
    [1, targetScale]
  )

  const hasLink = !!project.link

  return (
    <div
      style={{
        position: 'sticky',
        top: index * CARD_OFFSET,
        paddingTop: index * CARD_OFFSET,
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          background: '#0C0C0C',
          width: '100%',
        }}
        className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8 overflow-hidden"
      >
        {/* Top row */}
        <div className="flex items-center justify-between mb-3 sm:mb-6">
          <div className="flex items-end gap-2 sm:gap-4 md:gap-6">
            <span
              className="font-black leading-none hero-heading"
              style={{ fontSize: 'clamp(2rem, 8vw, 140px)', lineHeight: 1 }}
            >
              {project.number}
            </span>
            <div className="flex flex-col mb-1 sm:mb-2">
              <span
                className="font-light uppercase tracking-widest"
                style={{
                  color: '#D7E2EA',
                  opacity: 0.5,
                  fontSize: 'clamp(0.6rem, 1.2vw, 1rem)',
                }}
              >
                {project.category}
              </span>
              <span
                className="font-medium uppercase leading-tight"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.85rem, 2.5vw, 2.2rem)',
                }}
              >
                {project.name}
              </span>
            </div>
          </div>

          {/* View Project button — anchor if link exists, disabled style if not */}
          {hasLink ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 px-4 py-2 sm:px-8 sm:py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm"
              style={{ textDecoration: 'none' }}
            >
              View Project
            </a>
          ) : (
            <span
              className="flex-shrink-0 rounded-full border-2 font-medium uppercase tracking-widest px-4 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm"
              style={{
                border: '2px solid rgba(215,226,234,0.2)',
                color: 'rgba(215,226,234,0.2)',
                cursor: 'not-allowed',
              }}
            >
              View Project
            </span>
          )}
        </div>

        {/* Mobile: 2 stacked images */}
        <div className="flex flex-col gap-2 sm:hidden">
          <div
            className="w-full rounded-[20px] overflow-hidden flex items-center justify-center"
            style={{ background: '#111', height: 'clamp(130px, 32vw, 220px)' }}
          >
            <img
              src={project.col2img}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="w-full rounded-[20px] overflow-hidden flex items-center justify-center"
            style={{ background: '#111', height: 'clamp(110px, 28vw, 190px)' }}
          >
            <img
              src={project.col1img1}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* SM+: 2-column 3-image grid */}
        <div className="hidden sm:flex gap-3">
          <div className="flex flex-col gap-3" style={{ width: '40%' }}>
            <div
              className="w-full rounded-[28px] md:rounded-[40px] overflow-hidden flex items-center justify-center"
              style={{ background: '#111', height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.col1img1}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="w-full rounded-[28px] md:rounded-[40px] overflow-hidden flex items-center justify-center"
              style={{ background: '#111', height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.col1img2}
                alt={project.name}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div
            className="rounded-[28px] md:rounded-[40px] overflow-hidden flex items-center justify-center"
            style={{
              width: '60%',
              background: '#111',
              height: 'calc(clamp(130px, 16vw, 230px) + clamp(160px, 22vw, 340px) + 0.75rem)',
            }}
          >
            <img
              src={project.col2img}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10"
      style={{ background: '#0C0C0C' }}
    >
      {/* Heading */}
      <div className="px-3 sm:px-8 md:px-10 pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        style={{
          height: `calc(${totalCards * 100}vh + ${totalCards * CARD_OFFSET}px)`,
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            containerProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
