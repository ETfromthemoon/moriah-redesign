# Site Architecture — Moriah SPA Redesign

**Tipo:** Landing one-page B2B premium
**Idioma:** Español (Chile)
**Stack:** Next.js 15 + Tailwind v4 + shadcn/ui + Magic UI
**Objetivo de conversión:** Captar leads cualificados de gerentes de proyectos mineros e industriales

---

## Flujo de conversión

```
HERO (5s para entender) →
  STATS (credibilidad inmediata) →
    DUAL OFFERING (qué hacemos: hospedaje + equipos) →
      MÉTODO (cómo trabajamos) →
        CASOS (a quién hemos atendido) →
          TESTIMONIOS (qué dicen los gerentes) →
            FAQ B2B (despejar fricción) →
              CTA FINAL + FORM (cotizar ahora)
```

CTA primario único: **"Solicitar cotización"** (abre form modal o ancla a sección final).
CTA secundario constante (sticky en mobile, header en desktop): **WhatsApp** + **Llamar**.

---

## Secciones detalladas

### 1. Navbar
- Logo Moriah (a la izquierda)
- Links: Servicios · Casos · Contacto
- Botones derecha: WhatsApp icon + "Solicitar cotización" (primary copper)
- Mobile: hamburguesa minimalista con drawer dark
- Sticky con backdrop-blur al hacer scroll
- En hero inicial: transparente sobre fondo oscuro

### 2. Hero
**Headline (display, Fraunces black, clamp 3.5-8rem):**
> Operamos donde Chile produce.

**Sub-headline (body, Inter Tight, 1.25rem text-secondary):**
> Hospedaje corporativo y arriendo de equipos para faenas mineras e industriales en el norte de Chile. Logística resuelta para que tu proyecto nunca se detenga.

**Elementos visuales:**
- Background: foto cinemática del desierto de Atacama / instalaciones mineras (overlay degradado de antracita a transparente)
- Aurora gradient sutil cobre/dorado en blend-mode soft-light
- Mouse-follow spotlight con cobre soft
- Animación: blur-to-focus reveal del headline (1.2s), stagger sub-headline

**CTAs:**
- Primario: "Solicitar cotización" (botón cobre, magnetic, scroll a form)
- Secundario ghost: "Conocer servicios" (scroll a sección dual)

**Trust bar inferior del hero:**
> "Operamos para Codelco, Antofagasta Minerals, Komatsu y otras 30+ empresas del norte."
(con logos grises desaturados scrolling marquee lento)

### 3. Stats bar (sticky impact)
4 cifras grandes con NumberTicker y separación monospace:
- **18+** años en terreno
- **2.400** camas operativas
- **150+** equipos en flota
- **35** empresas activas

Fondo carbón, números en oro Atacama, etiquetas en polvo gris.

### 4. Dual Offering — Hotelería + Equipos
Split-screen interactivo (hover expande la mitad):

**Izquierda — Hotelería corporativa**
- Heading: "Camas, casino, lavandería. Operación 24/7."
- Bullets: Capacidad modular · Casino con menú minero · Lavandería industrial · Aseo y mantención continua · Coordinación con shift de faena
- CTA: "Ver hotelería"
- Imagen documentary de habitación / comedor

**Derecha — Arriendo de equipos**
- Heading: "Equipos autónomos y eléctricos listos para faena."
- Bullets: Camionetas 4x4 · Equipos eléctricos · Mantención preventiva incluida · Reemplazo en 24h · Choferes opcionales con HSEC
- CTA: "Ver equipos"
- Imagen de equipos en operación

### 5. Método — Cómo trabajamos
3 pasos en bento grid con line drawings:

1. **Diagnóstico de faena** — Visitamos tu obra, dimensionamos cuadrilla y plazos.
2. **Propuesta operativa** — Contrato marco, OC, facturación y SLA por escrito.
3. **Operación continua** — Coordinación con jefe de campamento, reportes mensuales.

Cada paso con icono lucide stroke 1.5, número en mono cobre.

### 6. Casos destacados
3 cards horizontales con métricas reales (o placeholder honesto):

**Caso 1 — Codelco Chuquicamata**
- 800 trabajadores hospedados durante 18 meses
- 45 camionetas en flota dedicada
- Cero incidentes HSEC
- "Logística sin sobresaltos en un proyecto de alta exigencia." — Jefe de Servicios, Codelco

**Caso 2 — Minera Centinela (Antofagasta Minerals)**
- 320 camas operativas en faena
- Cambio de turno cada 7x7
- 99.2% disponibilidad de equipos

**Caso 3 — Constructora EPC industrial**
- Campamento modular en 21 días
- Casino con 1.200 raciones diarias

(Si los datos exactos no se tienen, marcar como "Casos representativos del sector" en disclaimer pequeño.)

### 7. Testimoniales
3-4 quotes editorial con foto + cargo + empresa:

> "Llevamos cinco años trabajando con Moriah. Cuando necesitamos sumar 200 camas en 30 días para un proyecto de expansión, lo resolvieron. Esa capacidad de respuesta vale más que la cotización más barata."
> — **Jorge M.**, Gerente de Servicios Generales, *empresa minera del norte*

> "El campamento que opera Moriah para nuestra cuadrilla tiene una limpieza y un casino que mantienen al equipo con energía. Eso baja la rotación. Punto."
> — **Carolina P.**, Jefa de Faena, *constructora industrial*

> "Reemplazaron una camioneta a las 22:00 un sábado. Eso define a un proveedor."
> — **Rodrigo S.**, Superintendente de Operaciones

(Si no hay testimonios reales aún, marcar como "Testimoniales pendientes de validación" en backend de copy.)

### 8. FAQ B2B
Acordeón shadcn con preguntas reales del sector:

1. ¿Trabajan con contrato marco y OC?
2. ¿En qué regiones operan?
3. ¿Cuál es el plazo mínimo de servicio?
4. ¿Manejan facturación corporativa con condiciones a 30/60/90 días?
5. ¿Cómo coordinan con HSEC y prevención de riesgos del mandante?
6. ¿Tienen flota propia o subcontratada?
7. ¿Qué incluye el servicio de hotelería (casino, lavandería, aseo)?

### 9. CTA final + Formulario
Sección full-bleed con form de cotización a la derecha y copy persuasivo a la izquierda.

**Heading (display):**
> Tu próximo proyecto en el norte empieza con una llamada.

**Sub:**
> Cuéntanos qué necesitas. Dimensionamos contigo en 24h y te enviamos propuesta operativa.

**Form fields:**
- Nombre y cargo
- Empresa
- Email corporativo
- Teléfono
- Tipo de servicio (checkbox: Hospedaje / Equipos / Ambos)
- Cantidad de personas o equipos estimada
- Fechas tentativas (rango)
- Mensaje breve
- Submit: "Enviar solicitud"

**Alternativas a la derecha del form:**
- WhatsApp directo: +56 9 9541 2163
- Llamar ahora: +56 9 9541 2163
- Email: contacto@moriah.cl
- Dirección Calama (con link Google Maps)

### 10. Footer
- Logo + tagline corto
- Columnas: Servicios · Empresa · Contacto · Legal
- Redes: LinkedIn, Instagram, Facebook
- Copyright + año
- Sutil aurora gradient inferior cobre

### Elementos flotantes globales
- **WhatsApp FAB** abajo derecha (mobile + desktop) con pulse animation discreta
- **Scroll progress bar** arriba (1px cobre)
- **Cookie banner** minimal si aplica

---

## Copy direction (no copy final)

- Voz: norteña, operativa, sin adornos. Hablar como gerente de proyecto, no como marketer.
- Métricas sobre adjetivos. "2.400 camas" > "gran capacidad".
- Verbos en infinitivo o presente activo. "Operamos", "resolvemos", "coordinamos".
- Cero "transforma", "potencia", "sinergia", "soluciones integrales".
- CTAs específicos: "Solicitar cotización" > "Empieza ahora".
- Honestidad: si no atendemos algo, decirlo (ej. "No operamos al sur de Coquimbo").

Pasar todo el copy final por `/humanizer` antes de cerrar Fase 5.

---

## Mobile considerations

- Hero: headline reduce a 3.5rem, sub a 1rem, CTA full-width
- Dual offering pasa a stack vertical (no split-screen)
- Stats bar: 2x2 grid en lugar de 1x4
- Casos: carrusel horizontal scroll snap
- Form: una columna, labels arriba, inputs full width
- Sticky bottom bar mobile: 2 botones (WhatsApp + Cotizar)
- Reducir aurora intensity para no afectar legibilidad
