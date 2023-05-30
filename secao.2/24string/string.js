// STRING

let umaString = "É um 'texto'"
let umaString2 = 'É um "texto"'
let umaString3 = "É um \"texto\"" 
let umaStrin4 = "É um \\texto" // aparecerá uma barra invertida


//////////////////////////////////////////////////////

//           indíce: 012345678  CADA LETRA É UM INDÍCI, pois as STRING são indexadas
let olhandoIndice = "É um texto"

//como olhar o índice que a letra se refere: variável[]

console.log(olhandoIndice[3])  // resultado =  'm'  só é exibido essa letra

// OU:

console.log(olhandoIndice.charAt(9)) // resultado 'o'

// ' ' = espaço

// AS TRES FORMAS DE CONCATENAR:

console.log(olhandoIndice.concat(' de exemplo para CONCATENAR.'))
console.log(olhandoIndice + ' de exemplo para CONCATENAR.')
console.log(`${olhandoIndice} de exemplo para CONCATENAR.`) // MAIS UTILIZADA

// PESQUISANDO POR UM ÍNDICE pela palavra:

console.log(olhandoIndice.indexOf('texto')) // resultado: 5, pois começa no índice 5





// SUBSTITUINDO ALGUMA LETRA EM MINHA STRING:

let sub = "o rato roeu a roupa do rei de roma às 16h."

//substituindo o R por algum caractere || a letra g, faz com que seja substituído em todo os R
console.log(sub.replace(/r/, '#'))

// SUBSTITUINDO EM TODOS OS R:

console.log(sub.replace(/r/g, '#'))

// VERIFICAR O TAMANHO DA MINHA STRING:

console.log(sub.length)

// PEGANDO SÓ UMA PARTE DA STRING:

console.log(sub.slice(2, 6)) // resultado: rato

console.log(sub.slice(-3))  // resultado: 6h.

console.log(sub.slice(39))  // resultado: 6h.