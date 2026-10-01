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

### [2026-09-28 20:06] Fase 3.3 — components.css

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): Continuación de Fase 3 tras layout.css.
- Qué hizo la IA:
  - Antes de escribir el archivo, inspeccionó (lectura, sin mutar) los componentes reales de
    Figma para no inventar valores: variantes Secondary/Tertiary del set de Botones (`308:1954`,
    ya que solo se habían auditado las de Primary), estados Default/Hover/Selected/Focus del
    componente Tab (`308:1963`), dimensiones de Product Card (`308:1964`) y de Proceso
    Step/Connector (`308:2004`/`308:2008`), incluido el color real del conector (`accent-gold`,
    no adivinado).
  - `css/components.css`: sistema de 3 botones (`.btn--primary/secondary/tertiary`, con
    `:hover`/`:active`/`:disabled` fieles a los colores reales de cada variante de Figma),
    `.product-card` (imagen como color plano con clases modificadoras `--cherry/--pine/
    --terracotta`, sin `<img>` ya que no hay foto real), `.proceso-step`/`.proceso-connector`
    (círculo numerado + línea conectora `accent-gold`, oculta en mobile porque el timeline pasa a
    grid 2×2), y `.tablist`/`.tab`/`.tabpanel` (aspecto visual del patrón ARIA tabs — el
    comportamiento con teclado se implementa en `js/main.js`, Fase 3 paso 9). El estado
    seleccionado de la tab se comunica con subrayado más grueso (3px vs 1px) Y peso de fuente
    (bold vs medium), nunca solo con color (`skills/accessibility` regla 7).
  - Añadió a `variables.css` 3 tokens de tamaño que faltaban: `--size-dot-lg` (72px, círculo de
    Proceso Step), `--size-hairline-thin`/`--size-hairline-thick` (1px/2px, grosor de bordes
    decorativos) y `--size-underline-selected` (3px, subrayado de tab activa).
- Decisiones de Nicolle / cambios manuales: Ninguna en este paso.
- Problemas encontrados y corrección:
  - Primer borrador ocultaba `.proceso-connector` en mobile con `@media (max-width: 767px)` —
    prohibido por `skills/css-architecture/SKILL.md` ("mobile-first, siempre min-width... nunca
    max-width como base"). Detectado con `grep -rn "@media.*max-width" css/` antes de proponer el
    commit. Corregido: `display: none` como estado base (mobile-first) y `display: block` dentro
    de `@media (min-width: 768px)`.
  - Un valor `1px` suelto en el borde inferior transparente de `.tab` (placeholder para reservar
    altura) — detectado con el mismo grep de valores sueltos que en Fase 3.2. Corregido con el
    nuevo token `--size-hairline-thin`.
- Verificación: `grep -rin "important" css/` (cero), `grep -rn "@media.*max-width" css/` (cero —
  todas las media queries son `min-width`), `grep -nE '[0-9]+px|#[0-9a-fA-F]{3,8}' css/components.css`
  (cero valores sueltos fuera de comentarios/breakpoints), lectura completa del archivo final.
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: `index.html` (Fase 3 paso 5) — primera página HTML, con checkpoint de revisión
  de Nicolle tras `components.css` según el plan (ya cumplido con esta entrada) antes de empezar
  el HTML.

### [2026-09-28 20:31] Fase 3.4 — index.html (Home)

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): continuación directa de Fase 3 tras aprobar
  components.css ("aprobado"); siguiente paso ya acordado en el plan: construir index.html.
- Qué hizo la IA:
  - Inspección de solo lectura en Figma (Home Desktop 323:2 y Home Mobile 329:43): árbol completo
    de texto real (H1, body, nav, botones, 4 productos con precios, footer), variantes de botón
    usadas (las 3 instancias de Home son "Primary"), geometría exacta de la composición
    fotográfica del Hero (bag 360×420 cherry + columna apilada terracotta/pine 360×210 c/u con
    acento circular centrado; mobile = un solo bloque cherry 327×220), tamaño/color del icono de
    "Encuentra tu sabor" (64px, terracotta), y estado de los chips de tamaño del Subscription
    Builder (250g=terracotta/seleccionado, 500g y 1kg=disabled-fill).
  - Construyó `index.html`: skip link, header con botón hamburguesa + nav (marcado ya listo para
    el patrón disclosure que implementará js/main.js en Fase 3 paso 9), Hero (`.split`), "Encuentra
    tu sabor" (`.steps-grid` + `.flavor-step` nuevo), "Cafés de temporada" (`.product-grid`, sin
    los productos como `<img>` — bloque de color plano, ya documentado en components.css), "Arma
    tu suscripción" (teaser, `.section--tinted`), footer.
  - Añadió al Google Fonts (Fraunces + Work Sans) vía `<link>` en `<head>` — primera vez que se
    carga la tipografía real; pendiente de replicar en cada página HTML siguiente.
  - Extendió el sistema de tokens/componentes para cubrir contenido nuevo de Home:
    - `variables.css`: +1 token (`--size-icon-lg`, 64px, icono de Flavor Step).
    - `layout.css`: +utilidad `.stack`/`.stack--sm/md/lg/xl`/`.stack--center` (agrupa
      título+contenido+CTA con el gap real de cada frame de Figma); +fix `object-fit: contain` en
      `.site-header__logo-icon` (el logo real no es cuadrado, 98×116, y el icono se fuerza a
      28×28 — sin este fix se deformaba).
    - `components.css`: +`.hero-photos` (composición fotográfica con `aspect-ratio` proporcional,
      no valores sueltos), +`.flavor-step`, +`.chip`/`.chip--selected` (mismos colores ya
      auditados que `.btn--primary`, sin auditoría nueva), +`.subscription-panel`.
- Desviaciones documentadas (todas visuales/menores, nunca silenciosas):
  1. El selector de frecuencia y la línea de precio del Subscription Builder se implementaron
     como controles reales `disabled` con texto (`<select disabled>`, `<p>`) en vez de las barras
     grises vacías de Figma — más semántico/accesible, mismo aspecto visual (mismos tokens
     disabled-fill/disabled-text).
  2. `.split` (gap 64px) se reutiliza para Hero (Figma: 60px) y Subscription Builder (Figma: 80px)
     — interpolación razonable ya aceptada como patrón en este proyecto (ver nota de fidelidad en
     layout.css), no un valor nuevo inventado.
  3. `.steps-grid` (gap 24/32px) se reutiliza para los Flavor Steps de Home (Figma: 48px en fila
     única desktop) — mismo criterio; further ventaja: el mismo grid servirá para el timeline de
     Proceso en Finca.
  4. Padding vertical del chip ajustado de 10px (Figma) a `--space-3` (12px) para mantenerse en la
     escala de 4px.
  5. Los 3 botones "Encuentra tu sabor"/"Arma tu suscripción" (CTA de sección y del panel) enlazan
     a `tienda.html` — no existe un flujo de checkout/subscripción dedicado dentro del alcance de
     4 páginas de esta PEC.
- Verificación: capturas con Playwright/Chromium (375px y 1440px, página completa) — el servidor
  local de `device_bash` no es alcanzable por un navegador real, así que los archivos se copiaron
  al entorno cloud para renderizarlos. Comparadas lado a lado contra las capturas de Figma de Home
  Desktop (323:2) y Home Mobile (329:43): estructura, espaciado, colores y grids coinciden;
  únicas diferencias son las desviaciones ya documentadas arriba. La carga real de Fraunces/Work
  Sans no se pudo verificar visualmente en este entorno (fonts.googleapis.com bloqueado por la
  política de red del sandbox), pero cargará con normalidad para cualquier usuario real o en
  GitHub Pages — fallback declarado (Georgia/sans-serif) usado solo en esta captura de control.
  Verificado también: sin `!important`, sin `@media (max-width: …)`, sin valores hex/px sueltos
  en las líneas de declaración añadidas (`grep` limpio).
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: `tienda.html` (Fase 3 paso 6) — reutilizará el header/footer/tabs ya construidos
  y el patrón `.product-grid`.


### [2026-09-28 20:44] Fase 3.5 — tienda.html

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): "go" — continuar con la siguiente página del
  plan ya acordado tras aprobar y pushear index.html.
- Qué hizo la IA:
  - Inspección de solo lectura en Figma: árbol completo de Tienda Desktop (Café activo, 332:82),
    Tienda Desktop (Merch activo, 333:122, un frame estático aparte que Figma usa solo para
    previsualizar el estado del tab) y Tienda Mobile (333:2039). Extraídos los 4 productos reales
    de Merch (Gorra El Injerto Q184.00, Filtros Hario V60 Q99.00, Hario V60 Suiren Q379.00, Hario
    V60 Buono Q2,900.00 — precios ya aprobados en GATE 2, no verificados de nuevo aquí) y sus
    colores de bloque (terracotta/pine/cherry/terracotta).
  - Consolidó los 2 frames estáticos de Figma (Café / Merch) en un único patrón ARIA tabs
    funcional: un tablist con 2 botones (role="tab", aria-selected, roving tabindex) y 2
    tabpanel (Café visible por defecto, Merch con [hidden]) — el cambio de estado real lo
    implementará js/main.js en Fase 3 paso 9; por ahora el HTML ya es válido y accesible con
    JS desactivado (ambos paneles existen, solo uno visible).
  - Reutilizó .site-header / .site-footer / .product-grid / .product-card / .tablist / .tab tal
    cual, sin tocar CSS ya aprobado de esos componentes.
  - Añadió a layout.css 3 utilidades nuevas de espaciado específicas de cabecera de página:
    .page-header (título + intro, valores REALES de Figma sin interpolar: mobile 32/24,
    desktop 64/32 — coinciden exactos con --space-8/--space-6 y --space-16/--space-8),
    .category-tabs-row (padding-bottom 24/40, también exacto), .section-bottom (padding-bottom
    56→96 con la misma progresión de 4 breakpoints que .section, mobile/desktop exactos e
    interpolación solo en los 2 pasos intermedios, mismo criterio ya usado en .container).
- Desviaciones: ninguna nueva — mismo criterio de interpolación en breakpoints intermedios ya
  documentado en layout.css/PLAN.md. Precios/nombres de Merch se toman tal cual de Figma
  (incluido el precio alto de "Hario V60 Buono"); no se corrigen sin que Nicolle lo pida, porque
  ya fueron aprobados en GATE 2.
- Verificación: capturas Playwright (375px/1440px) del estado por defecto (Café) y una prueba
  manual del panel Merch (toggle de "hidden" vía script, sin JS de producción) — contenido,
  colores y layout correctos en ambos. grep limpio: sin !important, sin
  @media (max-width: …), sin valores hex/px sueltos en las líneas añadidas.
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: finca.html (Fase 3 paso 7) — reutilizará .page-header, .proceso /
  .proceso-step / .proceso-connector y .split (Historia).

### [2026-09-28 20:50] Fase 3.6 — finca.html

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): "go ahead" — siguiente página del plan tras
  aprobar tienda.html.
- Qué hizo la IA:
  - Inspección de solo lectura en Figma: árbol completo de Finca Desktop (334:200) y Mobile
    (334:2114). Extraídos Hero (título + copy real sobre Huehuetenango/familia Aguirre desde
    1874), Nuestra historia (copy sobre Jesús Aguirre Panamá y Cup of Excellence), y el timeline
    Procesos (4 pasos numerados con caption real cada uno).
  - Corrigió un hueco real en el .proceso ya aprobado (components.css): no tenía gap definido y
    dependía de un flex-wrap orgánico sin controlar cuántos pasos caen por fila — con el texto
    real de las captions eso no garantizaba el 2×2 que Figma Mobile sí define explícitamente
    (frames "Steps row" separados). Se cambió a CSS Grid 2 columnas en mobile (gap real de Figma,
    24px filas / 40px columnas) y solo pasa a fila flex única (con los Proceso Connector como
    separadores) desde 768px — mismo criterio que layout.css: fix documentado, no silencioso.
  - Construyó finca.html: Hero (.split + nuevo .finca-photo, mismo patrón que .hero-photos de
    Home pero de una sola pieza en ambos anchos), Nuestra historia (bloque de texto simple),
    Procesos (.section--tinted + .proceso, captions agrupadas DENTRO de cada .proceso-step en
    vez de en una fila aparte como en Figma Desktop — decisión ya tomada al diseñar
    .proceso-step__caption en Fase 3.3, coincide con el patrón real de Figma Mobile).
  - Nuevo componente .finca-photo/.finca-photo__accent en components.css (aspect-ratio real de
    Figma en ambos anchos, acento circular centrado).
- Desviaciones documentadas:
  1. Captions del timeline agrupadas con su paso (no en fila aparte bajo los conectores como en
     Figma Desktop) — más robusto para wrap de texto real, y ya era el diseño de .proceso-step.
  2. Nuestra historia usa .section--tight (gap interno 16px) en vez del padding asimétrico exacto
     de Figma (20px desktop / 16px mobile, top casi 0) — reutiliza una utilidad ya aprobada en
     vez de crear una nueva solo para este caso.
  3. Procesos usa .section + .section--tinted (padding simétrico, 48/96px en los extremos) en vez
     del padding asimétrico real de Figma (40-80 / 48-96) — mismo criterio de interpolación ya
     aceptado en el proyecto.
  4. .finca-photo__accent usa un 25% de ancho fijo para el círculo en vez de 21.875% (desktop) /
     27.5% (mobile) exactos de Figma — promedio razonable, un solo valor para ambos anchos.
- Verificación: capturas Playwright (375px/1440px) — el grid 2×2 de Procesos en mobile y la fila
  con conectores en desktop coinciden con Figma; grep limpio (sin !important, sin
  @media max-width, sin valores hex/px sueltos en las líneas añadidas).
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: coffee-shops.html (Fase 3 paso 8) — última página de contenido antes de
  js/main.js. Después de coffee-shops.html toca el checkpoint de revisión con Nicolle ya
  acordado en el plan de Fase 3.

### [2026-09-28 20:55] Fase 3.7 — coffee-shops.html

- Agente: frontend
- Prompt (resumen fiel del pedido de Nicolle): "aprobado" tras preguntar si seguía con la misma
  dinámica para esta página — se interpretó como luz verde para construir (no como aprobación de
  un commit, ya que aún no había nada que aprobar).
- Qué hizo la IA:
  - Inspección de solo lectura en Figma: árbol completo de Coffee Shops Desktop (335:258) y
    Mobile (336:276). Extraídas las 4 sucursales reales (Sucursal Z13, Plaza Cemaco,
    Periroosevelt, Zona Express 1) con dirección, teléfono y horario reales; colores de chip por
    sucursal (cherry/pine/terracotta/cherry); confirmado que el mapa es un placeholder explícito
    en Figma (sin mapa real, fuera de alcance de esta PEC), cuadrado en desktop (600×600) y
    rectangular en mobile (327×240) — un pin decorativo terracotta centrado en ambos.
  - Construyó coffee-shops.html: cabecera de página (.page-header), y un layout mapa|lista
    (.split, colapsa a 1 columna apilada en mobile igual que en Figma) con 2 componentes nuevos:
    .map-placeholder/.map-placeholder__pin y .shop-list/.shop-list__row/__chip/__text/__hours.
  - Nombre de cada sucursal en <h2 class="h4"> (estilo visual de Figma exacto: Fraunces SemiBold
    22px/ink) en vez de un <h3> o <span> — evita saltar de <h1> a <h4> en la jerarquía de
    encabezados de la página, ya que Coffee Shops no tiene ningún <h2> real en el diseño.
    Dirección usa <p> sin clase (coincide exacto con el estilo base de párrafo). Horario usa
    nueva clase .shop-list__hours (caption 13px pero en Medium, no Regular como .text-caption).
  - variables.css: +2 tokens (--size-dot-sm 12px, --size-pin-lg 24px).
- Desviaciones documentadas:
  1. .page-header se reutiliza tal cual (32/24 mobile, 64/32 desktop) aunque el padding-bottom
     real de Coffee Shops en desktop es 40px, no 32px — 8px de diferencia, mismo criterio de
     tolerancia ya usado en el resto del proyecto.
  2. .section-bottom (56→96px) se reutiliza para el padding inferior de la sección mapa/lista;
     el valor real de Figma en mobile es 48px (8px de diferencia), el de desktop es exacto (96px).
- Verificación: capturas Playwright (375px/1440px) comparadas contra la estructura de Figma —
  colores de chip, línea divisoria bajo cada fila (incluida la última, igual que en Figma),
  proporción del mapa en ambos anchos, y el colapso a 1 columna en mobile, todos correctos. grep
  limpio (sin !important, sin @media max-width, sin valores hex/px sueltos en líneas añadidas).
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: checkpoint de revisión con Nicolle (ya acordado en el plan de Fase 3) antes de
  empezar js/main.js — las 4 páginas de contenido HTML/CSS están completas.

### [2026-09-28 21:09] Fase 3.8 — js/main.js
- Prompt (resumen fiel del pedido de Nicolle): "move on to javascript" — paso 9 de Fase 3, a
  cargo del Interaction Agent (agents/interaction-agent.md).
- Qué hizo la IA:
  - Releidos skills/accessibility/SKILL.md (reglas 3 y 4: patron ARIA tabs y patron disclosure)
    y agents/interaction-agent.md antes de escribir codigo, para confirmar el alcance exacto:
    solo js/main.js, sin nuevas dependencias, dos comportamientos.
  - Corregido un bug real en tienda.html (ya commiteado en Fase 3.5): el panel de Merch tenia
    el atributo hidden estatico en el HTML. La regla del Interaction Agent es explicita: el
    sitio debe seguir siendo funcional, mostrando todos los productos, con JavaScript
    desactivado. Con hidden estatico, los productos de Merch habrian sido permanentemente
    inalcanzables sin JS. Se quito ese atributo del HTML; ahora js/main.js es quien oculta el
    panel inactivo de forma dinamica al iniciar, nunca al reves.
  - Creado js/main.js (114 lineas, sin dependencias):
    initDisclosureNav(): boton hamburguesa (nav-toggle) con aria-expanded/aria-controls sobre
    site-nav; Escape cierra el menu y devuelve el foco al boton; el texto sr-only del boton
    alterna entre "Abrir menu" y "Cerrar menu".
    initCategoryTabs(): patron ARIA tabs completo sobre el tablist de Tienda — aria-selected,
    roving tabindex (0 en el tab seleccionado, -1 en el resto), flechas izquierda/derecha con
    wraparound, Home/End, click. El estado inicial respeta el aria-selected="true" ya presente
    en el HTML (Cafe por defecto) en vez de asumir siempre el primer tab.
  - Añadido <script src="js/main.js" defer></script> antes de </body> en las 4 paginas
    (index.html, tienda.html, finca.html, coffee-shops.html).
- Verificacion (Playwright, servidor local de vista previa):
  - Sin JavaScript (contexto con java_script_enabled=False): panel-cafe visible, panel-merch
    presente en el DOM con sus 4 product-card y sin atributo hidden estatico — ambos paneles de
    producto accesibles sin JS, como exige el Interaction Agent.
  - Con JavaScript, estado inicial: tab-cafe aria-selected=true, tab-merch aria-selected=false,
    panel-cafe.hidden=false, panel-merch.hidden=true (aplicado dinamicamente por el script, tal
    como debe ser).
  - Click en tab-merch: aria-selected y tabIndex intercambian correctamente (cafe pasa a -1,
    merch a 0), panel-cafe se oculta y panel-merch se muestra.
  - Teclado: flecha izquierda desde merch mueve el foco y la seleccion a cafe; End mueve el foco
    al ultimo tab (merch); Home lo devuelve al primero (cafe); flecha derecha desde el ultimo tab
    (merch) hace wraparound correcto al primero (cafe).
  - Nav movil en index.html: estado inicial aria-expanded=false y nav oculto; click abre el menu
    (aria-expanded=true, nav visible, etiqueta cambia a "Cerrar menu"); Escape lo cierra, el foco
    vuelve al boton nav-toggle y la etiqueta vuelve a "Abrir menu".
- Commit: (pendiente de que Nicolle escriba "aprobado")
- Siguiente paso: checkpoint de revision con Nicolle tras este archivo (segun el plan de Fase 3)
  antes de cerrar la Fase 3 por completo.

### [2026-09-29 07:28] Fase 4 — Auditoria responsive de detalle (Responsive QA Agent)
- Prompt (resumen fiel del pedido de Nicolle): "starttt" (inicio de Fase 4) y luego "lets fix
  all fails" (autorizacion para corregir todo lo detectado).
- Rol: Responsive QA Agent (agents/responsive-qa-agent.md), checklist de 18 reglas en
  skills/responsive-detail/SKILL.md.
- Que hizo la IA:
  - Audito programaticamente (Playwright, no solo capturas visuales) las 4 paginas en 320,
    375, 414, 768, 1024, 1280 y 1440px, mas 375x667 en horizontal y una aproximacion de zoom al
    200% (viewport a la mitad, metodologia documentada en el propio audit).
  - Resultado inicial: 13 de 18 reglas en verde, 2 no aplicables a este diseño (sin hero a
    pantalla completa -> regla 5 N/A; sin header sticky -> regla 12 N/A), 5 fallos reales
    confirmados con medicion (no solo sospecha visual).
- Fallos encontrados y corregidos (uno por commit, ver mensajes de commit para el detalle
  exacto de cada uno):
  1. Regla 9 (hover): los 4 selectores :hover de components.css (.btn--primary/secondary/
     tertiary, .tab) no estaban protegidos con @media (hover: hover) — exactamente el
     anti-patron que skills/responsive-detail/SKILL.md marca como incorrecto en su propio
     ejemplo. Corregido envolviendo los 4 en el media query.
  2. Regla 3 (min-width:0 + overflow-wrap en hijos de flex/grid con texto): probado
     inyectando una palabra larga sin espacios (108 caracteres) en cada componente y midiendo
     scrollWidth a 320px. Desbordaban de verdad: .flavor-step__label (Home), .proceso-step__
     label y __caption (Finca), .shop-list__text (Coffee Shops), los links del nav movil
     (index.html, con el menu abierto) y .tab (Tienda). Corregido añadiendo min-width:0 y
     overflow-wrap:anywhere a los 6.
  3. Regla 7 (area tactil >= 44x44px): medido con getBoundingClientRect. Los links del footer
     median 43x17px y los del menu movil 49x21px (ningun padding propio, solo la altura de
     linea del texto) — ambos muy por debajo de 44px de alto. Las tabs de Tienda medían 41px
     de ancho ("Café"), por debajo del minimo. Corregido con min-height:44px (+ inline-flex
     para centrar) en los links de ambos nav, padding-inline en los del footer para llegar
     tambien a 44px de ANCHO (con margin-inline negativo equivalente para que el texto no se
     desplace visualmente), y padding-inline ampliado en .tab.
  4. Regla 10 (nav movil se cierra al hacer clic en un link): confirmado con un test de
     interaccion — Esc y aria-expanded ya funcionaban (Fase 3.8), pero click en un link del
     menu no lo cerraba. Corregido en js/main.js: cada link del nav ahora tambien cierra el
     menu al hacer clic.
  5. Regla 6 (longitud de linea <= ~70 caracteres): medido el ancho real de un parrafo en
     cada breakpoint. A 768px (columna unica todavia, antes de que .split pase a 2 columnas
     en 1024px) llegaba a 83 caracteres por linea. Corregido con max-width:65ch en `p`.
  - Nota sobre el cuerpo de texto a 15px en mobile (--fs-body-sm): la regla 6 pide cuerpo
    >=16px, pero ese valor es el estilo de texto real de Figma para mobile (tokenizado desde
    la Fase 3.1), no un error. Se le pregunto a Nicolle si mantenerlo o subirlo a 16px; "fix
    all fails" se interpreto como referido a los 5 fallos de codigo de arriba, no a este
    cambio de diseño aprobado — se deja el valor de Figma sin tocar salvo que Nicolle pida lo
    contrario.
- Bug adicional encontrado (no es una de las 18 reglas, es un defecto real preexistente):
  investigando la correccion de area tactil del footer, el area medida no cuadraba con la
  posicion esperada. Causa: `ul, ol { list-style: none; }` en base.css quitaba la vineta pero
  nunca reseteaba el padding-left de 40px por defecto del navegador, asi que TODOS los <ul>
  del sitio (product-grid, steps-grid, ambos nav-list, shop-list) tenian una sangria de 40px
  no intencionada respecto al resto del contenido — no coincidia con Figma y no se habia
  detectado en las revisiones visuales de la Fase 3. Corregido añadiendo padding:0 al mismo
  reset.
- Verificacion final (tras todas las correcciones, re-auditado por completo): las 5 reglas que
  fallaban ahora pasan (confirmado con las mismas mediciones programaticas, no solo visual);
  cero regresiones en las otras 13 reglas que ya pasaban (vuelto a correr el barrido completo
  de las 7 anchuras x 4 paginas); alineacion de logo/nav/disclaimer del footer verificada
  pixel a pixel tras el fix del padding de listas.
- Commits: (pendiente de que Nicolle escriba "aprobado") — 6 commits pequeños, uno por
  correccion, en vez de uno solo agrupando todo.
- Siguiente paso: tras los commits, re-confirmar que las 18 reglas siguen en verde y cerrar la
  Fase 4.

### [2026-09-29 08:00] Fase 4 — Cierre (referencia a la entrada de Fase 4 de las 07:28)
- Agente: responsive-qa
- Prompt (resumen fiel del pedido de Nicolle): "lets do phase 6 of the pec 6 el injerto". Al
  detectar que la Fase 4 seguia abierta y la Fase 5 sin hacer, Nicolle eligio: "finish phase 4
  and skip phase 5 for now".
- Qué hizo la IA: Contrasto la entrada de Fase 4 (07:28), que dice "commits pendientes de
  aprobacion", con `git log`: los 6 commits ya existian (07:33-07:34). Esta entrada corrige ese
  dato (no reescribe la anterior) y registra los hashes reales:
  - 60fba97 fix(css): estados hover solo en dispositivos con puntero real (regla 9)
  - e303938 fix(css): evitar desbordamiento de texto largo en hijos de flex/grid (regla 3)
  - a2a0c8b fix(css): area tactil minima de 44px en tabs y ambos nav de enlaces (regla 7)
  - c934877 fix(js): cerrar el menu movil al hacer clic en un link de nav (regla 10)
  - 76f1643 fix(css): limitar la longitud de linea de los parrafos a ~65ch (regla 6)
  - cee3cb6 fix(css): quitar el padding-left de 40px por defecto de ul/ol (bug extra)
- Decisiones de Nicolle / cambios manuales: Fase 5 (documentacion) se aplaza; la Fase 6 (pulido)
  se hara antes que la documentacion final para no reescribir el README dos veces. Queda
  abierta la decision sobre el cuerpo mobile de 15px (regla 6, valor de Figma no modificado).
- Problemas encontrados y corrección: existe un `.git/index.lock` vacio (07:39) sin proceso
  asociado que bloqueara los proximos commits; no se borro (Nicolle no autorizo el borrado).
  Solucion: `rm .git/index.lock` desde su Terminal.
- Verificación: hashes y fechas leidos de `git log`. NO se volvio a ejecutar el barrido de las
  18 reglas tras los commits (Nicolle no lo autorizo en esta sesion); el resultado "5 fallos
  corregidos, 0 regresiones" es el de la entrada de las 07:28, medido antes de commitear.
- Commit: pendiente de aprobación (docs: registra el cierre de la Fase 4 con los hashes reales)
- Siguiente paso: Fase 6 (instalar la skill apple-design en su Terminal, auditar las 4 paginas).

### [2026-09-29 08:40] Fase 4 — Re-auditoria tras los commits + 2 fallos tactiles + Proceso vertical con rebote
- Agente: responsive-qa (re-auditoria y fallos tactiles) y frontend (Proceso vertical + animacion)
- Prompt (resumen fiel del pedido de Nicolle): "fine then do the re run"; despues: "the 2x2 is
  shown but i would like it to be all in one vertical, and to add some sort of fun bouncy
  animation to it, and fix the two target fails before we move on to phase 6".
- Qué hizo la IA: Copio el sitio a una carpeta temporal fuera de su proyecto y re-midio con
  Playwright las 4 paginas en 320, 375, 414, 768, 1024, 1280, 1440 + 375 horizontal + zoom 200%
  aproximado (viewport reducido). Antes de tocar codigo encontro 2 fallos nuevos de la regla 7
  que la auditoria de las 07:28 no habia visto: (a) enlace "Home" del nav de cabecera de
  43x44px desde 768px (1px por debajo); (b) los enlaces del logo (cabecera y pie, misma clase
  .site-header__logo) median 35px de alto. Con la aprobacion de Nicolle:
  1. layout.css: padding-inline + margin-inline negativo en `.site-header__nav-list a`; y
     padding-block + margin-block negativo en `.site-header__logo` (area tactil de 51px sin
     cambiar tamaño ni posicion visual del logo).
  2. components.css: `.proceso` pasa de grid 2x2 a columna vertical en mobile (<768px) con
     conector vertical de 2x32px entre pasos; desde 768px vuelve a la fila de Figma.
  3. Animacion de rebote al entrar en pantalla: keyframes `proceso-rebote` y
     `proceso-numero-pop` en components.css, tokens nuevos (`--duration-bounce`,
     `--duration-stagger`, `--easing-bounce` con y=1.56 para el sobreimpulso) en variables.css,
     y `initProcesoAnimation()` en js/main.js (IntersectionObserver, ~15 lineas).
     Reduced-motion: base.css redefine las duraciones nuevas a ~0 (sin `!important`).
- Decisiones de Nicolle / cambios manuales: (1) Proceso vertical solo en mobile (<768px); esto
  se aparta del frame Finca Mobile aprobado en Figma (2x2) por decision suya. (2) Animacion al
  hacer scroll (no solo hover). (3) Aprobo los 2 arreglos tactiles tal cual se propusieron.
  Nicolle ya habia borrado `.git/index.lock` desde su Terminal.
- Problemas encontrados y corrección: el 2x2 dejaba pasos de 116px de ancho a 320px. Mi primer
  barrido no detecto el fallo de "Home" ni el del logo; ver arriba.
- Verificación (medido, no visual): 0 de 36 combinaciones pagina x ancho con scroll horizontal,
  desbordamiento o area tactil < 44px (se excluye el skip-link .sr-only). Nav movil: abre,
  cierra con Esc, cierra al hacer clic en link, aria-expanded correcto, foco vuelve al toggle;
  boton oculto a 768px. Tabs: ←/→/Home/End OK; sin JS se ven ambos paneles y el nav. Proceso:
  columna a 320/375 (centros a x=160 y x=188 = mitad del viewport, conectores alineados), fila
  a 768/1440. Animacion: 0 pasos visibles antes de hacer scroll, los 7 elementos con
  .is-visible despues; transform del numero muestreado 0.5 -> 0.93 -> 1.007 (sobreimpulso
  real). Con prefers-reduced-motion: duracion 1e-05s. Sin errores de consola. Captura de
  Finca a 375px revisada. NO re-medido: reglas 4, 15 y loading="lazy". La animacion NO se vio
  en movimiento real por Nicolle en navegador; conviene que la pruebe.
- Commit: pendiente de aprobación (3 commits propuestos: fix tactil, feat Proceso vertical +
  rebote, docs de PLAN)
- Siguiente paso: aprobacion de los commits y comienzo de la Fase 6 (skill apple-design).

### [2026-09-29 09:10] Fase 4 — Mejora de la animacion de Proceso + conectores centrados en escritorio
- Agente: frontend (referencia a la entrada de las 08:40, aun sin commitear)
- Prompt (resumen fiel del pedido de Nicolle): "before we commit or push, can we improve the
  animation on timeline proceso please" (elige: conector que se dibuja, vida en los circulos,
  repetir al volver con el scroll); despues: "also fix the [fold] conectors to be more centered
  in the desktop version please".
- Qué hizo la IA: (1) components.css: el conector ahora crece (`transform: scaleY/scaleX`,
  origen arriba/izquierda) en vez de aparecer con fade; en escritorio la secuencia se encadena
  paso → conector → paso con `--retraso` calculado desde `--duration-stagger` (350ms). Se
  corrigio un fallo de mi version anterior: el "pop" del numero tenia un retraso fijo y en
  escritorio ocurria antes de que el paso apareciera; ahora hereda `--retraso` del paso.
  (2) Vida en los circulos: salto `scale(1.12)` en hover (solo `@media (hover:hover)`),
  `scale(.94)` al pulsar, y un pulso unico de aro accent-gold al aterrizar
  (`proceso-numero-pulso`). (3) js/main.js: `.is-visible` se añade al 30% visible y se quita
  con 0% visible, asi se repite al volver sin parpadeo en el borde. (4) Tokens nuevos
  `--duration-draw` y `--duration-pulse` (variables.css) y su reduccion en base.css. (5)
  Conectores en escritorio: `.proceso` pasa a `align-items:flex-start` y la linea baja al
  centro vertical de los circulos con `margin-block` calculado con `--size-dot-lg`; antes se
  centraba respecto a toda la columna de texto y los circulos con captions de distinta
  longitud quedaban desnivelados (~10px).
- Decisiones de Nicolle / cambios manuales: elige las 3 mejoras anteriores (rechaza el "rebote
  multiple con linear()"). "More centered" interpretado como alineacion VERTICAL con los
  circulos; si se referia a centrar la linea horizontalmente entre circulos, queda pendiente.
- Problemas encontrados y corrección: ver (1), retraso del pop mal calculado.
- Verificación (medido en navegador): a 768/1024/1440 el centro vertical de los 4 circulos y los
  3 conectores coincide (spread 0.0px); secuencia a 1440 muestreada cada 400ms: 1→conector→2→
  conector→3→conector→4 en orden, completa a ~2.4s; al volver arriba se quitan las 7 clases y
  al re-entrar se reanima (paso 1 a opacidad 0.95 a los 200ms) y termina completo; hover =
  matrix(1.12); mobile: conectores dibujados (sin transform) tras entrar; reduced-motion: todo
  visible al instante; sin JS: sin clase .proceso--animado y opacidad 1; sin errores de
  consola; barrido de 36 combinaciones pagina x ancho: 0 fallos (scroll, desbordamiento, area
  tactil). NO verificado: el aspecto del movimiento a ojo (solo estados muestreados) ni el
  pulso del aro en pantalla.
- Commit: pendiente de aprobación
- Siguiente paso: aprobacion de los 3 commits propuestos y luego Fase 6.

### [2026-09-29 09:23] Fase 6.1 — Auditoría apple-design del Home + Grupo 1 (accesibilidad)
- Agente: polish (Fase 6; skill `apple-design` de Claude; todavía no existe `agents/polish-agent.md`
  en el repo)
- Prompt (resumen fiel del pedido de Nicolle): "Using the apple-design skill, audit PEC 6 El injerto
  page against Apple's design principles. Go through spacing, hierarchy, typography and motion
  separately, and tell me what is wrong and why it matters." Eligió auditar el Home (index.html) en
  solo lectura. Tras ver el informe: "apply all groups in proposed order and s2, a1 and h3 is
  approved". Confirmó editar 5 archivos (index.html + 4 CSS), añadir 5 entradas a PLAN.md y que los
  commits se creen solo después de su aprobación.
- Qué hizo la IA: Auditó el Home a 375/768/1024/1440px con mediciones en Chromium (tamaños, cajas,
  contrastes calculados desde los hex) separando espaciado, jerarquía, tipografía y movimiento, más
  accesibilidad. Resultado "Critical issues", ~19 hallazgos (uno, de movimiento en Finca, queda
  fuera de esta pasada). Los agrupó en 5 grupos con un commit cada uno: 1 accesibilidad, 2
  jerarquía, 3 espaciado, 4 tipografía, 5 movimiento. Este grupo 1:
  (a) `.site-footer .site-header__logo` pasa a color surface: el nombre del logo del pie era ink
  sobre fondo ink (1.00:1) y solo se veía el icono; ahora 16.41:1.
  (b) Texto del chip no seleccionado, del select "Cada 2 semanas" y del precio del teaser: de
  `--color-disabled-text` a `--color-text-secondary` (2.25:1 → 4.58:1 sobre disabled-fill; 2.87:1
  → 5.85:1 sobre surface). Son contenido informativo, no controles :disabled, así que no están
  exentos de AA; el comentario del token queda actualizado.
  (c) Anillo de foco: `--focus-ring-color` de terracotta a ink (2.32:1 → 16.41:1 sobre surface;
  1.97:1 → 13.95:1 sobre ink-tint-8) y token nuevo `--focus-ring-color-on-dark` (surface) para el
  pie, donde un anillo ink sería invisible.
  (d) `.sr-only:focus-visible` hace visible el enlace "Saltar al contenido" cuando recibe el foco
  (antes era un cuadro recortado de 1×1px); token nuevo `--z-skip-link`.
  (e) Pie en tablet: con el nombre del logo ya visible se veía partido en "EL / INJERTO" a 768px y
  el aviso legal quedaba en 112px de ancho; `nowrap` + `flex-shrink: 0` en el logo desde 768px y
  el aviso pasa a una segunda fila entre 768 y 1023px (desde 1024px igual que antes).
- Decisiones de Nicolle / cambios manuales: aprobó A1 (foco ink en lugar del terracotta del estado
  de foco del hi-fi de Figma; se aparta de Figma a propósito) y, para grupos posteriores, S2 y H3.
  Aceptó el orden de grupos propuesto y que los commits esperen a su aprobación.
- Problemas encontrados y corrección: (1) Mi `git status` de solo lectura dejó un `.git/index.lock`
  vacío que la VM no podía borrar (habría bloqueado git a Nicolle); se lo dije, lo borré con su
  permiso y desde entonces uso `git --no-optional-locks`. (2) Al hacer visible el nombre del logo
  del pie apareció el salto "EL / INJERTO" a 768px (antes invisible): corregido con (e). (3) Mi
  primera versión de (e) ponía `nowrap` en todos los anchos y con el texto al 200% en 375px la
  página desbordaba 4px en horizontal (antes no): lo limité a ≥768px, restauré los archivos desde
  los commits y repetí todas las mediciones.
- Verificación (medido en Chromium, con las fuentes Fraunces y Work Sans cargadas): 240 cargas de
  página (4 páginas × 10 anchos de 320 a 1920 × estado inicial y cada grupo acumulado): 0 con
  scroll horizontal. Primer Tab: el enlace "Saltar al contenido" mide 254×50 y es visible (antes
  1×1). Color del logo del pie rgb(30,22,17) → rgb(250,245,236). Anillo de foco rgb(30,22,17) en
  la página y rgb(250,245,236) en el pie. Pie a 768/900px: logo en 1 línea (51px), aviso en 1
  línea en la segunda fila, altura 135 → 154px; a 1024px+ sin cambios. 375px con texto al 200%: sin
  desbordamiento en las 4 páginas, igual que antes. NO verificado: Safari/iOS/Firefox (solo
  Chromium); las fuentes se sirvieron desde una copia local porque el entorno de pruebas no llega a
  Google Fonts (mismas familias); no se comparó píxel a píxel con los frames de Figma.
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de este commit y Grupo 2 (jerarquía).

### [2026-09-29 09:23] Fase 6.2 — Grupo 2 (jerarquía) del Home
- Agente: polish (referencia a la entrada de Fase 6.1)
- Prompt (resumen fiel del pedido de Nicolle): el mismo de la entrada 6.1 ("apply all groups in
  proposed order and s2, a1 and h3 is approved"); H3 aprobado explícitamente.
- Qué hizo la IA:
  (H1) Los 4 nombres de "Cafés de temporada" pasan de `<p>` sin enlace a
  `<p class="product-card__name"><a class="product-card__link" href="tienda.html">…</a></p>`.
  Patrón "stretched link": `.product-card { position: relative }` y `.product-card__link::after
  { inset: 0 }`, de modo que toda la tarjeta es clicable pero el lector de pantalla oye un solo
  enlace con el nombre. El anillo de foco se dibuja hacia dentro (offset negativo) porque la
  tarjeta tiene `overflow: hidden`; subrayado en hover solo bajo `@media (hover: hover)`.
  (H2) Había 3 botones principales en una vista; ahora uno (el "Comprar café" del hero).
  "Encuentra tu sabor" y "Arma tu suscripción" pasan a `btn--secondary`, con un hover propio
  (ink-tint-16) sobre la banda `.section--tinted`.
  (H3) Los círculos de sabor dejan el terracotta (color de acción) y alternan cherry/pine con
  modificadores `.flavor-step__icon--cherry` / `--pine`.
  (H4) La página actual se distingue en el nav: `a[aria-current='page']` en negrita con subrayado
  terracotta de 3px (el mismo lenguaje que la tab seleccionada de Tienda). `aria-current` ya estaba
  en el HTML de las 4 páginas; faltaba el estilo.
- Decisiones de Nicolle / cambios manuales: aprobó H3. CONFLICTO CON DECISIÓN BLOQUEADA: toca los
  roles de color de la dirección de bloques saturados (el terracotta pasa a significar solo
  acción); no se quita saturación, solo se cambia qué bloque usa cada círculo.
- Problemas encontrados y corrección: el hover de `.btn--secondary` (ink-tint-8) es idéntico al
  fondo de `.section--tinted`, es decir, invisible en "Arma tu suscripción"; se añadió la regla
  acotada. Observado y NO corregido: `.btn--secondary` y `.btn--tertiary` no tienen regla
  `:active`. El enlace de la tarjeta mide solo 28px de alto por sí mismo: un escáner que mida la
  caja del enlace lo marcará como < 44px, pero el área real es toda la tarjeta.
- Verificación (medido en Chromium): orden de tabulación en el Home: Comprar café → Encuentra tu
  sabor → 4 tarjetas → Arma tu suscripción. En cada tarjeta, 8 de 8 puntos de prueba (centro,
  esquinas, borde inferior) caen sobre el enlace a 320/375/768/1024/1440px (tarjeta más pequeña
  272×323); un clic real sobre la imagen de la 3.ª tarjeta navega a tienda.html. Anillo de foco de
  la tarjeta: 2px ink dibujado sobre el ::after. Botones de `main`: 3 primary → 1 primary + 2
  secondary. Círculos: 4× rgb(239,138,36) → rgb(232,66,44), rgb(22,121,76), rgb(232,66,44),
  rgb(22,121,76). Nav actual: peso 500 (600 en móvil) sin subrayado → 700, underline, rgb(239,138,36), 3px. En las
  4 páginas a 768/900/1024/1280px el nav no se solapa ni salta de línea y la cabecera sigue en
  84px (el enlace actual crece como máximo 1px). 0 desbordamientos en las 240 cargas. NO
  verificado: hover con ratón real (solo la presencia de la regla) ni lector de pantalla.
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de este commit y Grupo 3 (espaciado).

### [2026-09-29 09:23] Fase 6.3 — Grupo 3 (espaciado) del Home
- Agente: polish (referencia a la entrada de Fase 6.1)
- Prompt (resumen fiel del pedido de Nicolle): el mismo de la entrada 6.1; S2 aprobado
  explícitamente.
- Qué hizo la IA:
  (S1) Botones dentro de `.stack`: antes se estiraban a la columna completa (568px a 1440px)
  salvo el CTA centrado (198px). Ahora ocupan todo el ancho por debajo de 480px y desde 480px se
  ajustan a su contenido (a la izquierda; centrados en `.stack--center`).
  (S2) Cabecera y pie se alinean con `.container`: desde 1024px `padding-inline` de 64px y desde
  1280px el mismo margen que el contenedor (120px a 1440px, centrado por encima de 1440px). Antes
  el logo quedaba 80px a la izquierda del H1 a 1440px y 320px a 1920px.
  (S3) La composición de 3 bloques del hero empieza en 768px y no en 1024px: entre 768 y 1023px
  era un bloque rojo liso de 688×463.
  (S4) La fila "Encuentra tu sabor" tiene ancho propio (`max-width: 640px`; antes se encogía al
  contenido, 364px, y a 375px 170px) y desde 768px el gap de 48px.
  (S5) `.product-card__body` sin padding lateral (`var(--space-4) 0`): el texto se alinea con el
  borde de la imagen; la tarjeta no tiene borde visible, así que la sangría de 16px no
  correspondía a nada.
  (S6) `white-space: nowrap` en los enlaces del nav del pie: "Coffee Shops" se partía en 2 líneas a
  768px (51px de alto). Tras el ajuste del pie de tablet (entrada 6.1) el nav ya tiene sitio; se
  mantiene como refuerzo.
- Decisiones de Nicolle / cambios manuales: aprobó S2, que se aparta a propósito del hi-fi
  (header de escritorio con 40px laterales). El hi-fi solo tiene frames de 375 y 1440px, así que
  S3 (tablet) no tiene referencia en Figma.
- Problemas encontrados y corrección: `.product-card__body` es un componente compartido, así que
  S5 también cambia las tarjetas de Tienda (texto alineado con la imagen); Tienda no estaba en la
  auditoría, revisado en captura a 375 y 1440px.
- Verificación (medido en Chromium): logo de la cabecera = H1 = logo del pie en x: 64px a 1024,
  120px a 1280 y 1440, 360px a 1920 (antes 40px); sin cambios a 320–900px (24 / 40px). Las
  otras 3 páginas a 1440px: logo en x=120. Botones a 1440px: 568/198/568 → 156/198/204 de ancho
  (a 320 y 375px: 272 y 327, ancho completo). Hero a 768px: bloque liso 688×463 → 3 bloques
  688×401. Fila de sabores: 364 → 640px de ancho a 768/1440/1920px (x=400 a 1440). Texto de
  tarjeta: x = x de la imagen (antes +16px) a 375/768/1440/1920px. Nav del pie: 51px → 44px de
  alto a 768 y 900px en las 4 páginas (44px en todos los anchos). 0 desbordamientos en las 240
  cargas. NO verificado: la fidelidad con Figma en 768–1023px (no hay frame).
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de este commit y Grupo 4 (tipografía).

### [2026-09-29 09:23] Fase 6.4 — Grupo 4 (tipografía) del Home
- Agente: polish (referencia a la entrada de Fase 6.1)
- Prompt (resumen fiel del pedido de Nicolle): el mismo de la entrada 6.1.
- Qué hizo la IA:
  (T3) El párrafo base pasa de 15px a 16px en móvil (`p { font-size: var(--fs-body) }` y se elimina
  la regla que lo subía a 16px desde 768px): regla 6 de `responsive-detail`, cuerpo ≥ 16px.
  `--fs-body-sm` (15px) sigue usándose en las tabs y su comentario queda actualizado.
  (T4) `.product-card__price` pasa de 14px regular en color secundario a 16px (`--fs-body`)
  medium en ink: es un dato de decisión, no una nota al pie.
  (T5) `text-wrap: balance` en h1–h3 para evitar una palabra suelta al final ("casa." sola en el
  H1); mejora progresiva, un navegador sin soporte lo ignora.
- Decisiones de Nicolle / cambios manuales: ninguna adicional. T3 se aparta del 15px móvil del
  hi-fi de Figma por aplicar la regla propia del proyecto.
- Problemas encontrados y corrección: T3 y T4 tocan CSS compartido, así que también afectan a
  Tienda, Finca y Coffee Shops (párrafos de 16px en móvil y precio de Tienda); revisado en capturas
  a 375 y 1440px. Límite conocido, NO corregido: a 320px con el texto al 200% el Home (346px de
  scroll) y Finca (336px) ya desbordaban antes; con párrafos de 16px pasan a 362px y 353px (probablemente
  por palabras largas que no se parten; no investigado a fondo). En 375px con texto al 200% no hay desbordamiento ni
  antes ni después. Posible seguimiento: `overflow-wrap: anywhere` en `p` (probado en una copia:
  Finca queda en 320px, el Home en 352px: el H1 también aparece desbordando).
- Verificación (medido en Chromium): párrafo del hero a 375px 15px → 16px; precio 14px/400/
  rgb(107,93,79) → 16px/500/rgb(30,22,17). H1 con `text-wrap: balance`: a 375, 1440 y 1920px
  "El café que / conquistó el mundo, / directo a tu casa." (antes "…el mundo, directo a tu / casa.");
  a 768px "El café que conquistó el / mundo, directo a tu casa.". 0 desbordamientos en las 240 cargas.
  NO verificado: `text-wrap: balance` en Safari/Firefox (solo Chromium).
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de este commit y Grupo 5 (movimiento).

### [2026-09-29 09:23] Fase 6.5 — Grupo 5 (movimiento) del Home
- Agente: polish (referencia a la entrada de Fase 6.1)
- Prompt (resumen fiel del pedido de Nicolle): el mismo de la entrada 6.1.
- Qué hizo la IA: (M1) El icono de hamburguesa no reflejaba el estado del menú. En
  `.site-header__toggle`, cada `path` del SVG recibe `transform-box: fill-box`, origen centrado y
  `transition: transform, opacity` con `var(--transition-fast)`; con `aria-expanded="true"` las
  líneas 1 y 3 giran ±45° con `translateY(±6px)` y la del medio se desvanece: queda una X.
  Reduced-motion: no se añadió nada, `base.css` ya redefine el token de duración.
- Decisiones de Nicolle / cambios manuales: ninguna adicional. Fuera de esta pasada, sin tocar:
  el hallazgo de movimiento de Finca (M2).
- Problemas encontrados y corrección: ninguno en este grupo.
- Verificación (medido en Chromium a 375px): con el menú abierto `aria-expanded="true"` y los
  centros de las 3 líneas coinciden en (329, 38) (cerrado: 32 / 38 / 44 en y), transición 0.15s;
  con `prefers-reduced-motion: reduce` la duración es 1e-05s. Captura del icono cerrado y abierto
  revisada. 0 desbordamientos en las 240 cargas, sin cambios en el nav a 768/900/1024/1280px.
  NO verificado: el aspecto del giro en movimiento a ojo (solo estados muestreados y capturas).
  Comprobación final tras los 5 grupos: 0 scroll horizontal, tabs sin desbordamiento en Tienda a
  10 anchos, enlaces táctiles del pie a 44px en las 4 páginas.
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de los 5 commits y, si Nicolle lo pide, la documentación de la Fase 6
  (`agents/polish-agent.md`, `skills/apple-design`, sección "Polish pass" del README), que no se
  ha tocado.

### [2026-10-01 07:04] Fase 6.6 — Auditoría apple-design de Tienda, Finca y Coffee Shops + lote 1 (tipografía y contenido)
- Agente: polish (referencia a la entrada de Fase 6.1), con la skill apple-design (en web solo se
  aplican principios y fundamentos de la HIG). Solo lectura durante la auditoría.
- Prompt (resumen fiel del pedido de Nicolle): auditar el resto de páginas (Tienda, Finca, Coffee
  Shops) en una sola pasada con los mismos 4 ejes que el Home (espaciado, jerarquía, tipografía,
  movimiento), y después escribir la documentación. La documentación sigue en espera por decisión
  de Nicolle.
- Qué hizo la IA: auditó con Chromium/Playwright a 375, 768, 1024 y 1440px y midió cada hallazgo.
  20 hallazgos (1 Crítico, 4 Altos, 6 Medios, 9 Bajos): ALL-A1, ALL-A2, ALL-S1, ALL-T1, TIE-S1,
  TIE-S2, TIE-H1, TIE-C1, TIE-A1, FIN-S1, FIN-S2, FIN-H1, FIN-H2, FIN-M1, FIN-M2, FIN-A1, FIN-A2,
  COF-S1, COF-H1, COF-H2. Con "CONFLICTO CON DECISIÓN BLOQUEADA": COF-H1 (color de los puntos y
  del pin: dirección de bloques saturados), FIN-H1 y el enlace a Tienda de COF-H2 (añaden un CTA:
  estructura de secciones) y TIE-H1 (alcance). FIN-S1 revierte una decisión de Nicolle del
  2026-09-29 y ALL-A2 se aparta del Figma. Aplicado en este lote: ALL-T1 (`text-wrap: pretty` en
  `p`, base.css), TIE-C1 (tab "Merch" → "Accesorios" en tienda.html, ids y aria sin cambios) y
  `flex-wrap: wrap` en `.tablist` (components.css).
- Decisiones de Nicolle / cambios manuales: eligió aplicar primero el grupo "Tipografía +
  Movimiento" (ALL-T1, FIN-M1, FIN-M2) y aprobó TIE-C1. Aprobadas de antemano pero SIN aplicar
  (esperan a su grupo): enlaces a Tienda en Finca y Coffee Shops, tarjetas de Tienda como enlaces
  (TIE-H1), FIN-S1 (Proceso vertical hasta 1024px) y ALL-A2 (subrayado en ink). No aprobado:
  "reproducir Proceso una sola vez" (FIN-M1). No seleccionados: los grupos de Accesibilidad,
  Espaciado y Jerarquía. Nicolle aprobó los 5 commits del Home (14686c1 contraste y foco, 981830f
  jerarquía, 37f99d3 espaciado, 36a0363 tipografía, 34b2558 hamburguesa a X); las entradas 6.1–6.5
  siguen diciendo "pendiente de aprobación" porque PLAN.md es solo-añadir.
- Problemas encontrados y corrección: (1) el informe inicial omitió las etiquetas "CONFLICTO CON
  DECISIÓN BLOQUEADA" que exige el brief; se corrigió en un mensaje aparte. (2) Con texto al 200%
  la tab "Accesorios" partía la palabra (tab de 91px a 139px de alto a 375px); se corrigió con
  `flex-wrap: wrap`. (3) ALL-A1 (Crítico) sigue SIN corregir: con texto al 200% el logo se parte y
  se solapa con el botón del menú a 375px, y a 320px el botón se queda en ~12px. Ya existía antes
  de esta pasada y afecta a todo el sitio, Home incluido; la comprobación de Home al 200% solo
  buscaba scroll horizontal y no lo detectó. En Home también existen ALL-S1, ALL-A2 y TIE-S1.
  (4) "Accesorios" se aparta del nombre "Merch" del Figma.
- Verificación (medido en Chromium): 40 cargas de página sin scroll horizontal; palabras sueltas
  corregidas en los párrafos medidos, quedan 3 últimas líneas cortas (dos leyendas de Proceso y la
  línea del teléfono de Z13 a 375px); tamaños de tab con y sin texto ampliado. NO verificado:
  Safari/iOS, Firefox, lector de pantalla, comparación píxel a píxel con Figma, táctil real.
  `text-wrap: pretty` solo lo aplica Chromium 117+; el resto lo ignora sin romper nada.
- Commit: pendiente de aprobación
- Siguiente paso: Fase 6.7 (movimiento de Finca). Después, los grupos aprobados de antemano cuando
  Nicolle los active, y ALL-A1, que sigue abierto.

### [2026-10-01 07:04] Fase 6.7 — Lote 1 (movimiento) de Finca: entrada del Proceso y círculo numerado
- Agente: polish (referencia a la entrada de Fase 6.6)
- Prompt (resumen fiel del pedido de Nicolle): aplicar FIN-M1 y FIN-M2 del grupo "Tipografía +
  Movimiento" que Nicolle eligió aplicar primero.
- Qué hizo la IA: (FIN-M1) en `variables.css`, `--duration-stagger` y `--duration-draw` bajan de
  350ms a 120ms; solo se acorta la secuencia de entrada, la repetición al volver a entrar se
  mantiene porque Nicolle no aprobó "reproducir una sola vez". (FIN-M2) en `components.css` se
  quitan la transición del círculo `.proceso-step__number` y sus estados `:hover` (escala 1.12) y
  `:active` (escala 0.94): el paso no es clicable (cursor auto, sin tabindex) y el escalado
  sugería un botón que no existe.
- Decisiones de Nicolle / cambios manuales: aprobó acortar la entrada (FIN-M1) y quitar el
  escalado (FIN-M2); rechazó que el Proceso se reproduzca una sola vez.
- Problemas encontrados y corrección: la entrada 6.5 deja fuera "el hallazgo de movimiento de
  Finca (M2)" y no he podido confirmar que sea el mismo hallazgo que FIN-M1/FIN-M2; esta entrada
  documenta solo lo medido ahora.
- Verificación (medido en Chromium): el paso 4 queda totalmente visible a 1.04s (antes 2.40s) y la
  última animación termina a 2.02s (antes 3.40s); transformaciones de hover y pulsación del
  círculo: ninguna. Con `prefers-reduced-motion: reduce` la secuencia sigue siendo inmediata
  (los tokens se redefinen en `base.css`). NO verificado: Safari/Firefox ni táctil real.
- Commit: pendiente de aprobación
- Siguiente paso: aprobación de los 2 commits del lote 1; decidir los grupos restantes y, después,
  `agents/polish-agent.md` y la sección "Polish pass (apple-design skill)" del README, que siguen
  sin escribirse.
