import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Clock, Smartphone } from "lucide-react";
import GuideMockup from "./GuideMockup";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage-100/50 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-terra-100/50 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-50 to-cream-100" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pb-28">
        <div className="max-w-xl">
          <motion.span
            className="eyebrow border-terra-200 bg-terra-100/60 text-terra-600"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Guia digital • 0–12 meses
          </motion.span>

          <motion.h1
            className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-charcoal-900 text-balance sm:text-5xl lg:text-[3.4rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            Os primeiros meses com o seu bebé não precisam de ser tão confusos.
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-relaxed text-charcoal-700"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
          >
            Um guia prático para novos pais com orientações simples sobre
            alimentação, sono, higiene, desenvolvimento, segurança e rotinas —
            tudo num só lugar.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-start gap-3"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
          >
            <a href="#comprar" className="btn-primary text-base">
              Quero o meu guia
            </a>
            <p className="text-sm text-charcoal-700/70">
              Download digital • Acesso imediato
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-charcoal-700"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.34 }}
          >
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-sage-500" />
              Informação prática e organizada
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-sage-500" />
              20 páginas diretas ao essencial
            </li>
            <li className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-sage-500" />
              Guarde no telemóvel
            </li>
          </motion.ul>
        </div>

        <div className="relative lg:pt-2">
          <GuideMockup />
        </div>
      </div>
    </section>
  );
}
