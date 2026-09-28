# PLAN — El Injerto (PEC 6, proyecto con IA)

Registro histórico completo del proyecto, en orden cronológico. Nunca se reescriben entradas
pasadas; las correcciones se añaden como una entrada nueva que referencia la anterior.

## Objetivo del proyecto

Crear una segunda versión completa de la web de El Injerto (restyle visual, no rebrand) con
ayuda de IA (Claude en Cowork), comparándola críticamente con el proyecto manual (Book Nook).
Curso: CEI · Diseño Web · PEC 6 "Proyecto con IA". Entrega: repositorio de GitHub + README +
enlace a Figma (diseño de la PEC 3/6).

## Rúbrica (resumen)

1. Responsive a detalle
2. GIT (5 pts) — repo desde el día 1, `.gitignore` + `.gitattributes`, commits frecuentes y descriptivos
3. PLAN (4 pts) — historia completa del proyecto, escrita a medida que ocurre
4. AGENTS (3 pts) — definición markdown de cada agente que trabajó en el proyecto
5. SKILLS (2 pts) — definición markdown de reglas/ajustes del proyecto
6. README (1 pt) — documentación del proyecto

Mínimos del PDF: ≥4 páginas completas con navegación · header + footer · estilos coherentes ·
responsive básico · ≥1 interacción JS · código revisado y organizado por el alumno · README
explicando el proceso con IA · comparación con el proyecto manual · enlace a Figma.

## Checklist de fases

- [ ] Fase 0 — Repositorio + scaffolding — EN CURSO
- [ ] Fase 1 — Fundamentos en Figma (Design Agent)
- [ ] Fase 2 — Páginas hi-fi en Figma (Design Agent)
- [ ] Fase 3 — Código (Frontend Agent → Interaction Agent)
- [ ] Fase 4 — Auditoría responsive de detalle (Responsive QA Agent)
- [ ] Fase 5 — Documentación (Docs Agent)
- [ ] Fase 6 — Pulido estilo Apple (Polish Agent) — opcional, tras la Fase 5

---

### [2026-09-28 17:13] Fase 0.1 — Inicio del proyecto y scaffolding

- Agente: (ninguno todavía — configuración de repositorio, no trabajo de diseño/código)
- Prompt (resumen fiel del pedido de Nicolle): Arrancar PEC 6 (El Injerto, proyecto con IA):
  crear el repositorio `injerto_website_ai`, seguir el flujo de fases definido (Figma hi-fi →
  aprobación → código), todo el contenido del proyecto en español salvo el README, revisar cada
  paso con ella antes de avanzar.
- Qué hizo la IA: Leyó `design.md`, el brief de la PEC 2 y de la PEC 6, y la memoria del
  proyecto. Detectó una inconsistencia en `design.md` §1 (Track B): la fila de referencias sigue
  listando "Stumptown" en vez de "Hola Coffee" (la referencia B2 correcta, ya fijada) — pendiente
  de corregir al rellenar esa sección en la Fase 1. Propuso la lista de archivos de la Fase 0
  (`.gitignore`, `.gitattributes`, `PLAN.md`, `AGENTS.md` + stubs de agentes, `skills/*/SKILL.md`
  stubs, `README.md`) y pidió aprobación. Creó la carpeta `injerto_website_ai/`, corrió
  `git init -b main`, y escribió `.gitignore` y `.gitattributes`.
- Decisiones de Nicolle / cambios manuales: Aprobó la lista de archivos de la Fase 0 tal cual se
  propuso, sin cambios.
- Problemas encontrados y corrección: Ver arriba (referencia "Stumptown" desactualizada en
  `design.md` — corrección diferida a la Fase 1, no bloquea la Fase 0).
- Verificación: `git init` confirmado por su propio mensaje de salida ("Initialized empty Git
  repository"); estructura de carpetas verificada con `find`.
- Commit: 47ad618 — "chore: inicializa el repositorio con gitignore, gitattributes y documentación"
- Siguiente paso: Proponer el commit #1 ("chore: inicializa el repositorio con gitignore,
  gitattributes y documentación") y, tras la aprobación, guiar a Nicolle para crear el repo
  vacío en GitHub y conectarlo desde su Terminal (Gate 0).

### [2026-09-28 17:20] Fase 0.2 — GATE 0 superada

- Agente: (ninguno — coordinación de repositorio)
- Prompt (resumen fiel del pedido de Nicolle): Confirmó que los archivos ya aparecen en GitHub
  tras `git remote add origin` + `git push -u origin main` desde su Terminal.
- Qué hizo la IA: Ninguna acción de archivo — solo registró la confirmación de Nicolle.
- Decisiones de Nicolle / cambios manuales: Ninguna sobre archivos; confirmó el push.
- Problemas encontrados y corrección: Ninguno.
- Verificación: Confirmación verbal de Nicolle ("files show up on gthub") — no verificado
  directamente por la IA (sin acceso de lectura al repo remoto desde esta sesión).
- Commit: n/a (no hay cambios de archivo en este paso)
- Siguiente paso: Iniciar Fase 1 — releer la sección Track B de Notion y los frames lo-fi de la
  PEC 2 en Figma, luego proponer los tokens de diseño (color, tipografía, espaciado) para
  aprobación antes de construir nada en Figma.

### [2026-09-28 19:45] Fase 1.1–1.4 — Fundamentos y componentes en Figma

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): Aprobó el sistema de color/tipografía/botones/tabs/header/footer propuesto (tras pedir primero una imagen de referencia visual estilo "Café del Alma" para verlo antes de aprobar) y aprobó construir en una página nueva dentro del archivo Figma existente (`C8CzTyhKqB1bXOBC3PZxYd`).
- Qué hizo la IA:
  - Inspeccionó el archivo Figma: 4 páginas existentes, 2 colecciones de variables de Book Nook ("type a", "type b") y estilos de texto (h1–h4, body1–2) — todos de Book Nook, ninguno reutilizable para El Injerto.
  - Creó página nueva "PEC 6 — El Injerto Hi-Fi" (id `308:2`).
  - Creó colección de variables "El Injerto — Color" (13 variables de color, con scopes explícitos y code syntax WEB `var(--…)`, nunca ALL_SCOPES).
  - Creó 6 estilos de texto (`injerto/h1`…`injerto/button-label`) en Fraunces (Black/Bold/SemiBold) y Work Sans (Regular/Medium/SemiBold).
  - Construyó frame Fundamentos (swatches de color + specimen de tipografía, todo vinculado a variables/estilos reales, no hex suelto).
  - Construyó componentes: Button (15 variantes: Primary/Secondary/Tertiary × Default/Hover/Active/Focus/Disabled), Tab — Tienda categoría (4 estados), Product Card (6 variantes: Café/Merch × Default/Hover/Focus), Proceso Step + Connector, Header (Desktop/Mobile-Closed/Mobile-Open), Footer (con línea de disclaimer académico y hairline dorado superior).
- Decisiones de Nicolle / cambios manuales: Ninguna edición manual todavía — pendiente de su revisión en este GATE.
- Problemas encontrados y corrección:
  - `use_figma` lanzó `TypeError` al acceder a `appendChild` en un nodo ELLIPSE (línea de código muerta); el script no dejó nodos huérfanos (confirma la nota de tools-and-workflow.md: los scripts que fallan revierten completo) — se corrigió y reintentó limpio.
  - Auto-layout frames (`Top row`, `Nav list`, `Item` del menú móvil; `Footer row`, `Footer nav`) se crearon con el fill blanco por defecto de Figma, tapando el fondo `ink` — corregido vaciando `fills` explícitamente en cada uno.
  - `resize()` reseteó el modo de tamaño de `Footer row` a FIXED con altura 1px, colapsando el contenido — corregido restaurando `counterAxisSizingMode='AUTO'` + `layoutSizingVertical='HUG'` después del resize, y lo mismo en el frame `Footer` padre.
  - Posicionamiento inicial de las secciones se solapaba (Footer en y=756 caía encima de Button; Proceso Step en y=1450 caía encima de Product Card) — corregido recalculando un stack vertical limpio sin solapes (Fundamentos → Botones → Tabs → Product Card → Proceso → Header → Footer).
- Verificación: `get_screenshot` en cada componente tras crearlo (incluida verificación post-fix); `get_metadata` para confirmar posiciones/tamaños reales antes y después del reposicionamiento; captura de página completa final sin solapes, enviada a Nicolle.
- Commit: pendiente de aprobación (solo actualiza PLAN.md — el trabajo en sí vive en Figma, no en este repo)
- Siguiente paso: Nicolle revisa el resultado en Figma/las capturas → si aprueba, GATE 1 superado y se pasa a Fase 2 (páginas hi-fi completas, 1440px + 375px).
