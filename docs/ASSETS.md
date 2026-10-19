# Imagens e identidade

Oito fotografias reais foram fornecidas em `../img`. Os arquivos originais não foram alterados. O script `scripts/prepare-assets.mjs` gera versões WebP em quatro larguras, sem ampliar imagens menores que o tamanho solicitado. As versões prontas ficam em `public/images/portfolio/` e também acompanham o código para permitir builds sem a pasta original.

O portfólio contém apenas essas fotografias. Os nomes são descrições editoriais das peças; não representam depoimentos, endossos, fabricação, gravação ou vínculo comercial direto com as marcas fotografadas. A imagem Dust II tem resolução limitada (394 × 573) e é apresentada sem ampliação artificial na visualização detalhada.

## Hero ilustrativo

Criado com a ferramenta integrada `image_gen`, modo padrão, para comunicar materiais e acabamento. A página identifica a imagem como ilustrativa e ela não aparece na galeria de trabalhos realizados. Arquivo final: `public/images/hero.webp`. Versões responsivas: `hero-480.webp`, `hero-768.webp`, `hero-1200.webp`, `hero-1600.webp`. Original de geração local: `assets-source/hero-concept.png` (ignorado pelo Git por tamanho). A imagem de compartilhamento é `public/images/compartilhamento.jpg`.

Prompt utilizado:

> Use case: product-mockup. Asset type: premium metal enamel finishing studio website hero, wide landscape photograph, 1536x1024 or wider. Create an exceptionally photorealistic editorial studio product photograph of two unbranded custom enamel metal medallions floating or leaning against a dark charcoal textured plinth, like a luxury watch campaign. Main circular medal in the right 65 percent of frame, three-quarter angle, substantial thickness, warm champagne-gold polished and finely brushed metal edges, deep glossy obsidian black enamel with an original abstract angular geometric sunburst/chevron design in warm ochre amber, crisp finely machined recessed cells full of glossy resin. Another smaller oblong enamel keychain partly visible behind it, softly out of focus. One rich gold keyring near upper right, a fine metal hanging loop. Restrained amber resin highlights and subtle cream accents. Dark graphite black #141414 studio background blending seamlessly at every edge; left third mostly negative dark space. Cinematic raking warm studio light from above-right, realistic soft contact shadows, glints on polished beveled edges, meticulous material realism, dramatic macro depth of field, quiet sophisticated art direction. Product fills most height and right side, enormous sculptural tactile presence. No words, lettering, THG branding, numbers, watermarks, third-party logos, people or hands. This is an illustrative material concept, never a representation of actual client work.

## Marca

Não foi fornecido um arquivo do logotipo. O cabeçalho usa uma assinatura tipográfica provisória THG Esmaltação, com pequenos acentos de cor. Substitua o componente `Brand` em `src/components/ui.tsx` pelo arquivo oficial antes do lançamento comercial. O favicon também é provisório.

## Referências consultadas

- [Awwwards](https://www.awwwards.com/): direção editorial e experiências de portfólio.
- [Apple](https://www.apple.com/): protagonismo dos produtos.
- [Linear](https://linear.app/): hierarquia e interface contida.
- [Stripe](https://stripe.com/): clareza de navegação e conversão.
- [Framer](https://www.framer.com/): composição e transições.
- [GSAP](https://gsap.com/): animações de entrada e interação.

Essas referências orientam princípios gerais. Não foram copiados layouts, marcas ou assets desses sites.
