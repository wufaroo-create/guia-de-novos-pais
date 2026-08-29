import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Clock, Smartphone } from "lucide-react";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section id="comprar" className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-terra-500 via-terra-500 to-terra-600 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
          {/* decorative blobs */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-terra-300/30 blur-2xl" aria-hidden />

          <motion.span
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream-50"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Guia digital • 20 páginas
          </motion.span>

          <motion.h2
            className="mx-auto mt-6 max-w-2xl font-serif text-3xl font-semibold leading-tight text-cream-50 text-balance sm:text-4xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Tenha as respostas essenciais sempre à mão.
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream-50/85 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Um guia simples para acompanhar os primeiros 12 meses com mais
            organização e tranquilidade.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a
              href="#comprar"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-9 py-4 text-base font-bold text-terra-600 shadow-lift transition-all duration-300 hover:bg-white hover:scale-[1.03] active:scale-[0.98]"
            >
              Quero o meu guia agora
            </a>
            <p className="text-sm text-cream-50/75">
              Guia digital • Acesso imediato
            </p>
          </motion.div>

          <motion.ul
            className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-cream-50/80"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.32 }}
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4" /> Informação organizada
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> Acesso imediato
            </li>
            <li className="flex items-center gap-2">
              <Smartphone className="h-4 w-4" /> Consulta no telemóvel
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
