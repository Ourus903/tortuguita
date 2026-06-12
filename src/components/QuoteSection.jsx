import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionShell from './SectionShell';

const quotes = [
  {
    text: 'El amor no es mirarse el uno al otro, sino mirar juntos en la misma dirección.',
    author: 'Antoine de Saint-Exupéry',
  },
  {
    text: 'Donde hay amor hay vida.',
    author: 'Mahatma Gandhi',
  },
  {
    text: 'Amar no es solo querer, es sobre todo comprender.',
    author: 'Françoise Sagan',
  },
  {
    text: 'Tú eres la luz que ilumina los días de quienes te rodean.',
    author: 'Para ti',
  },
  {
    text: 'Contigo aprendo cada día a ser más fuerte y a valorar lo simple.',
    author: 'Para ti',
  },
];

export default function QuoteSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 9000);

    return () => clearInterval(id);
  }, []);

  const quote = quotes[index];

  return (
    <SectionShell id="cita" className="pb-8">
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          love-paper
          max-w-3xl
          mx-auto
          min-h-[195px]
          px-8
          py-10
          md:px-12
          md:py-12
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
        <span className="absolute top-5 left-1/2 -translate-x-1/2 text-rose-400/50 text-base tracking-widest">
          ♥ ♥ ♥
        </span>

        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-rose-900/80 leading-relaxed font-medium italic">
                &ldquo;{quote.text}&rdquo;
              </p>

              <footer className="mt-8 text-sm uppercase tracking-[0.25em] text-rose-600/70">
                — {quote.author}
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Cita ${i + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  i === index
                    ? 'w-8 bg-[var(--primary)]'
                    : 'w-2 bg-rose-300/40 hover:bg-rose-300/70'
                }
              `}
            />
          ))}
        </div>
      </motion.blockquote>
    </SectionShell>
  );
}