// Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
const prompt = require('readline-sync') 

const raio = Number(prompt.question("Qual o raio do circulo?"))
let unidade = prompt.question("Qual a unidade? Cm/M") 
unidade.toLowerCase() == "cm" ? unidade = "cm" : unidade = "m" 

function areaCirculo(r) {
    return (Math.PI.toFixed(2)) * (Math.pow(r, 2))
}

console.log(`A área do circulo é ${areaCirculo(raio)} ${unidade}².`)

