
// 51. Atribuição via desestruturação (Objetos)

const pessoa = {
    nome: "Douglas",
    sobrenome: "Almeida",
    idade: 28,
    endereco: {
        rua: "Res. Antônio Lins Filho",
        quadra: "13",
        numero: 42
    }
};

//console.log(pessoa);

 // Atribuiçpão normal

/* const nome = pessoa.nome;
console.log(nome);*/

// Atribuição via desestruturação:

// const {nome = '', sobrenome, idade} = pessoa;  // Se eu colocar aqui uma variável que não existe no meu OBJETO, eu posso setar, por exemplo, vou deixar comentado a NOME e setar COM STRING VAZIA na minha const, para não retornar: undefined || PORÉM, MESMO QUE EU TIRE O COMENTÁRIO, SETANDO ELA COM A STRING VAZIA, O NOME DOUGLAS NÃO APARECERÁ
// console.log(nome, sobrenome, idade);

// Posso mudar o nome da CHAVE:

// const {nome: mudouNome = '', sobrenome} = pessoa;

//console.log(mudouNome, sobrenome);


// pegando o OBJETO, dentro do OBJETO:  || E se eu quiser imprimir o endereço completo, basta por após a vírgula

/* const {endereco: {rua, numero}, endereco} = pessoa;
console.log(rua, numero, endereco); */


// PEGANDO O RESTO:

const {nome, ...resto} = pessoa;
console.log(resto); // imprime tudo, menos o NOME
