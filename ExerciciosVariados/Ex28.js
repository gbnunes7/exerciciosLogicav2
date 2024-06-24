// Filtrar Números Positivos 

const x = [1,4,2,5,-5,-2,-7,6]

function filterNum(array) {
    return array.filter((numeros) => numeros > 0)
}

console.log(filterNum(x))