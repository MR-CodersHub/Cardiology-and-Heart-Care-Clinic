/* ==========================================================================
   Cardia — Authentication Page Interactions (Login & Signup)
   ========================================================================== */
(function () {
  'use strict';

  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------------- Password visibility toggles ---------------- */
  $$('[data-toggle-password]').forEach((btn) => {
    const targetId = btn.getAttribute('data-toggle-password');
    const input = targetId ? document.getElementById(targetId) : null;
    if (!input) return;

    btn.addEventListener('click', () => {
      const reveal = input.type === 'password';
      input.type = reveal ? 'text' : 'password';
      btn.classList.toggle('is-visible', reveal);
      btn.setAttribute('aria-pressed', String(reveal));
      btn.setAttribute('aria-label', reveal ? 'Hide password' : 'Show password');
    });
  });

  /* ---------------- Accessible validation enhancements ---------------- */
  $$('#loginForm, #signupForm').forEach((form) => {
    const fields = $$('[data-validate]', form);

    fields.forEach((field) => {
      const eventName = field.type === 'checkbox' ? 'change' : 'input';
      field.addEventListener(eventName, () => {
        if (field.classList.contains('is-invalid')) {
          field.classList.remove('is-invalid');
          field.setAttribute('aria-invalid', 'false');
          field.closest('.form-group')?.classList.remove('has-error');
        }
      });
    });

    form.addEventListener('submit', () => {
      let firstInvalid = null;
      fields.forEach((field) => {
        const invalid = field.classList.contains('is-invalid');
        field.setAttribute('aria-invalid', invalid ? 'true' : 'false');
        if (invalid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) firstInvalid.focus();
    });
  });

  /* ---------------- Frontend-only secondary interactions ---------------- */
  $$('[data-forgot-password]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.showToast?.(
        'Password recovery',
        'Password reset is not connected to a backend in this frontend demo.',
        'success'
      );
    });
  });

  $$('[data-legal-link]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const label = link.getAttribute('data-legal-link') || 'Legal notice';
      window.showToast?.(
        label,
        'Cardia Clinic uses sample frontend demo content. No personal data is collected or transmitted.',
        'success'
      );
    });
  });
})();
