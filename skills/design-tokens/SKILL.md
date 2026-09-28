---
name: design-tokens
description: Aplica al nombrar o usar tokens de diseño (color, tipografía, espaciado) en Figma o en CSS para El Injerto.
---

## Propósito

Asegurar que los tokens de diseño se nombran por función (no por apariencia) y que el CSS solo
los consume a través de variables, nunca con valores sueltos.

## Reglas

1. Nombrar cada token por su rol (`--color-block-1`, `--color-text-primary`,
   `--color-accent-gold`), nunca por su apariencia (`--color-orange`).
2. `components.css` y `layout.css` solo usan `var(--…)` — ningún valor hexadecimal ni número de
   espaciado suelto fuera de `variables.css`.
3. Cada token de color en Figma tiene su ratio de contraste calculado y registrado (≥4.5:1 texto
   normal, ≥3:1 texto grande) antes de aplicarse a una página.
4. Toda variable de Figma tiene su equivalente exacto en `variables.css`, documentado en una
   tabla de mapeo Figma ↔ CSS.
5. Un token sin rol documentado no se usa en ninguna página — se resuelve el rol primero.

## Ejemplo

Correcto:

```css
.btn-primary { background: var(--color-accent-gold); }
```

Incorrecto:

```css
.btn-primary { background: #D4AF37; }
```

## Checklist de verificación

- [ ] Todos los tokens tienen nombre por rol, no por apariencia
- [ ] Tabla de mapeo Figma ↔ CSS existe y está actualizada
- [ ] Ratios de contraste calculados y registrados
- [ ] Cero valores hex/px sueltos en `components.css` y `layout.css`
