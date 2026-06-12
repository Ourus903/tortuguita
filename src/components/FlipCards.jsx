import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionShell from './SectionShell';
import { cards } from '../constants/flipCards';

export default function FlipCards() {
  const [flippedCards, setFlippedCards] = useState({});
  const scrollContainerRef = useRef(null);

  const handleFlip = (id) => {
    setFlippedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => setFlippedCards({});

  const flippedCount = Object.values(flippedCards).filter(Boolean).length;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <SectionShell
      id="tarjetas"
      title="En detalle"
      subtitle="Pequeños grandes motivos — voltea cada tarjeta ♥"
    >
      <div className="flex flex-col items-center gap-10">
        {/* Carousel for smooth horizontal scrolling */}
        <div className="w-full max-w-4xl mx-auto relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {cards.map((card, idx) => {
              const isFlipped = !!flippedCards[card.id];
              return (
                <div
                  key={card.id}
                  className="flex flex-col items-center flex-shrink-0 w-[240px] md:w-[280px] snap-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.12, duration: 0.8, ease: "easeOut" }}
                    className="w-full"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => handleFlip(card.id)}
                      onKeyDown={(e) => e.key === 'Enter' && handleFlip(card.id)}
                      className={`flip-card romantic-card ${isFlipped ? 'flipped' : ''} h-52 w-full cursor-pointer transition-all duration-800 hover:shadow-2xl hover:scale-[1.02]`}
                    >
                      <div className="flip-card-inner">
                        {/* Lado Frontal */}
                        <div className="flip-card-front flip-card-love gap-3 px-4 flex flex-col justify-center items-center">
                          <div 
                            className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-inner"
                            style={{
                              background: 'color-mix(in srgb, var(--primary) 15%, transparent)',
                              color: 'var(--heading)',
                            }}
                          >
                            {card.icon}
                          </div>
                          <h3 className="text-sm font-bold text-center text-[var(--text)] tracking-tight">
                            {card.title}
                          </h3>
                          <div className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
                            <p className="text-[9px] uppercase tracking-wider opacity-80 font-semibold">{card.hint}</p>
                          </div>
                        </div>

                        {/* Lado Posterior */}
                        <div className="flip-card-back flip-card-love-back p-4 flex flex-col justify-center items-center">
                          <Heart size={18} className="mb-3 shrink-0 text-rose-200/90" fill="currentColor" />
                          <p className="text-xs sm:text-sm leading-relaxed text-rose-50 text-center font-medium italic px-2">
                            "{card.backText}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer text-[var(--heading)] hover:bg-white/30 dark:hover:bg-black/30 transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer text-[var(--heading)] hover:bg-white/30 dark:hover:bg-black/30 transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {flippedCount > 0 && (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={resetAll}
            className="flex items-center gap-2 px-6 py-2 rounded-full border border-dashed border-[var(--text-muted)] text-[10px] uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--heading)] hover:border-[var(--heading)] transition-all bg-transparent"
          >
            <RotateCcw size={12} />
            Reiniciar tablero
          </motion.button>
        )}
      </div>
    </SectionShell>
  );
}