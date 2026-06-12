/** Stickers decorativos estilo beagle tierno — solo ornamentación visual */

export function BeagleHearts({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 120" fill="none" aria-hidden>
      <ellipse cx="60" cy="78" rx="34" ry="26" fill="#fff" stroke="#2d2d2d" strokeWidth="1.5" />
      <ellipse cx="42" cy="52" rx="12" ry="15" fill="#2d2d2d" transform="rotate(-22 42 52)" />
      <ellipse cx="78" cy="52" rx="12" ry="15" fill="#2d2d2d" transform="rotate(22 78 52)" />
      <circle cx="52" cy="72" r="2" fill="#2d2d2d" />
      <circle cx="68" cy="72" r="2" fill="#2d2d2d" />
      <path d="M55 80 Q60 85 65 80" stroke="#2d2d2d" strokeWidth="1.2" fill="none" />
      <path
        d="M30 38 C32 22 48 14 60 20 C72 14 88 22 90 38"
        fill="#f43f5e"
        opacity="0.85"
      />
      <path d="M48 28 L60 38 L72 28" fill="#fb7185" opacity="0.6" />
    </svg>
  );
}

export function BeagleLove({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 120" fill="none" aria-hidden>
      <ellipse cx="60" cy="75" rx="32" ry="24" fill="#fff" stroke="#2d2d2d" strokeWidth="1.5" />
      <ellipse cx="43" cy="50" rx="11" ry="14" fill="#2d2d2d" transform="rotate(-18 43 50)" />
      <ellipse cx="77" cy="50" rx="11" ry="14" fill="#2d2d2d" transform="rotate(18 77 50)" />
      <path d="M38 68 Q28 58 32 48" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M82 68 Q92 58 88 48" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="60" y="105" textAnchor="middle" fontSize="18" fill="#f472b6">
        ♥
      </text>
    </svg>
  );
}

export function BeagleDreaming({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 120 120" fill="none" aria-hidden>
      <path d="M20 85 H100 V98 H20 Z" fill="#c2410c" />
      <path d="M20 85 L60 62 L100 85 Z" fill="#ea580c" />
      <ellipse cx="58" cy="78" rx="26" ry="18" fill="#fff" stroke="#2d2d2d" strokeWidth="1.5" />
      <ellipse cx="46" cy="68" rx="8" ry="10" fill="#2d2d2d" />
      <ellipse cx="70" cy="68" rx="8" ry="10" fill="#2d2d2d" />
      <path d="M52 76 L54 79 L57 76" stroke="#2d2d2d" strokeWidth="1" fill="none" />
      <circle cx="88" cy="48" r="5" fill="#c084fc" opacity="0.5" />
      <circle cx="96" cy="38" r="7" fill="#c084fc" opacity="0.35" />
      <circle cx="102" cy="28" r="9" fill="#c084fc" opacity="0.2" />
    </svg>
  );
}

export function HeartSparkle({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 62 C20 42 8 28 18 18 C26 10 36 14 40 22 C44 14 54 10 62 18 C72 28 60 42 40 62Z"
        fill="#f472b6"
        opacity="0.75"
      />
      <path d="M12 20 L14 14 L20 12 L14 10 L12 4 L10 10 L4 12 L10 14 Z" fill="#fde68a" />
      <path d="M62 8 L63 5 L66 4 L63 3 L62 0 L61 3 L58 4 L61 5 Z" fill="#fde68a" opacity="0.8" />
    </svg>
  );
}

export function RomanticBow({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 60" fill="none" aria-hidden>
      <path d="M50 30 C30 5 5 5 5 25 C5 40 25 35 50 30Z" fill="#f9a8d4" opacity="0.7" />
      <path d="M50 30 C70 5 95 5 95 25 C95 40 75 35 50 30Z" fill="#f9a8d4" opacity="0.7" />
      <circle cx="50" cy="32" r="6" fill="#f472b6" />
      <path d="M50 38 V55" stroke="#f472b6" strokeWidth="2" />
    </svg>
  );
}
