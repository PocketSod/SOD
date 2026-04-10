# Premium Package — Build Guide & Customer Checklist
**Price:** $2,500+ | **Timeline:** ~30–45 days | **Revisions:** Unlimited (within scope)

---

## What This Package Delivers
- Unlimited pages
- Custom design & branding
- Advanced SEO (on-page + technical)
- Hosting management included
- Ongoing edits (retainer or as-needed)
- Analytics setup (Google Analytics + Search Console)
- Priority support

---

## Phase 1 — Discovery & Kickoff

### Initial Kickoff Call (schedule before collecting anything)
- [ ] Understand the business in depth — history, goals, audience
- [ ] Understand what they dislike about their current site (if any)
- [ ] Review 3–5 competitor or inspiration sites together
- [ ] Agree on timeline, milestones, and communication cadence
- [ ] Clarify revision process and scope boundaries in writing

---

## Phase 2 — Customer Intake (Collect After Kickoff)

### Business Basics
- [ ] Business name (legal + DBA if different)
- [ ] Tagline / brand statement
- [ ] Mission statement or brand promise (1–3 sentences)
- [ ] Phone number(s)
- [ ] Email address(es) — general + department-specific if needed
- [ ] Physical address(es)
- [ ] Service area / coverage
- [ ] Business hours
- [ ] Year founded
- [ ] Owner/founder name and bio
- [ ] Team members to feature (names, roles, headshots, bios)
- [ ] Key awards, certifications, press mentions, or trust signals

### Branding
- [ ] Logo files — all formats: PNG (transparent), SVG preferred, any color variants
- [ ] Brand guide / style guide (if they have one)
  - If no brand guide: this becomes part of the build (custom design)
- [ ] Brand colors (hex + Pantone if available)
- [ ] Typography (fonts currently in use, or open to new selection)
- [ ] Imagery style — photography, illustration, abstract, documentary, etc.
- [ ] Mood board or reference images (ask for 5–10 examples of visual direction)
- [ ] Tone of voice: formal / casual / editorial / warm / authoritative / playful

### Photography & Media
- [ ] Professional photos of the business, team, products, location (high-res)
  - If no photos exist: discuss professional shoot (upsell or referral)
- [ ] Any video content (hero background, explainer, testimonials)
- [ ] Any existing graphics, icons, or illustration assets
- [ ] Permission/rights to use all provided media confirmed

### Pages & Sitemap
Build a full sitemap before writing a line of code.
- [ ] List every page needed
- [ ] Confirm hierarchy (main nav vs. sub-pages)
- [ ] Identify pages that need unique layouts vs. templates

Common Premium sitemap:
1. Home
2. About (company story, mission, team)
3. Services (overview page)
   - Service detail pages (one per major offering)
4. Portfolio / Case Studies / Gallery
5. Blog / Resources
   - Individual post template
6. Testimonials / Reviews
7. FAQ
8. Contact / Request a Quote
9. Privacy Policy + Terms of Service (legal pages)

For **each page**, collect:
- [ ] Headline / H1
- [ ] All body copy (they provide or confirm if you're writing — note cost)
- [ ] Images assigned to each section
- [ ] CTAs and destinations
- [ ] Any special functionality (calculator, map, booking widget, etc.)

### Services / Offerings
- [ ] Complete list of all services or products
- [ ] Full descriptions
- [ ] Pricing structure (if displaying)
- [ ] Process or methodology per service
- [ ] Before/after examples, case studies, or results

### Testimonials
- [ ] Minimum 6 testimonials for launch (name, role/company, quote, photo if available)
- [ ] Permission to use each testimonial confirmed
- [ ] Star rating or platform source (Google, Houzz, Yelp, etc.)

### Analytics & Tracking
- [ ] Google Analytics 4 property — existing or create new
  - Need Google account access or create under their account
- [ ] Google Search Console — existing or set up new
- [ ] Any other tracking: Meta Pixel, LinkedIn Insight, etc.
- [ ] Confirm GA4 measurement ID before build

### Contact / Lead Forms
- [ ] All form types needed (contact, quote request, booking, etc.)
- [ ] Fields for each form (detailed — don't assume)
- [ ] Dropdown/select options for each form
- [ ] CRM integration needed? (HubSpot, Mailchimp, etc.)
- [ ] Where do submissions route? (email + CRM)
- [ ] Auto-reply email needed?
- [ ] Form backend: Formspree Pro, Netlify Forms, or custom

### SEO — Advanced
- [ ] Target keywords per page (primary + 2–3 secondary)
- [ ] Geographic targets (city, metro, state, national?)
- [ ] Existing domain authority / backlinks to preserve (if migrating)
- [ ] Competitors to outrank — note their domains
- [ ] Google Business Profile — existing? Needs optimization?
- [ ] Schema markup needed (LocalBusiness, Service, Review, FAQ, etc.)

### Hosting & Domain
- [ ] Current host (if migrating)
- [ ] Domain registrar + login access
- [ ] Preferred host for new site (Netlify, Cloudflare Pages, or managed hosting)
- [ ] Email hosting (do NOT disrupt existing email when switching DNS)
  - Get current MX records before touching DNS
- [ ] SSL certificate (auto via host or custom)
- [ ] Backup strategy confirmed

### Social Media
- [ ] All platform URLs
- [ ] Open Graph image (1200×630px) for social sharing previews
- [ ] Confirm social profiles are complete and consistent before launch

---

## Phase 3 — Design Phase (Before Any Code)

- [ ] Deliver wireframes or design mockups (Figma, PDF, or HTML prototype)
  - Home page mockup minimum; key interior pages recommended
- [ ] Customer approves layout, typography, and color direction in writing
- [ ] Revise until approved — do not write production code before design sign-off
- [ ] Confirm all content is final or locked before build begins

---

## Phase 4 — Build Checklist

### Setup
- [ ] Project folder + Git repo initialized
- [ ] Local dev server running
- [ ] CSS variable system: all colors, fonts, spacing, shadows, radii defined
- [ ] Font loading optimized (`preconnect` + `display=swap`)
- [ ] Base layout / grid established

### Pages & Sections
- [ ] Every page in the approved sitemap built
- [ ] Every page responsive at 375px, 768px, 1024px, 1440px
- [ ] All copy live (no Lorem Ipsum at launch)
- [ ] All images placed (no placeholders at launch)

### Design Quality
- [ ] Animations: page-load stagger, scroll-reveal, hover states on all interactives
- [ ] Every button/link has hover, focus-visible, and active states
- [ ] Typography scale consistent across all pages
- [ ] Shadows, borders, and radii consistent with design system
- [ ] No default browser styling leaking through

### Components (all pages)
- [ ] Sticky navbar — shrinks on scroll, mobile hamburger
- [ ] Footer — logo, full nav, contact, social, legal links, copyright
- [ ] 404 page — branded, links back to home
- [ ] Cookie banner (if tracking pixels are used)

### Forms
- [ ] All forms connected and tested
- [ ] All fields validated (required, format checks)
- [ ] Success and error states visible and styled
- [ ] Submissions confirmed arriving at correct destination
- [ ] Auto-reply confirmed (if set up)

### SEO — Technical
- [ ] `<title>` unique on every page (format: `Page Name | Brand Name`)
- [ ] `<meta description>` unique on every page
- [ ] `<html lang="">` set
- [ ] Canonical tags on all pages
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`)
- [ ] Twitter Card tags
- [ ] Schema markup implemented (LocalBusiness minimum)
- [ ] `robots.txt` present
- [ ] `sitemap.xml` generated and submitted to Search Console
- [ ] No broken internal links
- [ ] All images have descriptive `alt` attributes
- [ ] Page load time under 3 seconds (test with PageSpeed Insights)
- [ ] Core Web Vitals passing (LCP, CLS, FID)

### Analytics
- [ ] Google Analytics 4 tag on every page
- [ ] GA4 verified receiving data
- [ ] Google Search Console domain verified
- [ ] Sitemap submitted to Search Console
- [ ] Goal/conversion events configured in GA4 (form submit, click-to-call, etc.)

### Accessibility
- [ ] Color contrast AA compliant (use WebAIM Contrast Checker)
- [ ] All images have alt text
- [ ] All form fields have associated `<label>` elements
- [ ] Tab order logical across all pages
- [ ] Skip-to-content link present

---

## Phase 5 — Pre-Launch QA

- [ ] Test every page in Chrome, Safari, Firefox, Edge
- [ ] Test every page on iOS Safari and Android Chrome
- [ ] Test every form end-to-end on live domain
- [ ] Test all external links open correctly
- [ ] Verify analytics firing on live domain
- [ ] Run PageSpeed Insights on Home + 2 key pages
- [ ] Run Google Rich Results Test on schema markup
- [ ] Spell-check all copy

---

## Phase 6 — Revision Rounds

Unlimited revisions within the agreed scope. Out-of-scope changes (new pages, new features, copy rewrites) are quoted separately.

- [ ] Send staging link after each major phase
- [ ] All feedback collected in writing (email preferred)
- [ ] Change log maintained — both parties sign off before launch

---

## Phase 7 — Launch

- [ ] DNS switched to production host
- [ ] SSL confirmed active (HTTPS)
- [ ] Old redirects set up (if migrating from existing site — 301s for all old URLs)
- [ ] No broken links on live domain
- [ ] All forms tested on live domain
- [ ] Analytics confirmed on live domain
- [ ] Search Console property verified on live domain
- [ ] Sitemap resubmitted post-launch
- [ ] Social sharing previews verified (use Facebook Debugger + Twitter Card Validator)
- [ ] Announce launch (customer's responsibility, but remind them)

---

## Phase 8 — Handoff & Ongoing

- [ ] Deliver all login credentials securely (hosting, Analytics, Search Console, domain)
- [ ] Deliver source files (HTML, assets, any design files)
- [ ] Provide written maintenance guide (how to update content, add posts, change hours, etc.)
- [ ] Set up hosting management if on retainer
- [ ] Schedule first monthly check-in (performance review, analytics walkthrough)
- [ ] Document any known future needs or roadmap items

---

## Monthly Retainer Scope (if ongoing)
Confirm in writing what is included:
- [ ] Content updates (text, images, prices)
- [ ] Blog post publishing
- [ ] Monthly analytics report
- [ ] Uptime monitoring
- [ ] Security/dependency updates
- [ ] SEO keyword tracking and adjustments
- [ ] Priority response time (define SLA — e.g. 24 hours)

---

## Pricing Notes
- Base price $2,500+ — scope drives final number
- Additional pages beyond ~10: quote per page
- Copywriting: quote separately if you're writing all copy
- Photography: refer out or quote separately
- CRM/booking integrations: quote separately
- Ongoing retainer: $100–$500/mo depending on scope
