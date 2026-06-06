# PocketSod LLC — Client Onboarding SOP
**Veteran-Owned Web Design | Small Business Websites**
*Last updated: 2026-04-30*

---

## How to Use This Document
- Follow phases in order for every new client
- Each phase has a **Claude Prompt Block** — paste it into a new Claude session to get targeted output without context overhead
- Check off tasks as you complete them
- Revisit post-launch checklist before every handoff

---

## Phase 1 — Client Intake

### Checklist
- [ ] Initial contact logged (date, channel, name, business)
- [ ] Discovery call completed (30 min)
- [ ] Intake questionnaire sent and returned
- [ ] Package selected and documented
- [ ] Contract signed
- [ ] Deposit collected (50% upfront)
- [ ] Project folder created

### Step-by-Step

**1. Log the lead**
Create a row in your client tracker (Google Sheets):
`Date | Name | Business | Phone | Email | Package | Status | Notes`

**2. Send intake questionnaire** (see template below)

**3. Discovery call agenda (30 min)**
- What does your business do and who is your customer?
- Where are you located / what area do you serve?
- Do you have a logo? Brand colors? Existing site?
- What's the #1 goal of your website? (calls, form leads, directions, etc.)
- Any competitors' sites you like?
- Timeline and budget confirmed?

**4. Select package**

| Package | Price | Best For |
|---------|-------|---------|
| Starter | $500–$1,000 | New business, 1–3 pages, needs fast launch |
| Growth | $1,000–$2,500 | Established biz, bilingual option, SEO foundations |
| Premium | $2,500+ | Full custom, unlimited pages, ongoing support |

**5. Send contract** — see `contract-template.md`

**6. Collect deposit** — Venmo, Zelle, or invoice via Wave (free)

---

### Intake Questionnaire Template

```
POCKETSOD — CLIENT INTAKE FORM

Business Info
─────────────
Business Name: 
Owner Name:
Phone Number (for website):
Email Address:
City / Service Area:
Primary Service (e.g., "lawn care", "plumbing", "house cleaning"):

Website Goals
─────────────
What do you want visitors to do on your site?
  [ ] Call you   [ ] Fill out a form   [ ] Visit your location   [ ] Other: ___

Do you currently have a website? [ ] Yes — URL: ___________   [ ] No

Branding
─────────
Do you have a logo?        [ ] Yes   [ ] No (PocketSod can create a simple one)
Do you have brand colors?  [ ] Yes — describe: ___________   [ ] No
Any websites you like the look of? (list 1–3 URLs):

Content
───────
Do you have photos of your work?    [ ] Yes   [ ] No
Do you have customer testimonials?  [ ] Yes (# of reviews): ___   [ ] No
Do you have an "About" story?       [ ] Yes   [ ] No

Technical
─────────
Do you own a domain (e.g., yourbusiness.com)?  [ ] Yes   [ ] No
Do you have a Google Business Profile?         [ ] Yes   [ ] No
Preferred launch date:
```

---

### Claude Prompt Block — Phase 1

```
I'm onboarding a new client for PocketSod, a small-business web design company.
Client details:
  Business name: [NAME]
  Service: [SERVICE]
  City: [CITY]
  Package: [STARTER/GROWTH/PREMIUM]
  Goals: [CALLS/FORM LEADS/OTHER]
  Existing branding: [YES/NO — describe]

Generate a short project brief (5–8 bullet points) I can use as the single
source of truth for this build. Include: purpose, audience, tone, key pages,
primary CTA, any constraints noted above.
```

---

## Phase 2 — Content Collection

### Checklist
- [ ] Content request checklist sent to client
- [ ] Business name, tagline, service descriptions received
- [ ] About section / owner story received
- [ ] Service list with descriptions (3–6 services)
- [ ] Testimonials collected (3 minimum)
- [ ] Photos delivered (or stock photo plan confirmed)
- [ ] Contact info verified (phone, email, address/service area)
- [ ] Social media links collected (if any)

### Content Request Checklist (send to client)

```
POCKETSOD — CONTENT CHECKLIST

Please send us the following before we can begin building your site.
Everything can be emailed to contact@pocketsod.com.

TEXT CONTENT
   [ ] Business name (exactly as you want it displayed)
   [ ] Tagline or slogan (optional)
   [ ] Services list — for each service, provide:
         • Service name
         • 1–2 sentence description
         • Starting price (optional)
   [ ] About section — 2–4 sentences about you / your company
         Tip: include how long you've been in business and what makes you different
   [ ] 3–5 customer testimonials (name, quote, optional: city)
   [ ] Any special offers or guarantees ("Free estimates", "Licensed & insured", etc.)

PHOTOS
   [ ] 3–10 photos of your work (before/after preferred)
   [ ] Photo of yourself or your team (optional but recommended)
   [ ] Logo file (PNG with transparent background preferred)

CONTACT INFO
   [ ] Business phone number
   [ ] Business email address
   [ ] Physical address OR service area (city + radius)

SOCIAL MEDIA (if you have them)
   [ ] Facebook URL
   [ ] Instagram URL
   [ ] Google Business Profile URL

Photo tips:
   • Minimum 1000px wide
   • Well-lit, in-focus
   • JPEG or PNG
   • If you don't have photos, we'll use professional stock photos
```

### Image Requirements Guide

```
PHOTO SPECS FOR YOUR WEBSITE

Hero image (top of page):
   Size: at least 1200 × 800 px
   Format: JPG or PNG
   Content: your best work photo, or team on-site

Service thumbnails (one per service):
   Size: at least 600 × 400 px
   Format: JPG or PNG
   Content: finished work, job site, or before/after

Before/After pair (optional but powerful):
   Both photos should be taken from the SAME ANGLE
   Same lighting conditions if possible

Team / About photo:
   Size: at least 400 × 400 px
   Content: headshot or team group shot

File naming convention (use these exact names):
   hero.jpg
   service-1.jpg, service-2.jpg, service-3.jpg (etc.)
   before.jpg, after.jpg
   headshot.jpg
   logo.png
```

---

### Claude Prompt Block — Phase 2

```
I'm writing website copy for a small local service business.
Business: [NAME] — [SERVICE] in [CITY]
Owner provided this raw content: [PASTE RAW NOTES]

Write production-ready copy for:
1. Hero headline + subheadline (punchy, benefit-focused, <15 words each)
2. About section (3–4 sentences, warm/trustworthy tone)
3. Three service descriptions (name + 2-sentence description each)
4. Two CTA button labels (primary + secondary)

Tone: professional but approachable. No jargon. Focus on local trust signals.
```

---

## Phase 3 — Branding & Assets

### Checklist
- [ ] Logo received in correct format (PNG transparent preferred)
- [ ] Brand colors identified (or decided)
- [ ] Font pair selected
- [ ] Favicon created
- [ ] OG/social share image created (1200 × 630)

### If Client Has No Logo

**Free option:** Use a wordmark (business name in a nice font) — generate with Canva (free)
**Paid option:** Fiverr logo ($50–$150) or offer PocketSod's simple logo add-on

### Color Selection Process

1. Ask client: "Pick 2–3 words that describe how you want your business to feel" (e.g., trustworthy, energetic, natural, premium)
2. Map words to palette:
   - Trustworthy/professional → navy + white + gold accent
   - Natural/outdoor → forest green + earth brown + cream
   - Clean/modern → dark charcoal + white + single accent color
   - Energetic/bold → deep teal or burgundy + bright accent
3. Define 4 colors: background, primary, accent, text
4. Save as CSS variables in the build

### Favicon Creation (free)

1. Export logo to 512 × 512 PNG with transparent background
2. Go to [favicon.io](https://favicon.io/favicon-converter/) — upload PNG
3. Download the zip — use `favicon.ico` and `apple-touch-icon.png`
4. Place in project root

### OG Image (social share card)

1. Open Canva → Custom size → 1200 × 630
2. Use dark background, logo centered or left-aligned
3. Add business name + tagline in white
4. Export as PNG → `og-image.png`
5. Reference in `<head>`: `<meta property="og:image" content="https://yourdomain.com/og-image.png">`

---

### Claude Prompt Block — Phase 3

```
I need a CSS color palette for a small business website.
Business type: [SERVICE]
Feeling words the client used: [WORDS]
Client's existing brand colors (if any): [COLORS or "none"]

Provide:
1. Four CSS custom properties: --bg, --primary, --accent, --text
2. Hex values for each
3. One-sentence rationale per color
4. A suggested Google Fonts pairing (display font + body font)
```

---

## Phase 4 — Website Planning

### Standard Small Business Sitemap

```
Single-page site (Starter):
  index.html
    ├── Hero (headline + CTA)
    ├── Trust strip (badges, stats)
    ├── Services (3–6 cards)
    ├── About
    ├── Testimonials
    ├── Before/After (optional)
    ├── Contact form
    └── Footer

Multi-page site (Growth/Premium):
  index.html      → Home (same sections as above)
  services.html   → Full service list with pricing
  about.html      → Team, story, values, certifications
  contact.html    → Map, form, hours, phone
  blog/           → Optional (Growth/Premium)
```

### Homepage Section Breakdown

| Section | Purpose | Content |
|---------|---------|---------|
| Hero | First impression, primary CTA | Headline, subheadline, 1–2 buttons, hero image |
| Trust strip | Establish credibility fast | 3–4 badges (licensed, insured, years in business, satisfaction guarantee) |
| Services | Show what you offer | 3–6 service cards with icon, name, short description |
| About | Build human connection | Photo, owner story, why-us differentiator |
| Testimonials | Social proof | 3 quotes, customer name, city |
| Before/After | Show results visually | Slider with 2 photos |
| CTA band | Drive action | "Ready to get started?" + phone/form button |
| Contact | Capture leads | Name, phone, email, message, submit |
| Footer | Navigation + trust | Logo, nav links, phone, social links, copyright |

---

### Claude Prompt Block — Phase 4

```
Plan the website structure for a small local service business.
Business: [NAME] — [SERVICE] in [CITY]
Package: [STARTER = 1 page / GROWTH = 3–4 pages / PREMIUM = custom]
Key goals: [CALLS / FORM LEADS / BOTH]

Provide:
1. Recommended page list (with purpose of each page)
2. Homepage section order (with 1-sentence rationale per section)
3. Primary CTA placement recommendations
4. Any custom sections worth adding for this business type
```

---

## Phase 5 — Design & UI Structure

### Checklist
- [ ] Color palette finalized and saved as CSS variables
- [ ] Font pair loaded via Google Fonts
- [ ] Wireframe or section map approved (client or self-directed)
- [ ] Mobile-first layout planned
- [ ] Hero image selected/procured

### Design Decisions Checklist

```
For each section, decide:
[ ] Background: solid / gradient / image with overlay
[ ] Layout: single-column / two-column / card grid
[ ] Card style: flat / shadowed / outlined / colored
[ ] Typography: heading size, weight, letter-spacing
[ ] Button style: filled / outlined / ghost; border-radius
[ ] Animation: scroll-reveal (fade-up) / none
```

### Free Image Sources (if client has no photos)

| Source | Best For |
|--------|---------|
| [Unsplash](https://unsplash.com) | High-quality lifestyle/work photos |
| [Pexels](https://pexels.com) | People, trades, outdoor |
| [Pixabay](https://pixabay.com) | General purpose |
| [StockSnap](https://stocksnap.io) | Clean commercial images |

Search tip: "[trade] worker" / "[city] [service]" / "small business [service]"

---

### Claude Prompt Block — Phase 5

```
I'm designing a landing page for a small local service business.
Business: [NAME] — [SERVICE]
Palette: [paste CSS variables]
Fonts: [DISPLAY FONT] + [BODY FONT]
Hero image description: [describe or say "none"]

Design the hero section HTML + CSS:
- Full-width, min-height 100vh
- Image or gradient background with overlay
- Centered content: eyebrow text, h1, subheadline, two CTA buttons
- Mobile responsive
- No frameworks — vanilla HTML/CSS only
- Use CSS custom properties, not hardcoded hex values
```

---

## Phase 6 — Development

### Checklist
- [ ] `template/` folder copied to `clients/[slug]/`
- [ ] Generator script run (or manual placeholder replacement)
- [ ] Placeholder tokens verified replaced:
  - [ ] `{{BUSINESS_NAME}}`
  - [ ] `{{CITY}}`
  - [ ] `{{SERVICE}}`
  - [ ] `{{PHONE}}`
  - [ ] `{{FORM_ID}}`
  - [ ] `{{META_DESCRIPTION}}`
- [ ] Real client photos added to `images/`
- [ ] Logo placed and sized correctly
- [ ] All copy swapped in (headlines, services, about, testimonials)
- [ ] Contact form action URL updated (Formspree ID)
- [ ] Dev server started and page reviewed in browser
- [ ] Mobile view checked (320px, 375px, 768px)

### Generator Script Usage

```bash
# CLI version (prompts for input)
python generate-site.py

# GUI version (windowed form)
python gui-generator.py
```

Both scripts:
1. Prompt for all 6 values
2. Copy `template/` → `clients/<slug>/`
3. Replace all placeholder tokens in `index.html`, `css/style.css`, `js/script.js`

### Manual Placeholder Replacement (if not using generator)

Find and replace in all three template files:

```
{{BUSINESS_NAME}} → Green Valley Landscaping
{{CITY}}          → Austin
{{SERVICE}}       → Landscaping
{{PHONE}}         → (512) 555-0100
{{FORM_ID}}       → xabc1234  (from Formspree dashboard)
{{META_DESCRIPTION}} → Professional landscaping in Austin, TX. Call for a free estimate.
```

### Formspree Setup (FREE)

1. Go to [formspree.io](https://formspree.io) → Sign up free
2. New Form → enter client's email address
3. Copy the Form ID (the part after `/f/` in the endpoint URL)
4. Paste as `{{FORM_ID}}` in the generator
5. Free tier: 50 submissions/month — upgrade if client expects more

### Dev Server

```bash
# Start local server (from project root or client folder)
node serve.mjs

# Custom port (if 3000 is in use)
node serve.mjs 3001

# View in browser
http://localhost:3000
```

---

### Claude Prompt Block — Phase 6

```
I'm customizing a pre-built HTML template for a new client.
Template is at: template/index.html (vanilla HTML/CSS/JS, no frameworks)
Client details:
  Business name: [NAME]
  Service: [SERVICE]
  City: [CITY]
  Phone: [PHONE]
  Formspree ID: [ID]
  Brand colors: [paste CSS vars]
  Photos available: [list what they sent]

Tasks:
1. List every place {{BUSINESS_NAME}}, {{CITY}}, {{SERVICE}}, {{PHONE}}, {{FORM_ID}} appear
   in the template and confirm what they should become
2. Identify any hardcoded placeholder text to replace
3. Write the updated hero headline and subheadline for this specific business
4. Write 3 service card descriptions (name + 2 sentences each)
```

---

## Phase 7 — GitHub Setup & Deployment

### Checklist
- [ ] GitHub account exists (use PocketSod org or client's own account)
- [ ] New repository created with correct name
- [ ] Code pushed to `main` branch
- [ ] GitHub Pages enabled
- [ ] Site live at `username.github.io/repo-name`
- [ ] Custom domain configured (if applicable)
- [ ] HTTPS enforced

### Repository Structure

```
clients/green-valley-landscaping/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── hero.jpg
    ├── before.jpg
    ├── after.jpg
    ├── service-1.jpg
    └── logo.png
```

### Naming Convention

- Repo name: `kebab-case` business name — e.g., `green-valley-landscaping`
- If hosted under PocketSod org: `PocketSod/green-valley-landscaping`
- If client owns the GitHub account: create repo under their account

### Create Repo & Push

```bash
# From the client's site folder
git init
git add .
git commit -m "Initial build — Green Valley Landscaping"

# Create repo on GitHub (via CLI)
gh repo create PocketSod/green-valley-landscaping --public --source=. --push

# OR via GitHub.com:
# 1. New Repository → name → public → Create
# 2. Follow "push an existing repository" instructions shown
```

### Enable GitHub Pages

1. Go to repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `root`
4. Save
5. Wait 1–2 minutes → site live at: `https://pocketsod.github.io/green-valley-landscaping/`

### Pushing Updates

```bash
git add .
git commit -m "Update hero copy and add testimonials"
git push
# GitHub Pages auto-deploys within ~60 seconds
```

---

## Phase 8 — Domain & DNS Setup

### Checklist
- [ ] Client owns a domain (or purchase one)
- [ ] Registrar access confirmed (login credentials from client)
- [ ] CNAME file added to repo root
- [ ] DNS records updated at registrar
- [ ] Custom domain entered in GitHub Pages settings
- [ ] HTTPS enforced (GitHub auto-issues Let's Encrypt cert)
- [ ] Domain propagation verified (24–48 hrs)

### Domain Purchase (if client doesn't have one)

**Recommended registrar:** [Porkbun](https://porkbun.com) — cheapest .com (~$9/yr), clean UI
**Alternatives:** Namecheap, Google Domains (now Squarespace), GoDaddy

### DNS Configuration

**For apex domain (yourdomain.com):**
Add 4 A records pointing to GitHub Pages IPs:
```
Type: A   Host: @   Value: 185.199.108.153
Type: A   Host: @   Value: 185.199.109.153
Type: A   Host: @   Value: 185.199.110.153
Type: A   Host: @   Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME   Host: www   Value: pocketsod.github.io
```

### CNAME File in Repo

```bash
# Create file named "CNAME" (no extension) in repo root
echo "greenvalleylawn.com" > CNAME
git add CNAME
git commit -m "Add custom domain CNAME"
git push
```

### GitHub Pages Custom Domain

1. Repo → Settings → Pages
2. Custom domain → enter `greenvalleylawn.com`
3. Check "Enforce HTTPS" (after DNS propagates)

### Verify DNS Propagation

```bash
# From terminal
nslookup greenvalleylawn.com
# Should return GitHub IPs: 185.199.108.x

# Or use: https://www.whatsmydns.net
```

---

### Claude Prompt Block — Phases 7–8

```
I've built a static site for a client and need to deploy it to GitHub Pages
with a custom domain.

Situation:
  - Site is in folder: clients/green-valley-landscaping/
  - GitHub org: PocketSod
  - Custom domain: greenvalleylawn.com (registered at Porkbun)
  - Repo does not exist yet

Provide exact shell commands (git + gh CLI) to:
1. Initialize repo, make first commit, create GitHub repo, push
2. Enable GitHub Pages via gh CLI (if possible)
3. Create CNAME file
4. List the exact DNS records to add at Porkbun
```

---

## Phase 9 — SEO Basics

### Checklist
- [ ] `<title>` tag: Business Name | Service in City
- [ ] `<meta name="description">` populated
- [ ] Open Graph tags added (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags added
- [ ] Canonical URL set
- [ ] LocalBusiness JSON-LD schema added
- [ ] `robots.txt` created
- [ ] `sitemap.xml` created
- [ ] Google Search Console → domain added + sitemap submitted
- [ ] Google Business Profile → website URL updated

### Required `<head>` Tags

```html
<!-- Primary SEO -->
<title>Green Valley Landscaping | Landscaping in Austin, TX</title>
<meta name="description" content="Professional landscaping in Austin, TX. Call (512) 555-0100 for a free estimate. Licensed, insured, 10+ years experience.">
<link rel="canonical" href="https://greenvalleylawn.com/">

<!-- Open Graph -->
<meta property="og:title" content="Green Valley Landscaping | Austin, TX">
<meta property="og:description" content="Professional landscaping in Austin, TX. Call for a free estimate.">
<meta property="og:image" content="https://greenvalleylawn.com/og-image.png">
<meta property="og:url" content="https://greenvalleylawn.com/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Green Valley Landscaping | Austin, TX">
<meta name="twitter:description" content="Professional landscaping in Austin, TX. Call for a free estimate.">
<meta name="twitter:image" content="https://greenvalleylawn.com/og-image.png">
```

### LocalBusiness JSON-LD Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Green Valley Landscaping",
  "description": "Professional landscaping in Austin, TX.",
  "url": "https://greenvalleylawn.com",
  "telephone": "+15125550100",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "areaServed": "Austin, TX and surrounding areas",
  "priceRange": "$$"
}
</script>
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://greenvalleylawn.com/sitemap.xml
```

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://greenvalleylawn.com/</loc>
    <lastmod>2026-04-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → **URL prefix** → paste domain
3. Verify via HTML tag method (add `<meta name="google-site-verification" content="...">` to `<head>`)
4. Push to GitHub, wait for deploy, then click **Verify**
5. Sitemaps → submit `https://yourdomain.com/sitemap.xml`

### Google Analytics (optional — Growth/Premium only)

Free via [analytics.google.com](https://analytics.google.com). Add `gtag.js` snippet to `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### Claude Prompt Block — Phase 9

```
Generate the complete SEO <head> block for a small local service business website.

Business: [NAME]
Service: [SERVICE]
City, State: [CITY, STATE]
Domain: [DOMAIN]
Phone: [PHONE]
One-line description: [DESCRIPTION]
OG image URL: [DOMAIN]/og-image.png

Provide:
1. Full <head> SEO block (title, meta description, canonical, OG, Twitter Card)
2. LocalBusiness JSON-LD schema script tag
3. robots.txt content
4. sitemap.xml content
All values pre-filled with the business info above.
```

---

## Phase 10 — Testing & QA

### Checklist

**Functional**
- [ ] All nav links scroll to correct sections
- [ ] Contact form submits and shows success message
- [ ] Form error state works (submit with empty fields)
- [ ] Client receives email when form is submitted (test via Formspree dashboard)
- [ ] Phone number link (`tel:`) works on mobile
- [ ] Before/after slider draggable (if included)
- [ ] All external links open in `_blank`

**Visual**
- [ ] Hero image loads and crops correctly at all breakpoints
- [ ] Text readable over hero overlay (check contrast)
- [ ] Cards align cleanly at 375px, 768px, 1440px
- [ ] Footer doesn't break on narrow screens
- [ ] Logo not pixelated or distorted

**Performance**
- [ ] Images compressed (< 200KB each for hero, < 100KB for thumbnails)
- [ ] Google PageSpeed score ≥ 80 mobile / ≥ 90 desktop
- [ ] No render-blocking resources

**Cross-Browser**
- [ ] Chrome (latest)
- [ ] Safari (iPhone)
- [ ] Firefox
- [ ] Edge

**SEO**
- [ ] Title tag present and correct
- [ ] Meta description present (150–160 characters)
- [ ] OG image shows in [opengraph.xyz](https://opengraph.xyz) previewer
- [ ] JSON-LD validates at [schema.org validator](https://validator.schema.org)

### Image Compression (free)

| Tool | Use |
|------|-----|
| [Squoosh](https://squoosh.app) | Best quality-to-size ratio, one image at a time |
| [TinyPNG](https://tinypng.com) | Batch PNG/JPG compression |
| [Convertio](https://convertio.co) | Convert HEIC/TIFF to JPG |

### Performance Check

1. Deploy to GitHub Pages first
2. Go to [pagespeed.web.dev](https://pagespeed.web.dev)
3. Paste the live URL → Run Analysis
4. Fix any "red" issues (usually image sizes or missing alt tags)

---

### Claude Prompt Block — Phase 10

```
I'm doing a QA pass on a client website before launch.
Site URL: [URL]
Business type: [SERVICE]

I've checked the following manually: [list what you've tested]
I found these issues: [paste any issues or "none yet"]

Review this HTML snippet and identify:
1. Missing alt attributes on images
2. Any non-accessible patterns (missing labels, low contrast warnings)
3. Any performance issues in the markup
4. Any broken or placeholder text still in the code

[PASTE relevant HTML section]
```

---

## Phase 11 — Launch Checklist

Complete every item before telling the client the site is live.

```
PRE-LAUNCH
[ ] All placeholder text replaced (search for "{{" in all files — should return 0 results)
[ ] All images present and loading (no broken image icons)
[ ] Form tested — real email received at client's email
[ ] Phone number correct and tappable on mobile
[ ] Custom domain resolving correctly (https://yourdomain.com)
[ ] HTTPS enforced (padlock in browser)
[ ] robots.txt accessible at /robots.txt
[ ] sitemap.xml accessible at /sitemap.xml
[ ] Google Search Console verified
[ ] OG image renders correctly (test at opengraph.xyz)
[ ] PageSpeed score acceptable

LAUNCH
[ ] Final review call / screen share with client
[ ] Client approves design
[ ] Google Business Profile updated with new website URL
[ ] Site announced (client posts on social, if applicable)

POST-LAUNCH (day 1)
[ ] Confirm no 404s in Google Search Console
[ ] Formspree dashboard shows test submission in history
[ ] Check site on client's phone specifically
```

---

## Phase 12 — Post-Launch Handoff

### Checklist
- [ ] Handoff document sent to client (see template below)
- [ ] All credentials documented and shared securely
- [ ] Maintenance plan offered / decided
- [ ] Invoice for remaining balance sent and collected
- [ ] Client asked for a Google review
- [ ] Project marked complete in tracker
- [ ] Testimonial requested from client (for PocketSod portfolio)

### Handoff Document Template

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  YOUR WEBSITE IS LIVE!
  [Business Name] — Website Handoff
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WEBSITE
  Live URL: https://[yourdomain.com]
  Hosted on: GitHub Pages (free hosting)
  Deployed from: GitHub.com → [repo link]

CONTACT FORM
  Provider: Formspree (free tier: 50 submissions/month)
  Submissions go to: [client email]
  Dashboard: https://formspree.io (log in with [email])
  Upgrade if needed: https://formspree.io/plans

DOMAIN
  Registrar: [Porkbun / Namecheap / etc.]
  Renewal date: [date]
  Annual cost: ~$[X]/year
  Login: [handle securely — use 1Password or email separately]

MAKING UPDATES
  Small text changes: contact PocketSod at contact@pocketsod.com
  If you want to learn to edit yourself, we can schedule a 30-min tutorial.

GOOGLE SEARCH CONSOLE
  Property: [domain]
  Access: [client's Google account]
  Note: It takes 1–3 months for Google to fully index new sites.

NEXT STEPS (recommended)
  • Share your new website URL on your Google Business Profile
  • Post it on Facebook / Instagram
  • Add it to your business cards and email signature
  • Ask happy customers to leave a Google review

SUPPORT
  Email: contact@pocketsod.com
  Phone: (317) 348-0539
  Maintenance plans available starting at $50/mo
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Maintenance Plans (upsell)

| Plan | Price | Includes |
|------|-------|---------|
| Basic | $50/mo | Monthly content updates (text/photos), uptime monitoring |
| Standard | $100/mo | Basic + priority support, form/plugin updates, monthly report |
| SEO | $100–$500/mo | Keyword tracking, Google Business optimization, content additions |
| Hosting | $20–$50/mo | Domain renewal management, DNS monitoring |

---

### Claude Prompt Block — Phase 12

```
Write a post-launch email from PocketSod to a client.
The email should:
1. Congratulate them on their site going live
2. Include their URL: [URL]
3. Remind them to update their Google Business Profile with the new URL
4. Invite them to leave a Google review for PocketSod
5. Mention that support is available at contact@pocketsod.com

Tone: warm, professional, brief. Signed from "Ryan at PocketSod"
(317) 348-0539 | contact@pocketsod.com
```

---

## Appendix A — Quick Reference

### Key Tools

| Task | Free Tool |
|------|-----------|
| Repo + hosting | GitHub Pages |
| Forms | Formspree |
| Analytics | Google Analytics |
| Images | Unsplash, Pexels |
| Image compression | Squoosh, TinyPNG |
| OG image creation | Canva |
| Favicon | favicon.io |
| Performance | PageSpeed Insights |
| SEO validation | Google Search Console, schema.org validator |
| DNS check | whatsmydns.net |

### Slug Generation

```python
import re
def slugify(name):
    return re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
# "Green Valley Landscaping" → "green-valley-landscaping"
```

### Project Folder Structure

```
PocketSod/
├── template/              <- master template (never edit directly for clients)
│   ├── index.html
│   ├── css/style.css
│   ├── js/script.js
│   └── images/            <- empty; add client images here
├── clients/
│   ├── green-valley-landscaping/
│   │   ├── index.html     <- placeholders replaced
│   │   ├── css/style.css
│   │   ├── js/script.js
│   │   ├── CNAME          <- custom domain
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── images/
│   └── [next-client]/
├── generate-site.py
├── gui-generator.py
├── serve.mjs
└── screenshot.mjs
```

---

## Appendix B — Billing & Pricing Reference

| Package | Price | Deposit (50%) | Final |
|---------|-------|--------------|-------|
| Starter | $500–$1,000 | $250–$500 | $250–$500 |
| Growth | $1,000–$2,500 | $500–$1,250 | $500–$1,250 |
| Premium | $2,500+ | $1,250+ | $1,250+ |

**Payment methods:** Venmo, Zelle, check, Wave invoice (free invoicing)
**Timeline:** Starter = 7 days, Growth = 14 days, Premium = 21–30 days

---

*PocketSod LLC — contact@pocketsod.com — (317) 348-0539*
*This document is internal. Do not share with clients.*
