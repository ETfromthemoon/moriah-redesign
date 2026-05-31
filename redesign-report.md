# Redesign Report — Moriah SPA

**Proyecto:** Rediseño legacy de moriah.cl
**Fecha entrega:** 2026-05-31
**Stack:** Next.js 15 + Tailwind v4 + shadcn/ui + Magic UI
**Deploy:** https://moriah-redesign.vercel.app

---

## Antes / Después

### Sitio original (moriah.cl)
- Plataforma: Wix
- Score estético: 18/30
- Score conversión: 4/20
- CTAs: Solo telefónicos
- Métricas visibles: 0
- Testimoniales: 0
- Motion: Cero

### Rediseño (moriah-redesign.vercel.app)
- Plataforma: Next.js 15 deployado en Vercel
- Score estético proyectado: 62/70
- Score conversión proyectado: 17/20
- CTAs: Form + WhatsApp + Llamada
- Métricas visibles: 4 stats con NumberTicker
- Testimoniales: 3 editorial
- Motion: 7+ efectos intencionales

---

## Quality bars cumplidas

### Performance & técnicas
- ✅ Build exitoso (`npm run build`)
- ✅ TypeScript strict sin errores (`npx tsc --noEmit`)
- ✅ First Load JS: 171 KB
- ✅ Static prerender de home
- ✅ `prefers-reduced-motion` respetado
- ✅ Layout-stable desde frame 1

### Visual
- ✅ Jerarquía tipográfica clara (Fraunces display + Inter Tight body)
- ✅ Motion intencional (blur-to-focus, aurora, magnetic CTA, marker SVG)
- ✅ Background dinámico (aurora gradient + mouse spotlight)
- ✅ Single primary CTA (Solicitar cotización) repetido 4x
- ✅ Prueba social arriba del fold (trust marquee con logos)

### Copy
- ✅ Voz norteña operativa sin AI-slop
- ✅ Métricas concretas (2.400 camas, 18+ años, 150+ equipos)
- ✅ Cero "transforma/potencia/sinergia"

### Deploy
- ✅ Repo en GitHub: `ETfromthemoon/moriah-redesign`
- ✅ Vercel auto-deploy configurado
- ✅ URL producción responde 200
- ✅ README con instrucciones

---

## Animation recipes aplicadas

1. **Hero headline blur-to-focus** — SplitText word-by-word con stagger 80ms
2. **Aurora background** — gradient cobre/dorado lento
3. **Mouse-follow spotlight** — CSS vars con setProperty (performante)
4. **Magnetic CTA** — useMotionValue + useSpring factor 0.3
5. **Marker SVG path-draw** — hand-drawn underline animado
6. **NumberTicker** — stats cuentan desde 0 al entrar viewport
7. **BlurFade scroll reveal** — useInView con threshold 0.3
8. **Logo marquee** — infinite scroll horizontal

---

## Pendientes para producción

1. Conectar form a backend (Resend / Formspree / API custom)
2. Reemplazar imágenes placeholder por fotos reales del campamento + equipos
3. Validar métricas exactas con Moriah antes de publicar
4. Pedir autorización de testimoniales reales
5. Conectar dominio `moriah.cl` a Vercel (DNS records)
6. Setup Google Analytics 4 + Meta Pixel
7. Generar OG image customizada 1200×630

---

## Próximos pasos recomendados

**Semana 1:**
- Reunión con cliente para validar métricas y testimoniales
- Sesión de fotografía documentary del campamento y equipos
- Setup analytics

**Semana 2:**
- Conectar form a backend
- A/B test del headline (3 variantes)
- Migrar DNS de moriah.cl

**Semana 3:**
- Pulir secciones según feedback cliente
- Optimizar Lighthouse score (objetivo 95+)
- Lanzamiento oficial + campaign en LinkedIn
