import React from 'react'

const images = [
  '/images/AD FLYER.png',
  '/images/peesmile.png',
  '/images/Artboard 1.png',
  '/images/BURGER FLYER.png',
  '/images/CHURCH_POSTER.png',
  '/images/CLUB FLYER.png',
  '/images/FASHION_FLYER.png',
  '/images/FLOWER_FLYER.png',
  '/images/FOREX_FLYER.png',
  '/images/MALTA_SOCIALMEDIA_FLYER.png',
  '/images/MOVIE_POSTER.png',
  '/images/MY_FLYER.png',
  '/images/NIGHTCLUB_FLYER.png',
  "/images/OMA'S_ANNIVERSARY(1).png",
  '/images/PARTY_FLYER.png',
  '/images/SALOON_BUISNESS_FLYER.png',
  '/images/SOCIAL_MEDIA_FLYER.png',
  '/images/SPORT POSTER.png',
  '/images/SPOTIFY_PODCAST_FLYER.png',
  '/images/SPYRE_FLYER.png',
  '/images/TRAVEL FLYER.png',
]


const row1 = [...images.slice(0, 11), ...images.slice(0, 11)]
const row2 = [...images.slice(11), ...images.slice(11)]

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
              style={{ width: '420px', height: '270px' }}
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
              style={{ width: '420px', height: '270px' }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MarqueeSection
