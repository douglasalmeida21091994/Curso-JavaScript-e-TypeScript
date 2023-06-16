
// 53. Exercícios com for

const elemntos = [
    {tag: 'p', texto: 'Criando parágrafo'},
    {tag: 'article', texto: 'Criando article'},
    {tag: 'section', texto: 'Criando section'},
    {tag: 'footer', texto: 'Criando footer'}
];

const container = document.querySelector(".container"); // selecionando meu container
const div = document.createElement("div"); // criando uma DIV

for (i = 0; i < elemntos.length; i++) {
    let {tag, texto} = elemntos[i];
    let criaTag = document.createElement(tag);
    criaTag.innerHTML = texto;  // poderia ser também: criaTag.innerText = texto; 
    div.appendChild(criaTag);    
}

container.appendChild(div);


