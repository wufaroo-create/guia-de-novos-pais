import { Stethoscope } from "lucide-react";
import Reveal from "./Reveal";

export default function TrustDisclaimer() {
  return (
    <section className="py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-3xl border border-dusty-200 bg-dusty-100/30 p-7 sm:p-9">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-dusty-400 shadow-soft">
              <Stethoscope className="h-6 w-6" strokeWidth={1.8} />
            </span>
            <div>
              <h2 className="font-serif text-lg font-semibold text-charcoal-900">
                Importante
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-charcoal-700">
                Este guia fornece informações gerais para pais de primeira viagem
                e não substitui consulta, diagnóstico ou tratamento médico
                profissional. Para questões específicas sobre a saúde,
                alimentação ou desenvolvimento do seu bebé, consulte sempre o
                pediatra ou um profissional de saúde qualificado.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
