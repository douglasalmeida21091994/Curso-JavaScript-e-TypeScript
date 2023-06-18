// Escreva uma função chamada Epaisagem que recebe dois argumentos: Largura e Altura de uma imagem (Number).
// Retorne true se a imagem estive no modo paisagem

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem(1900, 920));

// Poderia deixar assim:

function ePaisagem2(largura, altura) {
    return largura > altura
}

console.log(ePaisagem2(920, 1900));


// OUTRA FORMA, e muito usado é o arrow function:

const Epaisagem = (x, y) => largura > altura;
console.log(ePaisagem(1920, 930));