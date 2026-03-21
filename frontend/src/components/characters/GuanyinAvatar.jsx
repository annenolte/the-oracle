import React from 'react';

const GuanyinAvatar = ({ size = 120, hover = false }) => {
  const id = 'guanyin-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        <radialGradient id={`${id}-skinGrad`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#FFF5EE" />
          <stop offset="100%" stopColor="#F0E0D0" />
        </radialGradient>
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-hairGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A40" />
          <stop offset="40%" stopColor="#1A1A2E" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <linearGradient id={`${id}-goldGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF0B3" />
          <stop offset="30%" stopColor="#FDE68A" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}-robeWhite`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#FFF8F5" />
          <stop offset="100%" stopColor="#F0E8E0" />
        </linearGradient>
        <linearGradient id={`${id}-robePink`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBCFE8" />
          <stop offset="50%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#E880B8" />
        </linearGradient>
        <radialGradient id={`${id}-haloGrad`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.3" />
          <stop offset="70%" stopColor="#FDE68A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-auraGrad`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#F9A8D4" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#F9A8D4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-lotusInner`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#E880B8" />
          <stop offset="50%" stopColor="#F9A8D4" />
          <stop offset="100%" stopColor="#FBCFE8" />
        </linearGradient>
        <linearGradient id={`${id}-lotusOuter`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D06098" />
          <stop offset="40%" stopColor="#E880B8" />
          <stop offset="100%" stopColor="#F9A8D4" />
        </linearGradient>
        <linearGradient id={`${id}-vaseGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#F5F0E8" />
          <stop offset="100%" stopColor="#E0D8D0" />
        </linearGradient>
        <linearGradient id={`${id}-jadeGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#90D8A0" />
          <stop offset="50%" stopColor="#68B880" />
          <stop offset="100%" stopColor="#408860" />
        </linearGradient>
        <linearGradient id={`${id}-willowGrad`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#5A9A5A" />
          <stop offset="50%" stopColor="#82B366" />
          <stop offset="100%" stopColor="#A0CC80" />
        </linearGradient>
        <linearGradient id={`${id}-crownGoldGrad`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CC9900" />
          <stop offset="50%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#FFF0B3" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ${id}-lotusGlow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        @keyframes ${id}-lotusGlow2 {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.85; }
        }
        @keyframes ${id}-lotusGlow3 {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.9; }
        }
        @keyframes ${id}-haloIdle {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.02); }
        }
        @keyframes ${id}-haloBright {
          0%, 100% { opacity: 0.6; transform: scale(1.02); }
          50% { opacity: 0.95; transform: scale(1.08); }
        }
        @keyframes ${id}-auraGlow {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.28; }
        }
        .${id}-body {
          animation: ${id}-float 4s ease-in-out infinite;
        }
        .${id}-lotusPetal {
          animation: ${id}-lotusGlow 3s ease-in-out infinite;
        }
        .${id}-lotusPetal2 {
          animation: ${id}-lotusGlow2 3s ease-in-out infinite 0.5s;
        }
        .${id}-lotusPetal3 {
          animation: ${id}-lotusGlow3 3s ease-in-out infinite 1s;
        }
        .${id}-halo {
          animation: ${id}-haloIdle 3s ease-in-out infinite;
          transform-origin: 100px 52px;
        }
        .${id}-hover .${id}-halo {
          animation: ${id}-haloBright 1.5s ease-in-out infinite;
          transform-origin: 100px 52px;
        }
        .${id}-aura {
          animation: ${id}-auraGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Soft aura behind entire figure */}
      <ellipse className={`${id}-aura`} cx="100" cy="100" rx="85" ry="90" fill={`url(#${id}-auraGrad)`} />

      {/* Halo / mandala behind head */}
      <g className={`${id}-halo`}>
        {/* Outer glow ring */}
        <circle cx="100" cy="52" r="52" fill={`url(#${id}-haloGrad)`} />
        {/* Concentric decorative rings */}
        <circle cx="100" cy="52" r="48" fill="none" stroke="#FDE68A" strokeWidth="0.5" opacity="0.3" />
        <circle cx="100" cy="52" r="44" fill="none" stroke="#FDE68A" strokeWidth="0.8" opacity="0.35" />
        <circle cx="100" cy="52" r="40" fill="none" stroke="#FDE68A" strokeWidth="0.5" opacity="0.25" />
        {/* Petal/lotus pattern in halo */}
        <path d="M100,10 Q104,16 100,22 Q96,16 100,10 Z" fill="#FDE68A" opacity="0.2" />
        <path d="M100,82 Q104,88 100,94 Q96,88 100,82 Z" fill="#FDE68A" opacity="0.2" />
        <path d="M60,52 Q66,56 72,52 Q66,48 60,52 Z" fill="#FDE68A" opacity="0.2" />
        <path d="M128,52 Q134,56 140,52 Q134,48 128,52 Z" fill="#FDE68A" opacity="0.2" />
        <path d="M72,24 Q78,28 76,34 Q70,30 72,24 Z" fill="#FDE68A" opacity="0.15" />
        <path d="M128,24 Q122,28 124,34 Q130,30 128,24 Z" fill="#FDE68A" opacity="0.15" />
        <path d="M72,80 Q78,76 76,70 Q70,74 72,80 Z" fill="#FDE68A" opacity="0.15" />
        <path d="M128,80 Q122,76 124,70 Q130,74 128,80 Z" fill="#FDE68A" opacity="0.15" />
      </g>

      {/* Lotus base - detailed with many petals */}
      <g>
        {/* Green leaf pad underneath */}
        <ellipse cx="100" cy="186" rx="38" ry="8" fill="#5A9A5A" opacity="0.3" />
        <ellipse cx="100" cy="186" rx="32" ry="6" fill="#68B880" opacity="0.25" />

        {/* Outer petals - 8 petals */}
        <ellipse className={`${id}-lotusPetal`} cx="60" cy="178" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.5" transform="rotate(-30,60,178)" />
        <ellipse className={`${id}-lotusPetal2`} cx="72" cy="174" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.55" transform="rotate(-18,72,174)" />
        <ellipse className={`${id}-lotusPetal3`} cx="86" cy="172" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.6" transform="rotate(-8,86,172)" />
        <ellipse className={`${id}-lotusPetal`} cx="100" cy="170" rx="16" ry="10" fill={`url(#${id}-lotusOuter)`} opacity="0.65" />
        <ellipse className={`${id}-lotusPetal2`} cx="114" cy="172" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.6" transform="rotate(8,114,172)" />
        <ellipse className={`${id}-lotusPetal3`} cx="128" cy="174" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.55" transform="rotate(18,128,174)" />
        <ellipse className={`${id}-lotusPetal`} cx="140" cy="178" rx="16" ry="9" fill={`url(#${id}-lotusOuter)`} opacity="0.5" transform="rotate(30,140,178)" />

        {/* Inner petals */}
        <ellipse className={`${id}-lotusPetal2`} cx="78" cy="176" rx="12" ry="7" fill={`url(#${id}-lotusInner)`} opacity="0.7" transform="rotate(-12,78,176)" />
        <ellipse className={`${id}-lotusPetal3`} cx="90" cy="174" rx="12" ry="7" fill={`url(#${id}-lotusInner)`} opacity="0.75" transform="rotate(-5,90,174)" />
        <ellipse className={`${id}-lotusPetal`} cx="100" cy="172" rx="12" ry="8" fill={`url(#${id}-lotusInner)`} opacity="0.8" />
        <ellipse className={`${id}-lotusPetal2`} cx="110" cy="174" rx="12" ry="7" fill={`url(#${id}-lotusInner)`} opacity="0.75" transform="rotate(5,110,174)" />
        <ellipse className={`${id}-lotusPetal3`} cx="122" cy="176" rx="12" ry="7" fill={`url(#${id}-lotusInner)`} opacity="0.7" transform="rotate(12,122,176)" />

        {/* Innermost petals */}
        <ellipse cx="92" cy="175" rx="8" ry="5" fill="#FBCFE8" opacity="0.8" transform="rotate(-3,92,175)" />
        <ellipse cx="100" cy="174" rx="8" ry="5.5" fill="#FBCFE8" opacity="0.85" />
        <ellipse cx="108" cy="175" rx="8" ry="5" fill="#FBCFE8" opacity="0.8" transform="rotate(3,108,175)" />

        {/* Lotus center with stamens */}
        <circle cx="100" cy="176" r="6" fill="#FDE68A" opacity="0.6" />
        <circle cx="98" cy="174" r="1" fill="#DAA520" opacity="0.5" />
        <circle cx="102" cy="174" r="1" fill="#DAA520" opacity="0.5" />
        <circle cx="100" cy="176" r="1" fill="#DAA520" opacity="0.5" />
        <circle cx="97" cy="177" r="0.8" fill="#DAA520" opacity="0.4" />
        <circle cx="103" cy="177" r="0.8" fill="#DAA520" opacity="0.4" />
      </g>

      <g className={`${id}-body`}>
        {/* Long flowing hair */}
        <path d="M68,46 Q66,28 78,20 Q100,13 122,20 Q134,28 132,46" fill={`url(#${id}-hairGrad)`} />
        {/* Hair flowing sides - multiple strand groups */}
        <path d="M66,46 Q60,68 58,95 Q56,115 58,135 Q57,145 60,155" fill="none" stroke={`url(#${id}-hairGrad)`} strokeWidth="11" strokeLinecap="round" />
        <path d="M70,48 Q64,70 62,98 Q60,118 62,138" fill="none" stroke="#1A1A2E" strokeWidth="5" strokeLinecap="round" />
        <path d="M74,50 Q68,72 66,100 Q64,120 66,140" fill="none" stroke="#22224A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M132,46 Q138,68 140,95 Q142,115 140,135 Q141,145 138,155" fill="none" stroke={`url(#${id}-hairGrad)`} strokeWidth="11" strokeLinecap="round" />
        <path d="M128,48 Q134,70 136,98 Q138,118 136,138" fill="none" stroke="#1A1A2E" strokeWidth="5" strokeLinecap="round" />
        <path d="M124,50 Q130,72 132,100 Q134,120 132,140" fill="none" stroke="#22224A" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

        {/* Ornate updo bun */}
        <ellipse cx="100" cy="22" rx="16" ry="10" fill={`url(#${id}-hairGrad)`} />
        <path d="M86,22 Q90,15 100,14 Q110,15 114,22" fill="none" stroke="#2A2A50" strokeWidth="1" opacity="0.3" />
        {/* Bun wrap sections */}
        <path d="M88,18 Q100,14 112,18" fill="none" stroke="#333" strokeWidth="0.8" opacity="0.4" />
        <path d="M86,22 Q100,18 114,22" fill="none" stroke="#333" strokeWidth="0.8" opacity="0.4" />
        <path d="M87,26 Q100,22 113,26" fill="none" stroke="#333" strokeWidth="0.8" opacity="0.4" />

        {/* Crown / diadem */}
        <path d="M80,30 Q100,22 120,30 Q115,24 100,22 Q85,24 80,30 Z" fill={`url(#${id}-crownGoldGrad)`} />
        {/* Crown filigree patterns */}
        <path d="M85,28 Q90,25 95,28" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
        <path d="M105,28 Q110,25 115,28" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.6" />
        {/* Small seated Buddha figure in crown center */}
        <ellipse cx="100" cy="16" rx="4" ry="5" fill={`url(#${id}-crownGoldGrad)`} stroke="#CC9900" strokeWidth="0.5" />
        <circle cx="100" cy="14" r="2" fill={`url(#${id}-crownGoldGrad)`} />
        {/* Crown jewels */}
        <circle cx="90" cy="27" r="2" fill="#F9A8D4" opacity="0.7" />
        <circle cx="100" cy="24" r="2.5" fill="white" opacity="0.8" />
        <circle cx="110" cy="27" r="2" fill="#F9A8D4" opacity="0.7" />
        {/* Flowing ribbons from crown */}
        <path d="M82,30 Q78,35 76,42 Q75,48 78,52" fill="none" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <path d="M118,30 Q122,35 124,42 Q125,48 122,52" fill="none" stroke="#F9A8D4" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

        {/* Ornate gold hairpins */}
        <line x1="88" y1="18" x2="82" y2="12" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="81" cy="11" r="2" fill="#FDE68A" />
        <line x1="112" y1="18" x2="118" y2="12" stroke="#FDE68A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="119" cy="11" r="2" fill="#FDE68A" />
        {/* Small flowers tucked in hair */}
        <g>
          <circle cx="78" cy="35" r="3" fill="#FBCFE8" opacity="0.7" />
          <circle cx="78" cy="35" r="1.5" fill="#FDE68A" opacity="0.5" />
        </g>
        <g>
          <circle cx="122" cy="35" r="3" fill="#FBCFE8" opacity="0.7" />
          <circle cx="122" cy="35" r="1.5" fill="#FDE68A" opacity="0.5" />
        </g>

        {/* Face */}
        <circle cx="100" cy="58" r="27" fill={`url(#${id}-skinGrad)`} />

        {/* Eyebrows - soft arcs */}
        <path d="M83,48 Q90,45 96,48" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M104,48 Q110,45 117,48" fill="none" stroke="#8B7355" strokeWidth="1.5" strokeLinecap="round" />

        {/* === EYES === */}
        {/* Left eye */}
        <ellipse cx="90" cy="55" rx="7" ry="6" fill="white" />
        <path d="M83,50 Q90,47 97,50" fill="none" stroke="#D4A574" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <circle cx="91" cy="55" r="4.5" fill="#8B7355" />
        <circle cx="91" cy="55" r="2.2" fill="#1A1A2E" />
        <circle cx="93" cy="53" r="1.8" fill="white" opacity="0.9" />
        <circle cx="90" cy="57" r="0.8" fill="white" opacity="0.5" />

        {/* Right eye */}
        <ellipse cx="110" cy="55" rx="7" ry="6" fill="white" />
        <path d="M103,50 Q110,47 117,50" fill="none" stroke="#D4A574" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <circle cx="111" cy="55" r="4.5" fill="#8B7355" />
        <circle cx="111" cy="55" r="2.2" fill="#1A1A2E" />
        <circle cx="113" cy="53" r="1.8" fill="white" opacity="0.9" />
        <circle cx="110" cy="57" r="0.8" fill="white" opacity="0.5" />

        {/* Urna / bindi */}
        <circle cx="100" cy="47" r="2.2" fill="#E74C3C" opacity="0.65" />
        <circle cx="100" cy="47" r="1" fill="#FF6B6B" opacity="0.4" />

        {/* Tiny nose */}
        <circle cx="100" cy="62" r="1.5" fill="#D4A574" opacity="0.4" />

        {/* Soft blush */}
        <ellipse cx="84" cy="62" rx="7" ry="4" fill={`url(#${id}-blush)`} />
        <ellipse cx="116" cy="62" rx="7" ry="4" fill={`url(#${id}-blush)`} />

        {/* Kawaii gentle smile */}
        <path d="M94,68 Q100,73 106,68" fill="none" stroke="#C07070" strokeWidth="1.5" strokeLinecap="round" />

        {/* Body / flowing white and pink robes */}
        <path d="M72,82 Q100,78 128,82 L136,170 Q100,174 64,170 Z" fill={`url(#${id}-robeWhite)`} />
        {/* Sheer pink overlay layer */}
        <path d="M72,82 Q100,78 128,82 L130,100 Q100,95 70,100 Z" fill={`url(#${id}-robePink)`} opacity="0.3" />
        {/* Robe fold lines */}
        <path d="M78,95 Q76,120 74,150 Q72,160 70,170" fill="none" stroke="#E8DDD5" strokeWidth="1" opacity="0.5" />
        <path d="M85,92 Q83,120 82,150 Q80,160 78,170" fill="none" stroke="#E8DDD5" strokeWidth="0.8" opacity="0.4" />
        <path d="M122,95 Q124,120 126,150 Q128,160 130,170" fill="none" stroke="#E8DDD5" strokeWidth="1" opacity="0.5" />
        <path d="M115,92 Q117,120 118,150 Q120,160 122,170" fill="none" stroke="#E8DDD5" strokeWidth="0.8" opacity="0.4" />
        {/* Gold trim at edges */}
        <path d="M72,82 Q100,78 128,82" fill="none" stroke="#FDE68A" strokeWidth="1.5" opacity="0.5" />
        <path d="M64,170 Q100,174 136,170" fill="none" stroke="#FDE68A" strokeWidth="1" opacity="0.4" />
        {/* Sash with bow-like drape */}
        <path d="M74,108 Q100,104 126,108" fill="none" stroke={`url(#${id}-robePink)`} strokeWidth="3.5" strokeLinecap="round" />
        <path d="M74,108 Q70,112 68,118 Q66,122 68,124" fill="none" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M126,108 Q130,112 132,118 Q134,122 132,124" fill="none" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Beaded necklace with jade pendant */}
        <path d="M82,82 Q90,78 100,77 Q110,78 118,82" fill="none" stroke="#FDE68A" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.6" />
        {/* Jade pendant */}
        <ellipse cx="100" cy="86" rx="4" ry="5" fill={`url(#${id}-jadeGrad)`} opacity="0.7" />
        <ellipse cx="100" cy="86" rx="2" ry="3" fill="none" stroke="#408860" strokeWidth="0.5" opacity="0.5" />

        {/* Arms - graceful positions */}
        <path d="M72,90 Q55,105 48,118" fill="none" stroke={`url(#${id}-skinGrad)`} strokeWidth="8" strokeLinecap="round" />
        <path d="M128,90 Q145,102 150,115" fill="none" stroke={`url(#${id}-skinGrad)`} strokeWidth="8" strokeLinecap="round" />
        {/* Arm shadow */}
        <path d="M72,92 Q57,107 50,119" fill="none" stroke="#E0D0C0" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
        {/* Sleeves draping */}
        <path d="M70,90 Q58,98 52,108 Q48,114 50,120" fill="none" stroke="#F0E8E0" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        <path d="M130,90 Q142,98 148,108 Q152,114 150,120" fill="none" stroke="#F0E8E0" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

        {/* Left hand holding willow branch */}
        <circle cx="46" cy="120" r="5" fill={`url(#${id}-skinGrad)`} />
        {/* Graceful fingers */}
        <line x1="44" y1="117" x2="42" y2="114" stroke="#FFF5EE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="46" y1="116" x2="45" y2="112" stroke="#FFF5EE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="48" y1="117" x2="48" y2="113" stroke="#FFF5EE" strokeWidth="1.5" strokeLinecap="round" />

        {/* Willow branch */}
        <path d="M46,115 Q50,100 48,82 Q46,70 50,58 Q52,50 50,44" fill="none" stroke={`url(#${id}-willowGrad)`} strokeWidth="1.8" strokeLinecap="round" />
        {/* Willow leaves - delicate */}
        <ellipse cx="49" cy="50" rx="3" ry="6" fill="#82B366" opacity="0.65" transform="rotate(-10,49,50)" />
        <ellipse cx="52" cy="58" rx="2.5" ry="5" fill="#82B366" opacity="0.6" transform="rotate(8,52,58)" />
        <ellipse cx="47" cy="66" rx="3" ry="5.5" fill="#82B366" opacity="0.55" transform="rotate(-12,47,66)" />
        <ellipse cx="50" cy="75" rx="2.5" ry="5" fill="#82B366" opacity="0.5" transform="rotate(5,50,75)" />
        <ellipse cx="48" cy="84" rx="2" ry="4.5" fill="#82B366" opacity="0.5" transform="rotate(-8,48,84)" />
        <ellipse cx="47" cy="92" rx="2.5" ry="4" fill="#82B366" opacity="0.45" transform="rotate(10,47,92)" />

        {/* Right hand holding purification vase */}
        <circle cx="152" cy="117" r="5" fill={`url(#${id}-skinGrad)`} />
        {/* Graceful fingers on vase */}
        <line x1="154" y1="114" x2="156" y2="111" stroke="#FFF5EE" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="152" y1="113" x2="153" y2="109" stroke="#FFF5EE" strokeWidth="1.5" strokeLinecap="round" />

        {/* White vase (purification vessel) */}
        <path d="M145,108 L147,98 Q150,95 155,98 L157,108 Q151,112 145,108 Z" fill={`url(#${id}-vaseGrad)`} stroke="#D0C8C0" strokeWidth="0.5" />
        <ellipse cx="151" cy="96" rx="5" ry="2.5" fill={`url(#${id}-vaseGrad)`} stroke="#D0C8C0" strokeWidth="0.5" />
        {/* Vase neck */}
        <rect x="149" y="93" width="4" height="4" rx="1" fill={`url(#${id}-vaseGrad)`} />
        {/* Water droplet */}
        <path d="M151,90 Q152,87 153,90 Q152,92 151,90 Z" fill="#88CCEE" opacity="0.6" />
        {/* Vase decorative band */}
        <line x1="146" y1="103" x2="156" y2="103" stroke="#FDE68A" strokeWidth="0.8" opacity="0.4" />

        {/* Sleeves flowing fabric detail */}
        <path d="M68,92 Q62,100 58,110" fill="none" stroke="#F9A8D4" strokeWidth="0.8" opacity="0.3" />
        <path d="M132,92 Q138,100 142,110" fill="none" stroke="#F9A8D4" strokeWidth="0.8" opacity="0.3" />
      </g>
    </svg>
  );
};

export default GuanyinAvatar;
