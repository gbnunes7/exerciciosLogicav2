function removeSmallest(numbers) {
    if(numbers.length === 0){
        return []
    }
    const set = new Set(numbers)
    const min = Math.min(...set)
    set.delete(min)
    
    
    return Array.from(set)
}
console.log(removeSmallest([1, 2, 2, 3, 4, 5]))