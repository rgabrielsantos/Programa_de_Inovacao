/**
 * Questão 5
 * Uma empresa recebeu os seguintes cargos:
 * let cargos = ["Desenvolvedor","DESIGNER","programador","ANALISTA","desenvolvedor"];
 * 
 * Crie um novo array chamado cargosTratados utilizando map().
 * 1.remover os espaços;
 * 2.ficar completamente em letras minúsculas
 * 3.substituir "desenvolvedor" por "programador"
 */

let cargos = ["Desenvolvedor","DESIGNER","programador","ANALISTA","desenvolvedor"];

let cargosTratados = cargos.map(cargo => {
    let aux = cargo.trim().toLocaleLowerCase();
    if(aux == "desenvolvedor"){
        aux = "programador";
    }
    return aux;
});

console.log(cargosTratados);

