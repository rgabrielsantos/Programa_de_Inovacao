/**
 * Questão 6
 * Um usuário digitou vários nomes em um único campo:
 * let entrada = "Ana,Carlos,Mariana,João,Beatriz";
 * 1.separe os nomes por vírgulas;
 * 2.remover os espaços no início e fim do nome;
 * 3.utilize map() para deixar todos os nomes maiúsculos.
 * 4.exibir o novo array formatado
 */

 let entrada = " Ana, Carlos, Mariana,João ,Beatriz ";

let novaEntrada = entrada.split(",");
let semEspacos = novaEntrada.map(valor =>{
    return valor.trim().toUpperCase();
})

console.log(semEspacos);



