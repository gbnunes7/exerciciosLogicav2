// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const prompt = require("readline-sync")

const altura = Number(prompt.question("Digite sua altura em m.")) // entrada de dados

function pesoIdeal(alt) { // function
    return ((72.7 * alt) - 58).toFixed(2)
} 

console.log(`Seu peso ideal é de: ${pesoIdeal(altura)}kg.`) // saida de dados
