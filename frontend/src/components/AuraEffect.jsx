import { motion } from 'framer-motion'

// SVG symbol paths for each character
const characterSymbols = {
  athena: {
    color: '#F5C842',
    symbols: [
      // Owl
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8 2 5 5 5 8c0 1.5.5 2.8 1.3 3.9L5 16l2.5-1.5C8.5 15.5 10.2 16 12 16s3.5-.5 4.5-1.5L19 16l-1.3-4.1C18.5 10.8 19 9.5 19 8c0-3-3-6-7-6zm-2.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
      ),
      // Olive branch
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 22l4-4c1-1 2.5-.5 3.5.5S10 20 11 21l-1 1-4-4zM9 13c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L9 13zM14 7c2-2 5-2 7 0s2 5 0 7l-7-7z" />
        </svg>
      ),
      // Shield
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
        </svg>
      ),
    ],
  },
  odysseus: {
    color: '#3B82F6',
    symbols: [
      // Wave
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0v3c-2 2-4 2-6 0s-4-2-6 0-4 2-6 0v-3z" />
        </svg>
      ),
      // Star / compass
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
      ),
      // Ship sail
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 18h18l-3 3H6l-3-3zm2-1L12 3v14H5zm14 0H12V3l7 14z" />
        </svg>
      ),
    ],
  },
  odin: {
    color: '#7B68EE',
    symbols: [
      // Raven
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8c0-3 2-6 6-6 2 0 3 1 4 2l4-1-2 3c1 1 1 3 0 4l2 2-3-1c-1 2-3 3-5 3H8l-2 3-1-3C3 12 4 10 4 8zm5 1a1 1 0 100-2 1 1 0 000 2z" />
        </svg>
      ),
      // Rune
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 2v20M8 2l8 10M8 12l8 10" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      ),
      // Lightning
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
        </svg>
      ),
    ],
  },
  loki: {
    color: '#10B981',
    symbols: [
      // Flame
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 23c-4 0-7-3-7-7 0-3 2-5 4-8l3-4 3 4c2 3 4 5 4 8 0 4-3 7-7 7zm0-4c-1.5 0-3-1-3-3 0-1 .5-2 1.5-3.5L12 11l1.5 1.5c1 1.5 1.5 2.5 1.5 3.5 0 2-1.5 3-3 3z" />
        </svg>
      ),
      // Snake
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 8c0-3 3-5 6-4 2 .5 3 2 5 2 3 0 4-2 5-2v4c-1 0-2 2-5 2-2 0-3-1.5-5-2-2-.5-4 .5-4 2 0 2 2 3 4 3 3 0 5 2 5 5H8c0-2-1-3-3-3-2 0-3 1-3 3H0c0-3 2-5 4-5 1 0 2-.5 2-1.5S5 8 4 8z" />
        </svg>
      ),
      // Dice
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <circle cx="8" cy="8" r="1.5" fill="white" />
          <circle cx="16" cy="8" r="1.5" fill="white" />
          <circle cx="12" cy="12" r="1.5" fill="white" />
          <circle cx="8" cy="16" r="1.5" fill="white" />
          <circle cx="16" cy="16" r="1.5" fill="white" />
        </svg>
      ),
    ],
  },
  thoth: {
    color: '#1ABC9C',
    symbols: [
      // Ibis bird
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 3c-1 0-3 1-5 4L9 3 7 5l4 3c-2 3-3 5-3 7 0 3 2 6 5 6 1 0 2-.5 2-1.5V17c2-1 4-3 4-6 0-1-.5-2-1-3l2-2-2-3zm-5 14a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      ),
      // Scroll
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H7c-1.1 0-2 .9-2 2v1H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-1h1c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 18V8h10v10H6z" />
        </svg>
      ),
      // Ankh
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a5 5 0 00-5 5c0 2 1.2 3.7 3 4.5V13H7v2h3v7h4v-7h3v-2h-3v-1.5c1.8-.8 3-2.5 3-4.5a5 5 0 00-5-5zm0 8a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      ),
    ],
  },
  isis: {
    color: '#00CED1',
    symbols: [
      // Wing
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 12c3-6 8-9 10-9v4c-3 0-6 2-8 5h8V8l6 6-6 6v-4H4c2 3 5 5 8 5v4c-2 0-7-3-10-9z" />
        </svg>
      ),
      // Lotus
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C10 7 8 9 5 10c3 1 5 4 7 8 2-4 4-7 7-8-3-1-5-3-7-7zM2 14c3 0 5 2 7 5-1-3 0-5 1-7-3 0-6 0-8 2zm20 0c-3 0-5 2-7 5 1-3 0-5-1-7 3 0 6 0 8 2z" />
        </svg>
      ),
      // Star
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
        </svg>
      ),
    ],
  },
  sunwukong: {
    color: '#E74C3C',
    symbols: [
      // Cloud
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      ),
      // Peach
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-1 0-2 .5-2 1.5S11 5 12 6c1-1 2-1.5 2-2.5S13 2 12 2zm0 5c-4 0-7 4-7 8s3 7 7 7 7-3 7-7-3-8-7-8z" />
        </svg>
      ),
      // Staff
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 2l1 4h2l1-4H4zm5 6v14h2V8H9zm-3 0c-1 0-2 .5-2 1.5S5 11 6 11s2-.5 2-1.5S7 8 6 8z" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      ),
    ],
  },
  guanyin: {
    color: '#F9A8D4',
    symbols: [
      // Lotus flower
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C10 6 8 8 5 9c3 1 5 4 7 9 2-5 4-8 7-9-3-1-5-3-7-7z" />
          <path d="M12 12c-2 0-4 1-5 3 2-1 4-1 5 1 1-2 3-2 5-1-1-2-3-3-5-3z" opacity="0.7" />
        </svg>
      ),
      // Water drop
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-4 6-7 9-7 13a7 7 0 1014 0c0-4-3-7-7-13z" />
        </svg>
      ),
      // Petal
      (s) => (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-3 3-5 7-5 11 0 3 2 5 5 7 3-2 5-4 5-7 0-4-2-8-5-11z" />
        </svg>
      ),
    ],
  },
}

// Predefined positions around the character (angle-based, placed in a ring)
const symbolPositions = [
  { angle: -40, dist: 1.0 },
  { angle: 30, dist: 0.9 },
  { angle: 150, dist: 0.95 },
  { angle: -120, dist: 0.85 },
  { angle: 80, dist: 1.05 },
  { angle: -160, dist: 0.9 },
]

function AuraEffect({ characterId, isHovered, size = 100 }) {
  const preset = characterSymbols[characterId]
  if (!preset) return null

  const symbolSize = Math.max(14, size * 0.18)
  const radius = size * 0.65

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {symbolPositions.map((pos, i) => {
        const SymbolFn = preset.symbols[i % preset.symbols.length]
        const rad = (pos.angle * Math.PI) / 180
        const x = Math.cos(rad) * radius * pos.dist
        const y = Math.sin(rad) * radius * pos.dist

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ color: preset.color }}
            initial={{ x, y, opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{
              x: [x, x + (i % 2 === 0 ? 6 : -6), x],
              y: [y, y + (i % 2 === 0 ? -8 : 5), y],
              opacity: isHovered ? [0.85, 1, 0.85] : [0.45, 0.6, 0.45],
              scale: isHovered ? [1, 1.15, 1] : [0.7, 0.8, 0.7],
              rotate: [0, i % 2 === 0 ? 10 : -10, 0],
            }}
            transition={{
              duration: 2.5 + (i % 3) * 0.5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          >
            {SymbolFn(symbolSize)}
          </motion.div>
        )
      })}
    </div>
  )
}

export default AuraEffect
