// Verificar número primo:
// Escreva um programa que verifique se um número digitado pelo usuário é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

const n = 10

function ePrimo(n) {
    return n % 1 === 0 && n % n === 0 ? "Primo" : "Não é primo"
}

console.log(ePrimo(n))