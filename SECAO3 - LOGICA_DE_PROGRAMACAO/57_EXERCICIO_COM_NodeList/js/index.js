// EXERCÍCIO: pegar a cor do BODY e jogar nos parágrafos dentro da DIV


const divParagrafos = document.querySelector(".paragrafos"); // Dessa forma, selecionei apenas a minha DIV com a classe parágrafos

const ps = divParagrafos.querySelectorAll("p"); // Selecionando todos os parágrafos

const h1 = document.querySelector("h1") // Selecionando o meu H1

const body = document.querySelector("body"); // selecionando o body


// pegando a cor do BODY:

const estyleBody = getComputedStyle(document.body); // selecionando o body
const colorBackgroundBody = estyleBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = colorBackgroundBody; // Aqui eu coloquei a cor do BODY em todos os parágrafos, no BACKGROUND
    p.style.color = "purple"; // mudando a cor de todos os parágrafos para ROXO
    h1.style.color = "green"; // mudando a cor do H1
    body.style.backgroundColor = "Teal"
}



/*
divParagrafos.querySelectorAll("p"); // E aqui, selecionei todos os parágrafos dentro da minha div

console.log(divParagrafos);*/