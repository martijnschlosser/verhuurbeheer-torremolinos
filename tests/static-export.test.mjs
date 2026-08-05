import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const required = ["out/index.html","out/woning-aanmelden/index.html","out/bedankt/index.html","out/sitemap.xml","out/robots.txt","out/verhuurbeheer-torremolinos-logo.png"];

test("exports the required Torremolinos pages and SEO files", () => {
  for (const path of required) assert.ok(existsSync(path), `missing ${path}`);
});

test("homepage contains Torremolinos-local content", () => {
  const html = readFileSync("out/index.html", "utf8");
  assert.match(html, /Verhuurbeheer Torremolinos/);
  assert.match(html, /La Carihuela/);
  assert.match(html, /Los Álamos/);
});
