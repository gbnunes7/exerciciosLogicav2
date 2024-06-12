// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: para homens: (72.7*h) - 58 para mulheres: (62.1*h) - 44.7

const prompt = require('readline-sync');

const altura = Number(prompt.question("Qual a sua altura em M?")); // entrada de dado altura
const sexo = prompt.question("Qual seu sexo? M ou F.").toLowerCase(); // entrada de dado sexo, em letra minuscula para facilitar comparação
const resultado = pesoIdeal(altura,sexo) // declarando função em uma variavel

function pesoIdeal(alt,sexo) { // função do peso ideal, com condições para mulheres, homens e erro.
    
    if(sexo !== "f" && sexo !== "m" ) { // validação se o sexo está certo.
      return "Erro, sexo inválido"
    } 
    
    if(sexo === "m") {
        return ((72.7*alt) - 58).toFixed(2);
    } else {
        return ((62.1*alt) - 44.7).toFixed(2);
    }
}

console.log(`Seu peso ideal é de: ${resultado}`) // saida de dados