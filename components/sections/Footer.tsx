import Link from "next/link";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const cols = [
  {
    title: "Servicios",
    items: [
      { label: "Hotelería corporativa", href: "#servicios" },
      { label: "Arriendo de equipos", href: "#servicios" },
      { label: "Casino industrial", href: "#servicios" },
      { label: "Lavandería de faena", href: "#servicios" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Método", href: "#metodo" },
      { label: "Casos", href: "#casos" },
      { label: "Sobre Moriah", href: "#" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "Cotizar", href: "#contacto" },
      { label: "WhatsApp", href: "https://wa.me/56995412163" },
      { label: "contacto@moriah.cl", href: "mailto:contacto@moriah.cl" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Política de privacidad", href: "#" },
      { label: "Términos de servicio", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[var(--color-bg-dark)] text-white">
      {/* Aurora gradient inferior brand */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 120%, rgba(30,110,148,0.55), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,_1fr)]">
          <div>
            <Link href="#top" className="inline-block">
              <span className="font-display text-3xl tracking-tight text-white">
                Moriah<span className="text-[#E03B25]">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Hospedaje y equipos para la operación minera del norte. Calama, Chile.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Moriah SPA · Calama, Chile.</div>
          <div className="font-mono uppercase tracking-wider">
            Operación 24/7 · Norte de Chile
          </div>
        </div>
      </div>
    </footer>
  );
}
