import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const workerPromise = import(new URL("../dist/server/index.js", import.meta.url).href);
async function render(path = "/") {
  const { default: worker } = await workerPromise;
  return worker.fetch(new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), m[2].replaceAll("&amp;", "&")]));
}
function seo(html) {
  const links = [...html.matchAll(/<link\b[^>]*>/g)].map(m => attributes(m[0]));
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  return {
    title: html.match(/<title>(.*?)<\/title>/s)?.[1],
    canonicals: links.filter(x => x.rel === "canonical"),
    alternates: links.filter(x => x.rel === "alternate" && x.hreflang),
    schemas: schemas.flatMap(x => x["@graph"] ?? [x]),
    descriptions: [...html.matchAll(/<meta\b[^>]*>/g)].map(m => attributes(m[0])).filter(x => x.name === "description"),
  };
}

test("server-renders the Chinese company homepage with crawlable service links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<html lang="zh-CN"/);
  assert.match(html, /class="site language-zh"/);
  assert.equal(seo(html).title, "AI 视频工具与定制应用开发｜赛蚨里奇 SAIFU");
  assert.match(html, /src="\/saifu-mark\.svg"/);
  assert.match(html, /让想象/);
  assert.match(html, /成为视频。/);
  assert.match(html, /href="\/services\/ai-video-tools"/);
  assert.match(html, /href="\/services\/custom-ai-video-applications"/);
  assert.match(html, /href="\/guides\/planning-an-ai-video-project"/);
  assert.match(html, /href="\/faq"/);
  assert.match(html, /href="\/en"[^>]*hrefLang="en"/i);
  assert.match(html, /北京赛蚨里奇科技有限公司/);
  assert.match(html, /hello@saifuliqi\.com/);
});

test("the English homepage is English before JavaScript runs", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html lang="en"/);
  assert.match(html, /class="site language-en"/);
  assert.match(html, /Turn imagination/);
  assert.match(html, /into video\./);
  assert.match(html, /href="\/en\/services\/ai-video-tools"/);
  assert.equal(seo(html).title, "AI Video Tools &amp; Custom Application Development | SAIFU");
  // English must never collapse into the Chinese canonical URL.
  assert.equal(seo(html).canonicals[0]?.href, "https://saifuliqi.com/en");
});

test("all sitemap pages render unique metadata, reciprocal language links and valid schemas", async () => {
  const sitemap = await readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.equal(urls.length, 10);
  assert.equal(new Set(urls).size, 10);
  const titles = new Set();
  const descriptions = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const english = path === "/en" || path.startsWith("/en/");
    const basePath = english ? path.slice(3) : path === "/" ? "" : path;
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    const data = seo(html);
    assert.match(html, english ? /<html lang="en"/ : /<html lang="zh-CN"/, path);
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, path);
    assert.equal(data.canonicals.length, 1, path);
    assert.equal(data.canonicals[0].href, url, path);
    assert.equal(data.descriptions.length, 1, path);
    assert.ok(data.descriptions[0].content.length > 50, path);
    assert.ok(!titles.has(data.title), `Duplicate title on ${path}`);
    assert.ok(!descriptions.has(data.descriptions[0].content), `Duplicate description on ${path}`);
    titles.add(data.title); descriptions.add(data.descriptions[0].content);
    assert.deepEqual(Object.fromEntries(data.alternates.map(x => [x.hreflang, x.href])), {
      "zh-CN": `https://saifuliqi.com${basePath || "/"}`,
      en: `https://saifuliqi.com/en${basePath}`,
      "x-default": `https://saifuliqi.com${basePath || "/"}`,
    }, path);
    const types = data.schemas.map(x => x["@type"]);
    assert.ok(types.includes("Organization"), path);
    assert.ok(types.includes("WebSite"), path);
    assert.ok(types.includes("WebPage"), path);
    assert.ok(!types.includes("SoftwareApplication"), "Company services must not claim a self-serve application");
    if (path.includes("/services/")) {
      assert.ok(types.includes("Service"), path);
      assert.ok(types.includes("BreadcrumbList"), path);
    }
    if (path.includes("/guides/")) {
      assert.ok(types.includes("Article"), path);
      assert.match(html, /dateTime="2026-10-29"/i);
    }
  }
  assert.equal([...sitemap.matchAll(/hreflang="en"/g)].length, 10);
});

test("unknown service slugs return 404 instead of indexable placeholder pages", async () => {
  for (const path of ["/services/not-a-service", "/en/services/not-a-service", "/services/toString", "/en/services/__proto__"]) {
    assert.equal((await render(path)).status, 404, path);
  }
});

test("preserves the bilingual design, responsive layouts and crawler entry points", async () => {
  const read = p => readFile(new URL(p, import.meta.url), "utf8");
  const [page, css, warp, warpCss, site, robots, llms] = await Promise.all([
    read("../app/components/CompanyHome.tsx"), read("../app/globals.css"),
    read("../app/components/WarpText.tsx"), read("../app/components/WarpText.css"),
    read("../app/lib/site.ts"), read("../public/robots.txt"), read("../public/llms.txt"),
  ]);
  assert.match(page, /type Language = "zh" \| "en"/);
  assert.match(page, /const NAV_TARGETS = \["about", "capabilities", "services", "contact"\] as const/);
  assert.match(page, /aria-current=/);
  assert.doesNotMatch(page, /ICP备案|公安备案/);
  assert.match(site, /\/og\.png/);
  assert.match(css, /@media \(max-width: 620px\)/);
  assert.match(css, /MiSans-Regular\.woff2/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(warpCss, /white-space:\s*pre;/);
  assert.doesNotMatch(warpCss, /white-space:\s*pre-line;/);
  assert.match(warp, /const fit = Math\.min\(1,/);
  assert.match(robots, /Sitemap: https:\/\/saifuliqi\.com\/sitemap\.xml/);
  assert.match(llms, /https:\/\/saifuliqi\.com\/en\/services\/ai-video-tools/);
});
