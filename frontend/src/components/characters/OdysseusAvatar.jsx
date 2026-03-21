import React from 'react';

const OdysseusAvatar = ({ size = 120, hover = false }) => {
  const id = 'odysseus-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        {/* Skin gradient - tanned */}
        <radialGradient id={`${id}-skin`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F0D4A8" />
          <stop offset="100%" stopColor="#D4A870" />
        </radialGradient>
        {/* Hair gradient */}
        <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A04E0E" />
          <stop offset="100%" stopColor="#6B3000" />
        </linearGradient>
        {/* Hair highlight */}
        <linearGradient id={`${id}-hairHL`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C06820" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        {/* Eye iris */}
        <radialGradient id={`${id}-iris`} cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E40AF" />
        </radialGradient>
        {/* Tunic gradient */}
        <linearGradient id={`${id}-tunic`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#70AAFF" />
          <stop offset="100%" stopColor="#3B72D6" />
        </linearGradient>
        {/* Bronze armor */}
        <linearGradient id={`${id}-bronze`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4A44A" />
          <stop offset="50%" stopColor="#B08030" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        {/* Blush */}
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D49070" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D49070" stopOpacity="0" />
        </radialGradient>
        {/* Wood gradient */}
        <linearGradient id={`${id}-wood`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A06020" />
          <stop offset="30%" stopColor="#92400E" />
          <stop offset="60%" stopColor="#A06020" />
          <stop offset="100%" stopColor="#7A3500" />
        </linearGradient>
        {/* Wave gradients */}
        <linearGradient id={`${id}-wave1`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id={`${id}-wave2`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        {/* Cloak gradient */}
        <linearGradient id={`${id}-cloak`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A80D0" />
          <stop offset="100%" stopColor="#2A50A0" />
        </linearGradient>
        {/* Headband bronze */}
        <linearGradient id={`${id}-headband`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#C8960A" />
          <stop offset="50%" stopColor="#D4A44A" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-sway {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(1deg); }
        }
        @keyframes ${id}-waveMove {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(3px); }
        }
        @keyframes ${id}-waveMove2 {
          0%, 100% { transform: translateY(2px); }
          50% { transform: translateY(-2px); }
        }
        @keyframes ${id}-waveMove3 {
          0%, 100% { transform: translateY(-1px); }
          50% { transform: translateY(2px); }
        }
        @keyframes ${id}-boatRock {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(3deg); }
          75% { transform: rotate(-3deg); }
        }
        @keyframes ${id}-boatRockHover {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(8deg); }
          75% { transform: rotate(-8deg); }
        }
        .${id}-body {
          animation: ${id}-sway 3.5s ease-in-out infinite;
        }
        .${id}-wave1 {
          animation: ${id}-waveMove 3s ease-in-out infinite;
        }
        .${id}-wave2 {
          animation: ${id}-waveMove2 2.5s ease-in-out infinite;
        }
        .${id}-wave3 {
          animation: ${id}-waveMove3 3.5s ease-in-out infinite;
        }
        .${id}-boat {
          animation: ${id}-boatRock 4s ease-in-out infinite;
          transform-origin: 160px 155px;
        }
        .${id}-hover .${id}-boat {
          animation: ${id}-boatRockHover 1.5s ease-in-out infinite;
          transform-origin: 160px 155px;
        }
      `}</style>

      {/* === WAVES BACKGROUND - 3 layers === */}
      <g className={`${id}-wave1`}>
        <path d="M0,175 Q15,168 30,175 Q45,182 60,175 Q75,168 90,175 Q105,182 120,175 Q135,168 150,175 Q165,182 180,175 Q195,168 200,175 L200,200 L0,200 Z" fill={`url(#${id}-wave1)`} opacity="0.45" />
        {/* Foam highlights */}
        <path d="M20,174 Q25,172 30,174" fill="none" stroke="white" strokeWidth="0.8" opacity="0.3" />
        <path d="M80,174 Q85,172 90,174" fill="none" stroke="white" strokeWidth="0.8" opacity="0.3" />
        <path d="M140,174 Q145,172 150,174" fill="none" stroke="white" strokeWidth="0.8" opacity="0.3" />
      </g>
      <g className={`${id}-wave2`}>
        <path d="M0,180 Q20,172 40,180 Q60,188 80,180 Q100,172 120,180 Q140,188 160,180 Q180,172 200,180 L200,200 L0,200 Z" fill={`url(#${id}-wave2)`} opacity="0.55" />
        <path d="M30,179 Q40,176 50,179" fill="none" stroke="white" strokeWidth="0.6" opacity="0.25" />
        <path d="M110,179 Q120,176 130,179" fill="none" stroke="white" strokeWidth="0.6" opacity="0.25" />
      </g>
      <g className={`${id}-wave3`}>
        <path d="M0,186 Q25,180 50,186 Q75,192 100,186 Q125,180 150,186 Q175,192 200,186 L200,200 L0,200 Z" fill="#2563EB" opacity="0.65" />
        <path d="M60,185 Q70,183 80,185" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      </g>

      {/* === BOAT with planking detail === */}
      <g className={`${id}-boat`}>
        {/* Hull shadow */}
        <path d="M136,163 Q145,155 155,152 L178,152 Q182,155 185,163 Z" fill="#333" opacity="0.15" />
        {/* Hull */}
        <path d="M138,160 Q145,150 155,148 L175,148 Q180,150 182,160 Z" fill={`url(#${id}-wood)`} />
        {/* Planking lines */}
        <line x1="142" y1="155" x2="180" y2="155" stroke="#7A3500" strokeWidth="0.5" opacity="0.4" />
        <line x1="140" y1="152" x2="180" y2="152" stroke="#7A3500" strokeWidth="0.4" opacity="0.3" />
        {/* Hull rim */}
        <path d="M138,160 Q145,150 155,148 L175,148 Q180,150 182,160" fill="none" stroke="#6B3000" strokeWidth="1.2" />
        {/* Mast */}
        <line x1="158" y1="148" x2="158" y2="122" stroke="#8B6D3F" strokeWidth="2.5" />
        <line x1="158" y1="130" x2="158" y2="122" stroke="#7A5C2E" strokeWidth="0.5" opacity="0.4" />
        {/* Sail */}
        <path d="M158,125 L172,138 L158,146 Z" fill="#F5F0DC" stroke="#D0C8A0" strokeWidth="0.8" />
        {/* Sail crease */}
        <path d="M160,130 Q165,136 160,142" fill="none" stroke="#C8C0A0" strokeWidth="0.5" opacity="0.5" />
        {/* Small flag */}
        <path d="M158,122 L164,118 L158,126" fill="#3B82F6" opacity="0.7" />
      </g>

      <g className={`${id}-body`}>
        {/* === HAIR - curly and windswept === */}
        {/* Hair base mass */}
        <ellipse cx="90" cy="50" rx="34" ry="28" fill={`url(#${id}-hair)`} />
        {/* Hair volume - overlapping curls */}
        <circle cx="68" cy="48" r="10" fill="#92400E" />
        <circle cx="78" cy="38" r="9" fill="#A04E0E" />
        <circle cx="92" cy="34" r="10" fill="#92400E" />
        <circle cx="106" cy="36" r="9" fill="#A04E0E" />
        <circle cx="116" cy="44" r="8" fill="#92400E" />
        {/* Windswept strands */}
        <path d="M60,42 Q55,28 62,20" fill="none" stroke="#92400E" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M65,36 Q60,22 66,16" fill="none" stroke="#A04E0E" strokeWidth="3" strokeLinecap="round" />
        <path d="M75,32 Q72,18 78,14" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
        <path d="M112,38 Q118,25 115,18" fill="none" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
        <path d="M118,45 Q125,32 120,24" fill="none" stroke="#A04E0E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Highlight strands */}
        <path d="M72,40 Q68,30 72,22" fill="none" stroke={`url(#${id}-hairHL)`} strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <path d="M95,35 Q93,25 96,18" fill="none" stroke="#C06820" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />

        {/* === HEADBAND === */}
        <path d="M60,52 Q90,42 120,52" fill="none" stroke={`url(#${id}-headband)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M60,52 Q90,42 120,52" fill="none" stroke="#E8C060" strokeWidth="1.5" opacity="0.3" />
        {/* Wave emblem on headband */}
        <path d="M86,46 Q89,44 92,46 Q95,48 98,46" fill="none" stroke="#F5C842" strokeWidth="1" />

        {/* === FACE === */}
        {/* Face shadow */}
        <ellipse cx="90" cy="78" rx="33" ry="33" fill="#B08050" opacity="0.1" />
        {/* Face */}
        <circle cx="90" cy="75" r="32" fill={`url(#${id}-skin)`} />
        {/* Blush */}
        <ellipse cx="72" cy="82" rx="8" ry="5" fill={`url(#${id}-blush)`} />
        <ellipse cx="108" cy="82" rx="8" ry="5" fill={`url(#${id}-blush)`} />

        {/* Eyebrows - soft arcs */}
        <path d="M68,62 Q76,58 86,62" fill="none" stroke="#6B3000" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M94,62 Q104,58 112,62" fill="none" stroke="#6B3000" strokeWidth="1.8" strokeLinecap="round" />

        {/* === EYES === */}
        {/* Eye whites */}
        <ellipse cx="78" cy="72" rx="8" ry="7" fill="white" />
        <ellipse cx="102" cy="72" rx="8" ry="7" fill="white" />
        {/* Subtle upper lid arc */}
        <path d="M70,67 Q78,63 86,67" fill="none" stroke="#C8A870" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M94,67 Q102,63 110,67" fill="none" stroke="#C8A870" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        {/* Irises */}
        <circle cx="79" cy="72" r="5" fill={`url(#${id}-iris)`} />
        <circle cx="103" cy="72" r="5" fill={`url(#${id}-iris)`} />
        {/* Pupils */}
        <circle cx="79" cy="72" r="2.5" fill="#0A1628" />
        <circle cx="103" cy="72" r="2.5" fill="#0A1628" />
        {/* Eye highlights */}
        <circle cx="81" cy="70" r="2" fill="white" opacity="0.9" />
        <circle cx="105" cy="70" r="2" fill="white" opacity="0.9" />
        <circle cx="78" cy="74" r="1" fill="white" opacity="0.5" />
        <circle cx="102" cy="74" r="1" fill="white" opacity="0.5" />
        {/* Small scar near left eyebrow */}
        <path d="M70,64 L73,60" fill="none" stroke="#C8A078" strokeWidth="1" opacity="0.6" />

        {/* Tiny nose */}
        <circle cx="90" cy="80" r="1.5" fill="#C89868" opacity="0.4" />

        {/* Kawaii smile */}
        <path d="M82,89 Q90,94 98,89" fill="none" stroke="#C07070" strokeWidth="1.5" strokeLinecap="round" />

        {/* === CLOAK draped over left shoulder === */}
        <path d="M50,108 Q42,130 40,155 Q38,168 42,172" fill={`url(#${id}-cloak)`} opacity="0.75" />
        <path d="M55,106 Q48,125 45,150 Q43,165 46,170" fill={`url(#${id}-cloak)`} opacity="0.55" />
        {/* Cloak fold lines */}
        <path d="M48,115 Q45,135 42,158" fill="none" stroke="#2A50A0" strokeWidth="1" opacity="0.4" />
        <path d="M52,112 Q49,130 46,155" fill="none" stroke="#2A50A0" strokeWidth="0.8" opacity="0.3" />

        {/* === BODY - tunic === */}
        {/* Body shadow */}
        <ellipse cx="90" cy="172" rx="38" ry="6" fill="#333" opacity="0.1" />
        {/* Tunic */}
        <path d="M60,102 Q90,97 120,102 L127,168 Q90,173 53,168 Z" fill={`url(#${id}-tunic)`} />
        {/* Tunic fold lines */}
        <path d="M72,105 Q70,130 68,165" fill="none" stroke="#2A60B0" strokeWidth="1" opacity="0.3" />
        <path d="M82,102 Q80,130 78,168" fill="none" stroke="#2A60B0" strokeWidth="0.8" opacity="0.25" />
        <path d="M98,102 Q100,130 102,168" fill="none" stroke="#2A60B0" strokeWidth="0.8" opacity="0.25" />
        <path d="M110,105 Q112,130 114,165" fill="none" stroke="#2A60B0" strokeWidth="1" opacity="0.3" />

        {/* === BRONZE SHOULDER GUARD (right shoulder) === */}
        <path d="M110,102 Q125,98 130,105 L128,115 Q118,112 110,108 Z" fill={`url(#${id}-bronze)`} stroke="#8B6914" strokeWidth="0.8" />
        {/* Wave engravings on armor */}
        <path d="M114,105 Q118,103 122,105 Q126,107 128,109" fill="none" stroke="#C8A44A" strokeWidth="0.5" opacity="0.5" />
        <path d="M112,108 Q116,106 120,108" fill="none" stroke="#C8A44A" strokeWidth="0.4" opacity="0.4" />
        {/* Armor gleam */}
        <ellipse cx="118" cy="104" rx="3" ry="4" fill="white" opacity="0.15" />

        {/* Leather belt with pouches */}
        <path d="M58,122 Q90,118 122,122" fill="none" stroke="#6B3000" strokeWidth="4" />
        <path d="M58,122 Q90,118 122,122" fill="none" stroke="#8B5020" strokeWidth="1.5" opacity="0.3" />
        {/* Belt buckle */}
        <rect x="86" y="119" width="8" height="6" rx="1" fill="#D4A44A" stroke="#8B6914" strokeWidth="0.5" />
        {/* Belt pouch */}
        <path d="M70,123 Q68,130 70,134 L76,134 Q78,130 76,123 Z" fill="#6B3000" stroke="#4A2000" strokeWidth="0.5" />
        <line x1="73" y1="124" x2="73" y2="133" stroke="#4A2000" strokeWidth="0.3" />
        {/* Rope coiled at hip */}
        <circle cx="110" cy="128" r="4" fill="none" stroke="#C8A870" strokeWidth="2" />
        <circle cx="110" cy="128" r="2" fill="none" stroke="#C8A870" strokeWidth="1.5" />

        {/* === ARMS === */}
        <path d="M60,110 Q46,128 40,145" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="9" strokeLinecap="round" />
        <path d="M120,110 Q134,128 132,148" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="9" strokeLinecap="round" />

        {/* === BOOTS === */}
        <path d="M68,168 Q78,175 78,178 L82,178 Q84,175 84,168" fill="#6B3000" />
        <path d="M96,168 Q96,175 96,178 L106,178 Q106,175 106,168" fill="#6B3000" />
        {/* Boot tops */}
        <path d="M68,168 L84,168" fill="none" stroke="#4A2000" strokeWidth="1" />
        <path d="M96,168 L106,168" fill="none" stroke="#4A2000" strokeWidth="1" />
        {/* Boot lace detail */}
        <path d="M74,170 L78,172 L74,174" fill="none" stroke="#4A2000" strokeWidth="0.5" opacity="0.5" />
        <path d="M99,170 L103,172 L99,174" fill="none" stroke="#4A2000" strokeWidth="0.5" opacity="0.5" />
      </g>
    </svg>
  );
};

export default OdysseusAvatar;
