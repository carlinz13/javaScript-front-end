alert(" is work")
const formulario = document.querySelector("#formCadastro");

const nome = document.querySelector("#nome");
const nascimento = document.querySelector("#nascimento");
const vinculo = document.querySelector("#vinculo");
const turma = document.querySelector("#turma");

const cep = document.querySelector("#cep");
const logradouro = document.querySelector("#logradouro");
const bairro = document.querySelector("#bairro");
const cidade = document.querySelector("#cidade");
const uf = document.querySelector("#uf");

const lista = document.querySelector("#listaPessoas");
const total = document.querySelector("#totalRegistros");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


// CADASTRAR PESSOA

formulario.addEventListener("submit", (event) => {

    event.preventDefault();

    const usuario = {    

        id: Date.now(),

        nome: nome.value,
        nascimento: nascimento.value,
        vinculo: vinculo.value,
        turma: turma.value,

        endereco: {
            cep: cep.value,
            logradouro: logradouro.value,
            bairro: bairro.value,
            cidade: cidade.value,
            uf: uf.value
        }

    };

    usuarios.push(usuario);

    localStorage.setItem(
        "usuarios",
        JSON.stringify(usuarios)
    );

    formulario.reset();

    console.log(usuarios);

    mostrar();

});


// MOSTRAR PESSOAS

function mostrar() {

    lista.innerHTML = "";

    usuarios.forEach(function(usuario) {

        let div1 = document.createElement("tr");

        let nome1 = document.createElement("td");
        nome1.textContent = usuario.nome;

        let nascimento1 = document.createElement("td");
        nascimento1.textContent = usuario.nascimento;

        let vinculo1 = document.createElement("td");
        vinculo1.textContent = usuario.vinculo;

        let turma1 = document.createElement("td");
        turma1.textContent = usuario.turma;

        let cidade1 = document.createElement("td");
        cidade1.textContent =
            usuario.endereco.cidade + " / " +
            usuario.endereco.uf;

        div1.appendChild(nome1);
        div1.appendChild(nascimento1);
        div1.appendChild(vinculo1);
        div1.appendChild(turma1);
        div1.appendChild(cidade1);

        lista.appendChild(div1);

    });

    total.textContent = "Total de pessoas: " + usuarios.length;

}


// CARREGAR CADASTROS AO ABRIR A PÁGINA

mostrar();
