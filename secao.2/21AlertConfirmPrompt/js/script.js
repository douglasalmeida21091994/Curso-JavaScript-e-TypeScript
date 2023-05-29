/**
 * AULA SOBRE: Alert , Confirm , Prompt
 * 
 */

// alert("Teste de alerta")  // quando colocando parenteses, no JS, estamos chamando uma função, e uma função executa uma ação

// o Alert, retorna: undefined (NÃO APONTA PRA LUGAR NENHUM NA MEMÓRIA)

// window = janela do navegador 

// O alert, prompt e confirm, estão dentro do window


/* window.confirm("Deseja realmente apagar?") */

// Se o usuário clicar em CANCELAR: retorne false
// Se o usuário clicar em OK: retorne true

/* window.prompt("Digite seu nome:") */

// Abrirá uma caixa para digitar o nome e retorna o que digitou, em STRING


// Podem ser abreviadas, tirando o window


// PARA CAPITURAR O QUE FOI RETORNADO:

/* const confirma = confirm("Realmente deseja apagar?") */

// nesse caso o que o usuário selecionar, vai retornar e gravar na minha variável confirma (true or false)

// Se eu digitar confirma no console (NAVEGADOR), ele mostrará qual opção o usuário digitou

// mesma coisa funciona com o PROMPT

//Ex.: let num1 = prompt("Digite um Número:")

// após o usuário digitar qualquer número, vai gravar na minha let num1 e posso olhar digitando no vscode: console.log(num1) ou no navegador: num1

// TUDO QUE É RETORNADO PELA FUNÇÃO PROMPT É STRING... deve-se converter para número, caso queira, com parseFloat, parseInt ou Number

// num1 = Number(num1);


// CONTA DE ADIÇÃO TEM QUE CONVERTER, QUANDO PEGO OS DADOS DO PROMPT

// AULA REALIZADA DIRETO NO NAVEGADOR, POR ISSO APENAS HÁ AS ANOTAÇÕES


//EXERCÍCIO DA AULA 22: Criar dois prompt, solicitando números, converter de string para Number, criar um alerta com o resultado:

let num1 = prompt("Digite um número:");
let num2 = prompt("Digite outro número");

num1 = Number(num1);
num2 = Number(num2);

const resultado = num1 + num2;

alert(`O resultado total é: ${resultado}`)

// Em código pequenos, eu poderia não usar a const resultado e ficaria assim: alert(`O resultado total é: ${num1 + num2}`). Porém, em códigos grandes, não é recomendado
