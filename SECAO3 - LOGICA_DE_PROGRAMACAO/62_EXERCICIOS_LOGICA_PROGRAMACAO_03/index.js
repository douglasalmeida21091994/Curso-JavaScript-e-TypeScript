
// ESCREVA UMA FUNÇÃO QUE RECEBE UM NÚMERO E RETORNO O SEGUINTE:

// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisúivel por 3 e 5 = retorna o próprio númerop
// Checar se o número é realmente um número, se não for retorna um NaN
// Use a função com número de 0 a 100


function fizzBuzz(n) {
    if (typeof n !== "number") return NaN;
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz"; // essa condição tem que ficar aqui e não em último
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}