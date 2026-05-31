"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { NumberTicker } from "@/components/magicui/number-ticker";

const stats = [
  { value: 18, suffix: "+", label: "Años en terreno" },
  { value: 2400, suffix: "", label: "Camas operativas" },
  { value: 150, suffix: "+", label: "Equipos en flota" },
  { value: 35, suffix: "", label: "Empresas activas" },
];

export function StatsBar() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image: open pit mine */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          priority={false}
          className="object-cover object-center brightness-[0.35] saturate-[0.7]"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1A1F]/80 via-[#0E1A1F]/60 to-[#0E1A1F]/80" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/5 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="px-6 py-12 md:py-16"
          >
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">
              {String(i + 1).padStart(2, "0")} / {stats.length}
            </div>
            <div className="mt-3 flex items-baseline gap-1 font-display text-5xl font-black tracking-tight text-white md:text-6xl">
              <NumberTicker value={s.value} />
              <span className="text-[var(--color-brand-primary)]">{s.suffix}</span>
            </div>
            <p className="mt-2 text-sm text-white/65 md:text-base">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
