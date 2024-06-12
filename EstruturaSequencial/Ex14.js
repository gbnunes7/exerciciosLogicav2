//Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:salário bruto.quanto pagou ao INSS.quanto pagou ao sindicato.o salário líquido.calcule os descontos e o salário líquido, conforme a tabela abaixo

const prompt = require('readline-sync')

const valorHora = Number(prompt.question("Quanto você ganha por hora?")); //entrada de dados valorHora
const horasTrabalhadas = Number(prompt.question("Quantas horas você trabalhou esse mês?")); // entrada de dados Horas Trabalhadas
const salarioMensal = Number(valorHora*horasTrabalhadas) // salario mensal

function salarioLiquido() {
    return Number(salarioMensal - ((salarioMensal*0.11) + (salarioMensal*0.08) + (salarioMensal*0.05))) // lógica de desconto
}

console.log(`Seu salário esse mês será de: R$${salarioLiquido()}`) // saida de dados