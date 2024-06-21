// Escreva uma função chamada factorial que calcule o fatorial de um número inteiro positivo de forma recursiva.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }

    return n* fatorial(n-1)
}

console.log(fatorial(5))