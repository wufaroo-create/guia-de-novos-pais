const links = [
  { label: "Termos", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "Contacto", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-cream-100 px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-terra-500 text-cream-50">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M7 4h10a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
                  <path d="M9 9h6M9 13h6M9 17h4" />
                </svg>
              </span>
              <span className="font-serif text-base font-semibold text-charcoal-800">
                Guia de Sobrevivência para Novos Pais
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
              Informação geral para pais e cuidadores.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-charcoal-700 transition-colors hover:text-terra-600"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-cream-200 pt-8">
          <p className="text-xs leading-relaxed text-charcoal-700/70">
            Este guia fornece informações gerais para pais de primeira viagem e
            não substitui consulta, diagnóstico ou tratamento médico
            profissional. Para questões específicas sobre a saúde, alimentação
            ou desenvolvimento do seu bebé, consulte sempre o pediatra ou um
            profissional de saúde qualificado.
          </p>
          <p className="mt-6 text-xs text-charcoal-700/60">
            © {new Date().getFullYear()} Guia de Sobrevivência para Novos Pais.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
