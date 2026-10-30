import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import test from "node:test";

const required = ["out/index.html","out/woning-aanmelden/index.html","out/bedankt/index.html","out/sitemap.xml","out/robots.txt","out/verhuurbeheer-torremolinos-logo.png"];

test("every local image in the exported HTML exists", () => {
  const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const path = `${dir}/${entry.name}`;
    return entry.isDirectory() ? walk(path) : path.endsWith(".html") ? [path] : [];
  });
  for (const page of walk("out")) {
    for (const [, src] of readFileSync(page, "utf8").matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) {
      if (!src.startsWith("/")) continue;
      const path = new URL(src, "https://verhuurbeheertorremolinos.nl").pathname;
      assert.ok(existsSync(`out${path}`), `${page}: missing image ${path}`);
    }
  }
});

test("exports the required Torremolinos pages and SEO files", () => {
  for (const path of required) assert.ok(existsSync(path), `missing ${path}`);
});

test("homepage contains Torremolinos-local content", () => {
  const html = readFileSync("out/index.html", "utf8");
  assert.match(html, /Verhuurbeheer Torremolinos/);
  assert.match(html, /La Carihuela/);
  assert.match(html, /Los Álamos/);
});

const forbiddenParent = new RegExp(["verhuurbeheer", "spanje"].join("[_ -]?"),"i");
test("exported contact pages have no parent references or email forms",()=>{
 for(const path of ["out/index.html","out/en/index.html","out/es/index.html","out/woning-aanmelden/index.html","out/contact/index.html","out/privacyverklaring/index.html","out/bedankt/index.html"]){
 const html=readFileSync(path,"utf8");assert.doesNotMatch(html,forbiddenParent,path);assert.doesNotMatch(html,/<form\b|mailto:|formsubmit\.co/i,path);assert.match(html,/href=["'](?:tel:|https:\/\/wa\.me\/)/,path);
 }
});


test("translated pages declare complete reciprocal language groups in the head", async () => {
  const request = async (url) => {
    const path = new URL(url).pathname;
    const file = path === "/sitemap.xml" ? "out/sitemap.xml" : `out${path}index.html`;
    assert.ok(existsSync(file), `exported canonical page: ${path}`);
    return new Response(readFileSync(file, "utf8"));
  };
  const sitemap = await request("http://localhost/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const pages = new Map();
  for (const url of urls) {
    const response = await request(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
    const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), m[2]]));
    const links = [...head.matchAll(/<link\b[^>]*>/gi)].map(m => attrs(m[0]));
    const langs = links.filter(a => a.rel === "alternate" && a.hreflang);
    assert.equal(new Set(langs.map(a => a.hreflang)).size, langs.length, `no duplicate language declarations: ${url}`);
    pages.set(url, Object.fromEntries(langs.map(a => [a.hreflang, a.href])));
  }
  const translated = [...pages].filter(([, langs]) => Object.keys(langs).length > 0);
  assert.equal(translated.length, 30, "ten actual translation groups, three languages each");
  assert.equal(translated.filter(([url]) => !/^\/(en|es)(\/|$)/.test(new URL(url).pathname)).length, 10, "Dutch home and nine translated services only");
  for (const [url, langs] of translated) {
    assert.deepEqual(Object.keys(langs).sort(), ["en-GB", "es-ES", "nl-NL", "x-default"], url);
    assert.equal(langs["x-default"], langs["nl-NL"], url);
    assert.ok(Object.values(langs).includes(url), `self reference: ${url}`);
    for (const target of new Set(Object.values(langs))) {
      assert.ok(pages.has(target), `actual canonical sitemap target: ${target}`);
      assert.deepEqual(pages.get(target), langs, `complete reciprocal group: ${url} -> ${target}`);
    }
  }
});
