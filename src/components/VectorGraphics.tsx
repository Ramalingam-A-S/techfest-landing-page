import React from 'react';

/**
 * Technical Crosshair & Coordinate Marker (2D Pure SVG)
 */
export const CrosshairIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4 text-cyan/60' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
    <line x1="12" y1="2" x2="12" y2="7" />
    <line x1="12" y1="17" x2="12" y2="22" />
    <line x1="2" y1="12" x2="7" y2="12" />
    <line x1="17" y1="12" x2="22" y2="12" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Radar Reticle Graphic (Pure 2D SVG)
 */
export const RadarReticle: React.FC<{ className?: string }> = ({ className = 'w-48 h-48 text-cyan/20' }) => (
  <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className={className} aria-hidden="true">
    <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="60" strokeWidth="1" />
    <circle cx="100" cy="100" r="30" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.8" />
    <line x1="100" y1="10" x2="100" y2="190" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="3" fill="currentColor" />
    {/* Coordinate markers */}
    <text x="105" y="25" fill="currentColor" fontSize="8" fontFamily="monospace">000°</text>
    <text x="175" y="105" fill="currentColor" fontSize="8" fontFamily="monospace">090°</text>
    <text x="105" y="188" fill="currentColor" fontSize="8" fontFamily="monospace">180°</text>
    <text x="15" y="105" fill="currentColor" fontSize="8" fontFamily="monospace">270°</text>
  </svg>
);

/**
 * Vector Trajectory Lines (Pure 2D SVG)
 */
export const TrajectoryVector: React.FC<{ className?: string }> = ({ className = 'w-full h-24' }) => (
  <svg viewBox="0 0 1000 120" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
    <path
      d="M0 100 Q 250 20, 500 80 T 1000 30"
      stroke="url(#cyan-grad)"
      strokeWidth="1.5"
      strokeDasharray="6 4"
    />
    <path
      d="M0 60 Q 350 110, 700 40 T 1000 90"
      stroke="rgba(255, 85, 0, 0.4)"
      strokeWidth="1"
    />
    <circle cx="500" cy="80" r="4" fill="#00F0FF" />
    <circle cx="700" cy="40" r="3" fill="#FF5500" />
    <defs>
      <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.1" />
        <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </svg>
);

/**
 * Technical Corner Brackets
 */
export const CornerBracket: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position,
  className = 'w-3 h-3 text-cyan/70'
}) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  };

  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`${rotationMap[position]} ${className}`}
      aria-hidden="true"
    >
      <path d="M1 11V1H11" />
    </svg>
  );
};
