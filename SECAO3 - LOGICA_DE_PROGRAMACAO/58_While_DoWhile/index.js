
// 58. While e Do While - Estrutura de repetição


// While, checa a condição e depois executa o laço

const nome = "Douglas Francisco";
let i = 0; // é onde inicia

while (i < nome.length) {
    console.log(nome[i]);
    i++; // nunca esquecer de colocar esse incremento para atualizar minha variável, senão vai entrar no loop infinito
}

// FUNÇÃO QUE GERA UM NÚMERO ALEATÓRIO

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
//let rand = random(min, max);
let rand = 10;

// !== siginifica DIFERENTE

while  (rand !== 10) {  // Se o rand for diferente de 10, continua executande, do contrário sairá fora do laço
    rand = random(min, max);
    console.log(rand);
}

///////////////////// do while:  SEMPRE executa primeiro para depois checar


do {
    rand = random(min, max);
    console.log(rand);
} while(rand !== 10);
