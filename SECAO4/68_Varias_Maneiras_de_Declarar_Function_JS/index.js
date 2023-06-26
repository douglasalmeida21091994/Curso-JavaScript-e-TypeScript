// Declaração de função (Function Hosting)


// Clássica:
function falaOi() {
    console.log("Oi");
}

falaOi();


/////////

// First-class objects (Objetos de primeira classe)
//Function expression
// Variuável recebendo uma função:

const souUmDado = function() {
    console.log("Sou um dado!");
};

souUmDado(); // pois minha conste passou a ser uma função, pois não coloquei nome em minha função

// OU:

function executandoFuncao(funcao) {
    funcao()
}

executandoFuncao(souUmDado);


// AARROW FUNCTION:

const functionArrow = () => {
    console.log("Função Arrow");
}

functionArrow();

// Dentro de um objeto posso ter uma função:

const obj = {
    falar() {
        console.log("Estou falando...");
    }
};

obj.falar();





















