//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
    if (!array || array.length === 0 || array.length === 1) {
        return 0;
    }
    let valorMin = array[0]
    let valorMax = array[0]

    for(let i = 1 ; i < array.length ; i++) {
        if(array[i])
        if (valorMin < array[i]) {
            valorMin = array[i]
        } 
        if (valorMax > array[i]) {
            valorMax = array[i]
        }
    }
    
    return array.reduce((accumulator,currentvalue) => accumulator+currentvalue, - valorMin - valorMax) 
}
   

console.log(sumArray([ 6, 2, 1, 8, 10 ]))