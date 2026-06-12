import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import SectionShell from './SectionShell';

const HUG = '/images/snoopy/hug-heart.png';

const MESSAGE =
  'No importa a dónde nos lleve la vida: quiero que sepas que eres la persona a la que estoy dispuesto a cuidar y amar hasta donde Dios me lo permita. Me haces reír, me haces mejor, y te quiero con un cariño enorme, sincero y para siempre.';

export default function SecretMessage({ onRevealHearts }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    onRevealHearts();
  };

  const close = () => setIsOpen(false);

  return (
    <SectionShell
      id="secreto"
      title="Mensaje especial"
      subtitle="Un sobre guardado solo para ti"
      containerClass="flex flex-col items-center"
      className="love-section"
    >
      <div className="relative w-full max-w-md min-h-[300px] flex items-center justify-center mx-auto">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="envelope"
              type="button"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -4 }}
              onClick={open}
              className="w-full max-w-xs sm:max-w-sm cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-rose-300/40">
                <div
                  className="pt-10 pb-8 px-6 flex flex-col items-center gap-4"
                  style={{
                    background: 'linear-gradient(165deg, #ffe4e6 0%, #fecdd3 50%, #fda4af 100%)',
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-10"
                    style={{
                      background: 'linear-gradient(180deg, #fb7185, #fda4af)',
                      clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                    }}
                  />
                  <img
                    src="/images/snoopy/two.png"
                    alt=""
                    aria-hidden
                    className="relative w-24 h-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform"
                  />
                  <div className="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shadow-md border-2 border-rose-800/20">
                    <Heart size={18} className="text-white" fill="currentColor" />
                  </div>
                  <span className="text-sm font-bold text-rose-950">Toca para abrir</span>
                  <span className="text-xs text-rose-800/70">Hay algo muy importante dentro</span>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="love-letter-open relative w-full rounded-2xl border-2 border-rose-200/60 shadow-2xl overflow-hidden"
            >
              <div className="bg-rose-100/80 px-6 py-4 flex items-center justify-between border-b border-rose-200">
                <p className="font-cursive text-2xl text-rose-900">Para ti</p>
              </div>
              <div className="px-6 sm:px-8 py-8">
                <button
                  type="button"
                  onClick={close}
                  className="absolute top-3 right-3 p-1.5 rounded-lg text-rose-800/50 hover:bg-rose-200/50"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
                <p className="text-sm sm:text-base leading-relaxed text-rose-950/85 text-center font-medium">
                  {MESSAGE}
                </p>
                <p className="text-center mt-6 font-cursive text-xl text-rose-600">Con todo mi amor ♥</p>
              </div>
              <button type="button" onClick={close} className="love-btn-ghost w-full justify-center py-4 bg-rose-50 border-t border-rose-200">
                Cerrar carta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionShell>
  );
}
