// AULA PARA VARIÁVEL COM let

let nome = "Douglas Mota"; // Texto = String

// nome é a minha variável.


// Exemplo simplesm, onde imprimirá apenas 'Douglas Mota'
console.log(nome); 

// Exemplo em Texto:

console.log(nome,", nasceu em 1994");
console.log("Em 2011", nome, "conheceu Marina!");
console.log("Em 2021", nome, "teve sua primeira filha: Maria Cecíla.")

// Posso declarar uma variável e não iniciar: 

let name; // sem definir, quando mandar rodar sai apenas: undefined, pois eu apenas declarei a var
name = "Douglas" // inicializando a variável.
console.log(name);

/* sairá até aqui apenas Douglas */

name = "Almeida";
console.log(name)

// fazendo isso, sairá Douglas e Almeida

/** REGRAS PARA VARIÁVEIS:
 * 
 * 1º Não podemos criar variáveis com palavras reservadas da linguagem
 * Ex.: leto console if 
 * 
 * 2º As variáveis precisam ter nomes significativos
 * Ex.: let n = "Douglas"; =: não é interessante colocar o nome da sua var apenas com a letra "N"
 * 
 * 3º Não podemos começar o nome da uma variável com Number
 * Ex.: let 1name = "douglas"; 
 * 
 * 4º Não podem conter espaços e/ou traços
 * 
 */

//Para nomes complexos, usamos CamelCase:  ===> É A QUE MAIS USAMOS: nomeCliente

let nomeCompletoDoCliente = 'Douglas F. Mota de Almeida';
console.log(nomeCompletoDoCliente);

// Case-Sensitive ou seja: Letra maiúscula e minúscula faz diferença, conforme exemplo abaixo:

let nomeCliente = 'José Andrade'; // maiúscla
let nomecliente = 'Luzimara';    //  minúscula

console.log(nomeCliente,"ou", nomecliente);

// Não podemos redeclarar variáveis com let, pois só imprimirá a última

let nomePessoa = "Luiz";
nomePessoa = "Mauro";

console.log(nomePessoa);  // imprime apenas: Mauro

//NÃO INTILIZAR VAR, UTILIZAR O LET