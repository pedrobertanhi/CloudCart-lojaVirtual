# CloudCart

Loja virtual de produtos digitais desenvolvida com **HTML, CSS e JavaScript puro**. O projeto apresenta um catálogo interativo com pesquisa, filtros, carrinho de compras e uma demonstração de pagamento via PIX, tudo em uma interface responsiva com tema escuro.

[Acessar demonstração](https://cloudcart-projeto.netlify.app/)

<img width="1774" height="887" alt="image" src="https://github.com/user-attachments/assets/096e598f-ecbb-41af-aea4-37579913f593" />


## Funcionalidades

- Catálogo de cursos, softwares, e-books, templates e recursos digitais.
- Pesquisa de produtos por nome ou descrição.
- Filtros por categoria.
- Carrinho com inclusão e remoção de itens, quantidade e cálculo do total.
- Modal de checkout com QR Code e código PIX copiável para demonstração.
- Layout responsivo para computadores, tablets e celulares.
- Página institucional com informações sobre o projeto.

## Tecnologias

- HTML5
- CSS3 com Flexbox, Grid, variáveis e animações
- JavaScript
- Google Fonts com a família Poppins
- QR Server API para gerar o QR Code demonstrativo
- Netlify para hospedagem da demonstração

## Executar localmente

O projeto não exige instalação de dependências ou processo de compilação. Clone o repositório e abra o arquivo `index.html` no navegador:

```bash
git clone https://github.com/pedrobertanhi/CloudCart-lojaVirtual.git
cd CloudCart-lojaVirtual
```

Para evitar limitações do navegador ao abrir arquivos locais, você também pode iniciar um servidor simples:

```bash
python -m http.server 8000
```

Depois, acesse **http://localhost:8000/**.

## Estrutura do projeto

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página inicial, catálogo, carrinho e modal de pagamento |
| `sobre.html` | Página institucional do CloudCart |
| `css/` | Estilos divididos por área da interface |
| `js/produtos.js` | Dados e consultas do catálogo |
| `js/produtos-ui.js` | Exibição, pesquisa e filtros dos produtos |
| `js/carrinho.js` | Regras e atualização visual do carrinho |
| `js/pagamento.js` | Abertura do modal e cópia do código PIX |
| `img/` | Logotipo e demais recursos visuais locais |

## Observação

Este é um projeto demonstrativo de front-end. O QR Code e o código PIX exibidos são ilustrativos e não processam pagamentos reais. Os produtos, dados institucionais e contatos apresentados fazem parte da demonstração.

## Autor

Desenvolvido por [Pedro Bertanhi](https://github.com/pedrobertanhi).
