import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const characters = text.split('')

  return (
    <p
      ref={ref}
      className={className}
      style={{
        position: 'relative',
        color: '#D7E2EA',
        fontSize: 'clamp(1rem, 2vw, 1.35rem)',
      }}
    >
      {characters.map((char, i) => {
        const start = i / characters.length
        const end = (i + 1) / characters.length
        return (
          <CharacterSpan
            key={i}
            char={char}
            start={start}
            end={end}
            scrollYProgress={scrollYProgress}
          />
        )
      })}
    </p>
  )
}

interface CharacterSpanProps {
  char: string
  start: number
  end: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  scrollYProgress: any
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({ char, start, end, scrollYProgress }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  )
}

export default AnimatedText
