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
const idade4 = ` 28 anos`;
let idade3 = 28;
let peso = 90;
const alturaEmM = 1.71;

// Poderia declarar minha variável IMC e dar valor a ela depois, porém, resolvi fazer em apenas uma linha:

let imc = peso / (alturaEmM * alturaEmM);  // IMC (Índice de Massa Corporal) é calculado: PESO / (ALTURA * ALTURA)


const geral = nome2 + sobreNome2 + idade2 + " tem " + peso + " Kg e " + alturaEmM + " de altura.";  // CONCATERNANDO


/* OU PODERÁ SER DIRETIO NO LOG, sem definifir uma constante com tudo e ficaria: */

console.log(nome2, sobreNome2, idade2, " tem ", peso, " Kg e ", alturaEmM, " de altura... FEITO DIRETO NO CONSOLE.LOG")

console.log("Resultado o meu IMC: ", imc);
console.log(geral, " FEITO PEGAR PELA MINHA CONST GERAL...");



// Aqui, para mostrar minha idade, irei declarar e depois inicializar:

let anoNascimento;
anoNascimento = 2023 - idade3; // declarei idade3, pois tem que ser Number, e a idade e idade2 estão como String

console.log(anoNascimento);


// UNINDO OS VALORES e tornando apenas uma STRING:  ' ' = espaçamento  || + = e som de i

console.log(nome2 + ' ' + sobreNome2 + ' ' + idade4 + '.');  // mais complicado de ler


// Usando em: TEMPLATE STRING:  || FORMA MAIS USADA que é sifrão e chaves para ler a variável ou constante, no JS

console.log("USANDO O MÉTODO: Template String:")
console.log(`meu nome é ${nome2} e tenho ${idade3}.`) // mais fácil de ler

console.log (`Meu IMC é: ${imc}.`)

console.log(`${nome2} ${sobreNome2} ${idade3} anos, tem ${peso}Kg e ${alturaEmM}m de altura.`)
