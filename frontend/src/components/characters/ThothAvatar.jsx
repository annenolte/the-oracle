import React from 'react';

const ThothAvatar = ({ size = 120, hover = false }) => {
  const id = 'thoth-' + React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={hover ? `${id}-hover` : ''}
    >
      <defs>
        {/* Skin/feather gradients */}
        <radialGradient id={`${id}-featherBase`} cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="70%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#b8b8b8" />
        </radialGradient>
        <linearGradient id={`${id}-beakGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="50%" stopColor="#333333" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
        <linearGradient id={`${id}-tealBody`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1ABC9C" />
          <stop offset="100%" stopColor="#0e8c73" />
        </linearGradient>
        <linearGradient id={`${id}-robeWhite`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f5f5f0" />
          <stop offset="100%" stopColor="#e8e4d8" />
        </linearGradient>
        <linearGradient id={`${id}-goldGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="30%" stopColor="#FFD700" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id={`${id}-silverGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="30%" stopColor="#D0D0D0" />
          <stop offset="60%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
        <radialGradient id={`${id}-moonGlow`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E0FFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#C0C0C0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#A0A0A0" stopOpacity="0.2" />
        </radialGradient>
        <linearGradient id={`${id}-sunDiscGrad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <radialGradient id={`${id}-eyeIris`} cx="40%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <linearGradient id={`${id}-papyrus`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8DC" />
          <stop offset="50%" stopColor="#F5E6C8" />
          <stop offset="100%" stopColor="#E8D5A8" />
        </linearGradient>
        <linearGradient id={`${id}-ankhGold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#CC9900" />
        </linearGradient>
        <radialGradient id={`${id}-tealNeck`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#2CDBB5" />
          <stop offset="100%" stopColor="#15967A" />
        </radialGradient>
        <linearGradient id={`${id}-wingFeather`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="60%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id={`${id}-pedestalGrad`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A76A" />
          <stop offset="100%" stopColor="#A67C52" />
        </linearGradient>
      </defs>

      <style>{`
        @keyframes ${id}-moonGlowAnim {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes ${id}-scrollSway {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes ${id}-headTilt {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-8deg); }
          70% { transform: rotate(5deg); }
        }
        @keyframes ${id}-idle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes ${id}-penDip {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .${id}-body {
          animation: ${id}-idle 3.5s ease-in-out infinite;
        }
        .${id}-moonAura {
          animation: ${id}-moonGlowAnim 3s ease-in-out infinite;
        }
        .${id}-scroll {
          animation: ${id}-scrollSway 4s ease-in-out infinite;
          transform-origin: 42px 155px;
        }
        .${id}-pen {
          animation: ${id}-penDip 2.5s ease-in-out infinite;
        }
        .${id}-hover .${id}-head {
          animation: ${id}-headTilt 1.5s ease-in-out infinite;
          transform-origin: 100px 68px;
        }
      `}</style>

      {/* Moon and sun disc behind head */}
      <g>
        {/* Moon aura glow */}
        <circle className={`${id}-moonAura`} cx="148" cy="38" r="40" fill="#00CED1" opacity="0.3" />
        {/* Sun disc */}
        <circle cx="148" cy="38" r="16" fill={`url(#${id}-sunDiscGrad)`} opacity="0.8" />
        {/* Crescent moon */}
        <path d="M138,20 Q132,10 140,4 Q150,0 158,6 Q165,14 162,26 Q158,36 148,38 Q155,30 154,20 Q152,12 145,10 Q138,12 138,20 Z" fill={`url(#${id}-silverGrad)`} />
        {/* Moon craters */}
        <circle cx="146" cy="12" r="2" fill="#A8A8A8" opacity="0.5" />
        <circle cx="152" cy="18" r="1.5" fill="#A8A8A8" opacity="0.4" />
        <circle cx="143" cy="20" r="1" fill="#A8A8A8" opacity="0.3" />
      </g>

      <g className={`${id}-body`}>
        {/* Shadow under body */}
        <ellipse cx="100" cy="192" rx="35" ry="5" fill="#000" opacity="0.1" />

        {/* Pedestal with hieroglyphs */}
        <rect x="72" y="183" width="56" height="12" rx="3" fill={`url(#${id}-pedestalGrad)`} />
        <line x1="80" y1="187" x2="80" y2="192" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
        <line x1="88" y1="186" x2="88" y2="193" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
        <circle cx="92" cy="189" r="1.2" fill="#8B6914" opacity="0.4" />
        <line x1="96" y1="187" x2="96" y2="191" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
        <path d="M102,186 L104,190 L106,186" fill="none" stroke="#8B6914" strokeWidth="0.7" opacity="0.5" />
        <line x1="110" y1="186" x2="110" y2="193" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
        <circle cx="116" cy="189" r="1.2" fill="#8B6914" opacity="0.4" />
        <line x1="120" y1="187" x2="120" y2="192" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />

        {/* Small folded ibis wings */}
        {/* Left wing */}
        <g>
          <path d="M60,115 Q50,120 48,135 Q50,140 55,138 Q52,145 50,152 Q55,148 60,142 L63,155" fill={`url(#${id}-wingFeather)`} opacity="0.7" />
          <path d="M60,118 Q54,125 52,132" fill="none" stroke="#c8c8c8" strokeWidth="0.8" opacity="0.5" />
          <path d="M61,125 Q56,132 54,140" fill="none" stroke="#c8c8c8" strokeWidth="0.7" opacity="0.4" />
          <path d="M62,132 Q58,140 56,148" fill="none" stroke="#c8c8c8" strokeWidth="0.6" opacity="0.4" />
        </g>
        {/* Right wing */}
        <g>
          <path d="M140,115 Q150,120 152,135 Q150,140 145,138 Q148,145 150,152 Q145,148 140,142 L137,155" fill={`url(#${id}-wingFeather)`} opacity="0.7" />
          <path d="M140,118 Q146,125 148,132" fill="none" stroke="#c8c8c8" strokeWidth="0.8" opacity="0.5" />
          <path d="M139,125 Q144,132 146,140" fill="none" stroke="#c8c8c8" strokeWidth="0.7" opacity="0.4" />
          <path d="M138,132 Q142,140 144,148" fill="none" stroke="#c8c8c8" strokeWidth="0.6" opacity="0.4" />
        </g>

        {/* Body - White priestly kilt/shendyt */}
        <path d="M65,108 Q100,103 135,108 L142,182 Q100,187 58,182 Z" fill={`url(#${id}-robeWhite)`} />
        {/* Pleated fold lines */}
        <line x1="75" y1="130" x2="70" y2="182" stroke="#d0ccc0" strokeWidth="0.8" opacity="0.5" />
        <line x1="82" y1="128" x2="78" y2="182" stroke="#d0ccc0" strokeWidth="0.7" opacity="0.4" />
        <line x1="90" y1="126" x2="88" y2="182" stroke="#d0ccc0" strokeWidth="0.8" opacity="0.5" />
        <line x1="100" y1="125" x2="100" y2="182" stroke="#d0ccc0" strokeWidth="0.8" opacity="0.5" />
        <line x1="110" y1="126" x2="112" y2="182" stroke="#d0ccc0" strokeWidth="0.8" opacity="0.5" />
        <line x1="118" y1="128" x2="122" y2="182" stroke="#d0ccc0" strokeWidth="0.7" opacity="0.4" />
        <line x1="125" y1="130" x2="130" y2="182" stroke="#d0ccc0" strokeWidth="0.8" opacity="0.5" />

        {/* Broad collar / usekh necklace */}
        <path d="M68,108 Q100,100 132,108 Q120,118 100,120 Q80,118 68,108 Z" fill={`url(#${id}-goldGrad)`} />
        {/* Collar bands */}
        <path d="M71,110 Q100,103 129,110" fill="none" stroke="#1ABC9C" strokeWidth="2.5" opacity="0.8" />
        <path d="M73,114 Q100,108 127,114" fill="none" stroke="#00CED1" strokeWidth="2" opacity="0.7" />
        <path d="M76,117 Q100,112 124,117" fill="none" stroke="#1ABC9C" strokeWidth="1.5" opacity="0.6" />
        {/* Jewels on collar */}
        <circle cx="85" cy="112" r="2" fill="#00CED1" opacity="0.8" />
        <circle cx="100" cy="109" r="2.5" fill="#FFD700" opacity="0.9" />
        <circle cx="115" cy="112" r="2" fill="#00CED1" opacity="0.8" />
        <circle cx="78" cy="115" r="1.5" fill="#FFD700" opacity="0.7" />
        <circle cx="122" cy="115" r="1.5" fill="#FFD700" opacity="0.7" />

        {/* Gold and teal banded trim at kilt waist */}
        <rect x="68" y="133" width="64" height="7" rx="2" fill={`url(#${id}-goldGrad)`} />
        <line x1="68" y1="135" x2="132" y2="135" stroke="#1ABC9C" strokeWidth="1.5" />
        <line x1="68" y1="138" x2="132" y2="138" stroke="#00CED1" strokeWidth="1" />

        {/* Ankh hanging from belt */}
        <g>
          <ellipse cx="100" cy="144" rx="4" ry="5" fill="none" stroke={`url(#${id}-ankhGold)`} strokeWidth="2" />
          <line x1="100" y1="149" x2="100" y2="160" stroke={`url(#${id}-ankhGold)`} strokeWidth="2" />
          <line x1="96" y1="154" x2="104" y2="154" stroke={`url(#${id}-ankhGold)`} strokeWidth="2" />
          {/* Engraved detail lines on ankh */}
          <line x1="100" y1="150" x2="100" y2="152" stroke="#B8860B" strokeWidth="0.5" opacity="0.6" />
        </g>

        {/* Ibis Head */}
        <g className={`${id}-head`}>
          {/* Neck with teal gradient */}
          <rect x="90" y="88" width="20" height="22" rx="10" fill={`url(#${id}-tealNeck)`} />

          {/* Head - ibis shape with feather base */}
          <ellipse cx="100" cy="65" rx="24" ry="27" fill={`url(#${id}-featherBase)`} />

          {/* Individual feather shapes on head */}
          <path d="M80,50 Q85,45 90,50 Q85,48 80,50 Z" fill="#e0e0e0" opacity="0.6" />
          <path d="M88,46 Q93,41 98,46 Q93,43 88,46 Z" fill="#e8e8e8" opacity="0.5" />
          <path d="M95,44 Q100,39 105,44 Q100,41 95,44 Z" fill="#e0e0e0" opacity="0.6" />
          <path d="M103,46 Q108,41 113,46 Q108,43 103,46 Z" fill="#e8e8e8" opacity="0.5" />
          <path d="M110,50 Q115,45 120,50 Q115,48 110,50 Z" fill="#e0e0e0" opacity="0.6" />
          {/* Lower feather row */}
          <path d="M82,56 Q87,52 92,56 Q87,54 82,56 Z" fill="#d8d8d8" opacity="0.5" />
          <path d="M96,53 Q101,49 106,53 Q101,51 96,53 Z" fill="#d8d8d8" opacity="0.5" />
          <path d="M108,56 Q113,52 118,56 Q113,54 108,56 Z" fill="#d8d8d8" opacity="0.5" />

          {/* Teal eye markings - Egyptian style */}
          <path d="M104,52 Q108,50 116,52 Q120,54 122,58 Q118,56 114,55 Q110,54 106,55 Q104,54 104,52 Z" fill="#00CED1" opacity="0.8" />
          <path d="M118,60 Q122,64 124,70" fill="none" stroke="#00CED1" strokeWidth="1.5" opacity="0.6" />

          {/* Eye - bird eye */}
          <ellipse cx="112" cy="58" rx="8" ry="7" fill="white" />
          {/* Subtle upper lid arc */}
          <path d="M104,53 Q112,49 120,53" fill="none" stroke="#999" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
          {/* Iris */}
          <circle cx="113" cy="58" r="5" fill={`url(#${id}-eyeIris)`} />
          {/* Pupil */}
          <circle cx="113" cy="58" r="2.5" fill="#1A1A2E" />
          {/* Eye highlights */}
          <circle cx="115" cy="56" r="2" fill="white" opacity="0.9" />
          <circle cx="112" cy="60" r="1" fill="white" opacity="0.5" />

          {/* Ibis long curved beak with gradient */}
          <path d="M120,60 Q130,57 138,58 Q145,60 148,65 Q146,68 140,67 Q135,66 128,65 Q124,64 120,62 Z" fill={`url(#${id}-beakGrad)`} />
          {/* Beak highlight line */}
          <path d="M122,61 Q132,59 142,62" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.5" />
          {/* Nostril */}
          <circle cx="130" cy="62" r="1" fill="#000" opacity="0.4" />

          {/* Headdress - crescent moon on sun disc */}
          {/* Sun disc base */}
          <circle cx="100" cy="36" r="9" fill={`url(#${id}-sunDiscGrad)`} />
          <circle cx="100" cy="36" r="7" fill={`url(#${id}-sunDiscGrad)`} stroke="#DAA520" strokeWidth="0.5" />
          {/* Crescent moon on top */}
          <path d="M92,30 Q88,22 92,16 Q98,12 104,14 Q110,18 108,26 Q106,30 100,32 Q104,26 103,20 Q100,16 96,18 Q93,22 94,28 Z" fill={`url(#${id}-silverGrad)`} />
          {/* Moon surface details */}
          <circle cx="98" cy="18" r="1" fill="#A0A0A0" opacity="0.4" />
          <circle cx="102" cy="22" r="0.8" fill="#A0A0A0" opacity="0.3" />

          {/* Head stripe accents */}
          <path d="M82,55 Q90,50 100,48" fill="none" stroke="#00CED1" strokeWidth="1.5" opacity="0.6" />
          <path d="M80,60 Q88,56 96,54" fill="none" stroke="#1ABC9C" strokeWidth="1" opacity="0.4" />
        </g>

        {/* Arms */}
        <path d="M65,115 Q50,128 42,142" fill="none" stroke={`url(#${id}-tealBody)`} strokeWidth="9" strokeLinecap="round" />
        <path d="M135,115 Q148,126 150,138" fill="none" stroke={`url(#${id}-tealBody)`} strokeWidth="9" strokeLinecap="round" />
        {/* Arm shadow/dimension */}
        <path d="M65,117 Q52,130 44,143" fill="none" stroke="#0e8c73" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

        {/* Scroll in left hand */}
        <g className={`${id}-scroll`}>
          {/* Scroll shadow */}
          <ellipse cx="44" cy="176" rx="16" ry="3" fill="#000" opacity="0.1" />
          {/* Scroll body */}
          <rect x="26" y="136" width="32" height="38" rx="3" fill={`url(#${id}-papyrus)`} />
          {/* Scroll roll top */}
          <ellipse cx="42" cy="136" rx="16" ry="4" fill="#E8D5A8" stroke="#C0A878" strokeWidth="0.5" />
          <ellipse cx="42" cy="136" rx="16" ry="3" fill="#F0E0C0" />
          {/* Scroll roll bottom */}
          <ellipse cx="42" cy="174" rx="16" ry="4" fill="#E8D5A8" stroke="#C0A878" strokeWidth="0.5" />
          <ellipse cx="42" cy="174" rx="16" ry="3" fill="#F0E0C0" />
          {/* Hieroglyph-like marks */}
          <path d="M32,143 L36,143 L34,146" fill="none" stroke="#8B7355" strokeWidth="0.8" opacity="0.6" />
          <line x1="38" y1="143" x2="52" y2="143" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
          <path d="M32,148 Q34,146 36,148" fill="none" stroke="#8B7355" strokeWidth="0.7" opacity="0.5" />
          <line x1="38" y1="148" x2="50" y2="148" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
          <circle cx="34" cy="153" r="1.5" fill="none" stroke="#8B7355" strokeWidth="0.6" opacity="0.5" />
          <line x1="38" y1="153" x2="52" y2="153" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
          <path d="M32,158 L35,156 L35,160" fill="none" stroke="#8B7355" strokeWidth="0.7" opacity="0.5" />
          <line x1="38" y1="158" x2="48" y2="158" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
          <path d="M32,163 L36,163" fill="none" stroke="#8B7355" strokeWidth="0.8" opacity="0.5" />
          <line x1="38" y1="163" x2="52" y2="163" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
          <path d="M32,168 Q34,166 36,168 Q34,170 32,168 Z" fill="#8B7355" opacity="0.4" />
          <line x1="38" y1="168" x2="50" y2="168" stroke="#1ABC9C" strokeWidth="0.8" opacity="0.5" />
        </g>

        {/* Left hand holding scroll */}
        <circle cx="40" cy="144" r="5" fill={`url(#${id}-tealNeck)`} />

        {/* Right hand holding reed pen */}
        <g className={`${id}-pen`}>
          <circle cx="152" cy="140" r="5.5" fill={`url(#${id}-tealNeck)`} />
          {/* Reed pen */}
          <line x1="154" y1="136" x2="162" y2="118" stroke="#C4A35A" strokeWidth="2.5" strokeLinecap="round" />
          {/* Pen tip with ink */}
          <line x1="162" y1="118" x2="164" y2="114" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" />
          {/* Ink droplet */}
          <circle cx="164" cy="113" r="1.2" fill="#1A1A2E" opacity="0.7" />
        </g>

        {/* Bare feet on pedestal */}
        <ellipse cx="85" cy="183" rx="11" ry="4" fill={`url(#${id}-tealNeck)`} />
        <ellipse cx="115" cy="183" rx="11" ry="4" fill={`url(#${id}-tealNeck)`} />
        {/* Toe details */}
        <path d="M78,182 Q80,180 82,182" fill="none" stroke="#0e8c73" strokeWidth="0.6" opacity="0.4" />
        <path d="M108,182 Q110,180 112,182" fill="none" stroke="#0e8c73" strokeWidth="0.6" opacity="0.4" />
      </g>
    </svg>
  );
};

export default ThothAvatar;
