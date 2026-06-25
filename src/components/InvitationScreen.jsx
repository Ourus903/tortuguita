import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Calendar, Clock, MapPin } from 'lucide-react';

export default function InvitationScreen({ isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="
              relative
              w-full
              max-w-xl
              overflow-hidden
              rounded-[36px]
              bg-gradient-to-br
              from-white/95
              via-rose-50/90
              to-pink-100/80
              dark:from-slate-900/95
              dark:via-slate-900/90
              dark:to-slate-800/90
              border
              border-white/40
              backdrop-blur-3xl
              shadow-[0_25px_80px_rgba(0,0,0,0.25)]
              p-14
              md:p-16
            "
          >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-pink-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-purple-400/20 rounded-full blur-3xl" />
            </div>

            {/* Decorations */}
            <div className="absolute top-6 left-6 text-rose-400/70 animate-pulse">
              <Heart size={22} fill="currentColor" />
            </div>

            <div
              className="absolute top-6 right-6 text-amber-400/70 animate-pulse"
              style={{ animationDelay: '0.5s' }}
            >
              <Sparkles size={18} />
            </div>

            {/* Content */}
            <div className="relative flex flex-col items-center text-center">
              
              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="relative mb-12"
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-pink-400/30 via-rose-400/20 to-purple-400/30 rounded-full blur-2xl" />

                <img
                  src="/images/dog-grin.jpg"
                  alt="Perro sonriendo"
                  className="
                    relative
                    w-36
                    h-36
                    md:w-40
                    md:h-40
                    rounded-full
                    object-cover
                    border-4
                    border-white/70
                    dark:border-white/20
                    shadow-2xl
                  "
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="
                  font-cursive
                  text-4xl
                  md:text-5xl
                  font-bold
                  leading-tight
                  bg-gradient-to-r
                  from-rose-500
                  via-pink-500
                  to-purple-500
                  bg-clip-text
                  text-transparent
                  mb-10
                "
              >
                Te invito a salir conmigo 💕
              </motion.h2>

              {/* Message */}
              <motion.p
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="
                  max-w-lg
                  text-lg
                  md:text-xl
                  text-slate-700
                  dark:text-slate-300
                  leading-relaxed
                  mb-14
                "
              >
                Me haría muy feliz compartir una tarde especial contigo,
                conversar, reír juntos y crear un hermoso recuerdo. 
                
              </motion.p>

              {/* Information Card */}
              <motion.div
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="
                  w-full
                  rounded-3xl
                  bg-white/60
                  dark:bg-slate-800/40
                  backdrop-blur-xl
                  border
                  border-white/50
                  dark:border-white/10
                  p-10
                  mb-14
                  shadow-lg
                "
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                  
                  {/* Date */}
                  <div className="flex items-center justify-center gap-5">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg">
                      <Calendar size={22} />
                    </div>

                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                        Fecha
                      </p>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        5 de julio
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center justify-center gap-5">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-lg">
                      <Clock size={22} />
                    </div>

                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                        Hora
                      </p>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        5:00 PM
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center gap-5">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-lg">
                      <MapPin size={22} />
                    </div>

                    <div className="text-left">
                      <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
                        Lugar
                      </p>
                      <p className="font-semibold text-slate-800 dark:text-white">
                        Miraflores centro comercial
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}