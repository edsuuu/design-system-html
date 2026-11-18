// Os tênis da vitrine, desenhados em SVG de perfil (bico à direita, viewBox 400x210, chão em y=196).
// Cada modelo combina cano, solado, detalhe e cores; o mesmo desenho serve ao design system e à loja.
(function () {
  const MODELOS = [
    { nome: 'Brasa 01', preco: 899, cano: 'baixo', solado: 'ar', detalhe: 'faixa', cadarco: true, peso: 312, drop: 10, nomeSolado: 'Ar visível',
      descricao: 'Corredor de rua em malha técnica coral, com sobreposições soldadas e duas câmaras de ar à mostra no solado.',
      cores: { cabedal: '#ff6a4d', sobreposicao: '#ff9479', detalhe: '#ffe3da', entressola: '#ffd8cb', entressola2: '#ffb7a3', sola: '#b63a27', cadarco: '#fff3ee' } },
    { nome: 'Pátio 02', preco: 749, cano: 'alto', solado: 'plano', detalhe: 'traseira', cadarco: true, peso: 468, drop: 6, nomeSolado: 'Borracha plana',
      descricao: 'Cano alto de quadra em couro cru, traseira verde-mata e solado vulcanizado que aguenta asfalto e piso de ginásio.',
      cores: { cabedal: '#efe8d9', sobreposicao: '#2f6b4a', detalhe: '#2f6b4a', entressola: '#f5f1e8', entressola2: '#e9e2d3', sola: '#cfc6b4', cadarco: '#fbf8f2' } },
    { nome: 'Viaduto 03', preco: 999, cano: 'baixo', solado: 'ar', detalhe: 'janela', cadarco: true, peso: 356, drop: 12, nomeSolado: 'Ar visível',
      descricao: 'Couro acolchoado azul-cobalto sobre a maior câmara de ar da série.',
      cores: { cabedal: '#2659e8', sobreposicao: '#1c40b0', detalhe: '#dfe7ff', entressola: '#cfe0ff', entressola2: '#9fc0ff', sola: '#eef2fb', cadarco: '#eef3ff' } },
    { nome: 'Mirante 04', preco: 1099, cano: 'alto', solado: 'grosso', detalhe: 'painel', cadarco: true, peso: 540, drop: 8, nomeSolado: 'Espuma dupla',
      descricao: 'Bota-tênis lilás com painéis em camurça e duas camadas de espuma. Pesa mais e protege o tornozelo.',
      cores: { cabedal: '#d9bbe2', sobreposicao: '#c49fd2', detalhe: '#f1e3f5', entressola: '#ead9f0', entressola2: '#dcc4e6', sola: '#b58ec4', cadarco: '#f7eefa' } },
    { nome: 'Cascalho 05', preco: 949, cano: 'medio', solado: 'grosso', detalhe: 'calcanhar', cadarco: true, cravos: true, peso: 498, drop: 9, nomeSolado: 'Cravos de trilha',
      descricao: 'Trilha em cano médio grafite, cadarço laranja de alta visibilidade e cravos de 4 mm para terra solta.',
      cores: { cabedal: '#3d403e', sobreposicao: '#666a63', detalhe: '#ff6d2e', entressola: '#2a2c2b', entressola2: '#464946', sola: '#181918', cadarco: '#ff6d2e' } },
    { nome: 'Neblina 06', preco: 649, cano: 'baixo', solado: 'crua', detalhe: 'painel', cadarco: true, peso: 286, drop: 8, nomeSolado: 'Borracha crua',
      descricao: 'Corredor retrô dos anos 70 em camurça areia, com faixa vinho e solado de borracha crua.',
      cores: { cabedal: '#e6d6c6', sobreposicao: '#8a2241', detalhe: '#8a2241', entressola: '#f1e8dd', entressola2: '#e8dccf', sola: '#c4703f', cadarco: '#f6efe7' } },
    { nome: 'Calçada 07', preco: 799, cano: 'alto', solado: 'crua', detalhe: 'faixa', cadarco: true, peso: 512, drop: 5, nomeSolado: 'Borracha crua',
      descricao: 'Cano alto em camurça cinza-chumbo com faixa azul-real e sola crua. Feito para andar, não para correr.',
      cores: { cabedal: '#8b8e91', sobreposicao: '#5d6165', detalhe: '#2d50d8', entressola: '#f0e6d2', entressola2: '#e4d7bd', sola: '#b07a43', cadarco: '#e9e9ea' } },
    { nome: 'Trilho 08', preco: 699, cano: 'baixo', solado: 'ar', detalhe: 'nenhum', cadarco: false, malha: true, peso: 248, drop: 10, nomeSolado: 'Ar visível',
      descricao: 'Calce sem cadarço em malha branca tricotada numa peça só, com câmara de ar do calcanhar à ponta.',
      cores: { cabedal: '#f2f0ec', sobreposicao: '#e2ded6', detalhe: '#d6d1c7', entressola: '#f7f6f3', entressola2: '#e8e6e1', sola: '#c9ced4', cadarco: '#ffffff' } },
    { nome: 'Maré 09', preco: 599, cano: 'baixo', solado: 'plano', detalhe: 'calcanhar', cadarco: true, peso: 330, drop: 4, nomeSolado: 'Borracha plana',
      descricao: 'Tênis de couro branco liso com calcanhar terracota. O mais simples da série e o que combina com tudo.',
      cores: { cabedal: '#f4f1ea', sobreposicao: '#e8e3d9', detalhe: '#d9553c', entressola: '#f4f1ea', entressola2: '#ebe6dc', sola: '#d6cfc2', cadarco: '#ffffff' } },
    { nome: 'Garoa 10', preco: 899, cano: 'baixo', solado: 'ondas', detalhe: 'nenhum', cadarco: false, malha: true, peso: 264, drop: 11, nomeSolado: 'Ondas de espuma',
      descricao: 'Malha coral com gola de meia azul-céu e solado em ondas amarelas que se abrem a cada passada.',
      cores: { cabedal: '#f2615a', sobreposicao: '#e5504a', detalhe: '#9dbdf0', entressola: '#e8e07a', entressola2: '#d8cf5c', sola: '#bdb44c', cadarco: '#9dbdf0' } },
  ];
  const TAMANHOS = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
  const reais = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  function pontoNaCurva(pontos, t) {
    const [p0, p1, p2, p3] = pontos, u = 1 - t;
    return [0, 1].map((eixo) => u * u * u * p0[eixo] + 3 * u * u * t * p1[eixo] + 3 * u * t * t * p2[eixo] + t * t * t * p3[eixo]);
  }

  function desenhar(modelo, indice) {
    const id = 'tn' + indice, cores = modelo.cores;
    const espessura = { plano: 22, crua: 24, grosso: 40, ar: 34, ondas: 36 }[modelo.solado];
    const topoSola = 190 - espessura;
    const base = topoSola + 5;
    const calcanhar = { baixo: 80, medio: 54, alto: 28 }[modelo.cano];
    const lingua = { baixo: 66, medio: 46, alto: 24 }[modelo.cano];
    const curva = calcanhar + (modelo.cano === 'alto' ? 10 : 16);
    const gola = `M46 ${calcanhar + 8} Q50 ${calcanhar} 60 ${calcanhar - 1} C80 ${calcanhar} 98 ${curva - 4} 118 ${curva} C140 ${curva + 2} 160 ${lingua + 20} 176 ${lingua + 6}`;
    const pontosPeito = [[204, lingua + 18], [240, lingua + 40], [280, base - 70], [318, base - 52]];
    const peito = `M${pontosPeito[0]} C${pontosPeito[1]} ${pontosPeito[2]} ${pontosPeito[3]}`;
    const cabedal = `M36 ${base} C30 ${base - 50} 34 ${calcanhar + 40} 46 ${calcanhar + 8} Q50 ${calcanhar} 60 ${calcanhar - 1} C80 ${calcanhar} 98 ${curva - 4} 118 ${curva} ` +
      `C140 ${curva + 2} 160 ${lingua + 20} 176 ${lingua + 6} Q182 ${lingua - 2} 194 ${lingua + 2} C200 ${lingua + 8} 200 ${lingua + 14} 204 ${lingua + 18} ` +
      `C240 ${lingua + 40} 280 ${base - 70} 318 ${base - 52} C350 ${base - 40} 376 ${base - 30} 386 ${base - 10} Q388 ${base} 376 ${base} Z`;
    const entressola = `M30 ${topoSola} L380 ${topoSola - 2} C396 ${topoSola} 398 ${topoSola + espessura * 0.6} 384 ${topoSola + espessura} ` +
      `L42 ${topoSola + espessura} C26 ${topoSola + espessura} 22 ${topoSola + espessura * 0.4} 30 ${topoSola} Z`;
    const sola = `M40 ${topoSola + espessura - 1} L384 ${topoSola + espessura - 1} C384 194 376 196 364 196 L50 196 C40 196 36 ${topoSola + espessura + 2} 40 ${topoSola + espessura - 1} Z`;

    let detalheSola = '';
    if (modelo.solado === 'ar') {
      const altura = espessura - 14;
      detalheSola = [[64, 92], [236, 112]].map(([x, largura]) =>
        `<rect x="${x}" y="${topoSola + 7}" width="${largura}" height="${altura}" rx="${altura / 2}" fill="#e3f2ff" fill-opacity=".5" stroke="#fff" stroke-opacity=".75" stroke-width="1.5"/>` +
        `<path d="M${x + 10} ${topoSola + 11} H${x + largura - 14}" stroke="#fff" stroke-opacity=".8" stroke-width="2" stroke-linecap="round"/>`).join('');
    } else if (modelo.solado === 'ondas') {
      for (let x = 70; x <= 370; x += 20) detalheSola += `<path d="M${x} ${topoSola + 4} q-7 ${espessura / 2} -15 ${espessura - 4}" stroke="${cores.sola}" stroke-opacity=".6" stroke-width="5" fill="none" stroke-linecap="round"/>`;
    } else if (modelo.solado === 'grosso') {
      detalheSola = `<rect x="0" y="${topoSola - 4}" width="400" height="${espessura * 0.45 + 4}" fill="${cores.entressola2}"/>`;
      if (modelo.cravos) for (let x = 54; x <= 370; x += 18) detalheSola += `<rect x="${x}" y="${topoSola + espessura - 7}" width="9" height="8" rx="2" fill="${cores.sola}"/>`;
    } else {
      detalheSola = `<path d="M34 ${topoSola + espessura * 0.45} H384" stroke="#000" stroke-opacity=".2" stroke-dasharray="4 4" stroke-width="1.2"/>`;
    }

    const detalhe = {
      faixa: `<path d="M112 ${base - 30} L322 ${base - 62} L326 ${base - 50} L116 ${base - 18} Z" fill="${cores.detalhe}"/><path d="M128 ${base - 12} L330 ${base - 42}" stroke="${cores.detalhe}" stroke-width="3" opacity=".7"/>`,
      traseira: `<path d="M0 0 L176 0 C150 80 140 140 150 ${base} L0 ${base} Z" fill="${cores.detalhe}"/>`,
      painel: `<path d="M150 ${base} L184 ${base} L238 ${lingua + 22} L206 ${lingua + 10} Z" fill="${cores.detalhe}"/>`,
      calcanhar: `<path d="M0 ${base} L0 ${calcanhar + 20} C50 ${calcanhar + 26} 96 ${base - 60} 108 ${base} Z" fill="${cores.detalhe}"/>`,
      janela: `<rect x="126" y="${base - 66}" width="92" height="38" rx="16" fill="${cores.detalhe}" fill-opacity=".9"/><path d="M140 ${base - 47} H204" stroke="${cores.sobreposicao}" stroke-opacity=".5" stroke-dasharray="3 4" stroke-width="1.5"/>`,
      nenhum: '',
    }[modelo.detalhe];

    const superficie = modelo.malha
      ? `<rect width="400" height="210" fill="url(#k${id})"/><path d="${gola}" stroke="${cores.detalhe}" stroke-width="22" fill="none"/>`
      : `<ellipse cx="392" cy="${base + 4}" rx="80" ry="34" fill="${cores.sobreposicao}"/>` +
        `<path d="M0 ${base} L0 ${calcanhar + 30} C50 ${calcanhar + 36} 92 ${base - 60} 104 ${base} Z" fill="${cores.sobreposicao}"/>` +
        `<rect x="0" y="${base - 13}" width="400" height="14" fill="${cores.sobreposicao}"/>` +
        `<path d="M0 ${base - 13} H400" stroke="#000" stroke-opacity=".22" stroke-dasharray="3 3"/>`;

    let cadarcos = '';
    if (modelo.cadarco) {
      for (const t of [0.08, 0.24, 0.4, 0.56, 0.72]) {
        const [x, y] = pontoNaCurva(pontosPeito, t), [x2, y2] = pontoNaCurva(pontosPeito, t + 0.02);
        const comprimento = Math.hypot(x2 - x, y2 - y), dx = (x2 - x) / comprimento, dy = (y2 - y) / comprimento, nx = -dy, ny = dx;
        cadarcos += `<circle cx="${x + nx * 12}" cy="${y + ny * 12}" r="2.4" fill="#000" fill-opacity=".35"/>` +
          `<path d="M${x + nx * 12 - dx * 7} ${y + ny * 12 - dy * 7} L${x - nx + dx * 7} ${y - ny + dy * 7} M${x + nx * 12 + dx * 7} ${y + ny * 12 + dy * 7} L${x - nx - dx * 7} ${y - ny - dy * 7}" ` +
          `stroke="${cores.cadarco}" stroke-width="4" stroke-linecap="round"/>`;
      }
    }

    return `<svg viewBox="0 0 400 210" aria-hidden="true" focusable="false">
  <defs>
    <clipPath id="c${id}"><path d="${cabedal}"/></clipPath>
    <clipPath id="e${id}"><path d="${entressola}"/></clipPath>
    <linearGradient id="g${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient>
    <radialGradient id="s${id}"><stop offset="0" stop-color="#000" stop-opacity=".6"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
    <pattern id="k${id}" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M0 2.5 H5" stroke="#000" stroke-opacity=".13" stroke-width="1.2"/></pattern>
  </defs>
  <ellipse cx="208" cy="197" rx="180" ry="8" fill="url(#s${id})"/>
  <path d="${sola}" fill="${cores.sola}"/>
  <path d="${entressola}" fill="${cores.entressola}"/>
  <g clip-path="url(#e${id})">${detalheSola}<path d="M30 ${topoSola + 2} H384" stroke="#fff" stroke-opacity=".45" stroke-width="2"/></g>
  <rect x="38" y="${calcanhar - 10}" width="13" height="24" rx="4" fill="${cores.detalhe}" transform="rotate(-12 44 ${calcanhar})"/>
  <path d="${cabedal}" fill="${cores.cabedal}"/>
  <g clip-path="url(#c${id})">
    ${superficie}
    ${detalhe}
    ${modelo.cadarco ? `<path d="${peito}" stroke="${cores.sobreposicao}" stroke-width="26" fill="none"/>` : ''}
    <path d="${gola}" stroke="#000" stroke-opacity=".28" stroke-width="7" fill="none"/>
    <rect width="400" height="210" fill="url(#g${id})"/>
  </g>
  <path d="${cabedal}" fill="none" stroke="#000" stroke-opacity=".25" stroke-width="1.2"/>
  ${cadarcos}
</svg>`;
  }

  // dois tamanhos esgotados por modelo, sempre os mesmos
  function esgotados(indice) {
    return new Set([TAMANHOS[(indice * 3) % 10], TAMANHOS[(indice * 7 + 4) % 10]]);
  }

  // o nicho completo (facho, reflexo, prateleira com LED, tênis e etiqueta), igual no design system e na loja
  function nicho(indice) {
    const modelo = MODELOS[indice], numero = String(indice + 1).padStart(2, '0');
    const botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'nicho';
    botao.setAttribute('aria-label', `${modelo.nome}, ${reais.format(modelo.preco)}. Ver de perto`);
    botao.innerHTML = '<span class="facho"></span><span class="reflexo"></span><span class="prateleira"><span class="led"></span></span>' +
      `<span class="tenis">${desenhar(modelo, indice)}</span><span class="etiqueta">${modelo.nome}<span>${numero} / Série 01</span></span>`;
    return botao;
  }

  window.Tenis = { MODELOS, TAMANHOS, desenhar, esgotados, nicho, reais };
})();
