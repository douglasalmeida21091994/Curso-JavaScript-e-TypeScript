/* 

OPERADORES DE COMPARAÇÃO:

>     Maior quê
>=    Maior que ou igual a
<     Menor Quê
<=    Menor que ou igual a
=     Atribuição
==    Igualdade         (Checa apenas valor)   NÃO É RECOMENDADO UTILIZAR ESSA ************
===   igualdade estrita (chega valor e tipo)
!=    Diferente         (Checa apenas diferença de valor)   NÃO É RECOMENDADO UTILIZAR ESSA ************
!==  Diferente estrito  (Checa diferença de valor e tipo)

*/

console.log(10 > 5);

console.log(10 >= 5); 

// MOTIVO DE NÃO USAR O == :

const num1 = 10;  // Number
const num2 = "10"; // String
const total = num1 == num2;
console.log(total);

// SEMPRE USAR O ===, pois chegará tipo e valor:

const num3 = 10;  // Number    VALOR: 10 tipo: Number
const num4 = "10"; // String   VALOR: 10 tipo: STRING
const total2 = num1 === num2;
console.log(total2);

// NÃO USAR O != pois chega apenas o VALOR:

const num5 = 10;  // Number    VALOR: 10 tipo: Number
const num6 = "10"; // String   VALOR: 10 tipo: STRING
const total3 = num5 != num6;
console.log(total3); // Resultado: FALSE, porém sabemos que é TRUE, pois tenho uma STRING e NUMBER. Apenas os valores são iguais


// SEMPRE USAR: !==

const num7 = 10;  // Number    VALOR: 10 tipo: Number
const num8 = "10"; // String   VALOR: 10 tipo: STRING
const total4 = num7 !== num8;
console.log(total4); // rESULTADO: true