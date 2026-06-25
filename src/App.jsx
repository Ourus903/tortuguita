import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, Star, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import ThemeSwitcher from './components/ThemeSwitcher';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import RomanticDecor, { SectionDivider } from './components/decor/RomanticDecor';
import FlipCards from './components/FlipCards';
import PhotoMoment from './components/PhotoMoment';
import PoemSection from './components/PoemSection';
import QuoteSection from './components/QuoteSection';
import LoveLetters from './components/LoveLetters';
import MusicSection from './components/MusicSection';
import ReasonsSection from './components/ReasonsSection';
import SecretMessage from './components/SecretMessage';
import InvitationScreen from './components/InvitationScreen';
import LanternSvg from './components/svg/LanternSvg';
import TangledLanternSvg from './components/svg/TangledLanternSvg';
import TangledStarSvg from './components/svg/TangledStarSvg';
import { STORAGE_KEYS } from './config';
import { romanticThoughts } from './constants/romanticThoughts';

function softConfetti() {
  confetti({
    particleCount: 30,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#ffffff', '#e2e8f0', '#cbd5e1', '#94a3b8'],
  });
}

function App() {
  const [hearts, setHearts] = useState([]);
  const [extraLanterns, setExtraLanterns] = useState([]);
  const [tangledLights, setTangledLights] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [showInvitation, setShowInvitation] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.theme) || 'lantern';
      const legacy = { rose: 'twilight', aurora: 'kingdom' };
      return legacy[saved] || saved;
    } catch {
      return 'lantern';
    }
  });
  const audioRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme]);

  const startAudio = () => {
    if (audioRef.current && !isPlaying && !userPaused) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(false);
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
          setAudioError(true);
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setAudioError(false);
          setUserPaused(false);
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
          setAudioError(true);
        });
    }
  };

  const releaseHearts = () => {
    startAudio();
    softConfetti();
    const newHearts = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 12 + 12}px`,
      delay: Math.random() * 0.4,
      rot: `${Math.random() * 60 - 30}deg`,
    }));
    setHearts((prev) => [...prev, ...newHearts]);
  };

  const releaseTangledLights = () => {
    startAudio();
    confetti({
      particleCount: 50,
      spread: 80,
      origin: { y: 0.75 },
      colors: ['#f59e0b', '#fbbf24', '#fef3c7', '#d97706', '#ea580c'],
    });

    const newLights = Array.from({ length: 35 }).map(() => {
      const isLantern = Math.random() > 0.4;
      return {
        id: Math.random(),
        left: `${Math.random() * 100}vw`,
        size: isLantern ? `${Math.random() * 25 + 45}px` : `${Math.random() * 10 + 15}px`,
        delay: Math.random() * 1.2,
        duration: isLantern ? Math.random() * 4 + 6 : Math.random() * 3 + 5,
        drift: `${Math.random() * 180 - 90}px`,
        rotation: `${Math.random() * 80 - 40}deg`,
        isLantern,
      };
    });
    setTangledLights((prev) => [...prev, ...newLights]);

    // Show invitation after lantern animation completes
    setTimeout(() => {
      setShowInvitation(true);
    }, 8000);
  };

  const launchLantern = () => {
    startAudio();
    const newLantern = {
      id: Math.random(),
      left: `${15 + Math.random() * 70}vw`,
      size: `${Math.random() * 18 + 28}px`,
      drift: `${Math.random() * 120 - 60}px`,
      rotation: `${Math.random() * 30 - 15}deg`,
      duration: Math.random() * 3 + 8,
    };
    setExtraLanterns((prev) => [...prev, newLantern]);
    setToastMessage(romanticThoughts[Math.floor(Math.random() * romanticThoughts.length)]);
  };

  useEffect(() => {
    const timers = [];

    if (hearts.length > 0) {
      const timer = setTimeout(() => {
        setHearts((prev) => prev.slice(15));
      }, 4500);
      timers.push(timer);
    }

    if (extraLanterns.length > 0) {
      const timer = setTimeout(() => {
        setExtraLanterns((prev) => prev.slice(1));
      }, 11000);
      timers.push(timer);
    }

    if (tangledLights.length > 0) {
      const timer = setTimeout(() => {
        setTangledLights((prev) => prev.slice(35));
      }, 12000);
      timers.push(timer);
    }

    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 4000);
      timers.push(timer);
    }

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [hearts, extraLanterns, tangledLights, toastMessage]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
    }
  }, []);

  return (
    <div
      className="relative w-full min-h-screen cursor-default"
      onClick={() => {
        if (!userPaused) startAudio();
      }}
    >
      <BackgroundEffects theme={theme} />
      <RomanticDecor />
      <Navbar />

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -12, x: '-50%' }}
            className="fixed top-20 left-1/2 z-[10000] w-[90%] max-w-sm px-4 py-3 bg-white/80 dark:bg-slate-950/90 border border-white/40 dark:border-white/10 backdrop-blur-md rounded-xl shadow-xl text-center"
          >
            <p className="text-sm text-slate-800 dark:text-slate-200 font-medium flex items-center justify-center gap-2">
              <Sparkles size={14} className="text-slate-400 dark:text-slate-300 animate-pulse" />
              {toastMessage}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenedor de Corazones Flotantes */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {hearts.map((h) => (
          <div
            key={h.id}
            style={{
              position: 'absolute',
              left: h.left,
              bottom: '-20px',
              fontSize: h.size,
              color: 'var(--primary, #ffffff)',
              textShadow: '0 0 8px rgba(255,255,255,0.6)',
              animation: 'floatHeart 4.2s forwards linear',
              animationDelay: `${h.delay}s`,
              '--heart-rot': h.rot,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Contenedor de Luces de Enredados Caídas */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
        {tangledLights.map((light) => (
          <div
            key={light.id}
            style={{
              position: 'absolute',
              left: light.left,
              top: '-80px',
              width: light.size,
              height: light.isLantern ? `calc(${light.size} * 1.3)` : light.size,
              animation: `fallTangledLight ${light.duration}s forwards linear`,
              animationDelay: `${light.delay}s`,
              '--drift': light.drift,
              '--rotation': light.rotation,
              filter: 'drop-shadow(0 0 10px rgba(251, 191, 36, 0.75))',
            }}
          >
            {light.isLantern ? (
              <TangledLanternSvg id={light.id} />
            ) : (
              <TangledStarSvg />
            )}
          </div>
        ))}
      </div>

      {/* Contenedor de Linternas Flotantes */}
      <div className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden">
        {extraLanterns.map((lan) => (
          <div
            key={lan.id}
            style={{
              position: 'absolute',
              left: lan.left,
              bottom: '-80px',
              width: lan.size,
              height: `calc(${lan.size} * 1.2)`,
              animation: `floatLantern ${lan.duration}s forwards linear`,
              '--drift': lan.drift,
              '--rotation': lan.rotation,
            }}
          >
            <LanternSvg id={lan.id} />
          </div>
        ))}
      </div>

      <audio
        ref={audioRef}
        loop
        preload="auto"
        onCanPlayThrough={() => setAudioLoaded(true)}
        onError={() => setAudioError(true)}
      >
        <source src="/music/enredados.mp3" type="audio/mp3" />
      </audio>

      {audioError && (
        <div className="fixed bottom-24 right-6 z-[1000] max-w-xs rounded-2xl bg-rose-500/90 text-white px-4 py-3 shadow-lg shadow-rose-500/20">
          <p className="text-sm font-medium">No se pudo reproducir la música.</p>
          <p className="text-xs opacity-90">Abre la consola del navegador y revisa que el archivo exista en /music/enredados.mp3.</p>
        </div>
      )}

      <ThemeSwitcher theme={theme} onThemeChange={setTheme} />

      <motion.button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleAudio();
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-white/40 dark:bg-slate-950/60 border border-white/60 dark:border-white/20 backdrop-blur-md shadow-lg flex items-center justify-center cursor-pointer z-[1000] text-slate-800 dark:text-white"
        aria-label={
          audioError
            ? 'Error al cargar música'
            : isPlaying
            ? 'Pausar música'
            : 'Reproducir música'
        }
      >
        {audioError ? (
          <VolumeX size={22} className="text-rose-500" />
        ) : isPlaying ? (
          <Volume2 size={22} />
        ) : (
          <VolumeX size={22} className="opacity-50" />
        )}
      </motion.button>

      <HeroSection onLaunchLantern={launchLantern} />
      <SectionDivider />
      <HighlightsSection />
      <SectionDivider />
      <FlipCards />
      <SectionDivider />
      <PhotoMoment />
      <PoemSection />
      <QuoteSection />
      <SectionDivider />
      <LoveLetters />
      <MusicSection />
      <ReasonsSection />
      <SecretMessage onRevealHearts={releaseHearts} />

      {/* ── SECCIÓN FINAL: LIQUID GLASS ── */}
      <section id="final" className="page-section relative py-32 overflow-hidden">
      <div className="page-container relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            max-w-2xl
            mx-auto
            min-h-[400px]
            p-12 md:p-16
            text-center
            bg-white/10
            dark:bg-black/20
            backdrop-blur-3xl
            border border-white/20
            rounded-[60px]
            shadow-2xl
            relative
            overflow-hidden
            flex
            flex-col
            items-center
            justify-center
            gap-3
          "
        >
          {/* Imagen */}
          <div className="relative w-32 h-32">
            <img
              src="/images/snoopy/bear.png"
              alt="Snoopy"
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>

          {/* Título */}
          <h2 className="font-cursive text-5xl md:text-6xl text-slate-900 dark:text-white">
            Te amo muchísimo
          </h2>

          {/* Descripción */}
          <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium opacity-90 max-w-xl">
            Gracias por existir, por cada risa y por ser la persona que ilumina mis días.
          </p>

          {/* Frase */}
          {/* Botón */}
          <motion.button
            type="button"
            onClick={releaseTangledLights}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              relative
              px-8
              md:px-10
              py-3.5
              min-w-[230px]
              rounded-full
              overflow-hidden
              backdrop-blur-2xl
              bg-white/15
              dark:bg-white/5
              border
              border-white/30
              shadow-[0_10px_30px_rgba(255,255,255,0.08)]
              transition-all
              duration-300
              cursor-pointer
            "
          >
            {/* Brillo superior */}
            <div
              className="
                absolute
                top-0
                left-6
                right-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-white/80
                to-transparent
              "
            />

            {/* Reflejo */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white/20
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

            <span
              className="
                relative
                z-10
                flex
                items-center
                justify-center
                gap-2
                text-sm
                md:text-base
                font-semibold
                text-slate-900
                dark:text-white
              "
            >
              <Sparkles size={16} className="text-amber-500 animate-pulse" />
              Para finalizar
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>

      <footer className="py-8 text-center relative z-10 border-t border-white/10 text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
      </footer>

      <InvitationScreen 
        isVisible={showInvitation} 
        onClose={() => setShowInvitation(false)} 
      />
    </div>
  );
}

export default App;