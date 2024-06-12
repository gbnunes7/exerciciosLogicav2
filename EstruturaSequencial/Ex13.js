//João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
const prompt = require('readline-sync')

const kgPermitido = 50 // variavel de kg permitido por dia
const valorPerKgExcedido = 4 // multa de valor por KG excedido

const pesoPescado = Number(prompt.question("Quantos KG pescou hoje?")); // entrada de dados para KG pescado
const pesoExcedente = pesoPescado - kgPermitido; // peso excedente
const multa = calculaMulta(); // função da multa

function calculaMulta() {
    return (pesoExcedente * valorPerKgExcedido).toFixed(2);
}

if(pesoExcedente <= 0) { // verificação se pescou mais ou menos que o permitido
    console.log ("Não excedeu o peso permitido."); 
} else {
    console.log(`Você excedeu ${pesoExcedente} kgs de peixe, e tera que pagar uma multa de R$${multa}.`)
}


