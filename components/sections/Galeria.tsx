"use client";
import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const items = [
  {
    src: "/images/habitacion-1.jpg",
    alt: "Habitación corporativa equipada",
    label: "Habitación standard",
    span: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: "/images/espacio-comun.png",
    alt: "Espacio común y casino",
    label: "Casino · áreas comunes",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/images/habitacion-2.jpeg",
    alt: "Habitación con escritorio",
    label: "Habitación ejecutiva",
    span: "aspect-square",
  },
  {
    src: "/images/hospedaje.jpeg",
    alt: "Hospedaje exterior",
    label: "Hospedaje",
    span: "aspect-square",
  },
  {
    src: "/images/servicios.jpg",
    alt: "Servicios de aseo y lavandería",
    label: "Lavandería · aseo",
    span: "md:col-span-2 aspect-[16/10]",
  },
  {
    src: "/images/instalaciones.jpg",
    alt: "Instalaciones modulares",
    label: "Instalaciones",
    span: "md:col-span-2 aspect-[16/9]",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
              03 — Instalaciones
            </div>
            <h2 className="font-display text-4xl font-black leading-[1.05] tracking-tight md:text-6xl">
              Habitaciones, casino y espacios{" "}
              <span className="text-gradient-copper">listos para faena.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-fg-secondary)]">
              Standards corporativos en pleno desierto. Cada módulo pensado para que el
              turno descanse y vuelva a operar.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((it, i) => (
            <BlurFade key={it.src} delay={0.1 + i * 0.08}>
              <figure
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]",
                  it.span
                )}
              >
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover saturate-[0.9] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110 group-hover:saturate-100"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4 md:p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/85 md:text-xs">
                    {it.label}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-copper)] shadow-[0_0_12px_rgba(193,99,45,0.8)]" />
                </figcaption>
              </figure>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
