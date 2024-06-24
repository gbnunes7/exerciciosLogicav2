// Escreva uma função que retorna o valor máximo e o valor mínimo de um array de números.

function encontrarValorMaxMin(array) {
    let valorMax = array[0] // inicializa do primeiro elemento para comparar todos os seguinteos
    let valorMin = array[0]
    for(let i = 1 ; i < array.length ; i++) {
        if (array[i] > valorMax) {
            valorMax = array[i]
        } 

        if (array[i] < valorMin) {
            valorMin = array[i]
        }
    }

    return [valorMin,valorMax]
}

const n = [11,23,3,4,5,6,7,8,9,10]

console.log(encontrarValorMaxMin(n))