


const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP!");
} else {
    console.log("Usuário Normal!");
}

// OPERAÇÃO TERNÁRIA, em JS é o ? :

//  ? "valor verdadeiro" : "valor para falso"

// PODE SER FEITO DA SEGUINTE FORMA, COM OPERAÇÃO TERNÁRIA:

const pontuacaoUsuario2 = 9999;
const nivelUsuario = pontuacaoUsuario2 >= 1000 ? "Usuário VIP!" : "Usuário Normal!";

const corUsuario = null;
const corPadrao = corUsuario || "Preto";  // setando um valor padrão

console.log(nivelUsuario, corPadrao);

