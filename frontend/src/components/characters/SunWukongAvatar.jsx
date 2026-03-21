import React from 'react';

const SunWukongAvatar = ({ size = 120, hover = false }) => {
  const id = 'wukong-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        <radialGradient id={`${id}-furGrad`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E8B860" />
          <stop offset="60%" stopColor="#CD853F" />
          <stop offset="100%" stopColor="#A0682A" />
        </radialGradient>
        <radialGradient id={`${id}-faceFur`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE4C0" />
          <stop offset="60%" stopColor="#F5DEB3" />
          <stop offset="100%" stopColor="#DEC49A" />
        </radialGradient>
        <linearGradient id={`${id}-goldGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}-staffGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="25%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="75%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}-redTunic`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F05545" />
          <stop offset="50%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#C0392B" />
        </linearGradient>
        <linearGradient id={`${id}-tigerSkin`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8B860" />
          <stop offset="30%" stopColor="#DAA520" />
          <stop offset="60%" stopColor="#E8B860" />
          <stop offset="100%" stopColor="#DAA520" />
        </linearGradient>
        <radialGradient id={`${id}-eyeGrad`} cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <radialGradient id={`${id}-blush`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-jewelGrad`} cx="35%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#FF6B6B" />
          <stop offset="40%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        <linearGradient id={`${id}-cloudGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="50%" stopColor="#F5F5F0" />
          <stop offset="100%" stopColor="#E8E4D8" />
        </linearGradient>
        <linearGradient id={`${id}-armorGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="40%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        <linearGradient id={`${id}-sashGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="50%" stopColor="#E74C3C" />
          <stop offset="100%" stopColor="#D32F2F" />
        </linearGradient>
        <linearGradient id={`${id}-tailGrad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CD853F" />
          <stop offset="80%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#F5DEB3" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-cloudBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }
        @keyframes ${id}-tailSwish {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-10deg); }
        }
        @keyframes ${id}-idle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes ${id}-staffSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ${id}-cloudSparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.6; }
        }
        .${id}-body {
          animation: ${id}-idle 2.5s ease-in-out infinite;
        }
        .${id}-cloud {
          animation: ${id}-cloudBob 3s ease-in-out infinite;
        }
        .${id}-tail {
          animation: ${id}-tailSwish 2s ease-in-out infinite;
          transform-origin: 145px 140px;
        }
        .${id}-hover .${id}-staff {
          animation: ${id}-staffSpin 0.8s linear infinite;
          transform-origin: 45px 120px;
        }
        .${id}-cloudSpark {
          animation: ${id}-cloudSparkle 2s ease-in-out infinite;
        }
        .${id}-cloudSpark2 {
          animation: ${id}-cloudSparkle 2.5s ease-in-out infinite 0.7s;
        }
      `}</style>

      {/* Somersault Cloud under feet */}
      <g className={`${id}-cloud`}>
        {/* Cloud shadow */}
        <ellipse cx="100" cy="192" rx="42" ry="6" fill="#000" opacity="0.08" />
        {/* Cloud layers */}
        <ellipse cx="100" cy="182" rx="48" ry="14" fill={`url(#${id}-cloudGrad)`} opacity="0.7" />
        <ellipse cx="75" cy="178" rx="22" ry="12" fill={`url(#${id}-cloudGrad)`} opacity="0.85" />
        <ellipse cx="125" cy="178" rx="24" ry="13" fill={`url(#${id}-cloudGrad)`} opacity="0.85" />
        <ellipse cx="100" cy="175" rx="18" ry="10" fill="white" />
        <ellipse cx="65" cy="182" rx="16" ry="9" fill={`url(#${id}-cloudGrad)`} opacity="0.6" />
        <ellipse cx="135" cy="182" rx="16" ry="9" fill={`url(#${id}-cloudGrad)`} opacity="0.6" />
        <ellipse cx="88" cy="172" rx="12" ry="7" fill="white" opacity="0.9" />
        <ellipse cx="112" cy="172" rx="12" ry="7" fill="white" opacity="0.9" />
        {/* Magical yellow tinge */}
        <ellipse cx="100" cy="178" rx="30" ry="10" fill="#FFF8DC" opacity="0.3" />
        {/* Cloud sparkle effects */}
        <circle className={`${id}-cloudSpark`} cx="80" cy="175" r="1.5" fill="#FFD700" opacity="0" />
        <circle className={`${id}-cloudSpark2`} cx="120" cy="173" r="1.2" fill="#FFD700" opacity="0" />
        <circle className={`${id}-cloudSpark`} cx="100" cy="170" r="1" fill="#FFE066" opacity="0" />
      </g>

      <g className={`${id}-body`}>
        {/* Tail */}
        <g className={`${id}-tail`}>
          <path d="M135,140 Q155,130 165,110 Q175,90 170,75 Q168,70 172,66" fill="none" stroke={`url(#${id}-tailGrad)`} strokeWidth="5" strokeLinecap="round" />
          {/* Tail fur texture */}
          <path d="M148,125 Q150,123 152,125" fill="none" stroke="#A0682A" strokeWidth="0.6" opacity="0.4" />
          <path d="M160,105 Q162,103 164,105" fill="none" stroke="#A0682A" strokeWidth="0.6" opacity="0.4" />
          <path d="M168,85 Q170,83 172,85" fill="none" stroke="#A0682A" strokeWidth="0.6" opacity="0.4" />
          {/* Tail tip - lighter */}
          <circle cx="172" cy="65" r="5" fill="#F5DEB3" />
          <circle cx="172" cy="65" r="3.5" fill="#FFE4C0" />
        </g>

        {/* Red sash/scarf billowing behind */}
        <path d="M70,122 Q55,115 42,118 Q35,122 30,130 Q38,128 45,125 Q40,135 38,145" fill={`url(#${id}-sashGrad)`} opacity="0.7" />
        <path d="M130,122 Q145,115 158,118 Q165,122 170,130 Q162,128 155,125 Q160,135 162,145" fill={`url(#${id}-sashGrad)`} opacity="0.7" />
        {/* Sash fold lines */}
        <path d="M55,118 Q48,122 42,128" fill="none" stroke="#C0392B" strokeWidth="0.6" opacity="0.4" />
        <path d="M145,118 Q152,122 158,128" fill="none" stroke="#C0392B" strokeWidth="0.6" opacity="0.4" />

        {/* Monkey fur body */}
        <ellipse cx="100" cy="135" rx="32" ry="37" fill={`url(#${id}-furGrad)`} />
        {/* Belly */}
        <ellipse cx="100" cy="140" rx="20" ry="24" fill={`url(#${id}-faceFur)`} />

        {/* Armor/tunic - red with gold trim */}
        <path d="M70,116 Q100,108 130,116 L127,128 Q100,122 73,128 Z" fill={`url(#${id}-redTunic)`} />
        {/* Gold trim top */}
        <path d="M70,116 Q100,108 130,116" fill="none" stroke={`url(#${id}-goldGrad)`} strokeWidth="2.5" />
        {/* Gold trim bottom */}
        <path d="M73,128 Q100,122 127,128" fill="none" stroke={`url(#${id}-goldGrad)`} strokeWidth="1.5" />
        {/* Cloud patterns embroidered */}
        <path d="M85,118 Q88,116 90,118 Q88,120 85,118 Z" fill="#FFD700" opacity="0.4" />
        <path d="M108,118 Q111,116 113,118 Q111,120 108,118 Z" fill="#FFD700" opacity="0.4" />
        <path d="M95,122 Q98,120 100,122 Q98,124 95,122 Z" fill="#FFD700" opacity="0.3" />
        {/* Chain mail texture at torso center */}
        <path d="M90,125 Q92,123 94,125 Q92,127 90,125 Z" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.3" />
        <path d="M96,125 Q98,123 100,125 Q98,127 96,125 Z" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.3" />
        <path d="M102,125 Q104,123 106,125 Q104,127 102,125 Z" fill="none" stroke="#DAA520" strokeWidth="0.5" opacity="0.3" />

        {/* Golden shoulder armor plates */}
        <path d="M68,115 Q60,112 58,118 Q60,124 68,122 Z" fill={`url(#${id}-armorGrad)`} stroke="#B8860B" strokeWidth="0.5" />
        <path d="M132,115 Q140,112 142,118 Q140,124 132,122 Z" fill={`url(#${id}-armorGrad)`} stroke="#B8860B" strokeWidth="0.5" />
        {/* Armor engravings */}
        <path d="M62,116 Q64,118 62,120" fill="none" stroke="#B8860B" strokeWidth="0.5" opacity="0.5" />
        <path d="M138,116 Q136,118 138,120" fill="none" stroke="#B8860B" strokeWidth="0.5" opacity="0.5" />

        {/* Tiger skin kilt */}
        <path d="M75,140 Q100,136 125,140 L128,162 Q100,166 72,162 Z" fill={`url(#${id}-tigerSkin)`} />
        {/* Tiger stripes */}
        <path d="M82,142 Q84,150 80,158" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M92,141 Q94,148 90,156" fill="none" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        <path d="M102,140 Q104,148 100,156" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <path d="M112,141 Q114,148 110,156" fill="none" stroke="#1A1A2E" strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        <path d="M120,142 Q122,150 118,158" fill="none" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

        {/* Face */}
        <circle cx="100" cy="72" r="32" fill={`url(#${id}-furGrad)`} />
        {/* Individual fur tufts around face */}
        <path d="M72,55 Q70,50 73,48 Q76,50 74,55" fill="#CD853F" />
        <path d="M78,48 Q77,43 80,42 Q83,44 80,48" fill="#DAA520" />
        <path d="M120,48 Q119,43 122,42 Q125,44 122,48" fill="#DAA520" />
        <path d="M128,55 Q130,50 127,48 Q124,50 126,55" fill="#CD853F" />
        <path d="M85,45 Q84,40 87,39 Q90,41 87,45" fill="#E8B860" />
        <path d="M113,45 Q112,40 115,39 Q118,41 115,45" fill="#E8B860" />
        <path d="M96,43 Q95,38 98,37 Q101,39 98,43" fill="#CD853F" />
        <path d="M104,43 Q103,38 106,37 Q109,39 106,43" fill="#CD853F" />

        {/* Heart-shaped monkey face with gradient */}
        <path d="M76,66 Q78,52 100,48 Q122,52 124,66 Q124,82 100,92 Q76,82 76,66 Z" fill={`url(#${id}-faceFur)`} />

        {/* Golden crown/headband (the fillet) */}
        <path d="M70,55 Q85,46 100,44 Q115,46 130,55" fill="none" stroke={`url(#${id}-goldGrad)`} strokeWidth="5" strokeLinecap="round" />
        {/* Crown engraved cloud patterns */}
        <path d="M80,50 Q83,48 85,50 Q83,52 80,50 Z" fill="#B8860B" opacity="0.5" />
        <path d="M90,48 Q93,46 95,48 Q93,50 90,48 Z" fill="#B8860B" opacity="0.5" />
        <path d="M105,48 Q108,46 110,48 Q108,50 105,48 Z" fill="#B8860B" opacity="0.5" />
        <path d="M115,50 Q118,48 120,50 Q118,52 115,50 Z" fill="#B8860B" opacity="0.5" />
        {/* Center gemstone */}
        <circle cx="100" cy="48" r="5.5" fill={`url(#${id}-goldGrad)`} stroke="#B8860B" strokeWidth="0.5" />
        <circle cx="100" cy="48" r="4" fill={`url(#${id}-jewelGrad)`} />
        {/* Gem facet highlight */}
        <path d="M98,46 L100,44 L102,46" fill="white" opacity="0.4" />
        <circle cx="99" cy="47" r="1" fill="white" opacity="0.5" />
        {/* Crown side ornaments */}
        <circle cx="76" cy="54" r="3.5" fill={`url(#${id}-goldGrad)`} />
        <circle cx="124" cy="54" r="3.5" fill={`url(#${id}-goldGrad)`} />

        {/* Monkey ears */}
        <circle cx="66" cy="65" r="12" fill={`url(#${id}-furGrad)`} />
        <circle cx="66" cy="65" r="7.5" fill={`url(#${id}-faceFur)`} />
        <circle cx="66" cy="65" r="4" fill="#E8A88C" opacity="0.4" />
        <circle cx="134" cy="65" r="12" fill={`url(#${id}-furGrad)`} />
        <circle cx="134" cy="65" r="7.5" fill={`url(#${id}-faceFur)`} />
        <circle cx="134" cy="65" r="4" fill="#E8A88C" opacity="0.4" />
        {/* Ear tufts */}
        <path d="M58,58 Q56,55 59,54" fill="none" stroke="#CD853F" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M142,58 Q144,55 141,54" fill="none" stroke="#CD853F" strokeWidth="1.5" strokeLinecap="round" />

        {/* Eyes - monkey eyes */}
        <ellipse cx="88" cy="68" rx="9" ry="8" fill="white" />
        <ellipse cx="112" cy="68" rx="9" ry="8" fill="white" />
        {/* Subtle upper lid arc */}
        <path d="M79,62 Q88,58 97,62" fill="none" stroke="#A0682A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        <path d="M103,62 Q112,58 121,62" fill="none" stroke="#A0682A" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
        {/* Irises */}
        <circle cx="90" cy="68" r="6" fill={`url(#${id}-eyeGrad)`} />
        <circle cx="114" cy="68" r="6" fill={`url(#${id}-eyeGrad)`} />
        {/* Pupils */}
        <circle cx="90" cy="68" r="3" fill="#1A1A2E" />
        <circle cx="114" cy="68" r="3" fill="#1A1A2E" />
        {/* Eye highlights */}
        <circle cx="92" cy="66" r="2.5" fill="white" opacity="0.9" />
        <circle cx="116" cy="66" r="2.5" fill="white" opacity="0.9" />
        <circle cx="89" cy="70" r="1.2" fill="white" opacity="0.5" />
        <circle cx="113" cy="70" r="1.2" fill="white" opacity="0.5" />

        {/* Cheeky eyebrows - softer */}
        <path d="M78,57 Q88,52 98,57" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
        <path d="M102,57 Q112,52 122,57" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />

        {/* Monkey nose - rounder, cuter */}
        <ellipse cx="100" cy="77" rx="4" ry="3" fill="#CD853F" />
        <circle cx="97.5" cy="77.5" r="1.5" fill="#8B4513" opacity="0.4" />
        <circle cx="102.5" cy="77.5" r="1.5" fill="#8B4513" opacity="0.4" />

        {/* Rosy cheeks */}
        <ellipse cx="78" cy="78" rx="8" ry="5" fill={`url(#${id}-blush)`} />
        <ellipse cx="122" cy="78" rx="8" ry="5" fill={`url(#${id}-blush)`} />

        {/* Big cute grin */}
        <path d="M88,84 Q100,94 112,84" fill="none" stroke="#8B4513" strokeWidth="2" strokeLinecap="round" />
        {/* Cute teeth - just two little ones */}
        <rect x="96" y="86" width="4" height="3" rx="1" fill="white" stroke="#eee" strokeWidth="0.3" />
        <rect x="100" y="86" width="4" height="3" rx="1" fill="white" stroke="#eee" strokeWidth="0.3" />

        {/* Arms */}
        <path d="M70,125 Q55,130 42,125" fill="none" stroke={`url(#${id}-furGrad)`} strokeWidth="9" strokeLinecap="round" />
        <path d="M130,122 Q142,115 150,105" fill="none" stroke={`url(#${id}-furGrad)`} strokeWidth="9" strokeLinecap="round" />
        {/* Arm shadow */}
        <path d="M70,127 Q57,132 44,127" fill="none" stroke="#A0682A" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
        {/* Hands */}
        <circle cx="40" cy="124" r="6" fill={`url(#${id}-faceFur)`} />
        <circle cx="152" cy="103" r="6" fill={`url(#${id}-faceFur)`} />

        {/* Staff (Ruyi Jingu Bang) */}
        <g className={`${id}-staff`}>
          <line x1="38" y1="85" x2="38" y2="170" stroke={`url(#${id}-staffGrad)`} strokeWidth="5" strokeLinecap="round" />
          {/* Dragon pattern engravings on shaft */}
          <path d="M36,100 Q38,95 40,100 Q38,105 36,100" fill="none" stroke="#B8860B" strokeWidth="0.6" opacity="0.5" />
          <path d="M36,115 Q38,110 40,115 Q38,120 36,115" fill="none" stroke="#B8860B" strokeWidth="0.6" opacity="0.5" />
          <path d="M36,130 Q38,125 40,130 Q38,135 36,130" fill="none" stroke="#B8860B" strokeWidth="0.6" opacity="0.5" />
          <path d="M36,145 Q38,140 40,145 Q38,150 36,145" fill="none" stroke="#B8860B" strokeWidth="0.6" opacity="0.5" />
          {/* Staff end caps - ornate */}
          <rect x="31" y="83" width="14" height="7" rx="2" fill={`url(#${id}-redTunic)`} stroke="#8B0000" strokeWidth="0.5" />
          <rect x="31" y="168" width="14" height="7" rx="2" fill={`url(#${id}-redTunic)`} stroke="#8B0000" strokeWidth="0.5" />
          {/* Cap details */}
          <line x1="33" y1="86" x2="43" y2="86" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
          <line x1="33" y1="172" x2="43" y2="172" stroke="#FFD700" strokeWidth="0.8" opacity="0.6" />
          {/* Red ribbon/tassel at top */}
          <path d="M38,83 Q35,78 33,72 Q32,68 34,66" fill="none" stroke="#E74C3C" strokeWidth="2" strokeLinecap="round" />
          <path d="M38,83 Q36,78 35,72 Q35,68 37,66" fill="none" stroke="#C0392B" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M34,65 Q33,63 34,61" fill="none" stroke="#E74C3C" strokeWidth="1" strokeLinecap="round" />
          <path d="M37,65 Q38,63 37,61" fill="none" stroke="#C0392B" strokeWidth="1" strokeLinecap="round" />
        </g>

        {/* Tiny feet on cloud */}
        <ellipse cx="88" cy="168" rx="11" ry="5.5" fill={`url(#${id}-furGrad)`} />
        <ellipse cx="112" cy="168" rx="11" ry="5.5" fill={`url(#${id}-furGrad)`} />
        {/* Toe details */}
        <path d="M81,167 Q83,165 85,167" fill="none" stroke="#A0682A" strokeWidth="0.6" opacity="0.3" />
        <path d="M105,167 Q107,165 109,167" fill="none" stroke="#A0682A" strokeWidth="0.6" opacity="0.3" />
      </g>
    </svg>
  );
};

export default SunWukongAvatar;
