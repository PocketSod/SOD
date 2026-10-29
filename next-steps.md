# PocketSod — Next Steps

## ✅ Completed

- **Contact form** — EmailJS integration wired up, sends to contact@pocketsod.com
- **Email** — Updated to contact@pocketsod.com across all pages (Porkbun forwarding to Gmail)
- **Google Search Console** — Sitemap submitted at search.google.com/search-console
- **Testimonials section** — 3 real quotes live (Lara D. / DeLara, Alex Z. / AZ Powerwash, Maria W. / Casa España Indiana)
- **Real favicon** — brand_assests/favicon.png (denim pocket icon)
- **Real OG image** — brand_assests/OG.png (1200×630 branded share card)
- **Portfolio screenshots** — Live site captures for all 4 portfolio cards
- **Testimonials nav link** — Added to desktop nav, mobile menu, and footer
- **Blog post** — "5 Things Every Small Business Website Needs" at /blog/5-things-every-small-business-website-needs.html
- **Blog post** — "How Much Does a Small Business Website Cost in 2026?" at /blog/how-much-does-a-small-business-website-cost-2026.html
- **Get a Quote intake page** — 3-step wizard at /start.html (EmailJS wired, nav CTA links here)
- **Social media footer links** — LinkedIn, Facebook, Instagram linked in footer Contact column
- **Social post cards (Posts 1–6)** — Published across LinkedIn, Instagram, Facebook (completed 2026-05-06)
- **Weekly social posts, batch 1** — 4 weeks × EN/ES cards in `social-weekly.html`, auto-published to Facebook + Instagram by the daily "Weekly social posts" GitHub Action from `social/weekly/posts.json` (Oct 20 – Nov 12, 2026; set up 2026-10-16)
- **Weekly social posts, batch 2** — weeks 5–8 (Nov 17 – Dec 10, 2026; ES post moved to Wed Nov 25 for Thanksgiving)

---

## 🔲 Needs Your Action (manual tasks)

**1. Check Google indexing**
Search `pocketsod llc` on Google. If still not showing, go to Search Console → URL Inspection → Request Indexing again. Root cause (Porkbun redirect loop to pocketsod-com.l.ink) was fixed 2026-04-17.

**2. Ask clients for Facebook recommendations**
First make sure recommendations are turned on for the PocketSod Page (Page → Settings → Privacy / Reviews). Then ask Lara D., Alex Z., and Maria W. to post their existing testimonials as recommendations on the Page — send each a direct link. They show beside the weekly posts and need no business address. (PocketSod doesn't qualify for a Google Business Profile, so Google reviews aren't an option. Later: Clutch.co is the review site built for web design agencies.)


**4. Get listed on veteran and Hispanic business directories**
Free visibility in directories that serve your two core audiences:
- VetBiz.gov (SBA Veteran-Owned Small Business registry)
- SAM.gov (federal contractor registry — optional but credible)
- Local Hispanic Chamber of Commerce — reach out for a free member listing

---

## 🔲 Remaining Build Tasks (Claude can do these)

**⏰ Next weekly social batch — due by Mon Dec 7, 2026**
Batch 2 ends with the Dec 10 post; after that nothing is scheduled and posting stops. Ask Claude for "the next 4 weeks of social posts": it adds new cards to `social-weekly.html`, exports them, appends dated entries to `social/weekly/posts.json`, and pushes. Same rotation: client spotlight → pricing → tip → client review, EN on Tuesday, ES on Thursday.

**6. Per-client case study pages**
Brief pages for DeLara, AZ Powerwash, and Casa España Indiana — "the problem / what we built / the result." Rank for client name searches and serve as sales material.

**7. More blog posts**
Additional articles build SEO authority over time. Remaining ideas:
- "Why Your Business Needs a Bilingual Website"
- "5 Signs It's Time to Redesign Your Small Business Website"

**8. More social post cards**
Two more cards would round out the launch series:
- Veteran story card (Instagram/LinkedIn square) — personal founding story, builds trust
- Client win "before/after" card (Instagram) — show a real result with a quote

**9. Custom 404 page**
A branded error page that redirects lost visitors back to the homepage instead of a generic GitHub 404.

**10. Open Graph images for blog posts**
Both blog posts currently use the main OG.png. Custom article cards (1200×630) would look better when shared on social — one per post.
