// Fatorial de um número:
// Escreva um programa que calcule o fatorial de um número. O fatorial de um número 
// 𝑛
// n é o produto de todos os inteiros positivos menores ou iguais a 
// 𝑛
// n.

function fatorial(n) {
    if (n === 0 || n === 10) {
        return 1
    }

    return n * fatorial (n-1)
}

console.log(fatorial(5))