# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Project Structure
Static site for DeLara Consulting LLC, deployed to GitHub Pages at `https://pocketsod.github.io/DeLara/`.

- `index.html`, `landing-2.html`, `landing-3.html`, `landing-4.html` — four landing page variants
- All pages share a nav toggle widget (`<div class="page-toggle">`) linking between the four variants; keep all four toggle buttons present and consistent across pages
- All styles are inline `<style>` blocks — no external CSS files, no build step
- `serve.mjs` — local dev server (port 3000)
- `screenshot.mjs` — takes screenshots via WSL2 + Windows Edge headless (see below)
- `screenshot-scroll.mjs` — variant for scrolled positions

## Brand Assets
- Folder is named **`brand_assests/`** (intentional misspelling — do not correct it in paths)
- Primary logo: `brand_assests/Logo.png` — use this in nav and hero
- Alternate logo: `brand_assests/logo1.png`
- Wordmarks: `brand_assests/DeLara.png`, `brand_assests/DeLara2.png`
- Brand reference: `brand_assests/Brand-guide.png`, `brand_assests/Brand-guide1.png`
- Never use `mix-blend-mode: multiply` on logos placed on dark backgrounds — it makes them invisible
- Always use real assets; do not use `placehold.co` where actual brand files exist

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL
- Start: `node serve.mjs [port]` — serves project root; default port 3000
- **Port conflict**: the CLJ project (`clj.pocketsod.com`) runs on port 3000. Use `node serve.mjs 3001` for PocketSod when CLJ is running.
- Do not start a second instance if already running on the target port

## Screenshot Workflow
- `screenshot.mjs` uses **WSL2 + Windows Edge headless** (`/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`) — must be run from WSL2, not native Windows shell
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots saved to `./temporary screenshots/screenshot-N.png` (auto-incremented)
- Optional label: `node screenshot.mjs http://localhost:3000 label` → `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool to visually analyze it
- Compare precisely: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing
- Do at least 2 comparison rounds; stop only when no visible differences remain or user says so

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).

## Output Defaults
- Single `.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images (only when no real asset exists): `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Color Palette (landing-2 reference)
```
--brown:        #3D2810
--brown-2:      #2A1A08  (page background)
--amber:        #C9922A  (primary accent)
--amber-light:  #E0B050
--copper:       #B07840
--cream:        #F5EDD8
```

## Visual references

- The folder @web_design_references contains visual references I want
you to use when creating web pages
- If you see images in this folder: match layout structure, colors, spacing,
typography choices from the provided examples when coding our web page.
- If no reference images are provided: design from scratch, following the
rules provided below in the ‘Anti-Generic Design Guardrails’ section
- When you finish coding the page, capture a page screenshot of the page
you’ve generated and compare it against the references provided in the folder
@web_design_references. Find and fix any mismatches. Do at least two rounds of
comparison and fix. Keep all screenshots you capture in the folder @temporary screenshots

## Anti-Generic Design Guardrails 

- **Colors:** Never use default Tailwind palette (`blue-500`, `indigo-600`,
 etc.). Always define and use custom design tokens from `tailwind.config`
 (e.g. `brand.primary`). Avoid raw hex values in JSX.

- **Typography:** Never use a single font (`font-sans`) everywhere. 
Pair fonts intentionally (`font-display` for headings, `font-body` for text).
Apply tight tracking (`tracking-[-0.03em]`) for headings and generous
line-height (`leading-[1.7]`) for body text.

- **Shadows:** Never use default utilities like `shadow-md` or `shadow-lg`.
 Use layered, color-tinted shadows defined in the theme.

- **Gradients & backgrounds:** Avoid flat fills (`bg-white`, `bg-gray-100`).
 Use layered gradients, overlays, or subtle textures.
Prefer custom gradients via arbitrary values instead of Tailwind presets.

- **Animations:** Never use `transition-all`. Only animate `transform`
and `opacity`. Use explicit utilities (`transition-transform`,
`transition-opacity`) and controlled durations. Prefer spring-like
motion when using animation libraries.

- **Component styling:** Avoid long, unstructured className strings
in JSX. Extract reusable components and variants. Use composition
patterns (`clsx`, `cva`) instead of duplicating styles.

- **Interactive states:** Every interactive element must include `hover`,
`focus-visible`, and `active` states. No exceptions.

- **Images:** Never use raw images without treatment. Always add overlays
(e.g. gradient), blending, or color tint to integrate them into the design.

- **Spacing & layout:** Avoid inconsistent spacing. Use a consistent
spacing scale (`px-6`, `py-12`, `gap-4`). Prefer grid-based layouts
over ad-hoc stacking.

- **Anti-patterns:** Avoid generic UI patterns like `bg-white + shadow-md +
rounded-lg`, default Tailwind look, missing states, or flat,
depth-less layouts.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

## Code Review Standards
After completing any implementation, review the code for:
- Functions longer than 30 lines (likely doing too much)
- Logic duplicated more than twice (extract to utility)
- Any `any` type usage in TypeScript (replace with real types)
- Components with more than 3 props that could be grouped into an object
- Missing error handling on async operations

