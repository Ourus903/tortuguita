import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import SectionShell from './SectionShell';
import { reasons } from '../constants/reasons';

export default function ReasonsSection() {
  const [currentReason, setCurrentReason] = useState(0);

  const next = () => setCurrentReason((p) => (p + 1) % reasons.length);

  return (
    <SectionShell
      id="razones"
      title="Razones por las que te amo"
      subtitle="Una a una — puedes pasar cuando quieras"
    >
      <div className="love-paper max-w-lg mx-auto p-6 md:p-8 rounded-2xl border border-rose-300/25 shadow-lg relative">
        <span className="absolute top-3 right-4 text-rose-300/40 text-lg">♥</span>
        <img src="/images/snoopy/woodstock.png" alt="" aria-hidden className="w-14 mx-auto mb-4 opacity-75" />
        <AnimatePresence mode="wait">
          <motion.p
            key={currentReason}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="text-base sm:text-lg text-rose-900/80 text-center leading-relaxed min-h-[4.5rem] flex items-center justify-center font-medium"
          >
            {reasons[currentReason]}
          </motion.p>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-rose-300/30">
          <span className="text-xs text-gray-500 tabular-nums">
            {currentReason + 1} / {reasons.length}
          </span>
          <button type="button" onClick={next} className="btn-primary text-xs py-2 px-4">
            Siguiente
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </SectionShell>
  );
}
