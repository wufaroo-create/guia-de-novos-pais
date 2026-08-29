import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream-200/80 bg-cream-50/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-terra-500 text-cream-50 shadow-soft">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 4h10a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" />
              <path d="M9 9h6M9 13h6M9 17h4" />
            </svg>
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-semibold text-charcoal-800">
              Guia de Sobrevivência
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-terra-500">
              Novos Pais
            </span>
          </span>
        </a>

        <a href="#comprar" className="btn-primary !px-6 !py-2.5 !text-sm">
          Quero o meu guia
        </a>
      </nav>
    </header>
  );
}
