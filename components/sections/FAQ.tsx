"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "@/components/magicui/blur-fade";

const faqs = [
  {
    q: "¿Trabajan con contrato marco y orden de compra?",
    a: "Sí. Operamos con contrato marco, OC por evento o servicio recurrente, y facturación corporativa. Nuestro estándar es propuesta operativa con SLA por escrito antes de movilizar.",
  },
  {
    q: "¿En qué regiones operan?",
    a: "Nuestro foco es Calama y la Región de Antofagasta. También operamos en Atacama y Tarapacá. No operamos al sur de Coquimbo: preferimos decirlo antes de cotizar.",
  },
  {
    q: "¿Cuál es el plazo mínimo de servicio?",
    a: "Para hospedaje, 30 días. Para equipos, 15 días. Proyectos puntuales bajo conversación. Lo importante es que la operación tenga sentido logístico para ambas partes.",
  },
  {
    q: "¿Manejan facturación corporativa con condiciones a 30/60/90 días?",
    a: "Sí, con clientes con historial. Para primera operación trabajamos con 30 días o anticipo parcial según volumen. Todo escrito en el contrato marco, sin sorpresas.",
  },
  {
    q: "¿Cómo coordinan con HSEC y prevención de riesgos del mandante?",
    a: "Nuestro personal entra con HSEC vigente, charla de 5 minutos diaria y reportabilidad de incidentes alineada al estándar del mandante (Codelco, AMSA, BHP, etc.). Sumamos un prevencionista cuando la operación lo requiere.",
  },
  {
    q: "¿Tienen flota propia o subcontratada?",
    a: "Flota propia para el 90% de la operación. Subcontratamos solo equipos especializados con proveedores con los que llevamos años, y siempre lo decimos en la cotización.",
  },
  {
    q: "¿Qué incluye el servicio de hotelería?",
    a: "Camas, ropa de cama y aseo diario, casino con menú nortino (3 comidas + colación), lavandería industrial, agua caliente 24/7, conectividad y coordinación con el shift de tu faena.",
  },
];

export function FAQ() {
  return (
    <section className="relative border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <BlurFade>
          <div className="mb-12">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-copper)]">
              Preguntas
            </div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl">
              Lo que preguntan los gerentes antes de cotizar.
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  );
}
