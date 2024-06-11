// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const prompt = require('readline-sync')

function areaQuadrado(l) {
    return Math.pow(l,2)
}

const lado = Number(prompt.question("Qual o lado desse quadrado?"))
const resultado = areaQuadrado(lado) * 2

console.log(`O dobro da área do quadrado é: ${resultado}.`)
