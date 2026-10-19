# THG Esmaltação

Landing page em português para pintura em resina e acabamento de peças metálicas, com direção visual em carvão, champagne e âmbar.

## Executar

Requer Node.js 20.9 ou superior (recomendado: versão LTS).

```powershell
cd "E:\THG Esmaltação\site"
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para conferir a versão de produção:

```powershell
npm run build
npm start
```

O build exporta os arquivos estáticos para `out/`. Não há backend, banco de dados ou serviço de e-mail. O site pode ser servido em hospedagem estática com HTTPS.

## Funcionalidades

- Hero com imagem de conceito identificada, movimento discreto e botões com resposta ao cursor.
- Sobre, serviços com fotografias, diferenciais e contato.
- Portfólio de oito fotografias reais, filtros por categoria e lightbox carregado sob demanda.
- Lightbox com setas, Escape, modal nativo, foco restaurado e respeito à resolução original.
- Explorador de aproximação de um acabamento real, com slider acessível por toque e teclado. Não simula antes/depois.
- Menu móvel, indicador da seção ativa, navegação por âncoras e WhatsApp flutuante.
- Formulário validado que prepara uma mensagem e permite revisar/continuar no WhatsApp.
- Fontes locais, imagens WebP responsivas, carregamento prioritário do hero, lazy loading das demais imagens.
- Respeito a `prefers-reduced-motion`, teclado, rótulos de campos e link para pular ao conteúdo.
- Metadados, canonical, Open Graph, Twitter Card, favicon, robots, sitemap, página de privacidade e Schema.org Organization com informações fornecidas.

## Tecnologias e organização

Next.js App Router, React, TypeScript, Tailwind CSS, GSAP, Lucide e Sharp. Versões exatas ficam registradas em `package-lock.json`.

```text
src/app/              páginas, metadados, estilos, sitemap e robots
src/components/       seções, efeitos, formulário e galeria
src/data/company.ts   dados comerciais e endereço público
src/data/portfolio.ts categorias e trabalhos reais
src/lib/              loader de imagens responsivas
public/images/        fotografias WebP e compartilhamento
scripts/              otimização das imagens e servidor estático
tests/                verificação do resultado exportado
docs/                 notas de imagens, origem e validação
.openai/hosting.json  identidade e configuração da hospedagem Sites
```

## WhatsApp e domínio

Número informado pelo responsável e já configurado: **+55 11 98182-5721**.

Edite `src/data/company.ts` ou copie `.env.example` para `.env.local` e ajuste:

```dotenv
NEXT_PUBLIC_WHATSAPP_NUMBER=5511981825721
NEXT_PUBLIC_SITE_URL=https://seu-dominio-oficial.com.br
```

Use somente dígitos no WhatsApp, incluindo DDI. Nunca adicione um domínio fictício. Sem variável de domínio, os metadados usam o endereço real reservado no Sites. Após qualquer alteração, execute um novo build. As variáveis `NEXT_PUBLIC_*` são incorporadas no build e são públicas. Não coloque segredos nelas.

O formulário mantém os dados apenas em memória no navegador. A pessoa confirma a abertura do WhatsApp por um link com a mensagem preparada e revisa o texto antes de enviar. Não há envio automático nem confirmação fictícia de recebimento.

## Adicionar trabalhos

1. Adicione a fotografia original autorizada em `../img` e cadastre o mapeamento no script `scripts/prepare-assets.mjs`.
2. Adicione um objeto em `src/data/portfolio.ts`, com `id` único, nome, categoria, descrição, texto alternativo, dimensões reais e caminho `/images/portfolio/nome.webp`.
3. Execute `npm run build`. O pré-build gera as quatro versões WebP, preservando o original.

Também é possível adicionar versões já otimizadas em `public/images/portfolio/`. Nesse caso, forneça `nome.webp` e `nome-{480,768,1200,1600}.webp`. A interface cria os filtros a partir da lista `categories`; acrescente novas categorias ali. Não apresente imagens ilustrativas como trabalhos reais.

## Verificação

```powershell
npm run lint
npm run typecheck
npm run build
npm test
```

Os testes verificam o HTML de produção, SEO, links comerciais e existência dos arquivos de todas as imagens exportadas. A validação visual e suas limitações estão em `docs/VALIDATION.md`. Não há garantia de nota Lighthouse sem medição no ambiente de produção.

## Antes do lançamento comercial

- Substituir a assinatura tipográfica e o favicon pelo logotipo oficial.
- Confirmar domínio oficial e atualizar canonical, sitemap e Open Graph pelo campo de URL.
- Revisar os textos, categorias e autorização de divulgação das fotos das peças com identidades de terceiros.
- Substituir fotografias de menor definição por originais de maior resolução quando disponíveis.
- Confirmar se as categorias correspondem aos serviços oferecidos; não foi anunciada fabricação, fundição ou gravação.
- Revisar o texto de privacidade com os dados do responsável e políticas da hospedagem escolhida.
- Medir Lighthouse/Core Web Vitals na hospedagem e nos dispositivos finais.

Consulte `docs/ASSETS.md` para o prompt da imagem ilustrativa, arquivos gerados e referências consultadas.
