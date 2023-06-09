// OBJETO  MATH

let num = 9.54578
let num2 = Math.floor(num) // aqui estou passando os valores de num para num2 e arredondando para baixo = 9  || próximo número inteiro
console.log(num2)

// Arredondando para cima:

let num3 = 9.54578
let num4 = Math.ceil(num3) // Arredondando para cima = 10 || próximo número inteiro
console.log(num4) 

// Arredondando para o número mais próximo, seja ele para cima ou para baixo:

let num5 = 9.54578
let num6 = Math.round(num5) // Resultado = 10, pois .54 está mais próximo de 10 do que 9 || passou da metade
console.log(num6)

// QUAL O MAIOR NÚMERO DA SEQUÊNCIA NUMÉRICA:

console.log(Math.max(1, 20, 3, 15, 89, -25, 155, -894, 10, 15.5, 14, 333,-8521, 12))  // Resultado = 333

// QUAL O MENOR NÚMERO DA SEQUÊNCIA NUMÉRICA:

console.log(Math.min(1, 20, 3, 15, 89, -25, 155, -894, 10, 15.5, 14, 333,-8521, 12))  // Resultado = -8521

// GERAR NÚMEROS ALEATÓRIOS, ENTRE O QUE FOR DETERMINADO:

console.log(Math.random()) // apenas isso, vai gerar sempre um número aleatório de 0 a 1, mas o 1 nunca será exibido.

// POSSO USÁ-LO DA SEGUINTE FORMA TAMBÉM:

const aleatorio = Math.random()
console.log(aleatorio) // essa minha const sempre mostrará um número aleatório ao ser exibida.

// USANDO DA MESMA FORMA, PORÉM, INFORMANDO QUE ELE FICARÁ ENTRE 10 e 5:

const aleatorio1 = Math.random() * (10 - 5) + 5 // assim o meu número aleatório ficará entre 10 e 5
console.log(aleatorio1)

// SE EU QUISER ARREDONDAR, TIRANDO AS CASAS DECIMAIS, FICARIA ASSIM:

const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5) // Dessa forma eu tiro as casa decimais, porém, continua entre 5 e 10 o resultado
console.log(aleatorio2)

// VALOR DE PI:

console.log(Math.PI)

// POTENCIAÇÃO:

console.log(Math.pow(2, 10)) // Eu disse: DOIS ELEVADO A 10

// OU:

console.log(2 ** 10) // Forma mais fácil || DOIS ELEVADO A 10

// PEGANDO A RAÍZ QUADRADA DE UM NÚMERO:

let raiz = 25
console.log(raiz ** (1/2))  // Pegando a Raíz quadrada

// OU direto:

console.log(raiz ** 0.5) // ESSA É A FORMA MAIS DIRETO DE PEGAR A RAÍZ QUADRADA

// EM JS POSSO DIVIDIR UM NÚMERO POR ZERO:

console.log(100 / 0) // Resultado: Infinity = NÃO É ERRO = true (verdadeiro)

// quanto maior os zeros, maior o resultado:

console.log(100 / 0.000000000001) // em algum momento ele chegará no INFINITY

// Porém, ambos continuam TRUE:

console.log(!!(100 / 0)) // Resultado: true

















