

// 65. setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {hour12: false}); // apenas retornando o valor, não exibirá a hora, tem que dár um console.log()
}

function funcaodoInterval() {
    console.log(mostraHora());
}

setInterval (function() {
    console.log(mostraHora());
}, 1000);


///  