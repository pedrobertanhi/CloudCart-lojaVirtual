let carrinho = [];

function mostrarMensagem(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.className = 'notificacao';
    notificacao.innerHTML = `
        <span class="icone">✅</span>
        <span class="texto">${mensagem}</span>
    `;
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.classList.add('ativo');
    }, 100);
    
    setTimeout(() => {
        notificacao.classList.remove('ativo');
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.parentNode.removeChild(notificacao);
            }
        }, 300);
    }, 3000);
}

function toggleMenu() {
    const menu = document.getElementById('menuNavegacao');
    if (menu) {
        menu.classList.toggle('ativo');
    }
}

function atualizarNavegacaoAtiva(linkAtivo) {
    document.querySelectorAll('.link-menu').forEach(link => {
        link.classList.remove('ativo');
    });
    linkAtivo.classList.add('ativo');
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('link-menu')) {
        const menu = document.getElementById('menuNavegacao');
        if (menu) {
            menu.classList.remove('ativo');
        }
        
        atualizarNavegacaoAtiva(event.target);
    }
}); 