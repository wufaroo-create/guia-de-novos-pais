import { motion, useReducedMotion } from "framer-motion";

const COVER_IMAGE =
  "https://images.pexels.com/photos/32447392/pexels-photo-32447392.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900";

function Branch({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 150" fill="none" className={className} aria-hidden>
      <path d="M12 137C48 106 76 78 155 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M55 104C51 84 42 75 29 68M68 93C77 75 87 66 101 63M91 74C89 54 84 43 73 33M112 59C124 47 135 42 150 43M39 119C24 112 16 104 11 91" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M29 68C38 69 48 76 55 89M101 63C91 66 82 73 75 83M73 33C83 37 88 47 89 57M150 43C140 47 132 53 126 61M11 91C20 94 28 100 35 109" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function GuideMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[410px] sm:max-w-[450px]">
      <div className="absolute -inset-8 rounded-[4rem] bg-terra-100/40 blur-3xl" aria-hidden />
      <motion.div
        className="relative z-10 overflow-hidden rounded-[1.4rem] border border-white/70 bg-[#f7f0e8] shadow-lift"
        initial={reduce ? false : { opacity: 0, y: 28, rotate: 2 }}
        animate={reduce ? undefined : { opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[0.77] overflow-hidden bg-[#f7f0e8]">
          <div className="absolute right-0 top-0 h-[24%] w-[52%] rounded-bl-[70%] bg-sage-200/75" />
          <Branch className="absolute right-0 top-4 z-10 h-32 w-40 text-sage-500/70 sm:h-40 sm:w-48" />
          <Branch className="absolute bottom-20 left-0 z-10 h-32 w-40 -rotate-12 text-terra-300/60 sm:h-40 sm:w-48" />

          <div className="relative z-20 flex h-full flex-col px-6 pb-5 pt-7 sm:px-8 sm:pt-8">
            <div className="flex items-center gap-2 text-sage-600">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-sage-400 text-white">
                <span className="text-sm">♥</span>
              </span>
              <span className="text-[8px] font-bold uppercase leading-[1.2] tracking-[0.22em]">
                Little Steps<br />Press
              </span>
            </div>

            <div className="mt-8 max-w-[62%] sm:mt-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-terra-600 sm:text-[10px]">
                Um prático
              </p>
              <p className="mt-1 border-b border-terra-400 pb-2 text-[7px] font-bold uppercase tracking-[0.16em] text-terra-500 sm:text-[8px]">
                Manual de cuidados com o bebé de 0 a 12 meses
              </p>
              <h3 className="mt-6 font-serif text-[2.05rem] font-medium leading-[0.98] text-[#5d4b42] sm:text-[2.55rem]">
                Guia de<br />Sobrevivência<br />para Novos Pais
              </h3>
              <div className="mt-5 flex items-center gap-2 text-terra-500">
                <span className="h-px w-12 bg-terra-400" />
                <span className="text-sm">♡</span>
                <span className="h-px w-12 bg-terra-400" />
              </div>
              <p className="mt-4 max-w-[15rem] text-[10px] font-semibold leading-relaxed text-sage-600 sm:text-[11px]">
                Rotinas simples, dicas essenciais e orientações práticas para pais de primeira viagem.
              </p>
            </div>

            <div className="absolute bottom-0 right-[-7%] h-[63%] w-[61%] overflow-hidden rounded-t-[50%]">
              <img
                src={COVER_IMAGE}
                alt="Mãe a segurar o bebé recém-nascido"
                className="h-full w-full object-cover object-center"
                loading="eager"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-20 h-[17%] overflow-hidden bg-terra-400/90 [clip-path:ellipse(78%_72%_at_23%_100%)]" />
            <div className="absolute bottom-4 left-6 z-30 flex gap-2 sm:left-8 sm:gap-3">
              {['0–3 meses', '4–6 meses', '7 a 12 meses'].map((label) => (
                <span key={label} className="rounded-full bg-white px-3 py-1.5 text-[7px] font-bold text-terra-600 shadow-sm sm:px-4 sm:py-2 sm:text-[8px]">
                  {label}
                </span>
              ))}
            </div>
            <p className="absolute bottom-1.5 left-6 z-30 text-[5px] font-semibold uppercase tracking-[0.15em] text-white/90 sm:left-8 sm:text-[6px]">
              Manual digital de 20 páginas · alimentação · sono · desenvolvimento · segurança · autocuidado
            </p>
          </div>
        </div>
      </motion.div>
      <div className="mx-auto mt-4 h-4 w-2/3 rounded-full bg-charcoal-900/15 blur-md" aria-hidden />
    </div>
  );
}
