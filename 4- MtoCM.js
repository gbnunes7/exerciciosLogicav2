// Faça um Programa que converta metros para centímetros.

const prompt = require('readline-sync') // biblioteca para entrada de usuário por meio do node.js
const metros = Number(prompt.question("Quantos metros você deseja converter?")) 

function mToCm(m) {
    const centimetros = m * 100
    return centimetros
}

console.log(`${metros} metros, é igual a ${mToCm(metros).toFixed(2)} centimetros.`)