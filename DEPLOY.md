# Happy 16th 🎂 — deploy & edit guide

A one-page "time machine to July 13, 2010" birthday site. Pure static HTML/CSS/JS —
no build step. Just upload the folder.

His name (**Popat**) and all the facts — born Arlington VA at 7:15pm, hometown Lorton,
the Saints' Super Bowl, Barça's league table, Donovan's USA goal — are already set.

## Before you launch (all in `js/data.js`)

1. **The France vs Morocco result** — the one game-day edit (quarterfinal, Thu **July 9**,
   4pm ET). Find the `moroccoQF` block and, after the match, set:
   ```js
   moroccoQF: {
     played: true,
     result: "Morocco 1–0 France",   // final score, Morocco first
     note: "Into the semifinals — they play July 14, the day after your birthday. 🇲🇦"
   }
   ```
   Pre-written win / loss / penalty lines are in the comment right above that block —
   just copy the one that fits. (If you skip this, it simply shows the upcoming fixture.)

2. **Check the 5 videos** (optional). Each moment — Iniesta's goal, Donovan's USA goal, the
   Saints' Super Bowl, California Gurls, Morocco vs Portugal — shows a real thumbnail with a
   play button and plays inline when tapped. If any clip won't play (some official uploads
   block embedding), swap its `video: { id: "..." }` in `js/data.js` for another YouTube ID.

3. **Add "then & now" photos** (optional). In the `photos` block, point `then.src` / `now.src`
   at two image files (e.g. `"photos/baby.jpg"` — create a `photos/` folder next to
   `index.html`). The photo section appears automatically once at least one is set; leave both
   blank and it stays hidden.

Re-upload after any edit (same steps below) — takes ~1 minute.

## What's on the page
Hero year-rewind with floating balloons/confetti + a **▶ Play the story** button that
auto-scrolls the whole thing like a video · the day you arrived (Arlington, 7:15pm) · the 2010
World Cup + Iniesta & Donovan clips · your 2010–11 Barça XI and league table · the Saints'
Super Bowl (with a roast) · 2010-vs-2026 numbers · pop culture + the #1 song · Morocco's rise +
the 2022 clip · the full-circle 2026 finale · a **Sweet Sixteen** section (driving, dinosaurs,
inside jokes) · then-&-now photos (opt-in) · confetti.

## Preview locally first (optional)

Double-click `index.html`, or run `python3 -m http.server 8000` in this folder and open
http://localhost:8000 .

## Deploy — Option A: Cloudflare dashboard (easiest, no command line)

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create** → **Pages** →
   **Upload assets**.
2. Name the project `popat16` (this becomes the URL `popat16.pages.dev` — pick another
   name if it's taken).
3. Drag **the contents of this folder** (index.html, css/, js/, fonts/, og.jpg,
   favicon.svg) into the uploader → **Deploy**.
4. Live at **https://popat16.pages.dev** with HTTPS in seconds. To update later, repeat
   step 1 and re-drag — each upload is a new version with instant rollback.

## Deploy — Option B: Wrangler CLI

```sh
npx wrangler login                                   # opens browser once; click Allow
npx wrangler pages deploy . --project-name=popat16 --commit-dirty=true
```
Live at https://popat16.pages.dev .

## Custom domain (optional, costs only the domain ~$4–11/yr)

In the Pages project → **Custom domains** → add your domain. For a subdomain
(e.g. `sixteen.yourdomain.com`) add a CNAME to `popat16.pages.dev` at your DNS host.
For an apex domain, move the domain's nameservers to Cloudflare (free). Hosting is free
either way.

## What's inside
- `index.html` — page shell + social-share (Open Graph) tags
- `css/styles.css` — all styling & animation
- `js/data.js` — **every fact and line of copy (this is the only file you edit)**
- `js/main.js` — renders the page and runs the animations
- `fonts/` — self-hosted fonts (no external requests)
- `og.jpg` — the link-preview card shown when you text the URL
