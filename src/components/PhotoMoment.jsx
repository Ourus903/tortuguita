import { motion } from 'framer-motion';
import SectionShell from './SectionShell';

const PHOTO_SRC = '/images/momento.jpg';

export default function PhotoMoment() {
  return (
    <SectionShell
      id="foto"
      title="Una fotito"
      subtitle="Un recuerdito que no sabias que existía o no te recordabas que tenía, pero es justo esa sonrisa y carita la que me enamora. Y así te miro como una alegre ingeniera química."

      containerClass="flex justify-center"
    >
      <div className="relative w-full max-w-lg mx-auto min-h-[340px] sm:min-h-[380px]">
        {/* Marco decorativo atrás — desalineado */}
        <div
          className="tilt-box tilt-4 absolute top-6 left-4 right-8 bottom-16 border-2 opacity-60"
          style={{ borderColor: 'color-mix(in srgb, var(--primary) 40%, transparent)' }}
          aria-hidden
        />

        {/* Nota dorada */}
        {/* Foto principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="tilt-box tilt-2 tilt-box-hover relative z-10 mx-auto w-[88%] sm:w-[85%] overflow-hidden border-2"
          style={{ borderColor: 'rgba(253, 224, 138, 0.25)' }}
        >
          <img
            src={PHOTO_SRC}
            alt="Recuerdo especial juntos"
            className="w-full aspect-[4/3] object-cover block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e1065]/50 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Pie de foto — desalineado abajo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="tilt-box tilt-3 absolute bottom-0 left-6 sm:left-10 z-20 px-4 py-2 text-sm max-w-[220px]"
          style={{ color: 'var(--text-muted)' }}
        >
          La científica loca más hermosa que he conocido con una sonrisa muy bonita.
        </motion.p>
      </div>
    </SectionShell>
  );
}
