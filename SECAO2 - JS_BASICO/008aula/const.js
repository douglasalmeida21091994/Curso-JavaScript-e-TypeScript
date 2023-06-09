
/** REGRAS PARA CONSTANTES:
 * 
 * 1º Não podemos criar constantes com palavras reservadas da linguagem
 *  
 * 2º As constantes precisam ter nomes significativos
 * 
 * 3º Não podemos começar o nome da uma constante com Number
 * 
 * 4º Não podem conter espaços e/ou traços
 * 
 * 5º Sâo CamelCase
 * 
 * 6º São CaseSensitive
 * 
 * 7º Não pode modificar um valor de uma constante (já precisa ser criada e inicializada de imediato)
 * 
 * 8º NÃO UTILIZAR VAR, USAR CONST
 * 
 */

const nome = 'Douglas'; // declarei com nome e inicializei (coloquei o valor) com Douglas
console.log(nome);

// NÃO POSSO MUDAR O VALOR DELA:

const name = "Mota";
/* name = "Almeida"; */
console.log(name);

/* ERRO SERÁ: TypeError: Assignment to constant variable. */

// Se precisar mudar o valor da CONSTANTE, deve-se mudar de CONST para LET  || Exemplo:

let nomeCliente = "Mota";
nomeCliente = "Almeida"; // só essa que imprime
console.log(nomeCliente);

// PEGANDO UM VALOR E ATRIBUINDO A OUTRA, 

const primeiroNumero = 10;
const segundoNumero = '20';
const mult = primeiroNumero * segundoNumero;
const soma = primeiroNumero + segundoNumero;
const div = primeiroNumero / segundoNumero;

const total = mult * 2;


console.log("Resultado da multiplicação:", mult);
console.log("Resultado da Adição:", soma);
console.log("Resultado da divisão:", div);

console.log(total);


// STRING = text (dentro de aspas ou crases invertidas) and Number = número  COM O TYPEOF

/* DESCOBRINDO SE É Number or String */

console.log(typeof(primeiroNumero));  // pode ser assim, com os parenteses ou sem (fazer sempre assim) || Resultado: Number

console.log(typeof segundoNumero); // SEM parenteeses (NÃO É UMA BOA PRÁTICA) || Resultado: String

// CONCATENAÇÃO é com o sinal de +