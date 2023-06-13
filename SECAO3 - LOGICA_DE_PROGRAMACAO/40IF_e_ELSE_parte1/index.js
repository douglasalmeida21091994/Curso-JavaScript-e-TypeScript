
// o IF pode ser usado sozinho ou com o ELSE IF

// Sempre que utilizo a palavra ELSE, preciso de um IF antes

// Posso ter vários (quantos for necessários) ELSE IF na condição/checagem 

// Só pode ter um ELSE na checagem (no final)

// Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE



const hora = 10;

if (hora < 12) {
    console.log("Bom dia!");
}

// LEITURA: Se hora for menor do que 12, fale: "Bom dia!"

// Tudo que estiver dentro da chaves acima, estará dentro da condição IF


/* 
Entre 0 e 11 FALARÁ BOM DIA!
Entre 12 e 17 FALARÁ BOA TARDE!
Entre 18 e 23 FALARÁ BOA NOITE!

*/

const hora2 = 60;

if (hora2 >= 0 && hora2 <= 11) {
    console.log("Bom dia!");
} else if (hora2 >= 12 && hora2 <= 17) {
    console.log("Boa tarde!");
} else if (hora2 >= 18 && hora2 <= 23) {
    console.log("Boa noite!");
} else { // se nenhum das acima funcionar, este ELSE vai funcionar com a mensagem abaixo:
    console.log("Atualize a hora do seu sistema!")
}



const tenhoGrana = null; 

if (tenhoGrana) {
    console.log("Sairei de casa, pois tenho dinheiro!");
} else {
    console.log("Não sairei de casa, pois estou sem dinheiro.");
}

// Se eu não quisesse falar nada, tiraria o ELSE.