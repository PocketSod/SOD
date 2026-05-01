# Lighthouse Audit Fixes — pocketsod.com

## Priority Order

| Fix | Category | Impact | Status |
|---|---|---|---|
| `fetchpriority` on LCP image + preload | Performance | HIGH — direct LCP reduction | [x] |
| `width`/`height` on all images | Performance | HIGH — eliminates CLS | [x] |
| `<button>` for hamburger | Accessibility | MEDIUM — removes violation | [x] |
| `<main>` landmark + skip link | Accessibility | MEDIUM | [x] |
| Color contrast fixes | Accessibility | MEDIUM — multiple violations | [x] |
| Heading order (H1→H2→H3) | Accessibility | LOW-MEDIUM | [x] |
| Cache headers (.htaccess) | Best Practices | MEDIUM | [ ] |
| `robots.txt` | SEO | LOW (pass/fail) | [x] |
| `srcset` responsive images | Performance | LOW-MEDIUM (bandwidth) | [ ] |

---

## 1. LCP Prioritization — Hero Logo

Add to `<head>` BEFORE any stylesheets:
```html
<link rel="preload" as="image" href="brand_assests/PSlogo.png" fetchpriority="high">
```

On the `<img>` tag:
```html
<img
  src="brand_assests/PSlogo.png"
  alt="PocketSod"
  width="420"
  height="168"
  fetchpriority="high"
  decoding="sync"
  loading="eager"
>
```

---

## 2. Image Dimensions (CLS Prevention)

All images need explicit `width` and `height` matching natural file dimensions:

```html
<!-- Logo in nav -->
<img src="brand_assests/Logo.png" alt="PocketSod logo" width="240" height="80">

<!-- Portfolio thumbnails -->
<img src="portfolio/client-thumb.jpg" alt="Screenshot of [Client] website" width="800" height="533">
```

---

## 3. Hamburger — `<div>` → `<button>`

**Before:**
```html
<div id="hamburger" aria-label="Menu">...</div>
```

**After:**
```html
<button
  id="hamburger"
  type="button"
  aria-label="Open navigation menu"
  aria-expanded="false"
  aria-controls="nav-menu"
>
  <span></span><span></span><span></span>
</button>
```

JS update:
```js
const btn = document.getElementById('hamburger');
const menu = document.getElementById('nav-menu');

btn.addEventListener('click', () => {
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
  menu.classList.toggle('open');
});
```

---

## 4. `<main>` Landmark + Skip Link

First child of `<body>`:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 999;
  padding: 8px 16px;
  background: #C9922A;
  color: #fff;
}
.skip-link:focus { left: 0; }
```

Wrap content:
```html
<nav>...</nav>
<main id="main-content">
  <!-- hero, services, portfolio, about, contact -->
</main>
<footer>...</footer>
```

---

## 5. Color Contrast Fixes (WCAG AA — 4.5:1 minimum)

| Element | Current Color | Background | Current Ratio | Fix |
|---|---|---|---|---|
| `.lt-label` | `#76859a` | `#1a3356` | ~3.1:1 | Use `#a8bcda` (~5.2:1) |
| `.stat-label` | `#b5cce2` | `#2c6eab` | ~2.8:1 | Use `#e8f2fb` (~5.8:1) |
| `.footer-inner p` / copyright | varies | dark footer | <4.5:1 | Use `#c8d8e8` on dark bg |

---

## 6. Heading Order

Correct hierarchy:
```
H1 — PocketSod (once per page)
  H2 — Services
    H3 — Web Design
    H3 — SEO & Performance
    H3 — Maintenance
  H2 — Portfolio
    H3 — [Client name]
  H2 — About
  H2 — Contact
```

Use CSS class for visual sizing without breaking hierarchy:
```html
<h3 class="eyebrow-heading">What We Offer</h3>
```
```css
.eyebrow-heading { font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 600; }
```

---

## 7. Cache Headers — `.htaccess`

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg        "access plus 1 year"
  ExpiresByType image/png         "access plus 1 year"
  ExpiresByType image/webp        "access plus 1 year"
  ExpiresByType image/svg+xml     "access plus 1 year"
  ExpiresByType image/gif         "access plus 1 year"
  ExpiresByType image/x-icon      "access plus 1 year"
  ExpiresByType font/woff         "access plus 1 year"
  ExpiresByType font/woff2        "access plus 1 year"
  ExpiresByType text/css          "access plus 1 year"
  ExpiresByType application/javascript  "access plus 1 year"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\.(jpg|jpeg|png|webp|gif|svg|ico|woff|woff2|css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
```

NOTE: With 1-year cache, use filename hashing or query strings on deploy (`style.css?v=20260501`).

---

## 8. robots.txt

Create at web root:
```
User-agent: *
Allow: /

Sitemap: https://www.pocketsod.com/sitemap.xml
```

---

## 9. Responsive Images — `srcset`

```html
<img
  src="portfolio/client-800.jpg"
  srcset="
    portfolio/client-400.jpg   400w,
    portfolio/client-800.jpg   800w,
    portfolio/client-1200.jpg 1200w
  "
  sizes="
    (max-width: 640px)  calc(100vw - 32px),
    (max-width: 1024px) calc(50vw - 24px),
    400px
  "
  alt="Screenshot of [Client] website"
  width="800"
  height="533"
  loading="lazy"
  decoding="async"
>
```
