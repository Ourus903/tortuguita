import { motion } from 'framer-motion';

const fly = '/images/snoopy/fly.png';
const kiss = '/images/snoopy/kiss.png';
const moles = '/images/snoopy/moles.png'; 
const bask = '/images/snoopy/bask.svg';

const floaters = [
  { src: fly, className: 'left-[3%] top-[10%] w-20 md:w-24 opacity-70', duration: 5.5, delay: 0 },
  { src: kiss, className: 'right-[4%] top-[12%] w-16 md:w-20 opacity-60 scale-x-[-1]', duration: 6, delay: 0.6 },
  { src: moles, className: 'left-[2%] top-[40%] w-24 md:w-28 opacity-45 hidden sm:block', duration: 6.5, delay: 0.3 },
  { src: fly, className: 'right-[2%] top-[45%] w-20 md:w-24 opacity-55 hidden md:block', duration: 5, delay: 1 },
  { src: kiss, className: 'left-[5%] bottom-[15%] w-16 md:w-20 opacity-50', duration: 5.8, delay: 0.8 },
  { src: moles, className: 'right-[5%] bottom-[12%] w-20 md:w-24 opacity-65 scale-x-[-1]', duration: 5.2, delay: 0.4 },
];

const hearts = ['♥', '♡', '❤', '💕', '♥', '♡', '❤', '💕'];

export default function RomanticDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden" aria-hidden>
      {floaters.map((f, i) => (
        <motion.img
          key={`${f.src}-${i}`}
          src={f.src}
          alt="" aria-hidden
          className={`absolute decor-float object-contain drop-shadow-lg ${f.className}`}
          animate={{ y: [0, -12, 0], rotate: [-1, 1, -1] }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {hearts.map((sym, i) => (
        <motion.span
          key={i}
          className="absolute text-rose-400/30 text-base md:text-lg select-none"
          style={{
            left: `${8 + (i * 11) % 85}%`,
            top: `${15 + ((i * 17) % 70)}%`,
          }}
          animate={{ y: [0, -8, 0], opacity: [0.2, 0.45, 0.2], scale: [1, 1.15, 1] }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        >
          {sym}
        </motion.span>
      ))}
    </div>
  );
}

export function SectionDivider() {
  return (
    <div className="relative z-10 flex items-center justify-center gap-3 py-8 px-4 pointer-events-none">
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-rose-400/30 to-transparent" />
      <img src={bask} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-80" />
      <span className="text-rose-300/70 text-sm tracking-[0.4em]">♥ ♥ ♥</span>
      <img src={bask} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain opacity-80 scale-x-[-1]" />
      <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent via-rose-400/30 to-transparent" />
    </div>
  );
}
