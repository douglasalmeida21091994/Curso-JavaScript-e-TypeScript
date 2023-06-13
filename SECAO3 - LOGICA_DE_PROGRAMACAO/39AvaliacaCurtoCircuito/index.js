/* 

&& -> AND que em português = E      // TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR que em português = OU      // APENAS UMA EXPRESSÃO PRECISA SER VERDADEIRA PARA RETORNAR TRUE
!  -> NOT que em português = NÃO    // ELA INVERTE UMA EXPRESSÃO OU NEGA UMA EXPRESSÃO // FALSE PARA A SER TRUE e TRUE PARA A SER FALSE

*/

// O JS CHECA TUDO E RETORNA || Se achar o FALSE ele mostrará qual é || Se naão acchar e todas fortem TRUE ele retornará a última expressão:

console.log("Douglas" && false && "Almeida"); // String false String => Retonará: false
console.log("Douglas" && true && "Almeida"); // String true String => Retonará: Almeida, POIS TODAS SÃO TRUE
console.log("Douglas" && true && NaN); // Retorna: NaN


/*

QUALQUER COISA DIFERENTE DO QUE ESTÁ ABAIXO, É AVALIADO PELO JS, COMO TRUE

OS ABAIXO SÃO TODOS FALSE:

false
0
'' ou "" ou ``  STRINGS VAZIAS
null
undefined
NaN

Esses acima são todos FALSE / FALSY

*/

console.log("Douglas" && "Paola"); // RESULTADO: PAOLO, pois ambos são true || RETORNA SEMPRE O ÚLTIMO EM CASOS DE TRUE

console.log("Douglas" && null && "Paola"); // Retorna: Null
console.log("Douglas" && "" && "Paola"); // Retorna: vazio (uma string vazia)
console.log("Douglas" && undefined && "Paola"); // Retorna: undefined
console.log("Douglas" && false && "Paola"); // Retorna: false


function falaOi(){
    return "Oi";
}

const vaiExecutar = false; // ou poderia ser qualquer outro valor que retorna FALSE, conforme coloquei acima.

console.log(vaiExecutar && falaOi()); // Nesse caso eu chequei e só executo se a minha variável for TRUE. No caso, como é FALSE, retorna False e NÃO executará minha function



function falaOla(){
    return "Olá";
}

const executando = true; // Poderia colocar uma string. Exemplo: "DOUGLAS FRANCISCO"

console.log(executando && falaOla()); // EXECUTOU MINHA FUNÇÃO, POIS MINHA CONST É TRUE

// como a minha função está na última posição e ambas são TRUE, vai executar apenas a function


/*                 USANDO O OR: ||                  */

console.log(0 || false || "Douglas" || null || "Almeida" || true); // 0 = false / FALSE / VERDADEIRO / FALSE / VERDADEIRO / VERDADEIRO

//  imprimará o primeiro TRUE = "Douglas"

const corUsuario = null; 
const corPadrao = corUsuario || "black";
console.log(corPadrao); // Resultado: "black" , pois o usuário não selecionou a cor


const a = 0;
const b = null;
const c = 'False'; // Só essa é verdadeira
const d = false;
const e = undefined;
const f = NaN;

console.log(a || b || c || d || e || f);  // imprimirá a const c