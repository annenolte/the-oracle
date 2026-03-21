import React from 'react';

const IsisAvatar = ({ size = 120, hover = false }) => {
  const id = 'isis-' + React.useId().replace(/:/g, '');

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
          <stop offset="0%" stopColor="#E0B88A" />
          <stop offset="60%" stopColor="#D4A574" />
          <stop offset="100%" stopColor="#C08B5C" />
        </radialGradient>
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8806A" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E8806A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-goldGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}-dressGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5D1" />
          <stop offset="50%" stopColor="#00CED1" />
          <stop offset="100%" stopColor="#009E9E" />
        </linearGradient>
        <linearGradient id={`${id}-hairGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2A2A4E" />
          <stop offset="40%" stopColor="#1A1A2E" />
          <stop offset="100%" stopColor="#0D0D1A" />
        </linearGradient>
        <linearGradient id={`${id}-hairSheen`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1A1A2E" />
          <stop offset="40%" stopColor="#2E3B6E" />
          <stop offset="60%" stopColor="#2E3B6E" />
          <stop offset="100%" stopColor="#1A1A2E" />
        </linearGradient>
        <radialGradient id={`${id}-irisGrad`} cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#40E8D0" />
          <stop offset="40%" stopColor="#00CED1" />
          <stop offset="100%" stopColor="#008B8B" />
        </radialGradient>
        <linearGradient id={`${id}-wingGradL`} x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00CED1" />
          <stop offset="50%" stopColor="#1ABC9C" />
          <stop offset="100%" stopColor="#0D6B5E" />
        </linearGradient>
        <linearGradient id={`${id}-wingGradR`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00CED1" />
          <stop offset="50%" stopColor="#1ABC9C" />
          <stop offset="100%" stopColor="#0D6B5E" />
        </linearGradient>
        <radialGradient id={`${id}-ankhGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-sandalGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        <linearGradient id={`${id}-collarGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        <linearGradient id={`${id}-crownGrad`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#DAA520" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFE066" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-wingPulse {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.03); }
        }
        @keyframes ${id}-wingSpread {
          0%, 100% { transform: scaleX(1.05); }
          50% { transform: scaleX(1.18); }
        }
        @keyframes ${id}-sparkle1 {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes ${id}-sparkle2 {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0; transform: scale(0.3); }
        }
        @keyframes ${id}-sparkle3 {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          33% { opacity: 1; transform: scale(1.3); }
          66% { opacity: 0; transform: scale(0.4); }
        }
        @keyframes ${id}-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes ${id}-ankhPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .${id}-body {
          animation: ${id}-float 3s ease-in-out infinite;
        }
        .${id}-wingL {
          animation: ${id}-wingPulse 2.5s ease-in-out infinite;
          transform-origin: 70px 120px;
        }
        .${id}-wingR {
          animation: ${id}-wingPulse 2.5s ease-in-out infinite 0.3s;
          transform-origin: 130px 120px;
        }
        .${id}-hover .${id}-wingL {
          animation: ${id}-wingSpread 1s ease-in-out infinite;
          transform-origin: 70px 120px;
        }
        .${id}-hover .${id}-wingR {
          animation: ${id}-wingSpread 1s ease-in-out infinite 0.15s;
          transform-origin: 130px 120px;
        }
        .${id}-sp1 { animation: ${id}-sparkle1 2s ease-in-out infinite; }
        .${id}-sp2 { animation: ${id}-sparkle2 2.5s ease-in-out infinite 0.5s; }
        .${id}-sp3 { animation: ${id}-sparkle3 1.8s ease-in-out infinite 0.3s; }
        .${id}-sp4 { animation: ${id}-sparkle1 2.2s ease-in-out infinite 0.8s; }
        .${id}-sp5 { animation: ${id}-sparkle2 1.6s ease-in-out infinite 1s; }
        .${id}-sp6 { animation: ${id}-sparkle3 2s ease-in-out infinite 0.2s; }
        .${id}-ankhGlowAnim {
          animation: ${id}-ankhPulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Sparkles - star shapes */}
      <g className={`${id}-sp1`}>
        <polygon points="30,40 31,37 32,40 31,43" fill="#FFD700" />
        <polygon points="29,40 31,39 33,40 31,41" fill="#FFD700" />
      </g>
      <g className={`${id}-sp2`}>
        <polygon points="170,35 171.5,31 173,35 171.5,39" fill="#00CED1" />
        <polygon points="168,35 171.5,33.5 175,35 171.5,36.5" fill="#00CED1" />
      </g>
      <g className={`${id}-sp3`}>
        <polygon points="25,100 26,97 27,100 26,103" fill="#FFD700" />
        <polygon points="24,100 26,99 28,100 26,101" fill="#FFD700" />
      </g>
      <g className={`${id}-sp4`}>
        <polygon points="175,90 176.5,86 178,90 176.5,94" fill="#1ABC9C" />
        <polygon points="173,90 176.5,88.5 180,90 176.5,91.5" fill="#1ABC9C" />
      </g>
      <g className={`${id}-sp5`}>
        <polygon points="50,25 51,22 52,25 51,28" fill="#FFD700" />
        <polygon points="49,25 51,24 53,25 51,26" fill="#FFD700" />
      </g>
      <g className={`${id}-sp6`}>
        <polygon points="155,60 156.5,56 158,60 156.5,64" fill="#00CED1" />
        <polygon points="153,60 156.5,58.5 160,60 156.5,61.5" fill="#00CED1" />
      </g>

      <g className={`${id}-body`}>
        {/* Shadow under body */}
        <ellipse cx="100" cy="190" rx="32" ry="4" fill="#000" opacity="0.1" />

        {/* Wings - left - layered feathers */}
        <g className={`${id}-wingL`}>
          {/* Wing base layer */}
          <path d="M68,108 Q30,90 8,118 Q18,130 35,122 Q12,140 8,158 Q28,150 42,138 Q28,160 22,175 Q48,158 62,142 L65,162" fill={`url(#${id}-wingGradL)`} opacity="0.5" />
          {/* Wing middle layer */}
          <path d="M68,112 Q38,98 15,120 Q22,128 38,122 Q18,138 14,152 Q30,146 44,136 Q32,155 28,168 Q48,154 60,140 L63,155" fill={`url(#${id}-wingGradL)`} opacity="0.65" />
          {/* Wing top layer */}
          <path d="M68,116 Q44,106 24,122 Q30,128 40,124 Q25,138 22,148 Q34,142 46,134 Q36,150 34,160 Q48,150 58,140" fill={`url(#${id}-wingGradL)`} opacity="0.8" />
          {/* Feather detail lines */}
          <path d="M66,112 Q42,104 22,118" fill="none" stroke="#40E8D0" strokeWidth="0.8" opacity="0.5" />
          <path d="M64,120 Q38,115 18,130" fill="none" stroke="#40E8D0" strokeWidth="0.7" opacity="0.4" />
          <path d="M62,130 Q40,128 24,142" fill="none" stroke="#40E8D0" strokeWidth="0.7" opacity="0.4" />
          <path d="M60,140 Q42,140 30,152" fill="none" stroke="#40E8D0" strokeWidth="0.6" opacity="0.3" />
          {/* White highlight tips */}
          <path d="M10,118 Q12,116 15,118" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5" />
          <path d="M10,155 Q13,152 16,155" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
          <path d="M24,172 Q27,169 30,172" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Wings - right - layered feathers */}
        <g className={`${id}-wingR`}>
          <path d="M132,108 Q170,90 192,118 Q182,130 165,122 Q188,140 192,158 Q172,150 158,138 Q172,160 178,175 Q152,158 138,142 L135,162" fill={`url(#${id}-wingGradR)`} opacity="0.5" />
          <path d="M132,112 Q162,98 185,120 Q178,128 162,122 Q182,138 186,152 Q170,146 156,136 Q168,155 172,168 Q152,154 140,140 L137,155" fill={`url(#${id}-wingGradR)`} opacity="0.65" />
          <path d="M132,116 Q156,106 176,122 Q170,128 160,124 Q175,138 178,148 Q166,142 154,134 Q164,150 166,160 Q152,150 142,140" fill={`url(#${id}-wingGradR)`} opacity="0.8" />
          <path d="M134,112 Q158,104 178,118" fill="none" stroke="#40E8D0" strokeWidth="0.8" opacity="0.5" />
          <path d="M136,120 Q162,115 182,130" fill="none" stroke="#40E8D0" strokeWidth="0.7" opacity="0.4" />
          <path d="M138,130 Q160,128 176,142" fill="none" stroke="#40E8D0" strokeWidth="0.7" opacity="0.4" />
          <path d="M140,140 Q158,140 170,152" fill="none" stroke="#40E8D0" strokeWidth="0.6" opacity="0.3" />
          <path d="M190,118 Q188,116 185,118" fill="none" stroke="white" strokeWidth="0.6" opacity="0.5" />
          <path d="M190,155 Q187,152 184,155" fill="none" stroke="white" strokeWidth="0.6" opacity="0.4" />
          <path d="M176,172 Q173,169 170,172" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* Hair - long black with blue sheen */}
        <path d="M68,52 Q70,28 100,24 Q130,28 132,52 L130,82 Q100,88 70,82 Z" fill={`url(#${id}-hairGrad)`} />
        {/* Hair strand groups with blue sheen */}
        <path d="M72,52 Q68,70 65,98 Q63,115 62,130 Q60,140 62,150" fill="none" stroke={`url(#${id}-hairSheen)`} strokeWidth="10" strokeLinecap="round" />
        <path d="M76,54 Q70,72 67,100 Q65,118 64,135" fill="none" stroke="#1A1A2E" strokeWidth="5" strokeLinecap="round" />
        <path d="M130,52 Q134,70 137,98 Q139,115 140,130 Q142,140 140,150" fill="none" stroke={`url(#${id}-hairSheen)`} strokeWidth="10" strokeLinecap="round" />
        <path d="M126,54 Q132,72 135,100 Q137,118 138,135" fill="none" stroke="#1A1A2E" strokeWidth="5" strokeLinecap="round" />
        {/* Hair sheen highlights */}
        <path d="M82,35 Q90,30 100,28 Q110,30 118,35" fill="none" stroke="#3A4A8E" strokeWidth="1.5" opacity="0.3" />
        <path d="M78,45 Q88,40 100,38 Q112,40 122,45" fill="none" stroke="#3A4A8E" strokeWidth="1" opacity="0.25" />

        {/* Crown - cow horns + sun disc + throne symbol */}
        {/* Cow horns */}
        <path d="M78,30 Q72,15 68,5 Q70,3 73,5 Q78,15 82,28" fill={`url(#${id}-crownGrad)`} stroke="#DAA520" strokeWidth="0.5" />
        <path d="M122,30 Q128,15 132,5 Q130,3 127,5 Q122,15 118,28" fill={`url(#${id}-crownGrad)`} stroke="#DAA520" strokeWidth="0.5" />
        {/* Sun disc between horns */}
        <circle cx="100" cy="14" r="10" fill="#FFD700" opacity="0.8" />
        <circle cx="100" cy="14" r="8" fill="#FF8C00" opacity="0.6" />
        <circle cx="100" cy="14" r="6" fill="#FFD700" opacity="0.9" />
        {/* Throne hieroglyph on top */}
        <rect x="95" y="20" width="10" height="10" rx="1" fill={`url(#${id}-crownGrad)`} stroke="#B8860B" strokeWidth="0.5" />
        <rect x="97" y="16" width="6" height="7" rx="1" fill={`url(#${id}-crownGrad)`} stroke="#B8860B" strokeWidth="0.5" />
        {/* Engraving on throne */}
        <line x1="98" y1="22" x2="104" y2="22" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" />
        <line x1="98" y1="25" x2="104" y2="25" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" />

        {/* Face */}
        <circle cx="100" cy="68" r="28" fill={`url(#${id}-skinGrad)`} />

        {/* Eyes - almond shaped with kohl liner */}
        {/* Left eye */}
        <path d="M80,63 Q84,58 94,60 Q97,62 97,66 Q95,71 86,70 Q80,68 80,63 Z" fill="white" />
        <ellipse cx="89" cy="65" rx="5" ry="5.5" fill={`url(#${id}-irisGrad)`} />
        <circle cx="89" cy="65" r="3" fill="#1A1A2E" />
        <circle cx="91" cy="63" r="1.5" fill="white" opacity="0.9" />
        <circle cx="87" cy="67" r="0.7" fill="white" opacity="0.4" />
        {/* Left eyeliner - Eye of Horus style */}
        <path d="M79,63 Q76,60 73,60" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
        <path d="M80,66 Q77,68 74,72" fill="none" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round" />
        {/* Left eyebrow */}
        <path d="M79,56 Q86,52 95,55" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />

        {/* Right eye */}
        <path d="M103,60 Q113,58 118,63 Q118,68 112,70 Q103,71 101,66 Q101,62 103,60 Z" fill="white" />
        <ellipse cx="111" cy="65" rx="5" ry="5.5" fill={`url(#${id}-irisGrad)`} />
        <circle cx="111" cy="65" r="3" fill="#1A1A2E" />
        <circle cx="113" cy="63" r="1.5" fill="white" opacity="0.9" />
        <circle cx="109" cy="67" r="0.7" fill="white" opacity="0.4" />
        {/* Right eyeliner */}
        <path d="M119,63 Q122,60 125,60" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />
        <path d="M118,66 Q121,68 124,72" fill="none" stroke="#1A1A2E" strokeWidth="1.2" strokeLinecap="round" />
        {/* Right eyebrow */}
        <path d="M105,55 Q114,52 121,56" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" />

        {/* Nose */}
        <path d="M98,70 Q100,72 102,70" fill="none" stroke="#B8935A" strokeWidth="0.8" strokeLinecap="round" />

        {/* Blush */}
        <ellipse cx="82" cy="72" rx="7" ry="4" fill={`url(#${id}-blush)`} />
        <ellipse cx="118" cy="72" rx="7" ry="4" fill={`url(#${id}-blush)`} />

        {/* Lips */}
        <path d="M94,78 Q100,82 106,78" fill="none" stroke="#C07060" strokeWidth="1.5" strokeLinecap="round" />

        {/* Broad collar / usekh necklace */}
        <path d="M72,92 Q100,86 128,92 Q118,102 100,105 Q82,102 72,92 Z" fill={`url(#${id}-collarGrad)`} />
        {/* Collar bands */}
        <path d="M74,94 Q100,88 126,94" fill="none" stroke="#00CED1" strokeWidth="2.5" opacity="0.8" />
        <path d="M76,97 Q100,92 124,97" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.7" />
        <path d="M78,100 Q100,96 122,100" fill="none" stroke="#00CED1" strokeWidth="2" opacity="0.7" />
        <path d="M80,103 Q100,99 120,103" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
        {/* Collar jewels */}
        <circle cx="86" cy="96" r="1.5" fill="#00CED1" />
        <circle cx="100" cy="93" r="2" fill="#FFD700" />
        <circle cx="114" cy="96" r="1.5" fill="#00CED1" />
        <circle cx="92" cy="99" r="1.2" fill="#FFD700" opacity="0.8" />
        <circle cx="108" cy="99" r="1.2" fill="#FFD700" opacity="0.8" />

        {/* Body / fitted sheath dress */}
        <path d="M74,100 Q100,95 126,100 L130,178 Q100,182 70,178 Z" fill={`url(#${id}-dressGrad)`} />
        {/* Scarab pattern at bodice */}
        <ellipse cx="100" cy="112" rx="5" ry="3.5" fill="#FFD700" opacity="0.6" />
        <path d="M96,112 Q100,108 104,112" fill="none" stroke="#DAA520" strokeWidth="0.6" />
        <line x1="95" y1="112" x2="92" y2="115" stroke="#DAA520" strokeWidth="0.5" opacity="0.5" />
        <line x1="105" y1="112" x2="108" y2="115" stroke="#DAA520" strokeWidth="0.5" opacity="0.5" />
        {/* Gold trim lines */}
        <path d="M76,120 Q100,116 124,120" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
        {/* Horizontal pleated lines */}
        <line x1="74" y1="130" x2="126" y2="130" stroke="#009E9E" strokeWidth="0.6" opacity="0.4" />
        <line x1="73" y1="138" x2="127" y2="138" stroke="#009E9E" strokeWidth="0.6" opacity="0.35" />
        <line x1="72" y1="146" x2="128" y2="146" stroke="#009E9E" strokeWidth="0.6" opacity="0.3" />
        <line x1="71" y1="154" x2="129" y2="154" stroke="#009E9E" strokeWidth="0.6" opacity="0.3" />
        <line x1="71" y1="162" x2="129" y2="162" stroke="#009E9E" strokeWidth="0.6" opacity="0.25" />
        <line x1="70" y1="170" x2="130" y2="170" stroke="#009E9E" strokeWidth="0.6" opacity="0.25" />
        {/* Shoulder straps */}
        <line x1="82" y1="92" x2="78" y2="100" stroke="#00CED1" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="118" y1="92" x2="122" y2="100" stroke="#00CED1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Arms */}
        <path d="M74,105 Q58,118 52,132" fill="none" stroke={`url(#${id}-skinGrad)`} strokeWidth="8" strokeLinecap="round" />
        <path d="M126,105 Q142,115 148,128" fill="none" stroke={`url(#${id}-skinGrad)`} strokeWidth="8" strokeLinecap="round" />
        {/* Arm shadow */}
        <path d="M74,107 Q60,120 54,133" fill="none" stroke="#B8935A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />

        {/* Ankh in right hand - glowing */}
        <g>
          <circle className={`${id}-ankhGlowAnim`} cx="150" cy="132" r="18" fill={`url(#${id}-ankhGlow)`} />
          {/* Glow rays */}
          <line className={`${id}-ankhGlowAnim`} x1="150" y1="112" x2="150" y2="116" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <line className={`${id}-ankhGlowAnim`} x1="162" y1="120" x2="159" y2="122" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
          <line className={`${id}-ankhGlowAnim`} x1="165" y1="132" x2="161" y2="132" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <line className={`${id}-ankhGlowAnim`} x1="162" y1="144" x2="159" y2="142" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
          <line className={`${id}-ankhGlowAnim`} x1="138" y1="120" x2="141" y2="122" stroke="#FFD700" strokeWidth="1" opacity="0.4" />
          {/* Ankh shape */}
          <ellipse cx="150" cy="125" rx="5" ry="6" fill="none" stroke={`url(#${id}-goldGrad)`} strokeWidth="2.5" />
          <line x1="150" y1="131" x2="150" y2="145" stroke={`url(#${id}-goldGrad)`} strokeWidth="2.5" />
          <line x1="145" y1="137" x2="155" y2="137" stroke={`url(#${id}-goldGrad)`} strokeWidth="2.5" />
        </g>

        {/* Hands */}
        <circle cx="50" cy="134" r="5" fill={`url(#${id}-skinGrad)`} />
        <circle cx="150" cy="130" r="5" fill={`url(#${id}-skinGrad)`} />

        {/* Gold sandals with ankle wraps */}
        <ellipse cx="85" cy="182" rx="11" ry="4" fill={`url(#${id}-sandalGrad)`} />
        <ellipse cx="115" cy="182" rx="11" ry="4" fill={`url(#${id}-sandalGrad)`} />
        {/* Ankle wraps */}
        <path d="M80,176 Q85,174 90,176" fill="none" stroke="#DAA520" strokeWidth="1" opacity="0.7" />
        <path d="M79,178 Q85,176 91,178" fill="none" stroke="#DAA520" strokeWidth="0.8" opacity="0.6" />
        <path d="M110,176 Q115,174 120,176" fill="none" stroke="#DAA520" strokeWidth="1" opacity="0.7" />
        <path d="M109,178 Q115,176 121,178" fill="none" stroke="#DAA520" strokeWidth="0.8" opacity="0.6" />
      </g>
    </svg>
  );
};

export default IsisAvatar;
