
// 63. Tratando e lançando erros (try, catch, throw)

// try = tente executar
// catch = pega o erro com uma variável que quer exibir caso haja erro
// throw = mensagem do erro

function soma(x, y) {

    if (typeof x !== 'number' || typeof y !== 'number') {

        throw new Error("Os valores informados para X ou Y, não números! Por favor, verifique.");  // no lugar de erro tem outros a serem colocados
    } 

    return x + y;
}

try {
    console.log(soma(1, 5)); // sem erro, apenas number
    console.log(soma("3", 20)); // com erro, com string e number
} catch(err) {
    // console.log(err);
    console.log("Informar o tipo de erro que quero que o usuário veja.");
}
