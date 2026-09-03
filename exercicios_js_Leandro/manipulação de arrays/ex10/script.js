const precos = [100, 250, 80, 150, 300];
const precosComDesconto = [];

for (let i = 0; i < precos.length; i++) {
    precosComDesconto.push(precos[i] * 0.9);
}

console.log(precosComDesconto);
