"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

export function CTAFinal() {
  const [sent, setSent] = useState(false);
  const [services, setServices] = useState({
    hospedaje: false,
    equipos: false,
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-white/5 bg-[var(--color-bg-dark)] py-24 text-white md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 aurora-bg-dark opacity-70 mix-blend-soft-light"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-[1fr_1.1fr] md:gap-12 md:px-8">
        {/* Left — Copy & contact alternatives */}
        <div>
          <BlurFade>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#5BB3D9]">
              07 — Cotización
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Tu próximo proyecto en el norte empieza con{" "}
              <span className="text-brand-highlight-dark">una llamada.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              Cuéntanos qué necesitas. Dimensionamos contigo en 24 horas y te enviamos
              propuesta operativa con SLA por escrito.
            </p>
          </BlurFade>

          <BlurFade delay={0.15}>
            <ul className="mt-12 space-y-5">
              <li>
                <a
                  href="https://wa.me/56995412163"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white transition-colors hover:text-[#5BB3D9]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:border-[#5BB3D9]">
                    <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70">
                      WhatsApp directo
                    </div>
                    <div className="font-mono">+56 9 9541 2163</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+56995412163"
                  className="group flex items-center gap-4 text-white transition-colors hover:text-[#5BB3D9]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:border-[#5BB3D9]">
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70">
                      Llamar ahora
                    </div>
                    <div className="font-mono">+56 9 9541 2163</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@moriah.cl"
                  className="group flex items-center gap-4 text-white transition-colors hover:text-[#5BB3D9]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:border-[#5BB3D9]">
                    <Mail className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70">
                      Email corporativo
                    </div>
                    <div>contacto@moriah.cl</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Calama+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-white transition-colors hover:text-[#5BB3D9]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:border-[#5BB3D9]">
                    <MapPin className="h-4 w-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70">
                      Oficina
                    </div>
                    <div>Calama, Región de Antofagasta</div>
                  </div>
                </a>
              </li>
            </ul>
          </BlurFade>
        </div>

        {/* Right — Form */}
        <BlurFade delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 text-[var(--color-fg-primary)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-10">
            <BorderBeam duration={14} size={260} />

            {sent ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  Solicitud enviada
                </h3>
                <p className="mt-3 max-w-sm text-[var(--color-fg-secondary)]">
                  Recibimos tu mensaje. Un ejecutivo te contacta en menos de 24 horas
                  hábiles con propuesta operativa.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre y cargo</Label>
                    <Input id="nombre" name="nombre" placeholder="Juan Pérez · Gerente" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" name="empresa" placeholder="Razón social" required />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email corporativo</Label>
                    <Input id="email" name="email" type="email" placeholder="jperez@empresa.cl" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input id="telefono" name="telefono" placeholder="+56 9 ..." />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Tipo de servicio</Label>
                  <div className="flex flex-wrap gap-2">
                    {(["hospedaje", "equipos"] as const).map((k) => (
                      <button
                        type="button"
                        key={k}
                        onClick={() =>
                          setServices((s) => ({ ...s, [k]: !s[k] }))
                        }
                        className={`rounded-full border px-4 py-2 text-sm capitalize transition-all ${
                          services[k]
                            ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary-hover)]"
                            : "border-[var(--color-border-default)] text-[var(--color-fg-secondary)] hover:border-[var(--color-border-strong)]"
                        }`}
                      >
                        {k}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        setServices({ hospedaje: true, equipos: true })
                      }
                      className="rounded-full border border-[var(--color-border-default)] px-4 py-2 text-sm text-[var(--color-fg-secondary)] hover:border-[var(--color-border-strong)]"
                    >
                      Ambos
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cantidad">Cantidad estimada</Label>
                    <Input id="cantidad" name="cantidad" placeholder="Personas o equipos" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fechas">Fechas tentativas</Label>
                    <Input id="fechas" name="fechas" placeholder="Ej: Mar–Sep 2026" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje breve</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos del proyecto, faena, plazos."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4" />
                  Enviar solicitud
                </Button>

                <p className="text-xs text-[var(--color-fg-muted)]">
                  Al enviar aceptas el tratamiento de tus datos para esta cotización.
                </p>
              </form>
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
