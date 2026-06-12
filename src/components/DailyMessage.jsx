import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookHeart, Heart, Sparkles, Copy, Trash2, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';
import Swal from 'sweetalert2';
import { STORAGE_KEYS } from '../config';

const swalTheme = {
  confirmButtonColor: '#f59e0b',
  background: '#1e1b4b',
  color: '#e5e7eb',
};

const dailyMessages = [
  'Buenos días mi amor ☀️ Espero que tengas un día increíble. Te quiero más de lo que puedes imaginar.',
  'Solo quería recordarte lo especial que eres para mí 💖 Tu sonrisa ilumina mi día.',
  'Cada día a tu lado es un regalo 🎁 Gracias por estar en mi vida.',
  'Te extraño más de lo que crees 💕 Eres mi pensamiento constante.',
  'Tu felicidad es mi prioridad 🌟 Espero que tengas un día maravilloso.',
  'Eres la mejor cosa que me ha pasado ✨ Te amo infinitamente.',
  'Mi día mejora solo con saber que existes 💛 Eres mi persona favorita.',
  'Recuerda que siempre estaré aquí para ti 🤝 Te quiero con todo mi corazón.',
  'Tu sonrisa es mi motivación diaria 🌸 Sonríe porque eres hermosa.',
  'Gracias por ser tú 💖 Eres perfecta tal como eres.',
];

function loadMessages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.messages);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function DailyMessage() {
  const [message, setMessage] = useState('');
  const [saved, setSaved] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setSaved(loadMessages());
  }, []);

  const persist = (list) => {
    setSaved(list);
    localStorage.setItem(STORAGE_KEYS.messages, JSON.stringify(list));
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#f59e0b', '#f43f5e', '#fda4af', '#fef3c7'],
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Escribe algo bonito',
        text: 'Tu mensaje está vacío — llena el corazón con palabras 💛',
        ...swalTheme,
      });
      return;
    }

    setIsSaving(true);
    const entry = {
      id: crypto.randomUUID(),
      text: message.trim(),
      date: new Date().toISOString(),
    };
    const next = [entry, ...saved].slice(0, 20);
    persist(next);
    fireConfetti();

    Swal.fire({
      icon: 'success',
      title: '¡Guardado en tu cofre! 💖',
      text: 'Este mensaje quedará aquí para cuando lo necesites',
      ...swalTheme,
    });

    setMessage('');
    setIsSaving(false);
  };

  const handleRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * dailyMessages.length);
    setMessage(dailyMessages[randomIndex]);
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      Swal.fire({
        icon: 'success',
        title: 'Copiado',
        text: 'Listo para pegarlo donde quieras',
        timer: 1500,
        showConfirmButton: false,
        ...swalTheme,
      });
    } catch {
      Swal.fire({ icon: 'error', title: 'No se pudo copiar', ...swalTheme });
    }
  };

  const handleDelete = (id) => {
    persist(saved.filter((m) => m.id !== id));
  };

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString('es', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  return (
    <section
      id="diario"
      className="min-h-screen flex flex-col justify-center items-center py-20 px-4 relative z-10 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <BookHeart className="text-amber-400 animate-pulse" size={28} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-amber-300 font-sans font-bold">
            Cofre de mensajes 💕
          </h2>
          <Heart className="text-rose-400 animate-pulse" size={28} fill="currentColor" />
        </div>
        <p className="text-base sm:text-lg text-amber-200/60 max-w-[560px] mx-auto font-medium">
          Escribe, guarda y vuelve a leer palabras que nacen del corazón — todo queda solo en tu navegador
        </p>
      </motion.div>

      <div className="w-full max-w-2xl flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel w-full p-8 border-2 border-amber-500/20"
        >
          <form onSubmit={handleSave} className="flex flex-col gap-5">
            <div>
              <label className="block text-amber-200 font-medium mb-2 text-sm">
                Tu mensaje de amor
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe lo que sientes hoy..."
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/30 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/30 transition-all resize-none"
              />
              <p className="text-xs text-gray-500 mt-1 text-right">{message.length}/500</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                type="button"
                onClick={handleRandomMessage}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-3 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-xl font-medium hover:bg-amber-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles size={18} />
                <span>Inspiración aleatoria</span>
              </motion.button>

              <motion.button
                type="submit"
                disabled={isSaving}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-xl font-bold shadow-[0_10px_30px_rgba(245,158,11,0.35)] flex items-center justify-center gap-2 border border-amber-300/30 disabled:opacity-50"
              >
                <Bookmark size={20} />
                <span>Guardar en el cofre</span>
              </motion.button>
            </div>
          </form>
        </motion.div>

        {saved.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 border border-amber-500/15"
          >
            <h3 className="text-xl text-amber-300 font-bold mb-5 flex items-center gap-2">
              <Heart size={18} className="text-rose-400" fill="currentColor" />
              Mensajes guardados ({saved.length})
            </h3>
            <ul className="flex flex-col gap-4 max-h-[320px] overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {saved.map((entry) => (
                  <motion.li
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-4 rounded-xl bg-slate-800/40 border border-white/5 group"
                  >
                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-3">
                      {entry.text}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs text-gray-500">{formatDate(entry.date)}</span>
                      <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                        <button
                          type="button"
                          onClick={() => handleCopy(entry.text)}
                          className="p-2 rounded-lg hover:bg-amber-500/20 text-amber-300"
                          title="Copiar"
                        >
                          <Copy size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(entry.id)}
                          className="p-2 rounded-lg hover:bg-rose-500/20 text-rose-300"
                          title="Eliminar"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        )}
      </div>
    </section>
  );
}
