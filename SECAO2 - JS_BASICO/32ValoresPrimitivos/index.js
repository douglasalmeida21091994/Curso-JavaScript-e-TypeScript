/*  

IMUTÁVEIS:  Falamos do valor

Dados Primitivos: String, Number, Boolean, Undefined, null (bingint symbol)

AQUI SÃO APENAS COPIADOS

*/

//      valor:
let a = "A";
let b = a;  // fiz uma cópia apenas. Porém, ao longo do código, b, manterá seu valor
console.log(a, b); // Resultado: A A

// Exemplo:

a = "outra coisa"; // Alterei o valor de a, porém, o valor de b, permanece sendo a
console.log(a, b);


//////////////////////////////////////////////////////////////////////////////////////////////


/* 

Valores por referências: (MUTÁVEL) - array, object, function

AQUI APONTARÃO PARA O MESMO LUGAR NA MEMÓRIA

*/

let c = [1, 2, 3, 4];
let d = c; // Nesse caso eu não fiz uma cópia, pois ambos apontam/recem: [1, 2, 3, 4] na memória
let e = d; // Também apontará para o mesmo lugar na memória
console.log(c, d);

// Se eu altero um, alterará o outro.

// EXEMPLO:

c.push(10);  // Alterei os dois, pois adicionei o 10 ao final
console.log(c, d);  

// OU SE ALTERAR O d TAMBÉM ALTERARÁ O c:

d.pop(); // retirando o valor final
console.log(c, d); // o 10 que eu inseri com o push já não existirá mais

c.push("Douglas");
console.log(e); // Eu dei o push no C, porém, o E terá alteração, pois apontam para o mesmo lugar na memória

// SE FOSSE PARA COPIAR, eu faria o seguinte:

let x = [1, 2, 3];
let y = [...x];
let z = y;

// O que eu fiz? Copiei os valores de X, em Y, e Z, ficou apontando apenas para Y. Se eu alterar o valor de X, os demais não mudarão, pois Y, tem valor independente.

console.log(x, y, z);

x.push("TESTE em x");
console.log(x, y, z);

// resultado: [ 1, 2, 3, 'TESTE em x' ] [ 1, 2, 3 ] [ 1, 2, 3 ] 

z.unshift("INÍCIO"); // Como Y e Z apontam para o mesmo local, alterando também em Z, altera em Y
console.log(x, y, z);


//////  COM OBJETOS:

const  m = {
    nome: "Douglas",
    sobrenome: "Almeida",
    idade: 28,
}

const n = m; 
console.log(n, m);

//

m.nome = "Francisco";  // Alterei o meu M, porém, o N também altera, pois AMBOS apontam para o mesmo lugar na memória
console.log(n);

// SE FOSSE PARA COPIAR, faria a mesma coisa da ARRAY:

const  r = {
    nome: "Douglas",
    sobrenome: "Almeida",
    idade: 28,
}

const g = {...r}; // Fazendo isso, eu estou copiando os valores de R para esta const
r.nome = "MUDEI O NOME"; // Como eu fiz a cópia, mesmo alterando o R, não altero o G

console.log(r, g);




// pop() => REMOVE no FINAL de uma array ou string
// shift() => REMOVE no INÍCIO de uma array ou string

// push() => ADICIONA no FINAL de uma array ou string
// unshift() => ADICIONA no INÍCIO de uma array ou string