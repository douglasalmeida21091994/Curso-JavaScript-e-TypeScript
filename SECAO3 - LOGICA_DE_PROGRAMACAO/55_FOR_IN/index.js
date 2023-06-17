

// 55. For in - Estrutura de repetição

// VETOR = um único ARRAY, sem outro ARRAY dentro dele

// FOR normal:

const frutas = ["Pera", "Maçã", "Babana"];

for (i = 0; i < frutas.length; i++) {
    console.log(`Índice: ${i} - `, frutas[i]);
}


// FOR IN:   ler os índices ou chaves do objetos

const frustas2 = ["Goiaba", "Coco", "Uva"];

for (let index in frustas2) {
    console.log(`Apenas os índices: ${index}`); // Imprime apenas os ÍNDICES
    console.log(`Imprimindo os índices e depois os nomes: ${index}`, frustas2[index]); // Imprimindo os índices e depois os nomes
}

// Usando FOR IN em objetos:

const pessoa = {
    nome: "José",
    sobrenome: "Andrade",
    idade: 52,
}

for (let chave in pessoa) {
    console.log(chave); // fala apenas os nomes das chaves
    console.log(pessoa[chave]); // falará o que está determinado em cada chave
    console.log(chave, pessoa[chave]); // Informa: Nome da chave, e depois pego o que está dentro de cada chave 
}


// OUTRAS FORMAS DE ACESSAR o que está em cada CHAVE:

/* console.log(pessoa.nome); // Acessando o que está na chave: NOME
console.log(pessoa["nome"]); // Acessando também o que está na chave: NOME
*/



