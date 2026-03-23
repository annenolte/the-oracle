import { motion } from 'framer-motion'

const auraPresets = {
  athena: {
    colors: ['#F5C842', '#FF8C00', '#FDE68A'],
    style: 'radial', // golden wisdom rays
  },
  odysseus: {
    colors: ['#3B82F6', '#60A5FA', '#93C5FD'],
    style: 'wave', // ocean waves
  },
  odin: {
    colors: ['#5BA4CF', '#7B68EE', '#A78BFA'],
    style: 'storm', // crackling energy
  },
  loki: {
    colors: ['#10B981', '#34D399', '#F59E0B'],
    style: 'chaotic', // mischievous shifting
  },
  thoth: {
    colors: ['#1ABC9C', '#00CED1', '#FFD700'],
    style: 'radial', // mystical knowledge glow
  },
  isis: {
    colors: ['#00CED1', '#FFD700', '#7DD3FC'],
    style: 'wave', // flowing magic
  },
  sunwukong: {
    colors: ['#E74C3C', '#FF4081', '#F59E0B'],
    style: 'chaotic', // fiery energy
  },
  guanyin: {
    colors: ['#F9A8D4', '#FDE68A', '#C4B5FD'],
    style: 'radial', // serene lotus glow
  },
}

function AuraEffect({ characterId, isHovered, size = 100 }) {
  const preset = auraPresets[characterId] || {
    colors: ['#7C3AED', '#A78BFA', '#C4B5FD'],
    style: 'radial',
  }

  const auraSize = size * 1.6
  const blobSize = size * 0.7

  const baseTransition = {
    duration: preset.style === 'chaotic' ? 2 : preset.style === 'storm' ? 2.5 : 3.5,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Main glow */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.2, 1.05, 1.15] : [0.85, 0.95, 0.85],
          opacity: isHovered ? [0.5, 0.7, 0.55, 0.65] : [0.25, 0.35, 0.25],
        }}
        transition={{ ...baseTransition, duration: baseTransition.duration * 0.8 }}
        className="absolute rounded-full"
        style={{
          width: auraSize,
          height: auraSize,
          background: `radial-gradient(circle, ${preset.colors[0]}60 0%, ${preset.colors[1]}30 50%, transparent 70%)`,
          filter: `blur(${size * 0.15}px)`,
        }}
      />

      {/* Blob 1 - orbiting */}
      <motion.div
        animate={
          preset.style === 'chaotic'
            ? {
                x: [blobSize * 0.3, -blobSize * 0.4, blobSize * 0.2, -blobSize * 0.3],
                y: [-blobSize * 0.2, blobSize * 0.3, -blobSize * 0.4, blobSize * 0.2],
                scale: isHovered ? [1, 1.3, 0.9, 1.2] : [0.8, 1, 0.8],
                opacity: isHovered ? [0.5, 0.7, 0.4, 0.6] : [0.2, 0.3, 0.2],
              }
            : preset.style === 'storm'
            ? {
                x: [blobSize * 0.25, -blobSize * 0.25],
                y: [-blobSize * 0.3, blobSize * 0.15],
                scale: isHovered ? [1, 1.4, 1] : [0.7, 0.9, 0.7],
                opacity: isHovered ? [0.4, 0.7, 0.4] : [0.15, 0.25, 0.15],
              }
            : preset.style === 'wave'
            ? {
                x: [-blobSize * 0.3, blobSize * 0.3, -blobSize * 0.3],
                y: [blobSize * 0.1, -blobSize * 0.1, blobSize * 0.1],
                scale: isHovered ? [1, 1.15, 1] : [0.8, 0.9, 0.8],
                opacity: isHovered ? [0.45, 0.6, 0.45] : [0.2, 0.3, 0.2],
              }
            : {
                x: [blobSize * 0.2, -blobSize * 0.2],
                y: [-blobSize * 0.15, blobSize * 0.15],
                scale: isHovered ? [1, 1.2, 1] : [0.8, 0.9, 0.8],
                opacity: isHovered ? [0.4, 0.55, 0.4] : [0.2, 0.28, 0.2],
              }
        }
        transition={baseTransition}
        className="absolute rounded-full"
        style={{
          width: blobSize,
          height: blobSize,
          background: `radial-gradient(circle, ${preset.colors[0]}80 0%, transparent 70%)`,
          filter: `blur(${size * 0.12}px)`,
        }}
      />

      {/* Blob 2 - counter-orbiting */}
      <motion.div
        animate={
          preset.style === 'chaotic'
            ? {
                x: [-blobSize * 0.35, blobSize * 0.3, -blobSize * 0.2, blobSize * 0.4],
                y: [blobSize * 0.3, -blobSize * 0.35, blobSize * 0.2, -blobSize * 0.25],
                scale: isHovered ? [1.1, 0.8, 1.3, 1] : [0.7, 0.9, 0.7],
                opacity: isHovered ? [0.6, 0.4, 0.7, 0.5] : [0.15, 0.25, 0.15],
              }
            : preset.style === 'storm'
            ? {
                x: [-blobSize * 0.2, blobSize * 0.3],
                y: [blobSize * 0.2, -blobSize * 0.25],
                scale: isHovered ? [1.1, 0.8, 1.1] : [0.7, 0.85, 0.7],
                opacity: isHovered ? [0.5, 0.3, 0.5] : [0.15, 0.2, 0.15],
              }
            : preset.style === 'wave'
            ? {
                x: [blobSize * 0.25, -blobSize * 0.25, blobSize * 0.25],
                y: [-blobSize * 0.15, blobSize * 0.15, -blobSize * 0.15],
                scale: isHovered ? [1.1, 1, 1.1] : [0.8, 0.85, 0.8],
                opacity: isHovered ? [0.4, 0.55, 0.4] : [0.18, 0.25, 0.18],
              }
            : {
                x: [-blobSize * 0.15, blobSize * 0.15],
                y: [blobSize * 0.2, -blobSize * 0.2],
                scale: isHovered ? [1.05, 1.15, 1.05] : [0.75, 0.85, 0.75],
                opacity: isHovered ? [0.35, 0.5, 0.35] : [0.18, 0.25, 0.18],
              }
        }
        transition={{ ...baseTransition, delay: 0.5 }}
        className="absolute rounded-full"
        style={{
          width: blobSize * 0.85,
          height: blobSize * 0.85,
          background: `radial-gradient(circle, ${preset.colors[1]}80 0%, transparent 70%)`,
          filter: `blur(${size * 0.12}px)`,
        }}
      />

      {/* Blob 3 - accent sparkle */}
      <motion.div
        animate={
          preset.style === 'chaotic'
            ? {
                x: [blobSize * 0.15, -blobSize * 0.4, blobSize * 0.35],
                y: [-blobSize * 0.35, blobSize * 0.1, -blobSize * 0.2],
                scale: isHovered ? [0.8, 1.2, 0.7, 1.1] : [0.5, 0.7, 0.5],
                opacity: isHovered ? [0.5, 0.3, 0.6, 0.4] : [0.1, 0.2, 0.1],
              }
            : {
                x: [0, blobSize * 0.1, 0],
                y: [-blobSize * 0.25, blobSize * 0.05, -blobSize * 0.25],
                scale: isHovered ? [0.9, 1.1, 0.9] : [0.6, 0.7, 0.6],
                opacity: isHovered ? [0.3, 0.5, 0.3] : [0.1, 0.18, 0.1],
              }
        }
        transition={{ ...baseTransition, delay: 1, duration: baseTransition.duration * 1.2 }}
        className="absolute rounded-full"
        style={{
          width: blobSize * 0.6,
          height: blobSize * 0.6,
          background: `radial-gradient(circle, ${preset.colors[2]}90 0%, transparent 70%)`,
          filter: `blur(${size * 0.1}px)`,
        }}
      />
    </div>
  )
}

export default AuraEffect
