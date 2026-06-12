export default function LanternSvg({ id }) {
  const gradientId = `lanternGradApp-${id}`;
  return (
    <svg viewBox="0 0 100 120" width="100%" height="100%" opacity="0.85">
      <path
        d="M20,30 Q50,0 80,30 L75,85 Q50,105 25,85 Z"
        fill="var(--lantern-glow, #ffffff)"
        opacity="0.15"
        style={{ filter: 'blur(5px)' }}
      />
      <path d="M20,30 Q50,0 80,30 L75,85 Q50,105 25,85 Z" fill={`url(#${gradientId})`} />
      <circle cx="50" cy="55" r="10" fill="#fff" opacity="0.8" />
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
      </defs>
    </svg>
  );
}
