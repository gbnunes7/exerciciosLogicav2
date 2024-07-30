function binarySearch(arr,n){
    let start = 0
    let end = arr.length -1
    let middle = Math.floor((start+end)/2)

    while (start <= end) {
        middle = Math.floor((start+end)/2)
        let chute = arr[middle]
        if(chute === n) {
            return middle
        } else if(chute > n) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return null
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],10))