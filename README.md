# Moriah SPA — Rediseño Premium

Rediseño completo de [moriah.cl](https://www.moriah.cl/) construido como landing premium B2B para captar leads cualificados de gerentes de proyectos mineros e industriales en el norte de Chile.

## 🚀 Producción

- **Live:** https://moriah-redesign.vercel.app
- **Repo:** https://github.com/ETfromthemoon/moriah-redesign
- **Auto-deploy:** cada push a `main` deploya automáticamente

## 📦 Stack

- **Next.js 15** (App Router) + TypeScript strict
- **Tailwind CSS v4** (CSS-first con `@theme`, sin config file)
- **shadcn/ui primitives** (Radix-based)
- **Magic UI** custom (BlurFade, Marquee, NumberTicker, BorderBeam, ShimmerButton, AuroraText)
- **Framer Motion** + **lucide-react**
- **next/font** con Fraunces + Inter Tight + JetBrains Mono

## 🎨 Identidad visual

- **Paleta:** Antracita `#0A0A0A` + Cobre Calama `#C1632D` + Oro Atacama `#E8B873`
- **Tipografía display:** Fraunces (serif moderna con SOFT/WONK axis)
- **Tipografía body:** Inter Tight
- **Tono:** Industrial premium oscuro con calor cobre — guiño minero sin cliché

Ver `brand-profile.json` y `design-tokens.json` para detalle completo.

## 🏗️ Estructura

```
MORIAH/
├── app/
│   ├── layout.tsx          # Metadata + fuentes
│   ├── page.tsx            # Composición de secciones
│   └── globals.css         # Tailwind v4 + design tokens
├── components/
│   ├── ui/                 # Primitives (button, card, accordion, input...)
│   ├── magicui/            # Componentes animados custom
│   └── sections/           # Navbar, Hero, StatsBar, DualOffering, Metodo,
│                           # Casos, Testimoniales, FAQ, CTAFinal, Footer,
│                           # WhatsAppFloat, ScrollProgress
├── lib/utils.ts            # cn() helper
├── audit-report.md         # Auditoría del sitio original
├── brand-profile.json      # DNA de marca
├── design-tokens.json      # Tokens visuales
└── site-architecture.md    # Arquitectura de conversión
```

## 🛠️ Desarrollo local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de producción
npx tsc --noEmit   # Type check
```

## 🚢 Deploy

Conectado a Vercel con auto-deploy. Para forzar deploy manual:

```bash
vercel --prod
```

## 📊 Métricas de mejora vs. sitio original

| Dimensión | Original (Wix) | Rediseño |
|---|---|---|
| Score global | 38/100 | 85/100 (proyectado) |
| CTAs above-the-fold | 4 dispersos | 1 primario claro |
| Canales captación | Solo teléfono | Form + WhatsApp + Llamada |
| Métricas visibles | 0 | 4 stats con NumberTicker |
| Testimoniales | 0 | 3 quotes editorial |
| Motion intencional | 0 | 7+ efectos premium |
| Mobile experience | Funcional | Mobile-first optimizado |

## 🎯 Secciones de conversión

1. **Hero** — "Operamos donde Chile produce" con blur-to-focus + aurora + magnetic CTA
2. **Stats bar** — 18+ años, 2.400 camas, 150+ equipos, 35 empresas
3. **Dual Offering** — Hotelería corporativa + Arriendo de equipos (split-screen interactivo)
4. **Método** — 3 pasos: Diagnóstico → Propuesta → Operación continua
5. **Casos destacados** — Codelco, Antofagasta Minerals, EPC industriales
6. **Testimoniales** — Gerentes de servicios y jefes de faena
7. **FAQ B2B** — Contrato marco, OC, plazos, facturación, HSEC
8. **CTA Final + Form** — Cotización en 24h con campos cualificadores

## 🔧 Pendientes / mejoras sugeridas

- [ ] Conectar form a backend real (Resend, Formspree, o API custom)
- [ ] Reemplazar imágenes placeholder por fotografía documentary real del campamento y equipos
- [ ] Validar métricas exactas con cliente antes de publicar
- [ ] Validar testimoniales reales (con autorización de cliente final)
- [ ] Conectar dominio custom `moriah.cl` a Vercel
- [ ] Configurar Google Analytics 4 + Meta Pixel
- [ ] Generar OG image 1200×630 customizada

## 📞 Captación

CTAs activos en el rediseño:
- **Form de cotización** (sección 8)
- **WhatsApp** flotante: +56 9 9541 2163
- **Llamada directa** desde header: +56 9 9541 2163
- **Email:** contacto@moriah.cl

---

Construido siguiendo metodología `/legacy-redesign` con orquestación de `/ui-ux-pro-max` y `/claude-web-designer`.
