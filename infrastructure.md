# Infrastructure Overview — PocketSod

## Hosting

| Concern | Details |
|---|---|
| Platform | GitHub Pages |
| Repository | `https://github.com/PocketSod/SOD` |
| Custom Domain | `pocketsod.com` (set via `CNAME` file in repo root) |
| Deployment Branch | `main` |
| Jekyll | Disabled — `.nojekyll` file present |

GitHub Pages serves files directly from the `main` branch. No build step runs. HTML, CSS, and JS are served as-is.

---

## Dev → Prod Flow

```
Local edit
    │
    ▼
git push origin main
    │
    ▼
GitHub Pages auto-deploys (1–2 min)
    │
    ▼
https://pocketsod.com (live)
```

There is no staging environment, no CI/CD pipeline, and no branch protection. Pushing to `main` is pushing to production.

---

## Local Development

Start the local dev server (Node.js, no dependencies beyond built-in modules):

```bash
node serve.mjs
# Serves at http://localhost:3000
```

Capture screenshots for visual review:

```bash
node screenshot.mjs http://localhost:3000
node screenshot.mjs http://localhost:3000 <label>
# Output: ./temporary screenshots/screenshot-N.png
# Chrome/Edge cache: C:/Users/wildr/.cache/puppeteer/
```

---

## Site Architecture

This is a **static site** — no framework, no bundler, no build step.

```
/
├── index.html          ← Main marketing site (single page)
├── 404.html            ← Custom error page
├── start.html          ← Onboarding/lead capture page
├── blog/               ← Blog posts (individual HTML files)
├── clients/            ← Generated client sites (e.g. clients/coequity/)
├── template/           ← Source template for client site generator
│   ├── index.html
│   ├── css/style.css
│   └── js/script.js
├── brand_assets/       ← Logos, color palette, imagery
├── sitemap.xml
├── robots.txt
└── CNAME               ← pocketsod.com
```

---

## Third-Party Services

### EmailJS (Contact Form)
- SDK: `https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js`
- Credentials are embedded directly in `index.html` (EmailJS public keys are intentionally client-side)
- Service ID: `service_7kn5as8`
- Template ID: `template_y9k5v6h`
- Public Key: `4TE29YSnWASHvziGU`

### Google Analytics (GA4)
- Tracking ID: `G-CW8Y6YTRZY`
- Loaded from: `https://www.googletagmanager.com/gtag/js`

### Google Fonts
- Families: Poppins (300–800), Inter (300–600)
- Loaded from: `https://fonts.googleapis.com`

### Formspree (Client Sites Only)
- Used by the client site generator template, not the main site
- Each generated client site takes a `{{FORM_ID}}` parameter at generation time

---

## Client Site Generator

Python scripts generate static client websites from a template:

```bash
python generate-site.py   # CLI
python gui-generator.py   # GUI wrapper
```

**Parameters:** Business Name, City, Primary Service, Phone, Formspree Form ID
**Output:** `clients/{sanitized-business-name}/index.html`

Generated client sites are committed into the same repo and served as subpaths (e.g. `pocketsod.com/clients/coequity/`).

---

## DNS

| Record | Value |
|---|---|
| CNAME in repo | `pocketsod.com` |
| Sitemap | `https://www.pocketsod.com/sitemap.xml` |

The CNAME file in the repo root tells GitHub Pages which custom domain to serve. The actual DNS records (A or CNAME at the registrar) must point to GitHub Pages IPs — this is managed outside the repository.

---

## Environment Variables & Secrets

`.env` files are gitignored. In practice, all service credentials are hardcoded in `index.html`. There is no build-time injection and no secrets manager.

| Secret | Location | Type |
|---|---|---|
| EmailJS Service ID | `index.html` | Public (safe to expose) |
| EmailJS Template ID | `index.html` | Public (safe to expose) |
| EmailJS Public Key | `index.html` | Public (safe to expose) |
| Google Analytics ID | `index.html` | Public (safe to expose) |

---

## Content Security Policy

Defined as a `<meta>` tag in `index.html`:

```
default-src 'self'
style-src   'self' 'unsafe-inline' https://fonts.googleapis.com
font-src    https://fonts.gstatic.com
img-src     'self' data:
script-src  'self' 'unsafe-inline' https://cdn.jsdelivr.net
connect-src https://api.emailjs.com
frame-src   https://www.google.com
```

---

## Known Gaps

- **No CI/CD** — no GitHub Actions workflows; no tests run before production
- **No staging** — every `git push main` goes live immediately
- **No branch protection** — force-push to `main` is possible
- **No `.env.example`** — no documentation of what env vars exist or would be needed
