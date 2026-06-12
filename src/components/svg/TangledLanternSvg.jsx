export default function TangledLanternSvg({ id }) {
  const gradientId = `tangledLanternGrad-${id}`;
  return (
    <svg viewBox="0 0 100 130" width="100%" height="100%">
      {/* Glow effect */}
      <rect
        x="15"
        y="15"
        width="70"
        height="100"
        rx="14"
        fill="#f59e0b"
        opacity="0.35"
        style={{ filter: 'blur(6px)' }}
      />
      {/* Paper lantern body */}
      <rect
        x="15"
        y="15"
        width="70"
        height="100"
        rx="14"
        fill={`url(#${gradientId})`}
        stroke="#d97706"
        strokeWidth="1.5"
      />
      {/* Top and Bottom wooden rims */}
      <rect x="15" y="11" width="70" height="4" rx="2" fill="#92400e" />
      <rect x="15" y="115" width="70" height="4" rx="2" fill="#92400e" />
      
      {/* Inner fire/candle source */}
      <circle cx="50" cy="85" r="12" fill="#ffffff" opacity="0.95" style={{ filter: 'blur(1px)' }} />
      <circle cx="50" cy="85" r="22" fill="#fbbf24" opacity="0.8" style={{ filter: 'blur(4px)' }} />
      <circle cx="50" cy="85" r="32" fill="#ea580c" opacity="0.45" style={{ filter: 'blur(6px)' }} />
      
      {/* Corona Sun Logo */}
      <g transform="translate(50, 60) scale(0.75)" fill="#b45309" opacity="0.85">
        <circle cx="0" cy="0" r="10" />
        <path d="M 0,-10 C 2,-14 4,-18 0,-22 C -4,-18 -2,-14 0,-10 Z" />
        <path d="M 0,10 C -2,14 -4,18 0,22 C 4,18 2,14 0,10 Z" />
        <path d="M -10,0 C -14,-2 -18,-4 -22,0 C -18,4 -14,2 -10,0 Z" />
        <path d="M 10,0 C 14,2 18,4 22,0 C 18,-4 14,-2 10,0 Z" />
        <path d="M -7,-7 C -11,-9 -14,-14 -14,-14 C -14,-14 -9,-11 -7,-7 Z" />
        <path d="M 7,7 C 11,9 14,14 14,14 C 14,14 9,11 7,7 Z" />
        <path d="M -7,7 C -9,11 -14,14 -14,14 C -14,14 -11,9 -7,7 Z" />
        <path d="M 7,-7 C 9,-11 14,-14 14,-14 C 14,-14 11,-9 7,-7 Z" />
      </g>
      
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffdf5" />
          <stop offset="30%" stopColor="#fef3c7" />
          <stop offset="70%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
