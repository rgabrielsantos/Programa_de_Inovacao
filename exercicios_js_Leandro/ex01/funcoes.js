// // Questão 1
// // Crie uma variável chamada nome com o valor: let nome = "MaRiA SiLvA"
// // faça um console log para:
// // Remover os espaços extras.
// // Exibir o nome totalmente em letras minusculas
// // Exibir o nome totalmente em letras maiúsculas

// let nome = "    MaRiA SiLvA    ";
// let nomeFormatado = nome.trim();

// console.log(nomeFormatado.toUpperCase());
// console.log(nomeFormatado.toLowerCase());



// /**
//  * Questão 2
//  * Crie a seguinte variável: let frase = "Eu gosto de Java. Java é muito legal."
//     - Troque apenas a primeira palavra Java por JavaScript
//     - Depois troque todas as ocorrencias de Java por JavaScript
//     - Exiba os dois resultados no console.
// */

// let frase = "Eu gosto de Java. Java é muito legal."

// console.log(frase.replace("Java", "JavaScript"));
// console.log(frase.replaceAll("Java", "JavaScript"));


// /**
//  * Questão 3 - Crie um programa que leia uma frase e uma palavra. Em seguida, informe se a palavra está presente na frase utilizando o método mais adequado
//  * Entrada: frase = "Eu gosto de programação"
//  *          palavra = "programação"
//  * Saida: A palavra foi encontrada na frase.
//  */
// let fraseQ3 = "Eu gosto de programação";
// let palavraQ3 = "programação";
// if (fraseQ3.includes(palavraQ3)) {
//     console.log("Palavra ENCONTRADA!")
// } else {
//     console.log("Palavra NÃO encontrada!")
// }


// /**
//  * Questão 4 - Crie um programa que leia uma frase e uma palavra. Utilize indexOf() para mostrar a posição da primeira ocorrência da palavra na frase. Caso a palavra não exista, exibir a mensagem: "Palavra não encontrada."
//  *
//  * Entrada:
//  *  Frase: Aprender JavaScript é divertido
//  *  Palavra: JavaScript
//  * Saida: A palavra começa no índice 9.
//  */


// let fraseQ4 = "Aprender JavaScript é divertido";
// let palavraQ4 = "JavaScript";

// if (fraseQ4.includes(palavraQ4)) {
//     console.log("A palavra começa no índice " + fraseQ4.indexOf("JavaScript"));
// } else {
//     console.log("Palavra NÃO inicializada!");
// }


// /**
//  * Questão 5 - Crie um programa que leia um endereço de site e verifique se ele começa com "https://" usando o método de string mais adequado
//  */

// let url = "https://www.quemsabefazaovivo.com.br";

// if (url.startsWith("https://")) {
//     console.log("pode confiar fera!");
// } else {
//     console.log("É bucha");
// }
// /**
//  * Questão 6 - Crie um programa que leia o nome de um arquivo e verifique se ele termina com a extensão .pdf
//  */

// let ext_arquivo = "bielfotosdesunga.pdf"; 
// if(ext_arquivo.endsWith(".pdf")) {
//     console.log("é um pdf!")
// } else {
//     console.log("NÃO é um pdf!")
// }


// /**
//  * Extração e Divisão
//  * - slice(inicio, fim): extrai uma parte da string do índice inicial até antes do índice final
//  * 
//  * - split(separador): divide a string em um array de substrings com base no separado enviado.
//  * 
//  * */

// let textoTeste = "Olá eu sou um texto de teste";
// let arrayTexto = textoTeste.split(" ");

// arrayTexto.forEach((valor,indice) =>{
//     console.log(`O ${valor} ocupa o índice ${indice}`);
// })



/**
 * Questão 7
 * criar um input e pegar o valor desse input e retornar o nome formatado independente de como for preenchido
 */
const nomeQ7 = document.querySelector("#nome-input");
const btnQ7 = document.querySelector("#btn-formatar-nome");
const resultado = document.querySelector("#exibir");


btnQ7.addEventListener("click",()=>{

    let nome = nomeQ7.value;
    let arrayNome = nome.trim().toLowerCase().split(" ");

    arrayNome.forEach((valor,indice) =>{
        let primeiraLetra = valor.charAt(0).toUpperCase();
        arrayNome[indice] = primeiraLetra + valor.slice(1);
    })

    resultado.textContent = arrayNome.join(" ");
})






















































































// let textoMinusculo = "esse texto eh maiusculo";
// let texto_Maiusculo = textoMinusculo.toUpperCase();

// console.log(texto_Maiusculo);

