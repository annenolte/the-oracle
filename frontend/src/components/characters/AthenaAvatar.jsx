import React from 'react';

const AthenaAvatar = ({ size = 120, hover = false }) => {
  const id = 'athena-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        {/* Skin gradient */}
        <radialGradient id={`${id}-skin`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#FDE8D0" />
          <stop offset="100%" stopColor="#E8CEB0" />
        </radialGradient>
        {/* Helmet metallic gradient */}
        <linearGradient id={`${id}-helmet`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="30%" stopColor="#A8A8A8" />
          <stop offset="60%" stopColor="#9CA3AF" />
          <stop offset="100%" stopColor="#6B7280" />
        </linearGradient>
        {/* Shield metallic */}
        <radialGradient id={`${id}-shieldMetal`} cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#C8960A" />
        </radialGradient>
        {/* Plume gradient */}
        <linearGradient id={`${id}-plume`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="50%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
        {/* Eye iris gradient */}
        <radialGradient id={`${id}-iris`} cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#93B8D0" />
          <stop offset="100%" stopColor="#5A7A8C" />
        </radialGradient>
        {/* Dress gradient */}
        <linearGradient id={`${id}-dress`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B0B8C4" />
          <stop offset="100%" stopColor="#7A8290" />
        </linearGradient>
        {/* Blush */}
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5A0A0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F5A0A0" stopOpacity="0" />
        </radialGradient>
        {/* Bronze tip */}
        <linearGradient id={`${id}-bronze`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4A44A" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* Hair gradient */}
        <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#B0A890" />
          <stop offset="100%" stopColor="#8A8070" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes ${id}-shieldGleam {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.85; }
        }
        @keyframes ${id}-blink {
          0%, 42%, 46%, 100% { transform: scaleY(1); }
          44% { transform: scaleY(0.1); }
        }
        .${id}-body {
          animation: ${id}-bob 3s ease-in-out infinite;
        }
        .${id}-gleam {
          animation: ${id}-shieldGleam 2.5s ease-in-out infinite;
        }
        .${id}-hover .${id}-owlEye {
          animation: ${id}-blink 2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      <g className={`${id}-body`}>
        {/* === HAIR flowing from under helmet === */}
        <path d="M62,60 Q55,80 52,105 Q50,115 55,120" fill={`url(#${id}-hair)`} opacity="0.9" />
        <path d="M58,62 Q50,85 48,108 Q47,118 52,122" fill="#9A9280" opacity="0.7" />
        <path d="M138,60 Q145,80 148,105 Q150,115 145,120" fill={`url(#${id}-hair)`} opacity="0.9" />
        <path d="M142,62 Q150,85 152,108 Q153,118 148,122" fill="#9A9280" opacity="0.7" />
        {/* Hair strands with highlights */}
        <path d="M55,70 Q52,90 50,110" fill="none" stroke="#C4BC9F" strokeWidth="2" opacity="0.6" />
        <path d="M145,70 Q148,90 150,110" fill="none" stroke="#C4BC9F" strokeWidth="2" opacity="0.6" />
        <path d="M60,65 Q56,85 54,112" fill="none" stroke="#A8A090" strokeWidth="1.5" opacity="0.5" />

        {/* === HELMET - Corinthian style === */}
        {/* Helmet shadow */}
        <ellipse cx="100" cy="58" rx="40" ry="32" fill="#555" opacity="0.15" />
        {/* Main helmet dome */}
        <ellipse cx="100" cy="52" rx="38" ry="30" fill={`url(#${id}-helmet)`} />
        {/* Helmet brow/visor ridge */}
        <path d="M64,58 Q100,48 136,58" fill="none" stroke="#D4D4D8" strokeWidth="2.5" />
        {/* Cheek guards */}
        <path d="M65,55 Q62,70 66,82 Q70,78 72,65" fill={`url(#${id}-helmet)`} stroke="#6B7280" strokeWidth="0.8" />
        <path d="M135,55 Q138,70 134,82 Q130,78 128,65" fill={`url(#${id}-helmet)`} stroke="#6B7280" strokeWidth="0.8" />
        {/* Nose guard */}
        <path d="M98,55 L98,72 Q100,74 102,72 L102,55" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
        {/* Helmet engraved lines */}
        <path d="M75,38 Q100,30 125,38" fill="none" stroke="#B0B0B8" strokeWidth="0.8" opacity="0.6" />
        <path d="M78,44 Q100,36 122,44" fill="none" stroke="#B0B0B8" strokeWidth="0.6" opacity="0.5" />
        {/* Gold helmet trim */}
        <path d="M65,55 Q100,42 135,55" fill="none" stroke="#F5C842" strokeWidth="3" />

        {/* Helmet crest base */}
        <rect x="94" y="22" width="12" height="16" rx="3" fill="#C0C0C0" stroke="#888" strokeWidth="0.5" />
        {/* Plume feathers - layered */}
        <path d="M96,22 Q88,10 82,2 Q90,5 96,12 Z" fill={`url(#${id}-plume)`} opacity="0.9" />
        <path d="M98,22 Q92,8 88,0 Q94,4 100,14 Z" fill="#F5C842" opacity="0.85" />
        <path d="M100,22 Q96,6 94,0 Q100,6 104,16 Z" fill="#FF8C00" opacity="0.9" />
        <path d="M102,22 Q108,8 112,0 Q106,4 100,14 Z" fill="#F5C842" opacity="0.85" />
        <path d="M104,22 Q112,10 118,2 Q110,5 104,12 Z" fill={`url(#${id}-plume)`} opacity="0.9" />
        {/* Plume feather detail lines */}
        <path d="M90,8 Q92,14 96,20" fill="none" stroke="#CC7000" strokeWidth="0.5" opacity="0.5" />
        <path d="M110,8 Q108,14 104,20" fill="none" stroke="#CC7000" strokeWidth="0.5" opacity="0.5" />

        {/* Helmet highlight/gleam */}
        <ellipse cx="90" cy="40" rx="6" ry="12" fill="white" opacity="0.15" />

        {/* === FACE === */}
        {/* Face shadow */}
        <ellipse cx="100" cy="92" rx="34" ry="34" fill="#C8A880" opacity="0.1" />
        {/* Face */}
        <circle cx="100" cy="90" r="33" fill={`url(#${id}-skin)`} />

        {/* Blush */}
        <ellipse cx="78" cy="97" rx="9" ry="6" fill={`url(#${id}-blush)`} />
        <ellipse cx="122" cy="97" rx="9" ry="6" fill={`url(#${id}-blush)`} />

        {/* Eyebrows - soft arcs */}
        <path d="M74,78 Q82,74 92,77" fill="none" stroke="#7A7060" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M108,77 Q118,74 126,78" fill="none" stroke="#7A7060" strokeWidth="1.8" strokeLinecap="round" />

        {/* === EYES === */}
        <g className={`${id}-owlEye`}>
          {/* Eye whites */}
          <ellipse cx="86" cy="87" rx="8" ry="7" fill="white" />
          <ellipse cx="114" cy="87" rx="8" ry="7" fill="white" />
          {/* Subtle upper lid arc */}
          <path d="M78,82 Q86,78 94,82" fill="none" stroke="#C0A888" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
          <path d="M106,82 Q114,78 122,82" fill="none" stroke="#C0A888" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
          {/* Irises */}
          <circle cx="87" cy="87" r="5" fill={`url(#${id}-iris)`} />
          <circle cx="115" cy="87" r="5" fill={`url(#${id}-iris)`} />
          {/* Pupils */}
          <circle cx="87" cy="87" r="2.5" fill="#2A3A44" />
          <circle cx="115" cy="87" r="2.5" fill="#2A3A44" />
          {/* Eye highlights */}
          <circle cx="89" cy="85" r="2" fill="white" opacity="0.9" />
          <circle cx="117" cy="85" r="2" fill="white" opacity="0.9" />
          <circle cx="86" cy="89" r="1" fill="white" opacity="0.5" />
          <circle cx="114" cy="89" r="1" fill="white" opacity="0.5" />
        </g>

        {/* Tiny nose */}
        <circle cx="100" cy="95" r="1.5" fill="#C8A888" opacity="0.4" />

        {/* Kawaii smile */}
        <path d="M92,102 Q100,107 108,102" fill="none" stroke="#C07070" strokeWidth="1.5" strokeLinecap="round" />

        {/* === BODY / PEPLOS DRESS === */}
        {/* Body shadow */}
        <ellipse cx="100" cy="175" rx="38" ry="8" fill="#555" opacity="0.1" />
        {/* Main dress */}
        <path d="M70,118 Q100,113 130,118 L137,172 Q100,177 63,172 Z" fill={`url(#${id}-dress)`} />
        {/* Draped cloth folds */}
        <path d="M80,120 Q82,140 78,165" fill="none" stroke="#6B7280" strokeWidth="1.2" opacity="0.5" />
        <path d="M90,118 Q88,145 86,170" fill="none" stroke="#6B7280" strokeWidth="1" opacity="0.4" />
        <path d="M110,118 Q112,145 114,170" fill="none" stroke="#6B7280" strokeWidth="1" opacity="0.4" />
        <path d="M120,120 Q118,140 122,165" fill="none" stroke="#6B7280" strokeWidth="1.2" opacity="0.5" />
        {/* Gold trim at neckline */}
        <path d="M70,118 Q100,113 130,118" fill="none" stroke="#F5C842" strokeWidth="3" />
        <path d="M72,121 Q100,116 128,121" fill="none" stroke="#D4A430" strokeWidth="1" opacity="0.5" />
        {/* Gold trim at hem */}
        <path d="M63,170 Q100,175 137,170" fill="none" stroke="#F5C842" strokeWidth="2.5" />
        <path d="M64,167 Q100,172 136,167" fill="none" stroke="#D4A430" strokeWidth="1" opacity="0.4" />
        {/* Shoulder pieces / straps */}
        <path d="M70,118 Q72,110 82,108 L86,118" fill="#9CA3AF" stroke="#F5C842" strokeWidth="1" />
        <path d="M130,118 Q128,110 118,108 L114,118" fill="#9CA3AF" stroke="#F5C842" strokeWidth="1" />

        {/* Belt */}
        <rect x="70" y="132" width="60" height="6" rx="3" fill="#F5C842" />
        <path d="M70,132 L130,132" fill="none" stroke="#D4A430" strokeWidth="0.5" />
        {/* Belt buckle - owl motif */}
        <circle cx="100" cy="135" r="5" fill="#FF8C00" stroke="#D4A430" strokeWidth="1" />
        <circle cx="98" cy="134" r="1" fill="#F5C842" />
        <circle cx="102" cy="134" r="1" fill="#F5C842" />
        <path d="M99,136 L100,137 L101,136" fill="none" stroke="#F5C842" strokeWidth="0.5" />

        {/* === ARMS === */}
        {/* Left arm (shield arm) */}
        <path d="M70,122 Q55,138 48,155" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="10" strokeLinecap="round" />
        {/* Right arm (spear arm) */}
        <path d="M130,122 Q145,138 150,152" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="10" strokeLinecap="round" />

        {/* === SPEAR (right hand) === */}
        <line x1="152" y1="150" x2="162" y2="20" stroke="#8B6D3F" strokeWidth="3" strokeLinecap="round" />
        {/* Wood grain on shaft */}
        <line x1="155" y1="100" x2="156" y2="80" stroke="#7A5C2E" strokeWidth="0.5" opacity="0.4" />
        <line x1="157" y1="70" x2="158" y2="50" stroke="#7A5C2E" strokeWidth="0.5" opacity="0.4" />
        {/* Leaf-shaped bronze tip */}
        <path d="M160,25 L162,12 L164,25 Q162,28 160,25 Z" fill={`url(#${id}-bronze)`} stroke="#8B6914" strokeWidth="0.5" />
        <line x1="162" y1="14" x2="162" y2="24" stroke="#C8A44A" strokeWidth="0.3" opacity="0.5" />

        {/* === SHIELD (left hand) - Aegis with owl emblem === */}
        <g>
          {/* Shield shadow */}
          <ellipse cx="46" cy="162" rx="16" ry="18" fill="#555" opacity="0.15" />
          {/* Shield outer ring */}
          <ellipse cx="46" cy="158" rx="16" ry="18" fill={`url(#${id}-shieldMetal)`} stroke="#C8960A" strokeWidth="1.5" />
          {/* Concentric rings */}
          <ellipse cx="46" cy="158" rx="13" ry="15" fill="none" stroke="#D4A430" strokeWidth="1" opacity="0.6" />
          <ellipse cx="46" cy="158" rx="10" ry="12" fill="#A0A8B4" stroke="#888" strokeWidth="0.8" />
          <ellipse cx="46" cy="158" rx="7" ry="9" fill="#B0B8C4" stroke="#888" strokeWidth="0.5" />

          {/* Owl emblem */}
          {/* Owl body */}
          <ellipse cx="46" cy="160" rx="4" ry="5" fill="#8B7355" />
          {/* Owl head */}
          <circle cx="46" cy="155" r="3.5" fill="#9A8365" />
          {/* Owl ear tufts */}
          <polygon points="43,153 42,150 44,152" fill="#8B7355" />
          <polygon points="49,153 50,150 48,152" fill="#8B7355" />
          {/* Owl eyes */}
          <g className={`${id}-owlEye`}>
            <circle cx="44" cy="155" r="1.8" fill="#FF8C00" />
            <circle cx="48" cy="155" r="1.8" fill="#FF8C00" />
            <circle cx="44" cy="155" r="0.8" fill="#1A1A1A" />
            <circle cx="48" cy="155" r="0.8" fill="#1A1A1A" />
          </g>
          {/* Owl beak */}
          <polygon points="46,157 45,158 47,158" fill="#D4A430" />
          {/* Owl feather lines */}
          <path d="M43,159 Q46,158 49,159" fill="none" stroke="#7A6040" strokeWidth="0.4" />
          <path d="M43,161 Q46,160 49,161" fill="none" stroke="#7A6040" strokeWidth="0.4" />
          {/* Owl wings */}
          <path d="M42,159 Q40,162 42,165" fill="none" stroke="#7A6040" strokeWidth="0.8" />
          <path d="M50,159 Q52,162 50,165" fill="none" stroke="#7A6040" strokeWidth="0.8" />

          {/* Shield gleam */}
          <ellipse cx="39" cy="149" rx="3" ry="6" fill="white" opacity="0.25" className={`${id}-gleam`} />
        </g>

        {/* === GREEK SANDALS === */}
        <ellipse cx="88" cy="179" rx="11" ry="5" fill="#C8A070" />
        <ellipse cx="112" cy="179" rx="11" ry="5" fill="#C8A070" />
        {/* Sandal straps */}
        <path d="M80,178 Q88,174 96,178" fill="none" stroke="#A08050" strokeWidth="1" />
        <path d="M83,179 Q88,176 93,179" fill="none" stroke="#A08050" strokeWidth="0.8" />
        <path d="M104,178 Q112,174 120,178" fill="none" stroke="#A08050" strokeWidth="1" />
        <path d="M107,179 Q112,176 117,179" fill="none" stroke="#A08050" strokeWidth="0.8" />
      </g>
    </svg>
  );
};

export default AthenaAvatar;
