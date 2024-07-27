var largestNumber = function(nums) {
    nums.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA).localeCompare(strA + strB);
    });

    const result = nums.join('');
    
    // Se o maior número for "0", isso significa que todos os números eram zero
    return result[0] === '0' ? '0' : result;
};

console.log(largestNumber([3,30,34,5,9]))