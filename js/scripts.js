/* ============================================================
   Muhammad Azizi — portfolio interactions
   Progressive enhancement only. Page works without JS.
   ============================================================ */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '923555800592';

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Image lightbox ---------- */
  function initLightbox() {
    var triggers = document.querySelectorAll('.lightbox-trigger');
    if (!triggers.length) return;

    var box = document.createElement('div');
    box.className = 'lightbox';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-modal', 'true');
    box.setAttribute('aria-label', 'Image preview');
    box.innerHTML =
      '<button type="button" class="lb-close" aria-label="Close preview">' +
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
      '</button><img alt="">';
    document.body.appendChild(box);

    var img = box.querySelector('img');
    var closeBtn = box.querySelector('.lb-close');
    var lastFocus = null;

    function open(src, alt) {
      lastFocus = document.activeElement;
      img.src = src;
      img.alt = alt || '';
      box.classList.add('open');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }

    function close() {
      box.classList.remove('open');
      document.body.style.overflow = '';
      img.removeAttribute('src');
      if (lastFocus) lastFocus.focus();
    }

    triggers.forEach(function (t) {
      t.addEventListener('click', function (e) {
        e.preventDefault();
        var source = t.querySelector('img') || t;
        open(t.getAttribute('data-full') || source.currentSrc || source.src, source.alt);
      });
    });

    box.addEventListener('click', function (e) {
      if (e.target === box || e.target === closeBtn) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && box.classList.contains('open')) close();
    });
  }

  /* ---------- Copy to clipboard ---------- */
  function initCopy() {
    var buttons = document.querySelectorAll('.copy-btn[data-copy]');
    if (!buttons.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-copy');
        var done = function () {
          var original = btn.textContent;
          btn.textContent = 'Copied';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 1800);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(done, function () {});
        }
      });
    });
  }

  /* ---------- Contact form -> WhatsApp handoff (honest, no fake success) ---------- */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var status = document.getElementById('form-status');

    function setFieldError(field, message) {
      var wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.add('invalid');
      var err = wrap.querySelector('.err');
      if (err) err.textContent = message;
    }

    function clearErrors() {
      form.querySelectorAll('.field.invalid').forEach(function (f) {
        f.classList.remove('invalid');
      });
    }

    function showStatus(kind, message) {
      if (!status) return;
      status.setAttribute('data-kind', kind);
      status.textContent = message;
      status.classList.add('show');
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var name = form.elements.name;
      var email = form.elements.email;
      var message = form.elements.message;
      var honeypot = form.elements.company;
      var valid = true;

      if (honeypot && honeypot.value.trim() !== '') return;

      if (!name.value.trim()) { setFieldError(name, 'Please add your name.'); valid = false; }
      if (!email.value.trim()) {
        setFieldError(email, 'Please add your email.'); valid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        setFieldError(email, 'Please enter a valid email address.'); valid = false;
      }
      if (!message.value.trim()) { setFieldError(message, 'Please describe your project.'); valid = false; }

      if (!valid) {
        var firstInvalid = form.querySelector('.field.invalid input, .field.invalid textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var lines = [
        'Hi Muhammad, I found your portfolio and would like to discuss a project.',
        '',
        'Name: ' + name.value.trim(),
        'Email: ' + email.value.trim(),
        'Project type: ' + (form.elements.project ? form.elements.project.value : '-'),
        '',
        message.value.trim()
      ];

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener');

      showStatus('info', 'Opening WhatsApp so you can send this message directly. If nothing opens, email azizimuhammad0982@gmail.com instead.');
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  ready(function () {
    initNav();
    initReveal();
    initLightbox();
    initCopy();
    initForm();
    initYear();
  });
})();
