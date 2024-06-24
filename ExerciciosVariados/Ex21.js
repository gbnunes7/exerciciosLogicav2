// Encontrar Número de Elementos Pares

function numerosPares(array) {
    let numeroPar = 0
    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] % 2 === 0) {
            numeroPar++
        }
    }
    return numeroPar
}

const array = [1,4,2,6,6,7,23,31,42,1,4,32,2]

console.log(numerosPares(array))