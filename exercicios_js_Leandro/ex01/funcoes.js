// // // Questão 1

// // // Crie uma variável chamada nome com o valor: let nome = "MaRiA SiLvA"

// // // faça um console log para:

// // // Remover os espaços extras.

// // // Exibir o nome totalmente em letras minusculas

// // // Exibir o nome totalmente em letras maiúsculas



// // let nome = "    MaRiA SiLvA    ";

// // let nomeFormatado = nome.trim();



// // console.log(nomeFormatado.toUpperCase());

// // console.log(nomeFormatado.toLowerCase());







// // /**

// //  * Questão 2

// //  * Crie a seguinte variável: let frase = "Eu gosto de Java. Java é muito legal."

// //     - Troque apenas a primeira palavra Java por JavaScript

// //     - Depois troque todas as ocorrencias de Java por JavaScript

// //     - Exiba os dois resultados no console.

// // */



// // let frase = "Eu gosto de Java. Java é muito legal."



// // console.log(frase.replace("Java", "JavaScript"));

// // console.log(frase.replaceAll("Java", "JavaScript"));





// // /**

// //  * Questão 3 - Crie um programa que leia uma frase e uma palavra. Em seguida, informe se a palavra está presente na frase utilizando o método mais adequado

// //  * Entrada: frase = "Eu gosto de programação"

// //  *          palavra = "programação"

// //  * Saida: A palavra foi encontrada na frase.

// //  */

// // let fraseQ3 = "Eu gosto de programação";

// // let palavraQ3 = "programação";

// // if (fraseQ3.includes(palavraQ3)) {

// //     console.log("Palavra ENCONTRADA!")

// // } else {

// //     console.log("Palavra NÃO encontrada!")

// // }





// // /**

// //  * Questão 4 - Crie um programa que leia uma frase e uma palavra. Utilize indexOf() para mostrar a posição da primeira ocorrência da palavra na frase. Caso a palavra não exista, exibir a mensagem: "Palavra não encontrada."

// //  *

// //  * Entrada:

// //  *  Frase: Aprender JavaScript é divertido

// //  *  Palavra: JavaScript

// //  * Saida: A palavra começa no índice 9.

// //  */





// // let fraseQ4 = "Aprender JavaScript é divertido";

// // let palavraQ4 = "JavaScript";



// // if (fraseQ4.includes(palavraQ4)) {

// //     console.log("A palavra começa no índice " + fraseQ4.indexOf("JavaScript"));

// // } else {

// //     console.log("Palavra NÃO inicializada!");

// // }





// // /**

// //  * Questão 5 - Crie um programa que leia um endereço de site e verifique se ele começa com "https://" usando o método de string mais adequado

// //  */



// // let url = "https://www.quemsabefazaovivo.com.br";



// // if (url.startsWith("https://")) {

// //     console.log("pode confiar fera!");

// // } else {

// //     console.log("É bucha");

// // }

// // /**

// //  * Questão 6 - Crie um programa que leia o nome de um arquivo e verifique se ele termina com a extensão .pdf

// //  */



// // let ext_arquivo = "bielfotosdesunga.pdf";

// // if(ext_arquivo.endsWith(".pdf")) {

// //     console.log("é um pdf!")

// // } else {

// //     console.log("NÃO é um pdf!")

// // }





// // /**

// //  * Extração e Divisão

// //  * - slice(inicio, fim): extrai uma parte da string do índice inicial até antes do índice final

// //  *

// //  * - split(separador): divide a string em um array de substrings com base no separado enviado.

// //  *

// //  * */



// // let textoTeste = "Olá eu sou um texto de teste";

// // let arrayTexto = textoTeste.split(" ");



// // arrayTexto.forEach((valor,indice) =>{

// //     console.log(`O ${valor} ocupa o índice ${indice}`);

// // })







// /**
//  * QUESTÃO 7 - Formatar Nome
//  * Objetivo: Capitalizar a primeira letra de cada palavra do nome.
//  */
// const nomeQ7 = document.querySelector("#nome-input");
// const btnQ7 = document.querySelector("#btn-formatar-nome");
// const resultadoQ7 = document.querySelector("#exibir");

// btnQ7.addEventListener("click", () => {
//     let nome = nomeQ7.value;
//     // Tira espaços das pontas, joga pra minúsculo e separa cada palavra em um array
//     let arrayNome = nome.trim().toLowerCase().split(" ");

//     arrayNome.forEach((valor, indice) => {
//         if (valor.length > 0) { // Proteção caso existam espaços duplos digitados
//             let primeiraLetra = valor.charAt(0).toUpperCase();
//             arrayNome[indice] = primeiraLetra + valor.slice(1);
//         }
//     });

//     // Junta as palavras do array de volta em uma string (separada por espaço)
//     resultadoQ7.textContent = arrayNome.join(" ");
// });


// /**
//  * QUESTÃO 8 - Detector de Spoiler
//  * Objetivo: Encontrar a palavra exata "spoiler" na frase.
//  */
// const frase = document.querySelector("#inputFrase");
// const btnQ8 = document.querySelector("#btn-enviar");
// const resultadoQ8 = document.querySelector("#saida");

// btnQ8.addEventListener("click", () => {
//     let arrayFrase = frase.value.toLowerCase().split(" ");
//     let encontrado = false;

//     arrayFrase.forEach(valor => {
//         if (valor === "spoiler") encontrado = true;
//     });

//     if (!encontrado) {
//         resultadoQ8.textContent = "Ufa, tudo limpo!";
//     } else {
//         resultadoQ8.textContent = "Cuidado, a frase contém spoiler";
//     }
// });


// /**
//  * QUESTÃO 9 - Limpador de CPF
//  * Objetivo: Remover qualquer caractere que não seja número.
//  */
// const inputCPF = document.querySelector("#inputCampo");
// const btnQ9 = document.querySelector("#btn-cpf");
// // Elemento criado no HTML para poder mostrar a resposta na tela, não só no console
// const resultadoQ9 = document.querySelector("#saida-cpf");

// btnQ9.addEventListener("click", () => {
//     // A Regex \D encontra TUDO que NÃO for um dígito (0-9) e substitui por nada ("")
//     let cpf = inputCPF.value.replace(/\D/g, "");

//     console.log(cpf);
//     resultadoQ9.textContent = cpf; // Exibe na tela
// });


// /**
//  * QUESTÃO 10 - Separador de Frutas
//  * Objetivo: Limpar caracteres especiais/números e exibir cada fruta em uma linha.
//  */
// const inputFruta = document.querySelector("#inputFruta");
// const btnQ10 = document.querySelector("#btn-fruta");
// const paragrafo = document.querySelector("#resultado-fruta");

// btnQ10.addEventListener("click", () => {
//     // 1. Regex [^a-zA-zA-ÿ,\s]: Remove tudo que for diferente (^) de letras, vírgulas e espaços
//     let textoLimpo = inputFruta.value.replace(/[^a-zA-zA-ÿ,\s]/g, "");

//     // 2. Transforma em array quebrando o texto onde houver vírgula
//     let arrayFrutas = textoLimpo.split(",");

//     // 3. Limpa os espaços residuais do início e fim de cada fruta (trim) e remove as vazias
//     let frutasFormatadas = arrayFrutas
//         .map(fruta => fruta.trim())
//         .filter(fruta => fruta !== "");

//     // 4. Junta tudo com a tag <br> e usa innerHTML (textContent não processa tags HTML)
//     paragrafo.innerHTML = frutasFormatadas.join("<br>");
// });


