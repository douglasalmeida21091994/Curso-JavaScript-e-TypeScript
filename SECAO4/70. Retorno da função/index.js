// 70. Retorno da função

// return
// Retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;  // isso é o retorno da função, onde é exibido no CONSOLE do NAVEGADOR
}


function soma2(a, b) {
    console.log(a + b); // isso não é um retorno, estou apenas colocando para exibir
}

soma2(5, 6)


// FUNÇÃO QUE NÃO RETORNA VALOR, MAS QUE FAZ ALGO. POR EXEMPLO:
/*
document.addEventListener("click", function() {
    document.body.style.backgroundColor = "red";
});

// ou seja, na função acima, onde houver click, ficará com o background VERMELHO

*/

// FUNÇÃO QUE RETORNA OBJETOS:

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa("Douglas", "Almeida");

// é a mesma coisa dessa de baixo, porém, na de cima, eu tenho uma função para cirar pessoa, com objetos

const p2 = {
    nome: "Paola",
    sobrenome: "Andrade"
}

console.log(p1)
console.log(p2)
console.log(typeof p2)
console.log(typeof p2)

/// função mais avançada:

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + " " + resto;
    }

    return falaResto; // porém, aqui não estou executando a função
}

const fala = falaFrase("Olá");
const resto = fala("Olá mundo!")

console.log(resto)

// PODERIA SER ÚTIL DA SEGUINTE FORMA:

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2); // esse valor vai para o parâmetro da função principal
const triplica = criaMultiplicador(3); // esse valor vai para o parâmetro da função principal
const quadriplica = criaMultiplicador(4); // esse valor vai para o parâmetro da função principal

console.log(duplica(5)); // esse valor vai para o parâmetro da segundo função (n), dentro da função principal principal
console.log(triplica(10)); // esse valor vai para o parâmetro da segundo função (n), dentro da função principal principal
console.log(quadriplica(15)); // esse valor vai para o parâmetro da segundo função (n), dentro da função principal principal
