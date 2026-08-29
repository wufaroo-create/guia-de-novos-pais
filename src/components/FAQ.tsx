import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "O guia é físico ou digital?",
    a: "É um guia digital que pode guardar no telemóvel ou consultar no computador.",
  },
  {
    q: "Para que idade é indicado?",
    a: "O conteúdo foi estruturado para acompanhar o bebé dos 0 aos 12 meses.",
  },
  {
    q: "Preciso de ler tudo de uma vez?",
    a: "Não. O guia foi criado para poder consultar apenas a secção de que precisa naquele momento.",
  },
  {
    q: "É indicado para pais de primeira viagem?",
    a: "Sim. O conteúdo foi criado especialmente para quem procura orientação simples, prática e sem julgamentos.",
  },
  {
    q: "Posso consultar o guia no telemóvel?",
    a: "Sim. O objetivo é poder tê-lo sempre disponível para consultas rápidas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Tudo o que precisa de saber.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? "border-sage-200 bg-white shadow-soft"
                      : "border-cream-200 bg-white/60 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg font-medium text-charcoal-900">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${
                        isOpen ? "bg-sage-500 text-cream-50" : "bg-sage-50 text-sage-600"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-[15px] leading-relaxed text-charcoal-700">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
