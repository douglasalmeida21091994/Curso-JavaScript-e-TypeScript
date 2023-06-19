

// 65. setInterval e setTimeout

function myHora() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {hour12: false}); // apenas retornando o valor, não exibirá a hora, tem que dár um console.log()
}

console.log(myHora());