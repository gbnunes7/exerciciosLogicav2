// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre: o produto do dobro do primeiro com metade do segundo . a soma do triplo do primeiro com o terceiro. o terceiro elevado ao cubo.

const prompt = require('readline-sync');

const numero1 = Number(prompt.question("Qual o valor do primeiro número?")); //entrada de dado do usuário
const numero2 = Number(prompt.question("Qual o valor do segundo número?")); //entrada de dado do usuário
const numero3 = problemaA(numero1,numero2) // declarando variavel número 3

function problemaA(numero1,numero2) { // função para declarar numero 3
    return (2*numero1) * (numero2/2)
}

function problemaB(numero1,numero3) { // função para problema B
    return (3*numero1) + numero3
}

function problemaC(numero3) { // função para problema C
    return Math.pow(numero3,3)
}

console.log(`Número do problema A: ${numero3}. Número do problema B: ${problemaB(numero1,numero3)}. Número do problema C: ${problemaC(numero3)}.`)