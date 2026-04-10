# Growth Package — Build Guide & Customer Checklist
**Price:** $1,000–$2,500 | **Timeline:** ~21 days | **Revisions:** 2 rounds

---

## What This Package Delivers
- Up to 6 pages
- Bilingual EN/ES language toggle
- Blog (posts page + individual post layout)
- Quote/inquiry forms
- SEO foundations
- Social media links
- Maintenance-ready code structure

---

## Phase 1 — Customer Intake (Collect Before Starting)

### Business Basics
- [ ] Business name (exact legal or DBA)
- [ ] Tagline in English
- [ ] Tagline in Spanish (ask if they have one, or translate together)
- [ ] Phone number
- [ ] Email address
- [ ] Physical address or service area
- [ ] Business hours
- [ ] Year founded
- [ ] Owner/founder name (for About section)

### Branding
- [ ] Logo file — PNG with transparent background (required)
  - Spanish version of logo if different
- [ ] Brand colors — hex codes preferred
- [ ] Font preferences or reference sites
- [ ] Photography — product, team, location photos (high res)
  - Note: Growth package benefits heavily from real photos; discuss if none exist
- [ ] Tone: formal / friendly / bold / community-focused / etc.

### Language
- [ ] Primary language preference (EN first or ES first?)
- [ ] Who is writing the Spanish copy?
  - Option A: Customer provides Spanish copy
  - Option B: You translate from English (note: verify with native speaker if possible)
- [ ] Are there any terms, brand names, or slogans that should NOT be translated?

### Pages & Content (up to 6 pages)
Confirm which pages they need. Common 6-page set:
1. Home
2. About / Our Story
3. Services or Menu or Products
4. Blog (listing page)
5. Quote / Book / Contact
6. FAQ or Gallery (optional)

For **each page**, collect:
- [ ] Page headline (EN + ES)
- [ ] Body copy (EN + ES)
- [ ] Images or image direction
- [ ] Any calls-to-action and where they link

### Services / Offerings
- [ ] Full list of services, packages, or menu items
- [ ] Descriptions for each (EN + ES)
- [ ] Pricing (optional — confirm if they want to show prices)
- [ ] Any certifications, awards, or trust signals

### Blog
- [ ] Will the customer write their own posts? (yes = maintenance-ready setup)
- [ ] Do they have any existing posts to migrate?
- [ ] Initial posts for launch (ask for 2–3 to populate the blog)
  - Title (EN + ES)
  - Body content (EN + ES)
  - Category/tag
  - Date
- [ ] Blog categories they plan to use

### Quote / Inquiry Form
- [ ] What fields are needed?
  - Standard: Name, Phone, Email, Service/Event Type, Date, Notes
  - Custom fields specific to their business
- [ ] Any dropdown options (event types, service tiers, etc.) — collect all options in EN + ES
- [ ] Where do submissions go? (email address)
- [ ] Form backend: Formspree, Netlify Forms, or other

### Social Media
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] TikTok URL
- [ ] YouTube URL
- [ ] Any others (Yelp, Google Business, LinkedIn, etc.)

### SEO
- [ ] Target city/region
- [ ] Primary keyword (EN) — e.g. "Mexican catering Indianapolis"
- [ ] Primary keyword (ES) — e.g. "catering mexicano Indianapolis"
- [ ] Meta descriptions for each page (or write from content)

### Domain & Hosting
- [ ] Existing domain? (yes → DNS access needed)
- [ ] New domain needed? (check availability)
- [ ] Hosting preference (GitHub Pages, Netlify recommended)

---

## Phase 2 — Build Checklist

### Setup
- [ ] Create project folder
- [ ] Set up local dev server
- [ ] Pull brand colors into CSS variables
- [ ] Load fonts (Google Fonts)
- [ ] Set up EN/ES toggle system (see `en-es-toggle-guide.md`)
- [ ] Create `T = { en: {}, es: {} }` translations object skeleton

### Pages
- [ ] **Home:** Hero, stats/trust strip, services preview, about teaser, CTA
- [ ] **About:** Founder story, timeline or milestones, team photos, quote/pull
- [ ] **Services/Menu/Products:** Cards or list with descriptions and prices
- [ ] **Blog listing:** Grid of post cards (title, category, date, excerpt, read more)
- [ ] **Blog post template:** Title, date, category, body, related posts
- [ ] **Quote/Contact:** Form + contact info + map (if applicable)

### EN/ES Toggle
- [ ] Widget HTML added (fixed position)
- [ ] Toggle CSS added
- [ ] All visible text tagged with `data-i18n`, `data-i18n-html`, `data-i18n-placeholder`, or `data-i18n-opt`
- [ ] All strings entered in both `T.en` and `T.es`
- [ ] `setLang()` function implemented
- [ ] Auto-init IIFE added (browser detection + localStorage)
- [ ] `localStorage` key is unique to this site
- [ ] Form submission confirmation text translates correctly
- [ ] `<html lang="">` updates on toggle

### Blog
- [ ] Post listing page renders cards correctly
- [ ] Individual post layout complete
- [ ] Categories display and filter (optional)
- [ ] At least 2–3 real posts populated for launch

### Components (all pages)
- [ ] Sticky navbar with logo, links, language toggle in nav or nearby
- [ ] Mobile hamburger menu (nav links translate)
- [ ] Footer: logo, nav links, social icons, contact info, copyright
- [ ] Scroll-reveal animations
- [ ] All nav link text translates

### Quote Form
- [ ] Connected to Formspree or Netlify Forms
- [ ] All field labels translate (EN/ES)
- [ ] All placeholder text translates
- [ ] All select option text translates
- [ ] Success/error confirmation text translates
- [ ] Test submission end-to-end in both languages

### Social Links
- [ ] All icons/links present in footer
- [ ] Links open in new tab (`target="_blank" rel="noopener"`)
- [ ] Confirm all URLs are correct and active

### SEO
- [ ] `<title>` and `<meta description>` on every page
- [ ] `<html lang="">` set (updates on toggle)
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`) — optional but recommended
- [ ] Alt text on all images
- [ ] Heading hierarchy correct on each page
- [ ] Sitemap (optional for static site)

### Responsive
- [ ] Test at 375px, 768px, 1280px
- [ ] Language toggle visible and functional on mobile
- [ ] No horizontal scroll
- [ ] Blog cards stack cleanly on mobile

---

## Phase 3 — Revision Rounds (2 included)

**Round 1**
- [ ] Send preview link to customer
- [ ] Collect all feedback in writing
- [ ] Implement changes

**Round 2**
- [ ] Send updated preview
- [ ] Final round of feedback
- [ ] Implement final changes
- [ ] Confirm written approval before launch

---

## Phase 4 — Launch

- [ ] Point domain DNS to host
- [ ] Verify HTTPS active
- [ ] Test all pages on live domain (EN + ES)
- [ ] Test form submission on live domain
- [ ] Test all social links
- [ ] Submit to Google Search Console
- [ ] Verify Google Business listing links correctly (if applicable)
- [ ] Hand off credentials + brief maintenance guide

---

## Maintenance-Ready Notes
This package is built so the customer (or you on retainer) can update content without touching the layout. Document for the customer:
- How to update text (if static HTML — they'll need your help or a retainer)
- How to add a new blog post
- How to update pricing or services

---

## Upsell Opportunities
- Monthly maintenance retainer: $50–$200/mo
- Hosting management: $20–$50/mo
- SEO management: $100–$500/mo
- Additional pages beyond 6
- Professional Spanish translation review
- Upgrade to Premium for custom branding, analytics, unlimited pages
