

function meuEscopo() {
    const form = document.querySelector(".form");    // para SELECIONAR class ou ID em HTML ==> ("form") ou (".form") ou se fosse um ID -> ("#form")  
    const resultado = document.querySelector(".resultado");

    const pessoa = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); // PARA NÃO ATUALIZAR A PÁGINA

        const nome = form.querySelector(".inome");
        const sobrenome = form.querySelector(".isobrenome");
        const peso = form.querySelector(".ipeso");
        const altura = form.querySelector(".ialtura");

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoa);
    
        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p><br />`;

    }

    form.addEventListener("submit", recebeEventoForm);

}

meuEscopo();

























/////////////////////////////////////////////



/* DEIXAREI COMENTADO, E FAREI UM RECURSO MAIS MODERNO:

    form.onsubmit = function(evento) {
        evento.preventDefault(); // nesse evento não carregará mais a página, ou seja, não dará mais erro! || Mostrará meu alert e meu console.log
        alert("Formulário enviado com sucesso!");
        console.log("Obrigado pelo envio");
    };
    */

    // Mais moderno: