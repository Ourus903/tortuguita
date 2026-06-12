import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, RefreshCw } from 'lucide-react';

export default function PolaroidFrame() {
  const [imageSrc, setImageSrc] = useState(null);
  const [caption, setCaption] = useState("Nosotros ✨");
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center">
      {/* Polaroid Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
        whileHover={{ scale: 1.04, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        onClick={!imageSrc ? triggerFileSelect : undefined}
        className={`relative p-3 pb-10 w-64 sm:w-72 bg-white border border-gray-100 rounded-sm shadow-lg cursor-pointer ${
          !imageSrc ? 'hover:bg-gray-50' : ''
        }`}
      >
        {/* Tape Effect at the Top */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-white/40 backdrop-blur-[2px] border border-white/20 shadow-sm rotate-1 origin-center z-10 before:content-[''] before:absolute before:-left-1 before:top-0 before:bottom-0 before:w-2 before:bg-[linear-gradient(45deg,transparent_50%,rgba(0,0,0,0.03)_50%)] after:content-[''] after:absolute after:-right-1 after:top-0 after:bottom-0 after:w-2 after:bg-[linear-gradient(-45deg,transparent_50%,rgba(0,0,0,0.03)_50%)]" style={{ transform: 'translateX(-50%) rotate(1deg)', background: 'rgba(254, 243, 199, 0.65)', border: '1px dashed rgba(217, 119, 6, 0.2)' }} />

        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Photo Slot */}
        <div className="relative w-full aspect-square bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center rounded-xs group">
          {imageSrc ? (
            <>
              <img
                src={imageSrc}
                alt="Nuestro Recuerdo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay for action */}
              <div 
                onClick={(e) => {
                  e.stopPropagation();
                  triggerFileSelect();
                }}
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-medium text-sm"
              >
                <RefreshCw size={16} />
                <span>Cambiar foto</span>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 text-amber-700/60 p-4 text-center">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100/50">
                <Camera size={26} className="text-amber-600/80" />
              </div>
              <div>
                <p className="font-semibold text-sm">Haz clic aquí</p>
                <p className="text-xs text-amber-700/40 mt-1">para subir una foto nuestra</p>
              </div>
            </div>
          )}
        </div>

        {/* Caption Area (Handwriting styled) */}
        <div className="mt-5 text-center px-2">
          {isEditing ? (
            <input
              type="text"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => { if (e.key === 'Enter') setIsEditing(false); }}
              autoFocus
              maxLength={26}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-center font-cursive text-2xl text-amber-900 border-b border-amber-200 focus:outline-none bg-amber-50/50 rounded px-1 py-0.5"
            />
          ) : (
            <h3 
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
              className="font-cursive text-2xl text-amber-950/80 cursor-text select-none hover:text-amber-800 transition-colors"
              title="Haz clic para editar"
            >
              {caption || "Clic para escribir... ✍️"}
            </h3>
          )}
        </div>
      </motion.div>
      <p className="text-xs text-gray-400 mt-3 italic select-none">
        {imageSrc ? "*Haz clic en el texto para cambiar el título" : "*La foto se mantiene de forma privada en tu navegador"}
      </p>
    </div>
  );
}
