// Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido

const prompt = require("readline-sync")

let nota = Number(prompt.question("Digite uma nota."))

while (isNaN(nota)) {
    console.log("valor inválido")
    nota = Number(prompt.question("Digite uma nota."))
}