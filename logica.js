
listaPerguntas = [
    {pergunta : "Qual o maior criatura vivo?",
    opcoes : [
        "Baleia azul",
        "Fundo de mel",
        "Elefante",
        "Girafa"
    ],
    correta: 1
    },
    {pergunta: "Qual a primeira capital do Brasil?",
        opcoes: [
            "Groaíras",
            "Taquara",
            "Salvador",
            "Rio de Janeiro"
        ],
        correta: 2,
    },
    {
        pergunta: "Em que ano o Brasil ganhou sua segunda Copa do Mundo?",
        opcoes: [
            "1974",
            "1970",
            "1966",
            "1962"
        ],
        correta:3,
    },
    ]

objPergunta = null;
perguntaAtual = 0

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaAcertou = document.querySelector(".tela-acertou")
telaErrou = document.querySelector(".tela-errou")
telaFinal= document.querySelector(".tela-final")

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0");
botao1 = document.querySelector(".opcao1");
botao2 = document.querySelector(".opcao2");
botao3 = document.querySelector(".opcao3");

telaAcertou.addEventListener("click", () => {
    telaAcertou.style.display = "none"
    if (perguntaAtual == 3) {
        mostrarFinal ()
    }
    else {
        iniciarJogo()
    }
})
telaFinal.addEventListener ("click", () => {
  telaFinal.style.display = "none"
  telaInicial.style.display = "block"
  perguntaAtual = 0
})

botao0.addEventListener("click", () => {
    if (objPergunta.correta == 0) {mostrarAcertou()
    } else {
        mostrarErrou()
    }
})

botao1.addEventListener("click", () => {
    if (objPergunta.correta == 1) {mostrarAcertou()
    } else {
        mostrarErrou()
    }
})

botao2.addEventListener("click", () => {
    if (objPergunta.correta == 2) {mostrarAcertou()
    } else {
        mostrarErrou()
    }
})

botao3.addEventListener("click", () => {
    if (objPergunta.correta == 3) {mostrarAcertou()
    } else {
        mostrarErrou()
    }
})




function iniciarJogo() {
    telaInicial.style.display = "none";
    
    telaPergunta.style.display = "block";
    
    mostrarPergunta();
}

function mostrarPergunta() {
    objPergunta = listaPerguntas[perguntaAtual]
    textoPergunta = document.createTextNode(objPergunta.pergunta);
    divPergunta.innerHTML = ""
    divPergunta.appendChild(textoPergunta);
    
    txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
    botao0 = document.querySelector(".opcao0")
    botao0.innerHTML = ""
    botao0.appendChild(txtOpcao1);
    
    txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
    botao1 = document.querySelector(".opcao1")
    botao1.innerHTML = ""
    botao1.appendChild(txtOpcao2);
    
    txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
    botao2 = document.querySelector(".opcao2")
    botao2.innerHTML = ""
    botao2.appendChild(txtOpcao3);
    
    txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
    botao3 = document.querySelector(".opcao3")
    botao3.innerHTML = ""
    botao3.appendChild(txtOpcao4);
    }
    
function mostrarAcertou() {
    telaPergunta.style.display = "none"
    telaAcertou.style.display = "block"
    perguntaAtual++
}
function mostrarErrou() {
    telaPergunta.style.display = "none"
    telaErrou.style.display = "block"
}
function mostrarFinal() {
    telaPergunta.style.display = "none"
    telaFinal.style.display = "block"
}