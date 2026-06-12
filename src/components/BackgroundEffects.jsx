import { useMemo } from 'react';

const themeAccents = {
  lantern: { star: 'rgba(253, 224, 138, 0.7)', glow: '#fbbf24' },
  twilight: { star: 'rgba(249, 168, 212, 0.6)', glow: '#f472b6' },
  kingdom: { star: 'rgba(134, 239, 172, 0.5)', glow: '#86efac' },
};

export default function BackgroundEffects({ theme = 'lantern' }) {
  const accent = themeAccents[theme] || themeAccents.lantern;

  const stars = useMemo(
    () =>
      Array.from({ length: 55 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 3 + 2}s`,
        size: `${Math.random() * 1.5 + 0.5}px`,
      })),
    []
  );

  const lanterns = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 18}s`,
        duration: `${Math.random() * 12 + 12}s`,
        size: `${Math.random() * 16 + 22}px`,
        drift: `${Math.random() * 80 - 40}px`,
        rotation: `${Math.random() * 24 - 12}deg`,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% -5%, rgba(251, 191, 36, 0.12), transparent 55%), radial-gradient(ellipse 50% 30% at 80% 100%, rgba(124, 58, 237, 0.15), transparent)',
        }}
      />

      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            backgroundColor: accent.star,
            borderRadius: '50%',
            animation: `twinkle ${star.duration} infinite alternate`,
            animationDelay: star.delay,
            boxShadow: `0 0 6px ${accent.glow}`,
          }}
        />
      ))}

      {lanterns.map((lan) => (
        <div
          key={lan.id}
          style={{
            position: 'absolute',
            left: lan.left,
            bottom: '-40px',
            width: lan.size,
            height: `calc(${lan.size} * 1.2)`,
            opacity: 0.55,
            animation: `floatLantern ${lan.duration} infinite linear`,
            animationDelay: lan.delay,
            '--drift': lan.drift,
            '--rotation': lan.rotation,
          }}
        >
          <svg viewBox="0 0 100 120" width="100%" height="100%">
            <path
              d="M20,30 Q50,0 80,30 L75,85 Q50,105 25,85 Z"
              fill={accent.glow}
              opacity="0.2"
              style={{ filter: 'blur(4px)' }}
            />
            <path d="M20,30 Q50,0 80,30 L75,85 Q50,105 25,85 Z" fill={`url(#lg-${theme})`} />
            <circle cx="50" cy="55" r="10" fill="#fffef5" opacity="0.85" />
            <circle cx="50" cy="55" r="5" fill={accent.glow} />
            <defs>
              <linearGradient id={`lg-${theme}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="100%" stopColor={accent.glow} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
