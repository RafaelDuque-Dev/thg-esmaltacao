import sharp from "sharp";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const base = process.cwd();
const output = path.join(base, "public/images");
await mkdir(path.join(output, "portfolio"), { recursive: true });
const assetMap = [
  ["WhatsApp Image 2026-10-19 at 08.02.01.jpeg", "medalhas"],
  ["WhatsApp Image 2026-10-19 at 08.02.01 (1).jpeg", "ipe"],
  ["WhatsApp Image 2026-10-19 at 08.02.01 (2).jpeg", "chaveiro"],
  ["WhatsApp Image 2026-10-19 at 08.02.02.jpeg", "vai-vai"],
  ["WhatsApp Image 2026-10-19 at 08.02.02 (1).jpeg", "ala8"],
  ["WhatsApp Image 2026-10-19 at 08.02.02 (2).jpeg", "fnx"],
  ["WhatsApp Image 2026-10-19 at 08.02.03.jpeg", "dust"],
  ["WhatsApp Image 2026-10-19 at 08.02.03 (1).jpeg", "bororos"],
];
async function variants(source, destination) {
  await sharp(source).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 84 }).toFile(`${destination}.webp`);
  await Promise.all([480, 768, 1200, 1600].map((width) => sharp(source).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${destination}-${width}.webp`)));
}
for (const [filename, name] of assetMap) {
  const source = path.join(base, "../img", filename);
  if (existsSync(source)) await variants(source, path.join(output, "portfolio", name));
  else if (!existsSync(path.join(output, "portfolio", `${name}.webp`))) throw new Error(`Foto ausente: ${filename}`);
}
const hero = path.join(base, "assets-source/hero-concept.png");
if (existsSync(hero)) await variants(hero, path.join(output, "hero"));
if (!existsSync(path.join(output, "hero.webp"))) throw new Error("Imagem ilustrativa do hero ainda não foi adicionada.");
const socialSvg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g"><stop stop-color="#151514"/><stop offset="1" stop-color="#15151400"/></linearGradient></defs><rect width="1200" height="630" fill="#151514"/><rect x="0" width="1200" height="630" fill="url(#g)"/><text x="68" y="100" fill="#efede7" font-family="Arial" font-size="36" font-weight="bold">THG</text><text x="163" y="98" fill="#bdb5a3" font-family="Arial" font-size="13" letter-spacing="3">ESMALTAÇÃO</text><text x="68" y="278" fill="#efede7" font-family="Arial" font-size="67" letter-spacing="-3">Detalhes que</text><text x="68" y="354" fill="#efede7" font-family="Arial" font-size="67" letter-spacing="-3">transformam metal</text><text x="68" y="438" fill="#e9b76b" font-family="Georgia" font-style="italic" font-size="82">em identidade.</text><path d="M68 524h65" stroke="#e9b76b"/><text x="68" y="560" fill="#c5ba9e" font-family="Arial" font-size="12" letter-spacing="2">PINTURA EM RESINA · ACABAMENTO EM METAL</text></svg>`;
const heroBuffer = await sharp(path.join(output, "hero.webp")).resize(1200, 630, { fit: "cover" }).toBuffer();
await sharp(heroBuffer).composite([{ input: Buffer.from(socialSvg) }]).jpeg({ quality: 88 }).toFile(path.join(output, "compartilhamento.jpg"));
await writeFile(path.join(output, "assets-info.json"), JSON.stringify({ portfolio: "Fotografias reais fornecidas pela THG. Originais preservados em ../img.", hero: "Imagem ilustrativa de conceito, gerada com image_gen. Não integra o portfólio de trabalhos reais." }, null, 2));
console.log("Fotos WebP responsivas e imagem de compartilhamento preparadas.");
