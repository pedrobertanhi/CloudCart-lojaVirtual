function abrirPagamento() {
    const modal = document.getElementById('modalPagamento');
    if (modal) {
        modal.classList.add('ativo');
    }
}

function fecharPagamento() {
    const modal = document.getElementById('modalPagamento');
    if (modal) {
        modal.classList.remove('ativo');
    }
}

function copiarCodigoPix() {
    const codigoPix = document.getElementById('codigoPix');
    if (codigoPix) {
        codigoPix.select();
        document.execCommand('copy');
        alert('Código PIX copiado!');
    }
}

document.addEventListener('click', function(event) {
    const modalCarrinho = document.getElementById('modalCarrinho');
    const modalPagamento = document.getElementById('modalPagamento');
    
    if (event.target === modalCarrinho) {
        fecharCarrinho();
    }
    
    if (event.target === modalPagamento) {
        fecharPagamento();
    }
}); 