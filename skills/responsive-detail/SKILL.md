---
name: responsive-detail
description: Aplica en la Fase 4 (auditoría responsive) y siempre que se revise o se corrija el comportamiento del sitio en distintos tamaños de pantalla.
---

## Propósito

Detectar y corregir los puntos de fallo responsive que un vistazo rápido no detecta —
comportamiento a detalle, no solo "se ve bien en móvil y en desktop".

## Reglas (checklist pass/fail por página)

1. Sin scroll horizontal a 320px (`document.documentElement.scrollWidth <= innerWidth`).
2. Imágenes: `max-width:100%; height:auto`, `width`/`height` o `aspect-ratio` explícitos,
   `object-fit` en recortes, `loading="lazy"` bajo el pliegue.
3. Hijos de flex/grid con texto tienen `min-width:0`; palabras/URLs largas usan
   `overflow-wrap:anywhere`.
4. Sin alturas fijas en contenedores de contenido — usar `min-height` o tamaño por contenido.
5. El hero usa `min-height: 100svh` (fallback `100vh`), nunca `100vh` a secas.
6. Tipografía fluida con `clamp()` en h1/h2; cuerpo ≥16px; longitud de línea ≤ ~70ch.
7. Zonas táctiles ≥44×44px (nav, tabs, botones, iconos del footer); ≥8px entre objetivos
   adyacentes.
8. Inputs de formulario ≥16px de `font-size` (evita el zoom automático de iOS).
9. Efectos hover envueltos en `@media (hover:hover)`; nada es alcanzable solo por hover.
10. Nav móvil: abre/cierra, se cierra al hacer clic en un link y con Esc, `aria-expanded` se
    actualiza, el body no hace scroll detrás del overlay, funciona en el límite de 768px.
11. Tabs de Tienda: caben o hacen scroll horizontal a 320px sin envolver mal; operables por
    teclado.
12. Header sticky: `scroll-padding-top` para que los anchors no queden tapados.
13. El grid de productos pasa de 1 → 2 → 3/4 columnas sin tarjetas huérfanas de ancho raro.
14. El timeline de Proceso pasa de horizontal (desktop) a vertical (móvil) con los conectores
    alineados.
15. Las secciones de colorblock mantienen el contraste de texto en todos los breakpoints (sin
    texto sobre un recorte de imagen recargado).
16. Móvil en horizontal (375×667 rotado) y zoom al 200% siguen siendo usables.
17. `prefers-reduced-motion` desactiva las transiciones no esenciales.
18. Las columnas del footer se apilan limpiamente; la línea legal/disclaimer es legible.

## Ejemplo

Correcto:

```css
.hero { min-height: 100svh; }
@media (hover: hover) {
  .card:hover { transform: translateY(-4px); }
}
```

Incorrecto:

```css
.hero { height: 100vh; }
.card:hover { transform: translateY(-4px); } /* también se dispara al tocar en móvil */
```

## Checklist de verificación

Ver las 18 reglas numeradas arriba — cada una se marca pass/fail por página (Home, Tienda,
Finca, Coffee Shops) en `PLAN.md` durante la Fase 4.
