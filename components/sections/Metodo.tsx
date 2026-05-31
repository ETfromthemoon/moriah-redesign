import { ClipboardList, FileSignature, Activity } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Diagnóstico de faena",
    body: "Visitamos tu obra, dimensionamos cuadrilla, plazos y logística. Te llevamos un alcance escrito en 72 horas.",
  },
  {
    n: "02",
    icon: FileSignature,
    title: "Propuesta operativa",
    body: "Contrato marco, OC, facturación corporativa y SLA por escrito. Sin letra chica.",
  },
  {
    n: "03",
    icon: Activity,
    title: "Operación continua",
    body: "Coordinación directa con jefe de campamento, reportes mensuales y respuesta en terreno.",
  },
];

export function Metodo() {
  return (
    <section id="metodo" className="relative border-t border-[var(--color-border-subtle)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
                03 — Método
              </div>
              <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
                Cómo trabajamos en faena.
              </h2>
            </div>
            <p className="max-w-md text-[var(--color-fg-secondary)]">
              Tres pasos. Sin reuniones de descubrimiento ni discovery workshops. Vamos a terreno y cotizamos.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <BlurFade key={s.n} delay={0.15 + i * 0.1}>
                <div className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-8 transition-colors hover:border-[var(--color-copper)]/40">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-3xl text-[var(--color-copper)]">{s.n}</span>
                    <Icon className="h-6 w-6 text-[var(--color-fg-muted)] transition-colors group-hover:text-[var(--color-gold)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--color-fg-secondary)]">
                    {s.body}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
