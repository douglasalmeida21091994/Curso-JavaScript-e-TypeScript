// STRING SÃO INDEXADAS
//            0123456                  
const nome = "Douglas"; // Para acessar a primeira letra dessa STRING, seria:
console.log(nome[0]); // Resultado: D



// BÁSICO SOBRE ARRAYS => TAMBÉM SÃO INDEXADAS, PORÉM, POR ELEMENTOS:
//                 0          1       2          3
const alunos = ["Douglas", "José", "Marina", "Silvia"]; 
console.log(alunos); // Exibindo o Array completo

// Para acessar o índice, ficaria:

console.log(alunos[0]); // Resultado: Douglas

// EDITAR UM VALOR na minha ARRAY

alunos[0] = "Almeida";
console.log(alunos); // Resultado: [ 'Almeida', 'José', 'Marina', 'Silvia' ]

// CONSULTAR O TAMANHO:

console.log(alunos.length);

// ADICIONAR ALGO NA MINHA ARRAY  || Porém, pode ser complicado em Array grande, pois tenho que saber o tamanho

alunos[4] = "Edileuza";
console.log(alunos); // Resultado: [ 'Almeida', 'José', 'Marina', 'Silvia', 'Edileuza' ]

// POSSO ADICIONAR ASSIM TAMBÉM:

alunos[alunos.length] = "Luiza";
alunos[alunos.length] = "Joana";
console.log(alunos);

// MAIS TEM A  MELHOR FORMA:

const aulas = ['Matemática', 'Geografia', 'História'];
aulas.push('Português');
aulas.push('Inglês');  // Colocando ao final => push
console.log(aulas)

// COLOCANDO NO COMEÇO (TEM QUE MOVER OS MEUS ELEMENTOS PRIMEIRO PARA FRENTE):

const aulas2 = ['Matemática', 'Geografia', 'História'];
aulas2.unshift('Artes'); // Adiciona no início => unshift()
aulas2.unshift('Raciocínio Lógico') // Esse, como adicionei por último, ficará com o índice 0 (primeiro) || Posso mudar a ordem subindo esta linha
console.log(aulas2);

// REMOVENDO ELEMENTOS DO FIM MEU ARRAY: pop() 

const aulas3 = ['Matemática', 'Geografia', 'História'];
aulas3.pop(); // Removendo o elemento do final do meu Array // Tirei: História
console.log(aulas3);

// Posso salvar o que foi removido em uma variável:

const aulas4 = ['Matemática', 'Geografia', 'História', 'Artes'];
const removido = aulas4.pop();
console.log(removido); // Mostrará o que eu removi || Resultado: Artes // RETORNA O ELEMENTO QUE FOI REMOVIDO
console.log(aulas4); // Mostrará minha Arraym, sem o nome "Artes"

// REMOVENDO DO COMEÇO: shift

const aulas5 = ['Matemática', 'Geografia', 'História', 'Artes'];
console.log(aulas5.shift()) // Pedi pra exibir apenas o que eu retirei "matempatica"
console.log(aulas5) // Exibindo minha Array, sem o "matemática"

// OU:

const aulas6 = ['Matemática', 'Geografia', 'História', 'Artes'];
aulas6.shift(); // removendo
console.log(aulas6); // imprimindo

// OU:

const aulas7 = ['Matemática', 'Geografia', 'História', 'Artes'];
const remocao = aulas7.shift(); // informei uma variável removendo o 1º índice
console.log(remocao); // imprimi ela
console.log(aulas7); // imprimi a Array completa

// REMOVER SEM MEXER NOS ÍNDICES:

const aulas8 = ['Matemática', 'Geografia', 'História', 'Artes'];
delete aulas8[1]; // apagando GEOGRAFIA, sem mexer nos índices  || Retorna: <1 empty item>
console.log(aulas8);

// ACESSANDO UM ÍNDICE QUE NÃO EXISTE:  || Retorna: Undefined

console.log(aulas8[10]) // Retorna: Undefined

// PEGANDO ALGUNS ÍNDICES DA MINHA ARRAY:

const frutas = ["Maçã", "Uva", "banana"];
frutas.push("Laranja");
frutas.push("Pera");

console.log(frutas[4]) // peguei o índice 4 = PERA | Porém, para pegar o elemento é assim:

console.log(frutas.slice(0, 2)); // mandei imprimir apenas os índices: 0 e 1 => Maã e Uva || Ler-se: A partir do: zero até antes do dois

// OU:

const frutas1 = ["Maçã", "Uva", "banana"];
const frutasSelecionadas = frutas1.slice(1, 3); // Selecionei para imprissão: A partir do um até antes do três
console.log(frutasSelecionadas);

// USANDO VALOR NEGATIVO: ler-se: pegar o tamanho da ARRAY, menos o valor negativo:

const frutas2 = ["Maçã", "Uva", "banana"];
frutas2.push("Laranja");
frutas2.push("Pera");

console.log(frutas2.slice(0, -1)) // só não imprimirá o nome: "PERA"

console.log(typeof frutas2) // Retorna: Object  || EM JS, o ARRAY é Object
console.log(frutas2 instanceof Array) // Perguntei: frutas2 é uma instância de Array? Retorno: True ou False













