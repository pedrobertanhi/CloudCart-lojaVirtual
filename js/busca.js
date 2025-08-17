document.addEventListener('DOMContentLoaded', () => {
    mostrarProdutos();
    
    document.querySelectorAll('.botao-categoria').forEach(botao => {
        botao.addEventListener('click', () => {
            const categoria = botao.getAttribute('data-categoria');
            filtrarPorCategoria(categoria);
        });
    });
    
    const botaoBusca = document.getElementById('botao-busca');
    const entradaBusca = document.getElementById('entrada-busca');
    
    if (botaoBusca) {
        botaoBusca.addEventListener('click', buscarProdutos);
    }
    
    if (entradaBusca) {
        entradaBusca.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                buscarProdutos();
            }
        });
    }
}); 