import { Check } from "lucide-react";
import Reveal from "./Reveal";

const items = [
  "Está prestes a ser pai/mãe pela primeira vez",
  "Tem um bebé entre 0 e 12 meses",
  "Sente que existe informação demais e não sabe por onde começar",
  "Quer rotinas simples em vez de regras rígidas",
  "Quer ter uma referência prática sempre disponível",
  "Quer sentir-se mais preparado para o dia a dia",
];

export default function WhoItsFor() {
  return (
    <section className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="eyebrow">Para quem é</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Este guia foi pensado para si se…
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-12 space-y-4">
            {items.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-cream-200 bg-white p-5 shadow-soft transition-all duration-300 hover:translate-x-1 hover:border-sage-200"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-500 text-cream-50">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-[17px] font-medium text-charcoal-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
