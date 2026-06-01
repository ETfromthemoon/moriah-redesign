"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { ClipboardList, FileSignature, Activity } from "lucide-react";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on bg image: -30px to +30px
  const bgY = useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]);

  return (
    <section
      id="metodo"
      ref={sectionRef}
      className="relative overflow-hidden py-24 text-white md:py-32"
    >
      {/* Background: Atacama desert */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-[-60px] -z-10"
      >
        <Image
          src="https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0E1A1F]/85" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
              Método
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Cómo trabajamos en faena.
            </h2>
          </div>
          <p className="max-w-md text-white/65">
            Tres pasos. Sin reuniones de descubrimiento ni discovery workshops. Vamos a terreno y cotizamos.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.15,
                  ease: [0.32, 0.72, 0, 1],
                }}
                viewport={{ once: true, margin: "-80px" }}
                className="glass-dark group flex h-full flex-col rounded-2xl p-8 transition-colors hover:border-[var(--color-brand-primary)]/40"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-3xl text-[var(--color-brand-primary)]">
                    {s.n}
                  </span>
                  <Icon
                    className="h-6 w-6 text-white/65 transition-colors group-hover:text-white/90"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold leading-tight tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-white/65">
                  {s.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
