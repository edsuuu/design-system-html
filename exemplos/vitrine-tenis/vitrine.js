// A loja: monta a parede com os nichos e move a "câmera" (transform na parede) até o tênis escolhido.
(function () {
  const { MODELOS, TAMANHOS, esgotados, nicho, reais } = window.Tenis;
  const palco = document.getElementById('palco');
  const parede = document.getElementById('parede');
  const painel = document.getElementById('painel');
  const seletor = document.getElementById('p-tamanho');
  const adicionar = document.getElementById('p-adicionar');
  const dica = document.getElementById('p-dica');
  const aviso = document.getElementById('aviso');
  const contaSacola = document.getElementById('sacola-conta');
  const doisDigitos = (numero) => String(numero).padStart(2, '0');
  const vista = {};
  const sacola = [];
  let atual = -1;

  const nichos = MODELOS.map((modelo, indice) => {
    const botao = nicho(indice);
    botao.addEventListener('click', (evento) => { evento.stopPropagation(); abrir(indice); });
    parede.appendChild(botao);
    return botao;
  });

  // a mesma parede em dois arranjos: 5x2 na tela larga, 2x5 no celular
  function montar() {
    const retangulo = palco.getBoundingClientRect();
    vista.retangulo = retangulo;
    vista.celular = retangulo.width < 720;
    vista.colunas = vista.celular ? 2 : 5;
    vista.linhas = vista.celular ? 5 : 2;
    vista.largura = vista.celular ? 400 : 320;
    vista.altura = vista.celular ? 300 : 430;
    vista.topo = vista.celular ? 200 : 110; // espaço da abertura no alto da parede
    vista.paredeLargura = vista.colunas * vista.largura;
    vista.paredeAltura = vista.topo + vista.linhas * vista.altura;
    parede.style.width = vista.paredeLargura + 'px';
    parede.style.height = vista.paredeAltura + 'px';
    nichos.forEach((botao, indice) => Object.assign(botao.style, {
      left: (indice % vista.colunas) * vista.largura + 'px',
      top: vista.topo + Math.floor(indice / vista.colunas) * vista.altura + 'px',
      width: vista.largura + 'px', height: vista.altura + 'px',
    }));
    document.body.classList.add('instantaneo');
    camera();
    requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove('instantaneo')));
  }

  function camera() {
    const { retangulo } = vista, barra = 60, rodape = 44;
    const alturaUtil = retangulo.height - barra - rodape;
    let escala, x, y;
    if (atual < 0) {
      escala = Math.min((retangulo.width - 32) / vista.paredeLargura, alturaUtil / vista.paredeAltura);
      x = (retangulo.width - vista.paredeLargura * escala) / 2;
      y = barra + (alturaUtil - vista.paredeAltura * escala) / 2;
    } else {
      const centroX = (atual % vista.colunas + 0.5) * vista.largura;
      const centroY = vista.topo + Math.floor(atual / vista.colunas) * vista.altura + vista.altura * 0.55;
      if (vista.celular) {
        const visivel = retangulo.height - painel.offsetHeight - barra;
        escala = Math.min(retangulo.width / (vista.largura * 1.05), visivel / (vista.altura * 0.8));
        x = retangulo.width / 2 - centroX * escala;
        y = barra + visivel / 2 - centroY * escala;
      } else {
        const visivel = retangulo.width - painel.offsetWidth;
        escala = Math.min(visivel / (vista.largura * 1.2), alturaUtil / (vista.altura * 0.9));
        x = visivel / 2 - centroX * escala;
        y = barra + alturaUtil / 2 - centroY * escala;
      }
    }
    parede.style.transform = `translate(${x}px, ${y}px) scale(${escala})`;
  }

  function abrir(indice) {
    atual = (indice + MODELOS.length) % MODELOS.length;
    const modelo = MODELOS[atual], fora = esgotados(atual);
    nichos.forEach((botao, posicao) => botao.classList.toggle('aceso', posicao === atual));
    document.body.classList.add('perto');
    painel.setAttribute('aria-hidden', 'false');
    document.getElementById('p-numero').textContent = `${doisDigitos(atual + 1)} / ${MODELOS.length}`;
    document.getElementById('p-nome').textContent = modelo.nome;
    document.getElementById('p-preco').textContent = reais.format(modelo.preco);
    document.getElementById('p-descricao').textContent = modelo.descricao;
    document.getElementById('p-peso').textContent = `${modelo.peso} g`;
    document.getElementById('p-drop').textContent = `${modelo.drop} mm`;
    document.getElementById('p-solado').textContent = modelo.nomeSolado;
    seletor.innerHTML = '<option value="">Escolha o tamanho (BR)</option>' +
      TAMANHOS.map((tamanho) => `<option value="${tamanho}"${fora.has(tamanho) ? ' disabled' : ''}>BR ${tamanho}${fora.has(tamanho) ? ' · esgotado' : ''}</option>`).join('');
    atualizarBotao();
    camera();
  }

  function fechar() {
    if (atual < 0) return;
    atual = -1;
    nichos.forEach((botao) => botao.classList.remove('aceso'));
    document.body.classList.remove('perto');
    painel.setAttribute('aria-hidden', 'true');
    camera();
  }

  function atualizarBotao() {
    adicionar.disabled = !seletor.value;
    dica.textContent = seletor.value ? `BR ${seletor.value} · ${reais.format(MODELOS[atual].preco)}` : 'Escolha o tamanho para continuar';
  }

  let tempoAviso;
  function avisar(texto) {
    aviso.textContent = texto;
    aviso.classList.add('mostra');
    clearTimeout(tempoAviso);
    tempoAviso = setTimeout(() => aviso.classList.remove('mostra'), 2400);
  }

  seletor.addEventListener('change', atualizarBotao);
  adicionar.addEventListener('click', () => {
    if (atual < 0 || !seletor.value) return;
    const modelo = MODELOS[atual];
    sacola.push({ nome: modelo.nome, tamanho: seletor.value, preco: modelo.preco });
    contaSacola.textContent = doisDigitos(sacola.length);
    const botaoSacola = document.getElementById('sacola');
    botaoSacola.classList.remove('pulo');
    void botaoSacola.offsetWidth;
    botaoSacola.classList.add('pulo');
    avisar(`${modelo.nome} · BR ${seletor.value} na sacola`);
  });
  document.getElementById('sacola').addEventListener('click', () => {
    if (!sacola.length) return avisar('A sacola está vazia');
    const total = sacola.reduce((soma, item) => soma + item.preco, 0);
    avisar(`${sacola.length} ${sacola.length === 1 ? 'par' : 'pares'} · ${reais.format(total)}`);
  });
  document.getElementById('p-anterior').addEventListener('click', () => abrir(atual - 1));
  document.getElementById('p-proximo').addEventListener('click', () => abrir(atual + 1));
  for (const id of ['p-voltar', 'inicio', 'colecao']) document.getElementById(id).addEventListener('click', fechar);
  palco.addEventListener('click', fechar);
  document.addEventListener('keydown', (evento) => {
    if (evento.target === seletor) return;
    if (evento.key === 'Escape') fechar();
    else if (atual >= 0 && evento.key === 'ArrowRight') abrir(atual + 1);
    else if (atual >= 0 && evento.key === 'ArrowLeft') abrir(atual - 1);
  });
  window.addEventListener('resize', montar);
  montar();
})();
