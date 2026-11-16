 
const  categoria = document.getElementById("categoria");
        const container = document.getElementById("container");

        const produtos = [
            { nome: "POCO X8", categoria: "celular" },
            { nome: "ASUS TUF", categoria: "notebook"}
            { nome: "POCO X5", categoria: "celular" },
            { nome: "Mouse", categoria: "acessorio" },
            { nome: "Teclado", categoria: "acessorio" },
            { nome: "Acer Nitro", categoria: "notebook" }
        ];

        function renderizarCards(lista) {

            container.innerHTML = "";

            lista.forEach(item => {

                const card = document.createElement("div");

                card.classList.add("card");

                card.textContent = item.nome;

                container.appendChild(card);

            });
        }

        categoria.addEventListener("change", () => {

            const selecionado = categoria.value;

            const filtrados = selecionado === "todos"
                ? produtos
                : produtos.filter(item => item.categoria === selecionado);

            renderizarCards(filtrados);

        });

        renderizarCards(produtos);

const produtos = [
    { nome: "POCO X8", categoria: "celular" }
    { nome: "ASUS TUF", categoria: "notebook"}


const categoria = document.getElementById("categoria");
const container = document.getElementById("container");

const produtos = [
    { nome: "POCO X8", categoria: "celular" },
    { nome: "ASUS TUF", categoria: "notebook" },
    { nome: "POCO X5", categoria: "celular" },
    { nome: "Mouse", categoria: "acessorio" },
    { nome: "Teclado", categoria: "acessorio" },
    { nome: "Acer Nitro", categoria: "notebook" }
];

function renderizarCards(lista) {

    container.innerHTML = "";

    lista.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = item.nome;

        container.appendChild(card);

    });
}

categoria.addEventListener("change", () => {

    const selecionado = categoria.value;

    const filtrados = selecionado === "todos"
        ? produtos
        : produtos.filter(item => item.categoria === selecionado);

    renderizarCards(filtrados);

});

renderizarCards(produtos);


const produtos = [
    { nome: "POCO X8", categoria: "celular" },
    { nome: "ASUS TUF", categoria: "notebook" },
    { nome: "Mouse", categoria: "acessorio" }
];




alert("JavaScript funcionando no HTML!");

// 1
let elementoJava = document.querySelector("#java");

if (elementoJava) {
    elementoJava.innerText = "novo senai";
}

let sb = document.querySelector("#saber");

// 2
let bt = document.querySelector("#bt");

if (bt && sb) {
    bt.addEventListener("click", function() {
        sb.innerText = "saber foi trocado";
    });
}

// 3
document.addEventListener("click", function() {
    if (bt) {
        bt.style.backgroundColor = "red";
    }
});

// 4
const t3 = document.querySelectorAll(".tresdiv");

let ck1 = false;
let ck2 = false;

function vfclick() {
    if (ck1 === true && ck2 === true) {
        t3.forEach(function(div) {
            div.style.display = "none";
        });
    }
}

let es = document.querySelector("#es");

if (es) {
    es.addEventListener("click", function() {
        ck1 = true;
        vfclick();
    });
}

let es2 = document.querySelector("#es2");

if (es2) {
    es2.addEventListener("click", function() {
        ck2 = true;
        vfclick();
    });
}

// 5
let mudar1 = document.querySelector("#rd1");
let mudar2 = document.querySelector("#rd2");
let mudar3 = document.querySelector("#rd3");

if (mudar3 && mudar1 && mudar2) {
    mudar3.addEventListener("click", function() {
        mudar1.classList.toggle("crih1");
        mudar2.classList.toggle("crimg");
    });
}

// 6
let nome = document.querySelector("#nome");
let bz = document.querySelector("#bz");
let ms4 = document.querySelector("#mensagem1");

if (bz && nome && ms4) {
    bz.addEventListener("click", function() {
        ms4.textContent = "ola " + nome.value.trim();
    });
}

// 7
let nome2 = document.querySelector("#nome2");
let bz2 = document.querySelector("#bz2");
let ms5 = document.querySelector("#mensagem2");

if (bz2 && nome2 && ms5) {
    bz2.addEventListener("click", function() {

        if (nome2.value.trim() === "") {
            ms5.textContent = "digite seu nome";
        } else {
            ms5.textContent = "ola " + nome2.value.trim();
        }

    });
}

// 8
let recado = document.querySelector("#recado");
let btadicionar = document.querySelector("#btadicionar");
let btapagar = document.querySelector("#btapagar");
let lista = document.querySelector("#lista");

if (btadicionar && recado && lista) {
    btadicionar.addEventListener("click", function() {

        if (recado.value.trim() !== "") {

            let nvRecado = document.createElement("p");

            nvRecado.textContent = recado.value.trim();

            lista.append(nvRecado);

            recado.value = "";
        }

    });
}

if (btapagar && lista) {
    btapagar.addEventListener("click", function() {
        lista.textContent = "";
    });
}

// 9
let aviso = document.querySelector(".aviso");
let fecharaviso = document.querySelector("#fecharaviso");

if (fecharaviso && aviso) {
    fecharaviso.addEventListener("click", function() {
        aviso.remove();
    });
}

// 10
function altertema() {

    let tema1 = document.getElementById("tema1");

    if (tema1) {
        tema1.classList.toggle("tema2");
    }

}

// 11
let numero = document.getElementById("contador");
let contador = 0;

function somar() {

    contador = contador + 1;

    if (numero) {
        numero.innerText = contador;
    }

}

function subtrair() {

    if (contador > 0) {
        contador--;
    }

    if (numero) {
        numero.innerText = contador;
    }

}

// 12
let idade = document.getElementById("idade");
let btidade = document.getElementById("btidade");
let resposta = document.getElementById("resposta");

function bola() {

    if (!idade || !resposta) return;

    if (idade.value.trim() === "") {
        alert("Digite sua idade!");
        return;
    }

    if (!Number.isInteger(Number(idade.value))) {
        alert("Digite um número inteiro válido!");
        return;
    }

    if (Number(idade.value) >= 18) {
        resposta.innerText = "Você é maior de idade";
    } else {
        resposta.innerText = "Você é menor de idade";
    }

    idade.value = "";

}

// 13
let saco = document.getElementById("saco");
let parimpar = document.getElementById("parimpar");
let resposta1 = document.getElementById("resposta1");

function parimpar1() {

    if (!saco || !resposta1) return;

    if (saco.value.trim() === "") {
        alert("digite um numero inteiro valido");
        return;
    }

    if (!Number.isInteger(Number(saco.value))) {
        alert("Digite um número inteiro válido!");
        return;
    }

    if (Number(saco.value.trim()) % 2 === 0) {
        resposta1.innerText = "numero par";
    } else {
        resposta1.innerText = "numero impar";
    }

    saco.value = "";

}

// 14
let preco = document.querySelector("#preco");
let desconto = document.querySelector("#desconto");
let resultado35 = document.querySelector("#resultado35");

function calcular() {

    if (!preco || !desconto || !resultado35) return;

    let valor = Number(preco.value);
    let porcentagem = Number(desconto.value);

    if (
        preco.value.trim() === "" ||
        desconto.value.trim() === "" ||
        !Number.isFinite(valor) ||
        !Number.isFinite(porcentagem) ||
        valor < 0 ||
        porcentagem < 0 ||
        porcentagem > 100
    ) {

        resultado35.innerText = "resultado invalido";
        return;

    } else {

        let valorDesconto = valor * porcentagem / 100;

        let valorFinal = valor - valorDesconto;

        resultado35.innerText = "Valor final: R$ " + valorFinal.toFixed(2);

    }

}

// 15
let card1 = document.getElementById("ccard");

if (card1) {

    for (let i = 1; i <= 5; i++) {

        let card = document.createElement("div");

        let titulo = document.createElement("h2");

        titulo.innerText = "JavaScript funcionando!";

        card.innerText = "Produto " + i;

        card.append(titulo);

        card1.append(card);

    }

}

// 16
let formulario = document.getElementById("formulario");
let produto = document.getElementById("produto");
let lista33 = document.getElementById("lista33");

let produtos = [];

function sapo(event) {

    event.preventDefault();

    if (!produto || !lista33) return;

    if (produto.value.trim() === "") {
        return;
    }

    produtos.push(produto.value.trim());

    let nviten = document.createElement("li");

    nviten.innerText = produto.value.trim();

    lista33.append(nviten);

    produto.value = "";

}

// 17
let painel = document.querySelector(".painel");
let p = document.getElementById("p");
let escrita = document.querySelector("#escrita33");

function selecionar() {

    if (!escrita || !p || !painel) return;

    if (!escrita.value.trim()) {
        p.innerText = "digite algo para apagar";
        return;
    }

    try {

        let digitado = painel.querySelector(escrita.value);

        if (digitado) {

            digitado.remove();

        } else {

            p.innerText = "elemento não encontrado";

        }

    } catch (error) {

        p.innerText = "error";

    }

}

// 18
let lista2 = [];

let painel2 = document.getElementById("lista2");
const digitado2 = document.getElementById("escrita4");
let quantidade = document.getElementById("quantidade");

function adicionar4() {

    if (!painel2 || !digitado2 || !quantidade) return;

    if (!digitado2.value.trim()) {
        return;
    }

    lista2.push(digitado2.value.trim());

    let nvitem = document.createElement("li");

    nvitem.innerText = digitado2.value.trim();

    painel2.append(nvitem);

    quantidade.innerText = lista2.length;

    digitado2.value = "";

}

function excluir4() {

    if (!painel2 || !digitado2 || !quantidade) return;

    let digitado = digitado2.value.trim();

    const innex = lista2.indexOf(digitado);

    if (innex > -1) {

        let itens = painel2.querySelectorAll("li");

        itens[innex].remove();

        lista2.splice(innex, 1);

        quantidade.innerText = lista2.length;

        digitado2.value = "";

    }

}

// 19 CADASTRAR E BUSCAR
let lista222 = [];

let escrita222 = document.getElementById("escrita222");
let busca222 = document.getElementById("busca");
let painel222 = document.getElementById("lista222");

function cadastrar() {

    if (!escrita222) return;

    let digitad1 = escrita222.value.trim();

    if (!digitad1) {
        return;
    }

    lista222.push(digitad1);

    escrita222.value = "";

}

function mostrar(itens) {

    if (!painel222) return;

    painel222.innerHTML = "";

    itens.forEach(function(item) {

        let p = document.createElement("p");

        p.innerText = item;

        painel222.appendChild(p);

    });

}

if (busca222) {

    busca222.addEventListener("input", function() {

        let test1 = busca222.value.toLowerCase();

        let filtrados = lista222.filter(function(item) {

            return item.toLowerCase().includes(test1);

        });

        mostrar(filtrados);

    });

}

// 20 ORDENAR
let lista1 = [];
let lista111 = [];

let escrita111 = document.getElementById("escrita0");
let ok = document.getElementById("ok");

function olhar() {

    if (!ok) return;

    ok.innerHTML = "";

    lista111.forEach(function(item) {

        let p = document.createElement("p");

        p.textContent = item;

        ok.append(p);

    });

}

function criarel() {

    if (!escrita111) return;

    let escrita0 = escrita111.value.trim();

    if (escrita0 === "") {
        return;
    }

    lista1.push(escrita0);

    lista111.push(escrita0);

    olhar();

    escrita111.value = "";

}

function ordenar() {

    lista111.sort(function(a, b) {

        return a.localeCompare(b, "pt-BR");

    });

    olhar();

}

function voltarOrdem() {

    lista111 = [...lista1];

    olhar();

}
//21
let cursos = [
    { nome: "Informática", categoria: "Tecnologia" },
    { nome: "Mecânica", categoria: "Indústria" },
    { nome: "Eletricidade", categoria: "Técnico" },
    { nome: "Programação", categoria: "Tecnologia" },
    { nome: "Automação", categoria: "Indústria" },
    { nome: "Robótica", categoria: "Tecnologia" }
];

// 2. Selecionar a div do HTML
let containerCursos = document.getElementById("cards");

// 3. Percorrer o array, se o container existir no HTML
if (containerCursos) {
cursos.forEach(function(curso) {

    // 4. Criar uma div
    let card = document.createElement("div");

    // 5. Adicionar os dados dentro do card
    card.innerHTML = `
        <h2>${curso.nome}</h2>
        <p>${curso.categoria}</p>
    `;

    // 6. Colocar o card dentro do container
    containerCursos.appendChild(card);

});
}
//


const categoria = document.getElementById("categoria");
const containerFiltro = document.getElementById("container");

const produtosCatalogo = [
    { nome: "POCO X8", categoria: "celular" },
    { nome: "ASUS TUF", categoria: "notebook" },
    { nome: "POCO X5", categoria: "celular" },
    { nome: "Mouse", categoria: "acessorio" },
    { nome: "Teclado", categoria: "acessorio" },
    { nome: "Acer Nitro", categoria: "notebook" }
];

function renderizarCards(lista) {

    if (!containerFiltro) return;

    containerFiltro.innerHTML = "";

    lista.forEach(item => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.textContent = item.nome;

        containerFiltro.appendChild(card);

    });
}

if (categoria && containerFiltro) {
    categoria.addEventListener("change", () => {

        const selecionado = categoria.value;

        const filtrados = selecionado === "todos"
            ? produtosCatalogo
            : produtosCatalogo.filter(item => item.categoria === selecionado);

        renderizarCards(filtrados);

    });

    renderizarCards(produtosCatalogo);
}
//18