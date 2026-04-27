function alterarStatus (id) {
    let jogoClicado = document.getElementById( `game-${id}`);
    let imagem = jogoClicado.querySelector(".dashboard__item__img");
    let botao = jogoClicado.querySelector(".dashboard__item__button");

    let jogoAlugado = document.querySelector(".dashboard__item__button--return");
    if (jogoAlugado && jogoAlugado !== botao) {
        alert("O jogo já está alugado! Por favor, devolva-o antes de alugar novamente.");
        return;
    }

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}