
// 71. Escopo léxico

// SE EU EXECUTAR UMA FUNÇÃO, ELA VAI PROCURAR PRIMEIRO DENTRO DELA (ESCOPO LOCAL), DA QUE ESTÁ SENDO EXECUTADA, SE NÃO ACHAR, PEGA NO ESCOPO GLOBAL

// EXEMPLO:

const nome = "Douglas";

function falaNome() {
    console.log(nome) // como eu nbão tenho uma variável aqui no escopo local, vou pegar a de cima, no global
}

function usaFalaNome() {
    const nome = "Almeida"; // mesmo tendo uma variável com NOME, o JS vai buscar na minha FUNÇÃO que está sendo executada, e não tendo nela, pegará a do escopo GLOBAL, E NÃO ESSA DAQUI
    falaNome(); // pois eu estou executando essa função aqui dentro
}

usaFalaNome();
