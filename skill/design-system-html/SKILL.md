---
name: design-system-html
description: Fazer sites, páginas e telas com um design system em HTML vivo (tokens, componentes, fundos e animações funcionando), extraído de boas referências, em vez de pedir o design direto ou guiá-lo por markdown. Use quando pedirem um site, uma landing, uma tela ou um redesign com bom visual.
---

# Design system em HTML

Não comece pelo site. Siga os passos:

1. **Referências.** Ache ou peça de 1 a 3 boas referências em HTML: páginas que a pessoa admira, o app dela, o site
   atual. Sem referência, pergunte antes de inventar.
2. **Extrair** um `design-system.html` vivo a partir delas:
   - tokens em variáveis CSS, com tema claro e escuro;
   - componentes com os estados;
   - fundos e efeitos;
   - animações como demos ao vivo;
   - para cada item, o trecho de HTML e CSS a reutilizar.

   Valores tirados das referências, não inventados. Sem bibliotecas.
3. **Mostrar** o design system à pessoa e ajustar antes de seguir.
4. **Construir** a página usando só o design system, por um CSS compartilhado. O que faltar entra primeiro no design
   system.
5. **Conferir:** desktop e 375 px, claro e escuro, `prefers-reduced-motion`, sem rolagem horizontal, sem erros no
   console. Sem JS, nada fica escondido.

Evite os vícios de IA: a fonte serifada de sempre, o gradiente roxo, os cartões genéricos, o emoji em todo título.

Os prompts completos estão no repositório `design-system-html` (`prompts/1-extrair.md` e `prompts/2-construir.md`), e o
modelo em `modelo/design-system.html`.
