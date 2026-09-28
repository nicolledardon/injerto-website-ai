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
- Commit: e5fe121 — "docs: registra fundamentos y componentes de El Injerto en Figma (Fase 1)"
- Siguiente paso: Nicolle revisa el resultado en Figma/las capturas → si aprueba, GATE 1 superado y se pasa a Fase 2 (páginas hi-fi completas, 1440px + 375px).

### [2026-09-28 20:10] Fase 1.5 — GATE 1 superada + logo real insertado en Header/Footer

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): Confirmó que añadió el logo real de El Injerto
  (`assets/img/logo.svg`) a la carpeta del repo. Tras preguntarle si prefería insertarlo ya en
  los componentes de la Fase 1 o dejarlo para la Fase 2, eligió insertarlo ahora. En la misma
  pregunta, aprobó explícitamente GATE 1 (Fundamentos + Componentes).
- Qué hizo la IA:
  - Inspeccionó `assets/img/logo.svg`: no es un SVG vectorial real, es un PNG rasterizado
    (800×319px) envuelto en un `<svg>` con relleno de patrón — se lo señaló a Nicolle antes de
    continuar.
  - Extrajo por matemática del `patternTransform` la región exacta del PNG que corresponde al
    icono (el grano de café), descartando el resto del lockup original (que incluye texto en
    blanco invisible sobre fondo blanco + "HISTORICAL COFFEE", no usado aquí).
  - Recortó el icono a su bounding box real y lo redujo a un tamaño pequeño apto para un icono
    de cabecera, verificando visualmente con Playwright que se ve limpio tanto sobre `surface`
    (crema) como sobre `ink` (oscuro).
  - Insertó el icono junto al texto "EL INJERTO" en las 4 ubicaciones (Header Desktop, Header
    Mobile-Closed, Header Mobile-Open, Footer), envolviendo icono + texto en un nuevo grupo
    auto-layout "Logo" (icono a la izquierda, texto a la derecha, alineado al centro), insertado
    en el mismo slot que ocupaba el texto dentro de cada fila auto-layout `SPACE_BETWEEN` — el
    layout existente absorbió el ancho extra sin romper nada.
- Decisiones de Nicolle / cambios manuales: Aprobó insertar el logo ahora (no esperar a la Fase 2)
  y aprobó GATE 1 sin cambios.
- Problemas encontrados y corrección:
  - Subir el asset directamente a Figma vía `upload_assets` falló: el proxy de salida del
    contenedor en la nube bloquea `mcp.figma.com` (igual que bloqueaba `www.figma.com`
    anteriormente) — probado también desde la Mac de Nicolle vía `device_bash`, mismo bloqueo.
    Solución: se generó el PNG del icono como bytes embebidos en base64 dentro del propio script
    `use_figma` (que corre dentro de la app de Figma, sin pasar por ese proxy) y se creó la
    imagen con `figma.createImage(bytes)`.
  - Dos intentos de embeber el base64 completo (~14 000 y ~6 600 caracteres) fallaron por
    corrupción silenciosa de 1–2 caracteres durante la transcripción al script (`atob` inválido
    la primera vez; suma de verificación desajustada por 4 la segunda) — no reproducible de forma
    determinista, probablemente un artefacto de manejar cadenas literales tan largas. Solución:
    icono reducido a 2002 bytes, base64 dividido en 14 fragmentos de 200 caracteres, cada uno con
    su propia suma de verificación más una suma total — el script revienta con un mensaje claro
    señalando qué fragmento falló en vez de un error opaco. La tercera versión pasó todas las
    verificaciones a la primera.
- Verificación: sumas de verificación por fragmento + suma total de bytes validadas dentro del
  propio script antes de crear la imagen; `get_screenshot` de Header y Footer tras la inserción,
  confirmando el icono legible sobre fondo crema y sobre fondo oscuro, sin solapes ni recortes.
- Commit: (pendiente de aprobación de Nicolle)
- Siguiente paso: Con GATE 1 superado, iniciar Fase 2 — construir las 4 páginas hi-fi completas
  (Home, Tienda, Finca, Coffee Shops) a 1440px y 375px, usando solo componentes/variables de la
  Fase 1, copy real en español (sin lorem ipsum) y el logo real ya integrado.

### [2026-09-28 18:30] Fase 2 (parte 1/4) — Home hi-fi construida (Desktop 1440px + Mobile 375px)

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): "move forward" — avanzar a Fase 2 tras GATE 1
  superado. Confirmó además la fuente de contenido real: "its this site
  https://elinjertocafe.com.gt/" (el sitio de marca real ya usado como referencia).
- Qué hizo la IA:
  - Construyó la página Home — Desktop (1440px, altura final 2203px) reutilizando únicamente
    componentes/variables de Fase 1: instancia de Header Desktop, sección Hero (H1 + body +
    Button primario + bloque de fotos geométrico de 3 colores: cherry/terracotta/pine con
    ellipse crema), sección "Encuentra tu sabor" (4 pasos con dot terracotta), "Cafés de
    temporada" (grid de 4 Product Card con colores alternados cherry/pine/terracotta/cherry),
    "Arma tu suscripción" (panel teaser con chips de tamaño 250g/500g/1kg + placeholders de
    frecuencia y precio), instancia de Footer.
  - Investigó contenido real en elinjertocafe.com.gt para copy y precios en vez de lorem ipsum.
  - Creó un componente nuevo "Footer Mobile" (375px) ya que Fase 1 solo había construido un set
    de breakpoints para Header, no para Footer.
  - Construyó Home — Mobile (375px, altura final 3394px) reutilizando la misma estructura,
    simplificada: Header Mobile-Closed, un solo colorblock cherry en vez del split de 3 colores,
    pasos en 2 filas de 2, product cards en columna única centrada, subscription builder apilado
    verticalmente, instancia de Footer Mobile.
- Decisiones de Nicolle / cambios manuales: Ninguna instrucción adicional durante la construcción
  (aprobación implícita del plan de Fase 2 ya dado antes de "move forward").
- Desviación señalada al presentar el resultado: el plan original incluía "Maragogype" como uno
  de los 4 cafés de temporada; no se pudo confirmar un precio real para ese producto en el
  catálogo de la tienda, así que se sustituyó por "Cold Brew" (Q26.00, precio confirmado).
  Pendiente de que Nicolle decida si prefiere que se busque el precio real de Maragogype antes de
  llevar esta lista de productos a la página Tienda.
- Problemas encontrados y corrección:
  - H1 y Hero body colapsaron a altura=10 y se solapaban con el contenido siguiente: causado por
    asignar `characters` ANTES de fijar `textAutoResize='HEIGHT'` y el ancho fijo vía `resize()`.
    Corregido reordenando: `textAutoResize` + `resize()` primero, `characters` al final; se
    adoptó un helper `makeText()` reutilizado en todos los scripts posteriores que fuerza ese
    orden correcto desde el inicio.
  - El frame `Hero` tenía `counterAxisSizingMode='FIXED'` sin un `resize()` de altura real,
    dejando una altura por defecto insuficiente; combinado con `counterAxisAlignItems='CENTER'`
    esto hacía que los bloques de foto (420px de alto) sobresalieran con offset negativo.
    Corregido cambiando a `counterAxisSizingMode='AUTO'` (se ajusta al hijo más alto).
  - Cálculo geométrico inicial del ancho del Hero (460 + 80 + 740 = 1280px) excedía el ancho de
    contenido disponible (1200px = 1440 − 2×120 de padding) por 80px — detectado en revisión del
    script antes de ejecutarlo, corregido a 420 + 60 + 720 = 1200px exactos.
  - La columna de navegación del nuevo componente "Footer Mobile" se creó con el fill blanco por
    defecto de Figma, tapando el fondo `ink` oscuro — corregido vaciando `fills` explícitamente.
  - Errores menores de IDs de variables adivinados incorrectamente (`color/block-pine` y
    `color/text-secondary`) detectados y corregidos antes de ejecutar, mediante una llamada de
    inspección previa que listó todas las variables reales del archivo.
- Verificación: `get_screenshot` de Home Desktop y Home Mobile completas tras cada fase de
  construcción (incluida verificación post-fix de los bugs de texto colapsado, altura del Hero y
  fill blanco del Footer Mobile) — capturas finales sin solapes, recortes ni fills incorrectos,
  enviadas a Nicolle para revisión.
- Commit: (este mismo commit)
- Siguiente paso: Con Home aprobada, construir las 3 páginas restantes de Fase 2 (Tienda con Tabs
  Café/Merch, Finca con Historia + Procesos, Coffee Shops con las 4 sucursales reales) a 1440px y
  375px, hasta alcanzar GATE 2.
