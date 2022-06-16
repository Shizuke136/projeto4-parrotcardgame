function numeroDeCartas() {
    let escolha = 0;

    while ((escolha < 4) || (escolha > 14) || (escolha % 2 != 0)) {
        escolha = prompt("Quantas cartas deseja no jogo ? Escolha um número entre 4 e 14")
    }

    return escolha
}

function createCard() {
    let conjunto = document.querySelector(".cards")
    let escolha = numeroDeCartas()

    for (let i = 0; i < escolha; i++) {
        let cartaCriada = document.createElement("div")
        cartaCriada.classList.add("card")
        cartaCriada.addEventListener("click", trocaImagem)
        cartaCriada.addEventListener("click", checaPar)

        let imagemCriada = document.createElement("img")
        imagemCriada.src = "images/front.png"
        imagemCriada.classList.add("capa")
        imagemCriada.id = i

        cartaCriada.appendChild(imagemCriada)
        conjunto.appendChild(cartaCriada)
    }

}

function trocaImagem(event) {
    let elemento = event.target
    let id = elemento.id

    let carta = document.getElementById(id)

    if (sorteio_cartas[id] > 6) {
        carta.src = `images/cartas/${sorteio_cartas[id] - 7}.gif`
    } else {
        carta.src = `images/cartas/${sorteio_cartas[id]}.gif`
    }
}

function sorteio() {
    let lista = []
    let listaEmbaralhada1 = []
    let listaEmbaralhada2 = []

    let tamanhoSorteio = document.querySelectorAll(".card").length
    for (let i = 0; i < (tamanhoSorteio / 2); i++) {
        lista.push(i)
    }

    while (listaEmbaralhada1.length < lista.length) {
        r = Math.floor(Math.random() * lista.length)
        if (!(listaEmbaralhada1.includes(r))) {
            listaEmbaralhada1.push(r)
        }
    }

    while (listaEmbaralhada2.length < lista.length) {
        r = Math.floor(Math.random() * lista.length)
        if (!(listaEmbaralhada2.includes(r))) {
            listaEmbaralhada2.push(r)
        }
    }

    let listaTotal = listaEmbaralhada1.concat(listaEmbaralhada2)

    return listaTotal
}

function checaPar(event) {
    let cartaClicada = event.target
    let id = cartaClicada.id

    par.push(id)

    if (par.length == 2) {
        item1 = document.getElementById(par[0])
        item2 = document.getElementById(par[1])

        if (item1.src == item2.src) {
            alert("Acertou")
        }
    }

    if (par.length == 2) {
        par.length = 0
    }
}

createCard()
sorteio_cartas = sorteio()
let par = []