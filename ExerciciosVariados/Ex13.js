// Conversão de temperatura:
// Crie um programa que converta uma temperatura digitada pelo usuário de Celsius para Fahrenheit e vice-versa, utilizando as fórmulas de conversão apropriadas.

function cToF (c) {
    return ((c*1.8) + 32).toFixed(2)
}

function fToC(f) {
    return ((f-32) / 1.8).toFixed(2)
}


// console.log(cToF(10))

console.log(fToC(100))