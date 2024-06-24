// Soma de Números Naturais

function somaNumeros(array) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue,0)
}

const arr = [1,4,2,5,2,1,5,2,4]

console.log(somaNumeros(arr))