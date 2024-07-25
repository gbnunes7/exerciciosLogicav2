var singleNumber = function(nums) {
    const counts = {};
    let unique = 0
    for(const num of nums) {
        counts[num] = (counts[num] || 0) + 1
    }
    for(const num in counts) {
        if(counts[num] === 1) {
            unique = num
        }

    }
    return unique
}
console.log(singleNumber([1,1,2,2,3]))
