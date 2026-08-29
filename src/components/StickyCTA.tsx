import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y >= document.body.scrollHeight - 600;
      setVisible(y > 600 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition-all duration-300 lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-cream-200 bg-white/95 p-2.5 pl-5 shadow-lift backdrop-blur">
        <div className="leading-tight">
          <p className="font-serif text-sm font-semibold text-charcoal-900">
            Guia de Sobrevivência
          </p>
          <p className="text-[11px] text-charcoal-700/70">
            Acesso imediato • 20 páginas
          </p>
        </div>
        <a
          href="#comprar"
          className="shrink-0 rounded-full bg-terra-500 px-6 py-3 text-sm font-semibold text-cream-50 shadow-soft transition-colors hover:bg-terra-600 active:scale-95"
        >
          Quero o meu guia
        </a>
      </div>
    </div>
  );
}
