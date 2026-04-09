# EN/ES Language Toggle — Implementation Guide

## 1. The Toggle Widget HTML
Place this anywhere (typically fixed bottom-right):
```html
<div class="lang-toggle">
  <div class="lt-label">Lang</div>
  <button onclick="setLang('en')" class="lt-btn active" data-lang="en">
    <span class="lt-code">EN</span>
    <span class="lt-name">English</span>
  </button>
  <div class="lt-divider"></div>
  <button onclick="setLang('es')" class="lt-btn" data-lang="es">
    <span class="lt-code">ES</span>
    <span class="lt-name">Español</span>
  </button>
</div>
```

---

## 2. The 4 Data Attributes
Tag every translatable element with one of these:

| Attribute | Use for | Sets |
|---|---|---|
| `data-i18n="key"` | Plain text | `el.textContent` |
| `data-i18n-html="key"` | HTML content (headings with `<span>` color tags) | `el.innerHTML` |
| `data-i18n-placeholder="key"` | Form inputs | `el.placeholder` |
| `data-i18n-opt="key"` | `<option>` elements inside a `<select>` | `el.textContent` |

**Examples:**
```html
<p data-i18n="about_desc">We build websites.</p>

<h2 data-i18n-html="hero_title">Sites We've <span class="blue">Built</span></h2>

<input data-i18n-placeholder="form_name" placeholder="Your name">

<select>
  <option data-i18n-opt="opt_starter">Starter</option>
  <option data-i18n-opt="opt_growth">Growth</option>
</select>
```

---

## 3. The Translations Object
Add all your strings in one JS object:
```js
const T = {
  en: {
    about_desc:   'We build websites.',
    hero_title:   'Sites We\'ve <span class="blue">Built</span>',
    form_name:    'Your name',
    opt_starter:  'Starter',
    opt_growth:   'Growth',
    form_submit:  'Send My Request →',
    form_sent:    '✓ Sent!',
  },
  es: {
    about_desc:   'Creamos sitios web.',
    hero_title:   'Sitios que <span class="blue">Hemos Creado</span>',
    form_name:    'Tu nombre',
    opt_starter:  'Inicial',
    opt_growth:   'Crecimiento',
    form_submit:  'Enviar Mi Solicitud →',
    form_sent:    '✓ ¡Enviado!',
  }
};
```

---

## 4. The `setLang()` Function
```js
function setLang(lang) {
  const t = T[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update active button state
  document.querySelectorAll('.lt-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update <html lang=""> for SEO/accessibility
  document.documentElement.lang = lang;

  // Save preference
  try { localStorage.setItem('ps_lang', lang); } catch(e) {}
}
```

---

## 5. Auto-Init on Page Load
Paste this after `setLang()` — runs once when the page loads:
```js
(function() {
  let saved;
  try { saved = localStorage.getItem('ps_lang'); } catch(e) {}
  const browserLang = (navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en';
  setLang(saved || browserLang);
})();
```
**What it does:** checks localStorage first → falls back to browser language → defaults to English.

---

## 6. Form Submit (translated confirmation)
If you have a form submit button, do this so the confirmation text also translates:
```js
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const lang = document.documentElement.lang || 'en';
  btn.textContent = T[lang].form_sent;
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = T[lang].form_submit;
    btn.disabled = false;
    e.target.reset();
  }, 4000);
}
```

---

## Checklist for a New Project
- [ ] Copy the toggle widget HTML into the page
- [ ] Add toggle CSS (or copy from `index.html`)
- [ ] Add `data-i18n*` attributes to every translatable element
- [ ] Build the `T = { en: {...}, es: {...} }` object with matching keys
- [ ] Paste `setLang()` and the auto-init IIFE into your script block
- [ ] Change the `localStorage` key name (e.g. `az_lang`, `delara_lang`) so each site stores separately
