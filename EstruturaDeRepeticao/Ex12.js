// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:

const prompt = require('readline-sync')

let numero = Number(prompt.question("Qual número entre 1 e 10?"))

if (numero < 0 || numero > 10) {
    console.log("Escolha um número entre 1 e 10")
    return
} 

    for(let i = 0 ; i <= 10 ; i++) {
        console.log( i * numero)
    }


