---
name: git-workflow
description: Aplica siempre que se prepara, propone o describe un commit en este proyecto.
---

## Propósito

Mantener un historial de Git legible, en español, y con un ritmo de commits que demuestre
trabajo continuo — no una única subida final.

## Reglas

1. Conventional Commits con descripción en español: `feat: …`, `fix: …`, `style: …`,
   `docs: …`, `chore: …`.
2. Un cambio lógico por commit — no mezclar, por ejemplo, CSS de componentes con contenido HTML
   nuevo en el mismo commit.
3. Ningún `git commit` (ni `git push`) se ejecuta sin que Nicolle escriba "aprobado" en el chat
   para ese commit concreto.
4. `.gitignore` cubre lo que Git nunca debe subir: archivos del sistema operativo (`.DS_Store`,
   `Thumbs.db`), dependencias (`node_modules/`), configuración de editor (`.vscode/`), logs,
   secretos (`.env`) y archivos comprimidos (`*.zip`).
5. `.gitattributes` fuerza finales de línea consistentes (`eol=lf`) en archivos de texto y marca
   explícitamente binarios las imágenes y fuentes, para que Git no intente "normalizarlos" y los
   corrompa.
6. Al menos un commit por sesión de trabajo activa, para que el historial refleje progreso real
   ("trabajo continuo en GitHub", requisito explícito del PDF de la PEC 6).

## Ejemplo

Correcto:

```
feat: añade pestañas de categoría en Tienda con patrón ARIA tabs
```

Incorrecto:

```
update stuff
```

## Checklist de verificación

- [ ] Mensaje sigue Conventional Commits, en español
- [ ] El commit corresponde a un único cambio lógico
- [ ] Nicolle aprobó explícitamente antes de ejecutar `git commit`
- [ ] Nunca se ejecuta `git push` desde esta sesión
