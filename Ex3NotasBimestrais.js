const prompt = require('readline-sync')
// Faça um Programa que peça as 4 notas bimestrais e mostre a média.

const notas = []
let limitador = true

while(limitador) {
    const nota = Number(prompt.question("Qual foi a nota bimestral?"))
    notas.push(nota)
    const continuar = prompt.question("Deseja continuar inserindo?")
    if(continuar.toLowerCase() !== "sim") {
        limitador = false 
    }
}

const notasSomadas = notas.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);
  
const media = (notasSomadas / notas.length).toFixed(2)

console.log(`A sua media é de: ${media}`)