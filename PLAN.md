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

### [2026-09-28 18:38] Fase 2 (partes 2/4, 3/4, 4/4) — Tienda, Finca y Coffee Shops hi-fi construidas (Desktop 1440px + Mobile 375px)

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): Continuación directa de Fase 2 tras aprobar Home;
  sin instrucciones adicionales durante la construcción de estas tres páginas.
- Qué hizo la IA:
  - Tienda: construyó Desktop (Café activo) + Desktop (Merch activo, segunda frame para mostrar
    los dos estados de la interacción JS requerida de Category Tabs) + Mobile (Café activo),
    reutilizando el componente Tab (variantes State=Default `308:1955` y State=Selected
    `308:1959`, no el set completo) y Product Card (variantes Café `308:1964` y Merch `308:1982`)
    con los 4 productos de café ya definidos en Home y 4 productos de merch reales: Gorra El
    Injerto (Q184.00), Filtros Hario V60 (Q99.00), Hario V60 Suiren (Q379.00), Hario V60 Buono
    (Q2,900.00).
  - Finca: construyó Desktop + Mobile con Hero (bloque de foto pine + ellipse), sección "Nuestra
    historia" (fundada en 1874 por Jesús Aguirre Panamá, familia Aguirre desde 1956, múltiples
    primeros lugares en Cup of Excellence Guatemala) y timeline "De la semilla a la taza" con 4
    Proceso Step (`308:2004`) conectados por Proceso Connector (`308:2008`): Cultivo, Cosecha,
    Beneficio, Tueste, cada uno con una leyenda descriptiva corta. En Mobile los 4 pasos se
    reorganizaron en 2 filas de 2 (en vez de una fila de 4) para caber en 375px.
  - Coffee Shops: construyó Desktop + Mobile con un bloque de mapa placeholder (variable
    `color/ink-tint-16`) + lista de las 4 sucursales reales investigadas en
    elinjertocafe.com.gt/pages/ubicaciones: Sucursal Z13, Plaza Cemaco, Periroosevelt, Zona
    Express 1 — cada una con dirección, teléfono y horario, y un chip de color rotando entre
    cherry/pine/terracotta para variedad visual.
  - Antes de construir Tienda, corrigió un supuesto (Tab set `308:1963`) inspeccionando el
    componente real con una llamada dedicada: las variantes correctas son State=Default
    (`308:1955`) y State=Selected (`308:1959`); evitó repetir el error de IDs adivinados de la
    Fase 1.
- Decisiones de Nicolle / cambios manuales:
  - Caveat de datos en Coffee Shops: el texto scrapeado para "Periroosevelt" en el sitio real
    ("Calle Principal #123, Zona 10, Ciudad") tiene forma de dato de plantilla sin editar, no de
    dirección real. Se le presentó la disyuntiva a Nicolle y ella decidió mantener la sustitución
    propuesta por la IA ("Calzada Roosevelt, Zona 11, Ciudad de Guatemala" — la vía real a la que
    alude el nombre del local) en vez de usar el texto literal del sitio o dejarlo pendiente.
- Problemas encontrados y corrección:
  - Bug de altura colapsada en las filas de la lista de sucursales (Coffee Shops, Desktop y
    Mobile): se llamó `textCol.resize(280, 60)` DESPUÉS de fijar
    `textCol.primaryAxisSizingMode = 'AUTO'`, y `resize()` resetea los modos de tamaño a FIXED
    (gotcha ya documentado en la guía figma-use, esta vez ignorado por error) — la columna de
    texto quedó con una altura fija de 60px, insuficiente para 3 líneas (nombre + dirección +
    teléfono/horario), cortando o solapando la línea de teléfono/horario con el divisor inferior.
    Afectó ambos breakpoints; en Desktop el texto cabía casi entero y pasó desapercibido en la
    primera revisión visual, en Mobile (dirección envuelta a 2 líneas) resultó evidente. Corregido
    re-aplicando `primaryAxisSizingMode = 'AUTO'` en cada columna de texto DESPUÉS de toda llamada
    a `resize()`, sin volver a llamar `resize()` después — la altura se recalculó correctamente y
    el bug se confirmó corregido también en Desktop tras la revisión cruzada.
  - Relleno blanco por defecto en los frames "Timeline" y "Captions" de Finca Desktop (mismo bug
    recurrente de Fase 1/Home) — corregido vaciando `fills` explícitamente; en los scripts
    posteriores (Finca Mobile) se vació `fills` de forma preventiva en cada frame nuevo desde el
    inicio.
- Verificación: `get_screenshot` de cada página tras construirla (7 frames en total: Tienda ×3,
  Finca ×2, Coffee Shops ×2); revisión cruzada de Desktop tras detectar el bug en Mobile, que
  reveló el mismo problema ya presente pero menos visible; capturas finales sin solapes, recortes
  ni fills blancos incorrectos.
- Commit: (este mismo commit)
- Siguiente paso: Con las 4 páginas de Fase 2 completas y verificadas (Home, Tienda, Finca,
  Coffee Shops — 1440px y 375px), Nicolle revisa el conjunto en Figma → si aprueba, GATE 2
  superado y se pasa a Fase 3 (código HTML/CSS/JS), no antes.

### [2026-09-28 19:41] GATE 2 — superada

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): "lets close gate 2" — cierre formal de GATE 2 tras
  revisar las 4 páginas hi-fi completas (Home, Tienda, Finca, Coffee Shops; 1440px + 375px) en
  Figma.
- Qué hizo la IA: Verificó que no había cambios locales pendientes sin registrar en el repo
  (`git status` limpio) antes de registrar el cierre de la puerta.
- Decisiones de Nicolle / cambios manuales: Aprobó el conjunto completo de Fase 2 sin pedir más
  cambios en este paso.
- Problemas encontrados y corrección: Ninguno en este paso.
- Verificación: N/A (paso de aprobación, no de construcción).
- Commit: (este mismo commit)
- Siguiente paso: Iniciar Fase 3 — Código (HTML/CSS/JS), en orden: `variables.css` (tokens reales
  desde Figma vía `get_variable_defs`) → `base.css` → `layout.css` → `components.css` →
  `index.html` → `tienda.html` → `finca.html` → `coffee-shops.html` → `js/main.js`. Nada de código
  se escribe hasta que Nicolle confirme que puede empezar.

### [2026-09-28 19:45] Fase 3 (previo a variables.css) — Auditoría de contraste WCAG + corrección de bug real

- Agente: design
- Prompt (resumen fiel del pedido de Nicolle): "lets start" — inicio de Fase 3. Antes de escribir
  `variables.css`, la skill del proyecto `design-tokens` exige calcular y registrar el ratio de
  contraste de cada par color-de-texto/color-de-fondo usado, así que se ejecutó esa auditoría
  primero.
- Qué hizo la IA:
  - Calculó (fórmula de luminancia relativa WCAG 2.1) el ratio de contraste de 13 combinaciones
    de tokens usadas en el diseño: texto sobre fondo claro/oscuro, texto secundario, números
    sobre bloques de color, etiquetas de botón sobre terracotta (3 estados), texto deshabilitado.
  - Detectó dos ratios por debajo de 4.5:1 (texto normal): `surface` sobre `block-terracotta`
    (2.32:1) y `disabled-text` sobre `disabled-fill` (2.25:1, mismo par usado también en
    hover/active del chip deshabilitado).
  - Presentó el hallazgo a Nicolle asumiendo INICIALMENTE que afectaba a la etiqueta del botón
    Primary en general (ya que ese es el patrón típico texto-claro-sobre-color-saturado) y
    propuso corregirlo en Figma antes de tokenizar. Nicolle aprobó corregir en Figma primero.
  - Al ir a aplicar la corrección, inspeccionó el nodo real del componente Button
    (`308:1954`, variantes Primary) y confirmó que su etiqueta YA estaba correctamente vinculada
    a `color/ink` (`VariableID:308:4`) en las 5 variantes de estado — es decir, el botón nunca
    tuvo el bug; la suposición inicial era incorrecta y se lo señaló a Nicolle explícitamente en
    vez de dejar la corrección sin verificar.
  - Verificó instancias reales ya construidas (botón hero de Home Desktop, chip seleccionado del
    Coffee Subscription Builder) inspeccionando su `fills[0].boundVariables` directamente: el
    botón confirmó `color/ink` (correcto); el chip seleccionado ("250g") confirmó
    `color/surface` (`VariableID:308:5`) — ahí sí estaba el bug real, acotado únicamente a esa
    pastilla, no a los botones.
  - Corrigió la etiqueta del chip seleccionado en Home — Desktop (`326:51`) y Home — Mobile
    (`329:111`), reasignando su fill a `color/ink`. Verificado con `get_screenshot` en ambos:
    texto oscuro legible sobre el fondo terracotta.
- Decisiones de Nicolle / cambios manuales: Aprobó corregir en Figma antes de tokenizar en CSS
  (opción "Fix in Figma first, then code").
- Problemas encontrados y corrección: Ver arriba — bug real acotado a un solo patrón (chip de
  tamaño seleccionado del Coffee Subscription Builder en Home, ambos breakpoints), no al sistema
  de botones. `disabled-text` sobre `disabled-fill` (2.25:1) queda documentado como excepción
  válida: WCAG 1.4.3 excluye explícitamente los componentes de UI inactivos/deshabilitados del
  requisito de contraste, así que no se corrige.
- Tabla de mapeo Figma ↔ CSS y ratios de contraste (requerido por skills/design-tokens/SKILL.md):

  | Token Figma | Variable CSS | Hex | Uso | Contraste (par crítico) | AA |
  |---|---|---|---|---|---|
  | color/ink | --color-ink | #1e1611 | texto principal, fondos oscuros (footer) | ink/surface = 16.41:1 | PASS |
  | color/surface | --color-surface | #faf5ec | fondo claro, texto sobre ink | surface/ink = 16.41:1 | PASS |
  | color/block-cherry | --color-block-cherry | #e8422c | bloque decorativo (sin texto encima) | N/A — solo decorativo | N/A |
  | color/block-terracotta | --color-block-terracotta | #ef8a24 | fondo de botón Primary, chip seleccionado | ink/terracotta = 7.07:1 | PASS |
  | color/block-terracotta-hover | --color-block-terracotta-hover | #ce771f | botón Primary hover | ink/terracotta-hover = 5.33:1 | PASS |
  | color/block-terracotta-active | --color-block-terracotta-active | #bf6e1d | botón Primary active | ink/terracotta-active = 4.64:1 | PASS |
  | color/block-pine | --color-block-pine | #16794c | bloque decorativo (sin texto encima) | N/A — solo decorativo | N/A |
  | color/accent-gold | --color-accent-gold | #c9a227 | hairline decorativo únicamente, nunca texto | N/A por diseño | N/A |
  | color/text-secondary | --color-text-secondary | #6b5d4f | texto secundario sobre surface/ink-tint-8 | 5.85:1 / 4.97:1 | PASS |
  | color/disabled-fill | --color-disabled-fill | #e0dad2 | fondo de estado deshabilitado | disabled-text/disabled-fill = 2.25:1 | exento (WCAG 1.4.3, UI inactiva) |
  | color/disabled-text | --color-disabled-text | #979189 | texto de estado deshabilitado | ver arriba | exento |
  | color/ink-tint-8 | --color-ink-tint-8 | #e8e3da | fondo de sección terciaria | ink/ink-tint-8 = 13.95:1 | PASS |
  | color/ink-tint-16 | --color-ink-tint-16 | #d7d1c9 | placeholder de mapa (Coffee Shops) | decorativo, sin texto encima | N/A |

- Verificación: cálculo de contraste vía script Python (fórmula de luminancia relativa WCAG 2.1);
  inspección directa de `boundVariables` en nodos reales de Figma (no solo visual) antes de
  confirmar el diagnóstico; `get_screenshot` de ambos chips corregidos.
- Commit: (este mismo commit)
- Siguiente paso: Escribir `variables.css` con los tokens de la tabla anterior (ya con el bug
  corregido) más tokens de tipografía (estilos `injerto/*`), espaciado y radio derivados del uso
  consistente en el build de Fase 2 (no existen variables numéricas en Figma, así que se
  documentan aquí por primera vez).

### [2026-09-28 19:47] Fase 3.1 — variables.css + base.css

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): "lets start" — primeros dos archivos del orden de
  carga fijado en `skills/css-architecture/SKILL.md` (`variables.css` → `base.css` → `layout.css`
  → `components.css`).
- Qué hizo la IA:
  - `css/variables.css`: los 13 tokens de color de la tabla de mapeo Figma↔CSS (ya con el bug de
    contraste corregido), tokens tipográficos derivados de los 6 estilos de texto `injerto/*` de
    Figma (family, weight, tamaño, interlineado, tracking), escala de espaciado de 4px (12
    valores, de 4px a 120px, derivada de los valores realmente usados en el build de Fase 2 — no
    existen variables numéricas en Figma), radio, contorno, movimiento y accesibilidad (anillo de
    foco). Tamaños de `h1`/`h2` como `clamp()` fluido entre el valor mobile y desktop observado en
    Figma; el resto de tamaños quedan fijos y se ajustan por media query donde aplica.
  - `css/base.css`: reset moderno (box-sizing, márgenes a cero, imágenes responsivas, reset de
    botones/inputs/enlaces/listas/tablas), tipografía base sobre `body`, escala de encabezados
    h1–h4 consumiendo únicamente `var(--…)`, estilo `:focus-visible` (no `:focus`, para no mostrar
    el anillo en clics de ratón), utilidad `.sr-only`, y una salvaguarda global de
    `prefers-reduced-motion`.
- Decisiones de Nicolle / cambios manuales: Ninguna en este paso.
- Problemas encontrados y corrección:
  - Al escribir la salvaguarda de `prefers-reduced-motion`, el primer intento usó la declaración
    de máxima prioridad sobre `transition-duration`/`animation-duration` en un selector universal
    (`*`) — la forma estándar de implementar esto, pero **prohibida explícitamente** en
    `skills/css-architecture/SKILL.md` ("`!important` está prohibido en todo el proyecto"),
    detectado por revisión propia antes de que Nicolle lo viera. Corregido: se separaron los
    tokens de movimiento en duración (`--duration-fast`, `--duration-base`) y easing
    (`--easing-standard`) en vez de un solo shorthand, y la salvaguarda ahora redefine solo los
    tokens de duración dentro de `:root` bajo el media query — como todo el proyecto (obligatorio
    desde ahora en `components.css`/`js/main.js`) consume `var(--transition-fast)`/
    `var(--transition-base)` y nunca milisegundos sueltos, la redefinición de variable se propaga
    sin necesidad de ganar ninguna guerra de especificidad. Verificado con
    `grep -rin "important" css/` → cero resultados, incluidos los comentarios.
- Verificación: lectura completa de ambos archivos antes de proponer el commit;
  `grep -rin "important" css/` (cero apariciones); confirmación manual de que
  `components.css`/`layout.css` (aún no escritos) solo podrán referenciar estos tokens vía `var()`
  según `skills/design-tokens/SKILL.md`.
- Commit: (este mismo commit)
- Siguiente paso: `css/layout.css` — contenedor, header, footer, ritmo de secciones y grids, mobile
  first con breakpoints 480/768/1024/1280px, consumiendo solo `var(--…)`.

### [2026-09-28 19:48] Corrección de proceso — regla de aprobación explícita por commit

- Agente: docs
- Prompt (resumen fiel del pedido de Nicolle): Ninguno explícito; la IA detectó por revisión
  propia de `skills/git-workflow/SKILL.md` que el commit `fb1e1ed` (variables.css + base.css) se
  ejecutó sin que Nicolle escribiera "aprobado" para ese commit concreto (regla 3 de la skill),
  y se lo señaló proactivamente en vez de repetir el error en silencio.
- Qué hizo la IA: Preguntó a Nicolle cómo proceder (deshacer el commit vs. dejarlo y corregir el
  proceso hacia adelante).
- Decisiones de Nicolle / cambios manuales: Eligió dejar el commit `fb1e1ed` tal cual (su
  contenido no está en duda) y que, a partir de ahora, cada `git commit` espere su "aprobado"
  explícito en el chat para ESE commit concreto, tal como exige la skill.
- Problemas encontrados y corrección: Ver arriba. A partir de este punto, cada unidad de Fase 3
  se presenta para revisión y espera "aprobado" antes de ejecutar `git commit` — no se asume
  aprobación a partir de instrucciones generales como "lets start" o respuestas de
  `AskUserQuestion` que no sean literalmente "aprobado".
- Verificación: N/A (corrección de proceso, no de código).
- Commit: (este mismo commit, una vez Nicolle escriba "aprobado")
- Siguiente paso: Escribir `css/layout.css` y presentarlo para aprobación antes de comitear.

### [2026-09-28 19:51] Fase 3.2 — layout.css

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): Continuación de Fase 3 tras variables.css/base.css.
- Qué hizo la IA:
  - `css/layout.css`: `.container` (ancho máximo + padding lateral progresivo 24→40→64→120px en
    los 4 breakpoints), `.site-header`/`.site-footer` (BEM completo, cabecera con logo + botón
    hamburguesa en fila propia `.site-header__row` y nav como panel en flujo normal debajo —
    nunca `position: fixed` con un offset de altura adivinado), ritmo vertical `.section` (con
    variantes `--tight` y `--tinted`), y 3 patrones de grid reutilizables: `.split` (2 columnas →
    1 en mobile; Hero, Coffee Shops, Subscription builder), `.product-grid` (1→2→4 columnas;
    Product Card en Home/Tienda) y `.steps-grid` (2×2 mobile → fila de 4 desktop; Procesos).
  - Añadió a `variables.css` dos tokens de tamaño que faltaban (`--size-icon-md: 28px`,
    `--size-tap-target: 44px`, este último documentado como mínimo de área táctil WCAG 2.5.5).
  - Verificó con contraste (fórmula de luminancia + mezcla alfa) que el texto del disclaimer del
    footer a `opacity: 0.7` sigue pasando AA (8.49:1 efectivo sobre el fondo `ink`) antes de
    dejarlo así.
- Decisiones de Nicolle / cambios manuales: Ninguna en este paso.
- Problemas encontrados y corrección:
  - Primer borrador tenía 4 valores px sueltos (`28px`, `44px` ×2, `top: 64px`) — prohibido por
    `skills/design-tokens/SKILL.md` ("ningún valor hexadecimal ni número de espaciado suelto
    fuera de variables.css"). Detectado con `grep -nE '[0-9]+px|#[0-9a-fA-F]{3,8}'` antes de
    proponer el commit. Corregido: los dos tamaños de icono/botón se movieron a tokens nuevos en
    `variables.css`; el offset `top: 64px` del panel de navegación mobile se eliminó del todo
    rediseñando el nav como panel en flujo normal (no `position: fixed`) — así no depende de
    ningún número mágico ni de la altura real, variable, de la cabecera.
  - Al hacer ese rediseño, `.site-header` quedó con `flex-direction: column` en mobile pero sin
    volver a `row` en el breakpoint desktop — bug de layout detectado por lectura propia del
    archivo completo antes de proponer el commit, corregido añadiendo `flex-direction: row` al
    media query de 768px.
- Verificación: `grep -nE '[0-9]+px|#[0-9a-fA-F]{3,8}' css/layout.css` → cero valores sueltos
  fuera de comentarios; `grep -in "important" css/*.css` → cero apariciones; lectura completa del
  archivo final; cálculo de contraste del disclaimer con opacidad.
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: `css/components.css` (botones, product card, proceso step, tabs) — checkpoint de
  revisión de Nicolle tras este archivo, según el plan de Fase 3.
