// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
const prompt = require('readline-sync')

const celsius = Number(prompt.question("Qual a temperatura em Celsius?")) // entrada de dados
const fahrenheit = conversorCToF(celsius) // declarando função em variável para exibir

function conversorCToF(c) { // função para converter
    return (c*9/5) + 32
}

console.log(`A temperatura em fahrenheit é de: ${fahrenheit}° graus.`) // exibindo para o usuário
