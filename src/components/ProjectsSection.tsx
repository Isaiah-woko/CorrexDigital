import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'
import ViewProjectButton from './ViewProjectButton'

const projects = [
  {
    number: '01',
    category: 'Client',
    name: 'PeeSmile',
    col1img1: '/images/peesmile1.png',
    col1img2: '/images/peesmile2.png',
    col2img: '/images/peesmile.png',
  },
  {
    number: '02',
    category: 'Product',
    name: 'Business Flyers',
    col1img1: '/images/FASHION_FLYER.png',
    col1img2: '/images/FOREX_FLYER.png',
    col2img: "/images/OMA'S_ANNIVERSARY(1).png",
  },
  {
    number: '03',
    category: 'Client',
    name: 'Leorus Studios',
    col1img1: '/images/leorus2.png',
    col1img2: '/images/leorus1.png',
    col2img: '/images/leorus.png',
  },
  {
    number: '04',
    category: 'Client',
    name: 'Personal Website',
    col1img1: '/images/isaiah1.png',
    col1img2: '/images/isaiah2.png',
    col2img: '/images/isaiah.png',
  },
  {
    number: '05',
    category: 'Product',
    name: 'Design Flyers',
    col1img1: '/images/SALOON_BUISNESS_FLYER.png',
    col1img2: '/images/SPYRE_FLYER.png',
    col2img: '/images/FLOWER_FLYER.png',
  },

]

const totalCards = projects.length

interface ProjectCardProps {
  project: (typeof projects)[0]
  index: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  containerProgress: any
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, containerProgress }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(
    containerProgress,
    [index / totalCards, (index + 1) / totalCards],
    [1, targetScale]
  )

  return (
    <div
      className="flex items-start justify-center"
      style={{
        height: 'max(180vh, 900px)',
        position: 'sticky',
        top: `${64 + index * 80}px`,
      }}
          >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
          background: '#0C0C0C',
          width: '100%',
        }}
        className="rounded-[28px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border-2 border-[#D7E2EA] p-3 sm:p-6 md:p-8"
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
          <div className="flex-shrink-0">
            <ViewProjectButton />
          </div>
        </div>

        {/* ── MOBILE: 2 stacked images ── */}
        <div className="flex flex-col gap-2 sm:hidden">
          <div
            className="w-full rounded-[20px] overflow-hidden flex items-center justify-center"
            style={{ background: '#111', height: 'clamp(180px, 50vw, 280px)' }}
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
            style={{ background: '#111', height: 'clamp(150px, 42vw, 240px)' }}
          >
            <img
              src={project.col1img1}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* ── SM+: 2-column 3-image grid ── */}
        <div className="hidden sm:flex gap-3">
          {/* Col 1 — 40% */}
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

          {/* Col 2 — 60% */}
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
      ref={containerRef}
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-3 sm:px-8 md:px-10"
      style={{
        background: '#0C0C0C',
        paddingTop: 'clamp(60px, 10vw, 128px)',
        paddingBottom: 'clamp(60px, 10vw, 128px)',
      }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(2.5rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div>
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