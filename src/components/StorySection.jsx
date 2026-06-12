import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import PolaroidFrame from './PolaroidFrame';

export default function StorySection() {
  return (
    <section id="historia" className="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative z-10 w-full">
      <div className="glass-panel max-w-[850px] w-full p-8 md:p-14 flex flex-col items-center gap-8 md:gap-10">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="text-amber-400 animate-pulse" size={24} />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-300 font-sans font-bold text-center">
            Nuestra historia mágica ✨
          </h2>
          <Sparkles className="text-amber-400 animate-pulse" size={24} />
        </motion.div>

        {/* Text paragraphs */}
        <div className="flex flex-col gap-6 max-w-[700px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200"
          >
            Si pudiera, lanzaría miles de linternas flotantes al cielo solo para mostrarte cuánta luz e ilusión traes a mi vida. Haces que el mundo brille de una forma diferente.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200"
          >
            Haces que los momentos ordinarios se sientan mágicos, como si los atardeceres dorados, las canciones lentas y las noches tranquilas de repente tuvieran un significado mucho más profundo e importante.
          </motion.p>
        </div>

        {/* Space for the Polaroid Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4"
        >
          <PolaroidFrame />
        </motion.div>
      </div>
    </section>
  );
}
