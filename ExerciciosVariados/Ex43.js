// remova duplicatas

function removeDuplicates(arr) {
    const removeDuplicates = new Set()
    for(let el of arr) {
        removeDuplicates.add(el)
    }
    return removeDuplicates
}

console.log(removeDuplicates(["apple", "banana", "apple", "orange"]))