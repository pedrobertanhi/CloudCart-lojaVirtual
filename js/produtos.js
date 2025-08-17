const produtos = [
    {
        id: 1,
        nome: "Curso Completo de JavaScript",
        preco: 197.00,
        imagem: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Curso completo de JavaScript com 40+ horas de conteúdo e projetos práticos.",
        categoria: "cursos"
    },
    {
        id: 2,
        nome: "Pacote Adobe Creative Suite",
        preco: 299.00,
        imagem: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Pacote completo Adobe Creative Suite com Photoshop, Illustrator e Premiere Pro.",
        categoria: "softwares"
    },
    {
        id: 3,
        nome: "E-book Marketing Digital",
        preco: 47.00,
        imagem: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "E-book completo sobre estratégias de marketing digital para 2024.",
        categoria: "ebooks"
    },
    {
        id: 4,
        nome: "Template WordPress Premium",
        preco: 89.00,
        imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Template WordPress responsivo e otimizado para SEO.",
        categoria: "templates"
    },
    {
        id: 5,
        nome: "Curso de Python para Iniciantes",
        preco: 147.00,
        imagem: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Curso introdutório de Python com exercícios práticos e certificado.",
        categoria: "cursos"
    },
    {
        id: 6,
        nome: "Pacote de Ícones Premium",
        preco: 67.00,
        imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Coleção de 1000+ ícones vetoriais em diferentes estilos.",
        categoria: "recursos"
    },
    {
        id: 7,
        nome: "Curso de React Avançado",
        preco: 227.00,
        imagem: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Curso avançado de React com hooks, context e testes.",
        categoria: "cursos"
    },

    {
        id: 8,
        nome: "Curso de UI/UX Design",
        preco: 187.00,
        imagem: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Curso completo de design de interface e experiência do usuário.",
        categoria: "cursos"
    },
    {
        id: 9,
        nome: "Pacote de Fontes Premium",
        preco: 79.00,
        imagem: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        descricao: "Coleção de 50 fontes premium para design profissional.",
        categoria: "recursos"
    }
];

function obterTodosProdutos() {
    return produtos;
}

function obterProdutoPorId(id) {
    return produtos.find(produto => produto.id === id);
}

function obterProdutosPorCategoria(categoria) {
    if (categoria === 'todos') {
        return produtos;
    }
    return produtos.filter(produto => produto.categoria === categoria);
}

function buscarProdutosPorTermo(termo) {
    const termoBusca = termo.toLowerCase().trim();
    if (termoBusca === '') {
        return produtos;
    }
    
    return produtos.filter(produto => 
        produto.nome.toLowerCase().includes(termoBusca) || 
        produto.descricao.toLowerCase().includes(termoBusca)
    );
}

 