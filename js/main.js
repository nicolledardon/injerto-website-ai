/* ==========================================================================
   El Injerto — Interacción
   ==========================================================================
   Dos comportamientos, sin dependencias:
   1) Navegación móvil (patrón disclosure): botón hamburguesa con
      aria-expanded/aria-controls, Esc cierra, el foco vuelve al botón.
   2) Category Tabs de Tienda (patrón ARIA tabs completo): aria-selected,
      roving tabindex, navegación con ←/→/Home/End.

   Ambos se degradan con gracia sin JavaScript: el nav móvil se reemplaza
   por el nav del footer (siempre visible, sin JS de por medio), y las
   Category Tabs muestran AMBOS paneles de producto en el HTML estático —
   este script es el que oculta el panel inactivo al iniciar, nunca al
   revés, para que "todos los productos visibles sin JS" (regla del
   Interaction Agent en agents/interaction-agent.md) se cumpla siempre.
   ========================================================================== */

(function () {
  'use strict';

  function initDisclosureNav() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!toggle || !nav) return;

    var openLabel = 'Abrir menú';
    var closeLabel = 'Cerrar menú';
    var toggleLabel = toggle.querySelector('.sr-only');

    function setExpanded(expanded) {
      nav.hidden = !expanded;
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      if (toggleLabel) {
        toggleLabel.textContent = expanded ? closeLabel : openLabel;
      }
    }

    toggle.addEventListener('click', function () {
      var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      setExpanded(!isExpanded);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      if (toggle.getAttribute('aria-expanded') !== 'true') return;
      setExpanded(false);
      toggle.focus();
    });
  }

  function initCategoryTabs() {
    var tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;

    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    if (tabs.length === 0) return;

    function panelFor(tab) {
      var panelId = tab.getAttribute('aria-controls');
      return panelId ? document.getElementById(panelId) : null;
    }

    function selectTab(tab, moveFocus) {
      tabs.forEach(function (candidate) {
        var isSelected = candidate === tab;
        candidate.setAttribute('aria-selected', isSelected ? 'true' : 'false');
        candidate.tabIndex = isSelected ? 0 : -1;
        var panel = panelFor(candidate);
        if (panel) panel.hidden = !isSelected;
      });
      if (moveFocus) tab.focus();
    }

    // Estado inicial: respeta el aria-selected="true" ya presente en el
    // HTML (Café por defecto) en vez de asumir siempre el primer tab.
    var initial = tabs.filter(function (tab) {
      return tab.getAttribute('aria-selected') === 'true';
    })[0] || tabs[0];
    selectTab(initial, false);

    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () {
        selectTab(tab, false);
      });

      tab.addEventListener('keydown', function (event) {
        var targetIndex;
        switch (event.key) {
          case 'ArrowRight':
            targetIndex = (index + 1) % tabs.length;
            break;
          case 'ArrowLeft':
            targetIndex = (index - 1 + tabs.length) % tabs.length;
            break;
          case 'Home':
            targetIndex = 0;
            break;
          case 'End':
            targetIndex = tabs.length - 1;
            break;
          default:
            return;
        }
        event.preventDefault();
        selectTab(tabs[targetIndex], true);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initDisclosureNav();
    initCategoryTabs();
  });
})();
