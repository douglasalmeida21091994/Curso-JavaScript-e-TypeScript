
// 74. Funções imediatas (IIFE) 

// FUNÇÕES AUTO-INVOCADAS QUANDO É CRIADA


/* FUNCÇÃO FICA SEM NOME E ELA É EXECUTADA AUTOMATICAMENTE DA FORMA ABAIXO: */
(function() {
    const nome = "Douglas";
    console.log(nome);
})();

// TUDO QUE ESTIVER DENTRO DO ESCOPO DA MINHA FUNÇÃO ESTARÁ PROTEGIDO, OU SEJA, NÃO ESTARÁ NO ESCOPO GLOBAL.

(function(idade, peso, altura) {
    const sobrenome = "Almeida";

    function criaNome(nome) {
        return nome + " " + sobrenome + ", " + idade + ", " + peso + ", " + altura;
    }

    function falaNome() {
        console.log(criaNome("Douglas"))
    }

    falaNome();

})("28 anos", "90Kg", 1.71);



