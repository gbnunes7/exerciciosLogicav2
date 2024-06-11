//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const prompt = require("readline-sync")


const valorHora = Number(prompt.question("Quanto você ganha por hora?")); //entrada de dados do usuário
const horasTrabalhadasMes = Number(prompt.question("Quantas horas você trabalhou no mês"));//entrada de dados do usuário

function salarioMensal() { //função para descobrir salario mensla
    return valorHora * horasTrabalhadasMes
}

console.log(`Seu salário mensal nesse mês é de: R$${salarioMensal()}`) // exibindo salário mensal