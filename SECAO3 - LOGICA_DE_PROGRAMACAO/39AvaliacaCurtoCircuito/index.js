/* 

OPERADORES LÓGICOS:

&& -> AND que em português = E      // TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR que em português = OU      // APENAS UMA EXPRESSÃO PRECISA SER VERDADEIRA PARA RETORNAR TRUE
!  -> NOT que em português = NÃO    // ELA INVERTE UMA EXPRESSÃO OU NEGA UMA EXPRESSÃO // FALSE PARA A SER TRUE e TRUE PARA A SER FALSE

*/

// O JS CHECA TUDO E RETORNA || Se achar o FALSE ele mostrará qual é || Se naão acchar e todas fortem TRUE ele retornará a última expressão:

console.log("Douglas" && false && "Almeida"); // String false String => Retonará: false
console.log("Douglas" && true && "Almeida"); // String true String => Retonará: Almeida, POIS TODAS SÃO TRUE
console.log("Douglas" && true && NaN); // Retorna: NaN
