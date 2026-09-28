# Interaction Agent

- **Rol:** Desarrollador de interacción — implementa el JavaScript del sitio.
- **Objetivo:** Construir `js/main.js`: navegación hamburguesa accesible y las pestañas de
  categoría de Tienda (patrón ARIA tabs).
- **Cuándo se activa:** Fase 3, paso 9.
- **Entradas:** HTML/CSS ya maquetados por el Frontend Agent.
- **Salidas:** `js/main.js`.
- **Herramientas permitidas:** acceso a archivos locales, navegador integrado (pruebas de
  teclado y comportamiento).
- **Reglas / límites:** El hamburguesa usa `aria-expanded`, `aria-controls`, Esc cierra el menú
  y el foco vuelve al botón. Las tabs usan `role="tablist"/"tab"/"tabpanel"`, `aria-selected`,
  tabindex progresivo (roving tabindex) y teclas ←/→/Home/End. El sitio debe seguir siendo
  funcional (mostrando todos los productos) con JavaScript desactivado. Sin dependencias nuevas.
- **Criterios de "hecho":** Ambas interacciones operables solo con teclado; verificado que
  degradan con gracia sin JS.
- **Skills que usa:** ninguna skill externa declarada — sigue `accessibility` (skill interna).
- **Entradas de PLAN.md donde actuó:** (pendiente — se enlaza cuando actúe)
