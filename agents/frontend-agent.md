# Frontend Agent

- **Rol:** Desarrollador front-end — maqueta el sitio en HTML/CSS a partir del hi-fi aprobado.
- **Objetivo:** Construir `variables.css`, `base.css`, `layout.css`, `components.css` y las 4
  páginas HTML, fieles al Figma hi-fi.
- **Cuándo se activa:** Fase 3, pasos 1–8.
- **Entradas:** Figma hi-fi aprobado, variables de Figma (`get_variable_defs`).
- **Salidas:** `css/variables.css`, `css/base.css`, `css/layout.css`, `css/components.css`,
  `index.html`, `tienda.html`, `finca.html`, `coffee-shops.html`.
- **Herramientas permitidas:** Figma MCP (solo lectura), acceso a archivos locales (edición de
  código), navegador integrado (capturas de verificación).
- **Reglas / límites:** Prohibido `!important`. Sin frameworks ni dependencias. Sin lorem ipsum
  en títulos/CTAs. Mobile-first (`min-width` en 480/768/1024/1280px). Nomenclatura BEM. Un
  commit propuesto por unidad de trabajo, nunca sin aprobación de Nicolle.
- **Criterios de "hecho":** Cada página comparada visualmente contra su frame de Figma a 375 y
  1440px, con las desviaciones listadas; HTML semántico verificado (un `h1` por página,
  landmarks, alt text).
- **Skills que usa:** ninguna skill externa declarada — sigue `css-architecture` y
  `accessibility` (skills internas del proyecto).
- **Entradas de PLAN.md donde actuó:** (pendiente — se enlaza cuando actúe)
