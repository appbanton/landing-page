# App Banton Studios

Website for App Banton Studios, a design and build studio in Port of Spain, Trinidad.
Live at https://appbanton.com.

Pages: `/` (home), `/marketing`, `/software`, `/construction` and one gallery page per construction project.

## Stack

Next.js (App Router), React, TypeScript. Plain CSS in `src/app/globals.css`. Fonts via `next/font/google`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Set `GA_ID` in the environment to enable Google Analytics. It is off when unset.

## Where things live

- `src/content/` is the copy and data: `site.ts` (home), `software.ts`, `construction.ts`.
- `src/app/` are the pages. `src/lib/seo.ts` builds per-page title, canonical and share-card metadata.
- `public/` holds images. `public/og.png` is the 1200x630 share card, `public/logo.svg` the mark, `public/llms.txt` the summary for AI crawlers.

## Keep in step when the studio changes

When a page, project or discipline is added or renamed, update `public/llms.txt`, `src/app/sitemap.ts` and the description in `src/app/layout.tsx`. These are not generated.

To add photos to a construction project, put the file in `public/construction/` and set its `src` in `src/content/construction.ts`.
