const BtnVoltar = document.querySelector(".btn-voltar");
const BtnAvancar = document.querySelector(".btn-avancar");
const Cartoes = document.querySelectorAll(".cartao");

let CartaoAtual = 0;

function esconderCartaoSelecionado() {
    const CartaoSelecionado = document.querySelector(".selecionado");
    CartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartaoSelecionado(indeceCartao) {
    Cartoes[indeceCartao].classList.add("selecionado");

}

BtnVoltar.addEventListener("click", () => {
    if(CartaoAtual <= 0) {
        CartaoAtual = 4;
    }

    esconderCartaoSelecionado();

    CartaoAtual--;
    mostrarCartaoSelecionado(CartaoAtual);

});

BtnAvancar.addEventListener("click", () => {
    if(CartaoAtual >= 3) {
        CartaoAtual = -1;
    }
    
    esconderCartaoSelecionado();
    
    CartaoAtual++;
    mostrarCartaoSelecionado(CartaoAtual);

});