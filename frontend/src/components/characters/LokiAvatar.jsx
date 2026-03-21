import React from 'react';

const LokiAvatar = ({ size = 120, hover = false }) => {
  const id = 'loki-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        {/* Skin gradient - pale */}
        <radialGradient id={`${id}-skin`} cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#F5EEE0" />
          <stop offset="100%" stopColor="#D8C8B0" />
        </radialGradient>
        {/* Horn gradient - metallic gold */}
        <linearGradient id={`${id}-horn`} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#A07808" />
          <stop offset="40%" stopColor="#D4A430" />
          <stop offset="70%" stopColor="#F5D860" />
          <stop offset="100%" stopColor="#FFE880" />
        </linearGradient>
        {/* Hair - black with green sheen */}
        <linearGradient id={`${id}-hair`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1A1A2E" />
          <stop offset="50%" stopColor="#0A0A18" />
          <stop offset="100%" stopColor="#1A2A20" />
        </linearGradient>
        {/* Hair green highlight */}
        <linearGradient id={`${id}-hairHL`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </linearGradient>
        {/* Eye iris - emerald */}
        <radialGradient id={`${id}-iris`} cx="40%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </radialGradient>
        {/* Tunic gradient */}
        <linearGradient id={`${id}-tunic`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#15D490" />
          <stop offset="100%" stopColor="#0A8A5A" />
        </linearGradient>
        {/* Armor leather */}
        <linearGradient id={`${id}-leather`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3A5040" />
          <stop offset="100%" stopColor="#1A2820" />
        </linearGradient>
        {/* Cape gradient */}
        <linearGradient id={`${id}-cape`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0A6840" />
          <stop offset="100%" stopColor="#043020" />
        </linearGradient>
        {/* Blush */}
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4A090" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4A090" stopOpacity="0" />
        </radialGradient>
        {/* Flame outer */}
        <radialGradient id={`${id}-flameOuter`} cx="50%" cy="80%" r="60%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
        </radialGradient>
        {/* Flame mid */}
        <radialGradient id={`${id}-flameMid`} cx="50%" cy="70%" r="50%">
          <stop offset="0%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
        </radialGradient>
        {/* Flame core */}
        <radialGradient id={`${id}-flameCore`} cx="50%" cy="60%" r="40%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F5C842" stopOpacity="0.5" />
        </radialGradient>
        {/* Gold buckle */}
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE060" />
          <stop offset="50%" stopColor="#F5C842" />
          <stop offset="100%" stopColor="#A07808" />
        </linearGradient>
        {/* Pauldron metal */}
        <linearGradient id={`${id}-pauldron`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A5A3A" />
          <stop offset="100%" stopColor="#1A3020" />
        </linearGradient>
        {/* Snake */}
        <linearGradient id={`${id}-snake`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="50%" stopColor="#065F46" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ${id}-flame {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.8; }
          25% { transform: scaleY(1.2) scaleX(0.9); opacity: 1; }
          50% { transform: scaleY(0.8) scaleX(1.1); opacity: 0.7; }
          75% { transform: scaleY(1.1) scaleX(0.85); opacity: 0.9; }
        }
        @keyframes ${id}-flameInner {
          0%, 100% { transform: scaleY(1.1) scaleX(0.9); opacity: 0.9; }
          33% { transform: scaleY(0.85) scaleX(1.1); opacity: 0.7; }
          66% { transform: scaleY(1.15) scaleX(0.85); opacity: 1; }
        }
        @keyframes ${id}-flameGrow {
          0%, 100% { transform: scaleY(1.3) scaleX(1.2); opacity: 0.9; }
          25% { transform: scaleY(1.6) scaleX(1); opacity: 1; }
          50% { transform: scaleY(1.1) scaleX(1.3); opacity: 0.8; }
          75% { transform: scaleY(1.5) scaleX(0.9); opacity: 1; }
        }
        @keyframes ${id}-grinWiden {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.15) translateY(-1px); }
        }
        .${id}-body {
          animation: ${id}-float 3s ease-in-out infinite;
        }
        .${id}-flameL {
          animation: ${id}-flame 0.4s ease-in-out infinite;
          transform-origin: 36px 138px;
        }
        .${id}-flameR {
          animation: ${id}-flame 0.4s ease-in-out infinite 0.2s;
          transform-origin: 164px 138px;
        }
        .${id}-flameLInner {
          animation: ${id}-flameInner 0.35s ease-in-out infinite 0.1s;
          transform-origin: 36px 135px;
        }
        .${id}-flameRInner {
          animation: ${id}-flameInner 0.35s ease-in-out infinite 0.3s;
          transform-origin: 164px 135px;
        }
        .${id}-hover .${id}-flameL,
        .${id}-hover .${id}-flameR {
          animation: ${id}-flameGrow 0.3s ease-in-out infinite;
        }
        .${id}-hover .${id}-flameLInner,
        .${id}-hover .${id}-flameRInner {
          animation: ${id}-flameGrow 0.25s ease-in-out infinite 0.1s;
        }
        .${id}-hover .${id}-grin {
          animation: ${id}-grinWiden 1s ease-in-out infinite;
          transform-origin: 100px 96px;
        }
      `}</style>

      <g className={`${id}-body`}>
        {/* === CAPE flowing behind === */}
        <path d="M65,108 Q55,130 50,160 Q48,175 52,185 L58,185 Q56,172 60,155 Q64,135 70,112" fill={`url(#${id}-cape)`} opacity="0.8" />
        <path d="M135,108 Q145,130 150,160 Q152,175 148,185 L142,185 Q144,172 140,155 Q136,135 130,112" fill={`url(#${id}-cape)`} opacity="0.8" />
        {/* Cape tattered edges */}
        <path d="M50,180 L48,185 L52,183 L50,188 L55,184 L53,189 L58,185" fill={`url(#${id}-cape)`} />
        <path d="M142,185 L144,189 L147,184 L149,188 L151,183 L152,187 L150,180" fill={`url(#${id}-cape)`} />
        {/* Cape gold trim */}
        <path d="M52,160 Q50,172 52,185" fill="none" stroke="#F5C842" strokeWidth="1" opacity="0.5" />
        <path d="M148,160 Q150,172 148,185" fill="none" stroke="#F5C842" strokeWidth="1" opacity="0.5" />
        {/* Cape fold lines */}
        <path d="M56,120 Q54,145 52,170" fill="none" stroke="#043020" strokeWidth="1" opacity="0.4" />
        <path d="M144,120 Q146,145 148,170" fill="none" stroke="#043020" strokeWidth="1" opacity="0.4" />

        {/* === HAIR - slicked back with green sheen === */}
        <path d="M70,52 Q72,30 88,22 Q100,18 112,22 Q128,30 130,52" fill={`url(#${id}-hair)`} />
        <ellipse cx="100" cy="48" rx="32" ry="22" fill={`url(#${id}-hair)`} />
        {/* Green sheen highlight */}
        <path d="M75,40 Q88,28 100,26 Q112,28 125,40" fill={`url(#${id}-hairHL)`} opacity="0.6" />
        {/* Individual hair strands at edges */}
        <path d="M68,52 Q66,42 70,34" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M132,52 Q134,42 130,34" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
        {/* Swept dramatic side strands */}
        <path d="M72,48 Q68,38 72,28" fill="none" stroke="#0A0A18" strokeWidth="2" strokeLinecap="round" />
        <path d="M128,44 Q132,35 128,26" fill="none" stroke="#0A0A18" strokeWidth="1.5" strokeLinecap="round" />
        {/* Green sheen strands */}
        <path d="M85,30 Q88,25 92,22" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.25" />
        <path d="M108,28 Q112,24 115,22" fill="none" stroke="#10B981" strokeWidth="0.8" opacity="0.25" />

        {/* === HORNS - detailed curved golden === */}
        {/* Left horn */}
        <path d="M72,48 Q62,22 56,4" fill="none" stroke={`url(#${id}-horn)`} strokeWidth="6" strokeLinecap="round" />
        {/* Horn spiral engravings - left */}
        <path d="M70,44 Q66,34 62,22" fill="none" stroke="#C89820" strokeWidth="0.7" opacity="0.5" />
        <path d="M68,38 Q64,28 60,16" fill="none" stroke="#FFE060" strokeWidth="0.5" opacity="0.3" />
        <path d="M69,42 Q67,36 64,28 Q62,22 60,14" fill="none" stroke="#A07808" strokeWidth="0.5" opacity="0.4" />
        {/* Right horn */}
        <path d="M128,48 Q138,22 144,4" fill="none" stroke={`url(#${id}-horn)`} strokeWidth="6" strokeLinecap="round" />
        {/* Horn spiral engravings - right */}
        <path d="M130,44 Q134,34 138,22" fill="none" stroke="#C89820" strokeWidth="0.7" opacity="0.5" />
        <path d="M132,38 Q136,28 140,16" fill="none" stroke="#FFE060" strokeWidth="0.5" opacity="0.3" />
        <path d="M131,42 Q133,36 136,28 Q138,22 140,14" fill="none" stroke="#A07808" strokeWidth="0.5" opacity="0.4" />
        {/* Horn gleam highlights */}
        <ellipse cx="64" cy="18" rx="2" ry="6" fill="white" opacity="0.15" transform="rotate(-15,64,18)" />
        <ellipse cx="136" cy="18" rx="2" ry="6" fill="white" opacity="0.15" transform="rotate(15,136,18)" />

        {/* === FACE === */}
        {/* Face shadow */}
        <ellipse cx="100" cy="80" rx="31" ry="31" fill="#B0A890" opacity="0.1" />
        {/* Face - angular shape via clip suggestion with circle */}
        <circle cx="100" cy="78" r="30" fill={`url(#${id}-skin)`} />
        {/* Blush - very subtle */}
        <ellipse cx="78" cy="84" rx="7" ry="5" fill={`url(#${id}-blush)`} />
        <ellipse cx="122" cy="84" rx="7" ry="5" fill={`url(#${id}-blush)`} />

        {/* === EYES - emerald with slit pupils === */}
        {/* Sly eyebrows - one raised, thinner */}
        <path d="M76,64 Q84,60 94,64" fill="none" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M106,62 Q116,57 124,62" fill="none" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" />

        {/* Eye whites */}
        <ellipse cx="86" cy="74" rx="8" ry="7" fill="white" />
        <ellipse cx="114" cy="74" rx="8" ry="7" fill="white" />
        {/* Subtle upper lid arc */}
        <path d="M78,69 Q86,65 94,69" fill="none" stroke="#C8B8A0" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M106,69 Q114,65 122,69" fill="none" stroke="#C8B8A0" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        {/* Iris with emerald gradient */}
        <circle cx="87" cy="74" r="5" fill={`url(#${id}-iris)`} />
        <circle cx="115" cy="74" r="5" fill={`url(#${id}-iris)`} />
        {/* Slit cat-like pupils */}
        <ellipse cx="87" cy="74" rx="1.5" ry="3.5" fill="#0A1A10" />
        <ellipse cx="115" cy="74" rx="1.5" ry="3.5" fill="#0A1A10" />
        {/* Eye highlights */}
        <circle cx="89" cy="72" r="2" fill="white" opacity="0.9" />
        <circle cx="117" cy="72" r="2" fill="white" opacity="0.9" />
        <circle cx="86" cy="76" r="1" fill="white" opacity="0.5" />
        <circle cx="114" cy="76" r="1" fill="white" opacity="0.5" />

        {/* Tiny nose */}
        <circle cx="100" cy="84" r="1.5" fill="#C0A080" opacity="0.4" />

        {/* === MISCHIEVOUS SMILE === */}
        <g className={`${id}-grin`}>
          {/* Kawaii smirk */}
          <path d="M88,92 Q100,98 112,92" fill="none" stroke="#C07070" strokeWidth="1.5" strokeLinecap="round" />
          {/* Smirk curl at corner */}
          <path d="M112,92 Q114,90 116,91" fill="none" stroke="#C07070" strokeWidth="1.2" strokeLinecap="round" />
        </g>

        {/* === BODY - elaborate green and gold === */}
        {/* Body shadow */}
        <ellipse cx="100" cy="180" rx="38" ry="6" fill="#333" opacity="0.1" />
        {/* Main tunic */}
        <path d="M66,105 Q100,100 134,105 L140,175 Q100,180 60,175 Z" fill={`url(#${id}-tunic)`} />
        {/* V-neck showing chest piece */}
        <path d="M88,105 L100,126 L112,105" fill={`url(#${id}-leather)`} stroke="#F5C842" strokeWidth="1" />
        {/* Ornate chest piece lines */}
        <path d="M94,110 L100,120 L106,110" fill="none" stroke="#F5C842" strokeWidth="0.6" opacity="0.5" />
        <path d="M96,112 L100,118 L104,112" fill="none" stroke="#34D399" strokeWidth="0.4" opacity="0.4" />

        {/* Shoulder pauldrons with scales */}
        {/* Left pauldron */}
        <path d="M60,105 Q55,100 58,95 Q66,92 74,95 Q78,100 76,108" fill={`url(#${id}-pauldron)`} stroke="#10B981" strokeWidth="0.8" />
        {/* Scale/stud details */}
        <circle cx="62" cy="100" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="67" cy="98" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="72" cy="100" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="65" cy="103" r="1.2" fill="#F5C842" opacity="0.5" />
        <circle cx="70" cy="103" r="1.2" fill="#F5C842" opacity="0.5" />
        {/* Right pauldron */}
        <path d="M140,105 Q145,100 142,95 Q134,92 126,95 Q122,100 124,108" fill={`url(#${id}-pauldron)`} stroke="#10B981" strokeWidth="0.8" />
        <circle cx="138" cy="100" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="133" cy="98" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="128" cy="100" r="1.5" fill="#F5C842" opacity="0.6" />
        <circle cx="135" cy="103" r="1.2" fill="#F5C842" opacity="0.5" />
        <circle cx="130" cy="103" r="1.2" fill="#F5C842" opacity="0.5" />

        {/* Layered leather strips at waist */}
        <path d="M68,136 L72,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M76,136 L78,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M84,136 L84,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M116,136 L116,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M124,136 L122,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />
        <path d="M132,136 L128,148" fill="none" stroke={`url(#${id}-leather)`} strokeWidth="4" strokeLinecap="round" />

        {/* Gold belt with serpent buckle */}
        <rect x="66" y="132" width="68" height="5" rx="2" fill="#F5C842" />
        <rect x="66" y="132" width="68" height="2" rx="1" fill="#FFE060" opacity="0.3" />
        {/* Serpent buckle */}
        <ellipse cx="100" cy="134" rx="6" ry="3.5" fill={`url(#${id}-gold)`} stroke="#A07808" strokeWidth="0.5" />
        <path d="M95,134 Q97,132 100,133 Q103,132 105,134 Q103,136 100,135 Q97,136 95,134" fill="none" stroke="#A07808" strokeWidth="0.6" />
        <circle cx="96" cy="133.5" r="0.5" fill="#065F46" />
        <circle cx="104" cy="133.5" r="0.5" fill="#065F46" />

        {/* Tunic fold lines */}
        <path d="M78,110 Q76,135 74,165" fill="none" stroke="#088A50" strokeWidth="1" opacity="0.3" />
        <path d="M90,108 Q88,140 86,172" fill="none" stroke="#088A50" strokeWidth="0.8" opacity="0.25" />
        <path d="M110,108 Q112,140 114,172" fill="none" stroke="#088A50" strokeWidth="0.8" opacity="0.25" />
        <path d="M122,110 Q124,135 126,165" fill="none" stroke="#088A50" strokeWidth="1" opacity="0.3" />
        {/* Gold trim on tunic neckline */}
        <path d="M66,105 Q100,100 134,105" fill="none" stroke="#F5C842" strokeWidth="2.5" />

        {/* === ARMS reaching outward with long fingers === */}
        {/* Gold bracers */}
        <path d="M54,128 Q50,130 48,135 Q50,138 54,136" fill="#F5C842" stroke="#A07808" strokeWidth="0.5" />
        <path d="M146,128 Q150,130 152,135 Q150,138 146,136" fill="#F5C842" stroke="#A07808" strokeWidth="0.5" />

        {/* Arms */}
        <path d="M66,112 Q50,124 40,138" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="9" strokeLinecap="round" />
        <path d="M134,112 Q150,124 160,138" fill="none" stroke={`url(#${id}-skin)`} strokeWidth="9" strokeLinecap="round" />

        {/* Hands with long fingers */}
        {/* Left hand */}
        <circle cx="36" cy="140" r="5" fill={`url(#${id}-skin)`} />
        <path d="M32,138 L28,134" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M34,136 L30,131" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36,135 L34,130" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38,136 L38,131" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M40,138 L42,134" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        {/* Right hand */}
        <circle cx="164" cy="140" r="5" fill={`url(#${id}-skin)`} />
        <path d="M168,138 L172,134" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M166,136 L170,131" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M164,135 L166,130" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M162,136 L162,131" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M160,138 L158,134" stroke="#E8D8C0" strokeWidth="1.5" strokeLinecap="round" />

        {/* === SERPENT coiled around left arm === */}
        <path d="M56,118 Q52,122 54,126 Q58,128 56,132 Q52,134 54,138" fill="none" stroke={`url(#${id}-snake)`} strokeWidth="2.5" strokeLinecap="round" />
        {/* Snake head */}
        <circle cx="54" cy="116" r="2" fill="#10B981" />
        <circle cx="53" cy="115.5" r="0.5" fill="#F5C842" />
        {/* Snake tongue */}
        <path d="M52,116 L50,115 M50,115 L49,114 M50,115 L49,116" stroke="#FF4444" strokeWidth="0.4" />
        {/* Snake scale pattern */}
        <path d="M54,122 Q56,121 54,120" fill="none" stroke="#065F46" strokeWidth="0.5" opacity="0.5" />
        <path d="M54,128 Q56,127 54,126" fill="none" stroke="#065F46" strokeWidth="0.5" opacity="0.5" />

        {/* === FEET === */}
        <path d="M78,175 Q85,180 85,182 L92,182 Q95,180 95,175" fill="#1A1A2E" />
        <path d="M105,175 Q108,180 108,182 L118,182 Q120,180 120,175" fill="#1A1A2E" />
        {/* Boot buckles */}
        <rect x="84" y="176" width="5" height="2" rx="0.5" fill="#F5C842" opacity="0.6" />
        <rect x="111" y="176" width="5" height="2" rx="0.5" fill="#F5C842" opacity="0.6" />
      </g>

      {/* === GREEN FIRE - left hand (5 layers) === */}
      <g className={`${id}-flameL`}>
        {/* Outer glow */}
        <ellipse cx="36" cy="128" rx="10" ry="16" fill={`url(#${id}-flameOuter)`} opacity="0.3" />
        {/* Outer flame tongues */}
        <path d="M28,130 Q30,118 34,112 Q32,120 30,128" fill="#34D399" opacity="0.4" />
        <path d="M42,128 Q44,116 40,110 Q42,118 44,126" fill="#34D399" opacity="0.35" />
        {/* Main flame */}
        <ellipse cx="36" cy="126" rx="7" ry="12" fill="#34D399" opacity="0.6" />
        {/* Mid flame */}
        <ellipse cx="36" cy="123" rx="5" ry="9" fill="#10B981" opacity="0.7" />
      </g>
      <g className={`${id}-flameLInner`}>
        {/* Inner flame */}
        <ellipse cx="36" cy="122" rx="3.5" ry="7" fill={`url(#${id}-flameMid)`} opacity="0.8" />
        {/* Core */}
        <ellipse cx="36" cy="120" rx="2" ry="4" fill={`url(#${id}-flameCore)`} opacity="0.9" />
      </g>

      {/* === GREEN FIRE - right hand (5 layers) === */}
      <g className={`${id}-flameR`}>
        <ellipse cx="164" cy="128" rx="10" ry="16" fill={`url(#${id}-flameOuter)`} opacity="0.3" />
        <path d="M156,128 Q158,116 162,110 Q160,118 158,126" fill="#34D399" opacity="0.35" />
        <path d="M170,130 Q172,118 168,112 Q170,120 172,128" fill="#34D399" opacity="0.4" />
        <ellipse cx="164" cy="126" rx="7" ry="12" fill="#34D399" opacity="0.6" />
        <ellipse cx="164" cy="123" rx="5" ry="9" fill="#10B981" opacity="0.7" />
      </g>
      <g className={`${id}-flameRInner`}>
        <ellipse cx="164" cy="122" rx="3.5" ry="7" fill={`url(#${id}-flameMid)`} opacity="0.8" />
        <ellipse cx="164" cy="120" rx="2" ry="4" fill={`url(#${id}-flameCore)`} opacity="0.9" />
      </g>
    </svg>
  );
};

export default LokiAvatar;
