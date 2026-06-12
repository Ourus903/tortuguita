import { motion } from 'framer-motion';

const memories = [
  {
    id: 1,
    emoji: '🌅',
    gradient: 'from-amber-600/40 via-orange-500/30 to-rose-600/40',
    text: 'Nuestras risas compartidas y momentos que guardo como tesoro.',
  },
  {
    id: 2,
    emoji: '💬',
    gradient: 'from-indigo-600/40 via-violet-500/30 to-fuchsia-600/40',
    text: 'Las conversaciones infinitas que alegran el alma y calman el día.',
  },
  {
    id: 3,
    emoji: '🌙',
    gradient: 'from-teal-600/40 via-cyan-500/30 to-blue-600/40',
    text: 'Nuestros planes, sueños y cada instante que quiero repetir contigo.',
  },
];

export default function MemoryGallery() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title mb-3">Nuestro libro de recuerdos 🍯</h2>
        <p className="section-subtitle">
          Momentos que brillan aunque no estén en una foto — porque viven en el corazón
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px]"
      >
        {memories.map((mem, idx) => (
          <motion.article
            key={mem.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-panel overflow-hidden flex flex-col transition-all duration-300 hover:shadow-[0_15px_30px_rgba(245,158,11,0.12)] hover:border-amber-500/25"
          >
            <div
              className={`relative aspect-[4/3] w-full bg-gradient-to-br ${mem.gradient} flex items-center justify-center`}
            >
              <span className="text-7xl drop-shadow-lg select-none">{mem.emoji}</span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6 flex-grow flex items-center justify-center">
              <p className="text-sm sm:text-base text-gray-200 text-center font-medium leading-relaxed">
                {mem.text}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
