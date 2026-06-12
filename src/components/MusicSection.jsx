import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionShell from './SectionShell';
import { songs } from '../constants/songs';

export default function MusicSection() {
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    if (selectedSong) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSong]);

  return (
    <SectionShell id="musica" title="Playlist" subtitle="Toca para ver el código">
      <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
        {songs.map((song, index) => (
          <button
            key={song.id}
            onClick={() => setSelectedSong(song)}
            className="group w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
              <span className="text-sm font-bold text-gray-400 group-hover:text-green-400">{index + 1}</span>
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-medium text-white truncate">{song.title}</p>
              <p className="text-xs text-gray-500 truncate">{song.artist}</p>
            </div>
            <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* USAMOS UN PORTAL PARA QUE EL MODAL TAPE TODO */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {selectedSong && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSong(null)}
              // bg-black/95 asegura que sea opaco y z-[99999] que esté arriba de TODO
              className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col items-center p-8 max-w-[85%] w-full"
              >
                <button
                  onClick={() => setSelectedSong(null)}
                  className="absolute -top-16 p-2 rounded-full bg-white/10 text-white"
                >
                  <X size={24} />
                </button>

                <div className="relative group">
                  <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full" />
                  <div className="relative bg-white p-5 rounded-2xl shadow-2xl">
                    <img
                      src={selectedSong.codeImg}
                      alt="Spotify Code"
                      className="max-h-[50vh] w-auto object-contain rounded-lg"
                    />
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedSong.title}</h3>
                  <p className="text-gray-400 text-lg mb-6">{selectedSong.artist}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body // Esto envía el modal al final del body de tu HTML
      )}
    </SectionShell>
  );
}