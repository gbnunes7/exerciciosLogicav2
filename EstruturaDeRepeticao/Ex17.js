// Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário. Ex.: 5!=5.4.3.2.1=120

function fatorial(n) {
    if (n === 0) {
        return 1 // caso de base
    }
    return n * fatorial(n-1)
}

console.log(fatorial(5))