# SAIFU

Official bilingual website for 北京赛蚨里奇科技有限公司 (Beijing Saifuliqi Technology Co., Ltd.).

SAIFU produces AI commercials, brand and product videos, animation, motion comics and narrative shorts. It also develops AI video tools and custom applications.

## Development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verification

```bash
npm run build
npm test
```

## Project structure

- `app/` — bilingual React website and visual styles
- `app/(zh)/zh/` and `app/(en)/en/` — independently rendered Chinese and English pages, with localized root layouts
- `app/lib/site.ts` and `app/lib/content.ts` — shared metadata, URL helpers, service copy, FAQs and planning guide
- `public/` — production website assets
- `worker/` — Cloudflare/Vinext worker entry point
- `.openai/hosting.json` — optional hosting bindings

## Search structure

The global entry `/` permanently redirects to `/en` for every visitor, regardless of browser language. English URLs remain unchanged. Chinese pages live under `/zh`; the eight legacy unprefixed Chinese content URLs permanently redirect to their matching Chinese page. Language selection uses explicit links, without IP or language detection.

The site has eighteen canonical pages: Chinese and English versions of the homepage, four commissioned production services, two development services, the project FAQ and a project-planning guide. Language switches are ordinary links; each version has matching server-rendered language, canonical and reciprocal hreflang metadata. [SEO audit and validation record](docs/seo-audit-2026-10-29.md).

Google Search Console URL-prefix verification for `https://saifuliqi.com/` uses the persistent `verification.google` metadata in `app/lib/site.ts`. Keep this public verification value in place after ownership is verified. The existing submitted sitemap remains at `https://saifuliqi.com/sitemap.xml` and now lists `/en` and `/zh` pages with English `x-default` alternates.

## Brand typography

- Chinese: MiSans Regular and Semibold, self-hosted under the [MiSans Fonts Intellectual Property License Agreement](https://hyperos.mi.com/font/en/download/). This website uses MiSans.
- Latin: Space Grotesk Variable, self-hosted under the SIL Open Font License 1.1. The license text is included at `public/fonts/SpaceGrotesk-OFL.txt`.
- Logo: the approved Dream Keeper A symbol is stored as a production SVG at `public/saifu-mark.svg` (light purple for dark backgrounds), with the primary purple version at `public/saifu-mark-purple.svg`. Both are traced from the approved artwork at `brand-concepts/approved/dream-keeper-A.png`; the matching browser icon is `public/favicon.svg`.

## Company

北京赛蚨里奇科技有限公司<br>
Beijing Saifuliqi Technology Co., Ltd.
