# Project Brief — PocketSod LLC Website

**Date:** April 23, 2026
**Client / Owner:** PocketSod LLC
**Repository:** https://github.com/PocketSod/SOD
**Live Site:** https://www.pocketsod.com

---

## Business Overview

PocketSod LLC is a veteran-owned web design company that builds websites for small businesses nationwide (all 50 states). Primary audience includes English- and Spanish-speaking small business owners. Founded 2026.

**Contact**
- Phone: (317) 348-0539
- Email: contact@pocketsod.com
- LinkedIn: linkedin.com/company/pocketsod
- Facebook / Instagram: active profiles linked in footer

---

## Project Goal

A marketing landing page that presents PocketSod's service packages clearly, builds credibility as a veteran-owned business, and converts visitors into leads via a contact form and quote intake wizard.

---

## Site Structure

| File | Purpose |
|------|---------|
| `index.html` | Main production landing page (single source of truth) |
| `start.html` | 3-step quote intake wizard (linked from all "Get a Quote" CTAs) |
| `blog/5-things-every-small-business-website-needs.html` | SEO blog article |
| `Packages/Starter/index.html` | Demo — Blue Ridge Lawn Care |
| `Packages/Growth/index.html` | Demo — La Cocina de Mamá (bilingual) |
| `Packages/Premium/index.html` | Demo — Vanguard Custom Builds |

---

## Service Packages

| Package | Price | Highlights |
|---------|-------|-----------|
| Starter | $500–$1,000 | Up to 3 pages, contact form, mobile responsive, basic SEO, Google Maps, 1 revision |
| Growth | $1,000–$2,500 | Up to 6 pages, blog, bilingual EN/ES, quote forms, SEO foundations, social links |
| Premium | $2,500+ | Unlimited pages, custom design/branding, advanced SEO, hosting mgmt, ongoing edits, analytics, priority support |

**Add-ons:** Monthly maintenance ($50–$200/mo) · Hosting management ($20–$50/mo) · SEO management ($100–$500/mo)

---

## Portfolio

| Client | URL |
|--------|-----|
| DeLara Consulting | https://delara.pocketsod.com/ |
| AZ Powerwash | http://azpowerwash.pocketsod.com/ |
| Casa España Indiana | https://casaespanaindiana.org/ |
| Center for Language Justice | http://clj.pocketsod.com/ |

---

## Technical Stack

- Static HTML — single `.html` files, all styles inline, no build step
- Hosted on GitHub Pages with custom CNAME (`www.pocketsod.com`)
- Tailwind CSS via CDN
- EmailJS for contact form (service: `service_7kn5as8`, template: `template_y9k5v6h`)
- No external CSS files, no framework, no CI/CD pipeline

---

## Brand

**Colors**
- Pocket Blue: `#2C6EAB`
- Pocket Green: `#4CAF50`
- Dark Navy: `#1A3356`
- Cream: `#F8F5F0`

**Typography**
- Headlines: Poppins
- Body: Inter

**Logo files** (in `brand_assests/` — intentional spelling)
- `PSlogo6.png` — primary logo (transparent background)
- `favicon.png` — denim pocket with grass and cash
- `OG.png` — 1200×630 open graph share card

---

## Key Features (index.html)

- Fixed navbar with scroll-shrink and mobile hamburger
- Hero with logo, headline, veteran badge, dual CTAs
- Stats strip (Veteran Owned · All 50 States · 14-day launch · Satisfaction)
- About section with testimonial quote and checklist
- Packages (3 cards) + Add-ons (3 cards)
- Portfolio with browser-chrome mockup cards
- 4-step process (Consult → Design → Launch → Support)
- Testimonials section (3 real client quotes)
- Contact form with EmailJS
- EN/ES language toggle (auto-detects browser language, persists via localStorage)
- Scroll-reveal animations
- SEO: Open Graph, Twitter Card, JSON-LD LocalBusiness schema, canonical URL, sitemap, robots.txt

---

## Remaining Work

**Manual (owner action required)**
1. Verify Google indexing by ~2026-04-24 (Search Console → URL Inspection if still not showing)
2. Ask Lara D., Alex Z., and Maria W. to post Google reviews

**Build tasks (development)**
3. Per-client case study pages (`/delara`, `/azpowerwash`, `/casaespana`)
4. Additional blog posts (cost guide, bilingual site case, redesign signs)
5. Custom 404 page (branded, redirects to homepage)
6. Custom OG image for blog post (1200×630 article card)

---

## Local Development

```bash
node serve.mjs          # start dev server at http://localhost:3000
node screenshot.mjs http://localhost:3000   # must run from WSL2
```

Screenshots saved to `./temporary screenshots/screenshot-N.png`.
