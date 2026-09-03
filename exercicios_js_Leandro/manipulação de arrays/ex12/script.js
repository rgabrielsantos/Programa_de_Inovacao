const notas = [7.5, 4.0, 9.2, 6.8, 3.5, 8.7, 5.0, 9.8, 6.0, 4.7];

let aprovadas = [], reprovadas = [];
let maior = notas[0], menor = notas[0];

let soma = 0;

notas.forEach(valor => {
    if (valor >= 6.0) {
        aprovadas.push(valor);
    } else {
        reprovadas.push(valor);
    }

    if (valor > maior) {
        maior = valor;
    }

    if(valor < menor) {
        menor = valor;
    }
    soma += valor;
})

let media = soma / notas.length;

console.log("Notas aprovadas: " + aprovadas);
console.log("Notas reprovadas: " + reprovadas);
console.log("Maior nota: " + maior);
console.log("Menor nota: " + menor);
console.log("Média da turma: " + media);
console.log("Quantidade de aprovados: " + aprovadas.length);
console.log("Quantidade de reprovados: " + reprovadas.length);
