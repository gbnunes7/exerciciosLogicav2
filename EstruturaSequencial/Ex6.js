// Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const prompt = require('readline-sync')

function areaQuadrado(l) { // function para área do quadrado
    return Math.pow(l,2) // biblioteca Math para Potenciação
}

const lado = Number(prompt.question("Qual o lado desse quadrado?")) // perguntando lado pro usuário
const resultado = areaQuadrado(lado) * 2 // dobro da área

console.log(`O dobro da área do quadrado é: ${resultado}.`) // exibindo usuário
