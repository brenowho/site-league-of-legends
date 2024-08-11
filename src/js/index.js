/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões

const botoesCarrossel = document.querySelectorAll(".button");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((button, indice) => { 
    button.addEventListener("click", () => {
    //passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();
    //passo 4 - marcar o botão clicado como se estivesse selecionado
    marcarBotaoSelecionado(button);    
    //passo 5 - esconder a imagem anteriormente selecionada
    esconderImagemSelecionada();
    //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    mostrarImagemSelecionada(indice);
    //passo 7 - esconder a informação do dragão anteriormente selecionado
    esconderInformacoesSelecionadas(); 
    //passo 8 - mostrar a informação do dragão referente ao botão clicado
    mostrarInformacoesSelecionadas(indice);

});
});

function marcarBotaoSelecionado(button) {
    button.classList.add("selecionado");
}

function mostrarInformacoesSelecionadas(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderInformacoesSelecionadas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemSelecionada() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const buttonSelecionado = document.querySelector(".selecionado");
    buttonSelecionado.classList.remove("selecionado");
}

document.addEventListener("DOMContentLoaded", function() {
    const audios = {
        ashe: new Audio('./src/audio/Ashe.mp3'),
        brand: new Audio('./src/audio/Brand.mp3'),
        ivern: new Audio('./src/audio/Ivern.ogg'),
        jinx: new Audio('./src/audio/Jinx.ogg'),
        missfortune: new Audio('./src/audio/MissFortune.mp3'),
        nautilus: new Audio('./src/audio/Nautilus.mp3'),
        sona: new Audio('./src/audio/Sona.mp3'),
        senna: new Audio('./src/audio/Senna.ogg'),
        tristana: new Audio('./src/audio/Tristana.ogg')
    };

    const botoesCarrossel = document.querySelectorAll(".button");
    const imagens = document.querySelectorAll(".imagem");

    botoesCarrossel.forEach((botao, indice) => {
        botao.addEventListener('click', function() {
            // Pausar todos os áudios antes de tocar o próximo
            Object.values(audios).forEach(audio => {
                audio.pause();
                audio.currentTime = 0; // Reinicia o áudio desde o início
            });
            
            // Reproduzir o áudio correspondente ao botão clicado
            const personagem = imagens[indice].alt.toLowerCase(); // Verifique se o alt está configurado corretamente
            if (audios[personagem]) {
                audios[personagem].play();
            }
        });
    });
});
