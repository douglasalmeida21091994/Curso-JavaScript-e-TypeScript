// 56. For of - Estrutura de repetição

const nome = "Douglas Almeida";


// FOR CLÁSSICO:

for (let i = 0; i < nome.length; i++) {
   // console.log(inicio); // Informando os índices ou seja, apenas mostrando, iniciando do zero até o final
    console.log(`Índice: ${i}`, nome[i]); // Informando o índice e o que está nele
}

// FOR IN: 
const nome2 = "Douglas Almeida";

for (let index in nome2) {  // Alterei o nome da variável, pois o i já está sendo usado na de cima
    console.log(index); // mostrando apenas os índices
}

// FOR OF -> ele já pega o valor, sem pegar os índices

const nome3 = "Douglas Almeida";

for (let valor of nome3) {
    console.log(valor); // Mostrará apenas os valores e não os índices
}

// FUNCIONA TAMBÉM COM ARRAY:

const frutas = ["Abacaxi", "Uva", "Pera", "Goiaba"];

for (let valor2 of frutas) {
    console.log(valor2);  // apenas os nomes das frutas
}


// FUNCÇÃO DENTRO DOS FOR:  usando com forEach

frutas.forEach(function(valor, indice, arrayCompleto) {  // 
    console.log(valor, indice, arrayCompleto); 
})


// FOR OF não funciona em OBJETOS, pois OBJETOS é iterável, não é como ARRAY


// FOR CLÁSSICO -> Geralmento com iteráveis (Array ou Strings);

// For in -> Retorna o índice ou chave. Funciona com: Strings, Array e/ou Objetos;

// FOR of -> Retorna apenas os valores. Funciona apenas com Strings e/ou Array || iteráveis

