import {
  SearchCheck,
  LayoutGrid,
  ListChecks,
  Sparkles,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Benefit = { icon: LucideIcon; title: string; desc: string };

const benefits: Benefit[] = [
  {
    icon: SearchCheck,
    title: "Menos pesquisas intermináveis",
    desc: "Deixe de saltar entre dezenas de sites e fóruns. As respostas essenciais estão reunidas.",
  },
  {
    icon: LayoutGrid,
    title: "Informação organizada num só lugar",
    desc: "Cada tema na sua secção, com linguagem simples e direta ao que interessa.",
  },
  {
    icon: ListChecks,
    title: "Checklists fáceis de consultar",
    desc: "Listas práticas para preparar a casa, o sono seguro e a rotina do dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Ideal para pais de primeira viagem",
    desc: "Pensado para quem precisa de orientação simples, sem julgamentos nem excessos.",
  },
  {
    icon: Smartphone,
    title: "Guarde no telemóvel e consulte quando precisar",
    desc: "Tenha o guia sempre disponível para consultas rápidas em qualquer momento.",
  },
];

export default function Benefits() {
  return (
    <section className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Porquê este guia</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Feito para tornar o dia a dia mais simples.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            const wide = i === benefits.length - 1;
            return (
              <Reveal
                key={b.title}
                delay={(i % 3) * 0.08}
                className={wide ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <div
                  className={`flex h-full items-start gap-5 rounded-3xl border border-cream-200 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card ${
                    wide ? "lg:flex-row lg:items-center" : ""
                  }`}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-100 text-sage-600">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <div className={wide ? "lg:max-w-xl" : ""}>
                    <h3 className="font-serif text-xl font-semibold text-charcoal-900">
                      ✓ {b.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-charcoal-700">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
