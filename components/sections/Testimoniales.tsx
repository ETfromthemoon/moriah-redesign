import { Quote } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

const testimonials = [
  {
    quote:
      "Llevamos cinco años trabajando con Moriah. Cuando necesitamos sumar 200 camas en 30 días para un proyecto de expansión, lo resolvieron. Esa capacidad de respuesta vale más que la cotización más barata.",
    name: "Jorge M.",
    role: "Gerente de Servicios Generales",
    company: "Empresa minera del norte",
  },
  {
    quote:
      "El campamento que opera Moriah para nuestra cuadrilla tiene una limpieza y un casino que mantienen al equipo con energía. Eso baja la rotación. Punto.",
    name: "Carolina P.",
    role: "Jefa de Faena",
    company: "Constructora industrial",
  },
  {
    quote:
      "Reemplazaron una camioneta a las 22:00 un sábado. Eso define a un proveedor.",
    name: "Rodrigo S.",
    role: "Superintendente de Operaciones",
    company: "EPC Industrial",
  },
];

export function Testimoniales() {
  return (
    <section className="relative border-t border-[var(--color-border-subtle)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
              05 — Testimonios
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Lo que dicen los que están en faena.
            </h2>
          </div>
        </BlurFade>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <BlurFade key={t.name} delay={0.1 + i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-8 transition-colors hover:border-[var(--color-copper)]/40">
                <Quote className="h-7 w-7 text-[var(--color-copper)]" strokeWidth={1.5} />
                <blockquote className="mt-6 font-display text-lg leading-snug text-[var(--color-fg-primary)] md:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-[var(--color-border-subtle)] pt-5">
                  <div className="font-medium text-[var(--color-fg-primary)]">{t.name}</div>
                  <div className="mt-1 text-sm text-[var(--color-fg-secondary)]">
                    {t.role}
                  </div>
                  <div className="text-sm text-[var(--color-fg-muted)]">{t.company}</div>
                </figcaption>
              </figure>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
