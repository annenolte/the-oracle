import { useMemo } from 'react'

const PARTICLE_COLORS = [
  '#F5C842', // gold
  '#D4A843', // dark gold
  '#7B68EE', // purple
  '#9B59B6', // medium purple
  '#1ABC9C', // teal
  '#FF8C00', // orange
  '#FF4081', // rose
  '#E74C3C', // red
  '#5BA4CF', // sky blue
]

const SHAPES = ['circle', 'circle', 'circle', 'star', 'diamond'] // weighted towards circles

function ParticleBackground() {
  const particles = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 2 + Math.random() * 4,
      opacity: 0.15 + Math.random() * 0.4,
      duration: 14 + Math.random() * 22,
      delay: Math.random() * 20,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    }))
  }, [])

  const renderParticle = (p) => {
    if (p.shape === 'star') {
      return (
        <svg
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size * 2.5}px`,
            height: `${p.size * 2.5}px`,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
          viewBox="0 0 20 20"
        >
          <polygon
            points="10,1 12.5,7.5 19,7.5 13.5,12 15.5,19 10,14.5 4.5,19 6.5,12 1,7.5 7.5,7.5"
            fill={p.color}
          />
        </svg>
      )
    }

    if (p.shape === 'diamond') {
      return (
        <svg
          key={p.id}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size * 2}px`,
            height: `${p.size * 2}px`,
            opacity: p.opacity,
            animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
          viewBox="0 0 16 16"
        >
          <polygon points="8,0 16,8 8,16 0,8" fill={p.color} />
        </svg>
      )
    }

    // Default circle
    return (
      <div
        key={p.id}
        className="absolute rounded-full"
        style={{
          left: `${p.left}%`,
          top: `${p.top}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          backgroundColor: p.color,
          opacity: p.opacity,
          animation: `particleFloat ${p.duration}s ease-in-out ${p.delay}s infinite`,
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(renderParticle)}
      <style>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            transform: translateY(-100px) translateX(25px) rotate(180deg);
            opacity: 0.35;
          }
          90% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

export default ParticleBackground
