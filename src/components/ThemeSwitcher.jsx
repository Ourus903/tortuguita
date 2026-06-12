import { THEMES } from '../config';

export default function ThemeSwitcher({ theme, onThemeChange }) {
  return (
    <div className="fixed bottom-6 left-6 z-[1000] flex gap-1 p-1 rounded-lg bg-slate-950/90 border border-white/10 backdrop-blur-sm">
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onThemeChange(t.id);
          }}
          title={t.label}
          className={`w-8 h-8 rounded-md text-sm transition-all ${
            theme === t.id ? 'bg-white/10 ring-1 ring-white/20' : 'opacity-50 hover:opacity-90'
          }`}
        >
          {t.emoji}
        </button>
      ))}
    </div>
  );
}
