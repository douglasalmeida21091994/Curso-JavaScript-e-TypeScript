// EXERCÍCIO COM Number e Math

const numero = Number(prompt("Digite seu número:"))  // CONVERTENDO DIRETO, POIS SE EU FIZESSE UMA CONTA DE ADIÇÃO, IRIA CONCATENAR E NÃO SOMAR || O QUE É DIGITADO NO PROMPT É STRING, MESMO DIGITANDO NÚMERO
const numeroTitulo = document.getElementById("numero-titulo") // PEGUEI A SPAN
const textoDiv = document.getElementById("texto") // PEGUEI A DIV

numeroTitulo.innerHTML = numero // disse que que TUDO QUE EU DIGITAR NO MEU PROMPT APARECERÁ NA MINHA SPAN

// LIMPANDO A MINHA DIV:
textoDiv.innerHTML = "" // Só de fazer isso, já vai limpar minha DIV e o nome "texto" que eu escrevi, não mostrará mais


// RAÍZ QUADRADA:
textoDiv.innerHTML += `<p>Raíz quadrada pelo método um: ${numero ** 0.5}</p>`

//OU
textoDiv.innerHTML += `<p>Raíz Quadrada pelo método dois: ${numero ** (1/2)}</p>`

// PERGUNTANDO SE É INTEIRO:
textoDiv.innerHTML += `<p>O ${numero} é inteiro: ${Number.isInteger(numero)}`

// PERGUNTANDO SE É NaN:
textoDiv.innerHTML += `<p>O ${numero} é NaN: ${Number.isNaN(numero)}`

// ARREDONDANDO PARA BAIXO:
textoDiv.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}`

// ARREDONDANDO PARA CIMA:
textoDiv.innerHTML += `<p> Arredondando para cima: ${Math.ceil(numero)}`

// DEIXANDO APENAS COM DUAS CASAS DECIMAIS ou QUANTAS DESEJAR:
textoDiv.innerHTML += `<p>Seu número apenas com duas casas decimais: ${numero.toFixed(2)}`

//SUBTRAÇÃO DO NÚMERO DIGITADO:
textoDiv.innerHTML += `<p>Seu número - 2 é: ${numero - 2}. </p>`
