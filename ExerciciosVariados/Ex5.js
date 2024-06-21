// Escreva uma função chamada fibonacci que, dado um número n, retorna o n-ésimo número da sequência de Fibonacci.

function fib(n) {
    if(n < 1) return 0
    if (n < 2) return 1

    return fib(n - 1) + fib(n-2)
}

console.log(fib(10))