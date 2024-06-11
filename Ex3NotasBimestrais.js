const prompt = require('readline-sync')
// Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const notas = [] // Array de Notas
let limitador = true // Limitador do Loop 

while(limitador) { // loop caso limitador seja true
    const nota = Number(prompt.question("Qual foi a nota bimestral?")) // nota a ser inserida
    notas.push(nota) // inserindo nota para o array
    const continuar = prompt.question("Deseja continuar inserindo?") // variavel para declarar se continua ou não
    if(continuar.toLowerCase() !== "sim") { // condicional para decisao se continua botando nota ou não
        limitador = false // se não, limitador igual false e acaba com o loop
    }
}

const notasSomadas = notas.reduce((acumulador, valorAtual) => { // expressão da biblioteca Math para somar todos valores de um array
    return acumulador + valorAtual;
  }, 0);
  
const media = (notasSomadas / notas.length).toFixed(2)

console.log(`A sua media é de: ${media}`)