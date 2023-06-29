

// 69. Parâmetros da função


// TODA FUNÇÃO DETERMINADA COM A PALAVRA: function, TEM UMA VARIÁVEL (ARGUMENTS), QUE SUSTENTA TODO OS AUYMENTOS ENVIADOS
//              PARÂMEROS
function funcao(a, b) {
    console.log(arguments[0])
}

funcao("oie", 10); // ARGUMENTOS

///////////


function funcao2() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao2(1, 5, 8, 7, 6, 10, 15)

////////////

// colocando um valor padrão dentro do parâmetro:]

function funcao3(a, b = 0) {
    console.log(a + b)
}

funcao3(5); // aqui eu não defini no argumento o valor de B, porém, como eu defini um parâmetro padrão, ele será 0 (zero), se não for definido



// PULANDO UM PARÂMETRO:

function funcao4(a, b = 2, c = 10) {
    console.log(a + b + c)
}

funcao4(5, undefined, 20); // ÚNICA FORMA, de deixar o B com o mesmo valor do parâmetro e passar a realizar a conta correta | se colocar o Null ele assume o valor de ZERO

// COM OBJETOS, via DESESTRUTURAÇÃO

function funcao5({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}

let obj = {nome: "Douglas", sobrenome: "Almeida", idade: 28};

funcao5(obj);


// // COM ARRAYS, via DESESTRUTURAÇÃO

function funcao6([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao6(["Douglas", "Francisco", 28]);  // poderia jogar os valores em uma variável e colocar dentro da função, igual nos OBJETOS


// //   

function conta(operador, acumulador, numeros) {
    console.log(operador, acumulador, numeros);
}

conta("+", 0, [10, 20, 30, 40, 50]);

// PORÉM,  posso fazer com o valor de RESTO, que são os TRÊS PONTINHOS: ...  para não colocar os valores dentro de uma STRING, no meu argumento

function conta2(operador, acumulador, ...numeros) {  // O rest operation deve ser SEMPRE o último
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }

    console.log(acumulador);
}  // NÃO PRECISA DO PONTO E VÍRGULA AQUI

conta2("*", 1, 10, 20, 30, 40, 50);

// OBS.: Lembrando que o FOR OF, pega apenas os valores;  FOR IN, pega os índices, e para pegar os valores, tem que colocar a variável do for, entre COCHETES

// FAZENDO A MESMA COISA, PORÉM, COM VARIÁVEL: function expression  // dessa forma eu tenho ainda o ARGUMENTS

const conta3 = function(operador, acumulador, ...numeros) {  // O rest operation deve ser SEMPRE o último
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }

    console.log(acumulador);
}; // DESSA FORMA, PRECISO DO PONTO E VÍRGULA PARA NÃO DÁ POSSÍVEL ERRO/BUG

conta3("*", 1, 10, 20, 30, 40, 50);


// Porém, se mudar para ARROW FUNCTION, perco o ARGUMENTS

const conta4 = (operador, acumulador, ...numeros) => {  // O rest operation deve ser SEMPRE o último
    for (let numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;
    }

    console.log(acumulador);
}; 

conta4("+", 1, 10, 20, 30, 40, 50);

// sempre bom usar o REST OPERATION quando precisar enviar argumentos indefinidos para uma função, por exemplo:

const total = (...args) => {
    console.log(args);
}

total("+", 1, 10, 20, 30, 40, 50);