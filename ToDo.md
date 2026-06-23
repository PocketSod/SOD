# PocketSod — Website Improvement To-Do
**Last updated:** 2026-06-19

---

## Tier 1 — High Impact, Do First

- [ ] **Submit sitemap to Google Search Console** — go to search.google.com/search-console, add `pocketsod.com` as a property, submit `https://pocketsod.com/sitemap.xml`, then request indexing for each of the 5 URLs individually
- [ ] **Verify www → non-www 301 redirect** — confirm `www.pocketsod.com` redirects to `pocketsod.com` (check in your host: GitHub Pages / Netlify)
- [ ] **Add meta descriptions to both blog posts** — see copy below:
  - Cost article: *"A freelancer, boutique studio, or DIY builder — here's what a small business website actually costs in 2026, with honest breakdowns and no-surprise pricing."*
  - 5 Things article: *"Mobile-first design, local SEO, fast load times — the five things every small business website needs before going live. Practical guidance, no fluff."*
- [ ] **Replace "100% Satisfaction Focus" badge** — swap for "50+ Clients Served" or a real Google Reviews star rating with a link
- [ ] **Remove the 7-field contact form from the homepage** — replace with just phone number, email address, and a single "Get a Free Quote →" button pointing to `/start.html`
- [ ] **Rewrite hero headline** — current: *"Your Business. Online. Affordable."* — suggested: *"A Pro Website. No Agency Prices. No Ghosting After Launch."*
- [ ] **Add FAQ section** — place between Testimonials and Process sections; suggested questions:
  - What if I need changes after the site launches?
  - What do I need to provide to get started?
  - Do you work with my type of business?
  - How long does it actually take?
  - What if I'm not happy with the design?
  - Are there any recurring fees?
  - Do you offer payment plans?
  - What's included in ongoing support?

---

## Tier 2 — High Impact, Higher Effort

- [ ] **Create Google Business Profile** — go to business.google.com, claim `pocketsod.com`, add phone, address, service area (All 50 States), hours, and photos. This is also the #1 backlink source.
- [ ] **Build directory citations** — submit to: Yelp, BBB, LinkedIn Business Page, Facebook Business Page, veteran-owned business directories (e.g., veteranownedbusiness.com, VetBiz)
- [ ] **Add portfolio visuals** — add a screenshot or device-frame mockup image to each of the 5 portfolio cards; link each card to the live client site
- [ ] **Write 3 new blog posts** — target these topics:
  1. "Wix vs. Squarespace vs. a Custom Website: What's Right for Your Small Business?"
  2. "How to Get Your Small Business Found on Google in 2026"
  3. "How to Choose a Web Designer (Without Getting Burned)"
- [ ] **Add 2–3 mini case studies to portfolio section** — one paragraph each: client situation, what was built, one measurable result (e.g., "First lead within 3 days of launch")

---

## Tier 3 — Quick Wins (Low Effort)

- [ ] **Rename "Process" → "How It Works"** in navigation and the section heading
- [ ] **Rewrite About section as benefits, not features** — see before/after table in audit.md §3
- [ ] **Move company quote to the hero area** — *"We build websites the same way we served — with discipline, attention to detail, and no excuses."* — currently buried; should be prominent near the top
- [ ] **Add EN/ES language toggle to homepage header** — currently only on blog pages
- [ ] **Update homepage title tag** — change to: `Affordable Small Business Web Design Starting at $500 | PocketSod`
- [ ] **Add internal links to blog posts:**
  - Cost article: link "freelancer-built" → `/#packages`; link "hidden costs" → 5 Things article
  - 5 Things article: link "fast load times" → Cost article
- [ ] **Add source citations to blog post statistics** — link "60% of traffic is mobile," "53% leave after 3 seconds," etc. to Think with Google or original studies
- [ ] **Add `aria-hidden="true"` to decorative emoji** — ★, ⭐, 🇺🇸, ⚡, 💬 in trust badges so screen readers skip them

---

## Tier 4 — Nice-to-Have

- [ ] **Create standalone `/about` and `/portfolio` pages** — currently both return 404; at minimum add 301 redirects to `/#about` and `/#portfolio`
- [ ] **Add testimonial photos or company logos** — even initials in a styled avatar improves credibility
- [ ] **Add a Google Reviews embed or link** in the testimonials section to prove ratings are real
- [ ] **Add email newsletter capture** — simple opt-in with a lead magnet (e.g., "Free Website Launch Checklist")
- [ ] **Add JSON-LD schema markup** — `LocalBusiness` on homepage, `BlogPosting` on each article
- [ ] **Run PageSpeed Insights** on homepage and both blog posts; target 90+ mobile score
- [ ] **Convert portfolio images to WebP** — compress to ≤150KB each; add `loading="lazy"`
- [ ] **Rename `start.html` to `/quote`** — cleaner URL; set up a redirect from the old path

---

## Completed

- [x] **Fix robots.txt sitemap URL** — removed `www.` mismatch *(2026-06-19)*
- [x] **Fix sitemap blog post `changefreq`** — changed from `yearly` to `monthly` *(2026-06-19)*
- [x] **Remove `start.html` from sitemap** — page is intentionally `noindex`; sitemap conflict caused GSC error *(2026-06-19)*
