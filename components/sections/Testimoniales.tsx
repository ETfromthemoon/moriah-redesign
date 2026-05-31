"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on bg image
  const bgY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 text-white md:py-32"
    >
      {/* Background: industrial workers / landscape */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-[-80px] -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center brightness-[0.25] saturate-[0.6]"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E1A1F]/90 via-[#0E1A1F]/75 to-[#1E6E94]/20" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
            05 — Testimonios
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
            Lo que dicen los que están en faena.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.12,
                ease: [0.32, 0.72, 0, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              className="glass-dark flex h-full flex-col justify-between rounded-2xl p-8 transition-colors hover:border-[var(--color-brand-primary)]/30"
            >
              <Quote className="h-7 w-7 text-[var(--color-brand-primary)]" strokeWidth={1.5} />
              <blockquote className="mt-6 font-display text-lg leading-snug text-white md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <div className="font-medium text-white">{t.name}</div>
                <div className="mt-1 text-sm text-white/60">
                  {t.role}
                </div>
                <div className="text-sm text-white/40">{t.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
