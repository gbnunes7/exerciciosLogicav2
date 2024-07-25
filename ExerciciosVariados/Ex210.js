var largestNumber = function(nums) {
    return nums.toString().split("").sort().reverse().join("").replaceAll(",","")
    
};

console.log(largestNumber([3,30,34,5,9]))