import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'esencia', label: 'Esencia' },
  { id: 'foto', label: 'Foto' },
  { id: 'cartas', label: 'Cartas' },
  { id: 'musica', label: 'Música' },
  { id: 'razones', label: 'Razones' },
  { id: 'secreto', label: 'Secreto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-2' : 'py-3'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo('inicio')}
          className="font-cursive text-xl sm:text-2xl transition-colors"
          style={{ color: 'var(--heading)' }}
        >
          Tortuguita
        </button>

        <ul className="hidden lg:flex items-center gap-2">
          {links.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className="px-2.5 py-1.5 text-xs text-gray-400 hover:text-gray-200 rounded-md hover:bg-white/5 transition-all font-medium"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-400 rounded-md hover:bg-white/5"
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-slate-950/95 border-b border-white/5"
          >
            <ul className="flex flex-col p-3 gap-0.5 max-h-[70vh] overflow-y-auto">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => goTo(link.id)}
                    className="w-full text-left px-3 py-2.5 text-sm text-gray-300 hover:bg-white/5 rounded-lg"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
