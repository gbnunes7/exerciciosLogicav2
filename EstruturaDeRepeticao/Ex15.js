// A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.

function fibonacci(n) {
if (n <= 1) return n

return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(5))