/**
 * Questão 1:
 */

//Declaração de constantes
const inputNome = document.querySelector("#nome");
const btnEnviar = document.querySelector("#btn");
const exibir = document.querySelector("#exibirNome");
const arrayNome = [];

//Eventos
btnEnviar.addEventListener("click", () => {
//Declaração de variaveis
    let nome = inputNome.value;
    arrayNome.push(normalizarNome(nome));
    exibir.textContent = arrayNome;

})

//Funções
function normalizarNome(nome) {
    let auxNome = nome.trim().split(" ");
    let nomeFormatado = auxNome.map(valor => {
        let primeiraLetra = valor.charAt(0).toUpperCase();
        let restanteNome = valor.slice(1).toLowerCase();
        return primeiraLetra + restanteNome;
    })
    return nomeFormatado.join(" ");
}

//Questão 2
//Declaração de constantes
const categorias = document.querySelector("#categoria");
const btnFiltrar = document.querySelector("#selecao");
const exibirFiltragem = document.querySelector("#resultadoFiltragem");
//Evento
btnFiltrar.addEventListener("click", ()=>{
    let opcao = categorias.value;
    filtrando(opcao);



})


//Função
function filtrando(opcao){
let imagem;
if(opcao == "eletronico"){
    exibirFiltragem.innerHTML = '<img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell/dc14250/mg/plastic/sl/fpr/laptop-dc14250nt-fpr-plastic-intel-sl-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&wid=3395&hei=2836&qlt=100,1&resMode=sharp2&size=3395,2836&chrss=full&imwidth=5000" alt="imagem de um notebook">';

} else if(opcao == "movel"){

} else {

}
}