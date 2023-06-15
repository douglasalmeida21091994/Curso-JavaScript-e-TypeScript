// ESTRUTURA CONDICIONAL SWITCH

function GetDaySemana(diaSemanaDentroDoEscopo) {
    let diaSemanaTexto;

    switch (diaSemanaDentroDoEscopo) {
        case 0: // Leitura: Se o dia da semana for 0 (zero), faça o abaixo:
            diaSemanaTexto = "Domingo"; // Após isso, devemos mandar o JS parar/sair, com o break
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = "Segunda-Feira";
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = "Terça-Feira";
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = "Quarta-Feira";
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = "Quinta-Feira";
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = "Sexta-Feira";
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;

        default:
            diaSemanaTexto = "Dia não localizado!";
            return diaSemanaTexto;
    }

    return diaSemanaTexto;
}

const data = new Date("2023-05-17 20:00"); // LEMBRANDO QUE COMEÇA COM ÍNDICE 0 (ZERO)
const diaSemanaForaDoEscopo = data.getDay(); // pegando apenas o dia, em índice. // ESSA VARIÁVEL NÃO TEM NADA A VER COM A QUE ESTÁ DENTRO DO ESCOPO DA FUNÇÃO

const diaSemanaTextoFORA = GetDaySemana(diaSemanaForaDoEscopo); // tive que criar essa FORA DO ESCOPO DA FUNÇÃO

console.log(diaSemanaForaDoEscopo, diaSemanaTextoFORA);



/*  SEM SER EM UMA FUNCTION TAMBÉM FUNCIONA:

switch (diaSemana) {
    case 0: // Leitura: Se o dia da semana for 0 (zero), faça o abaixo:
        diaSemanaTexto = "Domingo"; // Após isso, devemos mandar o JS parar/sair, com o break
        break;  

    case 1:        
        diaSemanaTexto = "Segunda-Feira"; 
        break;

    case 2: 
        diaSemanaTexto = "Terça-Feira"; 
        break;  

    case 3: 
        diaSemanaTexto = "Quarta-Feira"; 
        break; 

    case 4: 
        diaSemanaTexto = "Quinta-Feira"; 
        break; 

    case 5: 
        diaSemanaTexto = "Sexta-Feira"; 
        break;  

    case 6: 
        diaSemanaTexto = "Sábado"; 
        break;  

    default:
        diaSemanaTexto = "Dia não localizado!";
        break; // Esse BREAK poderia não t er, pois como é o último, se o JS executar o DEFAULT ele parará.
}

console.log(diaSemana, diaSemanaTexto);

// OBS.: Se eu não coloco o BREAK, ele executo o próximo, até achar o BREAK
// OBS.: no SWITCH, usamos o DEFAULT com a mesma finalidade do ELSE no IF

*/



/*

PODERIA USAR DA SEGUINTE FORMA:


if (diaSemana === 0) {
    diaSemanaTexto = "Domingo!";
} else if (diaSemana === 1) {
    diaSemanaTexto = "Segunda-feira!";
} else if (diaSemana === 2) {
    diaSemanaTexto = "Terça-Feira!";
} else if (diaSemana === 3) {
    diaSemanaTexto = "Quarta-Feira!";
} else if (diaSemana === 4) {
    diaSemanaTexto = "Quinta-feira!";
} else if (diaSemana === 5) {
    diaSemanaTexto = "Sexta-feira!";
} else if (diaSemana === 6) {
    diaSemanaTexto = "Sábado!";
} else {
    diaSemanaTexto = "NENHUM DIA FOI LOCALIZADO! POR FAVOR, VERIFIQUE NOVAMENTE.";
}

console.log(diaSemana, diaSemanaTexto);

*/


/* 
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
*/