

//////////////////////////////////////// FORMA MAIS COMPLEXA: usando SWITCH//////////////////////////////////////////////



// SELECIONANDO O H1 DENTRO DA CLASSE CONTAINER:

/* const h1 = document.querySelector(".container h1");
const data = new Date();

function GetDaySemana(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
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

function GetNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = "Janeiro";
            return nomeMes;
        case 1:
            nomeMes = "Fevereiro";
            return nomeMes;
        case 2:
            nomeMes = "Março";
            return nomeMes;
        case 3:
            nomeMes = "Abril";
            return nomeMes;
        case 4:
            nomeMes = "Maio";
            return nomeMes;
        case 5:
            nomeMes = "Junho";
            return nomeMes;
        case 6:
            nomeMes = "Julho";
            return nomeMes;
        case 7:
            nomeMes = "Agosto";
            return nomeMes;
        case 8:
            nomeMes = "Setembro";
            return nomeMes;
        case 9:
            nomeMes = "Outubro";
            return nomeMes;
        case 10:
            nomeMes = "Novembro";
            return nomeMes;
        case 11:
            nomeMes = "Dezembro";
            return nomeMes;
        
    }
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = GetDaySemana(diaSemana);
    const nomeMes = GetNomeMes(numeroMes);
    
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = criaData(data)

*/


//////////////////////////////////////// FORMA MENOS COMPLEXA: DENTRO DE ARRAY: //////////////////////////////////////////////


/*
const h1 = document.querySelector(".container h1");
const data = new Date();

function GetDaySemana(diaSemana) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

    return dias[diaSemana];
}


function GetNomeMes(numeroMes) {
    const meses = ["Janeiro", "Fevereiro", "Março", "Abil", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return meses[numeroMes];
}


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = GetDaySemana(diaSemana);
    const nomeMes = GetNomeMes(numeroMes);
    
    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} às ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
}

h1.innerHTML = criaData(data)

*/



//////////////////////////////////////// FORMA SIMPLES: //////////////////////////////////////////////



// FORMA MAIS SIMPLES de COLOCAR data e hora completa na TELA:

/*
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleString("pt-BR", {dateStyle: "full", timeStyle: "medium"});
*/

const h1 = document.querySelector(".container h1");

function atualizarHora() {
  const data = new Date();
  h1.innerHTML = data.toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "medium" });
}

// Atualizar a hora inicial
atualizarHora();

// Atualizar a cada segundo
setInterval(atualizarHora, 1000);
