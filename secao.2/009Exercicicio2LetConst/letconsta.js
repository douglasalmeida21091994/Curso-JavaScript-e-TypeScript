/*

O QUE PRECISAR MUDAR SERÁ => let
O QUE NÃO PRECISAR MUDAR SERÁ => const

ponto e vúrgula no JS é facultado

*/

const nome = "Douglas";
const sobreNome = "Almeida";
let idade = "28 anos";
const descricao1 = "e uma linda filha";
const nomeFilha = 'Maria Cecília Andrade Almeida';
const descricao2 = `de apenas 1 ano e 7 meses.`

console.log (nome, sobreNome, "tem", idade, descricao1, ". Seu nome é:", nomeFilha, descricao2)

// /////////////////////////////////////////////////////////////


const nome2 = 'Douglas F. Mota';
const sobreNome2 = " de Almeida,";
const idade2 = ` 28 anos,`;
let peso = 90;
const altura = 1.71;

const imc = peso / (altura * altura);  // IMC é calculado: PESO / (ALTURA * ALTURA)

const geral = nome2 + sobreNome2 + idade2 + " tem " + peso + " Kg e " + altura + " de altura.";

console.log(imc) ;
console.log(geral);




