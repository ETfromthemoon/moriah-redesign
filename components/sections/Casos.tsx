import { BlurFade } from "@/components/magicui/blur-fade";

const casos = [
  {
    cliente: "Codelco Chuquicamata",
    region: "Calama",
    metrics: [
      { v: "800", l: "trabajadores hospedados" },
      { v: "18", l: "meses de operación" },
      { v: "45", l: "camionetas en flota dedicada" },
      { v: "0", l: "incidentes HSEC" },
    ],
    quote:
      "Logística sin sobresaltos en un proyecto de alta exigencia.",
    quoteBy: "Jefe de Servicios, Codelco",
  },
  {
    cliente: "Minera Centinela",
    region: "Antofagasta Minerals",
    metrics: [
      { v: "320", l: "camas operativas en faena" },
      { v: "7x7", l: "cambio de turno" },
      { v: "99.2%", l: "disponibilidad de equipos" },
      { v: "24h", l: "tiempo de reemplazo" },
    ],
    quote: "El cambio de turno se coordinó sin un solo retraso.",
    quoteBy: "Superintendente de Operaciones",
  },
  {
    cliente: "Constructora EPC industrial",
    region: "Región de Antofagasta",
    metrics: [
      { v: "21", l: "días para campamento modular" },
      { v: "1.200", l: "raciones diarias en casino" },
      { v: "98%", l: "rating de auditoría de aseo" },
      { v: "5", l: "años de relación" },
    ],
    quote:
      "Levantaron el campamento en tres semanas. Otros nos decían tres meses.",
    quoteBy: "Gerente de Proyecto",
  },
];

export function Casos() {
  return (
    <section
      id="casos"
      className="relative border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
              04 — Casos
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Proyectos donde estuvimos.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-fg-secondary)]">
              Cifras representativas del sector. Disponibles para validar en reunión bajo NDA.
            </p>
          </div>
        </BlurFade>

        <div className="space-y-4">
          {casos.map((c, i) => (
            <BlurFade key={c.cliente} delay={0.1 + i * 0.08}>
              <article className="group relative grid grid-cols-1 gap-8 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-base)] p-8 transition-colors hover:border-[var(--color-copper)]/40 md:grid-cols-[1fr_1.2fr] md:p-10">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                    {c.region}
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                    {c.cliente}
                  </h3>
                  <blockquote className="mt-8 border-l-2 border-[var(--color-copper)] pl-5 font-display text-lg italic text-[var(--color-fg-primary)]">
                    “{c.quote}”
                    <footer className="mt-3 font-sans text-sm not-italic text-[var(--color-fg-secondary)]">
                      — {c.quoteBy}
                    </footer>
                  </blockquote>
                </div>

                <div className="grid grid-cols-2 gap-px self-center bg-[var(--color-border-subtle)]">
                  {c.metrics.map((m) => (
                    <div key={m.l} className="bg-[var(--color-bg-base)] p-6">
                      <div className="font-display text-3xl font-black text-[var(--color-gold)] md:text-4xl">
                        {m.v}
                      </div>
                      <div className="mt-2 text-xs uppercase tracking-wider text-[var(--color-fg-secondary)]">
                        {m.l}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
