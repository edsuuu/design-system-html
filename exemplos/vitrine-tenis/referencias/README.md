# Referência: vitrine de tênis

- Vídeo: https://www.instagram.com/p/DfAqpTsOHYn/ (Ascenta Studio, "Website for a sneaker brand")
- Site: https://ascentastudio.com/last-dept/ (LAST DEPT., loja conceito de calçados da Ascenta Studio)

## O que o site faz

Uma parede de concreto com dez tênis em duas prateleiras de acrílico. Passar o mouse acende o LED da prateleira;
clicar aproxima a câmera até o tênis, com os vizinhos aparecendo nas bordas, e abre o painel do produto ao lado
(nome, preço, tamanho, "Add to bag"). No celular vira uma grade e uma página de produto.

Por dentro (`storefront-v20.js`): uma foto só da parede inteira (`wall-3200.webp`, 5504x3072); cada tênis é um
recorte dela, pelas coordenadas do centro de cada prateleira. A aproximação é um vídeo por tênis
(`shoe_NN_camera_matched_v9.mp4`) e outro ao contrário para voltar. O LED aceso é uma imagem por cima
(`led_N.png`). Sem WebGL.

## O que foi tirado dela

- Cores do `:root`: `--paper #eeeae1`, `--ink #242321`, `--muted #b6afa5`, `--accent #efa767`, `--line #eeeae12b`;
  a etiqueta holográfica em `#ffc28e`.
- Fontes: Archivo (marca 750 com -0,055em; título 450 com -0,045em) e Geist (13 px no corpo, 11 px na navegação,
  10 px nos rótulos).
- O painel sem cartão, com linhas finas; o seletor de tamanho nativo com linha embaixo; o botão em pílula clara
  (raio 100 px, respiro 7/9/7/20) com o círculo da seta.
- A ideia de uma parede só com a câmera indo até a prateleira, e o LED que acende no hover.

## O que foi inventado

- Os tênis em SVG (`tenis.js`) no lugar das fotos, com nomes, preços e textos próprios; a marca ACERVO.
- A câmera como `transform` em CSS no lugar dos vídeos.
- O facho, o reflexo e o LED piscando ao acender; o tema claro; a grade 2x5 com a folha de baixo no celular.

Nada do código, das imagens ou dos vídeos da referência foi copiado.
