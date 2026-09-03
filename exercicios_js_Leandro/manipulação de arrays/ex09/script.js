const numeros = [3, 8, 12, 5, 7, 10, 15, 20];

numeros.forEach((valor, indice) => {
    if (valor % 2 == 0) {
        console.log(`O número ${valor} é par e está no índice ${indice}`);
    }
})
