# Prompt 1: extrair o design system

Cole no agente, ajustando os caminhos:

```
Leia as referências em referencias/ (HTML, CSS e prints) e extraia delas um DESIGN SYSTEM EM HTML,
em design-system.html, partindo de modelo/design-system.html. Não é markdown: tudo tem que aparecer
funcionando na página.

A página deve ter, nesta ordem:
1. Tokens como variáveis CSS em :root, com tema claro e escuro (prefers-color-scheme e
   [data-theme]): cores (fundo, painel, borda, texto, texto suave, destaque, perigo, aviso, sucesso),
   tipografia (famílias, tamanhos, pesos, altura de linha), espaços, raios, sombras, durações e
   curvas de movimento.
2. Componentes, cada um com os estados (normal, hover, foco, ativo, desabilitado): botões, chips e
   badges, abas, campos, cartões, bloco de código com Copiar, o que mais a referência tiver.
3. Fundos e efeitos: texturas, vidro, gradientes, parallax, divisores.
4. Animações como demos ao vivo: entradas, hovers, surgir com a rolagem (IntersectionObserver),
   transições, mascote ou ilustrações animadas.
5. Para cada item, o trecho de HTML e CSS para reutilizar, num bloco copiável.

Regras:
- Valores tirados das referências, não inventados. Se precisar inventar, diga onde.
- Sem bibliotecas; CSS e JS puros.
- prefers-reduced-motion desliga o movimento; sem JS, nada fica escondido.
- Funciona em 375 px sem rolagem horizontal.
- Nada dos vícios de IA: a fonte serifada de sempre, o gradiente roxo, os cartões genéricos. Siga a referência.

No fim, liste o que tirou de cada referência e o que ficou de fora.
```
