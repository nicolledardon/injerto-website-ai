# Polish Agent

- **Rol:** Revisor de diseño de detalle (pasada de pulido de la Fase 6).
- **Objetivo:** Auditar las 4 páginas ya codificadas con la skill `apple-design` en cuatro ejes
  (espaciado, jerarquía, tipografía, movimiento) más accesibilidad, y aplicar solo los hallazgos
  que Nicolle apruebe, medidos y probados antes de tocar el sitio.
- **Cuándo se activa:** Fase 6, cuando el sitio ya está codificado y pasó la auditoría responsive
  de la Fase 4. Una pasada por página: primero el Home y después Tienda, Finca y Coffee Shops.
- **Entradas:** HTML/CSS/JS del sitio, `design.md` y las decisiones bloqueadas (dirección de
  bloques de color saturados, estructura de secciones, alcance estático), `PLAN.md`, las reglas
  de `skills/responsive-detail/SKILL.md` y las guías HIG de la skill `apple-design` (en web solo
  se usan sus principios y fundamentos, no las convenciones de plataforma).
- **Salidas:** Informe de hallazgos con ID, severidad, eje y bandera de conflicto; correcciones
  aplicadas por grupos aprobados; una entrada de `PLAN.md` por grupo (Fase 6.1 a 6.15) y un
  commit por grupo.
- **Herramientas permitidas:** Chromium con Playwright (medir cajas, tamaños de texto, áreas
  táctiles, palabras partidas y tiempos de animación; capturas; matriz de texto ampliado),
  contraste calculado a partir de los hex, y acceso a archivos locales para aplicar las
  correcciones. No toca Figma.
- **Reglas / límites:**
  - Primero una auditoría de solo lectura; solo se edita lo que Nicolle elige, por grupos.
  - Todo hallazgo lleva números medidos (px, ratio de contraste, tiempos), nunca "parece".
  - Un hallazgo que toque una decisión bloqueada del diseño o una decisión anterior de Nicolle
    se etiqueta "CONFLICTO CON DECISIÓN BLOQUEADA" y no se aplica sin su aprobación expresa.
  - Cada corrección se prueba antes en una copia de trabajo: matriz de 9 anchos × 3 tamaños de
    texto (100/150/200%) × 4 páginas, comparación de capturas píxel a píxel para comprobar que
    solo cambia lo previsto y revisión de palabras partidas. Se aplica con un script que falla
    si el texto a sustituir no aparece exactamente una vez.
  - Prohibido `!important`; solo tokens de `variables.css`; mobile-first con `min-width` en
    480/768/1024/1280px.
  - Nunca hace commit ni push sin que Nicolle diga "approved"; el push lo hace ella.
  - Registra lo que no verificó (Safari/iOS, Firefox, lector de pantalla, táctil real).
- **Criterios de "hecho":** Cada hallazgo está aplicado y verificado, o registrado como rechazado
  o pendiente con su motivo; 0 celdas con desborde en la matriz de texto ampliado; las capturas no
  muestran cambios no previstos; cada commit tiene su entrada en `PLAN.md`.
- **Skills que usa:** `apple-design` (skill de Claude, no está en `skills/` del repo) y, como
  reglas de referencia, `skills/responsive-detail/SKILL.md` (reglas 7, 13, 14 y 16),
  `skills/accessibility/SKILL.md`, `skills/css-architecture/SKILL.md`,
  `skills/design-tokens/SKILL.md` y `skills/git-workflow/SKILL.md`.
- **Resultado:** Home: 5 grupos, 5 commits. Tienda, Finca y Coffee Shops: 20 hallazgos (1
  Crítico, 4 Altos, 6 Medios, 9 Bajos), todos aplicados o decididos en 10 commits; algunos solo
  en parte, y los límites que quedan abiertos están en `PLAN.md` (6.8, 6.12 y 6.14).
- **Entradas de PLAN.md donde actuó:** Fase 6.1 a 6.15; el cierre, con el hash de cada commit,
  está en la 6.16.
