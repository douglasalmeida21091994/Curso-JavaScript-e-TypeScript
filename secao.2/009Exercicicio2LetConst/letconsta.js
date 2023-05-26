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
let idade3 = 28;
let peso = 90;
const alturaEmM = 1.71;

// Poderia declarar minha variável IMC e dar valor a ela depois, porém, resolvi fazer em apenas uma linha:

let imc = peso / (alturaEmM * alturaEmM);  // IMC (Índice de Massa Corporal) é calculado: PESO / (ALTURA * ALTURA)


const geral = nome2 + sobreNome2 + idade2 + " tem " + peso + " Kg e " + alturaEmM + " de altura.";


/* OU PODERÁ SER DIRETIO NO LOG, sem definifir uma constante com tudo e ficaria: */

console.log(nome2, sobreNome2, idade2, " tem ", peso, " Kg e ", alturaEmM, " de altura... FEITO DIRETO NO CONSOLE.LOG")

console.log("Resultado o meu IMC: ", imc) ;
console.log(geral, " FEITO PEGAR PELA MINHA CONST GERAL...");



// Aqui, para mostrar minha idade, irei declarar e depois inicializar:

let anoNascimento;
anoNascimento = 2023 - idade3; // declarei idade3, pois tem que ser Number, e a idade e idade2 estão como String

console.log(anoNascimento);





