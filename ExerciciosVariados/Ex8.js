// Calculadora básica:
// Crie um programa que permita ao usuário digitar dois números e escolher entre as operações de soma, subtração, multiplicação ou divisão. O programa deve então exibir o resultado da operação escolhida.

const n1 = 50
const n2 = 10
const operacao = "*"
let resultado = 0
function calculadora(n1,n2, operacao) {
    switch(operacao) {
        case "+":
            resultado = n1 + n2
            break
        case "-":
            resultado = n1 - n2
            break
        case "/":
            resultado = n1 / n2
            break
        case "*":
            resultado = n1*n2
            break
        default:
            console.log("Operação errada")
            return
    }
    return resultado
}

console.log(calculadora(n1,n2,operacao))
