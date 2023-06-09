
// 50. Atribuição via desestruturação (Arrays)


// O que estiver do lado ESQUERDO é desestruturação, e o que estiver do lado DIREITO é Arrays

let a = "A";
let b = "B";
let c = "C";

// [a, b, c] = ["B", "C", "A"]; // Reatribuindo os valores das variáveis acima

// Ou:


const letras = [a, b, c];
[a, b, c] = letras;

console.log(a, b, c);

////////////////////////////////////


//               0  1  2  3  4  5  6  7  8  9 
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primeiroNumero, segundonNmero, ...resto] = numeros; // Eu joguei os índices: ZERO e UM, para as variáveis: primeiroNumero e segundonumero, RESPECTIVAMENTE.

console.log(primeiroNumero, segundonNmero); // Resultado: 1 2
console.log(resto);

// a variável RESTO, pega todo o resto da minha ARRAY


// Pegar o resto da Array: ...resto
// Espalhar: ...spread

// Caso eu não queira pegar na ordem, posso colocar um espaço vazio entre vírgulas


// POSSO FAZER DA SEGUINTE FORMA TAMBÉM:

//               0          1          2
//            0  1  2    0  1  2    0  1  0
const num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [lista1, lista2, lista3] = num;
console.log(lista3[1]) // pegando o numero 8

// ou simplesmente:

console.log(num[1][2]); // Acessando o índice 2 da lista 2, ou seja: 2ª lista número 6
