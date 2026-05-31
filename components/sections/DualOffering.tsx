"use client";
import { useState } from "react";
import Image from "next/image";
import { Bed, Truck, Check, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const offerings = [
  {
    id: "hoteleria",
    icon: Bed,
    image: "/images/hoteleria-banner.png",
    eyebrow: "Hotelería corporativa",
    title: "Camas, casino, lavandería. Operación 24/7.",
    bullets: [
      "Capacidad modular desde 50 hasta 2.400 camas",
      "Casino con menú diseñado para faena minera",
      "Lavandería industrial integrada",
      "Aseo y mantención continua por turno",
      "Coordinación directa con el shift de tu obra",
    ],
    cta: "Ver hotelería",
    href: "#contacto",
  },
  {
    id: "equipos",
    icon: Truck,
    image: "/images/equipos-banner.png",
    eyebrow: "Arriendo de equipos",
    title: "Equipos autónomos y eléctricos listos para faena.",
    bullets: [
      "Camionetas 4x4 y vehículos livianos",
      "Equipos eléctricos y autónomos",
      "Mantención preventiva incluida",
      "Reemplazo en 24 horas, sin letra chica",
      "Choferes opcionales con HSEC vigente",
    ],
    cta: "Ver equipos",
    href: "#contacto",
  },
];

export function DualOffering() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-16 max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
              02 — Servicios
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Dos líneas de negocio. Una sola{" "}
              <span className="text-gradient-copper">cadena operativa.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-fg-secondary)]">
              Hotelería y equipos coordinados desde Calama, con SLA por escrito y un
              equipo que conoce el terreno del norte.
            </p>
          </div>
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-2">
          {offerings.map((o, i) => {
            const Icon = o.icon;
            const isActive = active === o.id;
            return (
              <BlurFade key={o.id} delay={0.15 + i * 0.1}>
                <div
                  onMouseEnter={() => setActive(o.id)}
                  onMouseLeave={() => setActive(null)}
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-[var(--color-bg-surface)] p-8 transition-all duration-500 md:p-10",
                    isActive
                      ? "border-[var(--color-copper)]/60 bg-[var(--color-bg-elevated)]"
                      : "border-[var(--color-border-subtle)]"
                  )}
                >
                  {/* photo backdrop */}
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <Image
                      src={o.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={cn(
                        "object-cover transition-all duration-700",
                        isActive
                          ? "scale-[1.04] brightness-[0.5] saturate-[0.9]"
                          : "scale-100 brightness-[0.35] saturate-[0.7]"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-surface)] via-[var(--color-bg-surface)]/85 to-[var(--color-bg-surface)]/55" />
                  </div>
                  {/* aurora wash */}
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 transition-opacity duration-700",
                      isActive ? "opacity-100" : "opacity-40"
                    )}
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 40% at 70% 0%, rgba(193,99,45,0.18), transparent)",
                    }}
                  />

                  <div className="relative flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-base)]">
                      <Icon className="h-5 w-5 text-[var(--color-copper)]" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                      {o.eyebrow}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-3xl font-black leading-[1.1] tracking-tight md:text-4xl">
                    {o.title}
                  </h3>

                  <ul className="relative mt-8 space-y-3">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[var(--color-fg-secondary)]">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-[var(--color-gold)]"
                          strokeWidth={2}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={o.href}
                    className="relative mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-copper)] hover:text-[var(--color-copper-hover)]"
                  >
                    {o.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
