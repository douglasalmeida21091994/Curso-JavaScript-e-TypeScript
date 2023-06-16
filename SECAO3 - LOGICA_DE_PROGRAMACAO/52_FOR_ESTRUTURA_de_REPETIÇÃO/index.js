
// 52. For - Clássico - Estrutura de repetição

// FOR CLÁSSICO:


// i = index = ONDE INICIA A CONTAGEM, depois informo onde para e depois de quanto em quanto, com incremento ou decremento
// separa pelo ponto e vírgula

for (let i = 0; i <= 10; i++) { // Caso não queira de ir um em um, posso fazer: i += 10, nesse caso iria de 10 em 140
    console.log(i);
}

// POSSO INICIAR DE QUALQUER NÚMERO

for (let n = 40; n <= 100; n += 10) {  // PULANDO DE 10 EM 10
    console.log(n);
}

// normalmente usa-se o i de index

// Posso começar de valores negativos também

// Posso começar de cima para baixo também

for (d = 1000; d >= 500; d -= 50) {  // decrementando de 50 em 50 até chegar a 500
    console.log(d);
}

// POSSO FALAR QUAL NÚMERO É IMPAR:

for (p = 0; p <= 10; p++) {
    const par = p % 2 === 0 ? "É par" : "É ímpar"; // Se o resto da divisão for 0 (zero), é TRUE ou seja, o número é PAR || coloquei a operação ternária para informar
    console.log(p, par)
}


// PECORRENDO UM ARRAY E INFORMAR AUTOMATICAMENTE QUAL O ÍNDICE DE CADA ARRAY

const frutas = ["Maçã", "Pêra", "Uva", "João", "Otávio", "Miranda", "Douglas", "Maria"];

for (let x = 0; x < frutas.length; x++) { // tenho que deixar com o sinal de menor quê, senão mostrará um índice a mais
    console.log(`Índice ${x}`, frutas[x]);
}