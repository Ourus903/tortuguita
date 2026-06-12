import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { phrases } from '../constants/heroPhrases';

export default function HeroSection({ onLaunchLantern }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = phrases[phraseIndex];

  useEffect(() => {
    setTypedText('');
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, [phraseIndex, fullText]);

  useEffect(() => {
    const rotate = setInterval(() => setPhraseIndex((i) => (i + 1) % phrases.length), 9000);
    return () => clearInterval(rotate);
  }, []);

  return (
    <section
      id="inicio"
      className="min-h-[88vh] flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 relative z-10"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-5 text-xs uppercase tracking-[0.2em] text-gray-500 font-medium"
      >
        Un espacio hecho solo para ti
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-cursive text-4xl sm:text-5xl md:text-6xl mb-4 font-normal px-2"
        style={{ color: 'var(--heading)' }}
      >
        Para mi persona favorita
      </motion.h1>

      <p className="text-xs text-rose-300/70 mb-6 font-medium tracking-wide">Te quiero muchísimo ♥</p>

      <div className="h-10 sm:h-11 mb-8 flex items-center justify-center px-4 max-w-md">
        <p className="text-sm sm:text-base text-gray-300 font-medium min-h-[1.25rem] leading-relaxed">
          {typedText}
          <span className="text-[var(--primary)] opacity-60">|</span>
        </p>
      </div>

      <motion.button
        type="button"
        onClick={onLaunchLantern}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="btn-primary"
      >
        Presiona para un mensajito
      </motion.button>

      <button
        type="button"
        onClick={() => document.getElementById('esencia')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 text-gray-500 hover:text-[var(--heading)] transition-colors scroll-hint"
        aria-label="Continuar"
      >
        <span className="text-[10px] uppercase tracking-wider">Abajito vamos</span>
        <ChevronDown size={20} />
      </button>
    </section>
  );
}
