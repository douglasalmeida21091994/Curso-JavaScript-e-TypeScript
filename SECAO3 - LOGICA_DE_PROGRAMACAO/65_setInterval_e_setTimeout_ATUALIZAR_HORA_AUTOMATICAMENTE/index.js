

// 65. setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {hour12: false}); // apenas retornando o valor, não exibirá a hora, tem que dár um console.log()
}

function funcaodoInterval() {
    console.log(mostraHora());
}


/* setInterval(function() {
    console.log(mostraHora());
}, 1000); */

///  COLOCANDO O setInterval dentro de uma VARIÁVEL, para usar o setTimeout:

const time = setInterval(function() {
    console.log(mostraHora());
}, 1000); // 1 segundo


// Informando em quando tempo vai parar o código acima:

setTimeout(function() {
    clearInterval(time);
    console.log("Teste"); // posso deixar apenas esse console, para exibir exatamente ao final da constagem
}, 5000); // 5 segundos

setTimeout(function() {
    console.log("Exibindo texto após os 5 segundos acima.")
}, 6000); // 6 segundos