/**
 * Dr. Ensar Aydemir - Minimal JavaScript
 * Mobil menü ve bağlantı kopyalama işlevleri
 */

(function () {
  'use strict';

  // Mobil menü aç/kapa
  var toggle = document.querySelector('.mobile-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen);

      // İkon değiştir (hamburger ↔ X)
      if (isOpen) {
        toggle.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
      } else {
        toggle.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      }
    });
  }
})();

/**
 * Bağlantıyı panoya kopyala (paylaşım butonu)
 */
function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(function () {
    alert('Bağlantı kopyalandı!');
  }).catch(function () {
    // Fallback
    var input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Bağlantı kopyalandı!');
  });
}
