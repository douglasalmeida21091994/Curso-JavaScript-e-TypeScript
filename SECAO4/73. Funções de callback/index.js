// 73. Funções de callback

// CALLBACK É ALGO QUE VOCÊ CHAMA QUANDO UMA COISA TERMINAR DE OCORRER

// FUNÇÃO QUE GERA NUMERO ALEATÓRIO:

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() {
        console.log("F1");
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log("F2");
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log("F3");
        if (callback) callback();
    }, rand());
}

// MESMO COM A FUNÇÃO GERANDO NÚMEROS ALEATÓRIOS, POSSO DETERMINAR A ORDEM COM FUNÇÃO CALLBAKC:
/*
f1(function() {
    f2(function() {
        f3(function() {
            console.log("Olá mundo!");
        });
    });
});
*/

// ou seja, será sempre na ordem acima: F1 F2 F3 e OLÁ MUNDO

// porém, posso FAZER DA SEGUINTE FORMA:

f1(f1callback);

function f1callback() {
    f2(f2callback);
}
function f2callback() {
    f3(f3callback);
}

function f3callback() {
    console.log("Olá mundo!");
}

// É A MESMA COISA, PORÉM, FICA MAIS OBJETIVO DESSA FORMA, SEM SER UMA DENTRO DA OUTRA.