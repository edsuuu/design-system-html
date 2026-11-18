# Design system em HTML

Um processo para fazer uma IA (Claude Code, Codex ou outra) criar design de alto nível de forma previsível, em vez de
pedir "cria esse site" e torcer.

## O problema

Pedir direto ("cria um site", "põe uma animação assim") dá um resultado aleatório: às vezes fica bom, mas não há
controle, gasta muito token em tentativa e erro e a IA cai nos vícios de sempre (a mesma fonte serifada, o mesmo
gradiente, o mesmo layout).

Muita gente já usa um design system para guiar a IA, mas escrito em **markdown**. O markdown só descreve uma parte do
design: cores, tipografia, espaçamento. Ele não representa uma animação, um efeito de parallax entre dobras, um hover,
um fundo vivo.

## A ideia

O design system é um **arquivo HTML vivo**. Cada token, componente, fundo, efeito e animação aparece funcionando, com o
trecho de HTML e CSS para reutilizar. O HTML representa tudo o que um bom design system precisa, inclusive o que se
move.

## O processo

1. **Referências.** Junte de 1 a 3 boas referências em HTML: páginas que você admira, o seu app, um protótipo. Salve o
   HTML (ou a URL) em `referencias/`.
2. **Extrair.** Peça para a IA extrair delas o design system, em `design-system.html`, a partir do
   [`modelo/design-system.html`](modelo/design-system.html). Use o prompt
   [`prompts/1-extrair.md`](prompts/1-extrair.md). Saem:
   - tokens: cores (claro e escuro), tipografia, espaços, raios, sombras;
   - componentes: botões, chips, abas, cartões, campos, blocos de código;
   - fundos e efeitos: texturas, vidro, gradientes, parallax;
   - animações, como demos ao vivo: entradas, hovers, surgir com a rolagem, a mascote;
   - para cada item, o trecho a reutilizar.
3. **Revisar.** Abra o `design-system.html` no navegador. Ajuste o que não ficou fiel antes de seguir: é muito mais
   barato corrigir aqui do que na página pronta.
4. **Construir.** Peça a página nova usando **só** o design system, pelo prompt
   [`prompts/2-construir.md`](prompts/2-construir.md). Regra: nada de estilo solto fora dele; se faltar algo, ele entra
   primeiro no design system.
5. **Conferir.** Desktop e celular (375 px), tema claro e escuro, `prefers-reduced-motion`, sem rolagem horizontal, sem
   erros no console.

## Usar como skill do Claude Code

Copie [`skill/design-system-html`](skill/design-system-html) para `~/.claude/skills/` (ou para `.claude/skills/` do
projeto). Depois é só pedir "faz o site usando o processo do design system em HTML".

## Exemplo

[`exemplos/magoagent/`](exemplos/magoagent) traz o design system do site do MagoAgent, extraído do próprio app. Abra o
`design-system.html` no navegador.
