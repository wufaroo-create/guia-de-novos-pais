import {
  Home,
  Utensils,
  Moon,
  ShieldCheck,
  Bath,
  Baby,
  Apple,
  Lock,
  HeartHandshake,
  CalendarDays,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Item = {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent?: boolean;
};

const items: Item[] = [
  {
    icon: Home,
    title: "Preparar a chegada",
    desc: "Lista de essenciais para preparar a casa e os primeiros dias.",
  },
  {
    icon: Utensils,
    title: "Alimentação",
    desc: "Amamentação, fórmula, alimentação combinada, sinais de fome e arrotos.",
  },
  {
    icon: Moon,
    title: "Sono",
    desc: "Rotinas simples, sestas, confusão entre dia e noite e formas de acalmar o bebé.",
  },
  {
    icon: ShieldCheck,
    title: "Sono seguro",
    desc: "Checklist de segurança para cada sesta e cada noite.",
    accent: true,
  },
  {
    icon: Bath,
    title: "Higiene",
    desc: "Fraldas, banho, cuidados com a pele e cordão umbilical.",
  },
  {
    icon: Baby,
    title: "Desenvolvimento",
    desc: "O que pode esperar entre 0–3, 4–6 e 7–12 meses.",
  },
  {
    icon: Apple,
    title: "Introdução alimentar",
    desc: "Sinais de prontidão, primeiras opções, texturas e cuidados de segurança.",
  },
  {
    icon: Lock,
    title: "Segurança em casa",
    desc: "Checklist para quartos, cozinha, escadas, janelas e casa de banho.",
    accent: true,
  },
  {
    icon: HeartHandshake,
    title: "Autocuidado",
    desc: "Pequenas estratégias para os pais cuidarem de si próprios.",
  },
  {
    icon: CalendarDays,
    title: "Rotinas",
    desc: "Um modelo flexível de rotina diária e rastreador para acompanhar o bebé.",
  },
];

export default function ProductContents() {
  return (
    <section id="conteudos" className="relative bg-cream-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">O que vai encontrar</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Tudo o que precisa. Sem informação desnecessária.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div
                  className={`group h-full rounded-3xl border p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card ${
                    item.accent
                      ? "border-sage-200 bg-gradient-to-br from-sage-50 to-white"
                      : "border-cream-200 bg-white"
                  }`}
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sage-100 text-sage-600 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-charcoal-700">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
