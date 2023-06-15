// LET tem escopo de bloco {... bloco ...}
// VAR só tem escopo de função

const verdeira = true;

// AQUI É O ESCOPO GLOBAL:
let nome = "Almeida"; // fora do bloco
var sobre = "Francisco";

if (verdeira) {
    let nome = "Douglas"; // dentro do bloco
    // console.log(nome, sobre);
    // Aqui é um bloco // DEPOIS ESTE É ESCUTADO e assim por diante até o GLOBAL

    if (verdeira) {
        let nome = "Paola";
        console.log(nome, sobre);
        // Aqui é outro bloco // ESTE É EXECUTADO PRIMEIRO // SE ACHAR UMA VARIÁVEL AQUI, MESMO QUE TENHA O MESMO NOME EM OUTRO BLOCO, APENAS A DESTE BLOCO SERÁ EXECUTADA
    }
}

// atenção: Para o VAR, mesmo que eu redeclare-a dentro ou fora do escopo/bloco, quando eu mandar executar, sempre mostrará a última redeclaração, mesmo sendo DENTRO de um bloco e eu tenha dado um CONSOLE.LOG fora do bloco

// Qualquer par de CHAVES é escopo para LET

// Para VAR é apenas escopo de função, pois as FUNCTION protegem as variáveis

function falaOi() {
    var nome = "Douglas F. M. Almeida"; // Como está dentro de FUNÇÃO, eu não consigo acessar essa VAR fora do escopo da função
    console.log(nome);
}

falaOi();

// Porém, eu consigo chamar um VAR que esteja fora da FUNÇÃO - Pois ela busca dentro dela, e se não tiver, busca fora (no vizinho)

var teste = "VAR - Fora do escopo!";
const verdade = true;

function testeFunction() {
    var nome = "Chico";
    console.log(teste);    

    if (verdade) {
        let sobre2 = "Andrade";
        console.log(nome, sobre2);
    }

}

testeFunction();
// MESMO DENTRO DA FUNÇÃO, VAR NÃO VAI PARA OUTRO BLOCO

