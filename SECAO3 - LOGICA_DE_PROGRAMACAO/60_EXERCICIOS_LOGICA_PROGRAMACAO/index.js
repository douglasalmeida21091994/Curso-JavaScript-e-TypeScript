
// ESCREVA UMA FUNÇÃO QUE RECEBE 2 NÚMEROS E RETORNE O MAIOR DELE:

function myFunction(x, y) {

    if (x > y) {
        return x;
    } else {
        return y;
    }
}   

// Poderia fazer utilizando uma variável:

/* const maior = myFunction(5, 10); 
   console.log(maior);
*/

console.log(myFunction(10, 20));


// REFATORANDO ESSA FUNÇÃO:


// como eu só tenho duas condições, posso eliminar o ELSE:

function myFunction2(x, y) {

    if (x > y) {
        return x;
    } {
        return y;
    }
} 

console.log(myFunction2(15, 23));


// OUTRA FORMA:   


function myFunction3(x, y) {
    return x > y ? x : y;  // usando operação ternária
} 

console.log(myFunction3(18, 25));


// OUTRA FORMA, e muito usado é o arrow function:

const myFunction4 = (x, y) => {
    return x > y ? x : y;
}

console.log(myFunction4(30, 25));

// TIRANDO AS CHAVES E return:

const myFunction5 = (x, y) => x > y ? x : y; 

console.log(myFunction5(100, 250));