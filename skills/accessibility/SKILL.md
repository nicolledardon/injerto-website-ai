---
name: accessibility
description: Aplica al construir o revisar cualquier componente interactivo, texto o color del sitio de El Injerto.
---

## Propósito

Garantizar que el sitio es operable y comprensible con teclado y con lectores de pantalla, no
solo visualmente correcto.

## Reglas

1. Contraste mínimo: texto normal ≥4.5:1, texto grande (≥24px o ≥19px bold) ≥3:1, siempre
   contra el fondo real donde aparece.
2. Todo elemento enfocable tiene un estado `:focus-visible` visible y distinto del hover —
   nunca `outline: none` sin sustituto.
3. Las tabs de Tienda siguen el patrón ARIA tabs: `role="tablist"`, cada tab `role="tab"` con
   `aria-selected`, cada panel `role="tabpanel"`, tabindex progresivo (roving tabindex), y
   navegación con ←/→/Home/End.
4. La navegación móvil (hamburguesa) sigue el patrón disclosure: botón con `aria-expanded` y
   `aria-controls`, Esc cierra, el foco vuelve al botón al cerrar.
5. Toda imagen con contenido tiene `alt` descriptivo en español; las imágenes puramente
   decorativas usan `alt=""`.
6. `prefers-reduced-motion: reduce` desactiva cualquier transición o animación no esencial.
7. El color nunca es el único medio para transmitir un estado (ej. tab activa necesita además
   un indicador visual no-color, como subrayado o peso de fuente).

## Ejemplo

Correcto:

```html
<div role="tablist" aria-label="Categorías">
  <button role="tab" aria-selected="true" aria-controls="panel-cafe" id="tab-cafe">Café</button>
  <button role="tab" aria-selected="false" aria-controls="panel-merch" id="tab-merch" tabindex="-1">Merch</button>
</div>
```

Incorrecto:

```html
<div class="tabs">
  <div class="tab active" onclick="showCafe()">Café</div>
  <div class="tab" onclick="showMerch()">Merch</div>
</div>
```

## Checklist de verificación

- [ ] Ratios de contraste calculados para cada par texto/fondo usado
- [ ] `:focus-visible` presente y distinguible del hover en todo elemento interactivo
- [ ] Tabs y nav móvil siguen los patrones ARIA descritos arriba
- [ ] Todo `<img>` de contenido tiene `alt`; los decorativos tienen `alt=""`
- [ ] `prefers-reduced-motion` respetado
- [ ] Ningún estado se comunica solo con color
