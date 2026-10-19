# Validação — 19 de outubro de 2026

## Resultado executado

- Build de produção do Next.js 16.4.2 concluído: início, privacidade, erro 404, favicon, robots.txt e sitemap.xml exportados para `out/`.
- TypeScript: `tsc --noEmit` sem erros.
- ESLint: sem erros ou avisos após ajuste da configuração.
- Quatro testes da exportação passaram: semântica/SEO e oito projetos; existência de imagens/fontes referenciadas; WhatsApp e mensagem; sitemap/robots/privacidade/compartilhamento.
- Navegador integrado, versão de produção local: visual revisado em computador (1440 × 960) e celular (390 × 844). Larguras de 320, 390, 820 e 1440 sem overflow horizontal no DOM.
- Galeria: filtro Emblemas resultou em duas peças; Todos restaurou oito. Lightbox abriu, seta direita avançou, Escape fechou e o foco retornou à peça selecionada.
- Menu móvel abriu e navegou ao início. O slider de aproximação respondeu à tecla End (100).
- Formulário vazio foi bloqueado. Mensagem completa foi preparada com nome, empresa opcional, telefone, tipo, quantidade e descrição, apontando para +55 11 98182-5721. Nenhuma mensagem foi enviada durante a validação.
- Edição após preparo removeu o link anterior. Telefone `123` foi rejeitado também pela validação nativa; telefone formatado de teste foi aceito.
- Página de privacidade abriu e retornou à página inicial.
- Console do navegador sem avisos/erros no teste registrado.
- Capturas de referência: `preview-desktop.jpg` e `preview-mobile.jpg`.

## Limitações de medição

Lighthouse e Core Web Vitals não foram medidos. Nenhuma nota acima de 90 é presumida. A verificação de acessibilidade contemplou estrutura semântica, rótulos, navegação, foco e teclado; não equivale a uma auditoria completa com leitor de tela. O respeito a movimento reduzido está implementado por media queries e GSAP matchMedia, sem emulação dessa preferência na sessão de testes.

O endereço de WhatsApp e a mensagem foram verificados sem abrir/enviar uma conversa real. A entrega e disponibilidade da conta devem ser confirmadas pelo responsável.

## Ambiente

Node.js 22.20.0, Windows. O lançador npm invocado pelo helper Sites não resolveu seu caminho neste ambiente. A instalação foi executada pelo CLI oficial do npm, e o build foi concluído diretamente pelo CLI do Next.js. Foram necessárias permissões de rede para instalar os pacotes e permissões de processo/soquete para compilar e servir a prévia. O resultado exportado e as verificações passaram.

## Pendências de conteúdo

Logotipo oficial ausente: assinatura tipográfica e favicon provisórios. Domínio comercial não informado: URLs usam o endereço real do Sites. As fotografias de menor resolução podem ser substituídas por originais autorizados em alta definição. A imagem do hero é um conceito ilustrativo identificado, não um trabalho real cadastrado.
