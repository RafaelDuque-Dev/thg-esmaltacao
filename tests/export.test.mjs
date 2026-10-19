import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const html = readFileSync(path.join(root, "index.html"), "utf8");

test("página de produção tem conteúdo semântico, SEO e oito trabalhos reais", () => {
  assert.match(html, /<html[^>]*lang="pt-BR"/);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.match(html, /<title>THG Esmaltação \| Pintura em Resina/);
  assert.match(html, /name="description"/);
  assert.match(html, /rel="canonical"[^>]*https:\/\//);
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.equal((html.match(/aria-label="Ampliar:/g) || []).length, 8);
  for (const id of ["inicio", "sobre", "servicos", "portfolio", "contato"]) assert.match(html, new RegExp(`id="${id}"`));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)];
  assert.equal(schemas.length, 1);
  const organization = JSON.parse(schemas[0][1]);
  assert.equal(organization["@type"], "Organization");
  assert.equal(organization.telephone, "+5511981825721");
  assert.equal(organization.address, undefined);
  assert.equal(organization.aggregateRating, undefined);
});

test("todas as imagens e fontes referenciadas existem na exportação", () => {
  const urls = [...html.matchAll(/(?:src|srcSet|href)="([^"<>]+)"/g)].flatMap((match) => match[1].replaceAll("&amp;", "&").split(",").map((value) => value.trim().split(" ")[0]));
  const localAssets = urls.filter((url) => /^\/(?:images|_next|icon\.svg)/.test(url));
  assert.ok(localAssets.length > 30);
  for (const url of localAssets) assert.ok(existsSync(path.join(root, url.split("?")[0])), `Asset ausente: ${url}`);
});

test("contato aponta ao número real e inclui mensagem codificada", () => {
  const urls = [...html.matchAll(/href="(https:\/\/wa\.me\/[^"<>]+)"/g)].map((value) => new URL(value[1].replaceAll("&amp;", "&")));
  assert.ok(urls.length >= 3);
  for (const url of urls) { assert.equal(url.pathname, "/5511981825721"); assert.match(url.searchParams.get("text"), /THG Esmaltação/); }
  assert.match(html, /Este site não armazena o formulário/);
});

test("sitemap, robots, privacidade e imagem social estão prontos", () => {
  const sitemap = readFileSync(path.join(root, "sitemap.xml"), "utf8");
  const robots = readFileSync(path.join(root, "robots.txt"), "utf8");
  assert.match(sitemap, /https:\/\//);
  assert.match(sitemap, /\/privacidade\//);
  assert.match(robots, /Sitemap: https:\/\//);
  assert.ok(existsSync(path.join(root, "privacidade/index.html")));
  assert.ok(existsSync(path.join(root, "images/compartilhamento.jpg")));
  assert.ok(existsSync(path.join(root, "404.html")));
});
