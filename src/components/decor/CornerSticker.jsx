import { motion } from 'framer-motion';
import { BeagleHearts, BeagleLove, HeartSparkle } from './SnoopyStickers';

const variants = {
  hearts: BeagleHearts,
  love: BeagleLove,
  sparkle: HeartSparkle,
};

export default function CornerSticker({
  variant = 'hearts',
  position = 'bottom-right',
  className = '',
}) {
  const El = variants[variant] || BeagleHearts;
  const pos =
    position === 'top-left'
      ? 'top-4 left-4'
      : position === 'top-right'
        ? 'top-4 right-4'
        : position === 'bottom-left'
          ? 'bottom-4 left-4'
          : 'bottom-4 right-4';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`absolute ${pos} pointer-events-none opacity-40 md:opacity-50 ${className}`}
      aria-hidden
    >
      <El className="w-10 h-10 md:w-12 md:h-12" />
    </motion.div>
  );
}
