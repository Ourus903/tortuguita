import { motion } from 'framer-motion';
import { Heart, Shield, Sun, MessageCircle, Sparkles, Compass } from 'lucide-react';
import SectionShell from './SectionShell';

const items = [
  {
    icon: Heart,
    title: 'Presencia',
    text: 'Valoro que seas tú misma, sin intentar ser alguien más.',
    tilt: 'tilt-1',
    offset: 'sm:mt-0',
  },
  {
    icon: Shield,
    title: 'Confianza',
    text: 'Valoro la confianza que hemos construido juntos.',
    tilt: 'tilt-4',
    offset: 'sm:mt-6 sm:-ml-2',
  },
  {
    icon: Sun,
    title: 'Abrazos',
    text: 'Valoro tus abrazos, porque me hacen sentir en casa.',
    tilt: 'tilt-3',
    offset: 'sm:-mt-4',
  },
  {
    icon: MessageCircle,
    title: 'Conexión',
    text: 'Tu manera de demostrar amor en los pequeños detalles.',
    tilt: 'tilt-2',
    offset: 'sm:mt-8',
  },
  {
    icon: Sparkles,
    title: 'Tú',
    text: 'Valoro cada una de las versiones de ti: la alegre, la seria, la soñadora, la fuerte y la sensible.',
    tilt: 'tilt-1',
    offset: 'sm:-mt-2',
  },
  {
    icon: Compass,
    title: 'Fuerza',
    text: 'Valoro tu fortaleza cuando enfrentas los desafíos.',
    tilt: 'tilt-3',
    offset: 'sm:mt-4',
  },
];

export default function HighlightsSection() {
  return (
    <SectionShell
      id="esencia"
      title="Lo que más valoro"
      subtitle="Porque te amo en muchas formas distintas ♥"
    >
      {/* max-w-3xl para dar más espacio horizontal a las 6 tarjetas y pb-16 para separarlo bien del siguiente bloque */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto pb-16 px-4">
        {items.map((item, idx) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`romantic-card ${item.tilt} tilt-box-hover p-6 flex gap-4 items-start ${item.offset}`}
          >
            <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-rose-500/20 text-rose-300 border border-rose-400/20 shadow-sm">
              <item.icon size={20} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--heading)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-muted)] font-medium">
                {item.text}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}