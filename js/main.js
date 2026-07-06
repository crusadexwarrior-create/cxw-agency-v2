/* ============================================
   CXW AGENCY — MAIN JS
   Header state, mobile nav, scroll reveal,
   dashboard animation, lead form AJAX
   ============================================ */

(function () {
  'use strict';

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById('site-header');

  function onScroll() {
    if (window.scrollY > 24) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function closeMobileNav() {
    navToggle.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', function () {
    var isOpen = mobileNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  /* Staggered card reveals: within each grid, cards cascade in one by one */
  var staggerGroups = document.querySelectorAll('.modules, .pillars, .audience, .offers, .proof-grid, .process, .leak-list');
  staggerGroups.forEach(function (group) {
    var kids = group.querySelectorAll('.reveal');
    kids.forEach(function (kid, i) {
      kid.style.transitionDelay = (i * 75) + 'ms';
    });
  });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ---------- Dashboard stat count-up ---------- */
  var statEls = document.querySelectorAll('.stat-tile__value[data-count]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var duration = 1400;
    var start = null;

    function frame(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if ('IntersectionObserver' in window && statEls.length) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    statEls.forEach(function (el) {
      statObserver.observe(el);
    });
  } else {
    statEls.forEach(function (el) {
      el.textContent = el.getAttribute('data-count');
    });
  }

  /* ---------- Automation feed cycle ---------- */
  var feedItems = document.querySelectorAll('#automation-feed .feed-item');

  if (feedItems.length) {
    var activeIndex = 0;
    feedItems[0].classList.add('is-active');

    setInterval(function () {
      feedItems[activeIndex].classList.remove('is-active');
      activeIndex = (activeIndex + 1) % feedItems.length;
      feedItems[activeIndex].classList.add('is-active');
    }, 2600);
  }

  /* ---------- Lead form AJAX ---------- */
  var form = document.getElementById('lead-form');
  var status = document.getElementById('form-status');
  var submitBtn = document.getElementById('form-submit');

  function showStatus(type, message) {
    status.textContent = message;
    status.className = 'form-status is-visible form-status--' + type;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          showStatus('success', 'Request received. We will reply within one business day with your Growth Snapshot next steps.');
          form.reset();
        } else {
          showStatus('error', 'Something went wrong sending your request. Call 301-375-2990 or email info@cxw-agency.org.');
        }
      }).catch(function () {
        showStatus('error', 'Network error. Please try again, or email info@cxw-agency.org directly.');
      }).finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Book My Growth Snapshot <span class="btn__arrow">→</span>';
      });
    });
  }
})();
