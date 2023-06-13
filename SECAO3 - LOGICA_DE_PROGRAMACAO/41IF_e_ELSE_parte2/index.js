
// o IF pode ser usado sozinho ou com o ELSE IF

// Sempre que utilizo a palavra ELSE, preciso de um IF antes

// Posso ter vários (quantos for necessários) ELSE IF na condição/checagem 

// Só pode ter um ELSE na checagem (no final)

// Podemos usar condições sem ELSE IF, utilizando apenas IF e ELSE

const numero = 12;

if (numero >= 0 && numero <= 5) {
    console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 10) {
    console.log("O número está entre 6 e 10.");
} else {
    console.log("Seu número não foi localizado! Por favor, digite um novo núemro.");
}

// A partir do momento que o JS achar minha condição verdadeira, ele será executado e parará de checar, mesmo que tenha outra condição verdadeira || EXECUTARÁ A PRIMIERA VERDADEIRA 