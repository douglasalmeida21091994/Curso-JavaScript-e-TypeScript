
/* ####### TODO TEXTO QUE ESTÁ DENTRO DE ASPAS OU CRASES, SÃO STRINGS = TEXTO, NO JS ####### */

// Posso imprimir texto, SEMPRE COM ASPAS ou CRASES, conforme exemplos abaixo:

console.log('Olá, mundo, com aspas simples'); // STRING = TEXTO

// ou desta forma:

console.log("Olá, eu sou o Douglas, com aspas duplas");

// Ambas as formas acima quebram linhas de forma automática. Porém, posso quebrar linha da forma abaixo:

console.log(`Crases invertidas`);

// QUAIS SÃO AS DIFERENÇAS:

/*

1º e 2º exemplo não posso usar aspas duplas dentro de um texto, ou seja, não poderá colocar aspas no nome "mundo"

Teria que fazer da seguinte forma:

*/

console.log("Olá, mundo, com 'aspas simples'");
console.log('Olá, eu sou o Douglas, com "aspas duplas"');

// No meu 3º exemplo, posso usar tanto ASPAS SIMPLES '' ou ASPAS DUPLAS "", pois a princípio eu usei CRASES INVERTIDAS. Pois nesse caso não confundo o "motor" do JS.

// Exemplo abaixo:

console.log(`Crases invertidas = Posso usar 'aspas simples' ou "aspas duplas"`);

// POSSO EXIBIR NÚMERO DA FORMA ABAIXO, SEM ASPAS:

console.log(28, 15.8, 'Douglas Almeida'); // apenas números = Number = número
