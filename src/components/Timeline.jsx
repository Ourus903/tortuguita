import { motion } from 'framer-motion';
import { Sparkles, Heart, Star } from 'lucide-react';

export default function Timeline() {
  const events = [
    {
      id: 1,
      icon: <Sparkles size={20} className="text-amber-500" />,
      title: "El primer día que te vi",
      text: "Ese momento mágico en el que nuestras miradas se cruzaron, el mundo se detuvo y supe que serías alguien muy especial en mi vida."
    },
    {
      id: 2,
      icon: <Heart size={20} className="text-rose-500" fill="currentColor" />,
      title: "Nuestro recuerdo favorito",
      text: "Aquellas risas incontenibles y confidencias compartidas que se convirtieron en el refugio perfecto donde siempre quiero regresar."
    },
    {
      id: 3,
      icon: <Star size={20} className="text-amber-500" fill="currentColor" />,
      title: "Lo que me enamora de ti",
      text: "Tu sonrisa cálida que ilumina cualquier noche oscura, tu inmensa bondad y la dulzura infinita con la que cuidas mi corazón."
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-16 px-4 relative z-10 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-amber-300 font-sans font-bold mb-16 text-center">
        Nuestra historia 🌙
      </h2>

      <div className="relative w-full max-w-[800px] flex flex-col gap-12">
        {/* Timeline Center Line */}
        <div className="timeline-line absolute left-1/2 top-4 bottom-4 w-[2px] bg-amber-500/20 -translate-x-1/2 z-0" />

        {events.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={event.id}
              className={`timeline-item flex w-full relative z-10 ${
                isEven ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Central Node Icon */}
              <div className="timeline-icon absolute left-1/2 top-5 -translate-x-1/2 w-11 h-11 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center shadow-lg z-20">
                {event.icon}
              </div>

              {/* Event Content Panel */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: 'spring', bounce: 0.2 }}
                className="timeline-content glass-panel w-[44%] p-6 border-l-4 border-amber-500 shadow-md hover:border-amber-400 transition-colors"
              >
                <h3 className="text-lg sm:text-xl text-amber-300 font-bold mb-3">
                  {event.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-gray-200">
                  {event.text}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-item {
            justify-content: flex-end !important;
          }
          .timeline-icon {
            left: 20px !important;
            transform: translateX(-50%) !important;
          }
          .timeline-content {
            width: calc(100% - 50px) !important;
          }
        }
      `}</style>
    </section>
  );
}
