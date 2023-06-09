/**
 *  AULA SOBRE OPERADORES ARITMÉTRICOS, ATRIBUIÇÃO, INCREMENTO, DECREMENTO
 * 
 */


/* OP. ARITMÉTRICOS, SÃO:

+  adeção e concactenação
- divisão
/ subtração
** potencialização
% resto da divisão

ORDEM: parênteses (), Potencialização, Multiplicação, Divisão, adição e subtração

*/


// ADIÇÃO:

const num1 = 5
const num2 = 10

console.log(num1 + num2)

// CONCATENAÇÃO (união):

const num3 = "10"
const num4 = 7

console.log(num3 + num4)  // nesse caso estarei unindo minga STRING com o meu NUMBER = 107

// POTENCIALIZAÇÃO:

const num5 = 10
const num6 = 2

console.log(num5 ** num6) // aqui é: 10 elevado a 2 ou seja 10 ao quadrado = 100

// RESTO DA DIVISÃO:

const num7 = 10
const num8 = 3

console.log(num7 % num8) // o que seria aqui: 10 / por 3 = resto, ou seja: 1 (um), é o que sobra

// EXEMPLO, sem ter resto, dando zero (0):

const num9 = 10
const num10 = 5

console.log(num9 % num5) // 10 / 5 = 2 número inteiro, não sobra nada para 10. Nesse caso, resultado = 0


// OPERADOR DE INCREMENTO: ++ (ele soma +1)

let contador = 5
contador++

console.log(contador) // resultado = 6

let contador2 = 5
contador2++
contador2++
contador2++
contador2++
contador2++

console.log(contador2) // resultado = 10, pois sem que eu chamar e incrementar ele adicionará 1. NÃO DÁ PRA FAZER COM CONSTANTE

// NESSE DOIS EXEMPLO, PRIMEIRO ELE FAZ A ADIÇÃO E DEPOIS RETORNA O VALOR


// NO CASO DO PÓS, QUE É VIA CONSOLE, ELE EXECUTA A AÇÃO PRIMEIRO E DEPOIS ADICIONA NA PRÓXIMA LINHA

let contador3 = 2

console.log(contador3++) // aqui eu pedi pra ele adicionar +1. Porém, ele não mostrará, a adicação vai para a linha 80. APENAS ESSE CONSOLE NÃO O FARÁ MOSTRAR O RESULTADO 3
console.log(contador3) // aqui é quando eu informo que quero que ele mostre o resultado que pedi. PORÉM, ELE VAI MOSTRAR O valor de contador3: 2 + o valor de contador3++: 3


// PRA MOSTRAR DIRETO, O INCREMENTADOR TEM QUE ESTÁ NO PRÉ, IGUAL AO EXEMPLO ABAIXO:

let contador4 = 2
console.log(++contador4) // resultado direto = 3



// OPERADOR DE DECREMENTO: --

let contador5 = 10
console.log(--contador5) // resultado = 9 | Sempre que o chamar, diminuirá 1

// TEMOS O PRÉ E PÓS TAMBÉM

/**
 * A MELHOR FORMA É SEMPRE A DE BAIXO, POIS NÃO FAZ DIFERENÇA SE É PÓS OU PRÉ
 */

let contador6 = 2
contador6++
console.log(contador6) // resultado 3

let contador7 = 2
contador7--
console.log(contador7) // resultado 1

// DAS OUTRAS FORMAS PODE CAUSAR BUG


// QUANDO FOR PARA INCREMENTAR VÁRIAS VEZES, É INTERESSANTE FAZER UM STEP (DE QUANTOS EM QUANTOS MUDARÁ):

const step = 2 // aqui vai ser de quanto em quanto eu  quero que mude o valor
let contador10 = 0
contador10 = contador10 + step // ou seja: zero + 2 = 2
console.log(contador10) // Resultado: 2

// SE EU CHAMAR MAIS VEZES, ELE VAI MUDAR DE 2 EM 2, devido ao meu step

contador10 = contador10 + step
console.log(contador10) // Resultado: 4 e assim sucessivamente, quantas vezes eu o chamar

// CASO EU QUEIRA MUDAR DE QUANTO EM QUANTO, BASTA MUDAR A MINHA CONST STEP

// Porém, pode ser feita a mesma coisa da forma abaixo:

const step2 = 10
let contador11 = 0
contador11 += step2 // é a mesma coisa de: contador11 = contador11 + step2
console.log(contador11) // Resultado: 10

contador11 += step2 // é a mesma coisa de: contador11 = contador11 + step2
console.log(contador11) // Resultado: 20

// OU POSSO FAZER DE FORMA MAIS RESUMIDA:

let contador12 = 0
contador12 += 2 // LER ASSIM: contador12 é = a contador12 mais 2 = 2 (zero mais 2)
contador12 += 2 
contador12 += 2 
contador12 += 2 // Resultado até aqui = 8
console.log(contador12) // Mostra o resultado final = 8

let contador13 = 2
contador13 *= 2 // LEITURA: contador13 = contador3 vezes 2 = 4 (dois vezes dois)
contador13 *= 2 // LEITURA: resultado do anterior => 4 vezes 2 = 8
contador13 *= 2 // LEITURA: resultado do anterior => 8 vezes 2 = 16
console.log(contador13)

let contador14 = 10
contador14 **= 2 // LEITURA: 10 ao quadro = 100
console.log(contador14)

// PODE SER FEITO COM QUALQUER OPERADOR.


// ALTERANDO O VALOR DA STRING, CONVERTENDO PARA Number, para que eu tenha a soma

const idade = 10
const idade2 = "20"  // aqui o meu tipeoff = string. se eu somo com a const idade, ficaria 1020. Pois ele concaternou ou seja, uniria os dois e não somaria.
console.log(idade + idade2) // Resultado: 1020 Apenas com o sinal de + que dá erro, pois o mais é uma concatenação também no JS


// PARA SOMAR, tenho que chamar o parseInt() antes da string

const idade3 = 10
const idade4 = parseInt("20") // eu estou falando que quero que ele transforme em número inteiro || Se não colocar, daria o erro: NaN - Not a Number, e com o parseInt, ele torna-se um Number

// se a CONST IDADE4 fosse 20.2, teria que ser o parseFloat, para retornar com os números decimais.

// ou posso colocar no lugar se parsetInt ou parsetFloat ==> Number("20"), que ele faz as duas formas e o typeoff também fica Number

console.log(idade3 + idade4) // Resultado: 30
console.log(typeof idade4)

// SE EU FAÇO COM MULTIPLICAÇÃO, O MEU JAVASCRIPT TENTA RESOLVER

console.log(idade * idade2) // Resultado: 200
