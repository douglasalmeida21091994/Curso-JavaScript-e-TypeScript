// EXERCÍCIO COM VARIÁVEIS

let varA = "A";  // B
let varB = "B";  // C
let varC = "C";  // A


/*

varA = varB // ao declarar assim, eu perco do valor do varA, tornando B
varB = varC // = C
varC = varA // = B, pois eu já disse na primeira linha que varA = B

Resultado ficaria:

B
C
B

*/

// PRA CONSEGUIR, FICARIA:

const varATemp = varA  // reservei aqui o valor de varA
varA = varB
varB = varC
varC = varATemp

// Resultado = B C A

// ou poderia fazer da seguinte forma:  [varA, varB, varC] = [1, 2, 3]  ESSA É A FORMA MAIS NOVO E RECOMENDADA, EXATAMENTE NESSA ORDEM

// Ficaria: [varA, varB, varC] = [varB, varC, varA] redeclarei os valores assim

// o console.log não mudaria.

console.log(varA, varB , varC);