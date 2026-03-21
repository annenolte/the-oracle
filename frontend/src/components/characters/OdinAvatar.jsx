import React from 'react';

const OdinAvatar = ({ size = 120, hover = false }) => {
  const id = 'odin-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        {/* Skin gradient - elder weathered */}
        <radialGradient id={`${id}-skin`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F0E6D3" />
          <stop offset="100%" stopColor="#D4C8B0" />
        </radialGradient>
        {/* Hat fabric gradient */}
        <linearGradient id={`${id}-hat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6DB4DF" />
          <stop offset="50%" stopColor="#5BA4CF" />
          <stop offset="100%" stopColor="#4080A8" />
        </linearGradient>
        {/* Cloak gradient */}
        <linearGradient id={`${id}-cloak`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6BB4DF" />
          <stop offset="100%" stopColor="#3A7AAA" />
        </linearGradient>
        {/* Fur gradient */}
        <linearGradient id={`${id}-fur`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5C4A30" />
        </linearGradient>
        {/* Silver hair */}
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Beard gradient */}
        <linearGradient id={`${id}-beard`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        {/* Eye iris */}
        <radialGradient id={`${id}-iris`} cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#7BC0F0" />
          <stop offset="100%" stopColor="#2A6090" />
        </radialGradient>
        {/* Eyepatch leather */}
        <linearGradient id={`${id}-patch`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#444" />
          <stop offset="100%" stopColor="#222" />
        </linearGradient>
        {/* Rune glow */}
        <radialGradient id={`${id}-rune`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A088FF" />
          <stop offset="100%" stopColor="#7B68EE" stopOpacity="0" />
        </radialGradient>
        {/* Staff wood */}
        <linearGradient id={`${id}-staff`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9A7A4A" />
          <stop offset="50%" stopColor="#8B6D3F" />
          <stop offset="100%" stopColor="#6B5030" />
        </linearGradient>
        {/* Spear tip */}
        <linearGradient id={`${id}-tip`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#888" />
        </linearGradient>
        {/* Blush - subtle elder */}
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8A090" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C8A090" stopOpacity="0" />
        </radialGradient>
        {/* Raven feather gradient */}
        <linearGradient id={`${id}-feather`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3D5166" />
          <stop offset="100%" stopColor="#1A2530" />
        </linearGradient>
        {/* Metal ring */}
        <linearGradient id={`${id}-ring`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-cloakSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes ${id}-ravenBob1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes ${id}-ravenBob2 {
          0%, 100% { transform: translateY(-4px); }
          50% { transform: translateY(0); }
        }
        @keyframes ${id}-ravenFlap {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(-10deg); }
          75% { transform: translateY(-8px) rotate(10deg); }
        }
        .${id}-body {
          animation: ${id}-cloakSway 4s ease-in-out infinite;
          transform-origin: 100px 180px;
        }
        .${id}-raven1 {
          animation: ${id}-ravenBob1 2.5s ease-in-out infinite;
        }
        .${id}-raven2 {
          animation: ${id}-ravenBob2 2.5s ease-in-out infinite;
        }
        .${id}-hover .${id}-raven1 {
          animation: ${id}-ravenFlap 0.6s ease-in-out infinite;
          transform-origin: 42px 95px;
        }
        .${id}-hover .${id}-raven2 {
          animation: ${id}-ravenFlap 0.6s ease-in-out infinite 0.15s;
          transform-origin: 158px 95px;
        }
      `}</style>

      <g className={`${id}-body`}>
        {/* === LONG SILVER HAIR flowing from under hat === */}
        <path d="M58,65 Q52,90 48,120 Q45,140 50,155" fill={`url(#${id}-silver)`} opacity="0.85" />
        <path d="M55,67 Q48,95 45,125 Q42,145 47,158" fill="#B0B0B0" opacity="0.6" />
        <path d="M142,65 Q148,90 152,120 Q155,140 150,155" fill={`url(#${id}-silver)`} opacity="0.85" />
        <path d="M145,67 Q152,95 155,125 Q158,145 153,158" fill="#B0B0B0" opacity="0.6" />
        {/* Hair strands and braids */}
        <path d="M50,80 Q48,100 46,125" fill="none" stroke="#D8D8D8" strokeWidth="2" opacity="0.5" />
        <path d="M150,80 Q152,100 154,125" fill="none" stroke="#D8D8D8" strokeWidth="2" opacity="0.5" />
        {/* Left braid */}
        <path d="M52,100 Q50,102 52,105 Q54,107 52,110 Q50,112 52,115 Q54,117 52,120 Q50,122 52,125" fill="none" stroke="#C8C8C8" strokeWidth="2.5" />
        {/* Metal ring on braid */}
        <circle cx="52" cy="127" r="2.5" fill={`url(#${id}-ring)`} stroke="#888" strokeWidth="0.5" />
        {/* Right braid */}
        <path d="M148,100 Q150,102 148,105 Q146,107 148,110 Q150,112 148,115 Q146,117 148,120 Q150,122 148,125" fill="none" stroke="#C8C8C8" strokeWidth="2.5" />
        <circle cx="148" cy="127" r="2.5" fill={`url(#${id}-ring)`} stroke="#888" strokeWidth="0.5" />

        {/* === WIDE-BRIMMED HAT === */}
        {/* Hat shadow */}
        <ellipse cx="100" cy="66" rx="50" ry="8" fill="#333" opacity="0.1" />
        {/* Hat brim */}
        <ellipse cx="100" cy="62" rx="48" ry="10" fill={`url(#${id}-hat)`} stroke="#4080A8" strokeWidth="1" />
        {/* Hat brim underside shadow */}
        <ellipse cx="100" cy="64" rx="46" ry="7" fill="#3A7AAA" opacity="0.3" />
        {/* Hat cone */}
        <path d="M60,62 L100,8 L140,62 Z" fill={`url(#${id}-hat)`} />
        {/* Hat fabric fold lines */}
        <path d="M72,55 Q85,30 98,12" fill="none" stroke="#4A94B8" strokeWidth="1" opacity="0.4" />
        <path d="M128,55 Q115,30 102,12" fill="none" stroke="#4A94B8" strokeWidth="1" opacity="0.4" />
        <path d="M80,58 Q90,35 100,15" fill="none" stroke="#6BB4DF" strokeWidth="0.8" opacity="0.25" />
        {/* Hat band */}
        <rect x="60" y="56" width="80" height="7" rx="3" fill="#7B68EE" />
        <rect x="60" y="56" width="80" height="3" rx="2" fill="#8B78FF" opacity="0.3" />
        {/* Rune engraving on brim */}
        <text x="72" y="64" fill="#7B68EE" fontSize="5" opacity="0.6" fontFamily="serif">&#x16A0;</text>
        <text x="82" y="66" fill="#7B68EE" fontSize="4" opacity="0.5" fontFamily="serif">&#x16B1;</text>
        <text x="115" y="66" fill="#7B68EE" fontSize="4" opacity="0.5" fontFamily="serif">&#x16B2;</text>
        <text x="125" y="64" fill="#7B68EE" fontSize="5" opacity="0.6" fontFamily="serif">&#x16A6;</text>
        {/* Rune buckle on hat */}
        <circle cx="100" cy="42" r="6" fill="#7B68EE" stroke="#6A58DD" strokeWidth="1" />
        <path d="M97,39 L100,45 L103,39 M98,42 L102,42" stroke="#C0C0C0" strokeWidth="1" fill="none" />

        {/* === FACE === */}
        {/* Face shadow */}
        <ellipse cx="100" cy="88" rx="31" ry="31" fill="#B0A890" opacity="0.1" />
        {/* Face */}
        <circle cx="100" cy="85" r="30" fill={`url(#${id}-skin)`} />
        {/* Blush - subtle */}
        <ellipse cx="82" cy="90" rx="7" ry="5" fill={`url(#${id}-blush)`} />
        <ellipse cx="118" cy="90" rx="7" ry="5" fill={`url(#${id}-blush)`} />

        {/* Tiny nose */}
        <circle cx="100" cy="88" r="1.5" fill="#C0A888" opacity="0.4" />

        {/* === RIGHT EYE - the seeing eye === */}
        {/* Soft eyebrow */}
        <path d="M103,74 Q112,71 122,75" fill="none" stroke="#8B7355" strokeWidth="1.8" strokeLinecap="round" />
        {/* Eye white */}
        <ellipse cx="112" cy="82" rx="8" ry="7" fill="white" />
        {/* Subtle upper lid arc */}
        <path d="M104,77 Q112,73 120,77" fill="none" stroke="#C0A888" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        {/* Iris */}
        <circle cx="113" cy="82" r="5" fill={`url(#${id}-iris)`} />
        {/* Pupil */}
        <circle cx="113" cy="82" r="2.5" fill="#0A1A30" />
        {/* Eye highlights */}
        <circle cx="115" cy="80" r="2" fill="white" opacity="0.9" />
        <circle cx="112" cy="84" r="1" fill="white" opacity="0.5" />

        {/* === LEFT EYE PATCH (ornate) === */}
        {/* Patch base */}
        <ellipse cx="88" cy="82" rx="10" ry="10" fill={`url(#${id}-patch)`} />
        {/* Norse knotwork on patch */}
        <path d="M83,80 Q86,78 88,80 Q90,82 92,80" fill="none" stroke="#666" strokeWidth="0.8" />
        <path d="M84,83 Q87,81 88,83 Q89,85 92,83" fill="none" stroke="#666" strokeWidth="0.8" />
        <path d="M85,86 Q88,84 91,86" fill="none" stroke="#666" strokeWidth="0.7" />
        <circle cx="88" cy="82" r="2" fill="none" stroke="#555" strokeWidth="0.6" />
        {/* Leather straps */}
        <path d="M78,78 Q70,74 62,68" stroke="#444" strokeWidth="2" fill="none" />
        <path d="M78,78 Q72,76 64,70" stroke="#555" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M98,78 Q108,74 115,72" stroke="#444" strokeWidth="2" fill="none" />

        {/* Kawaii smile in beard gap */}
        <path d="M94,98 Q100,102 106,98" fill="none" stroke="#C07070" strokeWidth="1.5" strokeLinecap="round" />

        {/* === LONG BEARD with braids === */}
        {/* Beard base mass */}
        <path d="M74,92 Q72,120 78,140 Q88,155 100,158 Q112,155 122,140 Q128,120 126,92" fill={`url(#${id}-beard)`} />
        {/* Beard texture lines */}
        <path d="M80,100 Q82,118 80,135" fill="none" stroke="#A8A8A8" strokeWidth="0.8" opacity="0.5" />
        <path d="M90,98 Q88,120 85,140" fill="none" stroke="#A8A8A8" strokeWidth="0.7" opacity="0.4" />
        <path d="M100,100 Q100,125 100,150" fill="none" stroke="#A8A8A8" strokeWidth="0.7" opacity="0.4" />
        <path d="M110,98 Q112,120 115,140" fill="none" stroke="#A8A8A8" strokeWidth="0.7" opacity="0.4" />
        <path d="M120,100 Q118,118 120,135" fill="none" stroke="#A8A8A8" strokeWidth="0.8" opacity="0.5" />
        {/* Beard braids - 3 braids at bottom */}
        {/* Left braid */}
        <path d="M85,140 Q83,142 85,145 Q87,147 85,150 Q83,152 85,155" fill="none" stroke="#B8B8B8" strokeWidth="2.5" />
        <circle cx="85" cy="157" r="2" fill={`url(#${id}-ring)`} stroke="#888" strokeWidth="0.5" />
        {/* Center braid */}
        <path d="M100,148 Q98,150 100,153 Q102,155 100,158 Q98,160 100,163" fill="none" stroke="#B8B8B8" strokeWidth="2.5" />
        <circle cx="100" cy="165" r="2" fill={`url(#${id}-ring)`} stroke="#888" strokeWidth="0.5" />
        {/* Right braid */}
        <path d="M115,140 Q117,142 115,145 Q113,147 115,150 Q117,152 115,155" fill="none" stroke="#B8B8B8" strokeWidth="2.5" />
        <circle cx="115" cy="157" r="2" fill={`url(#${id}-ring)`} stroke="#888" strokeWidth="0.5" />

        {/* === BODY / CLOAK === */}
        {/* Body shadow */}
        <ellipse cx="100" cy="188" rx="42" ry="6" fill="#333" opacity="0.1" />
        {/* Robe underneath */}
        <path d="M62,108 Q100,103 138,108 L146,188 Q100,193 54,188 Z" fill="#3A5570" />
        {/* Cloak over */}
        <path d="M58,110 Q100,105 142,110 L148,185 Q100,190 52,185 Z" fill={`url(#${id}-cloak)`} />
        {/* Fur collar - layered curves */}
        <path d="M58,110 Q68,106 78,108 Q88,104 100,106 Q112,104 122,108 Q132,106 142,110" fill={`url(#${id}-fur)`} />
        {/* Individual fur strands at collar */}
        <path d="M60,112 Q62,108 64,112" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M66,111 Q68,107 70,111" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M72,110 Q74,106 76,110" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M80,109 Q82,105 84,109" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M88,108 Q90,104 92,108" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M96,107 Q98,103 100,107" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M104,108 Q106,104 108,108" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M112,109 Q114,105 116,109" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M120,110 Q122,106 124,110" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M128,111 Q130,107 132,111" fill="none" stroke="#6B5030" strokeWidth="1" />
        <path d="M136,112 Q138,108 140,112" fill="none" stroke="#6B5030" strokeWidth="1" />
        {/* Fur at shoulders */}
        <path d="M55,115 Q58,112 60,115 Q62,112 64,115" fill="none" stroke="#7A6040" strokeWidth="1.5" />
        <path d="M136,115 Q138,112 140,115 Q142,112 144,115" fill="none" stroke="#7A6040" strokeWidth="1.5" />

        {/* Cloak clasp */}
        <circle cx="100" cy="114" r="6" fill="#C0C0C0" stroke="#7B68EE" strokeWidth="2" />
        <path d="M97,112 L100,116 L103,112 M98,114 L102,114" stroke="#7B68EE" strokeWidth="0.8" fill="none" />
        {/* Cloak fold lines */}
        <path d="M72,120 Q74,148 70,180" fill="none" stroke="#3A7AAA" strokeWidth="1.5" opacity="0.4" />
        <path d="M85,118 Q83,150 80,182" fill="none" stroke="#3A7AAA" strokeWidth="1" opacity="0.3" />
        <path d="M115,118 Q117,150 120,182" fill="none" stroke="#3A7AAA" strokeWidth="1" opacity="0.3" />
        <path d="M128,120 Q126,148 130,180" fill="none" stroke="#3A7AAA" strokeWidth="1.5" opacity="0.4" />
        {/* Runic embroidery on cloak edge */}
        <text x="58" y="182" fill="#7B68EE" fontSize="5" opacity="0.5" fontFamily="serif">&#x16A0; &#x16B1; &#x16A6;</text>
        <text x="118" y="182" fill="#7B68EE" fontSize="5" opacity="0.5" fontFamily="serif">&#x16B2; &#x16A0; &#x16B7;</text>
        {/* Belt */}
        <path d="M62,140 Q100,136 138,140" fill="none" stroke="#5C4A30" strokeWidth="3" />
        <rect x="96" y="137" width="8" height="6" rx="1" fill="#C0C0C0" stroke="#888" strokeWidth="0.5" />

        {/* === GUNGNIR (Staff/Spear) === */}
        <line x1="148" y1="98" x2="158" y2="192" stroke={`url(#${id}-staff)`} strokeWidth="4" strokeLinecap="round" />
        {/* Runic engravings on shaft */}
        <text x="150" y="120" fill="#7B68EE" fontSize="4" opacity="0.5" fontFamily="serif" transform="rotate(5,150,120)">&#x16A0;</text>
        <text x="152" y="135" fill="#7B68EE" fontSize="4" opacity="0.4" fontFamily="serif" transform="rotate(5,152,135)">&#x16B1;</text>
        <text x="154" y="150" fill="#7B68EE" fontSize="4" opacity="0.5" fontFamily="serif" transform="rotate(5,154,150)">&#x16A6;</text>
        {/* Leaf-shaped spear tip */}
        <path d="M146,100 L148,82 L150,100 Q148,104 146,100 Z" fill={`url(#${id}-tip)`} stroke="#999" strokeWidth="0.5" />
        <line x1="148" y1="84" x2="148" y2="98" stroke="#D0D0D0" strokeWidth="0.3" opacity="0.5" />
        {/* Rune glow at tip */}
        <circle cx="148" cy="90" r="6" fill={`url(#${id}-rune)`} opacity="0.4" />

        {/* === HEAVY BOOTS with fur trim === */}
        <path d="M75,185 Q85,190 85,192 L92,192 Q95,190 95,185" fill="#3A3A3A" />
        <path d="M105,185 Q105,190 105,192 L118,192 Q120,190 120,185" fill="#3A3A3A" />
        {/* Fur trim on boots */}
        <path d="M75,185 Q78,183 80,185 Q82,183 84,185 Q86,183 88,185 Q90,183 92,185 Q94,183 95,185" fill="none" stroke="#8B7355" strokeWidth="2" />
        <path d="M105,185 Q107,183 109,185 Q111,183 113,185 Q115,183 117,185 Q119,183 120,185" fill="none" stroke="#8B7355" strokeWidth="2" />
      </g>

      {/* === RAVEN 1 (Huginn) - left shoulder, looking left === */}
      <g className={`${id}-raven1`}>
        {/* Shadow */}
        <ellipse cx="42" cy="104" rx="11" ry="5" fill="#333" opacity="0.1" />
        {/* Body */}
        <ellipse cx="42" cy="100" rx="11" ry="8" fill="#2C3E50" />
        {/* Feather texture on body */}
        <path d="M34,98 Q38,96 42,98" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="1" opacity="0.6" />
        <path d="M36,100 Q40,98 44,100" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="0.8" opacity="0.5" />
        <path d="M38,102 Q42,100 46,102" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="0.8" opacity="0.5" />
        {/* Head */}
        <circle cx="34" cy="94" r="6" fill="#2C3E50" />
        {/* Beak */}
        <polygon points="28,93 24,91 28,90" fill="#F5C842" stroke="#C8960A" strokeWidth="0.3" />
        {/* Eye */}
        <circle cx="32" cy="93" r="2" fill="#1A1A2E" />
        <circle cx="32" cy="93" r="1.2" fill="#7B68EE" />
        <circle cx="31.5" cy="92.5" r="0.5" fill="white" />
        {/* Tail feathers */}
        <polygon points="53,98 60,95 60,97" fill="#2C3E50" />
        <polygon points="53,100 60,98 60,100" fill="#3D5166" />
        <polygon points="53,102 60,101 60,103" fill="#2C3E50" />
        {/* Wing */}
        <path d="M36,96 Q32,88 40,90 Q46,86 50,94" fill="#3D5166" />
        <path d="M38,93 Q40,90 44,92" fill="none" stroke="#2C3E50" strokeWidth="0.5" />
        {/* Claws gripping shoulder */}
        <path d="M38,107 L36,110 M40,108 L40,111 M42,108 L44,111" stroke="#444" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* === RAVEN 2 (Muninn) - right shoulder, looking right === */}
      <g className={`${id}-raven2`}>
        {/* Shadow */}
        <ellipse cx="158" cy="104" rx="11" ry="5" fill="#333" opacity="0.1" />
        {/* Body */}
        <ellipse cx="158" cy="100" rx="11" ry="8" fill="#2C3E50" />
        {/* Feather texture */}
        <path d="M152,98 Q156,96 160,98" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="1" opacity="0.6" />
        <path d="M154,100 Q158,98 162,100" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="0.8" opacity="0.5" />
        <path d="M156,102 Q160,100 164,102" fill="none" stroke={`url(#${id}-feather)`} strokeWidth="0.8" opacity="0.5" />
        {/* Head - turned right */}
        <circle cx="166" cy="94" r="6" fill="#2C3E50" />
        {/* Beak */}
        <polygon points="172,93 176,91 172,90" fill="#F5C842" stroke="#C8960A" strokeWidth="0.3" />
        {/* Eye */}
        <circle cx="168" cy="93" r="2" fill="#1A1A2E" />
        <circle cx="168" cy="93" r="1.2" fill="#7B68EE" />
        <circle cx="168.5" cy="92.5" r="0.5" fill="white" />
        {/* Tail feathers */}
        <polygon points="147,98 140,95 140,97" fill="#2C3E50" />
        <polygon points="147,100 140,98 140,100" fill="#3D5166" />
        <polygon points="147,102 140,101 140,103" fill="#2C3E50" />
        {/* Wing - slightly different pose (folded tighter) */}
        <path d="M164,96 Q168,88 160,90 Q154,86 150,94" fill="#3D5166" />
        <path d="M162,93 Q160,90 156,92" fill="none" stroke="#2C3E50" strokeWidth="0.5" />
        {/* Claws */}
        <path d="M156,107 L154,110 M158,108 L158,111 M160,108 L162,111" stroke="#444" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default OdinAvatar;
