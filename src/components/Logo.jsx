import React from 'react';

const Logo = ({ className = "h-12" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 650 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* N - Left Letter */}
      <path
        d="M25 25 L25 135 L45 135 L45 65 L90 135 L110 135 L110 25 L90 25 L90 95 L45 25 Z"
        fill="currentColor"
      />

      {/* First O - Window Frame */}
      <g>
        {/* Outer Gold Frame */}
        <rect
          x="150"
          y="25"
          width="110"
          height="110"
          fill="#d4af37"
          rx="5"
        />

        {/* White Inner Frame */}
        <rect
          x="160"
          y="35"
          width="90"
          height="90"
          fill="#ffffff"
          rx="3"
        />

        {/* Inner Gold Frame */}
        <rect
          x="165"
          y="40"
          width="80"
          height="80"
          fill="#d4af37"
          rx="2"
        />

        {/* White Window Area */}
        <rect
          x="170"
          y="45"
          width="70"
          height="70"
          fill="#ffffff"
        />

        {/* Vertical Window Divider */}
        <rect
          x="203"
          y="45"
          width="4"
          height="70"
          fill="#d4af37"
        />

        {/* Horizontal Window Divider */}
        <rect
          x="170"
          y="77.5"
          width="70"
          height="4"
          fill="#d4af37"
        />
      </g>

      {/* Second O - Door Frame */}
      <g>
        {/* Outer Gold Frame */}
        <rect
          x="290"
          y="25"
          width="110"
          height="110"
          fill="#d4af37"
          rx="5"
        />

        {/* White Middle Frame */}
        <rect
          x="300"
          y="35"
          width="90"
          height="90"
          fill="#ffffff"
          rx="3"
        />

        {/* Inner Gold Door */}
        <rect
          x="310"
          y="45"
          width="70"
          height="70"
          fill="#d4af37"
        />

        {/* White Door Panel */}
        <rect
          x="315"
          y="50"
          width="60"
          height="60"
          fill="#ffffff"
        />
      </g>

      {/* H - Right Letter */}
      <path
        d="M430 25 L430 135 L450 135 L450 85 L495 85 L495 135 L515 135 L515 25 L495 25 L495 65 L450 65 L450 25 Z"
        fill="currentColor"
      />

      {/* Trademark */}
      <text
        x="540"
        y="45"
        style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontSize: '24px',
          fill: 'currentColor',
          fontWeight: '700',
        }}
      >
        ™
      </text>

      {/* ELEVATED LIVING LLP */}
      <text
        x="25"
        y="165"
        textLength="490"
        lengthAdjust="spacingAndGlyphs"
        style={{
          fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
          fontSize: '20px',
          fill: 'currentColor',
          fontWeight: '600',
          letterSpacing: '1px',
        }}
      >
        ELEVATED LIVING LLP
      </text>
    </svg>
  );
};

export default Logo;