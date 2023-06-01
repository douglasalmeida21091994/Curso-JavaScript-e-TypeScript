
// Fazendo a conta normal com Number:

let num = 1 
let num2 = 2.5

console.log(num + num2) // = 3.5

//////////////////////////////////////

// Agora vou concatener com STRING:

let num3 = 5
let num4 = 10

console.log(num3.toString() + num4) // = 510 apenas juntei os dois e não somei. PORE´A VARIÁVEL CONTINUA Number

console.log(typeof num3) // confirmando que ainda é Number

//////////////////////////////////////


// Para transformar o meu num3 definitivo em uma STRING: num3 = num3.toString()

//////////////////////////////////////

// REPRESENTAÇÃO BINÁRIA:

let num5 = 2357
console.log(num5.toString(2)) // o Nº 2 faz com que informe a representação binária

// num5 = Number(num5.toFixed(2)) PODERIA FAZER ASSIM TAMBÉM, porém altero ele todo e não apenas na impressão

//////////////////////////////////////

// ARREDONDANDO O NÚMERO

let num6 = 12.321548975
console.log(num6.toFixed(2)) // O Nº 2 é quantas casas decimais eu quero => ficou: 12.32

//////////////////////////////////////

// CHEGAR SE O NÚMERO É INTEIRO:

let num7 = 12
console.log(Number.isInteger(num7))  // Retorna: true or false

//////////////////////////////////////

// SABER SE A CONTA FEITA É VERDADEIRA ou FALSA:

let conta = num7 * "10"
console.log(Number.isNaN(conta)) // Se puder ser feito, retorna: true || Se não puder, retornará: false

//////////////////////////////////////

