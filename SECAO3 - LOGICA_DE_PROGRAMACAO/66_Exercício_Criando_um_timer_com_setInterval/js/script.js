
// função de segundos:

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000); // vezes mil milissegundos
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "GMT",  // poderia ser: UTC
    })
}

// Selecionando:

const h1 = document.querySelector(".h1")
const relogio = document.querySelector(".relogio");
/* 
 NÃO PRECISO MAIS SELECIONAR DESSA FORMA:

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const resertar = document.querySelector(".resetar"); 

*/

let segundos = 0;
let timer;

// função para inciar

function iniciarReloigio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}


// SELECIONANDO OS BOTÃO E ADICIONANDO O QUE QUERO DA FORMA ABAIXO:

//// PRA NÃO TER VÁRIO addEventListener, POSSO FAZER:  E quando eu faço isso, não preciso mais selecionar os botões com o QUEROSELECTOR, pois já estou selecionando da forma abaixo:

document.addEventListener("click", function (e) {
    // console.log(e.target); // isso me mostra exatamente onde foi clicado
    const elemento = e.target;

    if (elemento.classList.contains("iniciar")) {
        h1.innerHTML = "Time Iniciado";
        relogio.classList.remove('pausado'); // class criado no CSS
        clearInterval(timer);
        iniciarReloigio();
    }

    if (elemento.classList.contains("pausar")) {
        h1.innerHTML = "Time Pausado";
        relogio.classList.add('pausado'); // remove a class que criei no CSS
        clearInterval(timer);  // pra pausar    
    }

    if (elemento.classList.contains("zerar")) {
        relogio.classList.remove("pausado");
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    }

    if (elemento.classList.contains("resetar")) {
        relogio.classList.remove("pausado");
        clearInterval(timer);
        relogio.innerHTML = "00:00:00";
        segundos = 0;
    }
})




///////////////// com o que eu fiz acima, não preciso desses de baixo:

/*

iniciar.addEventListener("click", function (event) {

});

pausar.addEventListener("click", function (event) {


});

zerar.addEventListener("click", function (event) {

});


// o botão abaixo tem a mesma funcionalidade do botão zerar, foi apenas para teste:

resertar.addEventListener("click", function (event) {

})

*/


///////// OBS.: Em caso real, posso adicionar todo o código acima, em um FUNÇÃO, para tirar ela do ESCOPO GLOBAL, e chamar ela para que seja executada. /////////