"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Truck,
  Layers,
  Users,
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";

const WHATSAPP_NUMBER = "56995412163";

/**
 * Tarifas y plazos REFERENCIALES para la estimación en pantalla.
 * No son vinculantes: la propuesta formal se ajusta en terreno.
 * El cliente debe calibrar estos valores con su tarifario real.
 */
const RATE_BED_DAY_MIN = 38_000; // CLP por cama/día (full pensión)
const RATE_BED_DAY_MAX = 52_000;
const RATE_EQUIP_MONTH_MIN = 1_600_000; // CLP por equipo/mes
const RATE_EQUIP_MONTH_MAX = 2_400_000;
const DAYS_PER_MONTH = 30;

type Service = "hospedaje" | "equipos" | "ambos";
type Plazo = "1-3" | "3-6" | "6-12" | "12+";

const PLAZO_FACTOR: Record<Plazo, number> = {
  "1-3": 1.0,
  "3-6": 0.96,
  "6-12": 0.92,
  "12+": 0.88,
};

const PLAZO_LABEL: Record<Plazo, string> = {
  "1-3": "1 a 3 meses",
  "3-6": "3 a 6 meses",
  "6-12": "6 a 12 meses",
  "12+": "Más de 12 meses",
};

const SERVICES: { id: Service; label: string; desc: string; Icon: typeof Building2 }[] = [
  { id: "hospedaje", label: "Hospedaje", desc: "Camas, casino, lavandería 24/7", Icon: Building2 },
  { id: "equipos", label: "Equipos", desc: "Flota 4x4, eléctricos y autónomos", Icon: Truck },
  { id: "ambos", label: "Ambos", desc: "Cadena operativa completa", Icon: Layers },
];

const PERSON_CHIPS = [50, 100, 200, 500, 1000];
const EQUIP_CHIPS = [5, 10, 25, 50, 100];

const clp = (n: number) =>
  new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(n / 1000) * 1000);

type Estimate = {
  min: number;
  max: number;
  movilizacion: string;
  sla: string[];
};

function computeEstimate(
  service: Service,
  personas: number,
  equipos: number,
  plazo: Plazo | null
): Estimate | null {
  if (!plazo) return null;
  const factor = PLAZO_FACTOR[plazo];

  const wantsHospedaje = service === "hospedaje" || service === "ambos";
  const wantsEquipos = service === "equipos" || service === "ambos";

  let min = 0;
  let max = 0;
  if (wantsHospedaje) {
    min += personas * RATE_BED_DAY_MIN * DAYS_PER_MONTH;
    max += personas * RATE_BED_DAY_MAX * DAYS_PER_MONTH;
  }
  if (wantsEquipos) {
    min += equipos * RATE_EQUIP_MONTH_MIN;
    max += equipos * RATE_EQUIP_MONTH_MAX;
  }
  min *= factor;
  max *= factor;
  if (min <= 0) return null;

  // Tiempo de movilización
  const movHospedaje = personas <= 100 ? 14 : personas > 500 ? 30 : 21;
  const movEquipos = equipos <= 10 ? 7 : 15;
  let dias = 0;
  if (wantsHospedaje) dias = Math.max(dias, movHospedaje);
  if (wantsEquipos) dias = Math.max(dias, movEquipos);

  // SLA aplicable
  const sla: string[] = [];
  if (wantsEquipos) sla.push("Reemplazo de equipo en 24 horas");
  if (wantsHospedaje) sla.push("Casino y aseo 24/7, disponibilidad 99%+");
  sla.push("SLA por escrito en el contrato marco");

  return { min, max, movilizacion: `${dias} días`, sla };
}

export function Cotizador() {
  const [step, setStep] = useState(0); // 0,1,2
  const [service, setService] = useState<Service | null>(null);
  const [personas, setPersonas] = useState(0);
  const [equipos, setEquipos] = useState(0);
  const [plazo, setPlazo] = useState<Plazo | null>(null);

  const wantsHospedaje = service === "hospedaje" || service === "ambos";
  const wantsEquipos = service === "equipos" || service === "ambos";
  const estimate = service ? computeEstimate(service, personas, equipos, plazo) : null;

  const canProceed =
    (step === 0 && service !== null) ||
    (step === 1 &&
      ((wantsHospedaje ? personas > 0 : true) && (wantsEquipos ? equipos > 0 : true) &&
        (wantsHospedaje || wantsEquipos))) ||
    step === 2;

  const buildMessage = () => {
    const lines = [
      "Hola Moriah, dimensioné mi faena en el cotizador:",
      "",
      `Servicio: ${service}`,
      wantsHospedaje ? `Personas a hospedar: ${personas}` : null,
      wantsEquipos ? `Equipos en arriendo: ${equipos}` : null,
      plazo ? `Plazo: ${PLAZO_LABEL[plazo]}` : null,
      estimate ? `Estimación referencial mensual: ${clp(estimate.min)} a ${clp(estimate.max)}` : null,
      estimate ? `Movilización estimada: ${estimate.movilizacion}` : null,
      "",
      "Quiero la propuesta formal con SLA por escrito.",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  };

  const onConfirm = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`;
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  };

  return (
    <section id="cotizar" className="relative bg-[var(--color-bg-base)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
            Cotizador
          </div>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Dimensiona tu faena en{" "}
            <span className="text-brand-highlight">30 segundos.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-fg-secondary)]">
            Arma tu escenario y obtén un rango referencial, el SLA que aplica y el tiempo
            de movilización. Sin esperar correos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          {/* Stepper */}
          <div>
            {/* Progress rail */}
            <ol className="mb-10 flex items-center gap-2">
              {["Servicio", "Volumen", "Plazo"].map((label, i) => (
                <li key={label} className="flex flex-1 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => i <= step && setStep(i)}
                    disabled={i > step}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-sm transition-colors ${
                      i < step
                        ? "bg-[var(--color-brand-primary)] text-white"
                        : i === step
                          ? "border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)]"
                          : "border border-[var(--color-border-default)] text-[var(--color-fg-muted)]"
                    }`}
                    aria-current={i === step ? "step" : undefined}
                  >
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </button>
                  <span
                    className={`text-sm ${
                      i === step ? "font-medium text-[var(--color-fg-primary)]" : "text-[var(--color-fg-muted)]"
                    }`}
                  >
                    {label}
                  </span>
                  {i < 2 && <span className="h-px flex-1 bg-[var(--color-border-subtle)]" />}
                </li>
              ))}
            </ol>

            <div className="min-h-[260px]">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                      ¿Qué necesitas?
                    </p>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {SERVICES.map(({ id, label, desc, Icon }) => (
                        <button
                          key={id}
                          type="button"
                          onClick={() => setService(id)}
                          aria-pressed={service === id}
                          className={`group flex flex-col items-start gap-3 rounded-xl border p-5 text-left transition-all active:scale-[0.98] ${
                            service === id
                              ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)]"
                              : "border-[var(--color-border-default)] hover:border-[var(--color-border-strong)]"
                          }`}
                        >
                          <Icon
                            className={`h-6 w-6 ${
                              service === id ? "text-[var(--color-brand-primary)]" : "text-[var(--color-fg-muted)]"
                            }`}
                            strokeWidth={1.5}
                          />
                          <div>
                            <div className="font-medium text-[var(--color-fg-primary)]">{label}</div>
                            <div className="mt-1 text-xs text-[var(--color-fg-secondary)]">{desc}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                    className="space-y-8"
                  >
                    {wantsHospedaje && (
                      <QuantityPicker
                        label="Personas a hospedar"
                        icon={Users}
                        chips={PERSON_CHIPS}
                        value={personas}
                        onChange={setPersonas}
                        unit="camas"
                      />
                    )}
                    {wantsEquipos && (
                      <QuantityPicker
                        label="Equipos en arriendo"
                        icon={Truck}
                        chips={EQUIP_CHIPS}
                        value={equipos}
                        onChange={setEquipos}
                        unit="equipos"
                      />
                    )}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <p className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--color-fg-muted)]">
                      ¿Por cuánto tiempo?
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(Object.keys(PLAZO_LABEL) as Plazo[]).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPlazo(p)}
                          aria-pressed={plazo === p}
                          className={`rounded-xl border px-5 py-4 text-left text-sm font-medium transition-all active:scale-[0.98] ${
                            plazo === p
                              ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary-hover)]"
                              : "border-[var(--color-border-default)] text-[var(--color-fg-secondary)] hover:border-[var(--color-border-strong)]"
                          }`}
                        >
                          {PLAZO_LABEL[p]}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Nav buttons */}
            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-fg-secondary)] transition-colors hover:text-[var(--color-fg-primary)] disabled:invisible"
              >
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
              {step < 2 && (
                <button
                  type="button"
                  onClick={() => canProceed && setStep((s) => Math.min(2, s + 1))}
                  disabled={!canProceed}
                  className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-brand-primary)] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[var(--color-brand-primary-hover)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continuar
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              )}
            </div>
          </div>

          {/* Live estimate panel */}
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-lg)] md:p-8">
            {estimate && <BorderBeam duration={16} size={220} />}
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
              Estimación en vivo
            </div>

            {estimate ? (
              <div className="mt-5">
                <div className="text-xs text-[var(--color-fg-muted)]">Rango referencial mensual</div>
                <div className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[var(--color-fg-primary)] md:text-4xl">
                  {clp(estimate.min)}
                  <span className="px-2 text-[var(--color-fg-muted)]">–</span>
                  {clp(estimate.max)}
                </div>

                <dl className="mt-7 space-y-4 border-t border-[var(--color-border-subtle)] pt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary)]" strokeWidth={2} />
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                        Movilización estimada
                      </dt>
                      <dd className="font-mono text-lg text-[var(--color-fg-primary)]">
                        {estimate.movilizacion}
                      </dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-primary)]" strokeWidth={2} />
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-[var(--color-fg-muted)]">
                        SLA aplicable
                      </dt>
                      <dd className="mt-1 space-y-1">
                        {estimate.sla.map((s) => (
                          <div key={s} className="text-sm text-[var(--color-fg-secondary)]">
                            {s}
                          </div>
                        ))}
                      </dd>
                    </div>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={onConfirm}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-brand-primary)] px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-brand-primary-hover)] active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Confirmar propuesta formal
                </button>
                <p className="mt-3 text-xs leading-relaxed text-[var(--color-fg-muted)]">
                  Estimación referencial, no vinculante. La propuesta formal se ajusta en
                  terreno con SLA por escrito.
                </p>
              </div>
            ) : (
              <div className="mt-5 flex min-h-[280px] flex-col justify-center">
                <div className="space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-[var(--color-bg-elevated)]" />
                  <div className="h-10 w-full rounded-lg bg-[var(--color-bg-elevated)]" />
                  <div className="h-3 w-1/2 rounded-full bg-[var(--color-bg-elevated)]" />
                </div>
                <p className="mt-6 text-sm text-[var(--color-fg-muted)]">
                  Completa los tres pasos y tu estimación aparece aquí al instante.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuantityPicker({
  label,
  icon: Icon,
  chips,
  value,
  onChange,
  unit,
}: {
  label: string;
  icon: typeof Users;
  chips: number[];
  value: number;
  onChange: (n: number) => void;
  unit: string;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <Icon className="h-5 w-5 text-[var(--color-brand-primary)]" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[var(--color-fg-primary)]">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {chips.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            aria-pressed={value === n}
            className={`rounded-full border px-4 py-2 font-mono text-sm transition-all active:scale-[0.97] ${
              value === n
                ? "border-[var(--color-brand-primary)] bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary-hover)]"
                : "border-[var(--color-border-default)] text-[var(--color-fg-secondary)] hover:border-[var(--color-border-strong)]"
            }`}
          >
            {n.toLocaleString("es-CL")}
          </button>
        ))}
        <label className="flex items-center gap-2 rounded-full border border-[var(--color-border-default)] px-4 py-2">
          <span className="font-mono text-sm text-[var(--color-fg-muted)]">Otro:</span>
          <input
            type="number"
            min={0}
            inputMode="numeric"
            value={value === 0 || chips.includes(value) ? "" : value}
            onChange={(e) => onChange(Math.max(0, Number(e.target.value) || 0))}
            placeholder="0"
            aria-label={`Cantidad personalizada de ${unit}`}
            className="w-16 bg-transparent font-mono text-sm text-[var(--color-fg-primary)] outline-none placeholder:text-[var(--color-fg-muted)]"
          />
        </label>
      </div>
    </div>
  );
}
