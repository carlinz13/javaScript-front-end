
let lista1 = [];
let lista111 = [];

let escrita111 = document.getElementById("escrita0");
let ok = document.getElementById("ok");

// MOSTRAR OS ITENS
function olhar() {

    ok.innerHTML = "";

    lista111.forEach(function(item) {

        let p = document.createElement("p");

        p.textContent = item;

        ok.append(p);

    });

}

// ADICIONAR
function criarel() {

    let escrita0 = escrita111.value.trim();

    if (escrita0 === "") {
        return;
    }

    lista1.push(escrita0);
    lista111.push(escrita0);

    olhar();

    escrita111.value = "";

}

// ORDENAR A-Z
function ordenar() {

    lista111.sort(function(a, b) {

        return a.localeCompare(b, "pt-BR");

    });

    olhar();

}

// VOLTAR À ORDEM ORIGINAL
function voltarOrdem() {

    lista111 = [...lista1];

    olhar();

}



// 1. Criar o array de objetos
let areas = [
    { nome: "Desenvolvimento Web", categoria: "Tecnologia" },
    { nome: "Redes de Computadores", categoria: "Tecnologia" },
    { nome: "Mecânica Industrial", categoria: "Indústria" },
    { nome: "Automação", categoria: "Indústria" },
    { nome: "Edificações", categoria: "Construção" },
    { nome: "Instalações Elétricas", categoria: "Construção" }
];

// 2. Selecionar os elementos do HTML
let catalogo = document.getElementById("catalogo");
let categoria = document.getElementById("categoria");

// 3. Criar função para exibir os cards
function exibirAreas(lista) {

    catalogo.innerHTML = "";

    lista.forEach(function(area) {

        let novoCard = document.createElement("div");

        novoCard.className = "card";

        novoCard.innerHTML = `
            <h2>${area.nome}</h2>
            <p>${area.categoria}</p>
        `;

        catalogo.appendChild(novoCard);

    });

}

// 4. Exibir todas as áreas inicialmente
exibirAreas(areas);

// 5. Criar o filtro de categorias
categoria.addEventListener("change", function() {

    let escolha = categoria.value;

    let resultado;

    if (escolha === "Todos") {

        resultado = areas;

    } else {

        resultado = areas.filter(function(area) {

            return area.categoria === escolha;

        });

    }

    // 6. Atualizar os cards
    exibirAreas(resultado);

});
//21
// 1. Selecionar os elementos
let categoria = document.getElementById("categoria");
let cards = document.getElementById("cards");

// 2. Criar os produtos
let produtos = [
    { nome: "Notebook", categoria: "Tecnologia" },
    { nome: "Celular", categoria: "Tecnologia" },
    { nome: "Máquina", categoria: "Indústria" },
    { nome: "Capacete", categoria: "Construção" },
    { nome: "Robô", categoria: "Indústria" }
];

// 3. Criar a função que mostra os cards
function renderizar(lista) {

    cards.innerHTML = "";

    lista.forEach(function(produto) {

        let card = document.createElement("div");

        card.className = "card";

        card.innerText = produto.nome;

        cards.appendChild(card);

    });

}






// 1. Selecionar os elementos
let filtro = document.getElementById("filtro");
let container = document.getElementById("container");

// 2. Criar o array de produtos
let produtos = [
    { nome: "iPhone", categoria: "Telefone" },
    { nome: "Samsung", categoria: "Telefone" },
    { nome: "Dell", categoria: "Notebook" },
    { nome: "Lenovo", categoria: "Notebook" },
    { nome: "BMW", categoria: "Carro" },
    { nome: "Ferrari", categoria: "Carro" }
];

// 3. Criar a função para mostrar os produtos
function renderizar(lista) {

    container.innerHTML = "";

    lista.forEach(function(produto) {

        let card = document.createElement("div");

        card.className = "card";

        let titulo = document.createElement("h2");

        titulo.innerText = produto.nome;

        card.appendChild(titulo);

        container.appendChild(card);

    });

}

// 1. Selecionar os elementos
let filtro = document.getElementById("filtro");
let container = document.getElementById("container");

let categoria = document.getElementById("categoria");
let produtoAtual = document.getElementById("produtoAtual");
let resultadoFiltro = document.getElementById("resultadoFiltro");
let listaRecebida = document.getElementById("listaRecebida");

// 2. Criar o array de produtos
let produtos = [
    { nome: "iPhone", categoria: "Telefone" },
    { nome: "Samsung", categoria: "Telefone" },
    { nome: "Dell", categoria: "Notebook" },
    { nome: "Lenovo", categoria: "Notebook" },
    { nome: "BMW", categoria    : "Carro" },
    { nome: "Ferrari", categoria: "Carro" }
];

// 3. Criar a função para mostrar os produtos
function renderizar(lista) {

    container.innerHTML = "";

    listaRecebida.innerText =
        "Lista recebida: " +
        lista.map(function(p) {
            return p.nome;
        }).join(", ");

    lista.forEach(function(produto) {

        produtoAtual.innerText =
            "Produto atual: " + produto.nome;

        let card = document.createElement("div");

        card.className = "card";

        let titulo = document.createElement("h2");

        titulo.innerText = produto.nome;

        card.appendChild(titulo);

        container.appendChild(card);

    });

}

// 4. Mostrar todos inicialmente
renderizar(produtos);

// 5. Detectar mudança de categoria
filtro.addEventListener("change", function() {

    let categoriaEscolhida = filtro.value;

    categoria.innerText =
        "Categoria escolhida: " + categoriaEscolhida;

    // 6. Filtrar os produtos
    let resultado = produtos.filter(function(produto) {

        return categoriaEscolhida === "Todos" ||
        produto.categoria === categoriaEscolhida;

    });

    resultadoFiltro.innerText =
        "Resultado do filter: " +
        resultado.map(function(p) {
            return p.nome;
        }).join(", ");

    // 7. Mostrar o resultado
    renderizar(resultado);

});
