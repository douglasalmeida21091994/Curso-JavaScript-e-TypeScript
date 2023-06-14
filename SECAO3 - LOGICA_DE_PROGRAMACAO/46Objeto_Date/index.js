
// para usar tem que ter o NEW

const tresHoras = 60 * 60 * 3 * 1000; // aqui eu tenho 3 horas.
const umDia = 60 *60 * 24 * 1000; // Aqui eu tenho 24h ou seja, 1 dia.

//


// ano mês dia hora minuto, segundos e milissegundos
// o índice dois meses começam do ZERO

const data = new Date(2023, 5, 15, 59, 500);




const data2 = new Date("2023-06-14 15:45:05");
console.log(data.toString());
console.log(data2);

// PODE FAZER DIRETO:

console.log("Dia:", data2.getDate());
console.log("Mês:", data2.getMonth());
console.log("Ano:", data2.getFullYear());
console.log("Hora:", data.getHours());
console.log("Minutos:", data2.getMinutes());
console.log("Segundos:", data2.getSeconds());
console.log("Milissegundos:", data2.getMilliseconds());
console.log("Dia da Semana:", data2.getDay());


// FUNÇÃO QUE FORMATA DATA:

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data3) {
    const dia = zeroAEsquerda(data3.getDate());
    const mes = zeroAEsquerda(data3.getMonth() + 1);
    const ano = zeroAEsquerda(data3.getFullYear());
    const hora = zeroAEsquerda(data3.getHours());
    const min = zeroAEsquerda(data3.getMinutes());
    const seg = zeroAEsquerda(data3.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data3 = new Date();
const dataBrasil = formataData(data3);
console.log(dataBrasil);
