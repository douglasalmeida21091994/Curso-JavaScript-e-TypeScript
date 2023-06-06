// BÁSICO SOBRE FUNÇÕES

// executa uma ação


// o corpo da função é criado pelas chaves, e com as chaves, não precisa do ;

// (nome) = parâmetro  | é uma variável | Ela é reutilizável
function saudacao(nome) {     
    console.log(`Bom dia, meu nome é ${nome}.`);
} 

// chamando a função para ser executada:
saudacao('Douglas'); // dentro do parenteses, eu falo o que eu quero que apareça, para o parâmetro acima
saudacao("Paola");

/////////////////////////////////////////////////////

function saudacao2(nome) {
    console.log(`Olá, ${nome}!`);
    return "Francisco"
}

const variavel = saudacao2("Douglas");
console.log(variavel); // só vai retonar, se eu mandar, com o return

///////////////////// FUNÇÃO RECEBE UM NOME E RETORNA ///////////////////////

function saudacao3(nome) {
    return `Boa noite! Meu nome é ${nome}!`;
}

const variavel2 = saudacao3("Douglas");  // a variável recebeu o valor
console.log(variavel2);  // pedi para imprimir

///////////////////// FUNÇÃO COM VALORES///////////////////////


// ATENÇÃO: o que está dentro do CORPO/ESCOPO DA FUNÇÃO está "protegido" (dentro de chaves), eu não posso acessar. Para eu imprimir tenho que imprimir a variável SOMA, pois está fora
function soma(x, y) {
    const resultado = x + y; // aqui é o que definine se será soma, multiplicação etc
    return resultado; // isso quer dizer que encerra-se aqui. Não lê mais nada abaixo.
}

console.log(soma(2,2)); // aqui é onde eu envio os valores para minha variável SOMA, da função
console.log(soma(5,2));
console.log(soma(9,2));
console.log(soma(4,15));

const resultado = soma(3, 3); // Aqui eu pude declarar uma CONST com o mesmo nome, pois a de cima, está dentro do escopo da função e esta está fora || AQUI É ONDE ENVIO OS DADOS PARA A VARIÁVEL DA FUNÇÃO
console.log(resultado);


///////////////////// JÁ DEIXANDO VALORES DEFINIDOS NA MINHA FUNÇÃO, CASO EU NÃO ENVIE ///////////////////////

function soma2(x = 2, y = 2) {
    const result = x + y;
    return result;
}

console.log(soma2(10)); // Aqui eu mandei apenas o valor de X, que somou com o valor já definido de y = 2

// OU:

function soma3(x = 2, y = 2) {
    const result = x + y;
    return result;
}

const resultado3 = soma3(15, 20); // mandei os dois valores
console.log(resultado3);


///////////////////// JOGANDO UMA FUNÇÃO DENTRO DE UMA VARIÁVEL (ANÔNIMA) ///////////////////////

const raiz = function(numero) {
    return numero ** 0.5;
}; // precisei do Ponto e Vírgula, pois eu falei que a variável recebe function, com o sinal de =

console.log(raiz(122)); // atribuindo esse valor na variável "RAIZ"

///////////////////// FORMA MAIS MORDERNA: ///////////////////////

const raiz2 = (numero) => {    // => substitui o nome function (ERROW FUNCTION)
    return numero ** 0.5;
};

console.log(raiz2(9));

// OU:

const raiz3 = numero => numero ** 0.5;  // Posso tirar o parenteses do meu parâmetro: numero | tiro o return etc

console.log(raiz3(9));










