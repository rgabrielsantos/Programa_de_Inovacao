const input = document.querySelector("#nome");
const btn7 = document.querySelector("#enviar");
const saida = document.querySelector("#resultado");
const nomes = [];

btn7.addEventListener("click", () => {
    nomes.push(input.value);

    saida.textContent = `Índice ${nomes.length}: ${input.value}`;
});

