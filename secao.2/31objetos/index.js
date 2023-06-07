// NÃO POSSO REATRIBUIR O VALOR DE UMA CONST (SINAL DE = ), MAS POSSO ALTERAR COM PUSH

const array = [1, 2, 3];

array.push(5); // Alterando o final
array[0] = "Douglas"; // Alterando o índice zero
console.log(array);

// ARRAY É COM [] cochetes

// OBJETO É COM {} chaves

// EXEMPLO 1:

const pessoa1 = { // atributos abaixo:
    nome: "Douglas" , 
    sobrenome: "Almeida" , 
    idade: 28
};

// Para acessar e imprimir objeto:
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);


// POSSO CRIAR UMA FUNÇÃO QUE CRIA TUDO ISSO PARA MIM:  essa função retonará o objeto

function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade}; // Assim o JS já entende
}

const pessoa2 = criaPessoa("Douglas", "Almeida", 28); // Esses são argumentos (valores), que serão passados para os parâmetros
const pessoa3 = criaPessoa("Paola", "Marina", 30); // Esses são argumentos (valores), que serão passados para os parâmetros
const pessoa4 = criaPessoa("Fyama", "Andrade", 31); // Esses são argumentos (valores), que serão passados para os parâmetros
const pessoa5 = criaPessoa("José", "Andrade", 52); // Esses são argumentos (valores), que serão passados para os parâmetros

// caso eu queira pegar apenas o nome: CONSOLE.LOG( pessoa2.nome) || Exemplo:
console.log(pessoa2.nome, pessoa3.nome); // Resultado: Douglas, Paola


/////////////////////


const pessoa6 = {
    nome: "Mota",
    Idade: 28,

    fala() { // isso é um função, sem o nome function | Método
        console.log("Olá, mundo!");
    }
};

pessoa6.fala(); // Pedindo para imprimir apenas o fala()


// OU: usando o this = siginifica: este objeto

const pessoa7 = {
    nome: "Almeida",
    idade: 28,

    fala() {
        console.log(`${this.nome}, ${this.idade} anos, completará 29 anos em 21/09/2023.`)  // nesse caso o THIS = pessoa7
    },

    incrementaIdade() {
        this.idade++;
    },

    fala2() {
        console.log(`E ano que vem, em 2024, completarei ${this.idade}`)
    }
};

pessoa7.fala(); // aqui mostrará a idade normal = 28
pessoa7.incrementaIdade(); // incrementei +1 na idade
pessoa7.fala2(); // mostrará a idade após incrementar mais 1

