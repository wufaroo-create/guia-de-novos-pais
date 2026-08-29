import Reveal from "./Reveal";

type PreviewPage = {
  id: string;
  title: string;
  caption: string;
  render: () => JSX.Element;
};

const PageBase = ({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) => (
  <div className="flex h-full w-full flex-col bg-cream-50 p-5">
    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-sage-500">
      {eyebrow}
    </span>
    <div className="mt-3 flex-1">{children}</div>
    <div className="mt-2 flex items-center justify-between text-[7px] text-charcoal-700/40">
      <span>Guia de Sobrevivência</span>
      <span>Novos Pais</span>
    </div>
  </div>
);

const CheckRow = ({ label }: { label: string }) => (
  <div className="flex items-start gap-2">
    <span className="mt-0.5 grid h-3.5 w-3.5 place-items-center rounded-full bg-sage-100 text-[8px] text-sage-600">
      ✓
    </span>
    <span className="text-[9px] leading-tight text-charcoal-700">{label}</span>
  </div>
);

const pages: PreviewPage[] = [
  {
    id: "preparacao",
    title: "Checklist de preparação",
    caption: "Essenciais para a casa e primeiros dias",
    render: () => (
      <PageBase eyebrow="Preparar a chegada">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Lista de essenciais
        </h4>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["Roupa", "Fraldas", "Berço", "Banho", "Saida", "Saco"].map((x) => (
            <CheckRow key={x} label={x} />
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          <CheckRow label="Kit de higiene" />
          <CheckRow label="Roupa por tamanhos" />
          <CheckRow label="Saco de maternidade" />
        </div>
      </PageBase>
    ),
  },
  {
    id: "alimentacao",
    title: "Alimentação",
    caption: "Sinais de fome, amamentação e arrotos",
    render: () => (
      <PageBase eyebrow="Alimentação">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Sinais de fome
        </h4>
        <div className="mt-3 space-y-1.5">
          <CheckRow label="Boca a abrir" />
          <CheckRow label="Procura o peito" />
          <CheckRow label="Chucha nas mãos" />
        </div>
        <div className="mt-3 rounded-lg bg-sage-50 p-2">
          <p className="text-[8px] font-semibold text-sage-600">Arrotos</p>
          <p className="mt-0.5 text-[8px] leading-tight text-charcoal-700">
            Mantenha o bebé na vertical uns minutos após a mamada.
          </p>
        </div>
      </PageBase>
    ),
  },
  {
    id: "sono-seguro",
    title: "Sono seguro",
    caption: "Checklist de segurança para cada sesta",
    render: () => (
      <PageBase eyebrow="Sono seguro">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Checklist de segurança
        </h4>
        <div className="mt-3 space-y-1.5">
          <CheckRow label="Bebé de costas" />
          <CheckRow label="Superfície firme" />
          <CheckRow label="Sem almofadas soltas" />
          <CheckRow label="Temperatura adequada" />
          <CheckRow label="Quarto sem fumo" />
        </div>
      </PageBase>
    ),
  },
  {
    id: "desenvolvimento",
    title: "Desenvolvimento",
    caption: "Marcos dos 0 aos 12 meses",
    render: () => (
      <PageBase eyebrow="Desenvolvimento">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Por fase
        </h4>
        <div className="mt-2.5 space-y-2">
          {[
            { t: "0–3 meses", d: "Fixa o olhar, sorriso social" },
            { t: "4–6 meses", d: "Vira-se, agarra objetos" },
            { t: "7–12 meses", d: "Senta, gatinha, primeiros sons" },
          ].map((f) => (
            <div key={f.t} className="rounded-lg border border-cream-200 p-2">
              <p className="text-[9px] font-semibold text-sage-600">{f.t}</p>
              <p className="text-[8px] leading-tight text-charcoal-700">{f.d}</p>
            </div>
          ))}
        </div>
      </PageBase>
    ),
  },
  {
    id: "seguranca",
    title: "Segurança doméstica",
    caption: "Quartos, cozinha, escadas e janelas",
    render: () => (
      <PageBase eyebrow="Segurança em casa">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Por divisão
        </h4>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          {["Quarto", "Cozinha", "Escadas", "Janelas", "Banho", "Tomadas"].map(
            (x) => (
              <div
                key={x}
                className="rounded-lg bg-dusty-100/40 px-2 py-1.5 text-center text-[8px] font-medium text-charcoal-700"
              >
                {x}
              </div>
            )
          )}
        </div>
      </PageBase>
    ),
  },
  {
    id: "rotina",
    title: "Rotina diária",
    caption: "Modelo flexível e rastreador",
    render: () => (
      <PageBase eyebrow="Rotinas">
        <h4 className="font-serif text-[13px] font-semibold text-charcoal-900">
          Modelo de rotina
        </h4>
        <div className="mt-2.5 space-y-1.5">
          {[
            { h: "07h", d: "Mamada da manhã" },
            { h: "09h", d: "Sesta" },
            { h: "12h", d: "Mamada + atividade" },
            { h: "19h", d: "Banho + sono" },
          ].map((r) => (
            <div key={r.h} className="flex items-center gap-2">
              <span className="w-7 rounded-full bg-sage-100 px-1 py-0.5 text-center text-[8px] font-semibold text-sage-600">
                {r.h}
              </span>
              <span className="text-[8px] text-charcoal-700">{r.d}</span>
            </div>
          ))}
        </div>
      </PageBase>
    ),
  },
];

export default function ProductPreview() {
  return (
    <section id="preview" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Pré-visualização</span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight text-charcoal-900 text-balance sm:text-4xl">
            Veja o que vai encontrar lá dentro.
          </h2>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50 px-4 py-2 text-sm font-semibold text-sage-700">
            20 páginas práticas
          </span>
        </Reveal>

        <div className="mt-14 -mx-5 overflow-x-auto px-5 pb-4 no-scrollbar sm:mx-0 sm:px-0">
          <div className="flex gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, i) => (
              <Reveal
                key={page.id}
                delay={(i % 3) * 0.08}
                className="w-[240px] shrink-0 sm:w-auto"
              >
                <figure className="group">
                  <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="aspect-[3/4] w-full overflow-hidden bg-cream-100">
                      <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                        {page.render()}
                      </div>
                    </div>
                  </div>
                  <figcaption className="mt-4 px-1">
                    <p className="font-serif text-base font-semibold text-charcoal-900">
                      {page.title}
                    </p>
                    <p className="mt-1 text-sm text-charcoal-700">
                      {page.caption}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <a href="#comprar" className="btn-primary">
            Quero o meu guia
          </a>
        </Reveal>
      </div>
    </section>
  );
}
