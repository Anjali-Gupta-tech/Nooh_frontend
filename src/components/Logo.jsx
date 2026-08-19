import React from "react";

const Logo = ({ className = "h-14 w-auto" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 550 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      {/* =========================
          NOOH
      ========================= */}

      {/* N */}
      <path
        d="M25 25V135H48V68L94 135H117V25H94V92L48 25H25Z"
        fill="currentColor"
      />

      {/* First O - Window */}
      <rect
        x="145"
        y="25"
        width="110"
        height="110"
        fill="#D4AF37"
      />

      <rect
        x="155"
        y="35"
        width="90"
        height="90"
        fill="currentColor"
      />

      <rect
        x="164"
        y="44"
        width="72"
        height="72"
        fill="#D4AF37"
      />

      <rect
        x="170"
        y="50"
        width="60"
        height="60"
        fill="currentColor"
      />

      {/* Window divisions */}
      <rect
        x="198"
        y="50"
        width="4"
        height="60"
        fill="#D4AF37"
      />

      <rect
        x="170"
        y="78"
        width="60"
        height="4"
        fill="#D4AF37"
      />

      {/* Second O - Door */}
      <rect
        x="280"
        y="25"
        width="110"
        height="110"
        fill="#D4AF37"
      />

      <rect
        x="290"
        y="35"
        width="90"
        height="90"
        fill="currentColor"
      />

      <rect
        x="300"
        y="45"
        width="70"
        height="70"
        fill="#D4AF37"
      />

      <rect
        x="306"
        y="51"
        width="58"
        height="58"
        fill="currentColor"
      />

      {/* H */}
      <path
        d="M415 25V135H438V88H490V135H513V25H490V65H438V25H415Z"
        fill="currentColor"
      />

      {/* TM */}
      <text
        x="525"
        y="45"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
      >
        ™
      </text>


      {/* =========================
          TOP GOLD DIVIDER
      ========================= */}

      <line
        x1="25"
        y1="153"
        x2="255"
        y2="153"
        stroke="#B8860B"
        strokeWidth="2"
      />

      <line
        x1="280"
        y1="153"
        x2="513"
        y2="153"
        stroke="#B8860B"
        strokeWidth="2"
      />


      {/* =========================
          ELEVATED LIVING LLP
      ========================= */}

      <text
        x="270"
        y="181"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="19"
        fontWeight="500"
        letterSpacing="5"
        fill="currentColor"
      >
        ELEVATED LIVING LLP
      </text>


      {/* =========================
          BOTTOM GOLD DIVIDER
      ========================= */}

      <line
        x1="25"
        y1="202"
        x2="255"
        y2="202"
        stroke="#B8860B"
        strokeWidth="2"
      />

      <circle
        cx="270"
        cy="202"
        r="5"
        fill="#B8860B"
      />

      <line
        x1="285"
        y1="202"
        x2="513"
        y2="202"
        stroke="#B8860B"
        strokeWidth="2"
      />


      {/* =========================
          BARRISOL & NOOH
      ========================= */}

      <text
        x="25"
        y="230"
        fontFamily="Arial, sans-serif"
        fontSize="17"
        fontWeight="800"
        fill="#D71920"
      >
        BARRISOL
      </text>

      <text
        x="145"
        y="230"
        fontFamily="Arial, sans-serif"
        fontSize="17"
        fontWeight="700"
        fill="currentColor"
      >
        &amp; NOOH
      </text>

      <text
        x="255"
        y="230"
        fontFamily="Arial, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="currentColor"
      >
        JOINT VENTURE COMPANY
      </text>
    </svg>
  );
};

export default Logo;