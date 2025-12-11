let valorUsuario = document.querySelector("#valor")
let moedaUsuario = document.querySelector("#moedas")
let bnt = document.querySelector("#bnt")



function pegarMoeda() {
    const moeda = moedaUsuario.value;

    let fetchAPI = fetch(`https://economia.awesomeapi.com.br/last/${moeda}`)
        .then((res) => res.json())
        .then((data) => {
            displayResultado(data, moeda)
        });
}

function displayResultado(data, moeda) {
    const chave = moeda.replace("-", "")
    const valorAtual = data[chave].bid
    const cotacao = (valorAtual * valorUsuario.value).toLocaleString("pt-br", { style: "currency", currency: "BRL"})
    const divRes = document.querySelector(".display-res")

    divRes.innerHTML = `<div class="resultado">
            <p>${chave.replace("BRL", "")}$ ${valorUsuario.value} = ${cotacao}</p>
            <P>${cotacao}</P>
        </div>`
}

bnt.addEventListener("click", pegarMoeda);