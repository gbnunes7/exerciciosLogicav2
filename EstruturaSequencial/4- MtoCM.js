// Faça um Programa que converta metros para centímetros.

const prompt = require('readline-sync') // biblioteca para entrada de usuário por meio do node.js
const metros = Number(prompt.question("Quantos metros você deseja converter?")) 

function mToCm(m) { // função para fazer a conversão
    const centimetros = m * 100
    return centimetros // sempre retornar o valor
}

console.log(`${metros} metros, é igual a ${mToCm(metros)} centimetros.`) // exibir no console