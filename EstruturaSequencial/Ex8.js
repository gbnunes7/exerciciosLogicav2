// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
const prompt = require("readline-sync")

const fahrenheit = prompt.question("Qual a temperatura em Fahrenheit?") // entrada de usuário temperatura f
const celsius = conversorFToC(fahrenheit) // declarando a função em uma variável celsius

function conversorFToC(f) { // função para converter
    return 5 * ((f-32)/9)
}

console.log(`A temperatura em Celsius é de: ${celsius.toFixed(2)}° graus.`) // Exibindo ao usuário