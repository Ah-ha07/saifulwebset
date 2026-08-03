# SAIFU

Official bilingual website for 北京赛蚨里奇科技有限公司 (Beijing Saifuliqi Technology Co., Ltd.).

SAIFU develops AI video tools and custom AI video applications for creators, teams, and businesses.

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
- `public/` — production website assets
- `worker/` — Cloudflare/Vinext worker entry point
- `.openai/hosting.json` — optional hosting bindings

## Brand typography

- Chinese: MiSans Regular and Semibold, self-hosted under the [MiSans Fonts Intellectual Property License Agreement](https://hyperos.mi.com/font/en/download/). This website uses MiSans.
- Latin: Space Grotesk Variable, self-hosted under the SIL Open Font License 1.1. The license text is included at `public/fonts/SpaceGrotesk-OFL.txt`.
- Logo: the SAIFU frame-motion symbol is stored as a production SVG at `public/saifu-mark.svg`.

## Company

北京赛蚨里奇科技有限公司<br>
Beijing Saifuliqi Technology Co., Ltd.
