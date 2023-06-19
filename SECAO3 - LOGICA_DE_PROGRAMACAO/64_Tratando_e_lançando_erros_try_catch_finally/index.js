
// 64_Tratando_e_lançando_erros_try_catch_finally


try { // É executado quando não há erro
    console.log('Abri o arquivo');
    console.log('Arquivo gerou erro');
    console.log('Fechei o arquivo'); 
} catch(err) { // É executado quando há erro
    console.log('Tratando o arquivo'); 
} finally { // Sempre é exutado, com erro ou não
    console.log('finally: Eu sou sempre executado')
}

// 
console.log("");
console.log("+++++++++++++++++++++++++++++ // COLOCANDO ERRO PARA TESTE: // +++++++++++++++++++++++++++++");
console.log("");
//

try { 
    console.log(a) // Colocando essa variavel que não existe para dar erro
    console.log('Abri o arquivo');
    console.log('Arquivo gerou erro');
    console.log('Fechei o arquivo'); 
} catch(err) { 
    console.log('Tratando o arquivo'); 
} finally { 
    console.log('finally: Eu sou sempre executado')
}

// 
console.log("");
console.log("+++++++++++++++++++++++++++++ // COLOCANDO TRY DENTRO DE OUTRO: // +++++++++++++++++++++++++++++");
console.log("");
//

try {
    console.log('Primeiro Try');

    try {
        console.log(a); // variável que não existe        
    } catch(e) {
        console.log('Deu erro no try DENTRO do try.')
    } finally {
        console.log('Exibindo o Finally de dentro, pois sempre é executado.')
    }

} catch(err) {
    console.log('Não será executado, pois o de dentro já foi.');
} finally {
    console.log('Sempre é executado, pois é um Finally.');
}

// 
console.log("");
console.log("+++++++++++++++++++++++++++++ // COM FUNCTON // +++++++++++++++++++++++++++++");
console.log("");
//

function retornaHora(data){
    if (data && !(data instanceof Date)) {
        throw new TypeError("Estava esperando isntância de Date!")
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString("pt-BR", {hour: "2-digit", minute: "2-digit", second: "2-digit",hour12: false}); // posso deixar apenas o hour12: false
}

try {
    const hora = retornaHora();
    console.log(`Horário atual: ${hora}`);    
} catch(e) {
    // tratar o erro, porém estou  deixando sem nada aqui
    // console.log(e) // exibiria todo o erro na tela
} finally {
    console.log("Desejamos um bom dia!") // sempre mostrará
}


// Se eu quisse uma data em específico, bastava criar uma VARIÁVEL: const = new Date("01-01-2023 22:52:15"); e jogar essa variável na const HORA, dentro da function