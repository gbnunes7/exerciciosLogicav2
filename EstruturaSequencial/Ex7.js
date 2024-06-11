//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const prompt = require("readline-sync")


const valorHora = Number(prompt.question("Quanto você ganha por hora?"));
const horasTrabalhadasMes = Number(prompt.question("Quantas horas você trabalhou no mês"));

function salarioMensal() {
    return valorHora * horasTrabalhadasMes
}

console.log(`Seu salário mensal nesse mês é de: ${salarioMensal()}`)