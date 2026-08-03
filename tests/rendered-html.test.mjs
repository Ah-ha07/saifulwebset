import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the SAIFU company website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SAIFU｜AI 视频生成工具与应用开发<\/title>/i);
  assert.match(html, /name="application-name" content="SAIFU"/i);
  assert.match(html, /class="site language-zh"/);
  assert.match(html, /src="\/saifu-mark\.svg"/);
  assert.match(html, /<strong>SAIFU<\/strong>/);
  assert.match(html, /让想象/);
  assert.match(html, /成为视频。/);
  assert.match(html, /id="capabilities"/);
  assert.match(html, /id="services"/);
  assert.match(html, /北京赛蚨里奇科技有限公司/);
});

test("keeps bilingual copy and responsive design in the source", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type Language = "zh" \| "en"/);
  assert.match(page, /Turn imagination/);
  assert.match(page, /What we build with AI video/);
  assert.match(page, /Custom AI Video Applications/);
  assert.match(page, /const navTargets = \["about", "capabilities", "services", "contact"\]/);
  assert.match(layout, /SAIFU｜AI 视频生成工具与应用开发/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /SpaceGrotesk-Variable\.woff2/);
  assert.match(css, /MiSans-Regular\.woff2/);
  assert.doesNotMatch(css, /Instrument Serif/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(packageJson, /"name": "saifu-ai-video-website"/);
});
