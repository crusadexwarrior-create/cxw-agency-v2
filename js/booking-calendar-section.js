/* ============================================
   CXW AGENCY — <booking-calendar-section> component

   Reusable booking section: centered hero copy above a large
   live LeadConnector/GHL calendar embed in a white card.

   Attributes:
     eyebrow        — small gold label above the headline
     headline       — section headline; wrap words in *asterisks* for gold emphasis
     subheadline    — short supporting paragraph
     iframe-src     — live LeadConnector calendar URL (the real embed, not a copy)
     external-url   — backup link (defaults to iframe-src)
     iframe-title   — accessible title for the iframe
     bullets        — JSON array of strings, e.g. '["One","Two","Three"]'
     booking-key    — data-booking key ("audit" | "blueprint") for main.js link routing

   Usage (only on the Audit and Blueprint pages):
     <booking-calendar-section id="book-audit" eyebrow="Pick a Time" ...>
     </booking-calendar-section>
   ============================================ */
(function () {
  'use strict';

  class BookingCalendarSection extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered) return;
      this.dataset.rendered = 'true';

      var eyebrow = this.getAttribute('eyebrow') || '';
      var headline = this.getAttribute('headline') || '';
      var sub = this.getAttribute('subheadline') || '';
      var src = this.getAttribute('iframe-src') || '';
      var external = this.getAttribute('external-url') || src;
      var frameTitle = this.getAttribute('iframe-title') || 'Booking calendar';
      var bookingKey = this.getAttribute('booking-key') || '';
      var bullets = [];
      try { bullets = JSON.parse(this.getAttribute('bullets') || '[]'); } catch (e) { bullets = []; }

      // *text* -> gold <em>text</em>
      var headlineHtml = escapeHtml(headline).replace(/\*([^*]+)\*/g, '<em>$1</em>');

      var bulletsHtml = '';
      if (bullets.length) {
        bulletsHtml =
          '<ul class="booking-bullets">' +
          bullets.map(function (b) { return '<li>' + escapeHtml(b) + '</li>'; }).join('') +
          '</ul>';
      }

      this.innerHTML =
        '<div class="container">' +
          '<div class="booking-hero">' +
            (eyebrow ? '<span class="eyebrow">' + escapeHtml(eyebrow) + '</span>' : '') +
            '<h2 class="booking-hero__title">' + headlineHtml + '</h2>' +
            (sub ? '<p class="booking-hero__sub">' + escapeHtml(sub) + '</p>' : '') +
            bulletsHtml +
          '</div>' +
          '<div class="booking-card">' +
            '<iframe class="booking-frame" src="' + encodeURI(src) + '" title="' + escapeHtml(frameTitle) + '" loading="lazy"></iframe>' +
          '</div>' +
          '<div class="booking-fallback">' +
            '<a class="btn btn--ghost" href="' + encodeURI(external) + '" target="_blank" rel="noopener noreferrer"' +
            (bookingKey ? ' data-booking="' + escapeHtml(bookingKey) + '"' : '') +
            '>Open Calendar in New Tab <span class="btn__arrow">&rarr;</span></a>' +
          '</div>' +
        '</div>';
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  customElements.define('booking-calendar-section', BookingCalendarSection);
})();
