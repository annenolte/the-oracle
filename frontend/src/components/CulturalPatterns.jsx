/**
 * SVG cultural pattern components for each mythology.
 * These render real, recognizable cultural motifs as decorative elements.
 */

// ============================================================
// GREEK — Meander / Greek Key pattern border
// The classic rectangular spiral border found on Greek pottery and temples
// ============================================================
export function GreekKeyBorder({ color = '#D4A843', opacity = 0.6, height = 20, className = '' }) {
  return (
    <svg
      viewBox="0 0 480 24"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      <defs>
        <pattern id="greekMeander" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
          {/* Classic Greek key / meander motif */}
          <path
            d="M0,20 L0,4 L12,4 L12,12 L8,12 L8,8 L4,8 L4,20 L20,20 L20,4 L24,4 L24,16 L16,16 L16,8 L20,8 L20,20
               M24,20 L24,4 L36,4 L36,12 L32,12 L32,8 L28,8 L28,20 L44,20 L44,4 L48,4 L48,16 L40,16 L40,8 L44,8 L44,20"
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="480" height="24" fill="url(#greekMeander)" />
    </svg>
  )
}

// Decorative Greek column/pillar motifs for card corners
export function GreekCornerMotif({ color = '#D4A843', size = 40, opacity = 0.35 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      {/* Ionic scroll / volute corner */}
      <path
        d="M4,36 L4,12 C4,8 6,4 12,4 L36,4"
        fill="none" stroke={color} strokeWidth="1.5" opacity={opacity}
      />
      <path
        d="M8,36 L8,14 C8,10 10,8 14,8 L36,8"
        fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.7}
      />
      {/* Small spiral at corner */}
      <circle cx="12" cy="12" r="3" fill="none" stroke={color} strokeWidth="1" opacity={opacity} />
      <circle cx="12" cy="12" r="1.5" fill={color} opacity={opacity * 0.5} />
    </svg>
  )
}

// Greek laurel wreath section (for section headers)
export function GreekLaurel({ color = '#D4A843', width = 120, opacity = 0.5 }) {
  return (
    <svg width={width} height="30" viewBox="0 0 120 30" fill="none">
      {/* Left laurel branch */}
      <path d="M55,25 Q50,20 45,15 Q40,10 42,5" stroke={color} strokeWidth="1" opacity={opacity} />
      <ellipse cx="48" cy="10" rx="5" ry="3" transform="rotate(-30 48 10)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="43" cy="15" rx="5" ry="3" transform="rotate(-40 43 15)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="40" cy="21" rx="5" ry="3" transform="rotate(-50 40 21)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="52" cy="7" rx="4" ry="2.5" transform="rotate(-20 52 7)" fill={color} opacity={opacity * 0.3} />
      {/* Right laurel branch */}
      <path d="M65,25 Q70,20 75,15 Q80,10 78,5" stroke={color} strokeWidth="1" opacity={opacity} />
      <ellipse cx="72" cy="10" rx="5" ry="3" transform="rotate(30 72 10)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="77" cy="15" rx="5" ry="3" transform="rotate(40 77 15)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="80" cy="21" rx="5" ry="3" transform="rotate(50 80 21)" fill={color} opacity={opacity * 0.4} />
      <ellipse cx="68" cy="7" rx="4" ry="2.5" transform="rotate(20 68 7)" fill={color} opacity={opacity * 0.3} />
    </svg>
  )
}


// ============================================================
// NORSE — Knotwork / interlacing patterns + rune borders
// Viking-age interlacing knotwork and elder futhark rune decorations
// ============================================================
export function NorseKnotBorder({ color = '#5BA4CF', opacity = 0.6, height = 20, className = '' }) {
  return (
    <svg
      viewBox="0 0 480 24"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      <defs>
        <pattern id="norseKnot" x="0" y="0" width="48" height="24" patternUnits="userSpaceOnUse">
          {/* Interlacing knotwork — two strands weaving over/under */}
          <path
            d="M0,6 C6,6 6,18 12,18 C18,18 18,6 24,6 C30,6 30,18 36,18 C42,18 42,6 48,6"
            fill="none" stroke={color} strokeWidth="2" opacity={opacity}
          />
          <path
            d="M0,18 C6,18 6,6 12,6 C18,6 18,18 24,18 C30,18 30,6 36,6 C42,6 42,18 48,18"
            fill="none" stroke={color} strokeWidth="2" opacity={opacity * 0.6}
          />
          {/* Knot intersection dots */}
          <circle cx="6" cy="12" r="1.5" fill={color} opacity={opacity * 0.4} />
          <circle cx="18" cy="12" r="1.5" fill={color} opacity={opacity * 0.4} />
          <circle cx="30" cy="12" r="1.5" fill={color} opacity={opacity * 0.4} />
          <circle cx="42" cy="12" r="1.5" fill={color} opacity={opacity * 0.4} />
        </pattern>
      </defs>
      <rect width="480" height="24" fill="url(#norseKnot)" />
    </svg>
  )
}

// Norse rune symbols for decorative use
export function NorseRunes({ color = '#7B68EE', size = 120, opacity = 0.3 }) {
  return (
    <svg width={size} height={size * 0.35} viewBox="0 0 120 42" fill="none">
      {/* Ansuz ᚨ (Odin's rune — wisdom) */}
      <path d="M10,38 L10,4 M10,12 L18,8 M10,20 L18,16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
      {/* Algiz ᛉ (protection) */}
      <path d="M32,38 L32,4 M32,14 L24,6 M32,14 L40,6" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
      {/* Raido ᚱ (journey) */}
      <path d="M54,38 L54,4 M54,4 L62,12 L54,20" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
      {/* Kenaz ᚲ (torch/knowledge) */}
      <path d="M76,4 L84,20 L76,38" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
      {/* Tiwaz ᛏ (warrior) */}
      <path d="M100,38 L100,4 M92,4 L100,12 L108,4" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
    </svg>
  )
}

// Norse Valknut (Odin's symbol — three interlocking triangles)
export function NorseValknut({ color = '#5BA4CF', size = 40, opacity = 0.3 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path d="M20,4 L10,22 L30,22 Z" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity} />
      <path d="M14,10 L8,28 L26,28 Z" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity * 0.8} />
      <path d="M26,10 L14,28 L32,28 Z" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity * 0.6} />
    </svg>
  )
}


// ============================================================
// EGYPTIAN — Hieroglyphic-style borders and motifs
// Lotus borders, Eye of Horus, ankh patterns, pyramid shapes
// ============================================================
export function EgyptianLotusNileBorder({ color = '#1ABC9C', goldColor = '#D4A843', opacity = 0.6, height = 28, className = '' }) {
  return (
    <svg
      viewBox="0 0 480 32"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      <defs>
        <pattern id="egyptLotus" x="0" y="0" width="60" height="32" patternUnits="userSpaceOnUse">
          {/* Lotus flower — the sacred Egyptian symbol */}
          <path d="M30,28 L30,16" stroke={color} strokeWidth="1" opacity={opacity} />
          {/* Center petal */}
          <path d="M30,16 C30,8 28,4 30,2 C32,4 30,8 30,16" fill={color} opacity={opacity * 0.5} />
          {/* Left petals */}
          <path d="M30,16 C26,12 22,10 20,6 C24,8 28,12 30,16" fill={color} opacity={opacity * 0.4} />
          <path d="M30,18 C24,16 18,16 14,12 C18,14 24,16 30,18" fill={color} opacity={opacity * 0.3} />
          {/* Right petals */}
          <path d="M30,16 C34,12 38,10 40,6 C36,8 32,12 30,16" fill={color} opacity={opacity * 0.4} />
          <path d="M30,18 C36,16 42,16 46,12 C42,14 36,16 30,18" fill={color} opacity={opacity * 0.3} />
          {/* Small dots (seeds) */}
          <circle cx="30" cy="8" r="1" fill={goldColor} opacity={opacity * 0.5} />
          {/* Nile wave base line */}
          <path d="M0,30 Q7,26 15,30 Q22,34 30,30 Q37,26 45,30 Q52,34 60,30" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.3} />
        </pattern>
      </defs>
      <rect width="480" height="32" fill="url(#egyptLotus)" />
    </svg>
  )
}

// Egyptian hieroglyph symbols row
export function EgyptianHieroglyphs({ color = '#1ABC9C', goldColor = '#D4A843', size = 160, opacity = 0.3 }) {
  return (
    <svg width={size} height={size * 0.25} viewBox="0 0 160 40" fill="none">
      {/* Eye of Horus */}
      <path d="M10,20 Q20,12 30,20 Q20,28 10,20 Z" stroke={color} strokeWidth="1.5" opacity={opacity} />
      <circle cx="20" cy="20" r="3" fill={color} opacity={opacity * 0.5} />
      <path d="M18,26 L14,36 L18,32" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
      {/* Ankh */}
      <ellipse cx="52" cy="12" rx="6" ry="8" fill="none" stroke={goldColor} strokeWidth="1.5" opacity={opacity} />
      <path d="M52,20 L52,36 M46,26 L58,26" stroke={goldColor} strokeWidth="1.5" strokeLinecap="round" opacity={opacity} />
      {/* Scarab beetle (simplified) */}
      <ellipse cx="84" cy="22" rx="8" ry="6" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity} />
      <ellipse cx="84" cy="22" rx="4" ry="3" fill={color} opacity={opacity * 0.3} />
      <path d="M76,18 L72,12 M92,18 L96,12" stroke={color} strokeWidth="1" opacity={opacity * 0.5} />
      <path d="M76,26 Q80,32 84,30 Q88,32 92,26" stroke={color} strokeWidth="1" opacity={opacity * 0.4} />
      {/* Djed pillar (stability symbol) */}
      <path d="M116,36 L116,8 M110,12 L122,12 M110,18 L122,18 M110,24 L122,24 M112,8 L120,8 L120,4 L112,4 Z" stroke={goldColor} strokeWidth="1.2" opacity={opacity} />
      {/* Was scepter (power) */}
      <path d="M144,36 L144,10 M140,10 L148,10 M142,10 Q144,4 146,10" stroke={color} strokeWidth="1.2" opacity={opacity} />
      <path d="M141,36 L147,36" stroke={color} strokeWidth="1.5" opacity={opacity * 0.5} />
    </svg>
  )
}

// Pyramid pattern for backgrounds
export function EgyptianPyramidCorner({ color = '#D4A843', size = 50, opacity = 0.2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none">
      <path d="M25,5 L5,45 L45,45 Z" fill="none" stroke={color} strokeWidth="1.5" opacity={opacity} />
      <path d="M25,15 L12,45 L38,45 Z" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.6} />
      {/* Sun disc above */}
      <circle cx="25" cy="5" r="4" fill="none" stroke={color} strokeWidth="1" opacity={opacity * 0.8} />
      <circle cx="25" cy="5" r="2" fill={color} opacity={opacity * 0.5} />
    </svg>
  )
}


// ============================================================
// EAST ASIAN — Cloud scrolls, wave patterns, lotus motifs
// Traditional Chinese/Japanese decorative patterns
// ============================================================
export function EastAsianCloudBorder({ color = '#E74C3C', secondColor = '#F9A8D4', opacity = 0.6, height = 24, className = '' }) {
  return (
    <svg
      viewBox="0 0 480 28"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      <defs>
        <pattern id="asianClouds" x="0" y="0" width="60" height="28" patternUnits="userSpaceOnUse">
          {/* Stylized ruyi cloud scroll — auspicious cloud motif */}
          <path
            d="M6,20 C6,14 12,10 18,14 C16,8 22,4 28,8 C30,2 38,2 40,8 C46,4 52,8 50,14 C56,10 60,16 54,20"
            fill="none" stroke={color} strokeWidth="1.5" opacity={opacity}
          />
          {/* Inner cloud detail */}
          <path
            d="M18,18 C20,14 24,12 28,14 C30,10 34,10 36,14 C38,12 42,14 40,18"
            fill={secondColor} opacity={opacity * 0.2}
          />
        </pattern>
      </defs>
      <rect width="480" height="28" fill="url(#asianClouds)" />
    </svg>
  )
}

// Great wave / ocean wave pattern (Hokusai-inspired)
export function EastAsianWaveBorder({ color = '#E74C3C', opacity = 0.5, height = 20, className = '' }) {
  return (
    <svg
      viewBox="0 0 480 24"
      preserveAspectRatio="none"
      className={`w-full ${className}`}
      style={{ height }}
    >
      <defs>
        <pattern id="asianWave" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
          {/* Seigaiha — traditional wave pattern */}
          <path d="M0,24 A20,20 0 0,1 20,4 A20,20 0 0,1 40,24" fill="none" stroke={color} strokeWidth="1.2" opacity={opacity} />
          <path d="M0,24 A16,16 0 0,1 20,8 A16,16 0 0,1 40,24" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 0.5} />
          <path d="M-20,24 A20,20 0 0,1 0,4 A20,20 0 0,1 20,24" fill="none" stroke={color} strokeWidth="1.2" opacity={opacity * 0.3} />
        </pattern>
      </defs>
      <rect width="480" height="24" fill="url(#asianWave)" />
    </svg>
  )
}

// East Asian decorative symbols
export function EastAsianSymbols({ color = '#E74C3C', pinkColor = '#F9A8D4', size = 120, opacity = 0.3 }) {
  return (
    <svg width={size} height={size * 0.35} viewBox="0 0 120 42" fill="none">
      {/* Lotus flower */}
      <path d="M20,36 L20,24" stroke={pinkColor} strokeWidth="1" opacity={opacity} />
      <path d="M20,24 C18,16 16,12 20,8 C24,12 22,16 20,24" fill={pinkColor} opacity={opacity * 0.5} />
      <path d="M20,24 C14,18 10,14 12,8 C16,12 18,18 20,24" fill={pinkColor} opacity={opacity * 0.4} />
      <path d="M20,24 C26,18 30,14 28,8 C24,12 22,18 20,24" fill={pinkColor} opacity={opacity * 0.4} />
      {/* Yin-yang */}
      <circle cx="52" cy="21" r="12" fill="none" stroke={color} strokeWidth="1.2" opacity={opacity} />
      <path d="M52,9 A6,6 0 0,1 52,21 A6,6 0 0,0 52,33" fill={color} opacity={opacity * 0.3} />
      <circle cx="52" cy="15" r="2" fill={color} opacity={opacity * 0.2} />
      <circle cx="52" cy="27" r="2" fill="none" stroke={color} strokeWidth="0.8" opacity={opacity * 0.4} />
      {/* Cloud scroll */}
      <path d="M78,28 C78,22 82,18 88,20 C86,14 92,10 98,14 C100,8 108,10 106,16 C112,12 116,18 110,22 C114,26 108,30 104,28"
        fill="none" stroke={color} strokeWidth="1.2" opacity={opacity} />
      <path d="M88,24 C90,20 94,18 98,20 C100,16 104,18 102,22"
        fill={pinkColor} opacity={opacity * 0.2} />
    </svg>
  )
}

// ============================================================
// Pattern background fills (repeating tile patterns for card/section backgrounds)
// These are more visible than the CSS gradient versions
// ============================================================

export function GreekPatternBg({ opacity = 0.06 }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="greekBgPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,20 L10,20 L10,10 L20,10 L20,20 L30,20 L30,30 L40,30" fill="none" stroke="#D4A843" strokeWidth="1" opacity={opacity} />
          <path d="M0,0 L0,10 L10,10 L10,0" fill="none" stroke="#D4A843" strokeWidth="0.8" opacity={opacity * 0.5} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#greekBgPattern)" />
    </svg>
  )
}

export function NorsePatternBg({ opacity = 0.06 }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="norseBgPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Simplified knotwork diamond */}
          <path d="M20,2 L38,20 L20,38 L2,20 Z" fill="none" stroke="#5BA4CF" strokeWidth="1" opacity={opacity} />
          <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="none" stroke="#7B68EE" strokeWidth="0.8" opacity={opacity * 0.7} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#norseBgPattern)" />
    </svg>
  )
}

export function EgyptianPatternBg({ opacity = 0.06 }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="egyptBgPattern" x="0" y="0" width="50" height="44" patternUnits="userSpaceOnUse">
          {/* Repeating pyramid/triangle pattern */}
          <path d="M25,4 L5,40 L45,40 Z" fill="none" stroke="#1ABC9C" strokeWidth="0.8" opacity={opacity} />
          {/* Small ankh in center */}
          <ellipse cx="25" cy="20" rx="3" ry="4" fill="none" stroke="#D4A843" strokeWidth="0.6" opacity={opacity * 0.8} />
          <path d="M25,24 L25,36 M22,28 L28,28" stroke="#D4A843" strokeWidth="0.6" opacity={opacity * 0.8} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#egyptBgPattern)" />
    </svg>
  )
}

export function EastAsianPatternBg({ opacity = 0.06 }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
      <defs>
        <pattern id="asianBgPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          {/* Seigaiha wave circles */}
          <path d="M0,40 A20,20 0 0,1 20,20 A20,20 0 0,1 40,40" fill="none" stroke="#E74C3C" strokeWidth="0.8" opacity={opacity} />
          <path d="M0,40 A16,16 0 0,1 20,24 A16,16 0 0,1 40,40" fill="none" stroke="#F9A8D4" strokeWidth="0.6" opacity={opacity * 0.7} />
          <path d="M-20,40 A20,20 0 0,1 0,20 A20,20 0 0,1 20,40" fill="none" stroke="#E74C3C" strokeWidth="0.6" opacity={opacity * 0.4} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#asianBgPattern)" />
    </svg>
  )
}

// ============================================================
// Helper: get the right pattern components by mythology name
// ============================================================
export const culturalBorders = {
  'Greek': GreekKeyBorder,
  'Norse': NorseKnotBorder,
  'Egyptian': EgyptianLotusNileBorder,
  'East Asian': EastAsianCloudBorder,
}

export const culturalSymbols = {
  'Greek': GreekLaurel,
  'Norse': NorseRunes,
  'Egyptian': EgyptianHieroglyphs,
  'East Asian': EastAsianSymbols,
}

export const culturalPatternBgs = {
  'Greek': GreekPatternBg,
  'Norse': NorsePatternBg,
  'Egyptian': EgyptianPatternBg,
  'East Asian': EastAsianPatternBg,
}
