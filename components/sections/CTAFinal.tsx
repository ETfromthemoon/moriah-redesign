"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";

const WHATSAPP_NUMBER = "56995412163";

type ServiceKey = "hospedaje" | "equipos";

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  cantidad: string;
  fechas: string;
  mensaje: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  cantidad: "",
  fechas: "",
  mensaje: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.nombre.trim()) errors.nombre = "Indícanos tu nombre y cargo.";
  if (!form.empresa.trim()) errors.empresa = "Falta la razón social de tu empresa.";
  if (!form.email.trim()) {
    errors.email = "Necesitamos un email para responderte.";
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = "Revisa el email: falta el @ o el dominio.";
  }
  return errors;
}

function buildWhatsappMessage(form: FormState, services: Record<ServiceKey, boolean>): string {
  const seleccion = (Object.keys(services) as ServiceKey[])
    .filter((k) => services[k])
    .join(", ");
  const lines = [
    "Hola Moriah, quiero solicitar una cotización.",
    "",
    `Nombre y cargo: ${form.nombre}`,
    `Empresa: ${form.empresa}`,
    `Email: ${form.email}`,
    form.telefono ? `Teléfono: ${form.telefono}` : null,
    seleccion ? `Servicio: ${seleccion}` : null,
    form.cantidad ? `Cantidad estimada: ${form.cantidad}` : null,
    form.fechas ? `Fechas tentativas: ${form.fechas}` : null,
    form.mensaje ? `Mensaje: ${form.mensaje}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}

export function CTAFinal() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [services, setServices] = useState<Record<ServiceKey, boolean>>({
    hospedaje: false,
    equipos: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const setField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const resetForm = () => {
    setForm(EMPTY_FORM);
    setServices({ hospedaje: false, equipos: false });
    setErrors({});
    setStatus("idle");
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const text = encodeURIComponent(buildWhatsappMessage(form, services));
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
      const win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win) {
        // Pop-up blocked: fall back to same-tab navigation so the lead still lands.
        window.location.href = url;
      }
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const isSubmitting = status === "submitting";

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
        {/* Left: copy and contact alternatives */}
        <div>
          <BlurFade>
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#5BB3D9]">
              Cotización
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

        {/* Right: form */}
        <BlurFade delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 text-[var(--color-fg-primary)] shadow-[0_24px_60px_rgba(0,0,0,0.35)] md:p-10">
            <BorderBeam duration={14} size={260} />

            {status === "sent" ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-[var(--color-success)]/15 text-[var(--color-success)]">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                  Solicitud enviada
                </h3>
                <p className="mt-3 max-w-sm text-[var(--color-fg-secondary)]">
                  Abrimos WhatsApp con tu solicitud lista para enviar. Si no se abrió,
                  escríbenos al +56 9 9541 2163. Te respondemos en menos de 24 horas hábiles.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 text-sm font-medium text-[var(--color-brand-primary)] underline-offset-4 hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre y cargo</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      placeholder="Juan Pérez · Gerente"
                      value={form.nombre}
                      onChange={setField("nombre")}
                      aria-invalid={Boolean(errors.nombre)}
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                      className={errors.nombre ? "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/30" : ""}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="flex items-center gap-1.5 text-xs text-[var(--color-error)]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.nombre}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      placeholder="Razón social"
                      value={form.empresa}
                      onChange={setField("empresa")}
                      aria-invalid={Boolean(errors.empresa)}
                      aria-describedby={errors.empresa ? "empresa-error" : undefined}
                      className={errors.empresa ? "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/30" : ""}
                    />
                    {errors.empresa && (
                      <p id="empresa-error" className="flex items-center gap-1.5 text-xs text-[var(--color-error)]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.empresa}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email corporativo</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      placeholder="jperez@empresa.cl"
                      value={form.email}
                      onChange={setField("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-[var(--color-error)] focus-visible:border-[var(--color-error)] focus-visible:ring-[var(--color-error)]/30" : ""}
                    />
                    {errors.email && (
                      <p id="email-error" className="flex items-center gap-1.5 text-xs text-[var(--color-error)]">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      inputMode="tel"
                      placeholder="+56 9 ..."
                      value={form.telefono}
                      onChange={setField("telefono")}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Tipo de servicio</Label>
                  <div className="flex flex-wrap gap-2">
                    {(["hospedaje", "equipos"] as const).map((k) => (
                      <button
                        type="button"
                        key={k}
                        aria-pressed={services[k]}
                        onClick={() => setServices((s) => ({ ...s, [k]: !s[k] }))}
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
                      aria-pressed={services.hospedaje && services.equipos}
                      onClick={() => setServices({ hospedaje: true, equipos: true })}
                      className={`rounded-full border px-4 py-2 text-sm transition-all ${
                        services.hospedaje && services.equipos
                          ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary-hover)]"
                          : "border-[var(--color-border-default)] text-[var(--color-fg-secondary)] hover:border-[var(--color-border-strong)]"
                      }`}
                    >
                      Ambos
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="cantidad">Cantidad estimada</Label>
                    <Input
                      id="cantidad"
                      name="cantidad"
                      placeholder="Personas o equipos"
                      value={form.cantidad}
                      onChange={setField("cantidad")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fechas">Fechas tentativas</Label>
                    <Input
                      id="fechas"
                      name="fechas"
                      placeholder="Ej: Mar-Sep 2026"
                      value={form.fechas}
                      onChange={setField("fechas")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje breve</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Cuéntanos del proyecto, faena, plazos."
                    rows={4}
                    value={form.mensaje}
                    onChange={setField("mensaje")}
                  />
                </div>

                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-2 rounded-md border border-[var(--color-error)]/30 bg-[var(--color-error)]/5 p-3 text-sm text-[var(--color-error)]"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      No pudimos abrir WhatsApp. Escríbenos directo al +56 9 9541 2163 o a
                      contacto@moriah.cl.
                    </span>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Abriendo WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar solicitud
                    </>
                  )}
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
