/* ==========================================================================
   Cardiology & Heart Care Clinic ” Core JavaScript (Vanilla ES6)
   ========================================================================== */
(function () {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------- Icon sprite ---------------- */
  const ICONS = {
    'phone':'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z"/>',
    'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    'clock':'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'pin':'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    'arrow':'<path d="M5 12h14M13 6l6 6-6 6"/>',
    'arrow-up':'<path d="M12 19V5M6 11l6-6 6 6"/>',
    'chevron':'<path d="m6 9 6 6 6-6"/>',
    'calendar':'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    'steth':'<path d="M6 3v6a5 5 0 0 0 10 0V3M4 3h4M16 3h4M11 14v2a5 5 0 0 0 10 0v-2"/><circle cx="21" cy="12" r="2"/>',
    'shield':'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    'check':'<path d="m20 6-11 11-5-5"/>',
    'menu':'<path d="M3 6h18M3 12h18M3 18h18"/>',
    'close':'<path d="M18 6 6 18M6 6l12 12"/>',
    'bell':'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9zM10 21h4"/>',
    'search':'<circle cx="11" cy="11" r="7"/><path d="m21 21-4-4"/>',
    'download':'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    'eye':'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/><circle cx="12" cy="12" r="3"/>',
    'file':'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
    'pill':'<path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7zM8.5 8.5l7 7"/>',
    'video':'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/>',
    'heart':'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/>',
    'pulse':'<path d="M2 12h4l3-8 5 16 3-8h5"/>',
    'star':'<path d="m12 2 3 6.3 7 .9-5 4.9 1.2 7L12 18l-6.2 3.1L7 14l-5-4.9 7-.9z"/>',
    'quote':'<path d="M7 17H4a2 2 0 0 1-2-2v-3a7 7 0 0 1 7-7v3a4 4 0 0 0-4 4h2zM19 17h-3a2 2 0 0 1-2-2v-3a7 7 0 0 1 7-7v3a4 4 0 0 0-4 4h2z"/>',
    'user':'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    'users':'<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M17 5a3 3 0 0 1 0 6M17 14a6 6 0 0 1 4 6"/>',
    'building':'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h2M14 6h2M8 10h2M14 10h2"/>',
    'gear':'<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.6-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-4l-.4 2.6a7 7 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.6a7 7 0 0 0 0 2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 1.7 1l.4 2.4h4l.3-2.4a7 7 0 0 0 1.7-1l2.4 1 2-3.4-2-1.6a7 7 0 0 0 .1-1z"/>',
    'logout':'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
    'plus':'<path d="M12 5v14M5 12h14"/>',
    'video-cam':'<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4V8z"/>',
    'activity':'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    'brain':'<path d="M12 5a3 3 0 0 0-6 0 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0zM12 5a3 3 0 0 1 6 0 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0zM12 5v16"/>',
    'coffee':'<path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8zM17 9h2a2 2 0 0 1 0 4h-2M6 3v2M10 3v2M14 3v2"/>',
    'sun':'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    'moon':'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>'
  };
  const sprite = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  sprite.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
  sprite.setAttribute('aria-hidden', 'true');
  sprite.innerHTML = '<defs>' + Object.keys(ICONS).map(k => '<symbol id="i-' + k + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + ICONS[k] + '</symbol>').join('') + '</defs>';
  document.body.insertBefore(sprite, document.body.firstChild);

  /* ---------------- Theme & Direction ---------------- */
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('chc-theme') || 'light';
  const storedDir = localStorage.getItem('chc-dir') || 'ltr';

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#121C27' : '#FAF9F6');
    $$('[data-theme-icon]').forEach(el => {
      el.innerHTML = '<svg class="ico"><use href="#i-' + (t === 'dark' ? 'sun' : 'moon') + '"/></svg>';
    });
    const tBtn = $('#themeToggle');
    if (tBtn) tBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function applyDir(d) {
    root.setAttribute('dir', d);
    root.lang = d === 'rtl' ? 'ar' : 'en';
    $$('[data-dir-label]').forEach(el => { el.textContent = d === 'rtl' ? 'LTR' : 'RTL'; });
    const dBtn = $('#dirToggle');
    if (dBtn) dBtn.setAttribute('aria-label', d === 'rtl' ? 'Switch to LTR' : 'Switch to RTL');
  }

  applyTheme(storedTheme);
  applyDir(storedDir);

  $$('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('chc-theme', next);
    applyTheme(next);
  }));

  $$('[data-dir-toggle]').forEach(btn => btn.addEventListener('click', () => {
    const next = root.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    localStorage.setItem('chc-dir', next);
    applyDir(next);
  }));

  /* ---------------- Header scroll ---------------- */
  const header = $('.header');
  const onScrollHeader = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 20); };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------------- Profile dropdown ---------------- */
  const profileMenus = $$('[data-profile-menu]');
  const closeAllProfileMenus = (returnFocusTo) => {
    profileMenus.forEach(menu => {
      if (!menu.classList.contains('is-open')) return;
      menu.classList.remove('is-open');
      const trigger = $('.profile-menu__trigger', menu);
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
    if (returnFocusTo) returnFocusTo.focus();
  };

  profileMenus.forEach(menu => {
    const trigger = $('.profile-menu__trigger', menu);
    const items = $$('.profile-menu__item', menu);
    if (!trigger) return;

    const setOpen = (open, focusIndex = null) => {
      if (open) closeAllProfileMenus();
      menu.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      if (open && focusIndex !== null && items[focusIndex]) {
        items[focusIndex].focus();
      }
    };

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const willOpen = !menu.classList.contains('is-open');
      setOpen(willOpen);
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setOpen(true, 0);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setOpen(true, items.length - 1);
      }
    });

    items.forEach((item, idx) => {
      item.addEventListener('click', () => closeAllProfileMenus());
      item.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          items[(idx + 1) % items.length]?.focus();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          items[(idx - 1 + items.length) % items.length]?.focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          items[0]?.focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          items[items.length - 1]?.focus();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          closeAllProfileMenus(trigger);
        } else if (e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    menu.addEventListener('focusout', (e) => {
      if (menu.classList.contains('is-open') && !menu.contains(e.relatedTarget)) {
        closeAllProfileMenus();
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('[data-profile-menu]')) closeAllProfileMenus();
  });

  /* ---------------- Mobile menu / Sidebar ---------------- */
  const mobileMenu = $('#mobileMenu');
  const openMenu = () => {
    if (!mobileMenu) return;
    closeAllProfileMenus();
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll');
  };
  const closeMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };
  $$('[data-menu-open]').forEach(b => b.addEventListener('click', openMenu));
  $$('[data-menu-close]').forEach(b => b.addEventListener('click', closeMenu));

  const sidebar = $('#sidebar');
  const dashBackdrop = $('#dashBackdrop');
  const openSidebar = () => { sidebar?.classList.add('is-open'); dashBackdrop?.classList.add('is-show'); };
  const closeSidebar = () => { sidebar?.classList.remove('is-open'); dashBackdrop?.classList.remove('is-show'); };
  $$('[data-sidebar-open]').forEach(b => b.addEventListener('click', openSidebar));
  $$('[data-sidebar-close]').forEach(b => b.addEventListener('click', closeSidebar));
  dashBackdrop?.addEventListener('click', closeSidebar);

  /* ---------------- Hero slider ---------------- */
  const slides = $$('.hero-slide');
  if (slides.length > 1) {
    let current = 0;
    let timer;
    const dots = $$('.slider-dot');
    const go = (i) => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s, n) => s.classList.toggle('is-active', n === current));
      dots.forEach((d, n) => d.classList.toggle('is-active', n === current));
    };
    const start = () => { timer = setInterval(() => go(current + 1), 6000); };
    const stop = () => clearInterval(timer);
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); stop(); start(); }));
    $('.slider-arrow--prev')?.addEventListener('click', () => { go(current - 1); stop(); start(); });
    $('.slider-arrow--next')?.addEventListener('click', () => { go(current + 1); stop(); start(); });
    const hero = $('.hero-slider');
    hero?.addEventListener('mouseenter', stop);
    hero?.addEventListener('mouseleave', start);
    start();
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = $$('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------- Animated counters ---------------- */
  const counters = $$('[data-count]');
  if (counters.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const dur = 1600;
        const start = performance.now();
        const step = (now) => {
          const p = Math.min((now - start) / dur, 1);
          const val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
          el.textContent = val.toLocaleString();
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString();
        };
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => obs.observe(el));
  }

  /* ---------------- Accordion / FAQ ---------------- */
  $$('.accordion-head').forEach(head => {
    head.addEventListener('click', () => {
      const item = head.closest('.accordion-item');
      const body = $('.accordion-body', item);
      const open = item.classList.contains('is-open');
      $$('.accordion-item.is-open').forEach(other => {
        other.classList.remove('is-open');
        const b = $('.accordion-body', other);
        if (b) b.style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('is-open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
  const firstAcc = $('.accordion-item.is-open .accordion-body');
  if (firstAcc) firstAcc.style.maxHeight = firstAcc.scrollHeight + 'px';

  /* ---------------- Tabs ---------------- */
  $$('.tabs').forEach(group => {
    const tabs = $$('.tab', group);
    tabs.forEach(tab => tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      const wrapper = group.closest('.tabs-wrap') || document;
      $$('.tab-panel', wrapper).forEach(panel => panel.classList.toggle('is-active', panel.id === target));
    }));
  });

  /* ---------------- Doctor / content filters ---------------- */
  $$('[data-filter-group]').forEach(group => {
    const btns = $$('.filter-btn', group);
    const items = $$('[data-filter-item]');
    btns.forEach(btn => btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.toggle('is-active', b === btn));
      const val = btn.dataset.filter;
      items.forEach(item => {
        const show = val === 'all' || (item.dataset.filterItem || '').split(' ').includes(val);
        item.style.display = show ? '' : 'none';
        if (show) { item.animate?.([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'ease-out' }); }
      });
      const noRes = $('[data-no-results]');
      if (noRes) noRes.hidden = items.some(i => i.style.display !== 'none');
    }));
  });

  /* ---------------- Toast ---------------- */
  function showToast(title, msg, type = 'success') {
    let wrap = $('.toast-wrap');
    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'toast-wrap';
      document.body.appendChild(wrap);
    }
    const t = document.createElement('div');
    t.className = 'toast toast--' + type;
    t.innerHTML = '<span class="toast__icon">' + (type === 'error' ? '!' : '✓') + '</span><div><div class="toast__title">' + title + '</div><div class="toast__msg">' + msg + '</div></div>';
    wrap.appendChild(t);
    requestAnimationFrame(() => t.classList.add('is-show'));
    setTimeout(() => {
      t.classList.remove('is-show');
      setTimeout(() => t.remove(), 500);
    }, 4200);
  }
  window.showToast = showToast;

  /* ---------------- Booking modal ---------------- */
  const bookingModal = $('#bookingModal');
  const dateInput = $('#bookDate');
  if (dateInput) {
    const today = new Date();
    dateInput.min = today.toISOString().split('T')[0];
    dateInput.value = new Date(today.getTime() + 86400000).toISOString().split('T')[0];
  }

  $$('[data-book]').forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (bookingModal) {
      bookingModal.classList.add('is-open');
      document.body.classList.add('no-scroll');
      const service = btn.dataset.book;
      const sel = $('#bookService');
      if (sel && service) sel.value = service;
      const doc = btn.dataset.doctor;
      const dsel = $('#bookDoctor');
      if (dsel && doc) dsel.value = doc;
      $('.modal__title', bookingModal).textContent = 'Book an Appointment';
    }
  }));

  $$('[data-modal-close]').forEach(btn => btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    if (modal) { modal.classList.remove('is-open'); document.body.classList.remove('no-scroll'); }
  }));
  $$('.modal__backdrop').forEach(bd => bd.addEventListener('click', () => {
    bd.closest('.modal')?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      $$('.modal.is-open').forEach(m => m.classList.remove('is-open'));
      closeAllProfileMenus();
      closeMenu(); closeSidebar();
      document.body.classList.remove('no-scroll');
    }
  });

  $$('.time-slot').forEach(slot => slot.addEventListener('click', () => {
    $$('.time-slot').forEach(s => s.classList.remove('is-active'));
    slot.classList.add('is-active');
  }));
  $$('.consult-opt').forEach(opt => opt.addEventListener('click', () => {
    $$('.consult-opt').forEach(o => o.classList.remove('is-active'));
    opt.classList.add('is-active');
  }));

  $('#bookingForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    const name = $('#bookName')?.value || 'there';
    const date = $('#bookDate')?.value;
    bookingModal?.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    showToast('Appointment requested', 'Thank you, ' + name + '. We will confirm your visit on ' + date + '.', 'success');
    e.target.reset();
    $$('.time-slot, .consult-opt').forEach(s => s.classList.remove('is-active'));
  });

  /* ---------------- Form validation ---------------- */
  function validateForm(form) {
    let ok = true;
    const fields = $$('[data-validate]', form);
    fields.forEach(field => {
      const val = field.value.trim();
      const type = field.dataset.validate;
      let valid = val.length > 0;
      if (valid && type === 'email') valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      if (valid && type === 'phone') valid = /^[0-9+\-\s()]{7,}$/.test(val);
      if (valid && type === 'password') valid = val.length >= 8;
      if (valid && field.type === 'checkbox' && !field.checked) valid = false;
      if (valid && type === 'match') {
        const other = document.getElementById(field.dataset.match);
        valid = other && other.value === val;
      }
      const group = field.closest('.form-group');
      if (group) group.classList.toggle('has-error', !valid);
      field.classList.toggle('is-invalid', !valid);
      field.classList.toggle('is-valid', valid && val.length > 0);
      if (!valid) ok = false;
    });
    if (!ok) showToast('Please check the form', 'Some required fields need your attention.', 'error');
    return ok;
  }
  window.validateForm = validateForm;

  $$('form[data-ajax]').forEach(form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;
    const btn = $('button[type="submit"]', form);
    if (btn) { const original = btn.innerHTML; btn.innerHTML = 'Sending… <span class="arrow">→</span>'; btn.disabled = true; setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 1200); }
    showToast('Message received', 'Our care team will get back to you shortly.', 'success');
    form.reset();
  }));

  /* ---------------- Back to top ---------------- */
  const toTop = $('#toTop');
  window.addEventListener('scroll', () => { toTop?.classList.toggle('is-show', window.scrollY > 500); }, { passive: true });
  toTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---------------- Image fallback ---------------- */
  const FALLBACK = 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80';
  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && !t.dataset.fallbackUsed) {
      t.dataset.fallbackUsed = '1';
      t.classList.add('img-fallback');
      t.src = FALLBACK;
    }
  }, true);

  /* ---------------- Auth & utility demos ---------------- */
  $('#loginForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    showToast('Welcome back', 'Signing you in to the demo patient portal…', 'success');
    setTimeout(() => { window.location.href = 'patient-dashboard.html'; }, 800);
  });
  $('#signupForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm(e.target)) return;
    showToast('Account created', 'Welcome to Cardia. Opening your demo dashboard…', 'success');
    setTimeout(() => { window.location.href = 'patient-dashboard.html'; }, 800);
  });
  $$('[data-demo-link]').forEach(a => a.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('Demo only', 'This action is disabled in the demonstration.', 'success');
  }));
  $$('[data-demo-search]').forEach(form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = $('#siteSearch')?.value.trim();
    showToast(q ? 'Search demo' : 'Enter a term', q ? 'Searching for “' + q + '” is disabled in this demo.' : 'Type something to search.', q ? 'success' : 'error');
  }));

  /* ---------------- Newsletter ---------------- */
  $$('[data-newsletter]').forEach(form => form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('input', form);
    if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      showToast('Subscribed!', 'You will receive our heart-health newsletter.', 'success');
      input.value = '';
    } else {
      showToast('Invalid email', 'Please enter a valid email address.', 'error');
    }
  }));

  /* ---------------- Smooth active nav ---------------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  $$('.nav__link').forEach(link => {
    if (link.getAttribute('href') === path) link.closest('.nav__item')?.classList.add('is-active');
  });
})();
