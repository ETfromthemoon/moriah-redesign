"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Marquee } from "@/components/magicui/marquee";

const headlineWords = ["Operamos", "donde", "Chile", "produce."];
const trustLogos = [
  "Codelco",
  "Antofagasta Minerals",
  "Komatsu",
  "Finning",
  "SQM",
  "BHP",
  "Sigdo Koppers",
  "Salfa",
  "Bechtel",
  "Fluor",
];

function MagneticCTA({
  children,
  primary = false,
  href,
}: {
  children: React.ReactNode;
  primary?: boolean;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  return (
    <motion.a
      href={href}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: sx, y: sy }}
      className={
        primary
          ? "group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-copper)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_0_rgba(193,99,45,0)] transition-shadow duration-500 hover:bg-[var(--color-copper-hover)] hover:shadow-[0_0_40px_rgba(193,99,45,0.5)]"
          : "group inline-flex items-center justify-center gap-2 rounded-md border border-[var(--color-border-default)] px-7 py-3.5 text-sm font-medium text-[var(--color-fg-primary)] transition-colors hover:border-[var(--color-copper)] hover:text-[var(--color-copper-hover)]"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    ref.current.style.setProperty("--mx", `${x}%`);
    ref.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative isolate min-h-[100vh] overflow-hidden pt-28 md:pt-32"
    >
      {/* Background photo */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-main.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 saturate-[0.85] brightness-[0.55]"
        />
      </div>
      {/* Dark overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--color-bg-base)]/70 via-[var(--color-bg-base)]/75 to-[var(--color-bg-base)]"
      />
      {/* Aurora background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 aurora-bg opacity-60 mix-blend-soft-light"
      />
      {/* Mouse spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(193,99,45,0.18), transparent 55%)",
        }}
      />
      {/* Grain texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-[var(--color-bg-base)]"
      />

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border-default)] bg-[var(--color-bg-surface)]/50 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-fg-secondary)]">
            Calama · Antofagasta · Atacama
          </span>
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(3rem,8.5vw,8rem)] font-black leading-[0.95] tracking-[-0.04em]">
          {headlineWords.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(20px)", y: 12 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.08,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="inline-block"
            >
              {i === headlineWords.length - 1 ? (
                <span className="relative inline-block">
                  <span className="text-gradient-copper">{w}</span>
                  {/* hand-drawn marker underline */}
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 h-3 w-full"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 8 Q 50 2 100 6 T 198 5"
                      stroke="#C1632D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
                    />
                  </svg>
                </span>
              ) : (
                w
              )}
              {i < headlineWords.length - 1 && " "}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[var(--color-fg-secondary)] md:text-xl"
        >
          Hospedaje corporativo y arriendo de equipos para faenas mineras e industriales
          en el norte de Chile. Logística resuelta para que tu proyecto no se detenga.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <MagneticCTA primary href="#contacto">
            Solicitar cotización
          </MagneticCTA>
          <MagneticCTA href="#servicios">Conocer servicios</MagneticCTA>
        </motion.div>

        {/* Trust marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-20 md:mt-28"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
            Operamos para mineras y EPC del norte
          </p>
          <div className="relative">
            <Marquee className="[--duration:50s]" pauseOnHover>
              {trustLogos.map((l) => (
                <span
                  key={l}
                  className="font-display text-xl md:text-2xl text-[var(--color-fg-muted)]/70 grayscale hover:text-[var(--color-fg-secondary)] transition-colors"
                >
                  {l}
                </span>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-bg-base)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-bg-base)] to-transparent" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 flex items-center justify-center pb-8 md:mt-16"
        >
          <ChevronDown className="h-5 w-5 animate-bounce text-[var(--color-fg-muted)]" />
        </motion.div>
      </div>
    </section>
  );
}
