import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import SectionShell from './SectionShell';
import { letters } from '../constants/loveLetters';

function WaxSeal({ color, size = 'md' }) {
  const dim = size === 'lg' ? 'w-14 h-14' : 'w-11 h-11';
  const icon = size === 'lg' ? 22 : 17;
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-white/30`}
      style={{
        background: `radial-gradient(circle at 35% 35%, ${color}, color-mix(in srgb, ${color} 60%, #1a0008))`,
      }}
    >
      <Heart size={icon} className="text-white/90" fill="currentColor" />
    </div>
  );
}

function RomanticEnvelope({ letter, isActive, onSelect }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(letter.id)}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-full text-left outline-none"
    >
      <div
        className={`relative rounded-2xl transition-all duration-500 overflow-hidden ${
          isActive 
            ? 'ring-2 ring-rose-400 shadow-[0_20px_50px_rgba(225,29,72,0.2)]' 
            : 'shadow-[0_10px_30px_rgba(0,0,0,0.05)] group-hover:shadow-[0_20px_40px_rgba(225,29,72,0.1)]'
        }`}
        style={{ background: 'linear-gradient(145deg, #fff1f2 0%, #fce7f3 100%)' }}
      >
        {/* Solapa superior */}
        <div
          className="relative w-full z-20"
          style={{
            height: '45px',
            background: 'linear-gradient(160deg, #fda4af 0%, #fecdd3 100%)',
            clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
            filter: 'drop-shadow(0 4px 4px rgba(0,0,0,0.08))'
          }}
        />

        {/* Cuerpo del sobre */}
        <div className="px-6 pb-6 -mt-2 relative z-10">
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1 min-w-0 pl-2">
              <p className="text-[9px] uppercase tracking-[0.2em] text-rose-400 font-bold mb-1">Confidencial</p>
              <h3 className="text-[16px] font-bold text-rose-950 leading-tight mb-1 truncate">{letter.title}</h3>
              <p className="text-[12px] text-rose-700/50 italic truncate">"{letter.preview}"</p>
            </div>
            <div
              className="w-16 h-16 rounded-sm border-[3px] border-white shadow-sm rotate-3 overflow-hidden bg-white shrink-0"
              style={{
                backgroundImage: `url("${letter.image}")`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-rose-200/40 pt-4">
            <div className="flex items-center gap-2">
              <WaxSeal color={letter.seal} />
              <span className="text-[10px] text-rose-500 font-bold tracking-tighter uppercase">Abrir sobre</span>
            </div>
            <div className="flex gap-1">
              {[1, 2].map((i) => <Heart key={i} size={8} className="text-rose-300" fill="currentColor" />)}
            </div>
          </div>
        </div>

        {/* Borde inferior correo aéreo */}
        <div className="h-1.5 w-full flex">
           {[...Array(12)].map((_, i) => (
             <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-rose-300' : 'bg-white'}`} />
           ))}
        </div>
      </div>
    </motion.button>
  );
}

export default function LoveLetters() {
  const [activeId, setActiveId] = useState(null);
  const activeIndex = letters.findIndex((l) => l.id === activeId);
  const activeLetter = letters[activeIndex];

  const goPrev = () => {
    const nextIdx = (activeIndex - 1 + letters.length) % letters.length;
    setActiveId(letters[nextIdx].id);
  };

  const goNext = () => {
    const nextIdx = (activeIndex + 1) % letters.length;
    setActiveId(letters[nextIdx].id);
  };

  return (
    <SectionShell id="cartas" title="Cartas para ti" containerClass="max-w-6xl mx-auto px-6">
      
      {/* ── Cabecera Romántica ── */}
      <div className="love-paper rounded-3xl p-8 md:p-12 mb-24 shadow-xl border border-white/50 relative overflow-hidden bg-white/40 backdrop-blur-sm">
        <div className="absolute top-4 right-6 text-rose-300/40 text-3xl select-none">♥</div>
        <div className="absolute bottom-4 left-6 text-rose-300/30 text-2xl select-none">♡</div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <img src="/images/snoopy/flow.png" alt="" aria-hidden className="w-40 md:w-52 h-auto object-contain drop-shadow-md" />
          <div className="flex-1 text-center md:text-left max-w-xl">
            <h2 className="font-cursive text-4xl md:text-5xl text-rose-800 mb-4">Para la persona que amo</h2>
            <p className="text-lg text-rose-900/60 leading-relaxed">
              He guardado estos mensajes para esos momentos especiales. Elige el que más necesites hoy.
            </p>
          </div>
          <img src="/images/snoopy/woodstock.png" alt="" aria-hidden className="w-32 hidden lg:block opacity-90" />
        </div>
      </div>

      {/* ── Espacio Adicional y Separador de Aire Estilizado ── */}
      <div className="py-12 flex flex-col items-center">
        <div className="flex items-center gap-4 w-full max-w-md">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-rose-200" />
          <Heart className="text-rose-300 animate-pulse" size={16} fill="currentColor" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-rose-200" />
        </div>
        <span className="mt-4 text-[10px] uppercase tracking-[0.4em] text-rose-400 font-semibold">
          Toca un sobre para abrirlo
        </span>
      </div>

      {/* ── Grid de Sobres ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40 mt-12">
        {letters.map((letter) => (
          <RomanticEnvelope
            key={letter.id}
            letter={letter}
            isActive={activeId === letter.id}
            onSelect={setActiveId}
          />
        ))}
      </div>

      {/* ── Visualización de la Carta Abierta ── */}
      <AnimatePresence mode="wait">
        {activeLetter && (
          <motion.div
            key={activeLetter.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="love-letter-open rounded-3xl shadow-2xl border border-rose-100 overflow-hidden bg-white"
            style={{ marginTop: '40px' }}
          >
            <div className="bg-rose-50/50 px-8 py-6 flex items-center justify-between border-b border-rose-100">
              <div className="flex items-center gap-4">
                <WaxSeal color={activeLetter.seal} size="lg" />
                <h3 className="font-cursive text-2xl md:text-3xl text-rose-900">{activeLetter.title}</h3>
              </div>
              <button onClick={() => setActiveId(null)} className="text-rose-400 hover:text-rose-600 transition-colors text-xl font-bold">
                ×
              </button>
            </div>

            <div className="p-8 md:p-10 text-center max-w-2xl mx-auto">
               <p 
                 className="text-rose-800/80 text-lg md:text-xl leading-loose italic whitespace-pre-line"
                 dangerouslySetInnerHTML={{ __html: `"${activeLetter.message}"` }}
               />
               <div className="mt-12 flex flex-col items-center gap-2">
                 <div className="h-px w-12 bg-rose-200" />
                 <p className="font-cursive text-xl text-rose-500">Con amor, siempre.</p>
               </div>
            </div>

            <div className="bg-rose-50/30 px-6 py-4 flex justify-between items-center">
              <button onClick={goPrev} className="flex items-center gap-2 text-rose-500 text-sm font-bold hover:underline">
                <ChevronLeft size={16} /> Anterior
              </button>
              <button onClick={goNext} className="flex items-center gap-2 text-rose-500 text-sm font-bold hover:underline">
                Siguiente <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}