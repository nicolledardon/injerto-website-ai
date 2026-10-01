/* ==========================================================================
   El Injerto — Interacción
   ==========================================================================
   Cuatro comportamientos, sin dependencias:
   1) Navegación móvil (patrón disclosure): botón hamburguesa con
      aria-expanded/aria-controls, Esc cierra, el foco vuelve al botón.
   2) Category Tabs de Tienda (patrón ARIA tabs completo): aria-selected,
      roving tabindex, navegación con ←/→/Home/End.
   3) Entrada con rebote de la timeline Proceso (Finca): IntersectionObserver
      que añade .is-visible; el movimiento en sí vive en components.css.
   4) Mapa de Coffee Shops: el nombre de cada sucursal pasa a ser un botón
      (aria-pressed) que muestra el mapa de esa sucursal; pulsarlo otra vez
      vuelve al mapa general.

   Todos se degradan con gracia sin JavaScript: el nav móvil se reemplaza
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

    // Cerrar el menú al hacer clic en un link de navegación (regla 10 de
    // responsive-detail). No hace falta devolver el foco al toggle aquí:
    // cada link navega a otra página, así que el foco pasa de forma natural
    // a la página siguiente.
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setExpanded(false);
      });
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

  // Animación de la timeline de Proceso (Finca): cada paso y conector recibe
  // .is-visible cuando entra en pantalla (>= 30% visible) y lo pierde cuando
  // sale del todo, así la animación (rebote + conector que se dibuja) se
  // repite al volver con el scroll. Quitarlo solo con 0% visible evita el
  // parpadeo que habría si se reiniciara en el borde de los 30%. Sin
  // IntersectionObserver o sin .proceso en la página no hace nada y los pasos
  // se quedan visibles (mejora progresiva).
  function initProcesoAnimation() {
    var proceso = document.querySelector('.proceso');
    if (!proceso || !('IntersectionObserver' in window)) return;

    var items = proceso.querySelectorAll('.proceso-step, .proceso-connector');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio >= 0.3) {
          entry.target.classList.add('is-visible');
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { threshold: [0, 0.3] });

    proceso.classList.add('proceso--animado');
    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  // Mapa de Coffee Shops. El HTML trae 5 imágenes apiladas en #shop-map (data-map:
  // "general" + una clave por sucursal) y cada fila de la lista lleva el mismo
  // data-map. Aquí el <h2> de cada fila se convierte en un <button> con
  // aria-pressed; al pulsarlo se activa la imagen de esa sucursal (clase
  // .is-active, el fundido vive en components.css) y al pulsarlo otra vez se
  // vuelve a "general". Se crea el botón desde JS (en vez de escribirlo en el
  // HTML) para que, sin JavaScript, no haya un botón que no hace nada: se ve el
  // mapa general y la lista de siempre.
  function initShopMap() {
    var map = document.getElementById('shop-map');
    var rows = Array.prototype.slice.call(document.querySelectorAll('.shop-list__row[data-map]'));
    if (!map || rows.length === 0) return;

    var images = {};
    Array.prototype.forEach.call(map.querySelectorAll('.shop-map__img'), function (img) {
      images[img.getAttribute('data-map')] = img;
    });
    if (!images.general) return;

    // Por debajo de 1024px la columna del mapa queda ENCIMA de la lista
    // (.split de una columna): al pulsar una sucursal de abajo, el mapa
    // podría estar fuera de pantalla. Por encima, mapa y lista van lado a lado.
    var stacked = window.matchMedia('(max-width: 1023.98px)');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var selectedRow = null;

    function showMap(key) {
      Object.keys(images).forEach(function (name) {
        var isActive = name === key;
        images[name].classList.toggle('is-active', isActive);
        if (isActive) {
          images[name].removeAttribute('aria-hidden');
        } else {
          images[name].setAttribute('aria-hidden', 'true');
        }
      });
    }

    function setSelected(row, selected) {
      row.classList.toggle('is-selected', selected);
      row.querySelector('.shop-list__select').setAttribute('aria-pressed', selected ? 'true' : 'false');
    }

    // Solo si el mapa no se ve entero: si ya está a la vista no se mueve nada.
    function revealMap() {
      if (!stacked.matches) return;
      var box = map.getBoundingClientRect();
      if (box.top >= 0 && box.bottom <= window.innerHeight) return;
      map.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'nearest'
      });
    }

    rows.forEach(function (row) {
      var heading = row.querySelector('h2');
      var key = row.getAttribute('data-map');
      if (!heading || !images[key]) return;

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'shop-list__select';
      button.setAttribute('aria-pressed', 'false');
      button.textContent = heading.textContent;
      heading.textContent = '';
      heading.appendChild(button);

      button.addEventListener('click', function () {
        var wasSelected = row === selectedRow;
        if (selectedRow) setSelected(selectedRow, false);

        if (wasSelected) {
          selectedRow = null;
          showMap('general');
          return;
        }

        selectedRow = row;
        setSelected(row, true);
        showMap(key);
        revealMap();
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initDisclosureNav();
    initCategoryTabs();
    initProcesoAnimation();
    initShopMap();
  });
})();
