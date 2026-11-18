/* ==========================================================================
   Dashboard interactions (fictional sample data only)
   ========================================================================== */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  const dashSections = $$('.dash__body section[id]');
  if (dashSections.length) {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('view') || window.location.hash.slice(1);
    const activeView = dashSections.some(section => section.id === requested) ? requested : dashSections[0].id;
    dashSections.forEach(section => { section.hidden = section.id !== activeView; });
    $$('.sidebar__nav a[href*="?view="]').forEach(link => {
      const view = new URLSearchParams((link.getAttribute('href') || '').split('?')[1] || '').get('view');
      const active = view === activeView;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const activeSection = dashSections.find(section => section.id === activeView);
    const heading = activeSection?.querySelector('h2')?.textContent.trim();
    if (heading) {
      const topTitle = $('.dash-topbar h1');
      if (topTitle) topTitle.textContent = heading;
      const crumb = $('.dash-topbar .breadcrumb span');
      if (crumb) crumb.textContent = heading;
      const suffix = document.title.split('|')[1];
      if (suffix) document.title = heading + ' |' + suffix;
    }
    window.scrollTo(0, 0);
  }

  /* Medication checklist */
  $$('.med-item__checkbox').forEach(box => {
    box.addEventListener('click', () => {
      box.classList.toggle('is-done');
      const item = box.closest('.med-item');
      item?.classList.toggle('is-taken', box.classList.contains('is-done'));
      const total = $$('.med-item').length;
      const done = $$('.med-item__checkbox.is-done').length;
      const label = $('#medProgress');
      if (label) label.textContent = done + ' of ' + total + ' taken';
      if (done === total && total > 0) window.showToast?.('All set for today', 'You have completed your medication schedule.', 'success');
    });
  });

  /* Chart bar animation */
  const animateBars = () => {
    $$('.chart__bar[data-height], .revenue-bars span[data-height]').forEach(bar => {
      bar.style.height = '0%';
      setTimeout(() => { bar.style.height = bar.dataset.height + '%'; }, 120);
    });
  };
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { animateBars(); obs.disconnect(); } });
    }, { threshold: 0.2 });
    const chart = $('.chart, .revenue-bars');
    if (chart) obs.observe(chart);
  } else animateBars();

  /* Notification mark-as-read */
  $$('[data-mark-read]').forEach(btn => btn.addEventListener('click', () => {
    $$('.notif-item.is-unread').forEach(n => n.classList.remove('is-unread'));
    const badge = $('#notifBadge');
    if (badge) badge.style.display = 'none';
    window.showToast?.('All caught up', 'Notifications marked as read.', 'success');
  }));

  /* Reschedule / cancel demo actions */
  $$('[data-reschedule]').forEach(btn => btn.addEventListener('click', () => {
    window.showToast?.('Reschedule request', 'Our coordinator will contact you to confirm a new time.', 'success');
  }));
  $$('[data-cancel-appt]').forEach(btn => btn.addEventListener('click', () => {
    window.showToast?.('Cancellation requested', 'Your appointment cancellation has been noted.', 'success');
  }));
  $$('[data-download]').forEach(btn => btn.addEventListener('click', () => {
    window.showToast?.('Preparing report', 'Your sample report is being prepared for download.', 'success');
  }));
  $$('[data-view-report]').forEach(btn => btn.addEventListener('click', () => {
    window.showToast?.('Report viewer', 'Opening the sample report viewer (demo).', 'success');
  }));

  /* Admin: status toggle */
  $$('[data-toggle-status]').forEach(btn => btn.addEventListener('click', () => {
    const pill = btn.closest('tr')?.querySelector('.status');
    if (!pill) return;
    const confirmed = pill.classList.contains('status--confirmed');
    pill.classList.toggle('status--confirmed', !confirmed);
    pill.classList.toggle('status--pending', confirmed);
    pill.textContent = confirmed ? 'Pending' : 'Confirmed';
    window.showToast?.('Status updated', 'Appointment status changed successfully.', 'success');
  }));

  /* Simple search filter for tables */
  $$('[data-table-search]').forEach(input => input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    const table = $(input.dataset.tableSearch);
    if (!table) return;
    $$('tbody tr', table).forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  }));

  /* Profile save */
  $('#profileForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (window.validateForm?.(e.target)) {
      window.showToast?.('Profile saved', 'Your profile settings have been updated.', 'success');
    }
  });
})();
