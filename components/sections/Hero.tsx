"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

// Image-first hero: cinematic mining imagery sets the scale.
// Real client photography lives below as proof (galería, casos, testimonios).
const HERO_IMAGES = [
  {
    src: "/images/hero-faena-1.jpg",
    alt: "Camión de extracción y excavadora operando en un rajo abierto de minería",
  },
  {
    src: "/images/hero-faena-2.jpg",
    alt: "Vista aérea de un rajo abierto aterrazado a gran escala en el norte",
  },
  {
    src: "/images/hero-faena-3.jpg",
    alt: "Faena minera a gran escala al pie de la cordillera del norte de Chile",
  },
];

const ROTATE_MS = 5000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return; // no auto-advance when the user prefers reduced motion
    const id = setInterval(
      () => setIndex((i) => (i + 1) % HERO_IMAGES.length),
      ROTATE_MS
    );
    return () => clearInterval(id);
  }, [reduce]);

  const active = HERO_IMAGES[index];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-[#0E1A1F] text-white lg:block"
    >
      {/* IMAGE STAGE — mobile: top block; lg: full-bleed behind the panel */}
      <div className="relative h-[48dvh] w-full overflow-hidden lg:absolute lg:inset-0 lg:h-full">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center animate-ken-burns saturate-[0.95] contrast-[1.06] brightness-[0.9]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Soft seat so the photo reads without burying it */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#0E1A1F]/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0E1A1F]/30"
        />
        {/* Top scrim: keeps the white navbar logo legible over light sky */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0E1A1F]/75 to-transparent"
        />

        {/* Image progress dots */}
        <div className="absolute bottom-4 left-4 z-10 flex gap-2 lg:bottom-8 lg:left-8">
          {HERO_IMAGES.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver imagen ${i + 1} de ${HERO_IMAGES.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* PANEL — mobile: solid block below image; lg: diagonal petrol wedge on the right */}
      <div className="relative flex flex-1 flex-col justify-center bg-[#0E1A1F] px-6 py-12 sm:px-8 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[47%] lg:bg-transparent lg:p-0">
        {/* lg diagonal layers: red edge revealed under the petrol wedge */}
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[#E03B25] [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)] lg:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-[#0E1A1F] [clip-path:polygon(23.2%_0,100%_0,100%_100%,1.2%_100%)] lg:block"
        />

        <div className="relative lg:flex lg:h-full lg:flex-col lg:justify-center lg:pl-[28%] lg:pr-14 xl:pr-20">
          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-success)]" />
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/70">
              Calama · Antofagasta · Atacama
            </span>
          </motion.div>

          {/* headline — restrained, medium weight, the image leads */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,4.4vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-balance"
          >
            Operamos donde{" "}
            <span className="text-[#7DC4E4]">Chile produce.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-pretty leading-relaxed text-white/75"
          >
            Hospedaje corporativo y arriendo de equipos para faenas mineras del norte.
            Logística resuelta para que tu proyecto no se detenga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#cotizar"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-brand-primary)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[var(--color-brand-primary-hover)] active:scale-[0.98]"
            >
              Cotizar mi faena
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/56995412163"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp directo
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-white/55"
          >
            18+ años · 2.400 camas · 150+ equipos en flota
          </motion.p>
        </div>
      </div>
    </section>
  );
}
