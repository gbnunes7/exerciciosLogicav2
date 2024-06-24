// Média de um Array

function mediaArray(array) {
    const soma = array.reduce((accumulator,currentValue) => accumulator + currentValue,0)
    return (soma / array.length).toFixed(2)

}

const array = [1,2,3,4,5,6,7,1,2532,5,23,5,3]

console.log(mediaArray(array))