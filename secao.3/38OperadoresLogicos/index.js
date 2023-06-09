/* 

OPERADORES LÓGICOS:

&& -> AND que em português = E      // TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR TRUE
|| -> OR que em português = OU      // APENAS UMA EXPRESSÃO PRECISA SER VERDADEIRA PARA RETORNAR TRUE
!  -> NOT que em português = NÃO    // ELA INVERTE UMA EXPRESSÃO OU NEGA UMA EXPRESSÃO // FALSE PARA A SER TRUE e TRUE PARA A SER FALSE

*/

// Exemplo de AND &&:

const exemplo1 = true && true && true && true && true && true;
console.log(exemplo1);  // Resultado: TRUE


// Exemplo de OR ||:

const exemplo2 = true || false && true && false && false && true;
console.log(exemplo2);  // Resultado: TRUE  pois no início tem TRUE || FALSE ou seja, tem true primeiro e sobrepõe as demais // APENAS UMA EXPRESSÃO PRECISA SER VERDADEIRA // NÃO IMPORTA QUANTOS FALSE EU TENHO // só dará false se todas forem false

const exemplo3 = false || false || false || false || false || true;
console.log(exemplo3) // resultado: TRUE


const usuario = "Douglas";
const senha = "123456";
//                        TRUE                  TRUE
const vaiLogar = usuario === "Douglas" && senha === "123456" // Falei: Minha const VAILOGAR é igual a usuário que é idêntifica ao usuário cadastrado no meu banco de dados E a senha é idêntica a senha cadastrada no meu banco de dados. SE FOR, PASSE = TRUE consegue logar.

console.log(vaiLogar); // resultado: TRUE

// Exemplo de NOT !:

console.log(!false); // neguei o false, resultad = true
console.log(!true);  // neguei o true, resultado = false 
console.log(!!true); // neguei o true que virou false e neguei o false, que virou true  // DUAS RETORNA PARA O VALOR ORIGINAL, porém, posso colocar mais de DUAS ESCLAMAÇÕES