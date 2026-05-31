"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Check, ArrowUpRight } from "lucide-react";

const offerings = [
  {
    id: "hoteleria",
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
  return (
    <section id="servicios" className="relative">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
            02 — Servicios
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Dos líneas de negocio. Una sola{" "}
            <span className="text-brand-highlight">cadena operativa.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-fg-secondary)]">
            Hotelería y equipos coordinados desde Calama, con SLA por escrito y un
            equipo que conoce el terreno del norte.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed cinematic panels */}
      <div className="grid md:grid-cols-2">
        {offerings.map((o, i) => (
          <motion.div
            key={o.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative min-h-[70vh] overflow-hidden"
          >
            {/* Full-cover image */}
            <Image
              src={o.image}
              alt={o.eyebrow}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
              className="object-cover object-center brightness-[0.7] transition-all duration-700 ease-out group-hover:brightness-[0.85] group-hover:scale-[1.03]"
            />

            {/* Gradient overlay from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <span className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                {o.eyebrow}
              </span>
              <h3 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-4xl">
                {o.title}
              </h3>

              <ul className="mt-6 space-y-2">
                {o.bullets.map((b, bi) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + bi * 0.06,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary)]"
                      strokeWidth={2}
                    />
                    <span className="text-sm leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={o.href}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {o.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
