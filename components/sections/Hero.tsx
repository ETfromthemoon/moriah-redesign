"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
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
          ? "group inline-flex items-center justify-center gap-2 rounded-md bg-[var(--color-brand-primary)] px-7 py-3.5 text-sm font-medium text-white shadow-[0_0_0_rgba(30,110,148,0)] transition-shadow duration-500 hover:bg-[var(--color-brand-primary-hover)] hover:shadow-[0_0_40px_rgba(30,110,148,0.45)]"
          : "group inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </motion.a>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image moves slower than scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Hero content fades out as user scrolls
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current) return;
    const r = mouseRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    mouseRef.current.style.setProperty("--mx", `${x}%`);
    mouseRef.current.style.setProperty("--my", `${y}%`);
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={onMouseMove}
      className="relative isolate min-h-[100dvh] overflow-hidden bg-[#0E1A1F] pt-28 text-white md:pt-32"
    >
      {/* Dawn atmosphere base: petrol sky into desert ember */}
      <div aria-hidden className="absolute inset-0 -z-30 hero-dawn" />

      {/* Background photo with parallax + Ken Burns */}
      <motion.div
        aria-hidden
        style={{ y: imgY }}
        className="absolute inset-0 -z-20 scale-110"
      >
        <Image
          src="/images/hero-main.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-ken-burns saturate-[0.78] brightness-[0.42] contrast-[1.05]"
        />
      </motion.div>

      {/* Ember bloom rising from the horizon */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-[55%] bg-[radial-gradient(80%_120%_at_50%_120%,rgba(255,122,60,0.28),transparent_70%)] mix-blend-screen"
      />
      {/* Legibility overlay, warm at the base */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B151A]/65 via-[#0E1A1F]/72 to-[#14110E]/92"
      />
      {/* Volumetric light shaft, slow drift */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 left-1/2 -z-10 h-[150%] w-[55%] -translate-x-1/2 animate-light-sweep bg-[linear-gradient(180deg,rgba(255,196,140,0.22),rgba(255,122,60,0.06)_45%,transparent_75%)] blur-3xl mix-blend-screen"
      />
      {/* Mouse spotlight */}
      <div
        ref={mouseRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 30%), rgba(30,110,148,0.28), transparent 55%)",
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
      {/* Bottom settle: deepens into the dark section that follows (no light band) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-[#0E1A1F]"
      />

      {/* Hero content that fades as user scrolls */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="mx-auto max-w-7xl px-4 md:px-8"
      >
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-success)] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-white/80">
            Calama · Antofagasta · Atacama
          </span>
        </motion.div>

        <h1 className="font-display text-balance text-[clamp(3rem,8.5vw,8rem)] font-extrabold leading-[0.95] tracking-[-0.04em]">
          {headlineWords.map((w, i) => {
            const isLast = i === headlineWords.length - 1;
            return (
              <span key={i}>
              <span
                className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
              >
                <motion.span
                  initial={{ y: "118%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.95,
                    delay: 0.25 + i * 0.11,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {isLast ? (
                    <span className="relative inline-block">
                      <span className="text-brand-highlight-dark">{w}</span>
                      {/* hand-drawn marker underline */}
                      <svg
                        aria-hidden
                        className="absolute -bottom-1 left-0 h-3 w-full"
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M2 8 Q 50 2 100 6 T 198 5"
                          stroke="#FF7A3C"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
                        />
                      </svg>
                    </span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
              {!isLast && " "}
              </span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/75 md:text-xl"
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
          <MagneticCTA primary href="#cotizar">
            Cotizar mi faena
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
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-white/75">
            Operamos para mineras y EPC del norte
          </p>
          <div className="relative">
            <Marquee className="[--duration:50s]" pauseOnHover>
              {trustLogos.map((l) => (
                <span
                  key={l}
                  className="font-display text-xl md:text-2xl text-white/65 grayscale hover:text-white/80 transition-colors"
                >
                  {l}
                </span>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0E1A1F] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0E1A1F] to-transparent" />
          </div>
        </motion.div>

        {/* Animated mouse scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="mt-12 flex items-center justify-center pb-8 md:mt-16"
        >
          <div className="flex flex-col items-center gap-2">
            {/* Mouse icon with scrolling line inside */}
            <div className="relative h-9 w-5 rounded-full border-2 border-white/60 flex items-start justify-center pt-1.5">
              <div
                className="h-2.5 w-0.5 rounded-full bg-white/70"
                style={{ animation: "mouse-scroll 1.2s ease-in-out infinite" }}
              />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
              scroll
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
