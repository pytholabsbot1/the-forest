'use client';

import { motion } from 'framer-motion';

const zones = [
  { id: 'golf', label: 'Executive 9-Hole', cx: 45, cy: 48, color: '#2d5a3f' },
  { id: 'clubhouse', label: 'Clubhouse', cx: 62, cy: 42, color: '#c8a561' },
  { id: 'water', label: 'Water Body', cx: 55, cy: 68, color: '#4a7fb5' },
  { id: 'estate', label: 'Estate Plots', cx: 30, cy: 35, color: '#8b9d7e' },
  { id: 'premium', label: 'Premium Zone', cx: 72, cy: 58, color: '#8b9d7e' },
  { id: 'forest', label: 'Forest Edge', cx: 20, cy: 70, color: '#1a3a26' },
  { id: 'entry', label: 'Main Entry', cx: 38, cy: 22, color: '#c8a561' },
];

export function MasterplanSVG() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      style={{ filter: 'drop-shadow(0 0 20px rgba(200,165,97,0.15))' }}
    >
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(37,76,58,0.08)" />
          <stop offset="100%" stopColor="rgba(11,31,24,0.02)" />
        </radialGradient>
        <pattern id="contour" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="8" fill="none" stroke="rgba(200,165,97,0.12)" strokeWidth="0.3" />
          <circle cx="10" cy="10" r="14" fill="none" stroke="rgba(200,165,97,0.06)" strokeWidth="0.2" />
        </pattern>
      </defs>

      <rect width="100" height="100" rx="3" fill="url(#bgGrad)" />
      <rect width="100" height="100" rx="3" fill="url(#contour)" />

      <circle cx="50" cy="52" r="38" fill="none" stroke="rgba(200,165,97,0.3)" strokeWidth="0.3" strokeDasharray="2 3" />
      <circle cx="50" cy="52" r="28" fill="none" stroke="rgba(200,165,97,0.2)" strokeWidth="0.2" strokeDasharray="1.5 3" />
      <circle cx="50" cy="52" r="18" fill="none" stroke="rgba(200,165,97,0.25)" strokeWidth="0.35" />

      <motion.ellipse
        cx="45" cy="48" rx="18" ry="12"
        fill="rgba(45,90,63,0.12)"
        stroke="rgba(45,90,63,0.35)"
        strokeWidth="0.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.ellipse
        cx="55" cy="68" rx="10" ry="7"
        fill="rgba(74,127,181,0.12)"
        stroke="rgba(74,127,181,0.3)"
        strokeWidth="0.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <motion.ellipse
        cx="20" cy="70" rx="14" ry="10"
        fill="rgba(26,58,38,0.1)"
        stroke="rgba(26,58,38,0.25)"
        strokeWidth="0.5"
        strokeDasharray="1 2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />

      <motion.rect
        x="27" y="30" width="14" height="10" rx="1"
        fill="rgba(139,157,126,0.1)"
        stroke="rgba(139,157,126,0.3)"
        strokeWidth="0.4"
        strokeDasharray="1 2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      <motion.rect
        x="68" y="54" width="12" height="10" rx="1"
        fill="rgba(139,157,126,0.1)"
        stroke="rgba(139,157,126,0.3)"
        strokeWidth="0.4"
        strokeDasharray="1 2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.circle
        cx="62" cy="42" r="4"
        fill="rgba(200,165,97,0.15)"
        stroke="rgba(200,165,97,0.4)"
        strokeWidth="0.6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <rect x="60" y="40.5" width="4" height="3" rx="0.5" fill="rgba(200,165,97,0.6)" />

      {zones.map((zone, i) => (
        <g key={zone.id}>
          <line
            x1={zone.cx} y1={zone.cy - 3}
            x2={zone.cx} y2={zone.cy - 10}
            stroke="rgba(200,165,97,0.25)"
            strokeWidth="0.2"
          />
          <motion.circle
            cx={zone.cx} cy={zone.cy - 12}
            r="0.6"
            fill="rgba(200,165,97,0.5)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
          />
          <motion.text
            x={zone.cx}
            y={zone.cy - 14}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            fontSize="2"
            fontFamily="Inter, sans-serif"
            fontWeight={300}
            letterSpacing="0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
          >
            {zone.label}
          </motion.text>
        </g>
      ))}

      <path
        d="M 38 25 Q 40 30 48 28 Q 55 26 50 35"
        fill="none"
        stroke="rgba(200,165,97,0.35)"
        strokeWidth="0.5"
        strokeDasharray="1.5 2"
        markerEnd="url(#arrowGold)"
      />
      <defs>
        <marker id="arrowGold" viewBox="0 0 3 3" refX="3" refY="1.5" markerWidth="3" markerHeight="3" orient="auto">
          <path d="M 0 0 L 3 1.5 L 0 3 Z" fill="rgba(200,165,97,0.5)" />
        </marker>
      </defs>

      <text
        x="50" y="94"
        textAnchor="middle"
        fill="rgba(200,165,97,0.5)"
        fontSize="2.2"
        fontFamily="Cormorant Garamond, serif"
        fontStyle="italic"
        letterSpacing="1"
      >
        Indicative Composition
      </text>

      <text
        x="50" y="97"
        textAnchor="middle"
        fill="rgba(200,165,97,0.3)"
        fontSize="1.5"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.8"
      >
        ESTATE CORE
      </text>
    </svg>
  );
}
