import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Compre o guia",
    desc: "Faça a sua compra de forma rápida e segura.",
  },
  {
    num: "02",
    title: "Receba o acesso",
    desc: "Tenha acesso imediato ao seu guia digital.",
  },
  {
    num: "03",
    title: "Consulte quando precisar",
    desc: "Guarde-o no telemóvel e volte a ele sempre que surgir uma dúvida.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Comece em menos de 2 minutos.
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-sage-200 to-transparent md:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12}>
              <div className="relative flex h-full flex-col items-center text-center">
                <span className="grid h-24 w-24 place-items-center rounded-full border border-sage-200 bg-cream-50 font-serif text-3xl font-semibold text-sage-600 shadow-soft">
                  {s.num}
                </span>
                <h3 className="mt-6 font-serif text-xl font-semibold text-charcoal-900">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-charcoal-700">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 text-center">
          <a href="#comprar" className="btn-primary">
            Quero o meu guia
          </a>
        </Reveal>
      </div>
    </section>
  );
}
