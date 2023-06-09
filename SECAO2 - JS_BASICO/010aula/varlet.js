/**
 * DIFERENÇA ENTRE VAR E LET
 * 
**/

// ECMAScript 2015 (ES6)

var nome = "Douglas";
var nome = "Almeida";

// NÃO CRIAR VARIÁVEL SEM ESPECIFICAR SE É CONST | VAR | LET, pois vai gerar uma variável global e pode dar erro no código (NÃO USAR O VAR)

idade = "28 anos"

// nesse caso, com o VAR eu posso redeclarar variável, sem gerar erro. O que é considerado um problema
console.log(`Meu nome é ${nome}, e tenho ${idade}.`);

/* SÓ PARA RELEMBRAR: Podemos redeclarar uma LET */

let ano = 2023;
ano = 2022;

// ou seja, redeclarei o ano para 2022

console.log(ano);