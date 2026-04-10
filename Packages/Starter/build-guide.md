# Starter Package — Build Guide & Customer Checklist
**Price:** $500–$1,000 | **Timeline:** ~14 days | **Revisions:** 1 round

---

## What This Package Delivers
- Up to 3 pages (e.g. Home, Services, Contact)
- Contact form
- Mobile responsive design
- Basic on-page SEO
- Google Maps embed
- 1 revision round after delivery

---

## Phase 1 — Customer Intake (Collect Before Starting)

### Business Basics
- [ ] Business name (exact legal or DBA name)
- [ ] Tagline or short description (1–2 sentences)
- [ ] Phone number
- [ ] Email address
- [ ] Physical address (for Maps embed + footer)
- [ ] Service area (city/region or "all 50 states")
- [ ] Business hours

### Branding
- [ ] Logo file — prefer PNG with transparent background
  - If no logo: ask if they want one (upsell) or use text-only name
- [ ] Brand colors — hex codes if known; if not, ask for color preferences or reference images
- [ ] Font preference — or describe the feel (professional, friendly, bold, elegant, etc.)
- [ ] Any existing website or competitors they like the look of

### Pages & Content (up to 3 pages)
Confirm which 3 pages they need. Common combos:
- **Option A:** Home / Services / Contact
- **Option B:** Home / About / Contact
- **Option C:** Home / Menu or Portfolio / Contact

For **each page**, collect:
- [ ] Page headline / main message
- [ ] Body copy (they write it, or note if you're writing it for them — add cost)
- [ ] Any images they want to use (JPG/PNG, high resolution preferred)
  - If no images: use placeholder style or stock photo direction

### Services / Offerings
- [ ] List of services or products offered
- [ ] Prices (if they want to display them)
- [ ] Any special offers or differentiators ("Licensed & Insured", "Free Estimates", etc.)

### Contact Form
- [ ] What fields to include (standard: Name, Phone, Email, Message)
- [ ] Any additional fields (e.g. Service Type dropdown, preferred callback time)
- [ ] Where form submissions should go (email address)
- [ ] Preferred form backend: Formspree (free tier), Netlify Forms, or other

### Google Maps
- [ ] Confirm physical address to embed
- [ ] If service-area business (no storefront): embed general city or skip map

### SEO Basics
- [ ] Target city/region (for local SEO title tags)
- [ ] Primary keyword phrase (e.g. "lawn care Blue Ridge VA")
- [ ] Meta description — or write one from their business description

### Domain & Hosting
- [ ] Do they have a domain? (yes → get registrar login or DNS access)
- [ ] Do they need hosting? (recommend GitHub Pages free, or Netlify)
- [ ] Preferred domain if buying new (check availability)

---

## Phase 2 — Build Checklist

### Setup
- [ ] Create project folder
- [ ] Set up local dev (copy `serve.mjs` or equivalent)
- [ ] Pull brand colors into CSS variables
- [ ] Load fonts (Google Fonts — pick 2: display + body)

### Pages
- [ ] **Page 1 — Home:** Hero, value prop, CTA, brief about/services preview
- [ ] **Page 2 — Services or About:** Content per customer input
- [ ] **Page 3 — Contact:** Form + address + phone + Google Maps embed

### Components (every page)
- [ ] Sticky navbar with logo + links + CTA button
- [ ] Mobile hamburger menu
- [ ] Footer with logo, nav links, phone, email, address
- [ ] Scroll-reveal animations (IntersectionObserver)

### Contact Form
- [ ] Hook up to Formspree or Netlify Forms
- [ ] Test submission end-to-end
- [ ] Add success/error state feedback

### Google Maps
- [ ] Embed via `<iframe>` from Google Maps "Share > Embed"
- [ ] Confirm correct address pinned

### SEO
- [ ] `<title>` tag: `Business Name — Primary Keyword | City`
- [ ] `<meta name="description">` on each page
- [ ] `<meta name="viewport">` set
- [ ] `<html lang="en">` set
- [ ] All images have `alt` attributes
- [ ] Heading hierarchy: one `<h1>` per page, logical `<h2>`/`<h3>` structure

### Responsive
- [ ] Test at 375px (mobile), 768px (tablet), 1280px (desktop)
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets (buttons/links) at least 44px tall on mobile

### Performance
- [ ] Images compressed (TinyPNG or similar)
- [ ] No unused CSS or JS
- [ ] Google Fonts loaded with `display=swap`

---

## Phase 3 — Revision Round

- [ ] Send live preview link to customer
- [ ] Document all feedback in writing (email or form)
- [ ] Implement 1 round of revisions
- [ ] Confirm approval in writing before final delivery

---

## Phase 4 — Launch

- [ ] Point custom domain DNS to host (A record or CNAME)
- [ ] Verify SSL certificate active (HTTPS)
- [ ] Test all pages on live domain
- [ ] Test contact form on live domain
- [ ] Submit to Google Search Console (optional but recommended)
- [ ] Hand off login credentials + brief how-to doc

---

## Upsell Opportunities (flag if relevant)
- Monthly maintenance: $50–$200/mo
- Hosting management: $20–$50/mo
- SEO management: $100–$500/mo
- Logo design (if they don't have one)
- Additional pages beyond 3 (quote per page)
- Spanish translation → Growth Package upgrade
