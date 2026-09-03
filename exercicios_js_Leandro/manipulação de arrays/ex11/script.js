const numeros =[12,7,25,8,31,14,19,4,22,9]

const numerosImpares = [], numerosPares = [];

let somaImpares = 0, somaPares = 0, media = 0;

numeros.forEach(valor => {
    if (valor % 2 == 0) {
        numerosPares.push(valor);
        somaPares += valor;
    } else {
        numerosImpares.push(valor);
        somaImpares += valor;
    }
})

media = (somaImpares + somaPares) / numeros.length;

console.log("Números ímpares: " + numerosImpares);
console.log("Números pares: " + numerosPares);
console.log("Soma dos números ímpares: " + somaImpares);
console.log("Soma dos números pares: " + somaPares);
console.log("Média dos números: " + media);
