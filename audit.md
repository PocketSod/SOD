# PocketSod.com — Site Audit
**Date:** June 2026  
**Audited by:** Claude (Sonnet 4.6)  
**Site:** https://pocketsod.com — Veteran-owned web design agency for small businesses

---

## 1. High-Level Summary

**Site type:** Service business / agency (single-page portfolio + blog + quote funnel)

**Clarity:** Value prop is clear within seconds — affordable web design, veteran-owned, bilingual EN/ES.

### Top 3 Strengths
1. Transparent, flat pricing displayed prominently — rare among agencies, major trust-builder
2. Real, specific testimonials with client names and company names
3. Bilingual EN/ES toggle — genuine differentiator, underserved market

### Top 3 Weaknesses
1. **Two competing quote paths** — desktop nav CTA → `start.html`, mobile nav + all in-page CTAs → `#contact`. Silently confusing.
2. **Portfolio subdomains** (`azpowerwash.pocketsod.com`, `delara.pocketsod.com`) look like demo sites, not live client sites — undermines social proof
3. **Critically unoptimized images** — favicon is 1.1MB, portfolio thumbnails average 600–900KB each

---

## 2. UX & Information Architecture

### Navigation Issues
- Section order should be: About → Packages → Portfolio → **Process** → **Testimonials** → Blog → CTA (currently Testimonials before Process)
- "Get a Quote" links to `start.html` on desktop but `#contact` on mobile — needs to be consistent
- "Add-Ons" section not in navigation despite being a full scroll section

### Page Structure Issues
- Add-Ons appears between Packages and Portfolio — interrupts evaluation flow
- Stats bar appears before About explains the company — lacks context
- Contact form at bottom duplicates the wizard — two parallel lead capture mechanisms

### User Journey Friction
1. Package "Get Started" CTAs → `#contact` — user jumps past Portfolio and Testimonials
2. `start.html` wizard is excellent UX but underlinked (only reachable from desktop nav)
3. Blog post CTAs → `pocketsod.com/#contact`, not the wizard

**Fix:** All primary CTAs → `start.html`. Package CTAs deep-link: `start.html?package=Starter` etc.

---

## 3. Copy & Messaging

### Value Proposition
**Current H1:** "Your Business. Online. Affordable." — Generic; any agency could say this.

**Suggested H1:** "A Professional Website for Your Small Business — in 14 Days."  
**Suggested sub:** "Fixed prices starting at $500. No jargon, no surprises. Veteran-owned and we show up when we say we will."

### Stats Bar Issues
- "★ Vet" — not a number, awkward display
- "100% Satisfaction Focus" — "Focus" is intention not outcome. Replace with "5-Star Rated"
- "14 Day Avg Launch" needs context: add "(from kickoff)"

### Copy Improvements
- About bullet: "Responsive design that works on every device" → "Looks great on phones — where 70% of your customers browse"
- About bullet: "Veteran-owned: disciplined, accountable, mission-focused" → "Veteran-owned: we meet deadlines and mean what we say"
- Testimonials subtitle: "What the people we've built sites for actually said" → "Client results, in their own words" (word "actually" implies fake review skepticism)
- Blockquote attributed to "PocketSod LLC" is a company quoting itself — attribute to founder by name or use a client quote

### Features vs. Benefits
"1 revision round" in Starter package reads as a limitation. Remove it or reframe as "Revisions included until you love it."

---

## 4. Visual Design & UI

### Issues
- **Hero image is the logo** — logos don't communicate value. Replace with a polished screenshot of a client site or before/after comparison.
- **No founder/team photo** — a face is the highest-converting trust element for a one-person service business
- Add-Ons section looks visually similar to Packages — differentiate

### Readability
- Body text at 0.95rem in some areas — use 16px minimum
- Footer links at `rgba(255,255,255,0.6)` on dark background at 14px fail WCAG AA
- Long testimonial quotes need visual scanning help

---

## 5. Conversion Rate Optimization (CRO)

### CTA Issues
- All three package "Get Started" buttons → `#contact`, not wizard. Fix: `start.html?package=Starter` etc.
- Hero secondary CTA "See Packages" is just a scroll cue — replace with "View Our Work" → `#portfolio`
- CTA copy "Get Started" (×3) is generic — use "Start My Custom Quote →"

### Trust Gaps
- No photos of clients alongside testimonials
- No Google review count / star rating linked
- Two portfolio items on pocketsod.com subdomains look like demo sites — add clarifying copy
- No satisfaction guarantee or revision policy stated anywhere

### Unanswered Objections
1. "What if I don't have a logo or photos?"
2. "What platform? Can I update it myself?"
3. "Are these real clients or demo sites?"
4. "What happens if I'm not happy?"

---

## 6. SEO

### Technical Issues
- No `sitemap.xml` — add and submit to Google Search Console
- No `robots.txt` — add
- Schema `sameAs: []` is empty — add LinkedIn and Facebook URLs
- `brand_assests/` folder is misspelled (should be `brand_assets`) — baked into all file paths
- `foundingDate: "2026"` — a 2026-founded business has no track record

### Content Gaps (Suggested Posts)
1. "Best website for a plumber / home service business" — high-volume industry keyword
2. "How to get your small business on Google Maps" — bridges to SEO add-on
3. "Do I need a website if I have a Facebook page?" — addresses common objection
4. "Bilingual website for small business: why EN/ES matters in 2026" — targets the differentiator
5. "Website maintenance: what's included and why it matters" — supports monthly plan upsell

### Internal Linking
- Blog posts have no contextual links to each other or to service sections
- No "Read next" section at end of posts

---

## 7. Accessibility

### Issues
- Star ratings rendered as `★★★★★` text — add `<span class="sr-only">5 out of 5 stars</span>`
- Footer link contrast (`rgba(255,255,255,0.6)`) at 14px fails WCAG AA — increase to 0.8+
- Decorative emoji need `aria-hidden="true"`

### Already Good
- Skip link implemented ✓
- Hamburger has `aria-label` and `aria-expanded` ✓
- Form fields have associated `<label>` elements ✓
- Honeypot spam field properly hidden ✓

---

## 8. Performance

### Image File Sizes (Critical)

| File | Actual Size | Target |
|---|---|---|
| favicon.png | **1,193 KB** | < 50 KB |
| thumb-azpowerwash.png | **944 KB** | < 200 KB |
| thumb-clj.png | **792 KB** | < 200 KB |
| thumb-casaespana.png | **625 KB** | < 200 KB |
| thumb-toolsandtable.png | **499 KB** | < 200 KB |
| PSlogo.png | **171 KB** | < 50 KB |
| PSlogo6.png | **113 KB** | < 50 KB |
| thumb-delara.png | **102 KB** | < 200 KB |

**Total image payload: ~4.4 MB.** Convert to WebP + compress. Target: < 800 KB total.

### Already Good
- `loading="lazy"` on portfolio images ✓
- `fetchpriority="high"` on LCP image ✓
- `preconnect` for Google Fonts ✓
- GA4 loaded with `async` ✓

---

## 9. Prioritized Action Plan

### Tier 1 — High Impact, Low/Medium Effort (Do First)

| # | Issue | Fix | Effort |
|---|---|---|---|
| 1 | Images: favicon 1.1MB, thumbnails 500–944KB | Compress + convert to WebP; replace favicon with 32px PNG | Low |
| 2 | Two competing quote paths | All primary CTAs → `start.html`; wizard reads `?package=` URL param | Low |
| 3 | Package CTAs go to `#contact` not wizard | `href="start.html?package=Starter"` etc. | Low |
| 4 | Testimonials subtitle "actually said" | → "Client results, in their own words." | Low |
| 5 | Star ratings not screen-reader friendly | Add `<span class="sr-only">5 out of 5 stars</span>` | Low |
| 6 | Footer link contrast fails WCAG AA | Increase opacity 0.6 → 0.8 | Low |
| 7 | `sameAs: []` empty in Schema | Add LinkedIn + Facebook URLs | Low |
| 8 | No sitemap.xml / robots.txt | Generate and add both | Low |

### Tier 2 — High Impact, High Effort

| # | Issue | Fix | Effort |
|---|---|---|---|
| 9 | No founder/team photo | Add headshot to About section with name attribution | Medium |
| 10 | Portfolio subdomains look like demos | Add clarifying copy or move clients to their own domains | Medium |
| 11 | Hero visual is a logo, not proof of work | Replace with client site screenshot or before/after | Medium |
| 12 | No FAQ | Add collapsible FAQ below Packages | Medium |
| 13 | Blog has only 2 posts | Publish 5–10 posts targeting industry-specific keywords | High |

### Tier 3 — Medium Impact, Low Effort (Quick Wins)

| # | Issue | Fix | Effort |
|---|---|---|---|
| 14 | Testimonials before Process in page order | Swap: Process → then Testimonials | Low |
| 15 | "★ Vet" and "100% Satisfaction Focus" are weak stats | Replace with "5-Star Rated" and styled "Veteran Owned" chip | Low |
| 16 | "1 revision round" framed as limitation | Remove or reframe: "Revisions until you love it" | Low |
| 17 | About blockquote attributed to company itself | Attribute to founder by name, or use client quote | Low |
| 18 | Decorative emoji lack `aria-hidden` | Add `aria-hidden="true"` to all decorative emoji | Low |
| 19 | No internal links within blog posts | Add contextual cross-links between articles | Low |

### Tier 4 — Nice to Have

| # | Issue | Fix | Effort |
|---|---|---|---|
| 20 | `brand_assests/` folder misspelled | Mass rename to `brand_assets` across all files | Medium |
| 21 | `<meta name="keywords">` is obsolete | Remove from homepage | Low |
| 22 | No Google Business Profile link | Add to footer | Low |
| 23 | Blog posts missing `<time>` elements | Add `<time datetime="...">` for freshness signals | Low |

---

## Top 5 Highest-ROI Actions

1. **Compress images** — biggest single performance win, affects every page load (~4.4MB → <800KB)
2. **Unify CTAs to the wizard** — higher lead quality, structured intake data, removes user confusion
3. **Add founder photo** — faces convert; especially powerful for veteran-owned trust positioning
4. **Publish 3+ targeted blog posts** — compound SEO traffic over time
5. **Wire schema `sameAs`** — free trust and SEO signal, 5-minute fix
