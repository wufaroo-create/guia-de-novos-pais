import { motion, useReducedMotion } from "framer-motion";

const EMOTIONAL_IMG =
  "https://images.pexels.com/photos/36469199/pexels-photo-36469199.jpeg?auto=compress&cs=tinysrgb&h=1100&w=1600";

export default function EmotionalSection() {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden">
      {/* Full-width image with overlay */}
      <div className="relative h-[460px] w-full sm:h-[520px]">
        <motion.img
          src={EMOTIONAL_IMG}
          alt="Mãe a segurar a mão do bebé num momento terno"
          className="h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.08 }}
          whileInView={reduce ? undefined : { scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/55 via-charcoal-900/45 to-charcoal-900/70" />
      </div>

      {/* Centered content over image */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <motion.h2
            className="font-serif text-3xl font-semibold leading-tight text-cream-50 text-balance sm:text-4xl lg:text-[2.7rem]"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Não precisa de ser um pai ou uma mãe perfeito.
          </motion.h2>
          <motion.p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-50/90 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Precisa de informação prática, paciência e apoio. Haverá dias fáceis e
            dias difíceis. O objetivo deste guia é ajudá-lo a sentir-se um pouco
            mais preparado, um dia de cada vez.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a
              href="#comprar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-8 py-4 text-base font-semibold text-terra-600 shadow-lift transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98]"
            >
              Quero sentir-me mais preparado
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
