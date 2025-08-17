function criarCardProduto(produto, container) {
    const card = document.createElement('div');
    card.className = 'cartao';
    card.innerHTML = `
        <img src="${produto.imagem}" class="imagem-cartao-topo" alt="${produto.nome}">
        <div class="corpo-cartao">
            <h5 class="titulo-cartao">${produto.nome}</h5>
            <p class="texto-cartao">${produto.descricao}</p>
            <div class="margem-topo-auto">
                <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
                <button class="botao-principal" onclick="adicionarAoCarrinho(${produto.id})">
                    🛒 Adicionar ao Carrinho
                </button>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function mostrarProdutos() {
    const container = document.getElementById('container-produtos');
    if (!container) return;
    
    container.innerHTML = '';
    
    obterTodosProdutos().forEach(produto => {
        criarCardProduto(produto, container);
    });
}

function filtrarPorCategoria(categoria) {
    if (categoria === 'todos') {
        mostrarProdutos();
    } else {
        const produtosFiltrados = obterProdutosPorCategoria(categoria);
        const container = document.getElementById('container-produtos');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (produtosFiltrados.length === 0) {
            container.innerHTML = '<div style="text-align: center; grid-column: 1 / -1; padding: 2rem;"><p>Nenhum produto encontrado.</p></div>';
            return;
        }
        
        produtosFiltrados.forEach(produto => {
            criarCardProduto(produto, container);
        });
    }
    
    document.querySelectorAll('.botao-categoria').forEach(btn => {
        btn.classList.remove('ativo');
        if (btn.getAttribute('data-categoria') === categoria) {
            btn.classList.add('ativo');
        }
    });
}

function buscarProdutos() {
    const entrada = document.getElementById('entrada-busca');
    if (!entrada) return;

    const termo = entrada.value.toLowerCase().trim();
    
    if (termo === '') {
        mostrarProdutos();
        return;
    }

    const produtosFiltrados = buscarProdutosPorTermo(termo);

    const container = document.getElementById('container-produtos');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (produtosFiltrados.length === 0) {
        container.innerHTML = '<div style="text-align: center; grid-column: 1 / -1; padding: 2rem;"><p>Nenhum produto encontrado.</p></div>';
        return;
    }
    
    produtosFiltrados.forEach(produto => {
        criarCardProduto(produto, container);
    });
} 