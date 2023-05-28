
// O SINAL DE IGUAL = é o valor de atribuição a algo

// STRING

const nome = "Douglas";
const nome2 ='Almeida';
const nome3 = `Mota`;

// Number

const num1 = 10;
const num2 = 10.1;

// Declarar e não inicializar

let nomeAluno; // underfined = indefinido => Não aponta para lugar nenhum na memória.

let sobreNome = null; // Significa nulo => Não aponta para lugar nenhum na memória. USADO QUANDO QUEREMOS DESCONFIGURAR UMA VARIÁVEL

// Exemplo de uso: Cliente clicar para alterar a cor de fundo para RED, se não clicar a variável fica: null, se clicar fica "rede"


// DADOS BOOLEAN  -> true or false

const aprovado = true; // ou eu posso simplesmente alterar de true para false
const reprovado = true;

// ARRAYS

const a = [1, 2, 3];
const b  = a; // os valores de a foram atribuídos a A, pois B é apenas uma cópia de A

// para adicionar um outro valor que não esteja dentro da minh string: PORÉM, ADD EM AMBAS

b.push(4); // apontas para o mesmo valor na memória

console.log(a, b)
console.log(a)
console.log(b)

// PORÉM, SE EU FAÇO DA FORMA ABAIXO EU CONSIGO ALTERAR O VALOR

let c = 10
const d = c

console.log(`SEM ALTERAR O VALOR: ${c}, ${d}`)

d = 20
console.log(`DESSA FORMA ALTEREI O VALOR DE "D" PARA: ${d}`)  // NÃO COLOCAR EM CONST NO "A", DO CONTRÁRIO NÃO ALTERA O VALOR E DÁ ERRO



// CHEGAR OS TIPOS = typeoff

console.log (typeof num1, num1)  // Assim eu vejo o tipo e o valor
console.log(typeof aprovado) // Assim vejo apenas o tipo
console.log(typeof nomeAluno, nomeAluno) // undefined
console.log(typeof sobreNome, sobreNome) // object null
console.log(typeof a, a)
console.log(typeof b, b)











