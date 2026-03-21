import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { avatarMap } from './characters'
import { culturalBorders } from './CulturalPatterns'

const bioLabels = {
  origin: { label: 'Origin', icon: '📍' },
  religion: { label: 'Tradition', icon: '🏛️' },
  favoriteFood: { label: 'Favorite Food', icon: '🍽️' },
  sacredAnimal: { label: 'Sacred Animal', icon: '🐾' },
  weapon: { label: 'Weapon of Choice', icon: '⚔️' },
  personality: { label: 'Personality', icon: '✨' },
  funFact: { label: 'Fun Fact', icon: '💡' },
  bestAdviceFor: { label: 'Best Advice For', icon: '🎯' },
}

// Approximate coordinates for each character's origin [lat, lng]
const originCoords = {
  athena: [40.08, 22.35],    // Mount Olympus, Greece
  odysseus: [38.37, 20.72],  // Ithaca, Greece
  odin: [60, 10],            // Asgard → Scandinavia
  loki: [62, 15],            // Jötunheimr → Scandinavia
  thoth: [27.78, 30.80],     // Hermopolis, Egypt
  isis: [30.9, 31.2],        // Nile Delta, Egypt
  sunwukong: [34.5, 117],    // Flower Fruit Mountain, China
  guanyin: [30, 122],        // Mount Potalaka, East Asia (Putuo Island)
}

// Convert lat/lng to SVG x,y on a 300x150 map
function latLngToXY(lat, lng) {
  const x = ((lng + 180) / 360) * 300
  const y = ((90 - lat) / 180) * 150
  return [x, y]
}

// Detailed world map with realistic continent outlines
function MiniWorldMap({ characterId, color }) {
  const coords = originCoords[characterId]
  if (!coords) return null
  const [px, py] = latLngToXY(coords[0], coords[1])

  const land = '#C2D9B4'
  const landStroke = '#8CB878'
  const landDark = '#B5CFA6'

  return (
    <svg viewBox="0 0 300 150" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`mapOcean-${characterId}`} cx="50%" cy="45%" r="70%">
          <stop offset="0%" stopColor="#D6EEF8" />
          <stop offset="100%" stopColor="#B8DDF0" />
        </radialGradient>
        <radialGradient id={`pinGlow-${characterId}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ocean */}
      <rect width="300" height="150" fill={`url(#mapOcean-${characterId})`} rx="8" />

      {/* Subtle latitude/longitude grid */}
      {[37.5, 75, 112.5, 150, 187.5, 225, 262.5].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="150" stroke="#C8E2F0" strokeWidth="0.3" />
      ))}
      {[25, 50, 75, 100, 125].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="300" y2={y} stroke="#C8E2F0" strokeWidth="0.3" />
      ))}
      {/* Equator */}
      <line x1="0" y1="75" x2="300" y2="75" stroke="#A8D0E8" strokeWidth="0.6" strokeDasharray="3,2" />
      {/* Tropic of Cancer */}
      <line x1="0" y1="55.8" x2="300" y2="55.8" stroke="#C0DDF0" strokeWidth="0.3" strokeDasharray="2,3" />
      {/* Tropic of Capricorn */}
      <line x1="0" y1="94.2" x2="300" y2="94.2" stroke="#C0DDF0" strokeWidth="0.3" strokeDasharray="2,3" />

      {/* ===== NORTH AMERICA ===== */}
      <path d={`
        M12,17 L18,15 L25,14 L30,16 L35,15 L42,17
        L42,20 L38,22 L35,25 L40,27 L45,29 L46,32
        L44,35 L46,37 L48,40 L47,43 L45,46
        L50,46 L55,48 L60,50 L63,53 L67,55
        L72,56 L75,57 L78,56 L82,54 L84,52
        L88,42 L90,39 L92,37 L95,36 L97,38
        L96,35 L93,32 L90,30 L86,28 L82,26
        L78,24 L75,22 L70,20 L65,18 L58,17
        L52,17 L46,16 L40,15 L35,14 L28,15
        L22,16 L16,17 L12,18 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Alaska */}
      <path d="M8,20 L12,17 L16,18 L18,22 L15,25 L10,26 L6,24 L5,22 Z" fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Central America */}
      <path d="M55,57 L60,56 L63,58 L65,60 L67,62 L65,64 L62,65 L58,63 L55,60 Z" fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Greenland */}
      <path d="M95,12 L102,10 L108,12 L110,16 L108,20 L103,22 L98,20 L95,16 Z" fill={landDark} stroke={landStroke} strokeWidth="0.5" />

      {/* ===== SOUTH AMERICA ===== */}
      <path d={`
        M67,68 L72,66 L76,67 L80,70 L83,73 L85,77
        L86,82 L85,87 L83,92 L80,97 L77,102
        L73,106 L70,110 L68,114 L66,118 L63,120
        L60,118 L58,114 L57,110 L58,105 L60,100
        L61,95 L60,90 L58,85 L57,80 L58,76
        L60,73 L63,70 L67,68 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />

      {/* ===== EUROPE ===== */}
      {/* Iberian Peninsula */}
      <path d="M131,40 L135,38 L139,39 L141,42 L140,45 L137,47 L133,46 L131,43 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* France / Western Europe */}
      <path d="M139,35 L143,33 L147,34 L149,37 L148,40 L144,42 L140,41 L138,38 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* Italy */}
      <path d="M147,38 L149,37 L151,39 L152,42 L151,45 L149,47 L147,45 L147,42 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* British Isles */}
      <path d="M135,30 L138,28 L140,30 L139,33 L136,34 L134,32 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      <ellipse cx="133" cy="30" rx="1.5" ry="2.5" fill={land} stroke={landStroke} strokeWidth="0.3" />
      {/* Scandinavia */}
      <path d="M148,20 L152,18 L156,20 L158,24 L156,28 L153,30 L150,28 L148,24 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* Eastern Europe / Russia west */}
      <path d="M153,22 L160,20 L168,18 L175,17 L180,18 L182,22 L180,26 L175,30 L170,33 L164,35 L158,34 L154,30 L152,26 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* Greece & Balkans */}
      <path d="M152,38 L156,36 L160,38 L158,42 L155,44 L152,42 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />

      {/* ===== AFRICA ===== */}
      <path d={`
        M131,48 L136,47 L140,48 L145,47 L150,48 L156,47
        L160,48 L164,50 L167,53 L170,57 L172,62
        L173,67 L172,72 L170,77 L168,82 L165,87
        L162,92 L158,96 L155,100 L152,103 L148,105
        L145,106 L141,105 L138,102 L136,98
        L135,94 L134,90 L133,85 L132,80 L131,75
        L130,70 L129,65 L128,60 L129,55 L130,52 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Madagascar */}
      <path d="M172,92 L174,90 L175,93 L174,97 L172,98 L171,95 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* ===== MIDDLE EAST ===== */}
      <path d="M160,42 L165,40 L170,42 L175,44 L178,48 L176,52 L172,55 L168,53 L164,50 L162,46 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      {/* Arabian Peninsula */}
      <path d="M168,50 L174,48 L180,50 L183,54 L182,58 L178,62 L174,60 L170,57 L168,53 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />

      {/* ===== ASIA ===== */}
      {/* Central/Northern Asia (Russia) */}
      <path d={`
        M180,18 L190,16 L200,15 L210,14 L220,13
        L230,14 L240,15 L250,17 L258,19 L265,22
        L272,25 L278,28 L282,32 L284,36
        L282,38 L278,36 L272,34 L266,35
        L260,38 L255,36 L250,34 L245,35
        L240,38 L235,36 L230,34 L225,35
        L220,38 L215,36 L210,35 L205,37
        L200,40 L195,38 L190,36 L185,34
        L182,30 L180,25 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />

      {/* Iran / Central Asia */}
      <path d="M178,42 L185,40 L192,42 L196,45 L194,48 L190,50 L185,48 L180,46 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />

      {/* India */}
      <path d={`
        M194,48 L200,46 L206,48 L210,52 L212,56
        L210,60 L207,64 L203,68 L200,72
        L197,68 L194,64 L192,60 L190,56
        L192,52 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Sri Lanka */}
      <ellipse cx="204" cy="73" rx="2" ry="2.5" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* China / East Asia */}
      <path d={`
        M210,34 L218,32 L226,33 L234,35 L240,38
        L246,40 L250,43 L252,46 L250,50
        L246,52 L242,50 L238,48 L234,50
        L230,52 L226,50 L222,48 L218,50
        L214,48 L210,46 L208,42 L210,38 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />

      {/* Southeast Asia peninsula */}
      <path d="M222,52 L228,54 L230,58 L228,62 L225,66 L222,68 L218,66 L216,62 L218,58 L220,55 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />

      {/* Korean Peninsula */}
      <path d="M250,36 L253,34 L255,37 L254,40 L252,42 L250,40 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* Japan */}
      <path d="M258,32 L260,30 L263,32 L264,36 L262,40 L260,42 L258,40 L257,36 Z" fill={land} stroke={landStroke} strokeWidth="0.4" />
      <path d="M256,42 L258,40 L260,42 L259,45 L257,46 L255,44 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* Indonesia / Philippines */}
      <path d="M230,65 L234,64 L237,66 L235,69 L232,70 L229,68 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      <path d="M238,67 L242,66 L245,68 L243,71 L240,72 L237,70 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      <path d="M246,68 L250,67 L253,70 L252,74 L248,75 L245,72 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      <path d="M237,60 L240,58 L242,60 L241,63 L238,64 L236,62 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      <ellipse cx="243" cy="61" rx="1.5" ry="2" fill={land} stroke={landStroke} strokeWidth="0.3" />
      {/* Taiwan */}
      <ellipse cx="252" cy="52" rx="1.2" ry="2" fill={land} stroke={landStroke} strokeWidth="0.3" />
      {/* Borneo */}
      <path d="M232,70 L236,69 L239,72 L237,76 L233,76 L231,73 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* ===== AUSTRALIA ===== */}
      <path d={`
        M240,86 L248,84 L255,85 L260,87 L264,90
        L266,94 L265,98 L262,102 L258,105
        L253,107 L248,108 L243,106 L239,103
        L237,99 L236,95 L237,91 L239,88 Z
      `} fill={land} stroke={landStroke} strokeWidth="0.5" />
      {/* Tasmania */}
      <ellipse cx="260" cy="110" rx="2.5" ry="2" fill={land} stroke={landStroke} strokeWidth="0.3" />
      {/* New Zealand */}
      <path d="M276,102 L278,100 L279,103 L278,107 L276,108 L275,105 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      <path d="M274,108 L276,107 L277,110 L275,112 L273,111 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />
      {/* Papua New Guinea */}
      <path d="M258,78 L264,76 L268,79 L266,82 L261,83 L258,81 Z" fill={land} stroke={landStroke} strokeWidth="0.3" />

      {/* ===== LOCATION MARKER ===== */}
      {/* Large soft glow */}
      <circle cx={px} cy={py} r="20" fill={`url(#pinGlow-${characterId})`} />
      {/* Animated pulse rings */}
      <circle cx={px} cy={py} r="12" fill="none" stroke={color} strokeWidth="0.8" opacity="0.3">
        <animate attributeName="r" values="6;18;6" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx={px} cy={py} r="8" fill="none" stroke={color} strokeWidth="0.6" opacity="0.4">
        <animate attributeName="r" values="4;12;4" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" begin="0.4s" />
      </circle>
      {/* Pin shadow */}
      <ellipse cx={px} cy={py + 6} rx="3" ry="1.2" fill="#000" opacity="0.12" />
      {/* Pin body (teardrop) */}
      <path d={`M${px},${py - 8} C${px + 5},${py - 8} ${px + 5},${py - 2} ${px},${py + 2} C${px - 5},${py - 2} ${px - 5},${py - 8} ${px},${py - 8} Z`} fill={color} stroke="white" strokeWidth="1" />
      {/* Pin inner circle */}
      <circle cx={px} cy={py - 4} r="2.5" fill="white" opacity="0.85" />
      <circle cx={px} cy={py - 4} r="1.2" fill={color} />
    </svg>
  )
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
}

const itemVariant = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
}

function BioBox({ bioKey, value, meta, color, characterId }) {
  const [expanded, setExpanded] = useState(false)
  const isOrigin = bioKey === 'origin'

  return (
    <motion.div
      variants={itemVariant}
      onClick={() => setExpanded(!expanded)}
      className="bg-white/70 backdrop-blur-sm rounded-xl border transition-all duration-200 hover:shadow-md cursor-pointer select-none overflow-hidden"
      style={{
        borderColor: expanded ? `${color}60` : `${color}25`,
        boxShadow: expanded ? `0 4px 16px ${color}15` : 'none',
      }}
      onMouseEnter={(e) => {
        if (!expanded) {
          e.currentTarget.style.borderColor = `${color}50`
        }
      }}
      onMouseLeave={(e) => {
        if (!expanded) {
          e.currentTarget.style.borderColor = `${color}25`
        }
      }}
    >
      {/* Header — always visible */}
      <div className="flex items-center justify-between p-3 pb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-sm">{meta.icon}</span>
          <span
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color }}
          >
            {meta.label}
          </span>
        </div>
        <motion.svg
          width="14" height="14" viewBox="0 0 24 24"
          fill="none" stroke={color} strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3">
              <p className="text-slate-700 text-xs leading-relaxed">{value}</p>

              {/* Show map for origin */}
              {isOrigin && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="mt-2 rounded-lg overflow-hidden border"
                  style={{ borderColor: `${color}30` }}
                >
                  <MiniWorldMap characterId={characterId} color={color} />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function CharacterIntro({ character }) {
  const AvatarComponent = avatarMap[character.id]
  const BorderComponent = culturalBorders[character.mythology]

  if (!character.bio) return null

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-6"
    >
      {/* Character header card */}
      <motion.div
        variants={itemVariant}
        className="bg-white/80 backdrop-blur-xl rounded-2xl overflow-hidden border-2 mb-4 shadow-lg"
        style={{ borderColor: `${character.colors.primary}40` }}
      >
        {/* Cultural border on top */}
        {BorderComponent && (
          <BorderComponent color={character.colors.primary} opacity={0.5} height={14} />
        )}

        <div className="p-5 flex items-center gap-4">
          {AvatarComponent && <AvatarComponent size={80} hover={false} />}
          <div>
            <h3 className="text-xl font-bold text-slate-800">{character.name}</h3>
            <p className="text-slate-500 text-sm italic">{character.tagline}</p>
            <span
              className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1.5"
              style={{ backgroundColor: character.colors.primary, color: '#fff' }}
            >
              {character.mythology} Mythology
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bio info boxes grid — collapsed by default, tap to expand */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {Object.entries(character.bio).map(([key, value]) => {
          const meta = bioLabels[key]
          if (!meta) return null

          return (
            <BioBox
              key={key}
              bioKey={key}
              value={value}
              meta={meta}
              color={character.colors.primary}
              characterId={character.id}
            />
          )
        })}
      </div>

      {/* Hint text */}
      <motion.p
        variants={itemVariant}
        className="text-center text-xs text-slate-400 mt-2 italic"
      >
        Tap any card above to learn more
      </motion.p>

      {/* Divider */}
      <div className="flex items-center gap-3 mt-3 mb-2">
        <div
          className="flex-grow h-px"
          style={{ background: `linear-gradient(to right, ${character.colors.primary}40, transparent)` }}
        />
        <span className="text-xs text-slate-400 italic">Chat begins below</span>
        <div
          className="flex-grow h-px"
          style={{ background: `linear-gradient(to left, ${character.colors.primary}40, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export default CharacterIntro
