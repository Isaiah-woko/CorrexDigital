import React from 'react'

const images = [
  '/images/ad-flyer.webp',
  '/images/bamboo-flyer.webp',
  '/images/burger-flyer.webp',
  '/images/club-flyer.webp',
  '/images/fashion-flyer.webp',
  '/images/flower-flyer.webp',
  '/images/forex-flyer.webp',
  '/images/makeup-flyer.webp',
  '/images/movie-poster.webp',
  '/images/nazompro-flyer.webp',

]


const row1 = [...images.slice(0, 5), ...images.slice(0, 5)]
const row2 = [...images.slice(5), ...images.slice(5)]

const MarqueeSection: React.FC = () => {
  return (
    <section
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* custom infinite keyframe styles directly */}
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-marquee-left {
          animation: scroll-left 40s linear infinite;
        }
        }
      `}</style>

      <div className="marquee-container flex flex-col gap-3">
        {/* Row 1 — moves right automatically */}
        <div className="flex gap-3 w-max animate-marquee-right will-change-transform">
          {row1.map((src, i) => (
            <img
              key={`row1-${i}`}
              src={src}
              loading="lazy"
              alt=""
              className="rounded-2xl object-cover flex-shrink-0"
             style={{ width: '280px', height: '200px' }}
            />
          ))}
        </div>

        {/* Row 2 — moves left automatically */}
        <div className="flex gap-3 w-max animate-marquee-left will-change-transform">
          {row2.map((src, i) => (
            <img
              key={`row2-${i}`}
              src={src}
              loading="lazy"
              alt=""
              className="rounded-2xl object-cover flex-shrink-0"
             style={{ width: '280px', height: '200px' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
