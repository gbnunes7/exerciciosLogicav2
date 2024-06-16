// Faça um Programa que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:
// par ou ímpar;
// positivo ou negativo;
// inteiro ou decimal.

const prompt = require('readline-sync')

const operador = prompt.question("Escolha um operador.");
const n1 = Number(prompt.question("Escolha o primeiro valor."));
const n2 = Number(prompt.question("Escolha o segundo valor."));
let numeroPosOperacao = 0;


console.log(operacao(operador,n1,n2))

const inteiro = numeroPosOperacao > 0 ? "Positivo" : "Negativo"
const parOuImpar = numeroPosOperacao % 2 === 0 ? "Par" : "Ímpar"
const inteiroOuDecimal = numeroPosOperacao.toString().includes('.') ? "Decimal" : "Inteiro"

console.log(inteiro, parOuImpar, inteiroOuDecimal)

function operacao(operador,n1,n2) {
    switch(operador) {
        case "soma":
        case "+":
            numeroPosOperacao = Number(n1 + n2);
            break;
        case "subtração":
        case "subtracao":
        case "-":
            numeroPosOperacao = Number(n1 - n2);
            break;
        case "multiplicação":
        case "multiplicacao":
        case "*":
            numeroPosOperacao = Number(n1 * n2);
            break;
        case "divisão":
        case "divisao":
        case "/":
            numeroPosOperacao = Number(n1 / n2);
            break;
        default:
            console.log("Erro, escolha operação correta");
            return; // 
    }    
    return numeroPosOperacao.toFixed(2)
}


