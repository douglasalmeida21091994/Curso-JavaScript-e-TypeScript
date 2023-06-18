// 59. Break e Continue


console.log("+++++++++++++++++++++++++++++ // USANDO FOR OF: // +++++++++++++++++++++++++++++");


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of num) {     // FOR OFmostra apenas os valores

    if (i === 5) {
        console.log("Pulei o Nº 5")
        continue;
    } 
    
    console.log(i); // com esse console eu exibo o Nº 7

    if ( i === 7) {
        console.log("Parei ao achar o Nº 7") // mensagem após achar
        break;
    }

    // console.log(i)  se tivesse apenas esse console, não exibiria o Nº 7
}

console.log("");
console.log("+++++++++++++++++++++++++++++ // USANDO FOR IN: // +++++++++++++++++++++++++++++");

// USANDO FOR IN:

const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index in num2) {
    let number = num2[index];

    if (number === 4) {
        console.log("Achei o Nº 4 e continuei:");
        continue;
    }

    console.log(number);

    if (number === 6) {
        console.log("Achei o Nº 6 e parei aqui.");
        break;
    }

    // Se eu não quisesse imprimir o Nº 6, após encontrá-lo, bastava descer o  console.log(number); para cá
}

console.log("");
console.log("+++++++++++++++++++++++++++++ // USANDO FOR CLÁSSICO: // +++++++++++++++++++++++++++++");


// USANDO FOR CLÁSSICO:

const num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let inicio = 0; inicio < num3.length; inicio++) {
    let valor = num3[inicio];

    if (valor === 3) {
        console.log("Achei o Nº 3 e continuei:");
        continue;
    }

    if (valor === 8) {
        console.log("O Nº 8 não aparecerá, pois o console está abaixo. Saindo ao achar o 8.");
        break;
    }

    console.log(valor);
}

// OBS.: No FOR CLÁSSICO, sempre tem que determinar o início dentro do for.


console.log("");
console.log("+++++++++++++++++++++++++++++ // USANDO WHILE: // +++++++++++++++++++++++++++++");

const num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;

while (i < num4.length) {
    let valor2 = num4[i];

    if (valor2 === 3) {
        i++; // Se não colocar pra atualizar aqui cai no loop infinito
        continue;
    }

    
    if (valor2 === 7) {
        i++; // Se não colocar pra atualizar aqui cai no loop infinito
        break;
    }
    
    i++; // Se não colocar pra atualizar aqui cai no loop infinito
    console.log(valor2);

}


console.log("");
console.log("+++++++++++++++++++++++++++++ // USANDO DO WHILE: // +++++++++++++++++++++++++++++");


const num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let x = 0;

do {
    let numero = num5[x];

    if (numero === 4) {
        x++;
        continue;
    }

    if (numero === 7) {
        x++;
        break;
    }
    
    x++; 
    console.log(numero);

} while (x < num5.length);