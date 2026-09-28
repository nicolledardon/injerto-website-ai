---
name: css-architecture
description: Aplica siempre que se escribe o reorganiza CSS en este proyecto.
---

## Propósito

Mantener el CSS organizado, predecible y sin necesidad de `!important`, dividido por
responsabilidad y cargado en un orden fijo.

## Reglas

1. Cuatro archivos, en este orden de carga: `variables.css` → `base.css` → `layout.css` →
   `components.css`.
2. `!important` está prohibido en todo el proyecto — cualquier problema de especificidad se
   resuelve con estructura de selectores, no con `!important`.
3. Nomenclatura de clases estilo BEM (`.product-card`, `.product-card__title`,
   `.product-card--merch`).
4. Media queries mobile-first, siempre `min-width`, en los breakpoints 480/768/1024/1280px —
   nunca `max-width` como base.
5. Cada bloque de CSS lleva un comentario de sección indicando qué componente o zona de layout
   cubre.
6. Ningún selector supera una especificidad razonable (evitar anidar más de 2-3 niveles o usar
   IDs como selector de estilos).

## Ejemplo

Correcto:

```css
/* Tarjeta de producto — grid de Tienda y "Cafés de Temporada" en Home */
.product-card { padding: var(--space-3); border-radius: var(--radius-md); }
.product-card--merch { padding-block: var(--space-4); }

@media (min-width: 768px) {
  .product-card { padding: var(--space-4); }
}
```

Incorrecto:

```css
#tienda .grid > div.card { padding: 24px !important; }
```

## Checklist de verificación

- [ ] Orden de carga respetado en cada HTML
- [ ] Cero apariciones de `!important` (`grep -r "!important" css/`)
- [ ] Clases en BEM
- [ ] Media queries solo `min-width`
- [ ] Cada sección de CSS tiene su comentario
