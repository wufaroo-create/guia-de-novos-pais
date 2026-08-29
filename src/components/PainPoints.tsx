import { HelpCircle } from "lucide-react";
import Reveal from "./Reveal";

const questions = [
  "Ele está a dormir o suficiente?",
  "Como sei se está com fome?",
  "O que preciso realmente de ter em casa?",
  "Como criar uma rotina que funcione?",
  "O que é normal nesta fase?",
  "Quando devo procurar ajuda?",
];

export default function PainPoints() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">As dúvidas são normais</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Ser pai ou mãe pela primeira vez vem com centenas de dúvidas.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((q, i) => (
            <Reveal key={q} delay={i * 0.06}>
              <div className="group flex h-full items-start gap-4 rounded-3xl border border-cream-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-sage-50 text-sage-600 transition-colors group-hover:bg-sage-100">
                  <HelpCircle className="h-5 w-5" />
                </span>
                <p className="font-serif text-lg font-medium leading-snug text-charcoal-800">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <p className="mx-auto max-w-2xl rounded-3xl bg-sage-50 px-7 py-6 text-lg font-medium text-sage-700">
            Em vez de procurar respostas em dezenas de lugares, tenha uma
            referência prática sempre à mão.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
