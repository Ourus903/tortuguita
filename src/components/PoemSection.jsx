import { motion } from 'framer-motion';
import SectionShell from './SectionShell';

const poemLines = [
  'Como estrellas en el cielo,',
  'danzando suave y alzando el vuelo,',
  'eres la calidez en mi piel,',
  'el rincón de paz más dulce y fiel.',
  '',
  'En un mundo de prisa constante,',
  'eres mi faro más brillante.',
  'Más dulce que la miel en el pan,',
  'junto a ti mis miedos se van.',
];

export default function PoemSection() {
  return (
    <SectionShell
      id="poema"
      title="Verso de amor"
      subtitle="Palabras que nacen del corazón ♥"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          love-paper
          max-w-2xl
          mx-auto
          min-h-[450px]
          px-10
          py-12
          md:px-14
          md:py-14
          rounded-3xl
          border
          border-rose-300/20
          shadow-xl
          relative
          flex
          flex-col
          justify-center
        "
      >
        <span className="absolute top-5 right-6 text-rose-300/50 text-2xl">
          ♥
        </span>

        <div className="flex flex-col items-center justify-center gap-3">
          {poemLines.map((line, idx) =>
            line === '' ? (
              <div key={idx} className="h-6" />
            ) : (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="
                  text-lg
                  md:text-xl
                  text-rose-900/80
                  text-center
                  leading-relaxed
                  font-medium
                "
              >
                {line}
              </motion.p>
            )
          )}
        </div>
      </motion.div>
    </SectionShell>
  );
}