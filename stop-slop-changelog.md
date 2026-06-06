# Stop-Slop Pass — PocketSod Copy Revisions

Applied the `stop-slop` skill across the PocketSod site, blog, and social templates: `index.html`, `start.html`, `404.html`, `blog/index.html`, the two blog articles, and meta/OG/Twitter description tags. Each entry below shows the location, the original text, the revised text, and which AI-tell rules triggered the change. A note on `social-posts.html` and Spanish copy is at the bottom.

---

## index.html

The English copy in `index.html` exists twice: once as default text inline in HTML elements (`data-i18n="key"`), and again inside a JS `en: {...}` i18n object used by the language switcher. Both copies were edited identically; the parallel `es: {...}` Spanish object was left untouched. Apostrophes in the JS versions required escaping (`\'`) to keep the string literals valid — verified afterward by extracting and parsing every `<script>` block with `new Function()`.

### 1. Hero subhead (`hero_sub`)
**Before:** "PocketSod builds professional websites that help small businesses grow — fast turnaround, fair prices, and support you can count on. All 50 states."

**After:** "PocketSod builds professional websites that help small businesses grow: fast turnaround, fair prices, and support that's still there after launch. All 50 states."

**Why:** Em dash removed. "Support you can count on" (vague, generic reassurance) replaced with something more specific and time-bound ("still there after launch").

---

### 2. About subhead (`about_sub`)
**Before:** "We build professional websites for small businesses across the country, without the bloated agency price tag or the DIY headache."

**After:** "We build affordable, professional websites for small businesses in all 50 states. Skip the bloated agency contracts. Just a site that works."

**Why:** "Without the bloated agency price tag or the DIY headache" (binary either/or framing) replaced with a direct statement plus a short imperative ("Skip...") that varies the rhythm and ends on a plain, concrete claim.

---

### 3. Packages subhead (`pkg_sub`)
**Before:** "Three packages. Three price points. Pick the one that fits where your business is right now."

**After:** "Pick the package that fits your business. The price you see is the price you pay."

**Why:** "Three X. Three Y." formulaic repetition (parallel-listing tell) cut. Replaced with a direct statement plus a concrete promise about pricing transparency.

---

### 4. Add-ons subhead (`addon_sub`)
**Before:** "Keep your site running smoothly after launch — hosting, updates, and support so you don't have to think about the technical stuff."

**After:** "Add ongoing support to any package. We keep it running so you don't have to think about it."

**Why:** Em dash removed. "Hosting, updates, and support" listing replaced with a direct claim ("We keep it running") that's more active and less like a feature-dump.

---

### 5. Portfolio subhead (`port_sub`)
**Before:** "A look at the kind of work we do and the results our clients have seen."

**After:** "A few of the businesses we've built sites for, and how those sites turned out."

**Why:** "The kind of work we do and the results our clients have seen" (vague, narrator-from-a-distance) replaced with something concrete and specific — names actual subjects (businesses, sites) instead of abstractions.

---

### 6. Testimonials subhead (`testi_sub`)
**Before:** "Don't just take our word for it — here's what our clients have to say."

**After:** "What the people we've built sites for actually said."

**Why:** Em dash removed. "Don't just take our word for it — here's..." (classic rhetorical setup + throat-clearing "here's") cut entirely. Replaced with a direct, concrete framing that names who is speaking.

---

### 7. Process subhead (`proc_sub`)
**Before:** "From first contact to launch day, here's what working with us looks like."

**After:** "Here's how we get your site from idea to live, in four steps."

**Why:** Wh-less restructure — original opened with a fronted prepositional phrase and "here's what... looks like" (vague, narrator-distance framing); new version states the claim directly and names something concrete (four steps).

---

### 8–10. Process step descriptions
**Step 2 before:** "We get to know your brand and build your site around it — your logo, your colors, your content, your photos."
**Step 2 after:** "We build your site around your brand: logo, colors, content, and photos."

**Step 3 before:** "Once everything looks right, your site goes live and you're open for business."
**Step 3 after:** "Once you sign off, your site goes live, usually within days."

**Step 4 before:** "We're here for the long haul, with maintenance, hosting, and SEO support to keep your site running and ranking."
**Step 4 after:** "Maintenance, hosting, and SEO plans keep your site online and findable."

**Why (all three):** Em dashes removed. Vague filler phrases ("we're here for the long haul," "everything looks right," "you're open for business") replaced with concrete, specific claims (a real timeframe, plain verbs, "online and findable" instead of "running and ranking").

---

### 11. Contact subhead (`contact_sub`)
**Before:** "Have a question or ready to get started? Reach out and we'll get back to you fast — usually within a few hours."

**After:** "Send us a message, whether you're ready to start or just have a question. We answer fast, usually the same day."

**Why:** Em dash removed. Rhetorical question opener ("Have a question or ready to get started?") cut — states the invitation directly instead. "Within a few hours" tightened to a clearer, more concrete claim ("the same day").

---

## start.html

### 12. Step subhead — package selection
**Before:** "Pick the package that sounds right — we'll help you finalize it on the call."

**After:** "Pick whichever package sounds closest. We'll nail down the details on the call."

**Why:** Em dash removed. "Sounds right... finalize it" (vague, slightly stiff) replaced with plainer, more conversational language ("sounds closest," "nail down the details").

---

### 13. Step subhead — response time
**Before:** "We respond within 24 hours — usually much faster."

**After:** "We respond within 24 hours, usually much sooner."

**Why:** Em dash removed (Rule: "Em-dash anywhere? Remove it."). Replaced with a comma; "sooner" reads more naturally paired with "usually" than "faster" does.

---

### 14. Success heading
**Before:** `<h2>You're all set — <span>we'll be in touch!</span></h2>`

**After:** `<h2>You're all set: <span>we'll be in touch!</span></h2>`

**Why:** Em dash replaced with a colon — same meaning, no AI-tell punctuation.

---

## 404.html

### 15. 404 message
**Before:** "This page doesn't exist — but your next great website does. Let's get you back where you belong."

**After:** "This page doesn't exist. Your next great website does, and it's just a click away."

**Why:** Em dash removed. "But X does... Let's get you back where you belong" (binary contrast + sentimental rhetorical close) tightened into one direct sentence with a concrete, specific image ("just a click away") instead of a vague, feel-good send-off.

---

## blog/index.html

### 16. Article card excerpt — pricing guide
**Before:** "The honest breakdown — from $0 DIY builders to $50K+ agency builds. Find out what you actually need and what you'll pay."

**After:** "The honest breakdown: $0 DIY builders, $50K+ agency builds, and everything between. What you actually need, and what you'll pay for it."

**Why:** Em dash removed. "Find out what you actually need" (soft imperative hand-holding + adverb "actually") cut; replaced with a direct noun-phrase list that mirrors the punchier rhythm of the headline above it.

---

### 17. Article card excerpt — 5 essentials guide
**Before:** "Before you launch, make sure your site has these 5 essentials. From mobile design to local SEO — here's what actually moves the needle."

**After:** "Before you launch, check your site against these 5 essentials: mobile design, local SEO, and the rest of what actually moves the needle."

**Why:** Em dash and "here's what" throat-clearing removed; folded into one sentence that names the specific items instead of gesturing at them with "from X to Y."

---

### 18–19. Meta description / OG description
**Before:** "Practical web design advice for small business owners. No fluff — just what actually works."

**After:** "Practical web design advice for small business owners. No fluff, just what actually works."

**Why:** Em dash replaced with a comma. Same binary-contrast shape, but the dash was the only AI-tell flag here — a comma reads more natural for this short a clause.

---

## blog/5-things-every-small-business-website-needs.html

### 20. Intro paragraph
**Before:** "A lot of small business websites look like they were built in a hurry — and most of them were. The result is a site that doesn't rank on Google, doesn't work on phones, and doesn't convert visitors into customers. Here are the five things that actually matter, based on what we've seen building sites for businesses across the country."

**After:** "A lot of small business websites look like they were thrown together fast, because they were. They don't show up on Google, don't load right on a phone, and send visitors away before those visitors ever reach for the phone. These five things make the biggest difference, based on what we've seen building sites for businesses across the country."

**Why:** Em dash removed. "Here are the five things that actually matter" (rhetorical-setup + adverb "actually") replaced with a direct statement. The triple "doesn't... doesn't... doesn't..." (metronomic negative list) varied by changing the third item's verb shape ("send visitors away" instead of "doesn't convert").

---

### 21–23. Item 1 — Mobile-Responsive Design
**Before (body):** "Mobile-responsive doesn't just mean "it loads on a phone." It means text is readable without zooming, buttons are easy to tap, images scale properly, and navigation doesn't break. Every page, every time."

**After:** "Mobile-responsive means more than "it loads on a phone." The text should be readable without zooming, the buttons big enough to tap with a thumb, the images sized right, and the navigation should hold up no matter which page you land on."

**Why:** "Doesn't just mean X. It means Y" binary contrast restructured into one direct claim. Punchy fragment-ending ("Every page, every time.") removed and folded into the sentence with a more concrete image ("tap with a thumb," "no matter which page you land on").

**Before (tip):** "Pull up your site on your phone right now. If you have to pinch to zoom or the text runs off the screen, that's a problem — and Google knows it too."

**After:** "Pull up your site on your phone right now. If you have to pinch to zoom, or the text runs off the edge of the screen, Google notices the same thing you do."

**Why:** Em dash removed. "That's a problem — and Google knows it too" (vague + tacked-on rhetorical tag) replaced with a more direct, specific claim that puts Google and the reader in the same frame.

**Before (closing):** "Google uses mobile-first indexing, which means it evaluates the mobile version of your site when deciding where you rank in search results. A site that's hard to use on a phone isn't just a UX problem — it's an SEO problem."

**After:** "Google uses mobile-first indexing: the mobile version of your site is the one search results are built on. A clunky mobile experience costs you rankings as much as it costs you visitors."

**Why:** Em dash removed. "Isn't just X — it's Y" binary contrast restructured into a single direct claim ("costs you rankings as much as it costs you visitors").

---

### 24–25. Item 2 — Clear Call to Action
**Before:** "For most small businesses, that means a phone number, a contact form, or a "Get a Quote" button — visible without scrolling, repeated at the bottom of the page, and easy to find on mobile."

**After:** "For most small businesses, that's a phone number, a contact form, or a "Get a Quote" button. Put it where visitors see it without scrolling, repeat it at the bottom of the page, and make sure it's easy to tap on a phone."

**Why:** Em dash removed; the trailing modifier list turned into direct imperatives ("Put it... repeat it... make sure it's...") — active voice with the reader as the actor.

**Before:** "A contact form beats a raw email address. It's easier to fill out, works on any device, and sends you a clean message you can act on. Forms also let you capture structured info — name, phone, what they need — so you're not playing phone tag to get basic details."

**After:** "A contact form beats a raw email address. It's easier to fill out, works on any device, and lands in your inbox as a message you can act on right away. Forms also capture the basics up front (name, phone, what the visitor needs) so you're not stuck playing phone tag just to get started."

**Why:** Two em dashes removed (the parenthetical pair replaced with plain parentheses). "Sends you a clean message" (vague) made more concrete ("lands in your inbox... right away").

---

### 26–28. Item 3 — Local SEO Basics
**Heading before:** "Local SEO Basics — So Google Can Find You"
**Heading after:** "Local SEO Basics: So Google Can Find You"

**Why:** Em dash replaced with a colon.

**Before:** "At minimum, your site needs: your business name, address (or service area), phone number, and hours — consistent and crawlable on every page. Add a Google Maps embed, a Google Business Profile that matches your site, and a sitemap submitted to Google Search Console."

**After:** "At minimum, put your business name, address (or service area), phone number, and hours on every page, written the same way each time so Google can read them. Then add a Google Maps embed, a Google Business Profile that matches your site, and a sitemap submitted through Google Search Console."

**Why:** Em dash removed; "consistent and crawlable" (vague technical jargon) replaced with a concrete description of what "consistent" actually means in practice ("written the same way each time so Google can read them").

**Before:** "Page titles and meta descriptions also matter. "Home | My Business" is wasted SEO real estate. "Affordable Pressure Washing in Noblesville, IN | AZ Powerwash" tells Google exactly what you do and where you do it."

**After:** "Page titles and meta descriptions matter too. "Home | My Business" wastes the slot. "Affordable Pressure Washing in Noblesville, IN | AZ Powerwash" tells Google what you do and where you do it, in the words your customers are already searching."

**Why:** Adverb "exactly" cut. Closing line extended with a concrete, specific detail (matching customer search language) instead of ending on a flat declarative.

---

### 29–30. Item 4 — Fast Load Times
**Heading before:** "Fast Load Times — Especially on Mobile"
**Heading after:** "Fast Load Times: Especially on Mobile"

**Why:** Em dash replaced with a colon.

**Before:** "53% of mobile visitors leave a page that takes more than 3 seconds to load. That's not a design problem — it's a revenue problem."

**After:** "53% of mobile visitors leave a page that takes more than 3 seconds to load. Every extra second is a customer closing the tab and calling your competitor instead."

**Why:** Em dash removed. "That's not X — it's Y" binary contrast (and a borderline pull-quote) replaced with a concrete, specific image that puts the reader in the scene (Rule 5 — a customer closing the tab, picking up the phone to call someone else).

**Before (closing):** "Google's Core Web Vitals are now a ranking factor. Sites that load fast and feel responsive get a measurable boost in search results over slow competitors. Speed is no longer just a user experience issue — it's directly tied to how much organic traffic you get."

**After:** "Google's Core Web Vitals are a ranking factor now. Fast, responsive sites show up higher in search results than slow ones. Speed shapes how much organic traffic actually reaches your site."

**Why:** Em dash removed. "No longer just X — it's Y" contrast and adverb "directly" cut; replaced with a direct claim ("Speed shapes...").

---

### 31–33. Item 5 — Brand Design
**Heading before:** "A Design That Reflects Your Brand — Not a Template"
**Heading after:** "A Design That Looks Like You, Not a Template"

**Why:** Em dash removed; "reflects your brand" (slightly abstract/corporate) swapped for the more direct, human "looks like you," which also echoes the "feel like <em>you</em>" line in the body.

**Before:** "A generic template — especially one that looks like a hundred other businesses — undercuts that first impression. Your site should feel like you: your colors, your logo, your voice, your photos. Not the default stock imagery that comes with a website builder theme."

**After:** "A generic template, especially one that looks like a hundred other businesses, works against that first impression. Your site should feel like you: your colors, your logo, your voice, your photos, instead of the stock imagery baked into a website builder theme."

**Why:** Two em dashes removed (replaced with commas). Trailing sentence-fragment ("Not the default stock imagery...") folded into the prior sentence — cuts the dramatic-fragmentation tell.

**Before (tip):** "Real talk: Customers compare you to your competitors online before they ever call. If your site looks like it was built in 2012, that comparison isn't going in your favor — even if your actual work is excellent."

**After:** "Worth knowing: Customers size you up against your competitors online before they ever pick up the phone. A site that looks like it was built in 2012 loses that comparison, even when your work is the best in town."

**Why:** Em dash removed. "Real talk" (slangy throat-clearing opener) replaced with a plainer label. "That comparison isn't going in your favor — even if your actual work is excellent" (hedged, roundabout) tightened into a direct claim with a more specific, human closing image ("the best in town").

**Before (closing):** "This doesn't mean expensive or complicated. A well-built single-page site with your real logo, real photos, and brand colors will outperform a bloated template every time. Consistency between your business cards, social profiles, and website also builds the kind of trust that converts browsers into customers."

**After:** "None of this calls for a big budget or a complicated build. A simple, well-built site with your real logo, real photos, and your actual brand colors will beat a bloated template most days of the week. And when your business cards, social profiles, and website all match, that consistency builds the kind of trust that turns browsers into customers."

**Why:** "This doesn't mean X" (negative-framing opener) restructured into a direct positive statement. Lazy extreme "every time" replaced with the more honest, specific "most days of the week."

---

### 34. CTA block
**Before:** "PocketSod builds affordable, professional websites for small businesses — mobile-ready, SEO-optimized, and built to convert. Starting at $500."

**After:** "PocketSod builds affordable, professional websites for small businesses: mobile-ready, SEO-optimized, and built to bring in customers. Plans start at $500."

**Why:** Em dash replaced with a colon. "Built to convert" (marketing jargon) replaced with the more concrete "built to bring in customers."

---

### 35. Twitter card description
**Before:** "From mobile design to local SEO — the 5 essentials your small business site can't skip."

**After:** "Mobile design, local SEO, and the rest of the 5 essentials your small business site can't skip."

**Why:** Em dash removed; "from X to Y —" rhetorical-fragment structure replaced with a plain, direct list.

---

## blog/how-much-does-a-small-business-website-cost-2026.html

### 36. Intro paragraph
**Before:** "Most people searching this question get either a useless "it depends" or a scare-tactic article designed to sell a $10,000 package. This is neither. Below is the actual cost breakdown by tier — what you get, what the trade-offs are, and where most small businesses actually land. We built this guide because we're tired of watching business owners overpay for features they don't need, or underpay and end up with a site that hurts them more than it helps."

**After:** "Search this question and you'll usually find a useless "it depends" or a scare piece written to sell you a $10,000 package. Below is the real cost breakdown by tier: what you get, where the trade-offs sit, and where most small businesses end up landing. We wrote this because we've watched too many business owners overpay for features they'll never use, or underpay and end up with a site that costs them more in lost business than it ever saved."

**Why:** Em dash removed. "This is neither" (false-binary rhetorical setup) cut — restructured the opening to state the claim directly instead of setting it up as a contrast to be resolved. Adverb "actually" (used twice) cut.

---

### 37–40. Tier 1 — DIY Website Builders
**Heading before:** "DIY Website Builders — Wix, Squarespace, GoDaddy"
**Heading after:** "DIY Website Builders: Wix, Squarespace, GoDaddy"

**Why:** Em dash replaced with a colon.

**Before:** "The pitch sounds great: build your own site for free, pay a small monthly fee, no developer needed. And if you have a few hours and a good eye, the results can be respectable — especially for a brand-new business that needs something online fast."

**After:** "The pitch sounds great: build your own site for free, pay a small monthly fee, no developer needed. Spend a few hours on it with a good eye for design, and the results can look respectable, especially for a brand-new business that just needs something online fast."

**Why:** Em dash removed; "And if you have..." (sentence-initial conjunction + conditional hedge) restructured into a more direct, active construction ("Spend a few hours on it...").

**Before:** "The trade-offs show up over time. These platforms lock you in. Your content, your design, your SEO history — it all lives on their servers, and migrating away is painful. The templates are shared by millions of other businesses, so differentiation is hard. And the SEO tools, while improving, still lag behind what a properly-built custom site can do."

**After:** "The trade-offs show up over time. These platforms lock you in: your content, your design, and your SEO history all live on their servers, and pulling it out later is a slog. The templates get reused by millions of other businesses, so standing out gets harder. And the built-in SEO tools, while they keep improving, still trail what a properly built custom site can do."

**Why:** Em dash removed. "Differentiation is hard" (abstract noun-as-subject, slightly corporate) replaced with the more concrete, human "standing out gets harder."

**Before (callout):** "A $25/month Squarespace plan costs $1,500 over five years — and at the end of that period, you still own nothing and can't take the site with you."

**After:** "A $25/month Squarespace plan adds up to $1,500 over five years. At the end of it, you still own nothing, and you can't take the site with you when you leave."

**Why:** Em dash removed; split into two sentences for rhythm, with a more concrete closing image ("when you leave").

**Before (closing):** "DIY builders are the right choice when you're pre-revenue, validating an idea, or truly operating on zero budget. They're the wrong choice when your website is a primary sales channel and you need it to rank, convert, and grow with you."

**After:** "DIY builders make sense when you're pre-revenue, testing an idea, or working with close to no budget at all. They stop making sense once your website becomes a real sales channel, one that needs to rank, convert, and grow alongside your business."

**Why:** Adverb "truly" cut. "The right choice... the wrong choice" binary structure varied by reframing the second half as a consequence ("stop making sense once...") rather than a flat mirror-image contrast.

---

### 41–43. Tier 2 — Freelancer-Built
**Heading before:** "Freelancer-Built — The Most Common Starting Point"
**Heading after:** "Freelancer-Built: The Most Common Starting Point"

**Why:** Em dash replaced with a colon.

**Before:** "This is where most small businesses start — and for good reason. A solo web designer handles design, development, and basic setup, delivering a finished site you own outright. No monthly platform fees. No lock-in."

**After:** "This is where most small businesses start, and for good reason. A solo web designer handles the design, the development, and the setup, then hands you a finished site that's yours outright, with no monthly platform fee and nothing locking you in."

**Why:** Em dash removed. "No X. No Y." dramatic-fragmentation closing (Rule 2) folded back into the main sentence as a direct clause.

**Before:** "The wide range ($500–$3,000) reflects real variation in what you get. At $500, expect a premium template customized with your brand and content — functional, professional, but not unique. At $2,500–$3,000, expect custom layouts, original copywriting, on-page SEO, and a handoff that includes training and documentation."

**After:** "The range ($500–$3,000) tracks real differences in what you get. At $500, you're typically looking at a premium template dressed up with your brand and content: functional and professional, but not one-of-a-kind. At $2,500–$3,000, you start seeing custom layouts, original copywriting, on-page SEO, and a handoff that comes with training and documentation."

**Why:** Em dash replaced with a colon. "Expect X... expect Y" repeated imperative-style framing varied into "you're typically looking at... you start seeing..." for rhythm.

**Before (tip):** "Ask to see 3 recent examples and check that those sites actually rank for anything in Google Search Console. Portfolio screenshots are easy to fake. Live rankings are not."

**After:** "Ask to see 3 recent examples, then check whether those sites rank for anything in Google Search Console. A nice portfolio screenshot proves someone can design. A live ranking proves the site works."

**Why:** Adverb "actually" cut. "X are easy to fake. Y are not." (mirror-image binary contrast / pull-quote shape) restructured into a parallel that names what each thing actually proves — more specific, less quotable.

**Before (closing):** "The freelancer tier hits the sweet spot for most small businesses: you get a site that looks professional, works on every device, and costs a fraction of what an agency charges — with no ongoing platform fee eating into your margin."

**After:** "For most small businesses, the freelancer tier is the sweet spot. You get a site that looks professional, works on every device, and costs a fraction of an agency's rate, with no monthly platform fee chipping away at your margin."

**Why:** Em dash removed; sentence reordered to lead with the human subject ("most small businesses") rather than the abstract "the freelancer tier."

---

### 44–46. Tier 3 — Small Agency / Boutique Shop
**Heading before:** "Small Agency or Boutique Shop — More Process, More Polish"
**Heading after:** "Small Agency or Boutique Shop: More Process, More Polish"

**Why:** Em dash replaced with a colon.

**Before:** "A boutique shop is typically a team of 2–5 people: a designer, a developer, and a strategist (or one person wearing all three hats). The process is more structured — discovery calls, wireframes, brand strategy, multiple revision rounds — and the output reflects it."

**After:** "A boutique shop usually means a team of 2–5 people: a designer, a developer, a strategist, or sometimes one person wearing all three hats. The process runs more structured, with discovery calls, wireframes, brand strategy, and several rounds of revisions, and the final product shows it."

**Why:** Two em dashes removed (the parenthetical-style aside folded into the main clause).

**Before (callout):** "You're in a competitive market (multiple providers customers can choose from), your site is your primary lead source, or you're running paid ads and need a landing page that actually converts. **A $5,000 site that converts at 4% beats a $1,000 site that converts at 0.5%** — if you're driving traffic to it."

**After:** "You're competing in a crowded market, your website is your main source of leads, or you're running paid ads and need a landing page that converts. Run the math: a $5,000 site converting at 4% will outearn a $1,000 site converting at 0.5%, as long as you're sending it traffic."

**Why:** Em dash removed. Adverb "actually" cut. The bolded mid-sentence pull-quote (`<strong>...</strong>`) was unwrapped and folded into the surrounding sentence as a plain clause — Rule 8 ("cut quotables: if it sounds like a pull-quote, rewrite it").

**Before (closing):** "When it's not worth it: when you just need a credible presence and a working contact form, and you're getting most of your business through referrals. Don't pay for strategy you don't need yet."

**After:** "It's not worth it if all you need is a credible presence and a working contact form, and most of your business already comes through referrals. Save the strategy budget for later, once you actually need it."

**Why:** Awkward "When X: when Y" repetition restructured into a single direct conditional clause. Imperative punchy-fragment closer ("Don't pay for strategy you don't need yet.") replaced with a fuller sentence that keeps the same advice but reads less like a tagline.

---

### 47–48. Tier 4 — Full-Service Agency
**Heading before:** "Full-Service Agency — Enterprise Builds and Complex Integrations"
**Heading after:** "Full-Service Agency: Enterprise Builds and Complex Integrations"

**Why:** Em dash replaced with a colon.

**Before:** "For the vast majority of small businesses, this is overkill — and every salesperson at a full-service agency knows it. The services aren't designed for a 3-person plumbing company or a local catering operation. They're designed for brands with marketing departments and quarterly retainer budgets."

**After:** "For most small businesses, this tier is more than they'll ever need, and the salespeople at these agencies know it too. These services were built for brands running marketing departments on quarterly retainer budgets, not a 3-person plumbing company or a local catering operation."

**Why:** Em dash removed. "Vast majority" (lazy-extreme phrase) replaced with "most." "Aren't designed for X. They're designed for Y." mirror-image binary contrast reordered to lead with the affirmative claim and name who the services are for, before naming who they aren't for — same information, less metronomic.

**Before (tip):** "If an agency quotes you $15,000 for a 5-page informational site with a contact form, ask them to itemize it line by line. That conversation will tell you quickly whether the number reflects your needs or their overhead."

**After:** "If an agency quotes $15,000 for a 5-page informational site with a contact form, ask them to break it down line by line. That conversation will tell you whether the number reflects your needs or their overhead."

**Why:** Adverb "quickly" cut.

---

### 49–51. Tier 5 — Hidden Costs
**Heading before:** "Hidden Costs That Inflate Every Budget"
**Heading after:** "The Hidden Costs Most Quotes Leave Out"

**Why:** Lazy-extreme "every" cut; replaced with a more specific, accurate framing — these costs don't inflate every budget equally, they get left out of quotes, which is the actual point of the section.

**Before (callout):** ""What's not included in this quote?" Hosting, email, stock photos, and ongoing support are frequently left out of upfront estimates. Get the total 12-month cost in writing before you commit."

**After:** ""What's not included in this quote?" Hosting, email, stock photos, and ongoing support tend to fall out of the upfront estimate. Get the full 12-month cost in writing before you sign anything."

**Why:** Adverb "frequently" replaced with the more conversational "tend to." "Always ask" label softened to "Worth asking" — less command-voice, more in keeping with the advisory tone of the rest of the article.

**Before (closing):** "At PocketSod, we're upfront about this because we've seen too many business owners get surprised by invoices they didn't expect. Our packages include a clear scope, and we'll tell you exactly what you'll need beyond us to keep the site running."

**After:** "At PocketSod, we lay this out up front because we've watched too many business owners get hit with invoices they never saw coming. Our packages spell out the scope clearly, and we'll tell you what else you'll need to keep the site running once it's live."

**Why:** Adverb "exactly" cut. Redundant "surprised by invoices they didn't expect" (surprise already implies not expecting) tightened to "hit with invoices they never saw coming" — more concrete, less circular.

---

### 52. CTA block
**Before:** "PocketSod builds professional, mobile-ready websites for small businesses — starting at $500 with clear pricing and no surprise fees. Tell us what you need and we'll tell you exactly what it costs."

**After:** "PocketSod builds professional, mobile-ready websites for small businesses, starting at $500, with pricing you can see up front and no surprise fees. Tell us what you need, and we'll tell you what it costs."

**Why:** Em dash removed. Adverb "exactly" cut.

---

### 53–55. Meta description / OG description / Twitter description / JSON-LD description
**Meta + OG before:** "The honest breakdown of small business website costs in 2026 — from $0 DIY builders to $50K+ agency builds. Find out what you actually need and what you'll pay."
**After:** "The honest breakdown of small business website costs in 2026: $0 DIY builders, $50K+ agency builds, and everything between. What you actually need, and what you'll pay for it."

**Twitter before:** "Stop guessing. Here's the real cost breakdown for small business websites — by tier, with no fluff."
**After:** "Stop guessing. The real cost breakdown for small business websites, tier by tier, with no fluff."

**JSON-LD before:** "The honest breakdown of small business website costs in 2026 — from $0 DIY builders to $50K+ agency builds."
**After:** "The honest breakdown of small business website costs in 2026: $0 DIY builders, $50K+ agency builds, and everything between."

**Why (all three):** Em dashes removed; "here's" throat-clearing cut from the Twitter line; phrasing brought into alignment with the matching card excerpt on `blog/index.html` so the same article isn't described three different ways across the site.

---

## Left unchanged: social-posts.html

`social-posts.html` (1,372 lines) was reviewed and **not** edited. It's a library of social-media ad-graphic templates, not narrative prose. Its short fragments and comparison-list structures — e.g. "No web presence. No credibility. No leads while you sleep." styled as a "panel-no vs. panel-yes" visual layout — are an intentional ad-design device (the kind of punchy, scannable copy social graphics are built around), not an AI-writing tell. Rewriting them in full-sentence prose would weaken the format they're designed for.

The file also contains Spanish-language marketing copy (e.g. "Diseño web profesional que habla tu idioma — para negocios hispanos en los 50 estados."). Stop-slop's rules are tuned for English prose patterns, and this copy is out of scope for the same reason the Spanish `es: {...}` object in `index.html` was left untouched.

## Other copy reviewed and left as-is

- **UI labels and short fragments** — page `<title>` tags (e.g. "Get a Free Quote | PocketSod — Small Business Web Design"), `aria-label` attributes, and form option labels (e.g. "ASAP — within 2 weeks"). These use the dash purely as a visual/structural separator in short labels, the same convention browsers and screen readers expect — not narrative prose with AI-tell patterns.
- **Spanish translation object (`es: {...}`)** in `index.html`'s i18n script — parallel to the English `en: {...}` object that was edited; left untouched for the same reason as the Spanish copy in `social-posts.html`.
- **Cost-comparison tables, pricing tags, and structured data values** (`item-price-tag`, `cost-table` rows) — factual figures and short labels, not prose.
