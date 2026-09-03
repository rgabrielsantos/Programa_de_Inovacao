const funcionarios = ["ana", "carlos", "mariana", "joão", "beatriz"];

function paraMaiusculas(array) {
    return array.map(valor => valor.toUpperCase());
}

console.log(funcionarios);
console.log(paraMaiusculas(funcionarios));
