# Happy 16th 🎂 — deploy & edit guide

A one-page "time machine to July 13, 2010" birthday site. Pure static HTML/CSS/JS —
no build step. Just upload the folder.

## Before you launch — two quick edits (both in `js/data.js`)

1. **His name.** Near the top:
   ```js
   name: "{NAME}",   // ← change to his name, e.g. "Adam"
   ```
   It fills in "Happy 16th, ___" and the closing message automatically.

2. **The France vs Morocco result** (quarterfinal, Thu **July 9**, 4pm ET).
   Find the `moroccoQF` block and, after the match, set:
   ```js
   moroccoQF: {
     played: true,
     result: "Morocco 1–0 France",   // final score, Morocco first
     note: "Into the semifinals — they play July 14, the day after your birthday. 🇲🇦"
   }
   ```
   Pre-written win / loss / penalty lines are in the comment right above that block —
   just copy the one that fits. (If you skip this, it simply shows the upcoming fixture.)

Re-upload after editing (same steps below) — takes ~1 minute.

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
