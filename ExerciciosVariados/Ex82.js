function mergeArrays(arr1, arr2) {
    
    const arrMerged = arr1.concat(arr2).sort((a,b) => a - b)
    const removeDuplicates = new Set()
    for(let el of arrMerged) {
        removeDuplicates.add(el)
    }
    return Array.from(removeDuplicates)
    }

    console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]))