import React, { useEffect, useRef, useState } from 'react'

const images = [
  '/images/AD FLYER.png',
  '/images/peesmile.png',
  '/images/Artboard 1.png',
  '/images/BURGER FLYER.png',
  '/images/CHURCH_POSTER.png',
  '/images/CLUB FLYER.png',
  '/images/Correx_Digital_Logo.png',
  '/images/FASHION_FLYER.png',
  '/images/FLOWER_FLYER.png',
  '/images/FOREX_FLYER.png',
  '/images/MALTA_SOCIALMEDIA_FLYER.png',
  '/images/MOVIE_POSTER.png',
  '/images/MY_FLYER.png',
  '/images/NIGHTCLUB_FLYER.png',
  '/images/OMA\'S_ANNIVERSARY(1).png',
  '/images/PARTY_FLYER.png',
  '/images/SALOON_BUISNESS_FLYER.png',
  '/images/SOCIAL_MEDIA_FLYER.png',
  '/images/SPORT POSTER.png',
  '/images/SPOTIFY_PODCAST_FLYER.png',
  '/images/SPYRE_FLYER.png',
  '/images/TRAVEL FLYER.png',
]

const row1 = [...images.slice(0, 11), ...images.slice(0, 11), ...images.slice(0, 11)]
const row2 = [...images.slice(11), ...images.slice(11), ...images.slice(11)]

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(scrollOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Row 1 — moves right */}
      <div className="flex gap-3 mb-3" style={{ willChange: 'transform', transform: `translateX(${offset - 200}px)` }}>
        {row1.map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: '420px', height: '270px' }}
          />
        ))}
      </div>

      {/* Row 2 — moves left */}
      <div className="flex gap-3" style={{ willChange: 'transform', transform: `translateX(${-(offset - 200)}px)` }}>
        {row2.map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            alt=""
            className="rounded-2xl object-cover flex-shrink-0"
            style={{ width: '420px', height: '270px' }}
          />
        ))}
      </div>
    </section>
  )
}

export default MarqueeSection
