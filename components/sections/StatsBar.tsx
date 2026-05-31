import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";

const stats = [
  { value: 18, suffix: "+", label: "Años en terreno" },
  { value: 2400, suffix: "", label: "Camas operativas" },
  { value: 150, suffix: "+", label: "Equipos en flota" },
  { value: 35, suffix: "", label: "Empresas activas" },
];

export function StatsBar() {
  return (
    <section className="border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[var(--color-border-subtle)] md:grid-cols-4">
        {stats.map((s, i) => (
          <BlurFade key={s.label} delay={i * 0.1}>
            <div className="bg-[var(--color-bg-surface)] px-6 py-10 md:py-14">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                {String(i + 1).padStart(2, "0")} / {stats.length}
              </div>
              <div className="mt-3 flex items-baseline gap-1 font-display text-5xl font-black tracking-tight text-[var(--color-brand-primary)] md:text-6xl">
                <NumberTicker value={s.value} />
                <span>{s.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-[var(--color-fg-secondary)] md:text-base">
                {s.label}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
