const prompt = require('readline-sync')
// Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].

const numero = Number(prompt.question("Digite um número."))
console.log(`O número informado foi: ${numero}.`)