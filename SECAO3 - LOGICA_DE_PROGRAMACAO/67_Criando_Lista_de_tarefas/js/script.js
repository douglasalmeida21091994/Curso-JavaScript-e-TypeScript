
const inputTarefa = document.querySelector("#input-nova-tarefa")
const button = document.querySelector(".btn-add-tarefa");
const lista = document.querySelector(".tarefas");

//criando uma li
function criaLi() {
    const li = document.createElement("li");
    return li;
}

// pegando a tecla pressionada
inputTarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

// função para limpar
function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += " "; // pra dar um espaço entre eles
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar";
    // botaoApagar.classList.add("apagar");  Porém, não farei dessa forma para adicionar uma class no bottão criado, farei da seguinte forma:
    botaoApagar.setAttribute("class", "apagar"); // dessa forma é "melhor"
    botaoApagar.setAttribute("title", "Apagar esta tarefa"); // posso colocar também um título
    li.appendChild(botaoApagar);
}

// add o valor dentro de uma lista
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    lista.appendChild(li);
    limpaInput();
    criaBotaoApagar(li)
    salvaTarefas();
}

// pegando o valor do input
button.addEventListener("click", function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

// excluindo o botão de apagar
document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("apagar")) {
        el.parentElement.remove();
        // console.log(el.parentElement); olhando o pai do elemento
        salvaTarefas()
    }
});

function salvaTarefas() {
    const liTarefas = lista.querySelectorAll("li");
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        const tarefaTexto = tarefa.cloneNode(true); // Clona o elemento para evitar alterar o original

        const botaoApagar = tarefaTexto.querySelector(".apagar");
        if (botaoApagar) {
            botaoApagar.remove(); // Remove o botão "Apagar" do clone
        }

        const textoSemApagar = tarefaTexto.innerHTML.trim(); // Obtém o texto sem espaços extras
        listaDeTarefas.push(textoSemApagar);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // convertendo para string
    localStorage.setItem("tarefas", tarefasJSON); // salvando (só pode salvar string)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas) // revertendo para ARRAY

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()